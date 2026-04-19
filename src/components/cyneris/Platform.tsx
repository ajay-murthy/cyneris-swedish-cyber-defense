import { ScrambleText } from "@/components/cyneris/ScrambleText";

export const Platform = () => {
  return (
    <section id="platform" className="relative py-24 md:py-32 border-y border-border bg-card/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
              // Platform
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <ScrambleText text="An adversary's" />
              <br />
              <span className="text-gradient-gold"><ScrambleText text="view of your stack." /></span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              The Axioms platform consolidates findings from every assessment into a single
              live dashboard, correlating vulnerabilities, exploitability and business impact
              with AI-driven prioritisation.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-mono text-3xl font-bold text-primary">98.4%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Detection accuracy
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-primary">&lt; 4h</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Critical SLA
                </div>
              </div>
            </div>
          </div>

          {/* Terminal mock */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-radial-gold opacity-50 blur-2xl" />
            <div className="relative bg-background border border-border rounded-lg overflow-hidden shadow-elegant">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/60">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-3">axioms@nexus-6 ~ scan</span>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed space-y-1">
                <div className="text-muted-foreground">$ axioms scan --target acme.io --modules web,api,bt</div>
                <div className="text-primary">[+] Initiating reconnaissance...</div>
                <div className="text-muted-foreground">[*] Subdomains discovered: 47</div>
                <div className="text-muted-foreground">[*] Endpoints mapped: 1,284</div>
                <div className="text-muted-foreground">[*] Bluetooth devices: 3</div>
                <div className="text-warning">[!] CVE-2024-3094 detected on api.acme.io</div>
                <div className="text-destructive">[!] CRITICAL: Auth bypass /v2/admin/users</div>
                <div className="text-primary">[✓] AI exploit-path analysis complete</div>
                <div className="text-foreground">[→] 12 findings · 2 critical · 5 high · 5 medium</div>
                <div className="text-muted-foreground pt-2">$ axioms report --format pdf --iso 21434</div>
                <div className="text-foreground terminal-cursor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
