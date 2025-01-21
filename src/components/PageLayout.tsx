import { ReactNode } from 'react';
import { WaveTransition } from './WaveTransition';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: ReactNode;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#3B4B96]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#3B4B96] via-[#3B4B96] to-[#2A3875]"></div>
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 text-white leading-none">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <WaveTransition />
      </section>

      {/* Content */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    </div>
  );
} 