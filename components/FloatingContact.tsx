'use client';

import { ContactIcons } from '@/components/ContactIcons';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-3 flex flex-col gap-2">
        <p className="text-xs font-medium text-gray-600 px-1">Связаться</p>
        <ContactIcons variant="compact" />
      </div>
    </div>
  );
}
