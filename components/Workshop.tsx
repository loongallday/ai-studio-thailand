"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  Brain,
  Database,
  Workflow,
  PieChart,
  Bot,
  FileText,
  Play,
  Sparkles,
  Send,
  ChevronRight,
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
   INTERACTIVE DATA
───────────────────────────────────────────── */

const workshopSimulatorSteps = [
  {
    step: "Step 1",
    title: "สร้าง Webhook Trigger",
    desc: "รับข้อความจาก LINE Messaging API → n8n Webhook node",
    color: "#06c755",
  },
  {
    step: "Step 2",
    title: "เชื่อม AI ประมวลผล",
    desc: "ส่งข้อความไปยัง GPT/Claude → วิเคราะห์ intent → สร้างคำตอบ",
    color: "#06c",
  },
  {
    step: "Step 3",
    title: "ตอบกลับ LINE อัตโนมัติ",
    desc: "HTTP Request node → LINE Reply API → ลูกค้าได้รับคำตอบใน 2 วินาที",
    color: "#34c759",
  },
];

type TopicKey = "prompt" | "rag" | "n8n" | "strategy" | "chatbot" | "data";

const topicPills: { key: TopicKey; label: string; icon: React.ElementType; color: string }[] = [
  { key: "prompt", label: "Prompt Engineering", icon: Brain, color: "#06c" },
  { key: "rag", label: "RAG Pipeline", icon: Database, color: "#34c759" },
  { key: "n8n", label: "n8n Automation", icon: Workflow, color: "#f59e0b" },
  { key: "strategy", label: "AI Strategy", icon: TrendingUp, color: "#059669" },
  { key: "chatbot", label: "Chatbot Development", icon: Bot, color: "#7c3aed" },
  { key: "data", label: "Data Analysis", icon: PieChart, color: "#ef4444" },
];

