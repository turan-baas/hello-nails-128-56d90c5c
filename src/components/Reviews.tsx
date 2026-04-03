const reviews = [
  {
    text: "Absolutely love this place! The attention to detail is incredible — my gel set lasted three full weeks without a single chip. The studio is spotless and the vibe is so relaxing. Already booked my next appointment.",
    name: "Jessica M.",
    source: "Google Review",
  },
  {
    text: "Best nail studio on the Lower East Side, hands down. I came in for a simple manicure and left with the most beautiful nail art I've ever had. The artists here are truly talented and they really listen to what you want.",
    name: "Sarah K.",
    source: "Google Review",
  },
  {
    text: "I've been coming to Hello Nails 128 for months now and every visit feels like a treat. The team is warm, professional, and always on trend. If you want nails that actually look like the inspo pics — this is your spot.",
    name: "Amanda R.",
    source: "Google Review",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-accent" : "text-neutral-200"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Rating header */}
        <div className="text-center reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            Testimonials
          </span>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span
              className="font-heading font-bold text-primary"
              style={{ fontSize: "6rem", lineHeight: 1 }}
            >
              4
            </span>
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} filled={true} />
                ))}
                <StarIcon filled={false} />
              </div>
              <span className="mt-1 text-sm text-text-muted">
                on Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Decorative quote mark */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-accent opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
              <p className="text-text-muted italic leading-[1.8]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <div className="flex gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} filled={true} />
                  ))}
                </div>
                <span className="font-semibold text-primary text-sm">
                  {review.name}
                </span>
                <span className="ml-2 text-text-muted text-xs">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
