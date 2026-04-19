import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrambleText } from "@/components/cyneris/ScrambleText";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-noise opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-gold" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/20 bg-background/60 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono text-foreground tracking-widest uppercase">
              EST. 2024 · STOCKHOLM, SWEDEN
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-6 opacity-0 animate-fade-up tracking-tight" style={{ animationDelay: "0.1s" }}>
            <ScrambleText text="Adversarial" />
            <br />
            <ScrambleText text="intelligence for" />
            <br />
            <span className="italic"><ScrambleText text="connected systems." /></span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Axioms delivers AI-driven cybersecurity assessments and penetration testing across
            mobile, web, wireless and vehicular surfaces, engineered to ISO/SAE&nbsp;21434.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="gold" size="xl" className="group" onClick={() => scrollTo("contact")}>
              Request an Assessment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outlineGold" size="xl" onClick={() => scrollTo("services")}>
              <Terminal className="mr-2 h-4 w-4" />
              View Capabilities
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
            {[
              { k: "ISO 21434", v: "Aligned" },
              { k: "5", v: "Attack surfaces" },
              { k: "24/7", v: "Threat ops" },
              { k: "100%", v: "EU sovereign" },
            ].map((s) => (
              <div key={s.k} className="border-l-2 border-primary/40 pl-4">
                <div className="font-mono text-2xl md:text-3xl font-bold text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
