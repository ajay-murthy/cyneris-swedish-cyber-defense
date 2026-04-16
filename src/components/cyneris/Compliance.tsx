import { CheckCircle2 } from "lucide-react";

const phases = [
  { phase: "01", title: "Concept Phase", desc: "Item definition, asset identification and TARA — Threat Analysis & Risk Assessment per ISO/SAE 21434 §15." },
  { phase: "02", title: "Product Development", desc: "Cybersecurity goals, technical concept design, hardware/software requirements aligned with §9 and §10." },
  { phase: "03", title: "Verification & Validation", desc: "Penetration testing, fuzzing campaigns and vulnerability analysis fulfilling §11 evidence requirements." },
  { phase: "04", title: "Production & Operations", desc: "Continuous cybersecurity monitoring, incident response plans and post-development phase support per §13." },
];

export const Compliance = () => {
  return (
    <section id="compliance" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
                // 03 — Compliance
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Engineered to
                <br />
                <span className="text-gradient-gold">ISO/SAE 21434.</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Axioms operates the full cybersecurity engineering lifecycle for road vehicles —
                from threat analysis and risk assessment through to production-phase monitoring.
              </p>

              <div className="space-y-3">
                {[
                  "TARA & risk treatment",
                  "Cybersecurity case documentation",
                  "Type approval support (UNECE R155)",
                  "Independent assessment reports",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
              <div className="space-y-8">
                {phases.map((p) => (
                  <div key={p.phase} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-md bg-card border border-primary/40 flex items-center justify-center font-mono text-primary font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {p.phase}
                    </div>
                    <div className="border border-border rounded-lg p-6 bg-card/60 hover:border-primary/40 transition-colors">
                      <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
