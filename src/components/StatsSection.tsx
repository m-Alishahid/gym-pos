import { Users, Trophy, Zap, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Active Members",
    value: "2,500+",
    color: "from-blue-500 to-cyan-500",
    delay: "0"
  },
  {
    icon: Trophy,
    label: "Expert Trainers",
    value: "50+",
    color: "from-amber-500 to-orange-500",
    delay: "100"
  },
  {
    icon: Zap,
    label: "Equipment",
    value: "200+",
    color: "from-green-500 to-emerald-500",
    delay: "200"
  },
  {
    icon: TrendingUp,
    label: "Monthly Revenue",
    value: "$150K+",
    color: "from-purple-500 to-pink-500",
    delay: "300"
  }
];

export function StatsSection() {
  return (
    <section className="py-10 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`group glass-premium rounded-2xl md:rounded-3xl p-4 md:p-6 text-center overflow-hidden hover-lift transition-all duration-500 animate-fade-in-up`}
            style={{ animationDelay: `${stat.delay}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color.replace('/20', '/10')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

            {/* Icon container */}
            <div className="relative mb-3 md:mb-4">
              <div className={`w-10 h-10 md:w-14 md:h-14 mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-2xl md:text-4xl font-black mb-1 md:mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className={`text-xs md:text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
