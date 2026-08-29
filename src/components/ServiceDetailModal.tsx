import React from 'react';
import { X, CheckCircle, ArrowRight, Cloud, Brain, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud':
        return <Cloud className="w-6 h-6 text-white" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-white" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-white" />;
      default:
        return <Cloud className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0a0f1d] px-6 py-6 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                ApexTech Solutions
              </span>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
          </div>
          <button
            id="close-service-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-600 text-base leading-relaxed">
            {service.description}
          </p>

          {/* Key Metrics / Specs */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              關鍵效益指標
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {service.specs.map((spec, i) => (
                <div key={i} className="bg-blue-50/60 border border-blue-100 rounded-xl p-3.5 text-center">
                  <div className="text-base sm:text-lg font-bold text-blue-600 font-mono">
                    {spec.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features list */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              服務核心特色與涵蓋範圍
            </h4>
            <ul className="space-y-2.5">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700 text-sm font-medium"
            >
              返回上一頁
            </button>
            <button
              id={`service-modal-cta-${service.id}`}
              onClick={() => {
                onClose();
                onOpenConsultation(service.title);
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all"
            >
              <span>諮詢此方案</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
