import { Users, Zap, Trophy, Clock, MapPin, Phone, Mail, Send, ArrowRight, Sparkles, MessageCircle, HeadphonesIcon } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Fitness Street", "Downtown City, ST 12345"],
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

const faqs = [
  {
    question: "How do I sign up for a membership?",
    answer: "You can sign up online or visit our gym. Choose your plan, complete the registration, and start training!"
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes! You can cancel your membership at any time with no hidden fees or long-term commitments."
  },
  {
    question: "Do you offer personal training?",
    answer: "Absolutely! We have certified personal trainers available for 1-on-1 sessions tailored to your goals."
  }
];

export function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest mb-6">
          <MessageCircle className="w-4 h-4" />
          Get In Touch
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
          We'd Love To <span className="text-primary italic relative">
            Hear From You
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" />
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions? Our team is here to help you start your fitness journey
        </p>
      </div>

      {/* Contact info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
        {contactInfo.map((item, i) => (
          <div
            key={i}
            className="group glass-premium rounded-3xl p-8 text-center hover-lift transition-all duration-500"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`} />

            {/* Icon */}
            <div className="relative mb-6">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-black mb-4 uppercase italic group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <div className="space-y-2">
              {item.details.map((detail, j) => (
                <p key={j} className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  {detail}
                </p>
              ))}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Contact form and FAQ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Contact Form */}
        <div className="glass-premium rounded-3xl p-8">
          <h3 className="text-2xl font-black mb-6 uppercase italic flex items-center gap-3">
            <Send className="w-6 h-6 text-primary" />
            Send Us A Message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none"
                />
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none"
              />
            </div>
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none"
              />
            </div>
            <div className="relative">
              <select className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none appearance-none">
                <option value="" className="bg-gray-900">Select a topic</option>
                <option value="membership" className="bg-gray-900">Membership Inquiry</option>
                <option value="training" className="bg-gray-900">Personal Training</option>
                <option value="sales" className="bg-gray-900">Sales & Products</option>
                <option value="other" className="bg-gray-900">Other</option>
              </select>
            </div>
            <div className="relative">
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 btn-premium text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="glass-premium rounded-3xl p-8">
          <h3 className="text-2xl font-black mb-6 uppercase italic flex items-center gap-3">
            <HeadphonesIcon className="w-6 h-6 text-primary" />
            Frequently Asked
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground text-sm group-hover:text-white/80 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support info */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">We're here to help anytime</p>
              </div>
            </div>
            <button className="w-full py-3 glass rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call Support Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Business hours */}
      <div className="relative z-10 mt-12 glass-premium rounded-3xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black uppercase italic flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-primary" />
            Business Hours
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { day: "Monday - Friday", hours: "5:00 AM - 11:00 PM" },
            { day: "Saturday", hours: "6:00 AM - 10:00 PM" },
            { day: "Sunday", hours: "8:00 AM - 8:00 PM" },
            { day: "Holidays", hours: "10:00 AM - 4:00 PM" }
          ].map((schedule, i) => (
            <div key={i} className="text-center p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="font-bold mb-1">{schedule.day}</div>
              <div className="text-primary font-black">{schedule.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
