import { Users, Trophy, Zap, Crown, Star, ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to Gym Floor",
      "Cardio Equipment",
      "Locker Room Access",
      "Free WiFi",
      "Mobile App Access",
      "1 Guest Pass/Month"
    ],
    primary: false,
    color: "from-gray-500 to-slate-600",
    colorLight: "text-gray-400",
    icon: Users,
    delay: "0"
  },
  {
    name: "Professional",
    price: "99",
    period: "/month",
    description: "Most popular choice for dedicated fitness enthusiasts",
    features: [
      "Everything in Starter",
      "Group Classes Access",
      "Personal Trainer Session",
      "Sauna & Steam Room",
      "Nutrition Consultation",
      "5 Guest Passes/Month",
      "Priority Support"
    ],
    primary: true,
    color: "from-primary via-accent to-secondary",
    colorLight: "text-primary",
    icon: Trophy,
    delay: "200",
    badge: "Most Popular"
  },
  {
    name: "Elite",
    price: "199",
    period: "/month",
    description: "Ultimate experience for serious athletes",
    features: [
      "Everything in Professional",
      "24/7 VIP Access",
      "Private Locker",
      "Unlimited Classes",
      "Recovery Spa Access",
      "Monthly PT Sessions",
      "Nutrition Plan Included",
      "Partner Membership",
      "Exclusive Events"
    ],
    primary: false,
    color: "from-amber-500 via-yellow-500 to-orange-500",
    colorLight: "text-amber-400",
    icon: Crown,
    delay: "400",
    badge: "Best Value"
  }
];

export function MembershipSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4" />
          Membership Plans
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
          Join The <span className="text-primary italic relative">
            Elite
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full blur-md animate-pulse" />
          </span> Club
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect membership plan tailored to your fitness goals
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={cn(
              "group relative glass-premium rounded-[40px] p-8 flex flex-col border border-white/10 overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl animate-fade-in-up",
              plan.primary && "ring-2 ring-primary/50 shadow-2xl shadow-primary/20 scale-105 z-10 lg:-mt-4 lg:mb-4"
            )}
            style={{ animationDelay: `${plan.delay}ms` }}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <div className={cn(
                  "px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg animate-bounce flex items-center gap-2",
                  plan.primary
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-gradient-to-r from-amber-500 to-yellow-500 text-black"
                )}>
                  <Star className="w-3 h-3 fill-current" />
                  {plan.badge}
                </div>
              </div>
            )}

            {/* Background gradient */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
              plan.primary ? "bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" : "bg-gradient-to-br from-white/5 to-transparent"
            )} />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-[40px] border border-white/10 group-hover:border-white/30 transition-all duration-500" />
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-300" />
            <div className="absolute top-4 left-4 w-12 h-12 bg-accent/10 rounded-full blur-lg group-hover:bg-accent/20 transition-all duration-300" />
            {plan.primary && (
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-[42px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
            )}

            {/* Header */}
            <div className="relative z-10 text-center mb-6">
              <div className={cn(
                "w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                plan.color,
                plan.primary ? "text-white" : "text-white/80"
              )}>
                <plan.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-2 group-hover:text-white transition-colors duration-300">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="relative z-10 text-center mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground text-lg">{plan.period}</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Billed monthly
              </div>
            </div>

            {/* Features */}
            <div className="relative z-10 flex-grow">
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm group-hover:text-white/90 transition-colors duration-300">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      plan.primary ? "bg-primary/20" : "bg-white/10"
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        plan.primary ? "text-primary" : "text-muted-foreground"
                      )} />
                    </div>
                    <span className="flex-grow">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="relative z-10">
              <button
                className={cn(
                  "w-full py-4 rounded-2xl font-black text-lg transition-all duration-300 relative overflow-hidden group/btn flex items-center justify-center gap-2",
                  plan.primary
                    ? "btn-premium text-white hover:scale-105"
                    : "glass text-foreground hover:bg-white/10 hover:scale-105"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                  plan.primary ? "bg-gradient-to-r from-white/10 to-transparent" : "bg-gradient-to-r from-primary/10 to-accent/10"
                )} />
              </button>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Additional info */}
      <div className="relative z-10 mt-16 text-center">
        <p className="text-muted-foreground mb-4">All plans include a 7-day free trial. No commitment required.</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-4 h-4 text-primary" /> Cancel anytime
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-4 h-4 text-primary" /> No hidden fees
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-4 h-4 text-primary" /> Instant access
          </span>
        </div>
      </div>
    </section>
  );
}
