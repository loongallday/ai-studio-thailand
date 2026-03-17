"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
  BookOpen,
  Lightbulb,
  Target,
  Database,
  Layers,
  Monitor,
  FileText,
  Play,
  Headphones,
  PenTool,
  TrendingUp,
  Zap,
  MessageSquare,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Service 1 Visual: Workshop Photo Placeholder                       */
/* ------------------------------------------------------------------ */
function WorkshopVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        background: "linear-gradient(145deg, #f5f5f7, #e8e8ed)",
        borderRadius: 24,
        overflow: "hidden",
        position: "relative",
        aspectRatio: "4/3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "#06c",
          color: "white",
          fontSize: 11,
          fontWeight: 700,
          padding: "6px 14px",
          borderRadius: 20,
          letterSpacing: "0.04em",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#4ade80",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        Live Workshop
      </motion.div>

      {/* Center icon area */}
      <div
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
        <GraduationCap size={48} style={{ color: "#06c" }} />
      </div>

      <div
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: "#1d1d1f",
          marginBottom: 6,
        }}
      >
        AI Workshop 2026
      </div>
      <div style={{ fontSize: 13, color: "#86868b" }}>
        Hands-on Training Experience
      </div>

      {/* Floating participant badges */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 24,
          right: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex" }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: ["#06c", "#3b82f6", "#8b5cf6", "#ec4899"][i],
                  border: "2px solid white",
                  marginLeft: i > 0 ? -8 : 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  color: "white",
                  fontWeight: 600,
                }}
              >
                {["A", "B", "C", "D"][i]}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500 }}>
            +20 ผู้เข้าร่วม
          </span>
        </div>
        <div
          style={{
            background: "white",
            borderRadius: 10,
            padding: "6px 12px",
            fontSize: 11,
            fontWeight: 600,
            color: "#1d1d1f",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          3 Days
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service 2 Visual: Architecture Diagram                             */
/* ------------------------------------------------------------------ */
function ArchitectureVisual() {
  const nodes = [
    { label: "Client", icon: Monitor, x: "10%", y: "50%", color: "#06c" },
    { label: "API", icon: Zap, x: "33%", y: "30%", color: "#3b82f6" },
    { label: "AI Engine", icon: Layers, x: "58%", y: "50%", color: "#8b5cf6" },
    { label: "Database", icon: Database, x: "83%", y: "30%", color: "#059669" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        background: "#f5f5f7",
        borderRadius: 24,
        overflow: "hidden",
        position: "relative",
        padding: "40px 24px 32px",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 32,
          paddingLeft: 4,
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 12,
            color: "#86868b",
            fontWeight: 500,
            marginLeft: 8,
          }}
        >
          system-architecture.diagram
        </span>
      </div>

      {/* Architecture flow */}
      <div style={{ position: "relative", height: 220 }}>
        {/* Connection SVG lines */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="#86868b" />
            </marker>
          </defs>
          {/* Client -> API */}
          <line
            x1="18%"
            y1="50%"
            x2="30%"
            y2="38%"
            stroke="#c7c7cc"
            strokeWidth="2"
            strokeDasharray="6,4"
            markerEnd="url(#arrowhead)"
          />
          {/* API -> AI Engine */}
          <line
            x1="41%"
            y1="38%"
            x2="53%"
            y2="50%"
            stroke="#c7c7cc"
            strokeWidth="2"
            strokeDasharray="6,4"
            markerEnd="url(#arrowhead)"
          />
          {/* AI Engine -> Database */}
          <line
            x1="66%"
            y1="50%"
            x2="78%"
            y2="38%"
            stroke="#c7c7cc"
            strokeWidth="2"
            strokeDasharray="6,4"
            markerEnd="url(#arrowhead)"
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => {
          const NodeIcon = node.icon;
          return (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12 }}
              style={{
                position: "absolute",
                left: node.x,
                top: node.y,
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "white",
                  border: `2px solid ${node.color}30`,
                  boxShadow: `0 4px 16px ${node.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NodeIcon size={24} style={{ color: node.color }} />
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#1d1d1f",
                  background: "white",
                  padding: "3px 10px",
                  borderRadius: 6,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {node.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom tech stack */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 16,
          flexWrap: "wrap",
        }}
      >
        {["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"].map(
          (tech) => (
            <span
              key={tech}
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#6e6e73",
                background: "white",
                padding: "4px 12px",
                borderRadius: 6,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {tech}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service 3 Visual: Social Media Card Grid                           */
/* ------------------------------------------------------------------ */
function ContentGridVisual() {
  const cards = [
    {
      platform: "Blog",
      icon: FileText,
      color: "#06c",
      bg: "linear-gradient(135deg, #e0f2fe, #dbeafe)",
      title: "5 วิธีใช้ AI ในธุรกิจ",
      stat: "2.4K reads",
    },
    {
      platform: "TikTok",
      icon: Play,
      color: "#ec4899",
      bg: "linear-gradient(135deg, #fce7f3, #fdf2f8)",
      title: "AI ใน 60 วินาที",
      stat: "45K views",
    },
    {
      platform: "YouTube",
      icon: Play,
      color: "#ef4444",
      bg: "linear-gradient(135deg, #fee2e2, #fef2f2)",
      title: "สอน RAG ฉบับเข้าใจง่าย",
      stat: "8.1K views",
    },
    {
      platform: "Podcast",
      icon: Headphones,
      color: "#8b5cf6",
      bg: "linear-gradient(135deg, #ede9fe, #f5f3ff)",
      title: "อนาคต LLM EP.12",
      stat: "1.2K listens",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
      }}
    >
      {cards.map((card, i) => {
        const CardIcon = card.icon;
        return (
          <motion.div
            key={card.platform}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            style={{
              background: card.bg,
              borderRadius: 18,
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardIcon size={18} style={{ color: card.color }} />
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: card.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {card.platform}
              </span>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#1d1d1f",
                lineHeight: 1.35,
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#6e6e73",
                fontWeight: 500,
              }}
            >
              {card.stat}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bullet Point component                                             */
/* ------------------------------------------------------------------ */
function BulletPoint({
  icon: Icon,
  text,
  color,
  delay,
}: {
  icon: React.ComponentType<{ size: number; style: React.CSSProperties }>;
  text: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "12px 0",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: `${color}10`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={20} style={{ color }} />
      </div>
      <span
        style={{
          fontSize: 16,
          color: "#1d1d1f",
          lineHeight: 1.55,
          paddingTop: 8,
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Services Component                                            */
/* ------------------------------------------------------------------ */
export default function Services() {
  return (
    <section id="services">
      {/* ============================================================ */}
      {/*  Section Header                                               */}
      {/* ============================================================ */}
      <div
        style={{
          background: "#fff",
          padding: "clamp(60px, 10vw, 120px) 16px clamp(40px, 8vw, 80px)",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#06c",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Our Services
            </div>
            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 52px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.12,
                marginBottom: 16,
              }}
            >
              เราทำอะไรบ้าง
            </h2>
            <p
              style={{
                fontSize: 19,
                color: "#86868b",
                maxWidth: 540,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              ครบวงจรด้าน AI ตั้งแต่สอน สร้าง พัฒนา
              จนถึงเป็น AI Creator ให้ธุรกิจของคุณ
            </p>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Service 1: AI Workshop & Training — white bg                 */}
      {/* ============================================================ */}
      <div style={{ background: "#fff", padding: "40px 16px 60px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="service-row"
          >
            {/* Left: Text */}
            <div className="service-text">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(0,102,204,0.06)",
                  padding: "6px 14px",
                  borderRadius: 20,
                  marginBottom: 24,
                }}
              >
                <GraduationCap size={16} style={{ color: "#06c" }} />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#06c",
                  }}
                >
                  Service 01
                </span>
              </motion.div>

              <h3
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  lineHeight: 1.15,
                  marginBottom: 12,
                }}
              >
                AI Workshop
                <br />& Training
              </h3>

              <p
                style={{
                  fontSize: 17,
                  color: "#6e6e73",
                  lineHeight: 1.65,
                  marginBottom: 32,
                  maxWidth: 420,
                }}
              >
                สอน AI ตั้งแต่พื้นฐานถึงขั้นสูง Workshop 1-3 วัน
                สำหรับทีมของคุณ เรียนรู้ AI อย่างลึกซึ้ง ปฏิบัติจริง ใช้ได้จริง
              </p>

              <BulletPoint
                icon={BookOpen}
                text="Prompt Engineering, RAG Pipeline, n8n Automation ครบทุกหลักสูตร"
                color="#06c"
                delay={0.25}
              />
              <BulletPoint
                icon={Lightbulb}
                text="เรียนจาก use case จริง ไม่ใช่แค่ทฤษฎี ปฏิบัติได้ทันที"
                color="#06c"
                delay={0.35}
              />
              <BulletPoint
                icon={Target}
                text="ออกแบบหลักสูตรเฉพาะองค์กร ตอบโจทย์ทุกอุตสาหกรรม"
                color="#06c"
                delay={0.45}
              />

              <motion.a
                href="#workshop"
                whileHover={{ x: 6 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#06c",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginTop: 28,
                }}
              >
                ดูหลักสูตร <ArrowRight size={18} />
              </motion.a>
            </div>

            {/* Right: Visual */}
            <div className="service-visual">
              <WorkshopVisual />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Service 2: Custom AI Development — #f5f5f7 bg                */}
      {/* ============================================================ */}
      <div style={{ background: "#f5f5f7", padding: "clamp(48px, 8vw, 100px) 16px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="service-row"
          >
            {/* Left: Visual */}
            <div className="service-visual" style={{ order: 1 }}>
              <ArchitectureVisual />
            </div>

            {/* Right: Text */}
            <div className="service-text" style={{ order: 2 }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(29,78,216,0.06)",
                  padding: "6px 14px",
                  borderRadius: 20,
                  marginBottom: 24,
                }}
              >
                <Code size={16} style={{ color: "#1d4ed8" }} />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1d4ed8",
                  }}
                >
                  Service 02
                </span>
              </motion.div>

              <h3
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  lineHeight: 1.15,
                  marginBottom: 12,
                }}
              >
                Custom AI
                <br />
                Development
              </h3>

              <p
                style={{
                  fontSize: 17,
                  color: "#6e6e73",
                  lineHeight: 1.65,
                  marginBottom: 32,
                  maxWidth: 420,
                }}
              >
                พัฒนาระบบ AI ขนาดใหญ่ ทั้ง On-Premise และ Cloud
                Enterprise-grade, compliance-ready พร้อมทีมซัพพอร์ตตลอด
              </p>

              <BulletPoint
                icon={Layers}
                text="ออกแบบสถาปัตยกรรม AI ตั้งแต่ต้น Client → API → AI → Database"
                color="#1d4ed8"
                delay={0.25}
              />
              <BulletPoint
                icon={Database}
                text="รองรับ RAG, Vector DB, Fine-tuning ครบทุก pipeline"
                color="#1d4ed8"
                delay={0.35}
              />
              <BulletPoint
                icon={CheckCircle}
                text="PDPA Compliant, Air-gapped ready, Enterprise security"
                color="#1d4ed8"
                delay={0.45}
              />

              <motion.a
                href="#portfolio"
                whileHover={{ x: 6 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#1d4ed8",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginTop: 28,
                }}
              >
                ดูผลงาน <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Service 3: AI Content Creation — white bg                    */}
      {/* ============================================================ */}
      <div style={{ background: "#fff", padding: "clamp(48px, 8vw, 100px) 16px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="service-row"
          >
            {/* Left: Text */}
            <div className="service-text">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(5,150,105,0.06)",
                  padding: "6px 14px",
                  borderRadius: 20,
                  marginBottom: 24,
                }}
              >
                <Sparkles size={16} style={{ color: "#059669" }} />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#059669",
                  }}
                >
                  Service 03
                </span>
              </motion.div>

              <h3
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  lineHeight: 1.15,
                  marginBottom: 12,
                }}
              >
                AI Content
                <br />
                Creation
              </h3>

              <p
                style={{
                  fontSize: 17,
                  color: "#6e6e73",
                  lineHeight: 1.65,
                  marginBottom: 32,
                  maxWidth: 420,
                }}
              >
                เราเป็น AI Creator / Influencer สร้าง content ทุกรูปแบบ
                ทั้ง Blog, Social Media, Video และ Podcast
              </p>

              <BulletPoint
                icon={PenTool}
                text="บทความ AI เชิงลึก เขียนโดยคนที่ใช้ AI จริงทุกวัน"
                color="#059669"
                delay={0.25}
              />
              <BulletPoint
                icon={MessageSquare}
                text="Content บน TikTok, YouTube ที่เข้าถึงคนไทยหลายหมื่นคน"
                color="#059669"
                delay={0.35}
              />
              <BulletPoint
                icon={TrendingUp}
                text="Podcast สัมภาษณ์ผู้เชี่ยวชาญ AI ทั้งไทยและต่างประเทศ"
                color="#059669"
                delay={0.45}
              />

              <motion.a
                href="#content"
                whileHover={{ x: 6 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#059669",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginTop: 28,
                }}
              >
                ดู content <ArrowRight size={18} />
              </motion.a>
            </div>

            {/* Right: Visual */}
            <div className="service-visual">
              <ContentGridVisual />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Bottom Stats Bar                                             */}
      {/* ============================================================ */}
      <div style={{ background: "#f5f5f7", padding: "clamp(40px, 7vw, 80px) 16px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="stats-grid"
          >
            {[
              {
                icon: Clock,
                value: "50+",
                label: "Workshop จัดไปแล้ว",
                color: "#06c",
              },
              {
                icon: Code,
                value: "30+",
                label: "โปรเจ็กต์ AI พัฒนาแล้ว",
                color: "#1d4ed8",
              },
              {
                icon: Users,
                value: "500+",
                label: "ผู้เรียนทั้งหมด",
                color: "#059669",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="apple-card"
                style={{
                  textAlign: "center",
                  padding: "40px 24px",
                  background: "white",
                  borderRadius: 24,
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                }}
              >
                <stat.icon
                  size={28}
                  style={{ color: stat.color, marginBottom: 14 }}
                />
                <div
                  style={{
                    fontSize: 44,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#86868b",
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .service-row > div {
            order: unset !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
