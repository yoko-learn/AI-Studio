import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, Mail, Building, User, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = '雲端託管與移轉',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: defaultService,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: defaultService,
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all">
        {/* Header */}
        <div className="bg-[#0a0f1d] px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="text-xl font-bold">預約企業專屬諮詢</h3>
            <p className="text-xs text-slate-400 mt-1">
              由創峰科技資深雲端與 AI 架構師為您提供專業評估
            </p>
          </div>
          <button
            id="close-contact-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">諮詢申請已成功送出！</h4>
              <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                感謝您的詢問。創峰科技企業解決方案顧問將於 1 個工作天內（24 小時內）與您聯繫，協助安排專屬技術架構評估。
              </p>
              <div className="pt-4">
                <button
                  id="confirm-success-btn"
                  onClick={handleReset}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all"
                >
                  確認關閉
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    姓名 / 聯絡人 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    placeholder="請輸入您的姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-600" />
                    企業 / 組織名稱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-company"
                    type="text"
                    required
                    placeholder="例：台灣創峰股份有限公司"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    公司電子郵件 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    聯絡電話 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    placeholder="例：02-2345-6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  感興趣的技術領域 / 服務需求
                </label>
                <select
                  id="select-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                >
                  <option value="雲端託管與移轉">雲端託管與移轉（多雲/混合雲/Kubernetes）</option>
                  <option value="AI 智能數據分析">AI 智能數據分析（專屬模型/數據湖/BI）</option>
                  <option value="企業資安與合規">企業資安與合規（零信任/ISO認證/紅藍軍演練）</option>
                  <option value="全新智能 2.0 系統發表">全新智能 2.0 系統試行計劃</option>
                  <option value="整體數位轉型諮詢">企業全面數位轉型戰略諮詢</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  需求描述或目前面臨的技術挑戰
                </label>
                <textarea
                  id="input-message"
                  rows={3}
                  placeholder="請簡要描述您的系統現況或希望解決的技術課題..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-3 rounded-lg text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      立即送出預約申請
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
