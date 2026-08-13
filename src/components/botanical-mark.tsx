export function BotanicalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
      className={`mx-auto h-6 w-8 text-gold ${className}`}
    >
      <path
        d="M4 20C10 20 16 17 22 10"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M22 10c-3.6.2-6 1.4-7.6 3.6 2.6.6 5.2-.4 7.6-3.6Zm0 0c-1-3.4-.4-5.9 1.6-7.8 1.4 2.3 1.2 4.9-1.6 7.8Zm0 0c2.8-.6 5-.2 6.8 1.4-2 1.6-4.4 1.7-6.8-1.4Zm-8.6 6.2c-2.8-.8-5-.5-6.8 1 1.9 1.5 4.2 1.6 6.8-1Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
