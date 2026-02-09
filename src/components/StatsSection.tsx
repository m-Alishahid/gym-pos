import { Users, Trophy, Zap, TrendingUp, Award, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Active Members",
    value: "2,500+",
    description: "Happy clients",
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/20 via-blue-600/10 to-blue-700/20",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/30",
    delay: "0"
  },
  {
    icon: Trophy,
    label: "Expert Trainers",
    value: "50+",
    description: "Certified pro",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/30",
    delay: "200"
  },
  {
    icon: Zap,
    label: "Equipment Sets",
    value: "200+",
    description: "Premium gear",
    color: "from-green-500 to-emerald-500",
    bg: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
    border: "border-green-500/30",
    glow: "shadow-green-500/30",
    delay: "400"
  },
  {
    icon: TrendingUp,
    label: "Monthly Revenue",
    value: "$150K+",
    description: "Track record",
    color: "from-purple-500 to-pink-500",
    bg: "from-purple-500/20 via-pink-500/10 to-rose-500/20",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/30",
    delay: "600"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`group relative glass-premium rounded-3xl p-8 text-center overflow-hidden hover-lift transition-all duration-500 animate-fade-in-up ${stat.border} ${stat.glow}`}
            style={{ animationDelay: `${stat.delay}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-500 animate-float" />
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-500 animate-float delay-500" />

            {/* Icon container */}
            <div className="relative mb-6">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <stat.icon className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10`} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className={`text-lg font-bold uppercase tracking-wider mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.label}
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <Award className="w-3 h-3" />
                {stat.description}
              </div>
            </div>

            {/* Hover sparkle effects */}
            <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
            <div className="absolute top-6 right-6 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200" />
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-400" />

            {/* Magnetic effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
