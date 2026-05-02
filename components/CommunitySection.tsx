"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { communityStories, popularTemplates } from "@/lib/data";

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [storyIndex, setStoryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % communityStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const story = communityStories[storyIndex];

  return (
    <div ref={ref} className="space-y-8">
      {/* ── Top: Story (full width hero block) ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="bg-white border border-border/60 relative overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-gold" />

        <div className="p-10 md:p-14 pl-12 md:pl-16">
          {/* Label */}
          <span className="text-xs font-mono text-accent-gold/60 uppercase tracking-[0.2em] mb-6 block">
            同伴故事
          </span>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-text-primary mb-8 max-w-3xl">
                {story.content}
              </blockquote>

              {/* Keywords row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-mono text-text-secondary/40 uppercase tracking-wider">
                  关键词
                </span>
                <span className="px-3 py-1.5 bg-surface-hover text-sm font-mono text-accent-blue/80">
                  {story.draftKeywords}
                </span>
                <span className="text-xs text-text-secondary/30">→  AI 生成完整表达</span>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  — {story.authorDisplayName}
                </span>
                <div className="flex gap-6 text-sm text-text-secondary/60">
                  {[
                    { label: "感谢", value: story.thankCount },
                    { label: "鼓励", value: story.likeCount },
                  ].map((m) => (
                    <span key={m.label} className="flex items-center gap-1.5">
                      <span className="text-xs font-mono text-text-secondary/40">{m.label}</span>
                      <span className="font-ui font-medium text-text-secondary">{m.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Story dots */}
          <div className="flex gap-2 mt-8">
            {communityStories.map((_, i) => (
              <button
                key={i}
                onClick={() => setStoryIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-400 ${
                  i === storyIndex
                    ? "bg-accent-gold w-5"
                    : "bg-border hover:bg-text-secondary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Bottom row: Templates + Scene & Q&A ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Templates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2 bg-white border border-border/60 relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-blue" />
          <div className="p-8 pl-11">
            <span className="text-xs font-mono text-accent-blue/60 uppercase tracking-[0.2em] mb-6 block">
              模板共享
            </span>

            <div className="space-y-5">
              {popularTemplates.map((tpl, i) => (
                <motion.div
                  key={tpl.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-baseline gap-4 pb-4 border-b border-border/30 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-mono text-text-secondary/40 w-8 flex-shrink-0">
                    {tpl.scene}
                  </span>
                  <p className="text-base text-text-primary leading-relaxed flex-1">
                    {tpl.text}
                  </p>
                  <span className="text-xs font-mono text-text-secondary/50 flex-shrink-0">
                    {tpl.useCount.toLocaleString()} 次使用
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scene + Q&A (stacked) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-6"
        >
          {/* Scene Expansion */}
          <div className="bg-white border border-border/60 relative flex-1">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-gold" />
            <div className="p-6 pl-9">
              <span className="text-xs font-mono text-accent-gold/60 uppercase tracking-[0.2em] mb-4 block">
                场景扩充
              </span>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                你缺的场景，社区投票推动进入官方词库。
              </p>
              <div className="space-y-2">
                {["银行柜台", "机场安检", "家长会"].map((scene) => (
                  <div
                    key={scene}
                    className="flex items-center justify-between text-xs border-b border-border/20 pb-2 last:border-0"
                  >
                    <span className="text-text-primary">{scene}</span>
                    <span className="font-mono text-text-secondary/40">投票中</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Q&A */}
          <div className="bg-white border border-border/60 relative flex-1">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-blue" />
            <div className="p-6 pl-9">
              <span className="text-xs font-mono text-accent-blue/60 uppercase tracking-[0.2em] mb-4 block">
                互助问答
              </span>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                匿名提问，AI 补全碎片问题。回复无需打字。
              </p>
              <div className="flex flex-wrap gap-2">
                {["感谢", "鼓励", "我也经历过", "拥抱"].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1 text-xs border border-border/40 text-text-secondary/70"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Principles ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-wrap gap-x-8 gap-y-2 justify-center text-xs font-mono text-text-secondary/40 uppercase tracking-[0.15em]"
      >
        <span>可匿名</span>
        <span className="text-text-secondary/20">/</span>
        <span>AI 辅助发言</span>
        <span className="text-text-secondary/20">/</span>
        <span>一键互动 · 无需打字</span>
        <span className="text-text-secondary/20">/</span>
        <span>内容安全审核</span>
      </motion.div>
    </div>
  );
}
