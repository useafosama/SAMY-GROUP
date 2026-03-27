import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "خدماتنا", href: "#services" },
  { name: "أعمالنا", href: "#portfolio" },
  { name: "فيديوهات", href: "#videos" },
  { name: "آراء العملاء", href: "#testimonials" },
  { name: "تواصل معنا", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50">
          <img src="/logo.png" alt="SAMY GROUP" className="h-12 md:h-16 w-auto object-contain" />
          <span className="sr-only">SAMY GROUP</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-gold transition-colors font-medium text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-light text-black font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            استشارة مجانية
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20,
            pointerEvents: isMobileMenuOpen ? "auto" : "none",
          }}
          className="absolute top-full left-0 right-0 glass-effect flex flex-col items-center py-8 gap-6 md:hidden border-t border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
