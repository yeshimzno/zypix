import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-8 w-8", className)}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="hsl(var(--primary))" />
        <stop offset="1" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    <path
      d="M16.5 4H7.5C6.67 4 6 4.67 6 5.5V6.5H18V5.5C18 4.67 17.33 4 16.5 4Z"
      fill="url(#logo-gradient)"
    />
    <path
      d="M2 9C2 7.9 2.9 7 4 7H20C21.1 7 22 7.9 22 9V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V9Z"
      fill="url(#logo-gradient)"
    />
    <circle cx="12" cy="14" r="4" fill="hsl(var(--background))" />
    <circle cx="12" cy="14" r="2.5" fill="url(#logo-gradient)" />
    <rect
      x="5"
      y="10"
      width="2"
      height="2"
      rx="0.5"
      fill="hsl(var(--background))"
    />
  </svg>
);

export default Logo;
