import deviceCompact from "@/assets/device-compact.png";
import deviceNexus from "@/assets/device-nexus.png";
import { Cpu, Radio, ShieldCheck } from "lucide-react";

export const Hardware = () => {
  return (
    <section id="hardware" className="relative py-24 md:py-32 bg-card/30">
      <div className="absolute inset-0 grid-noise opacity-30" />
      <div className="container relative">
        <div className="max-w-3xl mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            // 02 — Field hardware
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Purpose-built
            <br />
            <span className="text-gradient-gold">offensive appliances.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our consultants deploy Axioms field units — ruggedised security testing appliances
            engineered in Sweden for on-site assessments and continuous monitoring.
          </p>
        </div>

        {/* NEXUS-6 Featured */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 bg-gradient-radial-gold opacity-60 blur-3xl" />
            <div className="relative animate-float-slow">
              <img
                src={deviceNexus}
                alt="Axioms Nexus-6 security testing appliance with dual antennas and tactical display"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background border border-primary/40 rounded-md px-4 py-2 font-mono text-xs gold-border-glow">
              <span className="text-primary">●</span> ONLINE — RF SCANNING
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-mono text-xs tracking-widest text-primary">FLAGSHIP</span>
            <h3 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
              NEXUS-6
              <span className="block text-base font-sans font-normal text-muted-foreground mt-2">
                Security Testing Appliance
              </span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A tactical penetration-testing platform combining wide-band SDR, dual high-gain antennas
              and Axioms OS. Designed for in-field red team engagements across automotive, IoT and
              enterprise wireless infrastructure.
            </p>

            <div className="space-y-4">
              {[
                { icon: Radio, k: "Wireless coverage", v: "2.4/5 GHz, BLE 5.3, Sub-GHz, CAN" },
                { icon: Cpu, k: "Compute", v: "Octa-core ARM, 16GB RAM, NPU accelerated" },
                { icon: ShieldCheck, k: "Certifications", v: "CE, FCC, ISO 21434 toolchain" },
              ].map((spec) => (
                <div key={spec.k} className="flex items-start gap-4 p-4 border border-border rounded-md bg-background/40 hover:border-primary/40 transition-colors">
                  <spec.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.75} />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{spec.k}</div>
                    <div className="text-sm font-medium mt-0.5">{spec.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CMP-01 Compact */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-mono text-xs tracking-widest text-primary">COMPACT</span>
            <h3 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
              SENTRY-C1
              <span className="block text-base font-sans font-normal text-muted-foreground mt-2">
                Continuous Monitoring Node
              </span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              An always-on edge sensor for continuous network and RF monitoring. Deploy across
              office floors, factory cells or vehicle fleets to feed live telemetry into the
              Axioms threat intelligence dashboard.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Form factor", v: "Mini-ITX 14×14 cm" },
                { k: "Display", v: "10\" touch HMI" },
                { k: "Network", v: "GbE + WiFi 6E" },
                { k: "Power", v: "12V DC / PoE+" },
              ].map((s) => (
                <div key={s.k} className="border-l border-primary/40 pl-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                  <div className="text-sm font-medium mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-radial-gold opacity-50 blur-3xl" />
            <div className="relative animate-float-slow" style={{ animationDelay: "1s" }}>
              <img
                src={deviceCompact}
                alt="Axioms Sentry-C1 compact monitoring node with integrated touchscreen"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
