// ── Hero Carousel Images ──
export const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80",
    alt: "手语沟通 — 两个人用手语交流",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
    alt: "温暖的陪伴与支持",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80",
    alt: "日常沟通场景",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    alt: "家人之间的沟通与理解",
  },
];

// ── Trust Bar ──
export const trustMetrics = [
  { value: 6, label: "大场景", sublabel: "覆盖日常高频需求" },
  { value: 0, prefix: "即时", label: "AI 响应", sublabel: "无需等待" },
  { value: 0, prefix: "离线", label: "可用", sublabel: "无网络也能使用应急卡" },
  { value: 0, prefix: "免费", label: "开放使用", sublabel: "降低沟通门槛" },
];

// ── Comparison Table ──
export const comparisonData = [
  { dimension: "输入方式", traditional: "逐字点选图片/词板", fuyuya: "关键词输入、场景按钮、碎片词" },
  { dimension: "输出质量", traditional: "机械、僵硬、无情绪", fuyuya: "自然、有语气、可切换风格" },
  { dimension: "场景适配", traditional: "通用词库，翻页找词", fuyuya: "6 大生活场景，自动推荐高频表达" },
  { dimension: "目标用户", traditional: "偏重医疗/康复场景", fuyuya: "日常社交、出行、餐厅、紧急" },
  { dimension: "使用成本", traditional: "专用设备昂贵、重", fuyuya: "轻量移动端，手机即可" },
];

// ── Features (5 core capabilities) ──
export const features = [
  {
    id: "scenes",
    icon: "🏥",
    title: "场景模式",
    description: "医院、餐厅、交通、学校、紧急情况——选场景，一键获得该场景下的高频表达按钮。",
    detail: "「我这里疼」「不要辣」「我坐过站了」",
    color: "blue" as const,
    rotation: -1.8,
    offsetY: 0,
    zIndex: 3,
  },
  {
    id: "keywords",
    icon: "✏️",
    title: "关键词变完整句",
    description: "输入几个碎片词，AI 理解场景与情绪，自动生成自然、完整、有尊严的表达。",
    detail: "「头 痛 药」→「我头很痛，可以给我止痛药吗？」",
    color: "gold" as const,
    rotation: 1.5,
    offsetY: 20,
    zIndex: 4,
  },
  {
    id: "tone",
    icon: "🎭",
    title: "语气切换",
    description: "同一句话，一键切换礼貌版、朋友版、紧急版、强硬版——让表达贴合当下情境。",
    detail: "礼貌 · 朋友 · 紧急 · 强硬",
    color: "blue" as const,
    rotation: -2.2,
    offsetY: 60,
    zIndex: 5,
  },
  {
    id: "identity",
    icon: "📋",
    title: "沟通身份卡",
    description: "打开 App 第一眼，告诉陌生人：「我能理解你，请给我一点时间。」消除第一秒的社交误解。",
    detail: "「我不能用声音说话，但我能理解你。」",
    color: "gold" as const,
    rotation: 2.0,
    offsetY: 40,
    zIndex: 2,
  },
  {
    id: "emergency",
    icon: "🆘",
    title: "离线应急卡",
    description: "紧急联系人、过敏史、家庭地址、SOS 一键语音播报。无需网络，始终可用。",
    detail: "不依赖 AI，本地数据驱动，救命时刻不掉线。",
    color: "red" as const,
    rotation: -1.2,
    offsetY: 80,
    zIndex: 1,
  },
];

// ── Personas ──
export const personas = [
  {
    id: "a",
    label: "A 类",
    title: "无法发声",
    conditions: "脑瘫、ALS/渐冻症、喉切除术后、气管切开、部分自闭症非口语者。",
    pain: "传统 AAC 速度太慢，跟不上真实对话节奏。",
    need: "他们需要从零到一的表达。",
  },
  {
    id: "b",
    label: "B 类",
    title: "构音障碍",
    conditions: "口吃、声带疾病、帕金森、脑卒中后语言障碍。",
    pain: "说话别人听不懂，重复多次后容易放弃沟通。",
    need: "他们需要被准确理解。",
  },
  {
    id: "c",
    label: "C 类",
    title: "失语症",
    conditions: "知道自己想说什么，但找不到词或说不完整。美国每年新增约 18 万失语症患者。",
    pain: "句子碎片化、找词困难、说错词——心里有话说不出。",
    need: "他们需要被完整表达。",
  },
];

// ── FAQ ──
export const faqData = [
  {
    question: "赋语鸭和传统 AAC 工具有什么不同？",
    answer:
      "传统 AAC 工具通常需要用户逐字点选图片或词板，速度慢、表达僵硬、缺少个人风格。赋语鸭是一个 AI 沟通代理：它能理解用户的关键词、当前场景和情绪，把碎片化输入转成自然、准确、有尊严的表达。输出可以一键切换语气（礼貌、朋友、紧急、强硬），更贴合真实社交场景。",
  },
  {
    question: "需要联网使用吗？",
    answer:
      "AI 表达生成功能需要联网调用语言模型。但沟通身份卡和离线应急卡不依赖网络——预置的紧急联系人、过敏史、家庭地址等信息可本地加载，确保在关键时刻始终可用。",
  },
  {
    question: "支持什么样的输入方式？",
    answer:
      "目前支持多种输入方式：点击场景高频按钮、输入关键词或碎片词、以及通过沟通身份卡让对方了解如何与你沟通。未来将支持语音识别转文字输入和眼动追踪等辅助输入方式。",
  },
  {
    question: "我的家人可以使用吗？",
    answer:
      "完全可以。赋语鸭的设计原则之一是「渐进呈现」——首页只有核心信息，不堆砌功能。对于不熟悉科技的长辈或护理者，沟通身份卡和场景按钮已经可以满足大部分日常沟通需求。更高级的 AI 功能可按需探索。",
  },
  {
    question: "费用是多少？",
    answer:
      "赋语鸭基础功能（沟通身份卡、离线应急卡、场景高频按钮）免费开放使用。AI 表达生成功能目前处于内测阶段，具体定价方案将在正式发布时公布。我们的目标是让沟通门槛尽可能低——不让费用成为表达的障碍。",
  },
];

// ── Footer links ──
export const footerLinks = {
  product: [
    { label: "场景模式", href: "#features" },
    { label: "AI 表达生成", href: "#features" },
    { label: "离线应急卡", href: "#features" },
  ],
  support: [
    { label: "使用指南", href: "#" },
    { label: "常见问题", href: "#faq" },
    { label: "反馈建议", href: "#" },
  ],
  about: [
    { label: "关于我们", href: "#" },
    { label: "联系我们", href: "#" },
    { label: "隐私政策", href: "#" },
  ],
};
