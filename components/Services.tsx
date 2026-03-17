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
      className="rounded-xl md:rounded-3xl overflow-hidden relative aspect-[4/3] flex flex-col items-center justify-center shadow-lg md:shadow-xl pb-16"
      style={{ background: "linear-gradient(145deg, #f5f5f7, #e8e8ed)" }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2 py-1 text-[9px] font-bold tracking-wide text-white"
        style={{ background: "#06c" }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "#4ade80" }}
        />
        Live Workshop
      </motion.div>

      {/* Center icon area */}
      <div className="w-[100px] h-[100px] rounded-[28px] flex items-center justify-center mb-5"
        style={{ background: "rgba(0,102,204,0.08)" }}
      >
        <GraduationCap size={48} style={{ color: "#06c" }} />
      </div>

      <div className="text-base font-semibold mb-1.5" style={{ color: "#1d1d1f" }}>
        AI Workshop 2026
      </div>
      <div className="text-[13px]" style={{ color: "#6e6e73" }}>
        Hands-on Training Experience
      </div>

      {/* Floating participant badges */}
      <div className="mt-4 pt-4 border-t border-black/[0.04] mx-4 sm:mx-6 flex justify-between items-center pb-4 sm:pb-6">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-semibold"
                style={{
                  background: ["#06c", "#3b82f6", "#8b5cf6", "#ec4899"][i],
                  marginLeft: i > 0 ? -8 : 0,
                }}
              >
                {["A", "B", "C", "D"][i]}
              </div>
            ))}
          </div>
          <span className="text-[11px] font-medium truncate" style={{ color: "#6e6e73" }}>
            +20 ผู้เข้าร่วม
          </span>
        </div>
        <div className="bg-white rounded-[10px] px-2 py-1 text-[10px] font-semibold shadow-sm shrink-0"
          style={{ color: "#1d1d1f" }}
        >
          3 Days
        </div>
      </div>
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
      className="rounded-xl md:rounded-3xl overflow-hidden relative pt-10 px-6 pb-8 shadow-lg md:shadow-xl"
      style={{ background: "#f5f5f7" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 mb-8 pl-1">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="text-xs font-medium ml-2" style={{ color: "#6e6e73" }}>
          system-architecture.diagram
        </span>
      </div>

      {/* Architecture flow */}
      <div className="relative h-[220px]">
        {/* Connection SVG lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="#6e6e73" />
            </marker>
          </defs>
          <line
            x1="18%" y1="50%" x2="30%" y2="38%"
            stroke="#c7c7cc" strokeWidth="2" strokeDasharray="6,4"
            markerEnd="url(#arrowhead)"
          />
          <line
            x1="41%" y1="38%" x2="53%" y2="50%"
            stroke="#c7c7cc" strokeWidth="2" strokeDasharray="6,4"
            markerEnd="url(#arrowhead)"
          />
          <line
            x1="66%" y1="50%" x2="78%" y2="38%"
            stroke="#c7c7cc" strokeWidth="2" strokeDasharray="6,4"
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
              className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.x, top: node.y }}
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center"
                style={{
                  border: `2px solid ${node.color}30`,
                  boxShadow: `0 4px 16px ${node.color}12`,
                }}
              >
                <NodeIcon size={24} style={{ color: node.color }} />
              </div>
              <span className="text-xs font-semibold bg-white px-2.5 py-0.5 rounded-md shadow-sm"
                style={{ color: "#1d1d1f" }}
              >
                {node.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom tech stack */}
      <div className="flex justify-center gap-2.5 mt-4 flex-wrap">
        {["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"].map(
          (tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium bg-white px-3 py-1 rounded-md border border-black/5"
              style={{ color: "#6e6e73" }}
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
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-full overflow-hidden shadow-lg md:shadow-xl rounded-xl md:rounded-2xl"
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
            className="rounded-2xl px-4 py-4 sm:py-5 flex flex-col gap-2 sm:gap-2.5 border border-black/[0.04]"
            style={{ background: card.bg }}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.7)" }}
              >
                <CardIcon size={18} style={{ color: card.color }} />
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: card.color }}
              >
                {card.platform}
              </span>
            </div>
            <div className="text-[13px] font-semibold leading-snug" style={{ color: "#1d1d1f" }}>
              {card.title}
            </div>
            <div className="text-[11px] font-medium" style={{ color: "#6e6e73" }}>
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
      className="flex items-start gap-2.5 md:gap-3.5 py-2 md:py-3"
    >
      <div
        className="w-8 h-8 md:w-10 md:h-10 rounded-[10px] md:rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${color}10` }}
      >
        <Icon size={16} style={{ color }} />
      </div>
      <span className="text-sm md:text-base leading-relaxed pt-1 md:pt-2"
        style={{ color: "#1d1d1f" }}
      >
        {text}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service Section component (reusable)                               */
/* ------------------------------------------------------------------ */
function ServiceSection({
  bgClass,
  bgColor,
  badgeIcon: BadgeIcon,
  badgeLabel,
  badgeColor,
  badgeBg,
  headline,
  description,
  bullets,
  linkHref,
  linkText,
  visual,
  reversed,
}: {
  bgClass: string;
  bgColor?: string;
  badgeIcon: React.ComponentType<{ size: number; style: React.CSSProperties }>;
  badgeLabel: string;
  badgeColor: string;
  badgeBg: string;
  headline: React.ReactNode;
  description: string;
  bullets: { icon: React.ComponentType<{ size: number; style: React.CSSProperties }>; text: string }[];
  linkHref: string;
  linkText: string;
  visual: React.ReactNode;
  reversed?: boolean;
}) {
  return (
    <div className={`apple-section px-4 md:px-6 ${bgClass}`} style={bgColor ? { background: bgColor } : undefined}>
      <div className="max-w-[980px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center"
        >
          {/* Text column */}
          <div className={`order-2 ${reversed ? "md:order-2" : "md:order-1"}`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 border"
              style={{ background: badgeBg, borderColor: `${badgeColor}15` }}
            >
              <BadgeIcon size={16} style={{ color: badgeColor }} />
              <span className="text-[13px] font-semibold" style={{ color: badgeColor }}>
                {badgeLabel}
              </span>
            </motion.div>

            <h3 className="text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] mb-3 text-[#1d1d1f]">
              {headline}
            </h3>

            <p className="text-[17px] leading-relaxed mb-8 max-w-[420px] text-[#6e6e73]">
              {description}
            </p>

            {bullets.map((bullet, i) => (
              <BulletPoint
                key={i}
                icon={bullet.icon}
                text={bullet.text}
                color={badgeColor}
                delay={0.25 + i * 0.1}
              />
            ))}

            <motion.a
              href={linkHref}
              whileHover={{ x: 6 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="inline-flex items-center gap-2 text-[17px] font-semibold no-underline cursor-pointer mt-7 group"
              style={{ color: badgeColor }}
            >
              {linkText} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Visual column */}
          <div className={`order-1 ${reversed ? "md:order-1" : "md:order-2"}`}>
            {visual}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Services Component                                            */
/* ------------------------------------------------------------------ */
export default function Services() {
  const stats = [
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
  ];

  return (
    <section id="services">
      {/* ============================================================ */}
      {/*  Section Header                                               */}
      {/* ============================================================ */}
      <div className="apple-section bg-white px-4">
        <div className="max-w-[980px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-[13px] font-semibold text-[#06c] uppercase tracking-widest mb-3">
              OUR SERVICES
            </p>
            <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
              เราทำอะไรบ้าง
            </h2>
            <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
              ครบวงจรด้าน AI ตั้งแต่สอน สร้าง พัฒนา
              จนถึงเป็น AI Creator ให้ธุรกิจของคุณ
            </p>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Service 1: AI Workshop & Training — white bg                 */}
      {/* ============================================================ */}
      <ServiceSection
        bgClass="bg-white"
        badgeIcon={GraduationCap}
        badgeLabel="Service 01"
        badgeColor="#06c"
        badgeBg="rgba(0,102,204,0.06)"
        headline={<>AI Workshop<br />& Training</>}
        description="สอน AI ตั้งแต่พื้นฐานถึงขั้นสูง Workshop 1-3 วัน สำหรับทีมของคุณ เรียนรู้ AI อย่างลึกซึ้ง ปฏิบัติจริง ใช้ได้จริง"
        bullets={[
          { icon: BookOpen, text: "Prompt Engineering, RAG Pipeline, n8n Automation ครบทุกหลักสูตร" },
          { icon: Lightbulb, text: "เรียนจาก use case จริง ไม่ใช่แค่ทฤษฎี ปฏิบัติได้ทันที" },
          { icon: Target, text: "ออกแบบหลักสูตรเฉพาะองค์กร ตอบโจทย์ทุกอุตสาหกรรม" },
        ]}
        linkHref="#workshop"
        linkText="ดูหลักสูตร"
        visual={<WorkshopVisual />}
      />

      {/* Divider */}
      <div className="max-w-[200px] mx-auto h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* ============================================================ */}
      {/*  Service 2: Custom AI Development — #f5f5f7 bg                */}
      {/* ============================================================ */}
      <ServiceSection
        bgClass=""
        bgColor="#f5f5f7"
        badgeIcon={Code}
        badgeLabel="Service 02"
        badgeColor="#1d4ed8"
        badgeBg="rgba(29,78,216,0.06)"
        headline={<>Custom AI<br />Development</>}
        description="พัฒนาระบบ AI ขนาดใหญ่ ทั้ง On-Premise และ Cloud Enterprise-grade, compliance-ready พร้อมทีมซัพพอร์ตตลอด"
        bullets={[
          { icon: Layers, text: "ออกแบบสถาปัตยกรรม AI ตั้งแต่ต้น Client → API → AI → Database" },
          { icon: Database, text: "รองรับ RAG, Vector DB, Fine-tuning ครบทุก pipeline" },
          { icon: CheckCircle, text: "PDPA Compliant, Air-gapped ready, Enterprise security" },
        ]}
        linkHref="#portfolio"
        linkText="ดูผลงาน"
        visual={<ArchitectureVisual />}
        reversed
      />

      {/* Divider */}
      <div className="max-w-[200px] mx-auto h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* ============================================================ */}
      {/*  Service 3: AI Content Creation — white bg                    */}
      {/* ============================================================ */}
      <ServiceSection
        bgClass="bg-white"
        badgeIcon={Sparkles}
        badgeLabel="Service 03"
        badgeColor="#059669"
        badgeBg="rgba(5,150,105,0.06)"
        headline={<>AI Content<br />Creation</>}
        description="เราเป็น AI Creator / Influencer สร้าง content ทุกรูปแบบ ทั้ง Blog, Social Media, Video และ Podcast"
        bullets={[
          { icon: PenTool, text: "บทความ AI เชิงลึก เขียนโดยคนที่ใช้ AI จริงทุกวัน" },
          { icon: MessageSquare, text: "Content บน TikTok, YouTube ที่เข้าถึงคนไทยหลายหมื่นคน" },
          { icon: TrendingUp, text: "Podcast สัมภาษณ์ผู้เชี่ยวชาญ AI ทั้งไทยและต่างประเทศ" },
        ]}
        linkHref="#content"
        linkText="ดู content"
        visual={<ContentGridVisual />}
      />

      {/* ============================================================ */}
      {/*  Bottom Stats Bar                                             */}
      {/* ============================================================ */}
      <div className="apple-section section-gray px-4 md:px-6">
        <div className="max-w-[980px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center py-8 md:py-10 px-4 md:px-6 bg-white rounded-3xl border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
              >
                <stat.icon
                  size={28}
                  className="mx-auto mb-3.5"
                  style={{ color: stat.color }}
                />
                <div className="text-[28px] md:text-[40px] font-bold leading-none"
                  style={{ color: "#1d1d1f" }}
                >
                  {stat.value}
                </div>
                <div className="text-[13px] md:text-[15px] mt-2"
                  style={{ color: "#6e6e73" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
