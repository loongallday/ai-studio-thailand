"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Settings,
  Star,
  ChevronDown,
  BookOpen,
  Award,
  Coffee,
  Utensils,
  Monitor,
  TrendingUp,
  MessageSquare,
  Calendar,
  MapPin,
  Phone,
  Briefcase,
  Target,
  Lightbulb,
  Shield,
  Quote,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const masterclassDays = [
  {
    day: "Day 1",
    title: "Automation & AI Chatbot",
    slots: [
      { time: "09:00 - 09:30", topic: "ลงทะเบียน & แนะนำตัว", type: "break" as const },
      { time: "09:30 - 10:30", topic: "n8n Overview — ติดตั้ง, UI walkthrough, first workflow", type: "lecture" as const },
      { time: "10:30 - 10:45", topic: "พักเบรก ☕", type: "break" as const },
      { time: "10:45 - 12:00", topic: "Hands-on: สร้าง Email → Slack → Google Sheet automation", type: "lab" as const },
      { time: "12:00 - 13:00", topic: "พักทานอาหารกลางวัน 🍽️", type: "break" as const },
      { time: "13:00 - 14:30", topic: "Flowise Deep Dive — สร้าง AI Chatbot แบบ no-code", type: "lecture" as const },
      { time: "14:30 - 14:45", topic: "พักเบรก ☕", type: "break" as const },
      { time: "14:45 - 16:00", topic: "Hands-on: สร้าง Customer Service Bot ที่ตอบจาก FAQ", type: "lab" as const },
      { time: "16:00 - 16:30", topic: "Day 1 Recap & Q/A", type: "lecture" as const },
    ],
  },
  {
    day: "Day 2",
    title: "RAG Pipeline & Production Deploy",
    slots: [
      { time: "09:00 - 09:15", topic: "Day 1 Review & วันนี้เรียนอะไร", type: "lecture" as const },
      { time: "09:15 - 10:30", topic: "RAG Pipeline — Vector DB, Embedding, Retrieval strategy", type: "lecture" as const },
      { time: "10:30 - 10:45", topic: "พักเบรก ☕", type: "break" as const },
      { time: "10:45 - 12:00", topic: "Hands-on: สร้าง Document Q&A System ด้วย ChromaDB", type: "lab" as const },
      { time: "12:00 - 13:00", topic: "พักทานอาหารกลางวัน 🍽️", type: "break" as const },
      { time: "13:00 - 14:30", topic: "API Integration — เชื่อมต่อกับระบบ CRM, ERP ที่มีอยู่", type: "lecture" as const },
      { time: "14:30 - 14:45", topic: "พักเบรก ☕", type: "break" as const },
      { time: "14:45 - 15:45", topic: "Deploy & Monitor — Docker, logging, production checklist", type: "lab" as const },
      { time: "15:45 - 16:30", topic: "Final Project Showcase & Certificate Ceremony 🎓", type: "lecture" as const },
    ],
  },
];

const testimonials = [
  {
    name: "คุณสมชาย วงศ์ประเสริฐ",
    role: "CTO",
    company: "Thai Digital Solutions Co., Ltd.",
    text: "Workshop AI Automation เปลี่ยนมุมมองทีม dev ของเราเลย ได้เรียนรู้ n8n และ Flowise แบบ hands-on จริงๆ กลับไปทำ chatbot ให้ลูกค้าได้ภายในสัปดาห์เดียว",
    rating: 5,
  },
  {
    name: "คุณพิมพ์ใจ ศรีสุข",
    role: "Head of Operations",
    company: "Siam Logistics Group",
    text: "เนื้อหา AI for Business Leaders ตรงจุดมาก ช่วยให้เราวาง AI roadmap ได้ชัดเจน ROI framework ที่ได้มาใช้ present บอร์ดผ่านเลย",
    rating: 5,
  },
  {
    name: "คุณธนกร เจริญรัตน์",
    role: "Founder & CEO",
    company: "NextStep AI Startup",
    text: "สิ่งที่ชอบที่สุดคือ ผู้สอนมีประสบการณ์จริง ไม่ใช่แค่สอนจาก textbook ได้เห็น production system จริงๆ ที่ใช้อยู่ แนะนำเลยครับ",
    rating: 5,
  },
];

