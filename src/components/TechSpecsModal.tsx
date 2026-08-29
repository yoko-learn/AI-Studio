import React from 'react';
import { X, Server, Shield, Cpu, Zap, CheckCircle2, FileText } from 'lucide-react';

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0a0f1d] px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">創峰科技 全新智能 2.0 系統核心技術規格</h3>
              <p className="text-xs text-slate-400">ApexTech Enterprise Cloud & AI Architecture Specs</p>
            </div>
          </div>
          <button
            id="close-specs-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Spec Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-sm mb-2">
                <Server className="w-4 h-4" />
                <span>多雲架構與彈性調度</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>支援 AWS、Google Cloud (GCP)、Azure 與地端 Kubernetes 混合集群</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>SLA 99.99% 可用性保障，全自動毫秒級跨區域容災切換</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>動態智慧負載平衡與算力彈性伸縮（Auto-scaling）</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-sm mb-2">
                <Cpu className="w-4 h-4" />
                <span>AI 數據運算與推理引擎</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>專屬私有化大型語言模型（LLM）微調與安全隔離沙盒</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>即時向量資料庫檢索（RAG）與百萬級別並發查詢支持</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>自動化 ETL 數據管線與 BI 即時動態視覺化串接</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-sm mb-2">
                <Shield className="w-4 h-4" />
                <span>零信任安全與合規防禦</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>端到端 TLS 1.3 / AES-256 加密傳輸與靜態數據加密</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>符合 ISO 27001、SOC 2 Type II、GDPR 國際合規標準</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>AI 即時異常行為偵測與自動化封鎖機制</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-sm mb-2">
                <Zap className="w-4 h-4" />
                <span>維運支援與交付保障</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>7x24x365 專屬原廠技術團隊即時在線監控</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>緊急事件 15 分鐘以內一級工程師快速響應</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>定期雲端架構健檢與成本優化建議報告</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>需要完整技術白皮書 PDF 或架構圖？</span>
            </div>
            <button
              id="request-spec-doc-btn"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-all"
            >
              索取完整技術架構白皮書
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
