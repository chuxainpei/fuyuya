"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/lib/data";

const colorMap = {
  blue: { line: "bg-accent-blue", tag: "text-accent-blue", bg: "bg-accent-blue/5" },
  gold: { line: "bg-accent-gold", tag: "text-accent-gold", bg: "bg-accent-gold/5" },
  red: { line: "bg-accent-red", tag: "text-accent-red", bg: "bg-accent-red/5" },
};

// Mountain peak layout — x% = card center, y = vertical offset (px)
// Silhouette:  _/|\_
const cardPositions = [
  { x: 12, y: 220, rot: -1.2, z: 1 },   // far-left base
  { x: 30, y: 150, rot: 1.5, z: 2 },    // left mid
  { x: 50, y: 80, rot: -1.8, z: 5 },    // CENTER PEAK
  { x: 70, y: 140, rot: 2.0, z: 4 },    // right mid
  { x: 86, y: 200, rot: -0.8, z: 3 },   // far-right base
];

export default function FeatureStickyNotes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative mx-auto max-w-[1000px] h-[720px] md:h-[660px]">
      {features.map((feature, i) => {
        const colors = colorMap[feature.color];
        const pos = cardPositions[i];
        return (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 120, rotate: 0 }}
            animate={
              isInView
                ? { opacity: 1, y: pos.y, rotate: pos.rot }
                : { opacity: 0, y: 120, rotate: 0 }
            }
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              zIndex: pos.z,
              left: `${pos.x}%`,
            }}
            className="absolute w-[300px] md:w-[340px] -translate-x-1/2"
          >
            <motion.div
              whileHover={{
                scale: 1.04,
                rotate: 0,
                zIndex: 10,
                boxShadow:
                  "0 24px 48px -12px rgba(0,0,0,0.18), 0 6px 12px -4px rgba(0,0,0,0.1)",
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className={`relative bg-white ${colors.bg} border border-border/60 p-7
                           shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08),0_2px_6px_-2px_rgba(0,0,0,0.04)]`}
            >
              {/* Colored left accent bar */}
              <div className={`absolute left-0 top-4 bottom-4 w-[3px] ${colors.line}`} />

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3 pl-2">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="font-serif font-semibold text-2xl text-text-primary">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-text-secondary mb-3 pl-2">
                {feature.description}
              </p>

              {/* Detail hint */}
              <div className="pl-2 pt-2 border-t border-border/50">
                <span className={`text-sm font-mono ${colors.tag}/70`}>
                  {feature.detail}
                </span>
              </div>
            </motion.div>

            {/* Breathing glow behind the card */}
            <motion.div
              animate={{ opacity: [0.25, 0.55, 0.25] }}
              transition={{
                duration: 3 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-accent-gold/8 blur-2xl -z-10 scale-125"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
