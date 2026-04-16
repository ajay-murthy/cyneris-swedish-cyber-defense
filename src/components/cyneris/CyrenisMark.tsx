interface LogoProps {
  className?: string;
}

export const CyrenisMark = ({ className }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer broken hexagonal ring */}
      <path
        d="M16 2 L27 8.5 L27 23.5 L16 30 L5 23.5 L5 8.5 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="1.25"
        strokeLinejoin="miter"
        opacity="0.45"
        strokeDasharray="3 2"
      />
      {/* Inner solid hexagonal frame with gap (forms a C) */}
      <path
        d="M16 7 L23 11 L23 16 M23 21 L16 25 L9 21 L9 11 L16 7"
        stroke="hsl(var(--primary))"
        strokeWidth="1.75"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      {/* Crosshair tick marks */}
      <line x1="16" y1="0" x2="16" y2="3" stroke="hsl(var(--primary))" strokeWidth="1.25" />
      <line x1="16" y1="29" x2="16" y2="32" stroke="hsl(var(--primary))" strokeWidth="1.25" />
      {/* Central node */}
      <rect x="14" y="14" width="4" height="4" fill="hsl(var(--primary))" />
      <rect x="15" y="15" width="2" height="2" fill="hsl(var(--background))" />
    </svg>
  );
};
