export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Text column */}
          <div className="lg:col-span-3 reveal">
            <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
              About Us
            </span>
            <h2
              className="mt-4 font-heading font-semibold text-primary"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Crafting Beauty on Rivington Street
            </h2>
            <p className="mt-8 text-[1.125rem] leading-[1.8] text-text-muted">
              Nestled in the vibrant heart of New York&apos;s Lower East Side, Hello Nails 128 has become a neighborhood staple for those who believe nails are more than a routine — they&apos;re a form of self-expression. Our studio at 128 Rivington Street blends downtown cool with meticulous attention to detail.
            </p>
            <p className="mt-6 text-[1.125rem] leading-[1.8] text-text-muted">
              Our team of skilled nail artists brings years of experience from some of the city&apos;s most respected salons. Whether you&apos;re looking for a clean, classic manicure or an intricate hand-painted design, we pour creativity and care into every set. We use only premium, long-lasting products that keep your nails looking flawless.
            </p>
            <p className="mt-6 text-[1.125rem] leading-[1.8] text-text-muted">
              Step inside and you&apos;ll feel the difference: a calm, welcoming space designed for you to unwind while we work our magic. Because at Hello Nails 128, every visit is a little moment of luxury.
            </p>
          </div>

          {/* Decorative column */}
          <div className="lg:col-span-2 flex justify-center reveal reveal-delay-1">
            <div className="relative w-72 h-80">
              {/* Background shape */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "var(--color-surface)" }}
              />
              {/* Accent shape */}
              <div
                className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20"
                style={{ background: "var(--color-accent)" }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl opacity-15 rotate-12"
                style={{ background: "var(--color-accent)" }}
              />
              {/* Rating display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-8xl font-heading font-bold text-primary">
                  4.0
                </span>
                <div className="flex gap-1 mt-3">
                  {[1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-text-muted/30"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="mt-3 text-sm text-text-muted tracking-wide uppercase">
                  Google Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
