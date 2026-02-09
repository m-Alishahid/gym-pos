import { Trophy, Star, Award, TrendingUp, MessageCircle, Calendar, ArrowRight } from "lucide-react";

const trainers = [
  {
    name: "Alex Johnson",
    specialty: "Strength Training",
    experience: "8 years",
    image: "AJ",
    color: "from-blue-500 to-blue-600",
    bg: "from-blue-500/20 to-blue-600/20",
    certifications: ["NASM-CPT", "NSCA-CSCS", "ACE"],
    rating: 4.9,
    clients: "150+"
  },
  {
    name: "Sarah Chen",
    specialty: "CrossFit & HIIT",
    experience: "6 years",
    image: "SC",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-500/20 to-orange-500/20",
    certifications: ["CrossFit L3", "AFAA", "Pre/Post Natal"],
    rating: 4.8,
    clients: "120+"
  },
  {
    name: "Mike Rodriguez",
    specialty: "Cardio & Endurance",
    experience: "10 years",
    image: "MR",
    color: "from-green-500 to-emerald-500",
    bg: "from-green-500/20 to-emerald-500/20",
    certifications: ["ACSM", "Spinning", "TRX"],
    rating: 4.9,
    clients: "200+"
  }
];

export function TrainersSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-accent/3 to-secondary/3" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-pulse" />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest mb-6">
          <Award className="w-4 h-4" />
          Expert Team
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
          Meet Our <span className="text-primary italic relative">
            Champions
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" />
            <div className="absolute -top-3 -left-4 w-6 h-6 bg-primary/20 rounded-full blur-md animate-bounce" />
            <div className="absolute -top-3 -right-4 w-4 h-4 bg-accent/20 rounded-full blur-md animate-bounce delay-300" />
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          World-class trainers dedicated to helping you achieve your fitness goals
        </p>
      </div>

      {/* Trainers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {trainers.map((trainer, i) => (
          <div
            key={i}
            className="group glass-premium rounded-3xl p-8 text-center relative overflow-hidden hover-lift transition-all duration-700 animate-fade-in-up hover:shadow-2xl hover:shadow-primary/20"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${trainer.bg} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />

            {/* Profile image */}
            <div className="relative mb-6">
              <div className={`w-36 h-36 mx-auto rounded-full bg-gradient-to-br ${trainer.color} border-4 border-white/20 flex items-center justify-center text-white font-black text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                <span className="relative z-10 drop-shadow-lg">{trainer.image}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-2 right-1/3 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 uppercase italic group-hover:text-white transition-colors duration-300 relative inline-block">
                {trainer.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </h3>

              <p className={`text-lg font-bold mb-2 bg-gradient-to-r ${trainer.color} bg-clip-text text-transparent`}>
                {trainer.specialty}
              </p>

              {/* Stats row */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span>{trainer.experience}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>{trainer.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>{trainer.clients}</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {trainer.certifications.map((cert, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 glass rounded-full text-xs font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group-hover-btn">
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
                <button className="py-3 px-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all duration-300">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-16 text-center">
        <button className="group inline-flex items-center gap-3 px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
          <span>View All Trainers</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}
