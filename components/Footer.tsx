import Image from "next/image";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-warm">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* Top: logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="赋语鸭"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="font-serif font-bold text-3xl text-text-primary">
              赋语鸭
            </span>
          </div>
          <p className="font-serif text-xl text-text-secondary italic">
            别让声音限制了你的表达。
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-mono text-text-secondary/60 mb-4 uppercase tracking-wider">
              产品
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-mono text-text-secondary/60 mb-4 uppercase tracking-wider">
              支持
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-mono text-text-secondary/60 mb-4 uppercase tracking-wider">
              关于
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 text-sm text-text-secondary/50">
          © 2025 赋语鸭
        </div>
      </div>
    </footer>
  );
}
