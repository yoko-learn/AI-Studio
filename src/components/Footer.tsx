import React from 'react';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenTechSpecs: () => void;
  onOpenServices: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAbout,
  onOpenTechSpecs,
  onOpenServices,
  onOpenContact,
}) => {
  return (
    <footer id="footer-section" className="w-full bg-[#101626] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-white tracking-tight">創峰科技</span>
                <span className="text-lg font-semibold text-slate-300 font-sans">ApexTech</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md pt-2">
              致力於提供最頂尖的雲端運算、人工智慧解決方案與資安防護，協助全球企業順利完成數位轉型，驅動商業智慧新局。
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">快速連結</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  id="footer-link-about"
                  onClick={onOpenAbout}
                  className="hover:text-white hover:underline transition-colors"
                >
                  關於創峰
                </button>
              </li>
              <li>
                <button
                  id="footer-link-specs"
                  onClick={onOpenTechSpecs}
                  className="hover:text-white hover:underline transition-colors"
                >
                  核心技術
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={onOpenServices}
                  className="hover:text-white hover:underline transition-colors"
                >
                  客戶成功案例
                </button>
              </li>
              <li>
                <button
                  id="footer-link-careers"
                  onClick={onOpenAbout}
                  className="hover:text-white hover:underline transition-colors"
                >
                  加入我們
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">聯絡我們</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>地址：台北市信義區信義路五段 7 號 88 樓</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>電話：+886 (2) 2345-6789</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>信箱：service@apextech.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 創峰科技股份有限公司. 版權所有。
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <button
              id="social-fb"
              onClick={onOpenContact}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            {/* LinkedIn */}
            <button
              id="social-linkedin"
              onClick={onOpenContact}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>

            {/* Twitter / X */}
            <button
              id="social-twitter"
              onClick={onOpenContact}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Twitter X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>

            {/* YouTube */}
            <button
              id="social-yt"
              onClick={onOpenContact}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
