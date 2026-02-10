import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MembershipSection } from "@/components/MembershipSection";
import { TrainersSection } from "@/components/TrainersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/20 via-primary/15 to-accent/20 blur-[100px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-accent/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '50s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <main>
        <HeroSection />
        <StatsSection />
        <section id="features"><FeaturesSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="membership"><MembershipSection /></section>
        <section id="trainers"><TrainersSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      
      <Footer />
    </div>
  );
}
