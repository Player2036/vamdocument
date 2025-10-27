'use client';

import { RefreshCw, AlertTriangle, User, Clock, Edit2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServicesProps {
  t: any;
}

export function Services({ t }: ServicesProps) {
  const services = [
    {
      icon: RefreshCw,
      title: t.services.replacement.title,
      description: t.services.replacement.description,
    },
    {
      icon: AlertTriangle,
      title: t.services.restoration.title,
      description: t.services.restoration.description,
    },
    {
      icon: User,
      title: t.services.nameChange.title,
      description: t.services.nameChange.description,
    },
    {
      icon: Clock,
      title: t.services.tempToPerm.title,
      description: t.services.tempToPerm.description,
    },
    {
      icon: Edit2,
      title: t.services.correction.title,
      description: t.services.correction.description,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          {t.services.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-ua-blue/50 bg-white"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-ua-blue to-ua-blue/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-ua-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
