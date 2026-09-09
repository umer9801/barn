import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
};

export function Marquee({ items, className, duration = 30, reverse }: Props) {
  const row = [...items, ...items];
  return (
    <div className={cn("overflow-hidden py-5 select-none", className)}>
      <div
        className={cn("marquee-track", reverse && "marquee-reverse")}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${dup}-${item}-${i}`}
                className="hero-type flex items-center gap-8 pr-8 text-[10vw] sm:text-[6vw] lg:text-[4.5vw]"
              >
                {item}
                <span className="text-[0.5em] opacity-70">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
