import React from 'react';
import { Cloud, Brain, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud':
        return <Cloud className="w-6 h-6 text-blue-600" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-blue-600" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      default:
        return <Cloud className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services-section" className="w-full bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            我們的專業服務
          </h2>
          {/* Blue Accent Bar */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            憑藉資深研發經驗與先進技術，為您提供無縫接軌的企業升級支持
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl border border-slate-100/90 p-8 shadow-[0_4px_24px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-13 h-13 rounded-2xl bg-blue-50/90 border border-blue-100/80 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <button
                  id={`service-btn-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-blue-500/80 text-blue-600 font-medium text-sm hover:bg-blue-600 hover:text-white transition-all group/btn"
                >
                  <span>了解更多</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
