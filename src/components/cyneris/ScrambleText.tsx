import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&><[]{}";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  className?: string;
}

export function ScrambleText({ text, duration = 900, className }: ScrambleTextProps) {
  const [output, setOutput] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame: number;
    let startTs = 0;

    const animate = (ts: number) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const revealed = Math.floor(progress * text.length);
      setOutput(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return ch;
            if (i < revealed) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTs = 0;
          frame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text, duration]);

  return (
    <span ref={ref} className={className}>
      {output}
    </span>
  );
}
