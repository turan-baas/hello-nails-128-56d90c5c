"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact info + form */}
          <div className="reveal">
            <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
              Contact
            </span>
            <h2
              className="mt-4 font-heading font-semibold text-primary"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Get in Touch
            </h2>
            <p className="mt-4 text-text-muted text-[1.125rem] leading-[1.8]">
              Ready for your next appointment? Reach out to us or stop by our studio on Rivington Street.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+12129952288"
                className="flex items-center gap-4 text-primary hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <span className="font-medium">(212) 995-2288</span>
              </a>

              <div className="flex items-center gap-4 text-primary">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">128 Rivington St, New York, NY 10002</span>
              </div>

              <a
                href="https://maps.google.com/?q=128+Rivington+St+New+York+NY+10002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-accent hover:text-accent-light text-sm font-medium uppercase tracking-[0.1em] transition-colors"
              >
                Open in Google Maps
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>

            {/* Contact form */}
            <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-accent text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map placeholder */}
          <div className="reveal reveal-delay-1">
            <div
              className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden border-2 border-accent/20"
              style={{ background: "var(--color-primary)" }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Map pin illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-4 text-white/60 text-sm">
                    128 Rivington St
                  </p>
                  <p className="text-white/40 text-xs">
                    Lower East Side, NYC
                  </p>
                </div>
              </div>
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-heading font-semibold text-lg">
                  Hello Nails 128
                </p>
                <p className="text-white/60 text-sm mt-1">
                  128 Rivington St, New York, NY 10002
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
