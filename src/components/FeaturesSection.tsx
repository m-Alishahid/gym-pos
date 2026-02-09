import { Zap, Trophy, TrendingUp, Users, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const features = [
  {
    title: "Smart POS",
    description: "Process payments, memberships & transactions instantly with our lightning-fast point of sale system.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    delay: "0"
  },
  {
    title: "Inventory Pro",
    description: "Real-time stock tracking, automated alerts & seamless supplier management for your gym products.",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    bg: "from-amber-500/20 to-yellow-500/20",
    border: "border-amber-500/30",
    delay: "100"
  },
  {
    title: "Revenue Analytics",
    description: "Comprehensive financial insights, revenue forecasting & detailed sales reports & dashboards.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    bg: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    delay: "200"
  },
  {
    title: "Member Management",
    description: "Complete member profiles, attendance tracking & automated membership renewals.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    bg: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    delay: "300"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4" />
          Powerful Features
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
          Everything You <span className="text-primary italic relative">
            Need
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" />
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A complete gym management solution built for modern fitness businesses
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`group relative glass-premium rounded-3xl p-8 border border-white/10 overflow-hidden hover-lift transition-all duration-500 animate-fade-in-up ${feature.border}`}
            style={{ animationDelay: `${feature.delay}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-300" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-3 uppercase italic group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </div>

            {/* Feature list */}
            <div className="relative z-10 mt-6 flex flex-wrap gap-2">
              {[1, 2, 3].map((_, j) => (
                <div key={j} className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-xs font-medium">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span>Included</span>
                </div>
              ))}
            </div>

            {/* CTA arrow */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>

            {/* Hover effects */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
