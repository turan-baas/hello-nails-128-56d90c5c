const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-white">
              Hello Nails<span className="text-accent"> 128</span>
            </span>
            <p className="mt-4 text-white/40 leading-relaxed">
              Premium nail artistry in the heart of the Lower East Side. Where every detail matters.
            </p>
          </div>

          {/* Center: Nav links */}
          <div>
            <h4 className="text-white/60 text-[0.8rem] uppercase tracking-[0.15em] font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="text-white/60 text-[0.8rem] uppercase tracking-[0.15em] font-semibold mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+12129952288"
                className="block text-white/40 hover:text-accent transition-colors text-sm"
              >
                (212) 995-2288
              </a>
              <p className="text-white/40 text-sm">
                128 Rivington St
                <br />
                New York, NY 10002
              </p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              &copy; 2026 Hello Nails 128. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              Crafted with care in New York City
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
