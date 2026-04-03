export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-primary)" }}
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 40%, #D4956A33 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 60%, #D4956A22 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 50% 20%, #E8B89811 0%, transparent 60%)",
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full border border-accent/20 animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full border border-accent/10 animate-float-slow" />
      <div
        className="absolute top-[30%] right-[15%] w-20 h-20 animate-float-slow"
        style={{
          background: "var(--color-accent)",
          opacity: 0.08,
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
      <div
        className="absolute bottom-[30%] left-[15%] w-24 h-24 animate-float"
        style={{
          background: "var(--color-accent)",
          opacity: 0.06,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-[30%] w-[1px] h-[120%] opacity-10 -rotate-[20deg] origin-top"
        style={{ background: "var(--color-accent)" }}
      />
      <div
        className="absolute top-0 right-[32%] w-[1px] h-[120%] opacity-5 -rotate-[20deg] origin-top"
        style={{ background: "var(--color-accent)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          className="font-heading font-bold text-white animate-fade-in-up"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Hello Nails
          <span className="text-accent"> 128</span>
        </h1>
        <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl mx-auto font-body font-normal leading-relaxed animate-fade-in-up-delay-1">
          Where artistry meets elegance — your premier nail destination in the heart of the Lower East Side.
        </p>
        <div className="mt-10 animate-fade-in-up-delay-2">
          <a
            href="#contact"
            className="inline-block bg-accent text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
          >
            Book Your Visit
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg), transparent)",
        }}
      />
    </section>
  );
}
