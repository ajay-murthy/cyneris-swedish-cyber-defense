const items = [
  "ISO/SAE 21434",
  "OWASP MASVS",
  "PTES METHODOLOGY",
  "NIS2 READY",
  "MITRE ATT&CK",
  "GDPR COMPLIANT",
  "CRA 2024",
  "TISAX ALIGNED",
];

export const Marquee = () => {
  return (
    <section className="relative border-y border-border bg-card/40 backdrop-blur-sm py-6 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 font-mono text-xs tracking-[0.3em] text-muted-foreground">
            <span>{item}</span>
            <span className="text-primary">◆</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