const upcomingSchedule = [
  {
    date: "19-20 เม.ย. 2026",
    workshop: "AI Automation Masterclass",
    seats: 8,
    total: 15,
    location: "กรุงเทพฯ (On-site)",
  },
  {
    date: "10 พ.ค. 2026",
    workshop: "AI Fundamentals",
    seats: 12,
    total: 20,
    location: "กรุงเทพฯ (On-site)",
  },
  {
    date: "24 พ.ค. 2026",
    workshop: "AI for Business Leaders",
    seats: 5,
    total: 12,
    location: "กรุงเทพฯ (On-site)",
  },
  {
    date: "7-8 มิ.ย. 2026",
    workshop: "AI Automation Masterclass",
    seats: 15,
    total: 15,
    location: "Online (Zoom)",
  },
];

const whyUs = [
  {
    icon: Lightbulb,
    title: "ผู้สอนมีประสบการณ์จริง",
    desc: "สร้าง LocalAI + CloudAI ให้ลูกค้าจริง ไม่ใช่แค่ทฤษฎี",
  },
  {
    icon: Monitor,
    title: "Hands-on 70% ทฤษฎี 30%",
    desc: "ลงมือทำจริงตลอดทั้งวัน กลับไปทำงานต่อได้ทันที",
  },
  {
    icon: Shield,
    title: "ใช้ tools จริง ไม่ใช่ demo",
    desc: "n8n, Flowise, ChromaDB, Docker — เครื่องมือที่ใช้ใน production จริง",
  },
  {
    icon: Award,
    title: "ได้ certificate + materials กลับไป",
    desc: "Certificate of Completion, workshop materials, templates, 30 วัน support",
  },
];

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

