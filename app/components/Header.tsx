"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/menu", label: "品書き" },
  { href: "/info", label: "店舗情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "linear-gradient(to bottom, rgba(10,10,10,0.7), transparent)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(185,28,28,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl transition-colors duration-200"
          style={{
            fontFamily: "var(--font-mincho)",
            color: "var(--color-kin)",
          }}
        >
          からす森
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-gothic)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:018-835-5906"
            className="text-sm px-4 py-1.5 rounded tracking-wider transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid var(--color-akachochin)",
              color: "var(--color-akachochin-bright)",
              fontFamily: "var(--font-gothic)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-akachochin)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-akachochin-bright)";
            }}
          >
            TEL 018-835-5906
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className="w-6 h-0.5 transition-all duration-200"
            style={{
              background: "var(--color-kin)",
              transform: menuOpen
                ? "rotate(45deg) translateY(4px)"
                : "none",
            }}
          />
          <span
            className="w-6 h-0.5 transition-all duration-200"
            style={{
              background: "var(--color-kin)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="w-6 h-0.5 transition-all duration-200"
            style={{
              background: "var(--color-kin)",
              transform: menuOpen
                ? "rotate(-45deg) translateY(-4px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2"
          style={{ background: "rgba(10, 10, 10, 0.98)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-white/70 hover:text-white transition-colors border-b border-white/5 tracking-wider cursor-pointer"
              style={{ fontFamily: "var(--font-gothic)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:018-835-5906"
            className="block mt-4 text-center py-3 rounded tracking-wider transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid var(--color-akachochin)",
              color: "var(--color-akachochin-bright)",
              fontFamily: "var(--font-gothic)",
            }}
          >
            TEL 018-835-5906
          </a>
        </div>
      )}
    </header>
  );
}
