import { Dumbbell, Zap, Trophy, Users, ArrowRight, Target } from "lucide-react";

const services = [
  {
    title: "Weight Training",
    description: "Build strength with state-of-the-art equipment.",
    icon: Dumbbell,
    color: "from-blue-500 to-cyan-500",
    features: ["Free Weights", "Machines"]
  },
  {
    title: "Cardio",
    description: "Improve cardiovascular health.",
    icon: Zap,
    color: "from-red-500 to-orange-500",
    features: ["Treadmills", "Cycling"]
  },
  {
    title: "CrossFit",
    description: "High-intensity functional training.",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    features: ["WOD", "Olympic Lifts"]
  },
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to you.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    features: ["1-on-1", "Nutrition"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
          Programs
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase italic">
          Our <span className="text-primary italic relative">
            Training
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
          </span> Programs
        </h2>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
        {services.map((service, i) => (
          <div
            key={i}
            className={`group glass-premium rounded-2xl md:rounded-3xl p-4 md:p-6 text-center overflow-hidden hover-lift transition-all duration-700 animate-fade-in-up`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color.replace('/20', '/10')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

            {/* Icon */}
            <div className="relative mb-3 md:mb-4">
              <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-125 transition-all duration-500`}>
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-black mb-2 uppercase italic group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-1 md:gap-2">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center justify-center gap-1.5 text-xs md:text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                    <Target className="w-3 h-3 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="relative z-10 mt-4 w-full py-2 glass rounded-xl text-xs md:text-sm font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
