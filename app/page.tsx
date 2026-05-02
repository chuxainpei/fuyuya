import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import TrustBar from "@/components/TrustBar";
import Section from "@/components/Section";
import FeatureStickyNotes from "@/components/FeatureStickyNotes";
import PersonaSlider from "@/components/PersonaSlider";
import FAQ from "@/components/FAQ";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { comparisonData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Trust Bar ── */}
      <TrustBar />

      {/* ── [01] Why ── */}
      <Section
        number="01"
        title="为什么需要赋语鸭"
        subtitle="在中国，有超过 2000 万人面临言语沟通障碍。现有的辅助工具速度慢、表达僵硬、缺少个人风格。"
        id="why"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-sm font-mono text-text-secondary/60 uppercase tracking-wider w-1/4">
                  {" "}
                </th>
                <th className="text-left p-4 text-sm font-mono text-text-secondary/60 uppercase tracking-wider w-1/3">
                  传统 AAC
                </th>
                <th className="text-left p-4 text-sm font-mono text-accent-blue/70 uppercase tracking-wider w-1/3">
                  赋语鸭
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-surface-hover transition-colors duration-200"
                >
                  <td className="p-4 text-base font-medium text-text-primary">
                    {row.dimension}
                  </td>
                  <td className="p-4 text-base text-text-secondary">
                    {row.traditional}
                  </td>
                  <td className="p-4 text-base text-accent-blue font-medium">
                    {row.fuyuya}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── [02] Features — Sticky Note Mountain ── */}
      <Section
        number="02"
        title="五个核心能力"
        subtitle="让沟通变得更自然。"
        id="features"
      >
        <FeatureStickyNotes />
      </Section>

      {/* ── [03] Personas ── */}
      <Section
        number="03"
        title="为每一个需要被听见的人"
        id="personas"
      >
        <PersonaSlider />
      </Section>

      {/* ── [04] Community ── */}
      <Section
        number="04"
        title="这里没有旁观者"
        subtitle="一个 AI 辅助、有温度、有归属的同伴社区。输入关键词，AI 帮你写成完整的表达——每个人都在用自己的方式说话。"
        id="community"
      >
        <CommunitySection />
      </Section>

      {/* ── [05] FAQ ── */}
      <Section
        number="05"
        title="常见问题"
        id="faq"
      >
        <FAQ />
      </Section>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
