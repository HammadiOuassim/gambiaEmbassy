import Image from "next/image";

export function Crest({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/coat-of-arms.png"
      alt=""
      width={500}
      height={500}
      className={`object-contain ${className}`}
      aria-hidden
    />
  );
}

export function GambiaFlag({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="5" fill="#CE1126" />
      <rect y="5" width="24" height="1.2" fill="#fff" />
      <rect y="6.2" width="24" height="3.6" fill="#0C1C8C" />
      <rect y="9.8" width="24" height="1.2" fill="#fff" />
      <rect y="11" width="24" height="5" fill="#3A7728" />
    </svg>
  );
}

export function QatarFlag({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" fill="#8A1538" />
      <path
        d="M0 0h8l2 1.6L8 3.2l2 1.6L8 6.4l2 1.6L8 9.6l2 1.6L8 12.8 10 14.4 8 16H0V0z"
        fill="#fff"
      />
    </svg>
  );
}
