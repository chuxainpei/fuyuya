"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { personas } from "@/lib/data";

export default function PersonaSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Mouse drag
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseUp = () => setIsDragging(false);
    const onMouseLeave = () => setIsDragging(false);

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging]);

  return (
    <div ref={containerRef}>
      <motion.div
        ref={sliderRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing
                   scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {personas.map((persona, i) => (
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex-shrink-0 w-[300px] md:w-[340px] snap-start"
          >
            <div className="bg-white border border-border/60 p-8 h-full
                            hover:bg-surface-hover transition-colors duration-300">
              {/* Label */}
              <span className="text-sm font-mono text-accent-blue/60 mb-4 block">
                {persona.label}
              </span>

              {/* Title */}
              <h3 className="font-serif font-bold text-2xl text-text-primary mb-4">
                {persona.title}
              </h3>

              {/* Conditions */}
              <p className="text-base text-text-secondary mb-4 leading-relaxed">
                {persona.conditions}
              </p>

              {/* Pain */}
              <div className="border-t border-border/50 pt-4 mb-4">
                <p className="text-sm text-text-secondary/70 italic">
                  {persona.pain}
                </p>
              </div>

              {/* Need */}
              <p className="text-base font-medium text-accent-gold">
                {persona.need}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
