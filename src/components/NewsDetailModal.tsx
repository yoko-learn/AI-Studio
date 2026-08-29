import React from 'react';
import { X, Calendar, User, Clock, Share2, Tag } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  news,
  onClose,
}) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="bg-[#0a0f1d] px-6 py-4 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">{news.category}</span>
          </div>
          <button
            id="close-news-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {news.title}
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {news.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-slate-400" />
              {news.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              {news.readTime}
            </span>
          </div>

          {/* Banner Photo */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 shadow-md">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Lead Summary */}
          <div className="p-4 rounded-xl bg-blue-50/70 border-l-4 border-blue-600 text-slate-700 text-sm font-medium leading-relaxed">
            {news.summary}
          </div>

          {/* Article paragraphs */}
          <div className="space-y-4 text-slate-700 text-base leading-relaxed">
            {news.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer of modal */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-400">
              創峰科技新聞中心 · 未經授權請勿轉載
            </div>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('新聞連結已複製至剪貼簿！');
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 px-3 py-1.5 bg-slate-100 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              分享報導
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
