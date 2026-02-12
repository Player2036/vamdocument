import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_BODY_SIZE = 10 * 1024; // 10KB
const MAX_NAME = 100;
const MAX_PHONE = 50;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= MAX_EMAIL;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false },
        { status: 429 }
      );
    }

    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_SIZE) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const body = JSON.parse(rawBody);

    if (typeof body !== 'object' || body === null) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const { name, phone, email, message, company } = body;

    if (company && String(company).trim()) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string'
    ) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const nameTrimmed = name.trim();
    const phoneTrimmed = phone.trim();
    const emailTrimmed = email.trim();
    const messageTrimmed = message.trim();

    if (!nameTrimmed || !phoneTrimmed || !emailTrimmed || !messageTrimmed) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    if (
      nameTrimmed.length > MAX_NAME ||
      phoneTrimmed.length > MAX_PHONE ||
      emailTrimmed.length > MAX_EMAIL ||
      messageTrimmed.length > MAX_MESSAGE
    ) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    if (!validateEmail(emailTrimmed)) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const token = process.env.TG_TOKEN;
    const chatId = process.env.TG_CHAT_ID;

    if (!token || !chatId) {
      console.error('TG_TOKEN or TG_CHAT_ID not configured');
      return NextResponse.json(
        { success: false },
        { status: 500 }
      );
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('ru-RU');
    const timeStr = now.toLocaleTimeString('ru-RU');

    const htmlMessage = [
      '🚗 <b>Новая заявка — Водительские права</b>',
      '',
      `<b>Имя:</b> ${escapeHtml(nameTrimmed)}`,
      `<b>Телефон:</b> ${escapeHtml(phoneTrimmed)}`,
      `<b>Email:</b> ${escapeHtml(emailTrimmed)}`,
      `<b>Сообщение:</b>\n${escapeHtml(messageTrimmed)}`,
      `<b>Дата:</b> ${escapeHtml(dateStr)}`,
      `<b>Время:</b> ${escapeHtml(timeStr)}`,
      `<b>IP:</b> ${escapeHtml(ip)}`,
    ].join('\n');

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: 'HTML',
      }),
      cache: 'no-store',
    });

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();
      console.error(
        'Telegram API error:',
        'status=' + telegramResponse.status,
        'body=' + telegramError
      );
      return NextResponse.json(
        { success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Send API error:', error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ success: false }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ success: false }, { status: 405 });
}

export async function PATCH() {
  return NextResponse.json({ success: false }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ success: false }, { status: 405 });
}
