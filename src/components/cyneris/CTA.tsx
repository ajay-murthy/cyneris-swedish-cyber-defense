import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold" />
      <div className="absolute inset-0 grid-noise opacity-40" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
            // Engage
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05]">
            Test your defences
            <br />
            before <span className="text-gradient-gold">they do.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Schedule a confidential scoping call with our offensive engineering team.
            Initial assessments delivered within 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" className="group">
              Book Scoping Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outlineGold" size="xl">
              hello@axioms.se
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
