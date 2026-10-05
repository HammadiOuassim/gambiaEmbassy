export function Crest({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#073528" />
      <circle cx="32" cy="32" r="28" fill="#f4f1ea" />
      <path d="M32 10l14 6v14c0 10-6 16-14 20-8-4-14-10-14-20V16l14-6z" fill="#0b4634" />
      <path d="M32 16l9 4v9c0 6-4 11-9 14-5-3-9-8-9-14v-9l9-4z" fill="#f4f1ea" />
      <path d="M23 28h18v3H23zm0 6h18v3H23z" fill="#0b4634" />
      <circle cx="32" cy="24" r="3" fill="#c4a15a" />
      <path d="M20 46c4 4 8 6 12 6s8-2 12-6" fill="none" stroke="#ce1126" strokeWidth="2" />
    </svg>
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
