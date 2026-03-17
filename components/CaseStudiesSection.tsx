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

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface CaseStudy {
  id: string;
  service: string;
  serviceColor: string;
  serviceBg: string;
  serviceIcon: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
  industryIcon: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
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

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

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
    accentColor: "#8b5cf6",
    gradient: "linear-gradient(145deg, #ede9fe, #f5f3ff)",
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
    accentColor: "#059669",
    gradient: "linear-gradient(145deg, #d1fae5, #ecfdf5)",
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
    accentColor: "#06c",
    gradient: "linear-gradient(145deg, #e0f2fe, #dbeafe)",
  },
];

/* ─────────────────────────────────────────────
   CASE STUDY CARD
───────────────────────────────────────────── */

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const ServiceIcon = study.serviceIcon;
  const IndustryIcon = study.industryIcon;
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="apple-card"
      style={{
        background: "#fff",
        borderRadius: 28,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        marginBottom: 40,
      }}
    >
      {/* ── Header / Visual ── */}
      <div
        className="case-header"
        style={{
          background: study.gradient,
          padding: "48px 40px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${study.accentColor}18, transparent)`,
            filter: "blur(30px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 24,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                color: study.serviceColor,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                padding: "6px 14px",
                borderRadius: 20,
                letterSpacing: "0.04em",
              }}
            >
              <ServiceIcon size={14} />
              {study.service}
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#6e6e73",
                background: "rgba(255,255,255,0.5)",
                padding: "6px 14px",
                borderRadius: 20,
              }}
            >
              {study.client}
            </span>
          </div>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IndustryIcon size={24} style={{ color: study.accentColor }} />
          </div>
        </div>

        <h3
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 700,
            color: "#1d1d1f",
            lineHeight: 1.2,
            position: "relative",
            maxWidth: 600,
          }}
        >
          {study.title}
        </h3>
      </div>

      {/* ── Problem → Solution → Result ── */}
      <div
        style={{
          padding: "40px 40px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
        }}
        className="case-flow-grid"
      >
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(220,38,38,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BarChart3 size={18} style={{ color: "#dc2626" }} />
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#dc2626",
                letterSpacing: "0.02em",
              }}
            >
              {study.problem.title}
            </span>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "#6e6e73",
              lineHeight: 1.7,
            }}
          >
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `${study.accentColor}12`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zap size={18} style={{ color: study.accentColor }} />
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: study.accentColor,
                letterSpacing: "0.02em",
              }}
            >
              {study.solution.title}
            </span>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "#6e6e73",
              lineHeight: 1.7,
              marginBottom: 14,
            }}
          >
            {study.solution.description}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {study.solution.steps.map((step, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: 13,
                  color: "#1d1d1f",
                  lineHeight: 1.55,
                  marginBottom: 8,
                }}
              >
                <CheckCircle
                  size={14}
                  style={{
                    color: study.accentColor,
                    flexShrink: 0,
                    marginTop: 3,
                  }}
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(5,150,105,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TrendingUp size={18} style={{ color: "#059669" }} />
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#059669",
                letterSpacing: "0.02em",
              }}
            >
              {study.results.title}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {study.results.metrics.map((metric, i) => (
              <div
                key={i}
                style={{
                  background: "#f5f5f7",
                  borderRadius: 14,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    minWidth: 60,
                  }}
                >
                  {metric.value}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#6e6e73",
                    lineHeight: 1.4,
                  }}
                >
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Tech Stack ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="case-tech-stack"
        style={{
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#86868b",
            marginRight: 4,
          }}
        >
          Tech Stack:
        </span>
        {study.techStack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#6e6e73",
              background: "#f5f5f7",
              padding: "5px 12px",
              borderRadius: 8,
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* ── ROI Highlight ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
        className="case-roi"
        style={{
          margin: "0 40px",
          background: `linear-gradient(135deg, ${study.accentColor}08, ${study.accentColor}04)`,
          borderRadius: 16,
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          border: `1px solid ${study.accentColor}15`,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: `${study.accentColor}12`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <DollarSign size={20} style={{ color: study.accentColor }} />
        </div>
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#86868b",
              display: "block",
              marginBottom: 2,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            ROI Highlight
          </span>
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#1d1d1f",
            }}
          >
            {study.roiHighlight}
          </span>
        </div>
      </motion.div>

      {/* ── Testimonial ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75 }}
        className="case-testimonial"
        style={{
          padding: "28px 40px 36px",
        }}
      >
        <div
          style={{
            background: "#fafafa",
            borderRadius: 20,
            padding: "28px 32px",
            position: "relative",
          }}
        >
          <Quote
            size={24}
            style={{
              color: study.accentColor,
              opacity: 0.3,
              position: "absolute",
              top: 20,
              left: 24,
            }}
          />
          <p
            style={{
              fontSize: 15,
              color: "#1d1d1f",
              lineHeight: 1.75,
              fontStyle: "italic",
              marginBottom: 16,
              paddingLeft: 8,
            }}
          >
            &ldquo;{study.testimonial.quote}&rdquo;
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingLeft: 8,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: `${study.accentColor}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: study.accentColor,
              }}
            >
              {study.testimonial.author.charAt(0)}
            </div>
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1d1d1f",
                }}
              >
                {study.testimonial.author}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#86868b",
                }}
              >
                {study.testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────── */

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
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
        marginBottom: 80,
      }}
      className="stats-bar-grid"
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
            className="apple-card"
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "32px 24px",
              textAlign: "center",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
            }}
          >
            <StatIcon
              size={24}
              style={{ color: stat.color, marginBottom: 12 }}
            />
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#86868b",
                marginTop: 6,
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────── */

