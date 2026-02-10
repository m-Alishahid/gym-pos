import { Trophy, Star, Award, Calendar, MessageCircle } from "lucide-react";

const trainers = [
  {
    name: "Alex Johnson",
    specialty: "Strength Training",
    experience: "8 years",
    image: "AJ",
    color: "from-blue-500 to-blue-600",
    rating: 4.9,
    clients: "150+"
  },
  {
    name: "Sarah Chen",
    specialty: "CrossFit & HIIT",
    experience: "6 years",
    image: "SC",
    color: "from-amber-500 to-orange-500",
    rating: 4.8,
    clients: "120+"
  },
  {
    name: "Mike Rodriguez",
    specialty: "Cardio & Endurance",
    experience: "10 years",
    image: "MR",
    color: "from-green-500 to-emerald-500",
    rating: 4.9,
    clients: "200+"
  }
];

export function TrainersSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
          <Award className="w-3 h-3 md:w-4 md:h-4" />
          Expert Team
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase italic">
          Meet Our <span className="text-primary italic relative">
            Champions
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
          </span>
        </h2>
      </div>

      {/* Trainers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {trainers.map((trainer, i) => (
          <div
            key={i}
            className="group glass-premium rounded-2xl md:rounded-3xl p-4 md:p-6 text-center relative overflow-hidden hover-lift transition-all duration-700 animate-fade-in-up"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${trainer.color.replace('/20', '/10')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

            {/* Profile image */}
            <div className="relative mb-4">
              <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-br ${trainer.color} border-2 border-white/20 flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {trainer.image}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-black mb-1 uppercase italic group-hover:text-white transition-colors duration-300">
                {trainer.name}
              </h3>
              <p className={`text-sm md:text-base font-bold bg-gradient-to-r ${trainer.color} bg-clip-text text-transparent mb-2`}>
                {trainer.specialty}
              </p>

              {/* Stats row */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                  <Trophy className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span>{trainer.experience}</span>
                </div>
                <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
                  <span>{trainer.rating}</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-1">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  Book
                </button>
                <button className="py-2 px-3 glass rounded-xl font-bold text-xs md:text-sm">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