/* ─── Animated Counter ─── */
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(decimals > 0 ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

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
                        style={{ color: slot.type === "break" ? "#6e6e73" : "#1d1d1f" }}
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
                            color: slot.type === "break" ? "#6e6e73" : "#1d1d1f",
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
  const [selectedTopic, setSelectedTopic] = useState<TopicKey>("prompt");

  return (
    <section
      id="workshop"
      className="apple-section bg-white px-4 md:px-6"
    >
      <div className="max-w-[980px] mx-auto">
        {/* ───── Section 1: Hero ───── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[13px] font-semibold text-[#06c] uppercase tracking-widest mb-3">
            AI ACADEMY
          </p>

          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            AI Workshop & Training.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            เรียนรู้ AI แบบ hands-on จากผู้เชี่ยวชาญที่สร้างระบบ AI จริง
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
            className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2 text-[#1d1d1f]"
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
                  <span className="text-sm" style={{ color: "#6e6e73" }}>/คน</span>
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
                        style={{ color: "#6e6e73" }}
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
                        style={{ color: "#6e6e73" }}
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
                        style={{ color: "#6e6e73" }}
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
                        style={{ color: "#6e6e73" }}
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
            className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wide z-10"
            style={{ background: "#06c", color: "#fff" }}
          >
            MOST POPULAR
          </div>

          <div className="p-4 pt-12 md:p-6 md:pt-6 lg:p-8">
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
                  <span className="text-sm" style={{ color: "#6e6e73" }}>/คน</span>
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
                style={{ color: "#6e6e73" }}
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
                  style={{ color: "#6e6e73" }}
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
                  style={{ color: "#6e6e73" }}
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
                <span className="text-sm" style={{ color: "#6e6e73" }}>/คน</span>
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
                style={{ color: "#6e6e73" }}
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
              className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2 text-[#1d1d1f]"
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
              className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2 text-[#1d1d1f]"
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
              className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2 text-[#1d1d1f]"
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
              className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2 text-[#1d1d1f]"
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
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div
                      className="text-[14px] md:text-[15px] font-bold truncate min-w-0"
                      style={{ color: "#1d1d1f" }}
                    >
                      {row.workshop}
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap"
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

        {/* ───── Interactive: Animated Stats Counter ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { target: 500, suffix: "+", label: "ผู้เรียน", color: "#06c" },
              { target: 50, suffix: "+", label: "Workshop", color: "#34c759" },
              { target: 4.9, suffix: "/5", label: "Rating", color: "#f59e0b", decimals: 1 },
              { target: 98, suffix: "%", label: "แนะนำ", color: "#7c3aed" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="apple-card rounded-[20px] border border-black/[0.06] p-5 md:p-6 text-center"
              >
                <p
                  className="text-[36px] sm:text-[44px] font-bold tracking-tight"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="text-[13px] font-medium text-[#6e6e73] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───── Interactive: Live Workshop Simulator ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2 text-[#1d1d1f]">
              Workshop Simulator
            </h3>
            <p className="text-base text-[#6e6e73]">
              สัมผัสประสบการณ์เรียนจริง ก่อนตัดสินใจ
            </p>
          </div>

          <div className="apple-card rounded-[20px] border border-black/[0.06] overflow-hidden">
            {/* Classroom header */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-[#1d1d1f] text-white">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[12px] font-mono text-white/60 ml-2">AI Workshop - Live Session</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff3b30] animate-pulse" />
                <span className="text-[10px] text-white/60 font-mono">REC</span>
              </div>
            </div>

            {/* Classroom view: Instructor + Student */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
              {/* Instructor prompt */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#06c]/10 flex items-center justify-center">
                    <GraduationCap size={18} className="text-[#06c]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#1d1d1f]">Instructor</p>
                    <p className="text-[10px] text-[#6e6e73]">AI Studio Thailand</p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#06c]/[0.04] border border-[#06c]/10 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Play size={12} className="text-[#06c]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#06c]">Challenge</span>
                  </div>
                  <p className="text-[14px] font-semibold text-[#1d1d1f] leading-relaxed">
                    &ldquo;สร้าง n8n workflow ที่ตอบ LINE อัตโนมัติ&rdquo;
                  </p>
                  <p className="text-[12px] text-[#6e6e73] mt-2">
                    เมื่อลูกค้าส่งข้อความเข้า LINE OA → AI วิเคราะห์คำถาม → สร้างคำตอบ → ส่งกลับทันที
                  </p>
                </div>
              </div>

              {/* Student response - step by step */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#34c759]/10 flex items-center justify-center">
                    <Sparkles size={18} className="text-[#34c759]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#1d1d1f]">Solution</p>
                    <p className="text-[10px] text-[#6e6e73]">Step-by-step workflow</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {workshopSimulatorSteps.map((s, i) => (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.4 }}
                      className="rounded-xl border p-3.5"
                      style={{
                        borderColor: s.color + "25",
                        background: s.color + "08",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: s.color + "15", color: s.color }}
                        >
                          {s.step}
                        </span>
                        <span className="text-[13px] font-bold text-[#1d1d1f]">{s.title}</span>
                      </div>
                      <p className="text-[12px] text-[#6e6e73] leading-relaxed">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Connection lines */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  className="mt-4 flex items-center justify-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#34c759]">Workflow Complete! ใช้เวลาจริงในคลาส ~45 นาที</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ───── Interactive: Topic Explorer ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2 text-[#1d1d1f]">
              สำรวจหัวข้อที่สอน
            </h3>
            <p className="text-base text-[#6e6e73]">
              เลือกหัวข้อเพื่อดูตัวอย่างสิ่งที่จะได้เรียนรู้
            </p>
          </div>

          {/* Topic pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {topicPills.map((t) => {
              const Icon = t.icon;
              const isActive = selectedTopic === t.key;
              return (
                <motion.button
                  key={t.key}
                  onClick={() => setSelectedTopic(t.key)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold border cursor-pointer transition-all"
                  style={{
                    background: isActive ? t.color : "transparent",
                    color: isActive ? "#fff" : t.color,
                    borderColor: isActive ? t.color : t.color + "30",
                  }}
                >
                  <Icon size={15} />
                  {t.label}
                </motion.button>
              );
            })}
          </div>

          {/* Topic preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="apple-card rounded-[20px] border border-black/[0.06] overflow-hidden"
            >
              {/* Prompt Engineering */}
              {selectedTopic === "prompt" && (
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Brain size={20} className="text-[#06c]" />
                    <h4 className="text-[17px] font-bold text-[#1d1d1f]">Prompt Engineering</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Before */}
                    <div className="rounded-xl border border-[#ff3b30]/15 bg-[#ff3b30]/[0.03] p-4">
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#ff3b30]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff3b30]">Before</span>
                      </div>
                      <div className="rounded-lg bg-white p-3 border border-black/[0.04]">
                        <p className="text-[13px] text-[#1d1d1f] font-mono leading-relaxed">
                          &ldquo;สรุปบทความนี้ให้หน่อย&rdquo;
                        </p>
                      </div>
                      <p className="text-[11px] text-[#ff3b30] mt-2 font-medium">ไม่ระบุรูปแบบ, ความยาว, กลุ่มเป้าหมาย</p>
                    </div>
                    {/* After */}
                    <div className="rounded-xl border border-[#34c759]/15 bg-[#34c759]/[0.03] p-4">
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#34c759]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#34c759]">After</span>
                      </div>
                      <div className="rounded-lg bg-white p-3 border border-black/[0.04]">
                        <p className="text-[13px] text-[#1d1d1f] font-mono leading-relaxed">
                          &ldquo;สรุปบทความนี้เป็น 3 bullet points สำหรับ CEO ที่มีเวลาอ่าน 30 วินาที เน้น ROI และ action items&rdquo;
                        </p>
                      </div>
                      <p className="text-[11px] text-[#34c759] mt-2 font-medium">ชัดเจน, วัดผลได้, ตรงกลุ่มเป้าหมาย</p>
                    </div>
                  </div>
                </div>
              )}

              {/* RAG Pipeline */}
              {selectedTopic === "rag" && (
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Database size={20} className="text-[#34c759]" />
                    <h4 className="text-[17px] font-bold text-[#1d1d1f]">RAG Pipeline</h4>
                  </div>
                  <div className="flex items-center overflow-x-auto pb-2 gap-2 scrollbar-hide">
                    {[
                      { label: "Documents", sub: "PDF, CSV, Web", color: "#6e6e73", icon: FileText },
                      { label: "Embedding", sub: "Vector แปลงข้อความ", color: "#06c", icon: Brain },
                      { label: "Vector DB", sub: "ChromaDB จัดเก็บ", color: "#34c759", icon: Database },
                      { label: "Query", sub: "ค้นหา Semantic", color: "#f59e0b", icon: Send },
                      { label: "Answer", sub: "AI สร้างคำตอบ", color: "#7c3aed", icon: Sparkles },
                    ].map((node, i, arr) => {
                      const NodeIcon = node.icon;
                      return (
                        <motion.div
                          key={node.label}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 }}
                          className="flex items-center shrink-0"
                        >
                          <div
                            className="rounded-xl border-2 p-3.5 text-center min-w-[110px]"
                            style={{ borderColor: node.color + "40", background: node.color + "08" }}
                          >
                            <NodeIcon size={20} className="mx-auto mb-1.5" style={{ color: node.color }} />
                            <p className="text-[12px] font-bold" style={{ color: node.color }}>{node.label}</p>
                            <p className="text-[10px] text-[#6e6e73] mt-0.5">{node.sub}</p>
                          </div>
                          {i < arr.length - 1 && (
                            <ChevronRight size={16} className="mx-1 text-[#d2d2d7] shrink-0" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* n8n Automation */}
              {selectedTopic === "n8n" && (
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Workflow size={20} className="text-[#f59e0b]" />
                    <h4 className="text-[17px] font-bold text-[#1d1d1f]">n8n Automation</h4>
                  </div>
                  <div className="flex items-center overflow-x-auto pb-2 scrollbar-hide">
                    {[
                      { label: "Trigger", sub: "Webhook / Schedule", color: "#EA4335" },
                      { label: "IF/Switch", sub: "Route ตาม Logic", color: "#f59e0b" },
                      { label: "AI Node", sub: "GPT / Claude", color: "#06c" },
                      { label: "Database", sub: "Read/Write", color: "#34c759" },
                      { label: "Notify", sub: "LINE / Slack / Email", color: "#7c3aed" },
                    ].map((node, i, arr) => (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        className="flex items-center shrink-0"
                      >
                        <div
                          className="px-4 py-3 bg-white rounded-xl text-center border-2 min-w-[100px]"
                          style={{ borderColor: node.color }}
                        >
                          <p className="text-[12px] font-bold" style={{ color: node.color }}>{node.label}</p>
                          <p className="text-[10px] text-[#6e6e73] mt-0.5">{node.sub}</p>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="w-6 h-[2px] bg-black/10 relative shrink-0">
                            <ArrowRight size={10} className="absolute -right-0.5 -top-[4px] text-black/20" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Strategy */}
              {selectedTopic === "strategy" && (
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp size={20} className="text-[#059669]" />
                    <h4 className="text-[17px] font-bold text-[#1d1d1f]">AI Strategy & ROI</h4>
                  </div>
                  <div className="rounded-xl bg-[#059669]/[0.04] border border-[#059669]/15 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#059669] mb-4">ROI Calculator Preview</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-[10px] text-[#6e6e73] mb-1">ลงทุน AI</p>
                        <p className="text-[22px] font-bold text-[#ff3b30]">฿50K</p>
                        <p className="text-[10px] text-[#6e6e73]">ค่า setup + ปีแรก</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#6e6e73] mb-1">ประหยัด/ปี</p>
                        <p className="text-[22px] font-bold text-[#34c759]">฿360K</p>
                        <p className="text-[10px] text-[#6e6e73]">ลดคน 2 ตำแหน่ง</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#6e6e73] mb-1">ROI</p>
                        <p className="text-[22px] font-bold text-[#059669]">620%</p>
                        <p className="text-[10px] text-[#6e6e73]">ปีแรก</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#059669]/10 flex items-center justify-center gap-1.5">
                      <TrendingUp size={12} className="text-[#059669]" />
                      <span className="text-[11px] font-medium text-[#059669]">คืนทุนภายใน 1.6 เดือน</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Chatbot Development */}
              {selectedTopic === "chatbot" && (
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Bot size={20} className="text-[#7c3aed]" />
                    <h4 className="text-[17px] font-bold text-[#1d1d1f]">Chatbot Development</h4>
                  </div>
                  <div className="rounded-xl bg-[#f5f5f7] p-4 max-w-sm mx-auto">
                    {/* Chat header */}
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/[0.06]">
                      <div className="w-7 h-7 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                        <Bot size={14} className="text-[#7c3aed]" />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-[#1d1d1f]">AI Customer Support</p>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                          <span className="text-[9px] text-[#34c759]">Online</span>
                        </div>
                      </div>
                    </div>
                    {/* Chat messages */}
                    <div className="space-y-2.5">
                      <div className="flex justify-end">
                        <div className="bg-[#06c] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%]">
                          สินค้าส่งกี่วันคะ?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[80%] shadow-sm">
                          สินค้าจัดส่งภายใน 1-3 วันทำการค่ะ กรุงเทพฯ-ปริมณฑลรับภายในวันถัดไป ต่างจังหวัด 2-3 วันค่ะ
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-[#06c] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%]">
                          มีเก็บเงินปลายทางไหม?
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[80%] shadow-sm">
                          รับ COD ค่ะ ค่าธรรมเนียม ฿20 สำหรับออเดอร์ต่ำกว่า ฿500 ค่ะ
                        </div>
                      </motion.div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-black/[0.04] flex items-center gap-1">
                      <Sparkles size={10} className="text-[#7c3aed]" />
                      <span className="text-[9px] text-[#6e6e73]">Powered by Flowise + RAG</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Data Analysis */}
              {selectedTopic === "data" && (
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <PieChart size={20} className="text-[#ef4444]" />
                    <h4 className="text-[17px] font-bold text-[#1d1d1f]">Data Analysis with AI</h4>
                  </div>
                  <div className="rounded-xl bg-[#f5f5f7] p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73] mb-4">Sales Dashboard Preview</p>
                    {/* Mock bar chart */}
                    <div className="flex items-end gap-3 justify-center h-[120px] mb-4">
                      {[
                        { label: "ม.ค.", h: 45, color: "#06c" },
                        { label: "ก.พ.", h: 62, color: "#06c" },
                        { label: "มี.ค.", h: 38, color: "#06c" },
                        { label: "เม.ย.", h: 75, color: "#06c" },
                        { label: "พ.ค.", h: 88, color: "#34c759" },
                        { label: "มิ.ย.", h: 95, color: "#34c759" },
                      ].map((bar, i) => (
                        <motion.div
                          key={bar.label}
                          className="flex flex-col items-center gap-1"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.div
                            className="w-8 sm:w-10 rounded-t-md"
                            style={{ background: bar.color }}
                            initial={{ height: 0 }}
                            whileInView={{ height: bar.h }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                          />
                          <span className="text-[10px] text-[#6e6e73]">{bar.label}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <TrendingUp size={12} className="text-[#34c759]" />
                      <span className="text-[11px] font-medium text-[#34c759]">AI ทำนายยอดขาย พ.ค.-มิ.ย. เพิ่มขึ้น 26%</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
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
            className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-3 text-[#1d1d1f]"
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
