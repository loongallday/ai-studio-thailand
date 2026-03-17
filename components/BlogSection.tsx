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
      className="apple-card featured-card"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        background: "#fff",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Featured Badge */}
      <span className="absolute top-4 left-4 bg-[#06c] text-white text-[11px] font-bold px-3 py-1 rounded-full z-10">
        Featured
      </span>

      {/* Image placeholder */}
      <div
        style={{
          background: "linear-gradient(145deg, #f5f5f7, #e8e8ed)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
          minHeight: 360,
          position: "relative",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 28,
            background: "rgba(0,102,204,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Icon size={48} style={{ color: "#06c" }} />
        </motion.div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#6e6e73",
            letterSpacing: "0.04em",
          }}
        >
          Featured Article
        </div>

        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            display: "flex",
            gap: 6,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: ["#06c", "#3b82f6", "#8b5cf6"][i],
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className="featured-content"
        style={{
          padding: "48px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            color: article.categoryColor,
            background: article.categoryBg,
            padding: "5px 14px",
            borderRadius: 20,
            width: "fit-content",
            marginBottom: 20,
            letterSpacing: "0.04em",
          }}
        >
          <Sparkles size={12} />
          {article.category}
        </span>

        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            color: "#1d1d1f",
            lineHeight: 1.25,
            marginBottom: 16,
          }}
        >
          {article.title}
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "#6e6e73",
            lineHeight: 1.7,
            marginBottom: 28,
          }}
        >
          {article.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#6e6e73",
              fontWeight: 500,
            }}
          >
            <Clock size={14} />
            {article.readTime}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#6e6e73",
              fontWeight: 500,
            }}
          >
            <Calendar size={14} />
            {article.date}
          </span>
        </div>

        <motion.span
          whileHover={{ x: 6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 16,
            fontWeight: 600,
            color: "#06c",
            cursor: "pointer",
          }}
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
      className="apple-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.04)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          background: "linear-gradient(145deg, #f5f5f7, #e8e8ed)",
          padding: "36px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          minHeight: 160,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: `${article.categoryColor}12`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={32} style={{ color: article.categoryColor }} />
        </div>

        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            fontSize: 11,
            fontWeight: 700,
            color: article.categoryColor,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            padding: "4px 12px",
            borderRadius: 16,
            letterSpacing: "0.04em",
          }}
        >
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px 24px 28px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#1d1d1f",
            lineHeight: 1.35,
            marginBottom: 10,
          }}
        >
          {article.title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#6e6e73",
            lineHeight: 1.65,
            marginBottom: 20,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(0,0,0,0.05)",
            paddingTop: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12,
                color: "#6e6e73",
                fontWeight: 500,
              }}
            >
              <Clock size={12} />
              {article.readTime}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12,
                color: "#6e6e73",
                fontWeight: 500,
              }}
            >
              <Calendar size={12} />
              {article.date}
            </span>
          </div>
          <ArrowRight size={14} style={{ color: "#6e6e73" }} />
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
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        marginBottom: 60,
      }}
    >
      {categories.map((cat) => (
        <motion.button
          key={cat.key}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(cat.key)}
          className="min-h-[40px] px-4"
          style={{
            padding: "10px 22px",
            borderRadius: 50,
            border: "none",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.25s ease",
            background:
              activeCategory === cat.key ? "#06c" : "rgba(0,0,0,0.04)",
            color: activeCategory === cat.key ? "#fff" : "#6e6e73",
            boxShadow:
              activeCategory === cat.key
                ? "0 2px 12px rgba(0,102,204,0.25)"
                : "none",
            minHeight: 40,
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
      style={{
        background: "linear-gradient(145deg, #1d1d1f, #2d2d2f)",
        borderRadius: 28,
        padding: "clamp(32px, 6vw, 64px) clamp(20px, 5vw, 48px)",
        textAlign: "center",
        marginTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient orb */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,204,0.3), transparent)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{
          width: 64,
          height: 64,
          borderRadius: 18,
          background: "rgba(0,102,204,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
        }}
      >
        <FileText size={28} style={{ color: "#06c" }} />
      </motion.div>

      <h3
        style={{
          fontSize: "clamp(24px, 3vw, 34px)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.25,
          marginBottom: 12,
        }}
      >
        ไม่อยากพลาดบทความใหม่?
      </h3>
      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.6)",
          maxWidth: 460,
          margin: "0 auto 32px",
          lineHeight: 1.65,
        }}
      >
        สมัครรับ Newsletter เพื่อรับบทความ AI ใหม่ทุกสัปดาห์
        พร้อมเทคนิคและ use case ที่ใช้ได้จริงในธุรกิจไทย
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          maxWidth: 440,
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="email"
          placeholder="อีเมลของคุณ"
          style={{
            flex: 1,
            minWidth: 220,
            padding: "14px 20px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            fontSize: 15,
            outline: "none",
          }}
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "14px 28px",
            borderRadius: 14,
            border: "none",
            background: "#06c",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 40,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 700,
                color: "#1d1d1f",
              }}
            >
              บทความล่าสุด
            </h2>
            <span
              style={{
                fontSize: 14,
                color: "#6e6e73",
                fontWeight: 500,
              }}
            >
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
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 28,
              }}
              className="blog-grid"
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
              style={{
                textAlign: "center",
                padding: "80px 24px",
              }}
            >
              <Bot size={48} style={{ color: "#c7c7cc", marginBottom: 16 }} />
              <p style={{ fontSize: 17, color: "#6e6e73" }}>
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

      {/* ============================================================ */}
      {/*  Responsive Styles                                            */}
      {/* ============================================================ */}
      <style jsx>{`
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          .featured-card > div:first-child {
            min-height: 200px !important;
          }
          .featured-content {
            padding: 24px 20px !important;
          }
          .blog-grid article > div:first-child {
            padding: 24px 16px !important;
            min-height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}
