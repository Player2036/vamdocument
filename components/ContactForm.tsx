'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface ContactFormProps {
  t: any;
}

export function ContactForm({ t }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [requestType, setRequestType] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!consentChecked) {
      toast.error(t.contactForm.consent);
      return;
    }

    if (!requestType?.trim()) {
      toast.error(t.contactForm.requestType || 'Выберите тип обращения');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string)?.trim() || '';
    const phone = (formData.get('phone') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const country = (formData.get('country') as string)?.trim() || '';
    const comment = (formData.get('comment') as string)?.trim() || '';
    const company = (formData.get('company') as string)?.trim() || '';

    const messageParts: string[] = [];
    if (requestType) messageParts.push(`Тип обращения: ${requestType}`);
    if (country) messageParts.push(`Страна: ${country}`);
    if (comment) messageParts.push(`Комментарий: ${comment}`);
    const message = messageParts.join('\n') || '-';

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          company,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(t.contactForm.success || 'Заявка успешно отправлена!');
        form.reset();
        setConsentChecked(false);
        setRequestType('');
        router.push('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      toast.error(t.contactForm.error || 'Ошибка при отправке формы.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          {t.contactForm.title || 'Оставьте заявку — мы свяжемся с вами в течение 24 часов'}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 space-y-6 border-2 border-ua-blue/10"
        >
          {/* Имя и страна */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                {t.contactForm.name || 'Имя и фамилия'}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Введите имя"
                className="border-2 border-gray-200 focus:border-ua-blue transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="text-gray-700 font-medium">
                {t.contactForm.country || 'Страна проживания'}
              </Label>
              <Input
                id="country"
                name="country"
                type="text"
                required
                placeholder="Например, Германия"
                className="border-2 border-gray-200 focus:border-ua-blue transition-colors"
              />
            </div>
          </div>

          {/* Email и телефон */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                {t.contactForm.email || 'Email'}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="border-2 border-gray-200 focus:border-ua-blue transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                {t.contactForm.phone || 'Телефон / WhatsApp / Telegram'}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+49 175 ..."
                className="border-2 border-gray-200 focus:border-ua-blue transition-colors"
              />
            </div>
          </div>

          {/* Honeypot - hidden from users */}
          <div className="absolute -left-[9999px] w-1 h-1 overflow-hidden" aria-hidden="true">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Тип обращения */}
          <div className="space-y-2">
            <Label htmlFor="requestType" className="text-gray-700 font-medium">
              {t.contactForm.requestType || 'Тип обращения'}
            </Label>
            <Select
              name="requestType"
              required
              value={requestType}
              onValueChange={setRequestType}
            >
              <SelectTrigger className="border-2 border-gray-200 focus:border-ua-blue transition-colors">
                <SelectValue placeholder="Выберите вариант..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="replacement">
                  {t.contactForm.requestTypes?.replacement || 'Замена удостоверения'}
                </SelectItem>
                <SelectItem value="restoration">
                  {t.contactForm.requestTypes?.restoration || 'Восстановление'}
                </SelectItem>
                <SelectItem value="nameChange">
                  {t.contactForm.requestTypes?.nameChange || 'Смена фамилии'}
                </SelectItem>
                <SelectItem value="tempToPerm">
                  {t.contactForm.requestTypes?.tempToPerm || 'Временное → Постоянное'}
                </SelectItem>
                <SelectItem value="correction">
                  {t.contactForm.requestTypes?.correction || 'Исправление ошибки'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Комментарий */}
          <div className="space-y-2">
            <Label htmlFor="comment" className="text-gray-700 font-medium">
              {t.contactForm.comment || 'Комментарий'}
            </Label>
            <Textarea
              id="comment"
              name="comment"
              rows={5}
              placeholder="Опишите ваш случай или задайте вопрос"
              className="border-2 border-gray-200 focus:border-ua-blue transition-colors resize-none"
            />
          </div>

          {/* Согласие */}
          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="consent"
              checked={consentChecked}
              onCheckedChange={(checked) => setConsentChecked(checked === true)}
              className="mt-1 border-2 border-gray-300 data-[state=checked]:bg-ua-blue data-[state=checked]:border-ua-blue"
            />
            <Label
              htmlFor="consent"
              className="text-sm text-gray-700 leading-relaxed cursor-pointer"
            >
              Я соглашаюсь на обработку персональных данных согласно политике конфиденциальности.
            </Label>
          </div>

          {/* Кнопка отправки */}
          <Button
            type="submit"
            disabled={isSubmitting || !consentChecked}
            className="w-full bg-ua-blue hover:bg-ua-blue/90 text-white font-semibold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Отправка...
              </>
            ) : (
              'Отправить заявку'
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
