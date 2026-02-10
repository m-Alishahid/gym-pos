import { ArrowRight, Dumbbell, TrendingUp, Shield, Zap, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 px-4 md:px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-secondary/20 via-primary/10 to-accent/20 blur-[80px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-6 md:mb-8 animate-fade-in-up">
        <Zap className="w-3 h-3 md:w-4 md:h-4 fill-primary animate-pulse" />
        <span>Next Gen Fitness</span>
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-ping" />
      </div>

      {/* Main Title */}
      <div className="relative z-10 animate-fade-in-up delay-200">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-luxury uppercase italic drop-shadow-2xl">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 blur-2xl animate-pulse" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-accent animate-text-shine">
              Build Your
            </span>
          </span>
          <br />
          <span className="text-primary italic relative inline-block mt-2">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/30 to-secondary/40 blur-xl animate-pulse" />
            <span className="relative text-luxury animate-text-shine" style={{ animationDelay: '0.5s' }}>
              Dream Body
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse shadow-2xl shadow-primary/50" />
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="relative z-10 text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed font-medium animate-fade-in-up delay-300">
        Transform your gym with our 
        <span className="text-primary font-bold mx-1">all-in-one solution</span>
        for membership management, billing & sales tracking.
      </p>

      {/* Feature highlights */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 animate-fade-in-up delay-400">
        {[
          { icon: TrendingUp, text: "Analytics" },
          { icon: Shield, text: "Secure" },
          { icon: Zap, text: "Fast" },
          { icon: Star, text: "Premium" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 glass rounded-full text-xs md:text-sm font-medium">
            <item.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up delay-500">
        <button className="group px-6 py-3 md:px-8 md:py-4 btn-luxury text-white rounded-full font-bold text-sm md:text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
          <Dumbbell className="w-4 h-4 md:w-5 md:h-5" />
          <span>Start Free Trial</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        <button className="group px-6 py-3 md:px-8 md:py-4 glass text-foreground rounded-full font-bold text-sm md:text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20">
          <span>Watch Demo</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Trust badges */}
      <div className="relative z-10 mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6 opacity-70 animate-fade-in-up delay-600">
        <span className="text-xs md:text-sm font-medium uppercase tracking-wider">Trusted by</span>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {['500+', 'Gyms', '10K+', 'Members'].map((text, i) => (
            <span key={i} className="text-sm md:text-base font-black text-muted-foreground hover:text-primary transition-colors duration-300">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
