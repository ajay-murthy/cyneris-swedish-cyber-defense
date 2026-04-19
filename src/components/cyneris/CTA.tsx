import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ScrambleText } from "@/components/cyneris/ScrambleText";

export const CTA = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated submission — wire up to backend later
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message received",
        description: "Our team will respond within one business day.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold" />
      <div className="absolute inset-0 grid-noise opacity-40" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
              // Engage
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05]">
              <ScrambleText text="Test your defences" />
              <br />
              <ScrambleText text="before " /><span className="text-gradient-gold"><ScrambleText text="they do." /></span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Send us a confidential message. Our offensive engineering team
              responds within one business day.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-mono text-xs uppercase tracking-widest">
                  Name
                </Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="font-mono text-xs uppercase tracking-widest">
                  Company
                </Label>
                <Input id="company" name="company" placeholder="Organisation" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest">
                Work email
              </Label>
              <Input id="email" name="email" type="email" required placeholder="you@company.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono text-xs uppercase tracking-widest">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your assessment scope, timelines, and target surfaces."
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              size="xl"
              className="w-full group"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
