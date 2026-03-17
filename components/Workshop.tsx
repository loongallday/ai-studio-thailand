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
    color: "#f59e0b",
  },
  {
    icon: Monitor,
    title: "Hands-on 70% ทฤษฎี 30%",
    desc: "ลงมือทำจริงตลอดทั้งวัน กลับไปทำงานต่อได้ทันที",
    color: "#06c",
  },
  {
    icon: Shield,
    title: "ใช้ tools จริง ไม่ใช่ demo",
    desc: "n8n, Flowise, ChromaDB, Docker — เครื่องมือที่ใช้ใน production จริง",
    color: "#34c759",
  },
  {
    icon: Award,
    title: "ได้ certificate + materials กลับไป",
    desc: "Certificate of Completion, workshop materials, templates, 30 วัน support",
    color: "#8b5cf6",
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
      className="apple-card rounded-[20px] border border-black/[0.06] overflow-hidden"
      style={{ background: "#fff" }}
    >
      <motion.button
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
        className="w-full flex items-center justify-between p-4 md:p-6 bg-transparent border-none cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div
            className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
            style={{ background: "rgba(0,102,204,0.08)", color: "#06c" }}
          >
            {day.day.replace("Day ", "D")}
          </div>
          <div>
            <div className="text-base md:text-lg font-bold" style={{ color: "#1d1d1f" }}>
              {day.day}: {day.title}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "#6e6e73" }}>
              {day.slots.length} sessions | 09:00 - 16:30
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ChevronDown size={20} style={{ color: isOpen ? "#06c" : "#6e6e73", transition: "color 0.3s" }} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 md:px-7 md:pb-7">
              <div className="border-t border-black/[0.06] pt-5 flex flex-col">
                {day.slots.map((slot, i) => {
                  const tc = typeColors[slot.type];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 ${
                        i < day.slots.length - 1 ? "border-b border-black/[0.03]" : ""
                      }`}
                    >
                      <div
                        className="min-w-[110px] text-[13px] font-semibold tabular-nums"
                        style={{ color: slot.type === "break" ? "#86868b" : "#1d1d1f" }}
                      >
                        {slot.time}
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div
                          className="text-[11px] font-semibold px-2 py-[3px] rounded-md uppercase tracking-wide shrink-0"
                          style={{ background: tc.bg, color: tc.text }}
                        >
                          {tc.label}
                        </div>
                        <div
                          className="text-sm leading-relaxed"
                          style={{
                            color: slot.type === "break" ? "#86868b" : "#1d1d1f",
                            fontStyle: slot.type === "break" ? "italic" : "normal",
                          }}
                        >
                          {slot.topic}
                        </div>
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
      className="bg-white py-16 md:py-24 lg:py-[120px] px-4 md:px-6"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* ───── Section 1: Hero ───── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(0,102,204,0.06)" }}
          >
            <GraduationCap size={16} style={{ color: "#06c" }} />
            <span
              className="text-[13px] font-semibold tracking-wider"
              style={{ color: "#06c" }}
            >
              AI ACADEMY
            </span>
          </div>

          <h2
            className="text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-[1.1] mb-4"
            style={{ color: "#1d1d1f" }}
          >
            AI Workshop & Training
          </h2>
          <p
            className="text-[15px] md:text-[17px] lg:text-[21px] max-w-[620px] mx-auto leading-relaxed"
            style={{ color: "#6e6e73" }}
          >
            เรียนรู้ AI แบบ hands-on จากผู้เชี่ยวชาญที่สร้างระบบ AI จริง
            <br />
            ออกแบบมาสำหรับคนไทย ใช้ได้จริงตั้งแต่วันแรก
          </p>

          <div className="flex justify-center gap-4 md:gap-8 mt-6 md:mt-8 flex-wrap">
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
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#6e6e73" }}
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
          className="text-center mb-8 md:mb-12"
        >
          <h3
            className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-2"
            style={{ color: "#1d1d1f" }}
          >
            เลือก Workshop ที่เหมาะกับคุณ
          </h3>
          <p className="text-base" style={{ color: "#6e6e73" }}>
            ตั้งแต่ผู้เริ่มต้นจนถึงระดับผู้บริหาร — เรามีหลักสูตรสำหรับทุกคน
          </p>
        </motion.div>

        {/* ── Card 1: AI Fundamentals ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="apple-card rounded-2xl md:rounded-3xl border border-black/[0.04] overflow-hidden mb-4 md:mb-6 hover:shadow-md transition-shadow"
          style={{ background: "#fff" }}
        >
          <div className="p-5 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 md:gap-5 mb-5 md:mb-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div
                  className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,102,204,0.08)" }}
                >
                  <GraduationCap size={26} style={{ color: "#06c" }} />
                </div>
                <div>
                  <h4
                    className="text-lg md:text-[22px] font-bold leading-tight"
                    style={{ color: "#1d1d1f" }}
                  >
                    AI Fundamentals
                  </h4>
                  <p className="text-sm font-medium" style={{ color: "#06c" }}>
                    เริ่มต้นเข้าใจ AI อย่างแท้จริง
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div
                  className="flex items-center gap-1.5 text-[13px] px-3 py-1.5 rounded-lg"
                  style={{ color: "#6e6e73", background: "rgba(0,0,0,0.03)" }}
                >
                  <Clock size={14} />1 วัน
                </div>
                <div>
                  <span className="text-[24px] md:text-[28px] font-bold" style={{ color: "#1d1d1f" }}>
                    ฿9,900
                  </span>
                  <span className="text-sm" style={{ color: "#86868b" }}>/คน</span>
                </div>
              </div>
            </div>

            {/* Expandable content */}
            <motion.button
              onClick={() =>
                setExpandedCard(expandedCard === 1 ? null : 1)
              }
              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] border cursor-pointer text-sm font-semibold ${
                expandedCard === 1 ? "mb-6" : "mb-0"
              }`}
              style={{
                background: "rgba(0,102,204,0.04)",
                borderColor: "rgba(0,102,204,0.1)",
                color: "#06c",
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
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Day schedule */}
                    <div>
                      <div
                        className="text-xs font-bold tracking-widest uppercase mb-3.5"
                        style={{ color: "#86868b" }}
                      >
                        ตารางเรียน
                      </div>
                      <div
                        className="rounded-[14px] p-4 md:px-5"
                        style={{ background: "rgba(0,0,0,0.02)" }}
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
                            className={`flex gap-3 md:gap-3.5 py-2 ${
                              i < arr.length - 1 ? "border-b border-black/[0.04]" : ""
                            }`}
                          >
                            <div
                              className="min-w-[90px] md:min-w-[100px] text-xs font-semibold tabular-nums pt-px"
                              style={{ color: "#06c" }}
                            >
                              {item.time}
                            </div>
                            <div className="text-[13px] leading-relaxed" style={{ color: "#1d1d1f" }}>
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
                        className="text-xs font-bold tracking-widest uppercase mb-3.5"
                        style={{ color: "#86868b" }}
                      >
                        สิ่งที่จะได้เรียนรู้
                      </div>
                      <div className="flex flex-col gap-2.5 mb-6">
                        {[
                          "เข้าใจ AI, ML, LLM อย่างถ่องแท้",
                          "เขียน Prompt ให้ได้ผลลัพธ์ระดับมือโปร",
                          "เปรียบเทียบ ChatGPT vs Claude vs Gemini",
                          "ค้นหา AI Use Case สำหรับธุรกิจของคุณ",
                          "สร้าง AI Workflow แรกด้วยตัวเอง",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle
                              size={16}
                              className="mt-0.5 shrink-0"
                              style={{ color: "#34c759" }}
                            />
                            <span className="text-sm leading-relaxed" style={{ color: "#1d1d1f" }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Who it's for */}
                      <div
                        className="text-xs font-bold tracking-widest uppercase mb-2.5"
                        style={{ color: "#86868b" }}
                      >
                        เหมาะสำหรับ
                      </div>
                      <div
                        className="flex items-start gap-2 p-3 md:px-3.5 rounded-[10px] mb-6"
                        style={{ background: "rgba(0,0,0,0.02)" }}
                      >
                        <Users size={16} className="mt-0.5 shrink-0" style={{ color: "#06c" }} />
                        <span className="text-[13px] leading-relaxed" style={{ color: "#1d1d1f" }}>
                          ผู้เริ่มต้น, ทีมที่ต้องการเข้าใจ AI พื้นฐาน, ผู้ที่อยากนำ AI ไปใช้ในงาน
                        </span>
                      </div>

                      {/* What you get */}
                      <div
                        className="text-xs font-bold tracking-widest uppercase mb-2.5"
                        style={{ color: "#86868b" }}
                      >
                        สิ่งที่ได้รับ
                      </div>
                      <div className="flex flex-wrap gap-2">
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
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{ background: "rgba(0,102,204,0.05)", color: "#1d1d1f" }}
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
          className="apple-card rounded-2xl md:rounded-3xl border border-black/[0.04] overflow-hidden mb-4 md:mb-6 relative ring-2 ring-[#06c]/20 shadow-lg hover:shadow-xl transition-shadow"
          style={{ background: "#fff" }}
        >
          {/* Featured badge */}
          <div
            className="absolute top-3 right-3 md:top-4 md:right-4 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide z-10"
            style={{ background: "#06c", color: "#fff" }}
          >
            MOST POPULAR
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 md:gap-5 mb-5">
              <div className="flex items-center gap-3 md:gap-4">
                <div
                  className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,102,204,0.08)" }}
                >
                  <Zap size={26} style={{ color: "#06c" }} />
                </div>
                <div>
                  <h4
                    className="text-lg md:text-2xl font-bold leading-tight"
                    style={{ color: "#1d1d1f" }}
                  >
                    AI Automation Masterclass
                  </h4>
                  <p className="text-[13px] md:text-[15px] font-medium" style={{ color: "#06c" }}>
                    สร้างระบบ AI อัตโนมัติแบบมืออาชีพ
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div
                  className="flex items-center gap-1.5 text-[13px] px-3 py-1.5 rounded-lg"
                  style={{ color: "#6e6e73", background: "rgba(0,0,0,0.03)" }}
                >
                  <Clock size={14} />2 วัน
                </div>
                <div>
                  <span className="text-[26px] md:text-[32px] font-bold" style={{ color: "#1d1d1f" }}>
                    ฿19,900
                  </span>
                  <span className="text-sm" style={{ color: "#86868b" }}>/คน</span>
                </div>
              </div>
            </div>

            <p
              className="text-[14px] md:text-[15px] leading-relaxed mb-5 md:mb-6 max-w-[700px]"
              style={{ color: "#6e6e73" }}
            >
              เจาะลึก 2 วันเต็ม กับเครื่องมือ AI Automation ที่ใช้จริงใน production —
              n8n, Flowise, RAG Pipeline, Vector Database, API Integration, Docker deployment
            </p>

            {/* Mock n8n workflow preview */}
            <div
              className="rounded-2xl p-4 md:p-6 mb-5 md:mb-6 border border-black/[0.04]"
              style={{ background: "linear-gradient(135deg, #f5f5f7 0%, #eef2ff 100%)" }}
            >
              <div
                className="text-[11px] font-bold tracking-widest uppercase mb-3 md:mb-4"
                style={{ color: "#86868b" }}
              >
                ตัวอย่าง Workflow ที่จะสร้างในคอร์ส
              </div>
              <div className="flex items-center overflow-x-auto pb-1 scrollbar-hide">
                {[
                  { label: "Gmail Trigger", color: "#EA4335" },
                  { label: "AI Classify", color: "#06c" },
                  { label: "RAG Lookup", color: "#34c759" },
                  { label: "GPT Response", color: "#7c3aed" },
                  { label: "Send Reply", color: "#EA4335" },
                ].map((node, i, arr) => (
                  <div
                    key={node.label}
                    className="flex items-center shrink-0"
                  >
                    <div
                      className="px-3 md:px-4 py-2 md:py-2.5 bg-white rounded-[10px] text-xs font-semibold whitespace-nowrap"
                      style={{ border: `2px solid ${node.color}`, color: node.color }}
                    >
                      {node.label}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-6 md:w-8 h-[2px] relative" style={{ background: "rgba(0,0,0,0.1)" }}>
                        <ArrowRight
                          size={12}
                          className="absolute -right-0.5 -top-[5px]"
                          style={{ color: "rgba(0,0,0,0.2)" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on labs preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 md:mb-6">
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
                  className="p-3.5 md:p-4 rounded-xl border"
                  style={{
                    background: "rgba(0,102,204,0.03)",
                    borderColor: "rgba(0,102,204,0.08)",
                  }}
                >
                  <div
                    className="text-sm font-bold mb-1"
                    style={{ color: "#1d1d1f" }}
                  >
                    {lab.title}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "#6e6e73" }}>
                    {lab.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Audience + what you get */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div
                className="p-3.5 md:p-4 rounded-xl"
                style={{ background: "rgba(0,0,0,0.02)" }}
              >
                <div
                  className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase mb-2"
                  style={{ color: "#86868b" }}
                >
                  <Users size={13} />
                  เหมาะสำหรับ
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: "#1d1d1f" }}>
                  Developer, IT Team, ผู้ที่มีพื้นฐาน technical, ผู้ที่ต้องการ automate งานด้วย AI
                </div>
              </div>
              <div
                className="p-3.5 md:p-4 rounded-xl"
                style={{ background: "rgba(0,0,0,0.02)" }}
              >
                <div
                  className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase mb-2"
                  style={{ color: "#86868b" }}
                >
                  <Award size={13} />
                  สิ่งที่ได้รับ
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Certificate",
                    "Source Code ทุก Lab",
                    "Docker Templates",
                    "อาหาร 2 วัน",
                    "60 วัน Support",
                  ].map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ background: "rgba(0,102,204,0.06)", color: "#1d1d1f" }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
          {/* Card 3: AI for Business Leaders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="apple-card rounded-2xl border border-black/[0.04] overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            style={{ background: "#fff" }}
          >
            <div className="p-5 md:p-6 lg:p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 rounded-[14px] flex items-center justify-center"
                  style={{ background: "rgba(5,150,105,0.08)" }}
                >
                  <BarChart3 size={24} style={{ color: "#059669" }} />
                </div>
                <div
                  className="flex items-center gap-1.5 text-[13px]"
                  style={{ color: "#6e6e73" }}
                >
                  <Clock size={14} />1 วัน
                </div>
              </div>

              <h4
                className="text-lg md:text-xl font-bold mb-1"
                style={{ color: "#1d1d1f" }}
              >
                AI for Business Leaders
              </h4>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "#059669" }}
              >
                วางแผน AI Strategy สำหรับผู้บริหาร
              </p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-[24px] md:text-[28px] font-bold" style={{ color: "#1d1d1f" }}>฿14,900</span>
                <span className="text-sm" style={{ color: "#86868b" }}>/คน</span>
              </div>

              {/* Executive focus: ROI + case studies */}
              <div
                className="rounded-xl p-3.5 md:p-4 mb-5 border"
                style={{
                  background: "rgba(5,150,105,0.04)",
                  borderColor: "rgba(5,150,105,0.1)",
                }}
              >
                <div
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2.5"
                  style={{ color: "#059669" }}
                >
                  <TrendingUp size={14} />
                  ROI Focus
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    "วิเคราะห์ ROI ก่อนลงทุน AI",
                    "Framework ตัดสินใจ Build vs Buy",
                    "AI Roadmap 6-12 เดือน",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2"
                    >
                      <Target size={14} className="shrink-0" style={{ color: "#059669" }} />
                      <span className="text-[13px] leading-relaxed" style={{ color: "#1d1d1f" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case study snippets */}
              <div
                className="text-xs font-bold tracking-widest uppercase mb-2.5"
                style={{ color: "#86868b" }}
              >
                Case Studies
              </div>
              <div className="flex flex-col gap-2 mb-5">
                {[
                  { title: "โรงงานผลิต", result: "ลดเวลา QC 40% ด้วย AI Vision" },
                  { title: "ธุรกิจค้าปลีก", result: "เพิ่มยอดขาย 25% ด้วย AI Recommendation" },
                ].map((cs) => (
                  <div
                    key={cs.title}
                    className="px-3 md:px-3.5 py-2.5 rounded-[10px]"
                    style={{
                      background: "rgba(0,0,0,0.02)",
                      borderLeft: "3px solid #059669",
                    }}
                  >
                    <div className="text-xs font-semibold" style={{ color: "#059669" }}>
                      {cs.title}
                    </div>
                    <div className="text-[13px] mt-0.5" style={{ color: "#1d1d1f" }}>
                      {cs.result}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex items-start gap-2 p-2.5 md:p-3.5 rounded-[10px]"
                style={{ background: "rgba(0,0,0,0.02)" }}
              >
                <Briefcase size={14} className="mt-0.5 shrink-0" style={{ color: "#6e6e73" }} />
                <span className="text-xs leading-relaxed" style={{ color: "#6e6e73" }}>
                  CEO, CTO, ผู้จัดการ, ผู้บริหารที่ตัดสินใจเรื่อง AI
                </span>
              </div>
            </div>

            <div className="px-4 pb-4 md:px-6 md:pb-6 lg:px-7 lg:pb-7">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-[14px] text-[15px] font-semibold no-underline cursor-pointer border-none"
                style={{ background: "#059669", color: "white" }}
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
            className="apple-card rounded-2xl border border-black/[0.04] overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(160deg, #fff 0%, rgba(124,58,237,0.03) 100%)",
              borderStyle: "dashed",
              borderColor: "rgba(124,58,237,0.3)",
            }}
          >
            <div className="p-5 md:p-6 lg:p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 rounded-[14px] flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.08)" }}
                >
                  <Settings size={24} style={{ color: "#7c3aed" }} />
                </div>
                <div
                  className="flex items-center gap-1.5 text-[13px]"
                  style={{ color: "#6e6e73" }}
                >
                  <Clock size={14} />
                  1-5 วัน
                </div>
              </div>

              <h4
                className="text-lg md:text-xl font-bold mb-1"
                style={{ color: "#1d1d1f" }}
              >
                Custom In-house Training
              </h4>
              <p
                className="text-[14px] md:text-[15px] font-semibold leading-relaxed mb-5"
                style={{ color: "#7c3aed" }}
              >
                ออกแบบหลักสูตรเฉพาะทีมคุณ
              </p>

              <div
                className="text-[13px] leading-loose mb-5 md:mb-6"
                style={{ color: "#6e6e73" }}
              >
                บอกเราว่าทีมคุณต้องการอะไร — เราจะออกแบบหลักสูตรที่ตรงจุด
                ใช้ข้อมูลจริงขององค์กร เน้น use case ที่เกี่ยวข้องกับธุรกิจคุณโดยตรง
              </div>

              <div className="flex flex-col gap-2.5 mb-5 md:mb-6">
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
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: "#7c3aed" }}
                    />
                    <span className="text-[13px] leading-relaxed" style={{ color: "#1d1d1f" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price box */}
              <div
                className="p-4 rounded-xl border text-center"
                style={{
                  background: "rgba(124,58,237,0.05)",
                  borderColor: "rgba(124,58,237,0.1)",
                }}
              >
                <div className="text-sm mb-1" style={{ color: "#6e6e73" }}>
                  ราคาเริ่มต้น
                </div>
                <div className="text-lg md:text-[22px] font-bold" style={{ color: "#7c3aed" }}>
                  ติดต่อเพื่อรับใบเสนอราคา
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 md:px-6 md:pb-6 lg:px-7 lg:pb-7">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-[14px] text-[15px] font-semibold no-underline cursor-pointer border-none"
                style={{ background: "#7c3aed", color: "white" }}
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
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3
              className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-2"
              style={{ color: "#1d1d1f" }}
            >
              หลักสูตรแต่ละวัน
            </h3>
            <p className="text-base" style={{ color: "#6e6e73" }}>
              AI Automation Masterclass — ดูรายละเอียดรายชั่วโมง
            </p>
          </div>

          <div className="flex flex-col gap-4">
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
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3
              className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-2"
              style={{ color: "#1d1d1f" }}
            >
              ทำไมเลือกเรียนกับเรา
            </h3>
            <p className="text-base" style={{ color: "#6e6e73" }}>
              สิ่งที่ทำให้ workshop ของเราแตกต่าง
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="apple-card rounded-[20px] border border-black/[0.06] p-5 md:p-6 text-center"
                  style={{ background: "#fff" }}
                >
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${item.color}12` }}
                  >
                    <Icon size={24} style={{ color: item.color }} />
                  </div>
                  <div
                    className="text-base font-bold mb-2 leading-snug"
                    style={{ color: "#1d1d1f" }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-[13px] leading-relaxed"
                    style={{ color: "#6e6e73" }}
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
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3
              className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-2"
              style={{ color: "#1d1d1f" }}
            >
              ผู้เข้าร่วมพูดถึงเรา
            </h3>
            <p className="text-base" style={{ color: "#6e6e73" }}>
              เสียงจากผู้ที่เคยเข้าร่วม workshop
            </p>
          </div>

          <div className="relative">
            {/* Gradient fade edges on mobile */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide md:grid md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="apple-card rounded-[20px] border border-black/[0.06] p-5 md:p-6 flex flex-col min-w-[280px] snap-start shrink-0 md:min-w-0 md:shrink"
                style={{ background: "#fff" }}
              >
                <Quote
                  size={28}
                  className="mb-3"
                  style={{ color: "rgba(0,102,204,0.25)" }}
                />
                <div
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "#1d1d1f" }}
                >
                  &ldquo;{t.text}&rdquo;
                </div>
                <div>
                  <div className="flex gap-0.5 mb-2.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        style={{ color: "#f59e0b", fill: "#f59e0b" }}
                      />
                    ))}
                  </div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: "#1d1d1f" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#6e6e73" }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>

        {/* ───── Section 6: Upcoming Schedule ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3
              className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-2"
              style={{ color: "#1d1d1f" }}
            >
              ตารางอบรมที่จะถึง
            </h3>
            <p className="text-base" style={{ color: "#6e6e73" }}>
              เลือกรอบที่สะดวก แล้วจองที่นั่งเลย
            </p>
          </div>

          {/* Schedule as cards on mobile, table-like on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="apple-card rounded-2xl border p-4 md:p-5 transition-shadow hover:shadow-md"
                  style={{ background: "#fff", borderColor: isLow ? "rgba(245,158,11,0.2)" : "rgba(0,0,0,0.06)", borderLeft: `3px solid ${isLow ? "#f59e0b" : "#34c759"}` }}
                >
                  {/* Workshop name + status */}
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="text-[15px] font-bold"
                      style={{ color: "#1d1d1f" }}
                    >
                      {row.workshop}
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: isLow ? "rgba(245,158,11,0.1)" : "rgba(52,199,89,0.1)",
                        color: isLow ? "#f59e0b" : "#34c759",
                      }}
                    >
                      {isLow ? "เกือบเต็ม" : "ว่าง"}
                    </span>
                  </div>

                  {/* Date + Location row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-[13px]" style={{ color: "#6e6e73" }}>
                      <Calendar size={13} style={{ color: "#06c" }} />
                      {row.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px]" style={{ color: "#6e6e73" }}>
                      <MapPin size={13} style={{ color: "#06c" }} />
                      {row.location}
                    </div>
                  </div>

                  {/* Seats + Book row */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <div
                        className="flex-1 h-1.5 rounded-full overflow-hidden max-w-[80px]"
                        style={{ background: "rgba(0,0,0,0.06)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${seatsPercent}%`,
                            background: isLow ? "#f59e0b" : "#34c759",
                          }}
                        />
                      </div>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: isLow ? "#f59e0b" : "#34c759" }}
                      >
                        เหลือ {row.seats}/{row.total}
                      </span>
                    </div>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-4 py-2 rounded-lg text-[13px] font-semibold no-underline cursor-pointer whitespace-nowrap"
                      style={{ background: "#06c", color: "#fff" }}
                    >
                      จองที่นั่ง
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ───── Section 7: CTA ───── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center p-8 md:p-10 lg:p-14 rounded-[24px] md:rounded-[28px] border"
          style={{
            background: "linear-gradient(160deg, rgba(0,102,204,0.04) 0%, rgba(124,58,237,0.04) 100%)",
            borderColor: "rgba(0,102,204,0.08)",
          }}
        >
          <h3
            className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-3"
            style={{ color: "#1d1d1f" }}
          >
            พร้อมเริ่มเรียนรู้ AI แล้วหรือยัง?
          </h3>
          <p
            className="text-[15px] md:text-[17px] max-w-[520px] mx-auto leading-relaxed mb-6 md:mb-8"
            style={{ color: "#6e6e73" }}
          >
            ไม่ว่าคุณจะเป็นผู้เริ่มต้นหรือผู้บริหาร เรามีหลักสูตรที่เหมาะกับคุณ
            สมัครวันนี้ หรือปรึกษาเราเพื่อออกแบบหลักสูตรเฉพาะ
          </p>

          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-[14px] text-base font-semibold no-underline cursor-pointer border-none"
              style={{ background: "#06c", color: "#fff" }}
            >
              สมัครเลย <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-[14px] text-base font-semibold no-underline cursor-pointer border border-black/[0.08]"
              style={{ background: "rgba(0,0,0,0.04)", color: "#1d1d1f" }}
            >
              <Phone size={16} />
              ปรึกษาหลักสูตร
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
