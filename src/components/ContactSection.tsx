import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Fitness Street", "Downtown City"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-GYM-PRO", "Mon-Fri: 9AM-6PM"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@gympro.com", "support@gympro.com"],
    color: "from-purple-500 to-pink-500"
  }
];

export function ContactSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
          <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
          Get In Touch
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase italic">
          We'd Love To <span className="text-primary italic relative">
            Hear From You
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
          </span>
        </h2>
      </div>

      {/* Contact info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 relative z-10">
        {contactInfo.map((item, i) => (
          <div
            key={i}
            className="group glass-premium rounded-2xl md:rounded-3xl p-4 md:p-6 text-center hover-lift transition-all duration-500"
          >
            {/* Icon */}
            <div className="relative mb-3 md:mb-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-sm md:text-base font-black mb-2 uppercase italic group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <div className="space-y-1">
              {item.details.map((detail, j) => (
                <p key={j} className="text-xs md:text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact form */}
      <div className="glass-premium rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 relative z-10">
        <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 uppercase italic flex items-center gap-2">
          Send Us A Message
        </h3>
        <form className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none text-sm"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none text-sm"
            />
          </div>
          <textarea
            rows={3}
            placeholder="Your Message"
            className="w-full px-3 py-2.5 md:px-4 md:py-3 glass rounded-xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none resize-none text-sm"
          />
          <button
            type="submit"
            className="w-full py-2.5 md:py-3 btn-premium text-white rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Business hours */}
      <div className="mt-6 md:mt-8 glass-premium rounded-2xl md:rounded-3xl p-4 md:p-6">
        <div className="text-center mb-4">
          <h3 className="text-base md:text-lg font-black uppercase italic flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            Business Hours
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {[
            { day: "Mon-Fri", hours: "5AM-11PM" },
            { day: "Saturday", hours: "6AM-10PM" },
            { day: "Sunday", hours: "8AM-8PM" },
            { day: "Support", hours: "24/7" }
          ].map((schedule, i) => (
            <div key={i} className="text-center p-2 md:p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="font-bold text-xs md:text-sm mb-1">{schedule.day}</div>
              <div className="text-primary font-black text-xs md:text-sm">{schedule.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
