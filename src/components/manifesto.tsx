export function Manifesto() {
  return (
    <section className="flex items-center justify-center bg-ivory/70 px-5 py-10 sm:px-8 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <svg
          className="mx-auto h-5 w-5 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 21C12 14 15 9 21 6c0 7-3.5 11-9 12Zm0 0C12 15 9.5 11 4 9c0 6 3 10 8 12Z"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-4 font-serif text-xl font-light leading-[1.35] text-graphite sm:text-[1.75rem]">
          Relacionamentos influenciam profundamente
          <br className="hidden sm:block" /> a forma como vivemos, sentimos e nos percebemos.
        </p>
      </div>
    </section>
  );
}
