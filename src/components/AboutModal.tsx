import React from 'react';
import { X, Award, Users, Target, Shield, CheckCircle } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0a0f1d] px-6 py-5 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              About ApexTech
            </span>
            <h3 className="text-xl font-bold">關於創峰科技</h3>
          </div>
          <button
            id="close-about-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">企業願景與核心使命</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              創峰科技（ApexTech）成立於 2018 年，總部位於台北信義核心商業區。我們匯聚了來自跨國科技巨頭的資深雲端架構師、AI 算法科學家與資安防禦專家，致力於提供最頂尖、穩定且具備彈性的雲端算力與智慧數據方案，助力全球各產業加速落實現代化數位轉型。
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm mb-1">技術領航</h5>
              <p className="text-xs text-slate-500">持續投入前瞻 AI 與多雲架構研發，掌握世界級核心技術。</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm mb-1">安全至上</h5>
              <p className="text-xs text-slate-500">落實零信任防禦與嚴格合規標準，保障企業數位資產安全。</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm mb-1">卓越價值</h5>
              <p className="text-xs text-slate-500">以客戶成功為核心，精準量化降低維運成本與提高營運效能。</p>
            </div>
          </div>

          {/* Milestones / Stats */}
          <div className="bg-slate-900 text-white rounded-xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">300+</div>
                <div className="text-xs text-slate-400 mt-1">跨國企業成功案例</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">99.99%</div>
                <div className="text-xs text-slate-400 mt-1">高可用性服務保障</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">15+</div>
                <div className="text-xs text-slate-400 mt-1">國際權威技術認證</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">7x24</div>
                <div className="text-xs text-slate-400 mt-1">即時專屬技術支援</div>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700 text-sm font-medium"
            >
              關閉
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
            >
              與我們的專家交流
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
