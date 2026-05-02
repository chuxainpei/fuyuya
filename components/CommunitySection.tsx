"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { communityStories, popularTemplates } from "@/lib/data";

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [storyIndex, setStoryIndex] = useState(0);

  // Auto-advance stories
  useEffect(() => {
    const timer = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % communityStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const story = communityStories[storyIndex];

  return (
    <div ref={ref} className="space-y-8">
      {/* ── Top row: Story + Templates ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Peer Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-border/60 p-8 relative overflow-hidden min-h-[340px]"
        >
          {/* Left accent — gold */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-gold" />

          <div className="pl-3">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📖</span>
              <h3 className="font-serif font-semibold text-2xl text-text-primary">
                同伴故事
              </h3>
            </div>

            {/* Story content with transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote */}
                <blockquote className="font-serif text-xl leading-relaxed text-text-primary mb-6 italic">
                  “{story.content}”
                </blockquote>

                {/* Keywords → sentence hint */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-text-secondary/50 uppercase tracking-wider">
                    关键词输入
                  </span>
                  <div className="mt-1 px-3 py-2 bg-surface-hover text-sm font-mono text-accent-blue/80">
                    {story.draftKeywords}
                  </div>
                  <span className="text-xs text-text-secondary/40 mt-1 block">
                    → AI 辅助生成完整表达
                  </span>
                </div>

                {/* Author + meta */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    — {story.authorDisplayName}
                  </span>
                  <div className="flex gap-4 text-sm text-text-secondary">
                    <span>❤️ {story.likeCount}</span>
                    <span>🙏 {story.thankCount}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Story dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {communityStories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStoryIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-400 ${
                    i === storyIndex
                      ? "bg-accent-gold scale-125"
                      : "bg-border hover:bg-text-secondary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Popular Templates */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-border/60 p-8 relative min-h-[340px]"
        >
          {/* Left accent — blue */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-blue" />

          <div className="pl-3">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📋</span>
              <h3 className="font-serif font-semibold text-2xl text-text-primary">
                模板共享
              </h3>
            </div>

            {/* Template list */}
            <div className="space-y-5">
              {popularTemplates.map((tpl, i) => (
                <motion.div
                  key={tpl.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="border-b border-border/40 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-1">
                    <span>{tpl.sceneEmoji}</span>
                    <span className="text-xs font-mono text-text-secondary/50">
                      {tpl.scene}
                    </span>
                  </div>
                  <p className="text-base text-text-primary leading-relaxed mb-2">
                    “{tpl.text}”
                  </p>
                  <div className="flex gap-4 text-xs text-text-secondary/60">
                    <span>收藏 {tpl.collectCount}</span>
                    <span>已用 {tpl.useCount.toLocaleString()} 次</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom row: Scene Expansion + Q&A ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white border border-border/60 p-8 relative"
      >
        {/* Left accent — gold + blue split hint */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-gold" />

        <div className="pl-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scene Expansion */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🗳️</span>
                <h4 className="font-serif font-semibold text-lg text-text-primary">
                  场景扩充
                </h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                用户提交新场景需求，社区投票推动进入官方词库。
                「机场安检」「银行柜台」「家长会」——你缺的场景，大家一起来建。
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-gold/10 text-xs font-mono text-accent-gold">
                <span>「银行柜台」</span>
                <span className="text-text-secondary/40">|</span>
                <span>872 人支持</span>
              </div>
            </div>

            {/* Q&A */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">💬</span>
                <h4 className="font-serif font-semibold text-lg text-text-primary">
                  互助问答
                </h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                匿名提问，AI 帮你把碎片问题补全为清晰问题后再发布。
                回复只需一键——「感谢」「鼓励」「我也经历过」。
              </p>
              <div className="flex flex-wrap gap-2">
                {["感谢", "鼓励", "我也经历过", "拥抱"].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1 text-xs border border-border/50 text-text-secondary"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Design Principles Strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {[
          { icon: "🔒", text: "可匿名" },
          { icon: "🤖", text: "AI 辅助发言" },
          { icon: "💛", text: "一键互动，无需打字" },
          { icon: "🛡️", text: "内容安全审核" },
        ].map((item) => (
          <span
            key={item.text}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-text-secondary border border-border/40"
          >
            <span>{item.icon}</span>
            {item.text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
