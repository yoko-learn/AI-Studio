import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Slide } from '../types';

interface HeroCarouselProps {
  slides: Slide[];
  onOpenConsultation: () => void;
  onOpenTechSpecs: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  onOpenConsultation,
  onOpenTechSpecs,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section
      id="hero-banner-section"
      className="relative w-full bg-[#0a0f1d] px-3 sm:px-6 lg:px-8 py-4 md:py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Banner Card Frame (matches the exact rounded container in screenshot) */}
      <div className="relative max-w-7xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl min-h-[460px] md:min-h-[560px] flex items-center justify-center">
        {/* Background Images with smooth fade */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              transitionProperty: 'opacity, transform',
              transitionDuration: '1000ms',
            }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Deep dark multi-stop gradient overlay for crisp readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/75" />
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[0.5px]" />
          </div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 py-16 text-center flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600/90 text-white border border-blue-400/40 shadow-sm shadow-blue-500/30 text-xs sm:text-sm font-medium tracking-wide mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>{currentSlide.badge}</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-main-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-6 drop-shadow-md"
          >
            {currentSlide.title}
          </h1>

          {/* Subtitle Paragraph */}
          <p
            id="hero-subtitle"
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-8 drop-shadow-sm"
          >
            {currentSlide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="hero-primary-cta-btn"
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-lg shadow-lg shadow-blue-600/40 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-0.5"
            >
              {currentSlide.primaryCta}
            </button>
            <button
              id="hero-secondary-cta-btn"
              onClick={onOpenTechSpecs}
              className="bg-transparent hover:bg-white/10 active:bg-white/15 text-blue-400 hover:text-blue-300 border border-blue-500/80 font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all"
            >
              {currentSlide.secondaryCta}
            </button>
          </div>
        </div>

        {/* Left Arrow Navigation */}
        <button
          id="hero-prev-slide-btn"
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Navigation */}
        <button
          id="hero-next-slide-btn"
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Indicator Dots / Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                idx === currentSlideIndex
                  ? 'w-8 bg-blue-500 shadow-md shadow-blue-500/50'
                  : 'w-2.5 bg-slate-600/80 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
