import { Navbar } from "@/components/axioms/Navbar";
import { Hero } from "@/components/axioms/Hero";
import { Marquee } from "@/components/axioms/Marquee";
import { Services } from "@/components/axioms/Services";
import { Platform } from "@/components/axioms/Platform";
import { Hardware } from "@/components/axioms/Hardware";
import { Compliance } from "@/components/axioms/Compliance";
import { Company } from "@/components/axioms/Company";
import { CTA } from "@/components/axioms/CTA";
import { Footer } from "@/components/axioms/Footer";

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
