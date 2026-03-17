"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Quote,
  Zap,
  Users,
  Bot,
  Server,
  FileText,
  Pill,
  MessageSquare,
  BarChart3,
  Clock,
  DollarSign,
  GraduationCap,
  Code2,
  Sparkles,
  Database,
  Shield,
  Globe,
  Layers,
  LineChart,
  Workflow,
  Search,
  Phone,
  Building2,
  Stethoscope,
  Factory,
  Landmark,
  Rocket,
} from "lucide-react";

/* --------- TYPES --------- */

interface CaseStudy {
  id: string;
  service: string;
  serviceColor: string;
  serviceBg: string;
  serviceIcon: React.ComponentType<{ size: number; style?: React.CSSProperties; className?: string }>;
  industryIcon: React.ComponentType<{ size: number; style?: React.CSSProperties; className?: string }>;
  title: string;
  client: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
    steps: string[];
  };
  results: {
    title: string;
    metrics: { value: string; label: string }[];
  };
  techStack: string[];
  roiHighlight: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  accentColor: string;
  gradient: string;
}

/* --------- DATA --------- */

const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    service: "Workshop",
    serviceColor: "#8b5cf6",
    serviceBg: "rgba(139,92,246,0.08)",
    serviceIcon: GraduationCap,
    industryIcon: Factory,
    title: "Workshop ให้ทีม IT บริษัท Manufacturing",
    client: "บริษัท Manufacturing ชั้นนำ",
    problem: {
      title: "ปัญหา",
      description:
        "ทีม IT 15 คนไม่รู้จัก AI ไม่เข้าใจว่า AI ช่วยงานได้อย่างไร ผู้บริหารต้องการให้ทีมสามารถสร้าง Automation ได้เอง เพื่อลดต้นทุนและเพิ่มประสิทธิภาพการผลิต",
    },
    solution: {
      title: "สิ่งที่ทำ",
      description: "3-day Workshop ครบวงจร ปรับเนื้อหาเฉพาะอุตสาหกรรม Manufacturing",
      steps: [
        "Day 1: AI Fundamentals + Prompt Engineering สำหรับงาน IT",
        "Day 2: n8n Automation — สร้าง Workflow อัตโนมัติจาก use case จริง",
        "Day 3: Hands-on Project — แต่ละทีมสร้าง Automation ของตัวเอง",
      ],
    },
    results: {
      title: "ผลลัพธ์",
      metrics: [
        { value: "5", label: "Automation workflows สร้างเองได้" },
        { value: "15", label: "คนในทีมใช้ AI เป็น" },
        { value: "40%", label: "ลดเวลางาน repetitive" },
      ],
    },
    techStack: ["n8n", "Flowise", "OpenAI API", "Google Workspace", "Slack"],
    roiHighlight: "ทีมสร้าง 5 automation workflows เองได้ภายใน 3 วัน",
    testimonial: {
      quote:
        "หลัง Workshop ทีมเราเปลี่ยนไปเลย จากที่ไม่เคยแตะ AI ตอนนี้สร้าง Automation เองได้แล้ว น่าจะเป็นการลงทุนที่คุ้มค่าที่สุดของปี",
      author: "คุณสมชาย",
      role: "IT Director, Manufacturing Corp",
    },
    accentColor: "#059669",
    gradient: "linear-gradient(145deg, #d1fae5, #ecfdf5)",
  },
  {
    id: "case-2",
    service: "Development",
    serviceColor: "#06c",
    serviceBg: "rgba(0,102,204,0.08)",
    serviceIcon: Code2,
    industryIcon: Landmark,
    title: "ระบบ AI Chatbot สำหรับธนาคาร",
    client: "ธนาคารชั้นนำในประเทศไทย",
    problem: {
      title: "ปัญหา",
      description:
        "Call center รับสายเฉลี่ย 5,000 สาย/วัน ส่วนใหญ่เป็นคำถามซ้ำ ๆ เช่น เช็คยอด สอบถามผลิตภัณฑ์ ทำให้ต้นทุนพนักงานสูง และลูกค้าต้องรอสายนาน",
    },
    solution: {
      title: "สิ่งที่ทำ",
      description:
        "พัฒนา AI Chatbot ระบบ On-Premise เพื่อ compliance + RAG pipeline สำหรับค้นหาข้อมูลผลิตภัณฑ์",
      steps: [
        "ออกแบบ AI Chatbot ที่เข้าใจภาษาไทย + ศัพท์ธนาคาร",
        "สร้าง RAG Pipeline เชื่อมกับ Knowledge Base ผลิตภัณฑ์ทั้งหมด",
        "n8n Automation สำหรับ escalation ส่งต่อ agent เมื่อ bot ตอบไม่ได้",
        "Deploy On-Premise ภายใน Data Center ของธนาคาร (PDPA Compliant)",
      ],
    },
    results: {
      title: "ผลลัพธ์",
      metrics: [
        { value: "60%", label: "ลดสายเข้า Call Center" },
        { value: "฿2M", label: "ประหยัดต่อปี" },
        { value: "24/7", label: "ให้บริการตลอด" },
      ],
    },
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "n8n",
      "Docker",
      "On-Premise GPU",
    ],
    roiHighlight: "ลดสาย 60% ประหยัด ฿2M/ปี",
    testimonial: {
      quote:
        "ระบบ AI Chatbot ที่ AI Studio สร้างให้ ตอบคำถามลูกค้าได้แม่นยำมาก และที่สำคัญคือ deploy บน server เราเอง ข้อมูลไม่หลุดออกไปข้างนอก ผ่าน compliance ทุกข้อ",
      author: "คุณวิภา",
      role: "VP of Digital Banking",
    },
    accentColor: "#06c",
    gradient: "linear-gradient(145deg, #e0f2fe, #dbeafe)",
  },
  {
    id: "case-3",
    service: "Creator",
    serviceColor: "#059669",
    serviceBg: "rgba(5,150,105,0.08)",
    serviceIcon: Sparkles,
    industryIcon: Rocket,
    title: "Content Strategy สำหรับ AI Startup",
    client: "AI Startup สัญชาติไทย",
    problem: {
      title: "ปัญหา",
      description:
        "Startup ไม่มี content team ไม่มีเวลาสร้าง content แต่ต้องการ brand awareness และ leads จาก organic traffic อย่างเร่งด่วน",
    },
    solution: {
      title: "สิ่งที่ทำ",
      description:
        "วาง Content Strategy ครบวงจร ตั้งแต่ Blog, Social Media ไปจนถึง Video Tutorials",
      steps: [
        "วาง Content Calendar + Keyword Research สำหรับ AI niche ในไทย",
        "เขียน Blog 8 posts/เดือน (SEO-optimized, Thai + English)",
        "สร้าง Social Media content: Carousel, Reels, Infographic",
        "ผลิต Video Tutorial 2 ชิ้น/เดือน สอนใช้งานผลิตภัณฑ์",
      ],
    },
    results: {
      title: "ผลลัพธ์",
      metrics: [
        { value: "300%", label: "Traffic เพิ่มขึ้น" },
        { value: "150%", label: "Leads เพิ่มขึ้น" },
        { value: "8", label: "Blog posts/เดือน" },
      ],
    },
    techStack: [
      "WordPress",
      "Ahrefs",
      "Canva",
      "Premiere Pro",
      "Buffer",
      "Google Analytics",
    ],
    roiHighlight: "Traffic เพิ่ม 300%, Leads เพิ่ม 150%",
    testimonial: {
      quote:
        "เราไม่มี content team เลย แต่ AI Studio ทำ content ให้เราครบทุกช่องทาง ผลลัพธ์ดีเกินคาด traffic พุ่งขึ้น 3 เท่าใน 3 เดือน",
      author: "คุณธนา",
      role: "CEO, AI Startup",
    },
    accentColor: "#8b5cf6",
    gradient: "linear-gradient(145deg, #ede9fe, #f5f3ff)",
  },
  {
    id: "case-4",
    service: "Development",
    serviceColor: "#06c",
    serviceBg: "rgba(0,102,204,0.08)",
    serviceIcon: Code2,
    industryIcon: Stethoscope,
    title: "ระบบ RAG สำหรับคลินิกเครือ",
    client: "คลินิกเครือ 12 สาขา",
    problem: {
      title: "ปัญหา",
      description:
        "คลินิก 12 สาขา ค้นข้อมูลยาไม่ทัน เภสัชกรต้องเปิดหนังสือหรือค้น Google ทุกครั้ง ทำให้เสียเวลาและมีความเสี่ยงต่อความผิดพลาด",
    },
    solution: {
      title: "สิ่งที่ทำ",
      description:
        "สร้าง RAG Pipeline เชื่อมกับ Drug Database + LINE Bot สำหรับเภสัชกรทุกสาขา",
      steps: [
        "รวบรวมและ digitize ข้อมูลยา 10,000+ รายการ เข้า Vector Database",
        "สร้าง RAG Pipeline: LangChain + ChromaDB + Thai-optimized embedding",
        "พัฒนา LINE Bot ที่เภสัชกรพิมพ์ถามได้ทันที ได้คำตอบใน 2 วินาที",
        "Dashboard สำหรับ admin อัปเดตข้อมูลยาและดูสถิติการใช้งาน",
      ],
    },
    results: {
      title: "ผลลัพธ์",
      metrics: [
        { value: "10x", label: "ค้นข้อมูลเร็วขึ้น" },
        { value: "12", label: "สาขาใช้งานพร้อมกัน" },
        { value: "98%", label: "ความแม่นยำคำตอบ" },
      ],
    },
    techStack: [
      "Python",
      "LangChain",
      "ChromaDB",
      "LINE Messaging API",
      "FastAPI",
      "PostgreSQL",
    ],
    roiHighlight: "ค้นข้อมูลเร็วขึ้น 10x ใช้ได้ทุกสาขาพร้อมกัน",
    testimonial: {
      quote:
        "แต่ก่อนเภสัชกรต้องเปิดหนังสือค้นข้อมูลยา ตอนนี้แค่พิมพ์ใน LINE ได้คำตอบใน 2 วินาที แม่นยำกว่าเดิมเยอะ ช่วยลดความเสี่ยงได้มาก",
      author: "ภก.สุดา",
      role: "หัวหน้าเภสัชกร, คลินิกเครือ",
    },
    accentColor: "#dc2626",
    gradient: "linear-gradient(145deg, #fee2e2, #fef2f2)",
  },
];