function DayTimeline({
  day,
  isOpen,
  onToggle,
}: {
  day: (typeof masterclassDays)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const typeColors: Record<string, { bg: string; text: string; label: string }> = {
    lecture: { bg: "rgba(0,102,204,0.08)", text: "#06c", label: "Lecture" },
    lab: { bg: "rgba(52,199,89,0.08)", text: "#34c759", label: "Hands-on" },
    break: { bg: "rgba(110,110,115,0.06)", text: "#6e6e73", label: "Break" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="apple-card"
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      <motion.button
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(0,102,204,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
              color: "#06c",
            }}
          >
            {day.day.replace("Day ", "D")}
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f" }}>
              {day.day}: {day.title}
            </div>
            <div style={{ fontSize: 13, color: "#6e6e73", marginTop: 2 }}>
              {day.slots.length} sessions | 09:00 - 16:30
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} style={{ color: "#6e6e73" }} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 28px 28px 28px" }}>
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                {day.slots.map((slot, i) => {
                  const tc = typeColors[slot.type];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "12px 0",
                        borderBottom:
                          i < day.slots.length - 1
                            ? "1px solid rgba(0,0,0,0.03)"
                            : "none",
                      }}
                    >
                      <div
                        style={{
                          minWidth: 110,
                          fontSize: 13,
                          fontWeight: 600,
                          color: slot.type === "break" ? "#86868b" : "#1d1d1f",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {slot.time}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: 6,
                          background: tc.bg,
                          color: tc.text,
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                          flexShrink: 0,
                        }}
                      >
                        {tc.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: slot.type === "break" ? "#86868b" : "#1d1d1f",
                          lineHeight: 1.5,
                          fontStyle: slot.type === "break" ? "italic" : "normal",
                        }}
                      >
                        {slot.topic}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Workshop() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [openDay, setOpenDay] = useState<number>(0);

  return (
    <section
      id="workshop"
      style={{
        background: "white",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* ───── Section 1: Hero ───── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(0,102,204,0.06)",
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            <GraduationCap size={16} style={{ color: "#06c" }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#06c",
                letterSpacing: "0.04em",
              }}
            >
              AI ACADEMY
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(36px, 5.5vw, 56px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            AI Workshop & Training
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 2.5vw, 21px)",
              color: "#6e6e73",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            เรียนรู้ AI แบบ hands-on จากผู้เชี่ยวชาญที่สร้างระบบ AI จริง
            <br />
            ออกแบบมาสำหรับคนไทย ใช้ได้จริงตั้งแต่วันแรก
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: BookOpen, label: "4 หลักสูตร" },
              { icon: Users, label: "รุ่นละ 12-20 คน" },
              { icon: Award, label: "Certificate" },
              { icon: Coffee, label: "รวมอาหาร & เบรก" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                    color: "#6e6e73",
                  }}
                >
                  <Icon size={16} style={{ color: "#06c" }} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ───── Section 2: Workshop Cards ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h3
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              color: "#1d1d1f",
              marginBottom: 8,
            }}
          >
            เลือก Workshop ที่เหมาะกับคุณ
          </h3>
          <p style={{ fontSize: 16, color: "#6e6e73" }}>
            ตั้งแต่ผู้เริ่มต้นจนถึงระดับผู้บริหาร — เรามีหลักสูตรสำหรับทุกคน
          </p>
        </motion.div>

        {/* ── Card 1: AI Fundamentals ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="apple-card"
          style={{
            background: "#fff",
            borderRadius: 24,
            border: "1px solid rgba(0,0,0,0.06)",
            overflow: "hidden",
            marginBottom: 24,
          }}
        >
          <div style={{ padding: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: "rgba(0,102,204,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GraduationCap size={26} style={{ color: "#06c" }} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      lineHeight: 1.3,
                    }}
                  >
                    AI Fundamentals
                  </h4>
                  <p style={{ fontSize: 14, color: "#06c", fontWeight: 500 }}>
                    เริ่มต้นเข้าใจ AI อย่างแท้จริง
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#6e6e73",
                    padding: "6px 12px",
                    background: "rgba(0,0,0,0.03)",
                    borderRadius: 8,
                  }}
                >
                  <Clock size={14} />1 วัน
                </div>
                <div>
                  <span style={{ fontSize: 28, fontWeight: 700, color: "#1d1d1f" }}>
                    ฿9,900
                  </span>
                  <span style={{ fontSize: 14, color: "#86868b" }}>/คน</span>
                </div>
              </div>
            </div>

            {/* Expandable content */}
            <motion.button
              onClick={() =>
                setExpandedCard(expandedCard === 1 ? null : 1)
              }
              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                background: "rgba(0,102,204,0.04)",
                borderRadius: 10,
                border: "1px solid rgba(0,102,204,0.1)",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                color: "#06c",
                marginBottom: expandedCard === 1 ? 24 : 0,
              }}
            >
              {expandedCard === 1 ? "ซ่อนรายละเอียด" : "ดูรายละเอียดทั้งหมด"}
              <motion.div
                animate={{ rotate: expandedCard === 1 ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {expandedCard === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="workshop-expand-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 24,
                    }}
                  >
                    {/* Day schedule */}
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#86868b",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginBottom: 14,
                        }}
                      >
                        ตารางเรียน
                      </div>
                      <div
                        style={{
                          background: "rgba(0,0,0,0.02)",
                          borderRadius: 14,
                          padding: "16px 20px",
                        }}
                      >
                        {[
                          { time: "09:00 - 10:30", topic: "AI Overview & LLM Fundamentals" },
                          { time: "10:30 - 10:45", topic: "พักเบรก ☕" },
                          { time: "10:45 - 12:00", topic: "Prompt Engineering Workshop" },
                          { time: "12:00 - 13:00", topic: "พักทานอาหารกลางวัน 🍽️" },
                          { time: "13:00 - 14:30", topic: "AI Tools Deep Dive" },
                          { time: "14:30 - 14:45", topic: "พักเบรก ☕" },
                          { time: "14:45 - 16:00", topic: "Use Cases & Hands-on Lab" },
                        ].map((item, i, arr) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              gap: 14,
                              padding: "8px 0",
                              borderBottom:
                                i < arr.length - 1
                                  ? "1px solid rgba(0,0,0,0.04)"
                                  : "none",
                            }}
                          >
                            <div
                              style={{
                                minWidth: 100,
                                fontSize: 12,
                                fontWeight: 600,
                                color: "#06c",
                                fontVariantNumeric: "tabular-nums",
                                paddingTop: 1,
                              }}
                            >
                              {item.time}
                            </div>
                            <div style={{ fontSize: 13, color: "#1d1d1f", lineHeight: 1.5 }}>
                              {item.topic}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right column */}
                    <div>
                      {/* What you'll learn */}
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#86868b",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginBottom: 14,
                        }}
                      >
                        สิ่งที่จะได้เรียนรู้
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                        {[
                          "เข้าใจ AI, ML, LLM อย่างถ่องแท้",
                          "เขียน Prompt ให้ได้ผลลัพธ์ระดับมือโปร",
                          "เปรียบเทียบ ChatGPT vs Claude vs Gemini",
                          "ค้นหา AI Use Case สำหรับธุรกิจของคุณ",
                          "สร้าง AI Workflow แรกด้วยตัวเอง",
                        ].map((item, i) => (
                          <div
                            key={i}
                            style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                          >
                            <CheckCircle
                              size={16}
                              style={{ color: "#34c759", marginTop: 2, flexShrink: 0 }}
                            />
                            <span style={{ fontSize: 14, color: "#1d1d1f", lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Who it's for */}
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#86868b",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginBottom: 10,
                        }}
                      >
                        เหมาะสำหรับ
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          padding: "12px 14px",
                          background: "rgba(0,0,0,0.02)",
                          borderRadius: 10,
                          marginBottom: 24,
                        }}
                      >
                        <Users size={16} style={{ color: "#06c", marginTop: 2, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "#1d1d1f", lineHeight: 1.6 }}>
                          ผู้เริ่มต้น, ทีมที่ต้องการเข้าใจ AI พื้นฐาน, ผู้ที่อยากนำ AI ไปใช้ในงาน
                        </span>
                      </div>

                      {/* What you get */}
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#86868b",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginBottom: 10,
                        }}
                      >
                        สิ่งที่ได้รับ
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {[
                          { icon: Award, label: "Certificate" },
                          { icon: BookOpen, label: "Workshop Materials" },
                          { icon: Utensils, label: "อาหารกลางวัน & เบรก" },
                          { icon: MessageSquare, label: "30 วัน Support" },
                        ].map((b) => {
                          const BIcon = b.icon;
                          return (
                            <div
                              key={b.label}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                padding: "6px 12px",
                                background: "rgba(0,102,204,0.05)",
                                borderRadius: 8,
                                fontSize: 12,
                                fontWeight: 500,
                                color: "#1d1d1f",
                              }}
                            >
                              <BIcon size={14} style={{ color: "#06c" }} />
                              {b.label}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Card 2: AI Automation Masterclass (FEATURED) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="apple-card"
          style={{
            background: "#fff",
            borderRadius: 24,
            border: "2px solid #06c",
            overflow: "hidden",
            marginBottom: 24,
            position: "relative",
          }}
        >
          {/* Featured badge */}
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              padding: "6px 14px",
              background: "#06c",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              borderRadius: 100,
              letterSpacing: "0.03em",
              zIndex: 1,
            }}
          >
            MOST POPULAR
          </div>

          <div style={{ padding: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: "rgba(0,102,204,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Zap size={26} style={{ color: "#06c" }} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      lineHeight: 1.3,
                    }}
                  >
                    AI Automation Masterclass
                  </h4>
                  <p style={{ fontSize: 15, color: "#06c", fontWeight: 500 }}>
                    สร้างระบบ AI อัตโนมัติแบบมืออาชีพ
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#6e6e73",
                    padding: "6px 12px",
                    background: "rgba(0,0,0,0.03)",
                    borderRadius: 8,
                  }}
                >
                  <Clock size={14} />2 วัน
                </div>
                <div>
                  <span style={{ fontSize: 32, fontWeight: 700, color: "#1d1d1f" }}>
                    ฿19,900
                  </span>
                  <span style={{ fontSize: 14, color: "#86868b" }}>/คน</span>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 15,
                color: "#6e6e73",
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 700,
              }}
            >
              เจาะลึก 2 วันเต็ม กับเครื่องมือ AI Automation ที่ใช้จริงใน production —
              n8n, Flowise, RAG Pipeline, Vector Database, API Integration, Docker deployment
            </p>

            {/* Mock n8n workflow preview */}
            <div
              style={{
                background: "linear-gradient(135deg, #f5f5f7 0%, #eef2ff 100%)",
                borderRadius: 16,
                padding: "24px 28px",
                marginBottom: 24,
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#86868b",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                ตัวอย่าง Workflow ที่จะสร้างในคอร์ส
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  overflowX: "auto",
                  paddingBottom: 4,
                }}
              >
                {[
                  { label: "Gmail Trigger", color: "#EA4335" },
                  { label: "AI Classify", color: "#06c" },
                  { label: "RAG Lookup", color: "#34c759" },
                  { label: "GPT Response", color: "#7c3aed" },
                  { label: "Send Reply", color: "#EA4335" },
                ].map((node, i, arr) => (
                  <div
                    key={node.label}
                    style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                  >
                    <div
                      style={{
                        padding: "10px 16px",
                        background: "#fff",
                        borderRadius: 10,
                        border: `2px solid ${node.color}`,
                        fontSize: 12,
                        fontWeight: 600,
                        color: node.color,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {node.label}
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        style={{
                          width: 32,
                          height: 2,
                          background: "rgba(0,0,0,0.1)",
                          position: "relative",
                        }}
                      >
                        <ArrowRight
                          size={12}
                          style={{
                            position: "absolute",
                            right: -2,
                            top: -5,
                            color: "rgba(0,0,0,0.2)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on labs preview */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 24,
              }}
              className="workshop-labs-grid"
            >
              {[
                {
                  title: "Lab 1: Email Automation",
                  desc: "Email → AI Classification → Auto-reply",
                },
                {
                  title: "Lab 2: AI Chatbot",
                  desc: "Flowise + FAQ knowledge base",
                },
                {
                  title: "Lab 3: Document Q&A",
                  desc: "RAG Pipeline + ChromaDB",
                },
                {
                  title: "Lab 4: Production Deploy",
                  desc: "Docker + Monitoring + Security",
                },
              ].map((lab) => (
                <div
                  key={lab.title}
                  style={{
                    padding: "16px 18px",
                    background: "rgba(0,102,204,0.03)",
                    borderRadius: 12,
                    border: "1px solid rgba(0,102,204,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 4,
                    }}
                  >
                    {lab.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.5 }}>
                    {lab.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Audience + what you get */}
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: 1,
                  minWidth: 240,
                  padding: "14px 18px",
                  background: "rgba(0,0,0,0.02)",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#86868b",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  <Users size={13} />
                  เหมาะสำหรับ
                </div>
                <div style={{ fontSize: 13, color: "#1d1d1f", lineHeight: 1.6 }}>
                  Developer, IT Team, ผู้ที่มีพื้นฐาน technical, ผู้ที่ต้องการ automate งานด้วย AI
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  minWidth: 240,
                  padding: "14px 18px",
                  background: "rgba(0,0,0,0.02)",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#86868b",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  <Award size={13} />
                  สิ่งที่ได้รับ
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {[
                    "Certificate",
                    "Source Code ทุก Lab",
                    "Docker Templates",
                    "อาหาร 2 วัน",
                    "60 วัน Support",
                  ].map((b) => (
                    <span
                      key={b}
                      style={{
                        padding: "4px 10px",
                        background: "rgba(0,102,204,0.06)",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#1d1d1f",
                        fontWeight: 500,
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Cards 3 & 4: Business Leaders + Custom (side by side) ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 80,
          }}
          className="workshop-bottom-grid"
        >
          {/* Card 3: AI for Business Leaders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="apple-card"
            style={{
              background: "#fff",
              borderRadius: 24,
              border: "1px solid rgba(0,0,0,0.06)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: 28, flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(5,150,105,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BarChart3 size={24} style={{ color: "#059669" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#6e6e73",
                  }}
                >
                  <Clock size={14} />1 วัน
                </div>
              </div>

              <h4
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: 4,
                }}
              >
                AI for Business Leaders
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "#059669",
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                วางแผน AI Strategy สำหรับผู้บริหาร
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
                <span style={{ fontSize: 28, fontWeight: 700, color: "#1d1d1f" }}>฿14,900</span>
                <span style={{ fontSize: 14, color: "#86868b" }}>/คน</span>
              </div>

              {/* Executive focus: ROI + case studies */}
              <div
                style={{
                  background: "rgba(5,150,105,0.04)",
                  borderRadius: 12,
                  padding: "16px 18px",
                  marginBottom: 20,
                  border: "1px solid rgba(5,150,105,0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#059669",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  <TrendingUp size={14} />
                  ROI Focus
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "วิเคราะห์ ROI ก่อนลงทุน AI",
                    "Framework ตัดสินใจ Build vs Buy",
                    "AI Roadmap 6-12 เดือน",
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <Target size={14} style={{ color: "#059669", flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "#1d1d1f", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case study snippets */}
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#86868b",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Case Studies
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                {[
                  { title: "โรงงานผลิต", result: "ลดเวลา QC 40% ด้วย AI Vision" },
                  { title: "ธุรกิจค้าปลีก", result: "เพิ่มยอดขาย 25% ด้วย AI Recommendation" },
                ].map((cs) => (
                  <div
                    key={cs.title}
                    style={{
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.02)",
                      borderRadius: 10,
                      borderLeft: "3px solid #059669",
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#059669" }}>
                      {cs.title}
                    </div>
                    <div style={{ fontSize: 13, color: "#1d1d1f", marginTop: 2 }}>
                      {cs.result}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  padding: "10px 14px",
                  background: "rgba(0,0,0,0.02)",
                  borderRadius: 10,
                }}
              >
                <Briefcase size={14} style={{ color: "#6e6e73", marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "#6e6e73", lineHeight: 1.5 }}>
                  CEO, CTO, ผู้จัดการ, ผู้บริหารที่ตัดสินใจเรื่อง AI
                </span>
              </div>
            </div>

            <div style={{ padding: "0 28px 28px 28px" }}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "14px 24px",
                  background: "#059669",
                  color: "white",
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                สมัครเรียน <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* Card 4: Custom In-house Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="apple-card"
            style={{
              background:
                "linear-gradient(160deg, #fff 0%, rgba(124,58,237,0.03) 100%)",
              borderRadius: 24,
              border: "1px dashed rgba(124,58,237,0.3)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: 28, flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(124,58,237,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Settings size={24} style={{ color: "#7c3aed" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "#6e6e73",
                  }}
                >
                  <Clock size={14} />
                  1-5 วัน
                </div>
              </div>

              <h4
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: 4,
                }}
              >
                Custom In-house Training
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: "#7c3aed",
                  fontWeight: 600,
                  marginBottom: 20,
                  lineHeight: 1.5,
                }}
              >
                ออกแบบหลักสูตรเฉพาะทีมคุณ
              </p>

              <div
                style={{
                  fontSize: 13,
                  color: "#6e6e73",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                บอกเราว่าทีมคุณต้องการอะไร — เราจะออกแบบหลักสูตรที่ตรงจุด
                ใช้ข้อมูลจริงขององค์กร เน้น use case ที่เกี่ยวข้องกับธุรกิจคุณโดยตรง
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  "ออกแบบหลักสูตรตาม use case ขององค์กร",
                  "ปรับเนื้อหาตามระดับความรู้ของทีม",
                  "ใช้ข้อมูลและระบบจริงขององค์กรในการ workshop",
                  "รองรับ 10-50 คนต่อรุ่น",
                  "มี follow-up session หลังจบ workshop",
                  "สามารถจัดที่บริษัทหรือ online",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                  >
                    <CheckCircle
                      size={16}
                      style={{ color: "#7c3aed", marginTop: 2, flexShrink: 0 }}
                    />
                    <span style={{ fontSize: 13, color: "#1d1d1f", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price box */}
              <div
                style={{
                  padding: "16px 18px",
                  background: "rgba(124,58,237,0.05)",
                  borderRadius: 12,
                  border: "1px solid rgba(124,58,237,0.1)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#6e6e73",
                    marginBottom: 4,
                  }}
                >
                  ราคาเริ่มต้น
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#7c3aed" }}>
                  ติดต่อเพื่อรับใบเสนอราคา
                </div>
              </div>
            </div>

            <div style={{ padding: "0 28px 28px 28px" }}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "14px 24px",
                  background: "#7c3aed",
                  color: "white",
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <Phone size={16} />
                ปรึกษาหลักสูตร
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ───── Section 3: Day-by-Day Masterclass Curriculum ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              หลักสูตรแต่ละวัน
            </h3>
            <p style={{ fontSize: 16, color: "#6e6e73" }}>
              AI Automation Masterclass — ดูรายละเอียดรายชั่วโมง
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {masterclassDays.map((day, i) => (
              <DayTimeline
                key={day.day}
                day={day}
                isOpen={openDay === i}
                onToggle={() => setOpenDay(openDay === i ? -1 : i)}
              />
            ))}
          </div>
        </motion.div>

        {/* ───── Section 4: Why Us ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              ทำไมเลือกเรียนกับเรา
            </h3>
            <p style={{ fontSize: 16, color: "#6e6e73" }}>
              สิ่งที่ทำให้ workshop ของเราแตกต่าง
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
            className="workshop-why-grid"
          >
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="apple-card"
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "28px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "rgba(0,102,204,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <Icon size={24} style={{ color: "#06c" }} />
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 8,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#6e6e73",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ───── Section 5: Testimonials ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              ผู้เข้าร่วมพูดถึงเรา
            </h3>
            <p style={{ fontSize: 16, color: "#6e6e73" }}>
              เสียงจากผู้ที่เคยเข้าร่วม workshop
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="workshop-testimonial-grid"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="apple-card"
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  border: "1px solid rgba(0,0,0,0.06)",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Quote
                  size={24}
                  style={{ color: "rgba(0,102,204,0.15)", marginBottom: 12 }}
                />
                <div
                  style={{
                    fontSize: 14,
                    color: "#1d1d1f",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 20,
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </div>
                <div>
                  <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        style={{ color: "#f59e0b", fill: "#f59e0b" }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1d1d1f",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: "#6e6e73", marginTop: 2 }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───── Section 6: Upcoming Schedule ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              ตารางอบรมที่จะถึง
            </h3>
            <p style={{ fontSize: 16, color: "#6e6e73" }}>
              เลือกรอบที่สะดวก แล้วจองที่นั่งเลย
            </p>
          </div>

          <div
            className="apple-card workshop-schedule-wrapper"
            style={{
              background: "#fff",
              borderRadius: 20,
              border: "1px solid rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
           <div>
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 2fr 1fr 1.2fr 0.8fr",
                padding: "14px 24px",
                background: "rgba(0,0,0,0.02)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                fontSize: 12,
                fontWeight: 700,
                color: "#86868b",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
              className="workshop-schedule-header"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Calendar size={13} />
                วันที่
              </div>
              <div>หลักสูตร</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={13} />
                สถานที่
              </div>
              <div>ที่นั่งเหลือ</div>
              <div></div>
            </div>

            {/* Table rows */}
            {upcomingSchedule.map((row, i) => {
              const seatsPercent = (row.seats / row.total) * 100;
              const isLow = row.seats <= 8;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 2fr 1fr 1.2fr 0.8fr",
                    padding: "18px 24px",
                    borderBottom:
                      i < upcomingSchedule.length - 1
                        ? "1px solid rgba(0,0,0,0.04)"
                        : "none",
                    alignItems: "center",
                  }}
                  className="workshop-schedule-row"
                >
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f" }}>
                    {row.date}
                  </div>
                  <div style={{ fontSize: 14, color: "#1d1d1f" }}>{row.workshop}</div>
                  <div style={{ fontSize: 13, color: "#6e6e73" }}>{row.location}</div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          height: 6,
                          background: "rgba(0,0,0,0.06)",
                          borderRadius: 3,
                          overflow: "hidden",
                          maxWidth: 80,
                        }}
                      >
                        <div
                          style={{
                            width: `${seatsPercent}%`,
                            height: "100%",
                            background: isLow ? "#f59e0b" : "#34c759",
                            borderRadius: 3,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: isLow ? "#f59e0b" : "#34c759",
                        }}
                      >
                        {row.seats}/{row.total}
                      </span>
                    </div>
                  </div>
                  <div>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: "inline-block",
                        padding: "8px 16px",
                        background: "#06c",
                        color: "#fff",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      จอง
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
           </div>
          </div>
        </motion.div>

        {/* ───── Section 7: CTA ───── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            padding: "56px 40px",
            background: "linear-gradient(160deg, rgba(0,102,204,0.04) 0%, rgba(124,58,237,0.04) 100%)",
            borderRadius: 28,
            border: "1px solid rgba(0,102,204,0.08)",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              color: "#1d1d1f",
              marginBottom: 12,
            }}
          >
            พร้อมเริ่มเรียนรู้ AI แล้วหรือยัง?
          </h3>
          <p
            style={{
              fontSize: 17,
              color: "#6e6e73",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            ไม่ว่าคุณจะเป็นผู้เริ่มต้นหรือผู้บริหาร เรามีหลักสูตรที่เหมาะกับคุณ
            สมัครวันนี้ หรือปรึกษาเราเพื่อออกแบบหลักสูตรเฉพาะ
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 32px",
                background: "#06c",
                color: "#fff",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
                border: "none",
              }}
            >
              สมัครเลย <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 32px",
                background: "rgba(0,0,0,0.04)",
                color: "#1d1d1f",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Phone size={16} />
              ปรึกษาหลักสูตร
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 639px) {
          .workshop-bottom-grid {
            grid-template-columns: 1fr !important;
          }
          .workshop-why-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .workshop-testimonial-grid {
            display: flex !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            gap: 16px !important;
            padding-bottom: 16px;
            margin-left: -16px;
            margin-right: -16px;
            padding-left: 16px;
            padding-right: 16px;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .workshop-testimonial-grid::-webkit-scrollbar {
            display: none;
          }
          .workshop-testimonial-grid > div {
            min-width: 280px !important;
            flex-shrink: 0 !important;
            scroll-snap-align: start;
          }
          .workshop-expand-grid {
            grid-template-columns: 1fr !important;
          }
          .workshop-labs-grid {
            grid-template-columns: 1fr !important;
          }
          .workshop-schedule-wrapper {
            border-radius: 16px !important;
          }
          .workshop-schedule-wrapper > div {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
          }
          .workshop-schedule-header {
            display: none !important;
          }
          .workshop-schedule-row {
            display: flex !important;
            flex-direction: column !important;
            gap: 10px !important;
            padding: 16px 20px !important;
            border-bottom: 1px solid rgba(0,0,0,0.06) !important;
            min-width: unset !important;
          }
          .workshop-schedule-row > div {
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .workshop-why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
