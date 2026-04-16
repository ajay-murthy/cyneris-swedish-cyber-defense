import { Smartphone, Globe, Bluetooth, Wifi, Car, Brain } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android Application",
    code: "MOB-01",
    desc: "Static and dynamic analysis of APKs — reverse engineering, runtime instrumentation, MASVS-aligned reporting.",
  },
  {
    icon: Globe,
    title: "Web & URL Surface",
    code: "WEB-02",
    desc: "Authenticated and unauthenticated web app testing, API fuzzing, OWASP Top 10 plus business-logic flaws.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth & BLE",
    code: "BT-03",
    desc: "Pairing, GATT and protocol-level attacks against BLE peripherals, wearables and vehicular telematics.",
  },
  {
    icon: Wifi,
    title: "WiFi & Wireless",
    code: "WIFI-04",
    desc: "WPA2/WPA3 audits, rogue AP detection, captive-portal bypass and full RF spectrum reconnaissance.",
  },
  {
    icon: Car,
    title: "CAN Bus & Automotive",
    code: "CAN-05",
    desc: "ECU fuzzing, UDS diagnostic abuse and end-to-end ISO/SAE 21434 cybersecurity engineering audits.",
  },
  {
    icon: Brain,
    title: "AI Threat Modelling",
    code: "AI-06",
    desc: "Machine-learning assisted attack-path discovery, exploit prioritisation and continuous risk scoring.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            // 01 — Capabilities
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Six attack surfaces.
            <br />
            <span className="text-gradient-gold">One adversarial platform.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cyneris fuses AI-augmented reconnaissance with hands-on offensive engineering.
            Every engagement maps findings back to your compliance posture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {services.map((s, i) => (
            <div
              key={s.code}
              className="group relative bg-card hover:bg-card/60 transition-all duration-500 p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-radial-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-md border border-primary/30 bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">{s.code}</span>
                </div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="mt-8 flex items-center gap-2 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>EXPLORE</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
