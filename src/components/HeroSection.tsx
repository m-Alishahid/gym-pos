import { ArrowRight, Dumbbell, TrendingUp, Shield, Zap, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/20 via-primary/10 to-accent/20 blur-[100px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '40s' }} />
      </div>

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-sm font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
        <Zap className="w-4 h-4 fill-primary animate-pulse" />
        <span>Next Gen Fitness Platform</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
      </div>

      {/* Main Title */}
      <div className="relative z-10 animate-fade-in-up delay-200">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 text-luxury uppercase italic drop-shadow-2xl">
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
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse shadow-2xl shadow-primary/50" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="relative z-10 text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-medium animate-fade-in-up delay-300">
        Transform your gym with our 
        <span className="text-primary font-bold mx-2">all-in-one solution</span>
        for membership management, billing, inventory & sales tracking.
      </p>

      {/* Feature highlights */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-400">
        {[
          { icon: TrendingUp, text: "Real-time Analytics" },
          { icon: Shield, text: "Secure Payments" },
          { icon: Zap, text: "Lightning Fast" },
          { icon: Star, text: "5-Star Support" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium">
            <item.icon className="w-4 h-4 text-primary" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
        <button className="group relative px-8 py-4 btn-luxury text-white rounded-full font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 flex items-center gap-3 overflow-hidden">
          <Dumbbell className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Start Free Trial</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer" />
        </button>
        <button className="group relative px-8 py-4 glass text-foreground rounded-full font-black text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/20">
          <span className="relative z-10">Watch Demo</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </button>
      </div>

      {/* Trust badges */}
      <div className="relative z-10 mt-16 flex items-center gap-8 opacity-60 animate-fade-in-up delay-600">
        <span className="text-sm font-medium uppercase tracking-widest">Trusted by</span>
        <div className="flex gap-6">
          {['500+', 'Gyms', '10K+', 'Members'].map((text, i) => (
            <span key={i} className="text-lg font-black text-muted-foreground hover:text-primary transition-colors duration-300">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />
    </section>
  );
}
