import { ArrowDown, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-purple/10 via-transparent to-transparent" />

        {/* Floating particles */}
        <div className="absolute top-20 left-[20%] w-2 h-2 bg-accent-cyan rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-[30%] w-3 h-3 bg-accent-blue rounded-full animate-float animate-delay-200 opacity-40" />
        <div className="absolute bottom-32 left-[40%] w-2 h-2 bg-accent-purple rounded-full animate-float animate-delay-400 opacity-50" />
        <div className="absolute top-60 left-[60%] w-1.5 h-1.5 bg-white rounded-full animate-float animate-delay-300 opacity-30" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 opacity-0 animate-slide-up">
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <span className="text-sm font-medium text-navy-200">Digital Marketing Expert</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 opacity-0 animate-slide-up animate-delay-100">
          <span className="text-white">Scaling Brands</span>
          <br />
          <span className="gradient-text">Through Data & Strategy</span>
        </h1>

        {/* Value proposition */}
        <p className="text-xl md:text-2xl text-navy-300 max-w-3xl mx-auto mb-4 opacity-0 animate-slide-up animate-delay-200">
          I'm <span className="text-white font-semibold">Usama Ahmed</span>
        </p>
        <p className="text-lg md:text-xl text-navy-400 max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up animate-delay-300">
          Transforming businesses with data-driven marketing strategies that deliver measurable growth and exceptional ROI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-slide-up animate-delay-400">
          <a href="#results" className="glow-button font-display">
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <Zap className="w-5 h-5" />
            </span>
          </a>
          <a href="#services" className="outline-button font-display">
            Explore Services
          </a>
        </div>

        {/* Stats preview */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-500">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-1">40%+</div>
            <div className="text-sm text-navy-400">Avg. Traffic Increase</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-1">3.5x</div>
            <div className="text-sm text-navy-400">Average ROAS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-1">50+</div>
            <div className="text-sm text-navy-400">Projects Delivered</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-400 hover:text-accent-cyan transition-colors group animate-fade-in animate-delay-600"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
