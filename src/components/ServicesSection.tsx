import { Dumbbell, Zap, Trophy, Users, ArrowRight, Sparkles, Clock, Target } from "lucide-react";

const services = [
  {
    title: "Weight Training",
    description: "Build strength with state-of-the-art equipment and expert guidance from certified trainers.",
    icon: Dumbbell,
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/20 via-blue-600/10 to-blue-700/20",
    glow: "shadow-blue-500/25",
    delay: "0",
    features: ["Free Weights", "Machines", "Power Racks"]
  },
  {
    title: "Cardio Fitness",
    description: "Improve cardiovascular health with treadmills, ellipticals, cycling & rowing machines.",
    icon: Zap,
    color: "from-red-500 to-orange-500",
    bg: "from-red-500/20 via-red-600/10 to-red-700/20",
    glow: "shadow-red-500/25",
    delay: "100",
    features: ["HIIT Classes", "Spin Studio", "Runners Zone"]
  },
  {
    title: "CrossFit",
    description: "High-intensity functional training for ultimate fitness and performance results.",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    bg: "from-amber-500/20 via-amber-600/10 to-yellow-500/20",
    glow: "shadow-amber-500/25",
    delay: "200",
    features: ["WOD Sessions", "Olympic Lifts", "Calisthenics"]
  },
  {
    title: "Personal Training",
    description: "One-on-one personalized sessions tailored to your specific fitness goals.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    bg: "from-green-500/20 via-green-600/10 to-emerald-500/20",
    glow: "shadow-green-500/25",
    delay: "300",
    features: ["1-on-1 Sessions", "Nutrition Plan", "Progress Tracking"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s' }} />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4" />
          Premium Programs
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
          Our <span className="text-primary italic relative">
            Training
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" />
            <div className="absolute -top-2 -left-3 w-6 h-6 bg-primary/20 rounded-full blur-sm animate-bounce" />
            <div className="absolute -top-2 -right-3 w-4 h-4 bg-accent/20 rounded-full blur-sm animate-bounce delay-300" />
          </span> Programs
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          World-class training programs designed to transform your body and mind
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {services.map((service, i) => (
          <div
            key={i}
            className={`group glass-premium rounded-3xl p-8 text-center relative overflow-hidden hover-lift transition-all duration-700 animate-fade-in-up ${service.glow}`}
            style={{ animationDelay: `${service.delay}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:scale-125 group-hover:rotate-3 transition-all duration-500`}>
                <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4 uppercase italic group-hover:text-white transition-colors duration-300 relative inline-block">
                {service.title}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-2">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                    <Target className="w-3 h-3 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-6">
              <button className="w-full py-3 glass rounded-2xl text-sm font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group-hover-btn">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "24/7", label: "Access" },
          { value: "50+", label: "Trainers" },
          { value: "100+", label: "Classes" },
          { value: "500+", label: "Members" }
        ].map((stat, i) => (
          <div key={i} className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300">
            <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
