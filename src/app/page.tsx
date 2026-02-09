import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MembershipSection } from "@/components/MembershipSection";
import { TrainersSection } from "@/components/TrainersSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-secondary/20 via-primary/15 to-accent/20 blur-[120px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/5 via-accent/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '50s' }} />
        
        {/* Additional accent orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-accent/15 to-primary/10 blur-[100px] rounded-full animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/15 to-accent/10 blur-[100px] rounded-full animate-float delay-1000" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection />
      <MembershipSection />
      <TrainersSection />
      <ContactSection />
    </div>
  );
}
