import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsSectionProps {
  newsItems: NewsItem[];
  onSelectNews: (news: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  newsItems,
  onSelectNews,
}) => {
  return (
    <section id="news-section" className="w-full bg-[#f8fafc] py-20 sm:py-24 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="news-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            最新消息與洞察
          </h2>
          {/* Blue Accent Bar */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            第一時間掌握科技前沿脈動，精選創峰最新的技術升級、榮譽與觀點分享
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              id={`news-card-${item.id}`}
              onClick={() => onSelectNews(item)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category badge & Date row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-normal flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.date}
                    </span>
                  </div>

                  {/* News Title */}
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                {/* Read More Link */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                    閱讀更多
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
