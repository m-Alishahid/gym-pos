import { Zap, Trophy, TrendingUp, Users, Sparkles } from "lucide-react";

const features = [
  {
    title: "Smart POS",
    description: "Process payments & memberships instantly.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    delay: "0"
  },
  {
    title: "Inventory",
    description: "Real-time stock tracking & alerts.",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    delay: "100"
  },
  {
    title: "Revenue",
    description: "Financial insights & sales reports.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    delay: "200"
  },
  {
    title: "Members",
    description: "Member profiles & attendance.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    delay: "300"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
          Features
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase italic">
          Everything You <span className="text-primary italic relative">
            Need
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
          </span>
        </h2>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`group glass-premium rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10 overflow-hidden hover-lift transition-all duration-500 animate-fade-in-up`}
            style={{ animationDelay: `${feature.delay}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color.replace('/20', '/10')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

            {/* Icon */}
            <div className="relative mb-3 md:mb-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-black mb-2 uppercase italic group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
