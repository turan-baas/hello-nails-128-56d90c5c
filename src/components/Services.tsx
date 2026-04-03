const services = [
  {
    title: "Signature Manicure",
    description:
      "Our signature manicure is a pampering experience from start to finish. We shape, buff, and treat your nails with premium products, finishing with a flawless polish of your choice. Walk out with nails that radiate confidence.",
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Gel & Dip Extensions",
    description:
      "Long-lasting and chip-resistant, our gel and dip powder extensions give you salon-perfect nails for weeks. Choose from a stunning range of colors and finishes — matte, glossy, glitter, or ombré. Built strong, designed beautiful.",
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Nail Art",
    description:
      "Express yourself with hand-painted designs, 3D accents, foils, and chrome finishes. Our artists collaborate with you to create one-of-a-kind nail art that turns heads. From minimalist lines to bold statement nails — if you can dream it, we can paint it.",
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            Our Services
          </span>
          <h2
            className="mt-4 font-heading font-semibold text-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            What We Offer
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto text-[1.125rem] leading-[1.8]">
            Every service is crafted with precision, premium products, and a personal touch.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-2xl border border-neutral-200 p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/40`}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-text-muted leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-text-muted">
            Want something specific? We love custom requests.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-accent text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
