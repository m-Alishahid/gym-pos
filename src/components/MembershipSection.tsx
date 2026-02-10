import { Users, Trophy, Crown, Star, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "/mo",
    description: "Perfect for beginners",
    features: ["Gym Access", "Cardio Equipment", "Locker Room", "Free WiFi"],
    primary: false,
    color: "from-gray-500 to-slate-600",
    delay: "0"
  },
  {
    name: "Professional",
    price: "99",
    period: "/mo",
    description: "Most popular choice",
    features: ["Everything in Starter", "Group Classes", "Sauna", "1 PT Session"],
    primary: true,
    color: "from-primary via-accent to-secondary",
    badge: "Popular",
    delay: "100"
  },
  {
    name: "Elite",
    price: "199",
    period: "/mo",
    description: "For serious athletes",
    features: ["24/7 Access", "Unlimited PT", "Recovery Spa", "Nutrition Plan"],
    primary: false,
    color: "from-amber-500 via-yellow-500 to-orange-500",
    badge: "Best Value",
    delay: "200"
  }
];

export function MembershipSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
          Membership Plans
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase italic">
          Join The <span className="text-primary italic relative">
            Elite
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
          </span> Club
        </h2>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={cn(
              "group relative glass-premium rounded-2xl md:rounded-[30px] p-4 md:p-6 flex flex-col border border-white/10 overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-xl animate-fade-in-up",
              plan.primary && "ring-2 ring-primary/50 shadow-xl shadow-primary/20 scale-105 z-10"
            )}
            style={{ animationDelay: `${plan.delay}ms` }}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <div className={cn(
                  "px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1",
                  plan.primary ? "bg-gradient-to-r from-primary to-accent text-white" : "bg-gradient-to-r from-amber-500 to-yellow-500 text-black"
                )}>
                  <Star className="w-3 h-3 fill-current" />
                  {plan.badge}
                </div>
              </div>
            )}

            {/* Background gradient */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
              plan.primary ? "bg-gradient-to-br from-primary/10" : "bg-gradient-to-br from-white/5"
            )} />

            {/* Header */}
            <div className="relative z-10 text-center mb-4">
              <div className={cn(
                "w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-xl md:rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                plan.color
              )}>
                {plan.name === "Starter" && <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />}
                {plan.name === "Professional" && <Trophy className="w-5 h-5 md:w-6 md:h-6 text-white" />}
                {plan.name === "Elite" && <Crown className="w-5 h-5 md:w-6 md:h-6 text-white" />}
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase italic mb-1">{plan.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="relative z-10 text-center mb-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">${plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
            </div>

            {/* Features */}
            <div className="relative z-10 flex-grow">
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs md:text-sm group-hover:text-white/90 transition-colors duration-300">
                    <div className={cn("w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", plan.primary ? "bg-primary/20" : "bg-white/10")}>
                      <Check className={cn("w-2.5 h-2.5", plan.primary ? "text-primary" : "text-muted-foreground")} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="relative z-10">
              <button
                className={cn(
                  "w-full py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2",
                  plan.primary ? "btn-premium text-white" : "glass text-foreground hover:bg-white/10"
                )}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