function CTASection() {
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.25), transparent)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,102,204,0.25), transparent)",
          filter: "blur(50px)",
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
        <MessageSquare size={28} style={{ color: "#06c" }} />
      </motion.div>

      <h3
        style={{
          fontSize: "clamp(24px, 3vw, 36px)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.25,
          marginBottom: 12,
          position: "relative",
        }}
      >
        อยากได้ผลลัพธ์แบบนี้บ้าง?
      </h3>
      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.6)",
          maxWidth: 500,
          margin: "0 auto 36px",
          lineHeight: 1.65,
          position: "relative",
        }}
      >
        ปรึกษาเราได้ฟรี เราจะช่วยวิเคราะห์ว่า AI ช่วยธุรกิจของคุณได้อย่างไร
        พร้อมเสนอ solution ที่เหมาะสมที่สุด
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "16px 32px",
            borderRadius: 14,
            background: "#06c",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            cursor: "pointer",
            border: "none",
          }}
        >
          ปรึกษาฟรี <ArrowRight size={16} />
        </motion.a>
        <motion.a
          href="/pricing"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "16px 32px",
            borderRadius: 14,
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            cursor: "pointer",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          ดูราคา
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function CaseStudiesSection() {
  return (
    <section>
      {/* ============================================================ */}
      {/*  Hero                                                         */}
      {/* ============================================================ */}
      <div
        style={{
          background: "#fff",
          padding: "160px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#06c",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Case Studies
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 64px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              ผลงาน
            </h1>
            <p
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "#6e6e73",
                lineHeight: 1.5,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              ตัวอย่างจากธุรกิจจริงที่เราช่วย
            </p>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Stats Bar                                                    */}
      {/* ============================================================ */}
      <div style={{ background: "#f5f5f7", padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <StatsBar />
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Case Studies                                                 */}
      {/* ============================================================ */}
      <div style={{ background: "#f5f5f7", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <div style={{ background: "#fff", padding: "80px 24px 120px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <CTASection />
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Responsive Styles                                            */}
      {/* ============================================================ */}
      <style jsx>{`
        @media (max-width: 768px) {
          .case-flow-grid {
            grid-template-columns: 1fr !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .case-header {
            padding: 28px 20px 24px !important;
          }
          .case-tech-stack {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .case-roi {
            margin-left: 20px !important;
            margin-right: 20px !important;
          }
          .case-testimonial {
            padding: 20px 20px 28px !important;
          }
          .stats-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-bar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
