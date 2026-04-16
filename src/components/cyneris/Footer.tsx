import { CyrenisMark } from "./CyrenisMark";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/40 pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <CyrenisMark className="w-7 h-7" />
              <span className="font-mono text-lg font-bold">AXIOMS<span className="text-primary">.</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              AI-driven cybersecurity assessments and penetration testing.
              Engineered in Sweden, deployed across the EU.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Capabilities</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Security</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Web & API</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Wireless & RF</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Automotive CAN</a></li>
              <li><a href="#compliance" className="hover:text-primary transition-colors">ISO 21434</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Axioms AB</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Stockholm, Sweden</li>
              <li>Est. 2024</li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Responsible disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © 2024–{new Date().getFullYear()} AXIOMS AB · ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-primary transition-colors">TERMS</a>
            <a href="#" className="hover:text-primary transition-colors">SECURITY.TXT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
