import { Navbar } from "@/components/cyneris/Navbar";
import { Hero } from "@/components/cyneris/Hero";
import { Marquee } from "@/components/cyneris/Marquee";
import { Services } from "@/components/cyneris/Services";
import { Platform } from "@/components/cyneris/Platform";
import { Hardware } from "@/components/cyneris/Hardware";
import { Compliance } from "@/components/cyneris/Compliance";
import { Company } from "@/components/cyneris/Company";
import { CTA } from "@/components/cyneris/CTA";
import { Footer } from "@/components/cyneris/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Platform />
        <Hardware />
        <Compliance />
        <Company />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