/* --------- CASE STUDY CARD --------- */

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const ServiceIcon = study.serviceIcon;
  const IndustryIcon = study.industryIcon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="apple-card bg-white rounded-2xl overflow-hidden border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-l-4"
      style={{ borderLeftColor: study.accentColor }}
    >
      {/* Header / Visual */}
      <div
        className="p-4 md:p-8 lg:p-10 pt-6 md:pt-12 relative overflow-hidden"
        style={{ background: study.gradient }}
      >
        {/* Decorative elements */}
        <div
          className="absolute -top-10 -right-10 w-[180px] h-[180px] rounded-full blur-[30px]"
          style={{
            background: `radial-gradient(circle, ${study.accentColor}18, transparent)`,
          }}
        />

        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 relative">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-1.5 text-[12px] font-bold px-3.5 py-1.5 rounded-[20px] tracking-[0.04em] backdrop-blur-md"
              style={{
                color: study.serviceColor,
                background: "rgba(255,255,255,0.7)",
              }}
            >
              <ServiceIcon size={14} />
              {study.service}
            </span>
            <span className="text-[12px] font-semibold text-[#6e6e73] bg-white/50 px-3.5 py-1.5 rounded-[20px]">
              {study.client}
            </span>
          </div>
          <div className="w-12 h-12 rounded-[14px] bg-white/60 flex items-center justify-center">
            <IndustryIcon size={24} style={{ color: study.accentColor }} />
          </div>
        </div>

        <h3 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold text-[#1d1d1f] leading-[1.2] relative max-w-[600px]">
          {study.title}
        </h3>
      </div>

      {/* Problem - Solution - Result */}
      <div className="p-3 md:p-6 lg:px-10 lg:pt-10 lg:pb-5 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(220,38,38,0.08)] flex items-center justify-center">
              <BarChart3 size={18} className="text-[#dc2626]" />
            </div>
            <span className="text-[14px] font-bold text-[#dc2626] tracking-[0.02em]">
              {study.problem.title}
            </span>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#6e6e73] leading-[1.7]">
            {study.problem.description}
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center"
              style={{ background: `${study.accentColor}12` }}
            >
              <Zap size={18} style={{ color: study.accentColor }} />
            </div>
            <span
              className="text-[14px] font-bold tracking-[0.02em]"
              style={{ color: study.accentColor }}
            >
              {study.solution.title}
            </span>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#6e6e73] leading-[1.7] mb-3.5">
            {study.solution.description}
          </p>
          <ul className="list-none p-0 m-0">
            {study.solution.steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] text-[#1d1d1f] leading-[1.55] mb-2"
              >
                <CheckCircle
                  size={14}
                  className="shrink-0 mt-[3px]"
                  style={{ color: study.accentColor }}
                />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(5,150,105,0.08)] flex items-center justify-center">
              <TrendingUp size={18} className="text-[#059669]" />
            </div>
            <span className="text-[14px] font-bold text-[#059669] tracking-[0.02em]">
              {study.results.title}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {study.results.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-[#f5f5f7] rounded-[14px] p-3.5 md:p-4 flex items-center gap-3.5"
              >
                <span className="text-[22px] md:text-[24px] font-bold text-[#1d1d1f] min-w-[60px]">
                  {metric.value}
                </span>
                <span className="text-[13px] text-[#6e6e73] leading-[1.4]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="px-4 md:px-6 lg:px-10 py-4 md:py-5 flex flex-wrap gap-1.5 items-center"
      >
        <span className="text-[12px] font-semibold text-[#86868b] mr-1">
          Tech Stack:
        </span>
        {study.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-semibold text-[#6e6e73] bg-[#f5f5f7] px-3 py-1 rounded-full border border-black/[0.04]"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* ROI Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
        className="mx-4 md:mx-6 lg:mx-10 rounded-2xl p-4 md:p-5 flex items-center gap-3.5"
        style={{
          background: `linear-gradient(135deg, ${study.accentColor}08, ${study.accentColor}04)`,
          border: `1px solid ${study.accentColor}15`,
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${study.accentColor}12` }}
        >
          <DollarSign size={20} style={{ color: study.accentColor }} />
        </div>
        <div>
          <span className="text-[11px] font-semibold text-[#86868b] block mb-0.5 tracking-[0.04em] uppercase">
            ROI Highlight
          </span>
          <span className="text-[15px] md:text-[16px] font-bold text-[#1d1d1f]">
            {study.roiHighlight}
          </span>
        </div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75 }}
        className="p-3 md:p-6 lg:px-10 lg:py-8"
      >
        <div className="bg-[#fafafa] rounded-[20px] p-5 md:p-7 relative">
          <Quote
            size={24}
            className="absolute top-5 left-5 md:left-6 opacity-30"
            style={{ color: study.accentColor }}
          />
          <p className="text-[14px] md:text-[15px] text-[#1d1d1f] leading-[1.75] italic mb-4 pl-8">
            <span className="text-[48px] font-serif leading-[0] align-top mr-1 -ml-6 inline-block" style={{ color: study.accentColor, opacity: 0.3 }}>&ldquo;</span>{study.testimonial.quote}
          </p>
          <div className="flex items-center gap-3 pl-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold"
              style={{
                background: `${study.accentColor}15`,
                color: study.accentColor,
              }}
            >
              {study.testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[#1d1d1f]">
                {study.testimonial.author}
              </div>
              <div className="text-[12px] text-[#86868b]">
                {study.testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* --------- STATS BAR --------- */

function StatsBar() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "ผู้เข้า Workshop",
      color: "#8b5cf6",
    },
    {
      icon: Bot,
      value: "30+",
      label: "ระบบ AI พัฒนาแล้ว",
      color: "#06c",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "ลูกค้าพอใจ",
      color: "#059669",
    },
    {
      icon: Building2,
      value: "50+",
      label: "องค์กรที่ไว้วางใจ",
      color: "#dc2626",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-16 md:mb-20"
    >
      {stats.map((stat, i) => {
        const StatIcon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="apple-card bg-white rounded-[20px] p-4 md:p-6 lg:p-8 text-center border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          >
            <StatIcon
              size={24}
              className="mb-3"
              style={{ color: stat.color }}
            />
            <div className="text-[28px] md:text-[36px] font-bold text-[#1d1d1f] leading-[1.1]">
              {stat.value}
            </div>
            <div className="text-[13px] md:text-[14px] text-[#86868b] mt-1.5">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* --------- CTA SECTION --------- */

function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[28px] p-6 md:p-10 lg:p-16 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #1d1d1f, #2d2d2f)",
      }}
    >
      {/* Gradient orbs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-[50px] bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent)]" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-[50px] bg-[radial-gradient(circle,rgba(0,102,204,0.25),transparent)]" />

      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-16 h-16 rounded-[18px] bg-[rgba(0,102,204,0.15)] flex items-center justify-center mx-auto mb-6"
      >
        <MessageSquare size={28} className="text-[#06c]" />
      </motion.div>

      <h3 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white leading-[1.25] mb-3 relative">
        อยากได้ผลลัพธ์แบบนี้บ้าง?
      </h3>
      <p className="text-[14px] md:text-[16px] text-white/60 max-w-[500px] mx-auto mb-8 md:mb-9 leading-[1.65] relative">
        ปรึกษาเราได้ฟรี เราจะช่วยวิเคราะห์ว่า AI ช่วยธุรกิจของคุณได้อย่างไร
        พร้อมเสนอ solution ที่เหมาะสมที่สุด
      </p>

      <div className="flex gap-4 justify-center flex-wrap relative">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] bg-[#06c] text-white text-[15px] md:text-[16px] font-semibold no-underline cursor-pointer border-none"
        >
          ปรึกษาฟรี <ArrowRight size={16} />
        </motion.a>
        <motion.a
          href="/pricing"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] bg-white/10 text-white text-[15px] md:text-[16px] font-semibold no-underline cursor-pointer border border-white/15"
        >
          ดูราคา
        </motion.a>
      </div>
    </motion.div>
  );
}

/* --------- MAIN COMPONENT --------- */

export default function CaseStudiesSection() {
  return (
    <section>
      {/* Hero */}
      <div className="bg-white px-4 md:px-6 pt-28 md:pt-40 pb-16 md:pb-20 text-center">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[13px] md:text-[14px] font-semibold text-[#06c] tracking-[0.08em] uppercase mb-4">
              Case Studies
            </div>
            <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-[#1d1d1f] leading-[1.1] mb-4">
              ผลงาน
            </h1>
            <p className="text-[18px] md:text-[21px] lg:text-[24px] text-[#6e6e73] leading-[1.5] max-w-[600px] mx-auto">
              ตัวอย่างจากธุรกิจจริงที่เราช่วย
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#f5f5f7] px-4 md:px-6 pt-12 md:pt-16">
        <div className="max-w-[1080px] mx-auto">
          <StatsBar />
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-[#f5f5f7] px-4 md:px-6 pb-12 md:pb-16">
        <div className="max-w-[1080px] mx-auto space-y-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white px-4 md:px-6 py-16 md:py-20 lg:py-[120px]">
        <div className="max-w-[800px] mx-auto">
          <CTASection />
        </div>
      </div>
    </section>
  );
}
