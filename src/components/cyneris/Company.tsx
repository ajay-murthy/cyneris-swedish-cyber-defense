import { MapPin, Calendar, Users, Award } from "lucide-react";

export const Company = () => {
  return (
    <section id="company" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
              // 04 — Company
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Born in
              <br />
              <span className="text-gradient-gold">Stockholm, 2024.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Axioms was founded in 2024 by a team of offensive-security engineers and
              automotive cybersecurity specialists with one shared belief: defence requires
              an attacker's mindset, sharpened by AI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Headquartered in Stockholm, we serve OEMs, financial institutions and critical
              infrastructure operators across the Nordics and EU — under sovereign data
              jurisdiction and full GDPR compliance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {[
                { icon: MapPin, k: "Headquarters", v: "Stockholm, Sweden" },
                { icon: Calendar, k: "Founded", v: "2024" },
                { icon: Users, k: "Operating", v: "EU & Nordics" },
                { icon: Award, k: "Specialisation", v: "Automotive · Mobile · IoT" },
              ].map((s) => (
                <div key={s.k} className="flex items-start gap-3 p-4 border border-border rounded-md bg-card/40">
                  <s.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                    <div className="text-sm font-medium mt-0.5">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
