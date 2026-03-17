"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Wrench,
  Code2,
  Lightbulb,
  BarChart3,
  FileText,
  Sparkles,
  Bot,
  BrainCircuit,
  Layers,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface Article {
  id: string;
  category: string;
  categoryKey: string;
  categoryColor: string;
  categoryBg: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  icon: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const categories = [
  { key: "all", label: "ทั้งหมด" },
  { key: "basics", label: "AI พื้นฐาน" },
  { key: "workshop", label: "Workshop" },
  { key: "tools", label: "เครื่องมือ" },
  { key: "strategy", label: "กลยุทธ์" },
  { key: "case-study", label: "กรณีศึกษา" },
];

const featuredArticle: Article = {
  id: "featured-1",
  category: "AI Basics",
  categoryKey: "basics",
  categoryColor: "#06c",
  categoryBg: "rgba(0,102,204,0.08)",
  title: "AI Automation คืออะไร? ทำไมธุรกิจไทยต้องสนใจ",
  excerpt:
    "ในยุคที่ทุกธุรกิจกำลังแข่งขันด้วยเทคโนโลยี AI Automation กลายเป็นหัวใจสำคัญที่ช่วยลดต้นทุน เพิ่มประสิทธิภาพ และสร้างความได้เปรียบทางการแข่งขัน บทความนี้จะพาคุณไปรู้จัก AI Automation ตั้งแต่พื้นฐาน พร้อมตัวอย่างการใช้งานจริงในธุรกิจไทย ไม่ว่าจะเป็น Manufacturing, Banking หรือ Retail",
  readTime: "8 นาที",
  date: "12 มี.ค. 2026",
  icon: BrainCircuit,
};

const articles: Article[] = [
  {
    id: "article-1",
    category: "AI Basics",
    categoryKey: "basics",
    categoryColor: "#06c",
    categoryBg: "rgba(0,102,204,0.08)",
    title: "Prompt Engineering 101 — เขียน Prompt ให้ได้ผลลัพธ์ที่ต้องการ",
    excerpt:
      "เทคนิคการเขียน Prompt ที่ดีไม่ใช่แค่พิมพ์คำสั่ง แต่คือการสื่อสารกับ AI อย่างมีกลยุทธ์ เรียนรู้ Framework ที่ใช้ได้จริง",
    readTime: "6 นาที",
    date: "8 มี.ค. 2026",
    icon: Lightbulb,
  },
  {
    id: "article-2",
    category: "Workshop",
    categoryKey: "workshop",
    categoryColor: "#8b5cf6",
    categoryBg: "rgba(139,92,246,0.08)",
    title: "สรุป Workshop: 3 วันเปลี่ยนทีม IT ให้เป็น AI Team",
    excerpt:
      "บันทึกจาก Workshop ที่จัดให้บริษัท Manufacturing ทีม 15 คนเรียนรู้ n8n, RAG และสร้าง Automation ได้ภายใน 3 วัน",
    readTime: "10 นาที",
    date: "5 มี.ค. 2026",
    icon: BookOpen,
  },
  {
    id: "article-3",
    category: "Development",
    categoryKey: "tools",
    categoryColor: "#059669",
    categoryBg: "rgba(5,150,105,0.08)",
    title: "n8n vs Zapier vs Make — เลือก Automation Tool ตัวไหนดี?",
    excerpt:
      "เปรียบเทียบ 3 เครื่องมือ Automation ยอดนิยม ข้อดี ข้อเสีย ราคา และความเหมาะสมกับธุรกิจแต่ละขนาด",
    readTime: "7 นาที",
    date: "1 มี.ค. 2026",
    icon: Wrench,
  },
  {
    id: "article-4",
    category: "Tools",
    categoryKey: "tools",
    categoryColor: "#059669",
    categoryBg: "rgba(5,150,105,0.08)",
    title: "RAG Pipeline คืออะไร? สร้างระบบค้นหาอัจฉริยะด้วยตัวเอง",
    excerpt:
      "ทำความเข้าใจ Retrieval-Augmented Generation ตั้งแต่ Concept จนถึง Implementation พร้อม Code ตัวอย่าง",
    readTime: "12 นาที",
    date: "25 ก.พ. 2026",
    icon: Code2,
  },
  {
    id: "article-5",
    category: "Strategy",
    categoryKey: "strategy",
    categoryColor: "#dc2626",
    categoryBg: "rgba(220,38,38,0.08)",
    title: "วางกลยุทธ์ AI สำหรับ SME — เริ่มต้นอย่างไรไม่ให้เสียเงินฟรี",
    excerpt:
      "Framework การวาง AI Strategy สำหรับธุรกิจขนาดเล็กถึงกลาง เริ่มจากจุดไหน ลงทุนเท่าไหร่ วัดผลอย่างไร",
    readTime: "9 นาที",
    date: "20 ก.พ. 2026",
    icon: Target,
  },
  {
    id: "article-6",
    category: "Case Study",
    categoryKey: "case-study",
    categoryColor: "#ea580c",
    categoryBg: "rgba(234,88,12,0.08)",
    title: "กรณีศึกษา: AI Chatbot ลดสายโทร Call Center ได้ 60%",
    excerpt:
      "เรื่องจริงจากธนาคารที่ใช้ AI Chatbot + RAG ระบบ On-Premise ลดภาระ Call Center และประหยัดต้นทุนปีละ 2 ล้านบาท",
    readTime: "11 นาที",
    date: "15 ก.พ. 2026",
    icon: BarChart3,
  },
];

/* ─────────────────────────────────────────────
   FEATURED CARD
───────────────────────────────────────────── */

function FeaturedCard({ article }: { article: Article }) {
  const Icon = article.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="apple-card grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm cursor-pointer relative"
    >
      {/* Featured Badge */}
      <span className="absolute top-4 left-4 bg-[#06c] text-white text-[11px] font-bold px-3 py-1 rounded-full z-10">
        Featured
      </span>

      {/* Image placeholder */}
      <div
        className="flex flex-col items-center justify-center p-8 md:p-12 min-h-[240px] md:min-h-[360px] relative"
        style={{
          background: "linear-gradient(145deg, #f5f5f7, #e8e8ed)",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-[100px] h-[100px] rounded-[28px] flex items-center justify-center mb-5"
          style={{ background: "rgba(0,102,204,0.08)" }}
        >
          <Icon size={48} style={{ color: "#06c" }} />
        </motion.div>
        <div className="text-[14px] font-semibold text-[#6e6e73] tracking-[0.04em]">
          Featured Article
        </div>

        {/* Decorative dots */}
        <div className="absolute top-5 left-5 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full opacity-30"
              style={{
                background: ["#06c", "#3b82f6", "#8b5cf6"][i],
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:px-10 md:py-12 flex flex-col justify-center">
        <span
          className="inline-flex items-center gap-1.5 text-[12px] font-bold px-3.5 py-1 rounded-full w-fit mb-5 tracking-[0.04em]"
          style={{
            color: article.categoryColor,
            background: article.categoryBg,
          }}
        >
          <Sparkles size={12} />
          {article.category}
        </span>

        <h2 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#1d1d1f] leading-[1.25] mb-4">
          {article.title}
        </h2>

        <p className="text-[14px] md:text-[16px] text-[#6e6e73] leading-[1.7] mb-7">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-5 mb-7">
          <span className="flex items-center gap-1.5 text-[13px] text-[#6e6e73] font-medium">
            <Clock size={14} />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-[#6e6e73] font-medium">
            <Calendar size={14} />
            {article.date}
          </span>
        </div>

        <motion.span
          whileHover={{ x: 6 }}
          className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-semibold text-[#06c] cursor-pointer"
        >
          อ่านบทความ <ArrowRight size={16} />
        </motion.span>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   ARTICLE CARD
───────────────────────────────────────────── */

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const Icon = article.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="apple-card p-0 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl border border-black/[0.04] cursor-pointer flex flex-col"
    >
      {/* Image placeholder */}
      <div
        className="aspect-[16/9] flex items-center justify-center relative"
        style={{
          background: "linear-gradient(145deg, #f5f5f7, #e8e8ed)",
        }}
      >
        <div
          className="w-16 h-16 rounded-[18px] flex items-center justify-center"
          style={{ background: `${article.categoryColor}12` }}
        >
          <Icon size={32} style={{ color: article.categoryColor }} />
        </div>

        {/* Category badge */}
        <span
          className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full tracking-[0.04em] backdrop-blur-sm"
          style={{
            color: article.categoryColor,
            background: "rgba(255,255,255,0.85)",
          }}
        >
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 pb-6 md:pb-7 flex-1 flex flex-col">
        <h3 className="text-[15px] md:text-[18px] font-bold text-[#1d1d1f] leading-[1.3] mb-2.5 line-clamp-3">
          {article.title}
        </h3>

        <p className="text-[13px] md:text-[14px] text-[#6e6e73] leading-[1.65] mb-5 flex-1 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-black/5 pt-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[12px] text-[#6e6e73] font-medium">
              <Clock size={12} />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-[#6e6e73] font-medium">
              <Calendar size={12} />
              {article.date}
            </span>
          </div>
          <ArrowRight size={14} className="text-[#6e6e73]" />
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   CATEGORY FILTER PILLS
───────────────────────────────────────────── */

function CategoryFilter({
  activeCategory,
  onSelect,
}: {
  activeCategory: string;
  onSelect: (key: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap gap-2 justify-center mb-10 md:mb-14"
    >
      {categories.map((cat) => (
        <motion.button
          key={cat.key}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(cat.key)}
          className="min-h-[40px] px-4 py-2 md:px-5 md:py-2.5 rounded-full border-none text-[13px] md:text-[14px] font-semibold cursor-pointer transition-all duration-200"
          style={{
            background:
              activeCategory === cat.key ? "#06c" : "rgba(0,0,0,0.04)",
            color: activeCategory === cat.key ? "#fff" : "#6e6e73",
            boxShadow:
              activeCategory === cat.key
                ? "0 2px 12px rgba(0,102,204,0.25)"
                : "none",
          }}
        >
          {cat.label}
        </motion.button>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   NEWSLETTER CTA
───────────────────────────────────────────── */

function NewsletterCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl text-center mt-14 md:mt-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #1d1d1f, #2d2d2f)",
      }}
    >
      {/* Decorative gradient orb */}
      <div
        className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full blur-[40px]"
        style={{
          background: "radial-gradient(circle, rgba(0,102,204,0.3), transparent)",
        }}
      />

      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-16 h-16 rounded-[18px] flex items-center justify-center mx-auto mb-6"
        style={{ background: "rgba(0,102,204,0.15)" }}
      >
        <FileText size={28} style={{ color: "#06c" }} />
      </motion.div>

      <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-bold text-white leading-[1.25] mb-3">
        ไม่อยากพลาดบทความใหม่?
      </h3>
      <p className="text-[14px] md:text-[16px] text-white/60 max-w-[460px] mx-auto mb-8 leading-[1.65]">
        สมัครรับ Newsletter เพื่อรับบทความ AI ใหม่ทุกสัปดาห์
        พร้อมเทคนิคและ use case ที่ใช้ได้จริงในธุรกิจไทย
      </p>

      <div className="flex flex-wrap gap-3 max-w-[440px] mx-auto justify-center">
        <input
          type="email"
          placeholder="อีเมลของคุณ"
          className="flex-1 min-w-[220px] px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.08] text-white text-[14px] md:text-[15px] outline-none placeholder:text-white/40"
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="px-7 py-3.5 rounded-xl border-none bg-[#06c] text-white text-[14px] md:text-[15px] font-semibold cursor-pointer"
        >
          สมัครเลย
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.categoryKey === activeCategory);

  return (
    <section>
      {/* ============================================================ */}
      {/*  Hero                                                         */}
      {/* ============================================================ */}
      <div className="apple-section bg-white px-6 pb-0">
        <div className="max-w-[980px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[13px] font-semibold text-[#06c] uppercase tracking-widest mb-3">
              BLOG
            </p>
            <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
              Blog.
            </h1>
            <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
              เรื่อง AI ที่เข้าใจง่าย สำหรับธุรกิจไทย
            </p>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Category Filters                                             */}
      {/* ============================================================ */}
      <div className="bg-white px-6">
        <div className="max-w-[980px] mx-auto">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Featured Article                                             */}
      {/* ============================================================ */}
      {(activeCategory === "all" || activeCategory === "basics") && (
        <div className="bg-white px-6 pb-16">
          <div className="max-w-[980px] mx-auto">
            <FeaturedCard article={featuredArticle} />
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/*  Article Grid                                                 */}
      {/* ============================================================ */}
      <div className="apple-section section-gray px-6">
        <div className="max-w-[980px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8 md:mb-10"
          >
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1d1d1f]">
              บทความล่าสุด
            </h2>
            <span className="text-[13px] md:text-[14px] text-[#6e6e73] font-medium">
              {filteredArticles.length} บทความ
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {filteredArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 px-6"
            >
              <Bot size={48} className="text-[#c7c7cc] mx-auto mb-4" />
              <p className="text-[15px] md:text-[17px] text-[#6e6e73]">
                ยังไม่มีบทความในหมวดนี้
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Newsletter CTA                                               */}
      {/* ============================================================ */}
      <div className="apple-section bg-white px-6">
        <div className="max-w-[980px] mx-auto">
          <NewsletterCTA />
        </div>
      </div>
    </section>
  );
}
