import Image from "next/image";

// The Axis Shift wordmark is a fixed brand asset (public/axisshift-logo.png).
// Do not redesign, retype, recolor, or recreate it with text/SVG/CSS.
export function Logo({
  className = "h-13 w-[215px] sm:h-15 sm:w-[250px] lg:h-17 lg:w-[280px]",
}: {
  className?: string;
}) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <Image
        src="/axisshift-logo.png"
        alt="Axis Shift Data Systems"
        fill
        sizes="(max-width: 640px) 215px, (max-width: 1024px) 250px, 280px"
        className="object-contain object-left"
        priority
      />
    </span>
  );
}
