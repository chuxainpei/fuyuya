import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "赋语鸭 — AI 情境沟通助手",
  description:
    "赋语鸭是面向无言语/低言语能力人群的 AI 沟通代理——理解你的关键词、场景和情绪，把碎片化输入转成自然、有尊严的表达。",
  openGraph: {
    title: "赋语鸭 — 别让声音限制了你的表达",
    description:
      "AI 沟通代理 × 碎片词 → 完整句。为每一个需要被听见的人。",
    siteName: "赋语鸭",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1e6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;600;700;900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
