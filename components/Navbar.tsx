"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 60) {
        setVisible(true);
      } else if (currentY > lastScrollY && currentY > 100) {
        setVisible(false);
      } else if (currentY < lastScrollY) {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-bg-warm/80 backdrop-blur-sm border-b border-border"
        >
          <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="赋语鸭"
                width={36}
                height={36}
                className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-serif font-bold text-2xl text-text-primary tracking-wide">
                赋语鸭
              </span>
            </a>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-base text-text-secondary">
              <a
                href="#features"
                className="hover:text-text-primary transition-colors duration-200"
              >
                场景体验
              </a>
              <a
                href="#faq"
                className="hover:text-text-primary transition-colors duration-200"
              >
                常见问题
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
