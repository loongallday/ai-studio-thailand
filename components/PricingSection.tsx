"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Star,
  ChevronDown,
  Users,
  Clock,
  GraduationCap,
  Code2,
  PenTool,
  Zap,
  Shield,
  MessageSquare,
  Search,
  Palette,
  Wrench,
  Rocket,
  FileText,
  BarChart3,
  Video,
  Calendar,
  TrendingUp,
  HelpCircle,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Workshop Pricing Data ─── */
const workshopPlans = [
  {
    name: "AI Fundamentals",
    price: "9,900",
    unit: "บาท/คน",
    duration: "1 วัน (6 ชั่วโมง)",
    recommended: false,
    features: [
      "รู้จัก Generative AI & LLMs",
      "Prompt Engineering เชิงลึก",
      "ใช้ ChatGPT / Claude ในงานจริง",
      "AI Tools สำหรับ Productivity",
      "Workshop ฝึกปฏิบัติจริง",
      "เอกสารประกอบการเรียน",
      "Certificate of Completion",
    ],
    icon: GraduationCap,
  },
  {
    name: "AI Automation Masterclass",
    price: "19,900",
    unit: "บาท/คน",
    duration: "2 วัน (12 ชั่วโมง)",
    recommended: true,
    features: [
      "ทุกอย่างใน AI Fundamentals",
      "n8n Workflow Automation",
      "Flowise AI Chatbot Builder",
      "RAG Pipeline & Vector DB",
      "Production Deployment",
      "อาหารกลางวัน + Coffee Break",
      "Follow-up Support 30 วัน",
      "Certificate of Completion",
    ],
    icon: Zap,
  },
  {
    name: "AI for Business Leaders",
    price: "14,900",
    unit: "บาท/คน",
    duration: "1 วัน (6 ชั่วโมง)",
    recommended: false,
    features: [
      "AI Strategy สำหรับผู้บริหาร",
      "ROI Analysis & Business Cases",
      "AI Roadmap Planning",
      "Risk Management & PDPA",
      "Case Studies จากธุรกิจจริง",
      "1-on-1 Consultation 30 นาที",
      "Certificate of Completion",
    ],
    icon: TrendingUp,
  },
  {
    name: "Custom In-house Training",
    price: "ติดต่อราคา",
    unit: "",
    duration: "ปรับตามความต้องการ",
    recommended: false,
    features: [
      "ออกแบบหลักสูตรเฉพาะองค์กร",
      "ปรับเนื้อหาตามอุตสาหกรรม",
      "จำนวนผู้เข้าอบรมไม่จำกัด",
      "จัดที่บริษัทหรือสถานที่ของเรา",
      "Pre & Post Assessment",
      "Follow-up Support 60 วัน",
      "Customized Certificate",
    ],
    icon: Users,
  },
];

/* ─── Development Example Projects ─── */
const exampleProjects = [
  {
    title: "AI Customer Service Bot",
    scope: "Chatbot ตอบคำถามลูกค้าอัตโนมัติ เชื่อมต่อ LINE/Facebook พร้อม RAG จากฐานข้อมูลสินค้า",
    range: "฿80,000 - ฿150,000",
    duration: "4-6 สัปดาห์",
    icon: MessageSquare,
  },
  {
    title: "Document Processing Pipeline",
    scope: "ระบบอ่านและจัดหมวดหมู่เอกสารอัตโนมัติ OCR + AI Classification + Data Extraction",
    range: "฿120,000 - ฿250,000",
    duration: "6-10 สัปดาห์",
    icon: FileText,
  },
  {
    title: "AI Analytics Dashboard",
    scope: "Dashboard วิเคราะห์ข้อมูลด้วย AI พร้อม Natural Language Query และ Predictive Analytics",
    range: "฿200,000 - ฿400,000",
    duration: "8-14 สัปดาห์",
    icon: BarChart3,
  },
];

/* ─── Development Process Steps ─── */
const devProcess = [
  { step: "01", label: "ปรึกษาฟรี", desc: "เข้าใจปัญหาและเป้าหมาย", icon: Search },
  { step: "02", label: "ออกแบบ", desc: "Solution Architecture", icon: Palette },
  { step: "03", label: "เสนอราคา", desc: "Scope + Timeline + Cost", icon: FileText },
  { step: "04", label: "ตกลง", desc: "เซ็นสัญญาเริ่มงาน", icon: Shield },
  { step: "05", label: "พัฒนา", desc: "Agile Development", icon: Wrench },
  { step: "06", label: "ส่งมอบ", desc: "Deploy + Training + Support", icon: Rocket },
];

/* ─── Content Pricing Data ─── */
const contentPlans = [
  {
    name: "Blog Post",
    price: "3,000 - 5,000",
    unit: "บาท/บทความ",
    features: [
      "บทความ 1,500-3,000 คำ",
      "SEO Optimized",
      "รูปภาพประกอบ 3-5 รูป",
      "แก้ไขได้ 2 รอบ",
    ],
    icon: FileText,
  },
  {
    name: "Social Media Package",
    price: "15,000",
    unit: "บาท/เดือน (12 posts)",
    features: [
      "Content Calendar รายเดือน",
      "12 posts (3 ต่อสัปดาห์)",
      "Graphics + Copywriting",
      "Hashtag Strategy",
      "Monthly Performance Report",
    ],
    icon: Calendar,
  },
  {
    name: "Video Production",
    price: "10,000 - 30,000",
    unit: "บาท/ชิ้น",
    features: [
      "Script Writing",
      "Professional Editing",
      "Motion Graphics & Subtitles",
      "ความยาว 3-10 นาที",
      "Format สำหรับ YouTube/TikTok",
    ],
    icon: Video,
  },
  {
    name: "Full Content Strategy",
    price: "30,000 - 50,000",
    unit: "บาท/เดือน",
    features: [
      "Content Strategy & Planning",
      "Blog + Social + Video ครบ",
      "SEO & Analytics Tracking",
      "Dedicated Content Manager",
      "Monthly Strategy Review",
      "Competitor Analysis",
    ],
    icon: TrendingUp,
  },
];

/* ─── FAQ Data ─── */
const faqs = [
  {
    q: "สามารถแบ่งจ่ายได้ไหม?",
    a: "ได้ครับ สำหรับโปรเจกต์ Development ที่มูลค่ามากกว่า ฿100,000 สามารถแบ่งจ่ายเป็น 2-3 งวดตามเหตุการณ์สำคัญของโปรเจกต์ (Milestone-based payment) สำหรับ Workshop ชำระเต็มจำนวนก่อนวันอบรม",
  },
  {
    q: "มีส่วนลดสำหรับกลุ่มไหม?",
    a: "มีครับ สำหรับ Workshop ถ้าสมัครตั้งแต่ 5 คนขึ้นไปจากองค์กรเดียวกัน รับส่วนลด 10% หรือถ้าจัดแบบ In-house Training จะคุ้มค่ากว่ามากเพราะราคาเหมาจ่ายไม่จำกัดจำนวนคน",
  },
  {
    q: "ราคา Development รวมค่า Hosting และ API ไหม?",
    a: "ราคาที่เสนอเป็นค่าพัฒนาเท่านั้น ค่า Hosting, Cloud Services และ API (เช่น OpenAI, Claude) เป็นค่าใช้จ่ายรายเดือนที่ลูกค้ารับผิดชอบเอง แต่เราจะช่วยประเมินค่าใช้จ่ายรายเดือนให้ตั้งแต่ขั้นตอนเสนอราคา",
  },
  {
    q: "ถ้าไม่แน่ใจว่าต้องการบริการไหน ทำอย่างไร?",
    a: "ปรึกษาเราได้เลยครับ ฟรีไม่มีค่าใช้จ่าย เราจะช่วยวิเคราะห์ความต้องการและแนะนำบริการที่เหมาะสมที่สุด อาจเป็น Workshop ก่อนแล้วค่อยต่อด้วย Development หรืออาจเริ่มจาก Content Strategy ก่อนก็ได้",
  },
  {
    q: "มี Guarantee หรือ Refund Policy ไหม?",
    a: "สำหรับ Workshop ถ้าไม่พอใจสามารถขอคืนเงิน 100% ภายใน 7 วันหลังอบรม (ยังไม่เคยมีใครขอคืนเลย) สำหรับ Development เรามี Satisfaction Guarantee ที่ทุก Milestone ต้องผ่านการ Approve ก่อนไปขั้นถัดไป",
  },
];

/* ================================================================== */
/*  PricingSection Component                                           */
/* ================================================================== */
export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#fff",
        paddingTop: 120,
        paddingBottom: 0,
      }}
    >
      {/* ============================================================ */}
      {/*  Section 1: Hero Header                                       */}
      {/* ============================================================ */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 100 }}
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
            Pricing
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            ราคาโปร่งใส
            <br />
            ไม่มีค่าใช้จ่ายซ่อน
          </h1>
          <p
            style={{
              fontSize: 19,
              color: "#86868b",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            ทุกบริการมีราคาชัดเจน ไม่มี hidden fee
            ปรึกษาเบื้องต้นฟรีเสมอ ก่อนตัดสินใจ
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/*  Section 2: Workshop & Training Pricing                      */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 120 }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                background: "rgba(0,102,204,0.06)",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              <GraduationCap size={18} style={{ color: "#06c" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#06c" }}>
                Workshop & Training
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              เรียนรู้ AI จากผู้เชี่ยวชาญ
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#86868b",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              หลักสูตรที่ออกแบบมาให้ใช้งานได้จริง ไม่ใช่แค่ทฤษฎี
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              alignItems: "stretch",
            }}
            className="pricing-grid-4"
          >
            {workshopPlans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="apple-card"
                  style={{
                    background: plan.recommended
                      ? "linear-gradient(160deg, #1d1d1f, #2d2d2f)"
                      : "white",
                    borderRadius: 24,
                    border: plan.recommended
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.06)",
                    padding: "36px 28px 32px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {plan.recommended && (
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "5px 12px",
                        background: "#06c",
                        borderRadius: 100,
                        fontSize: 11,
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "0.04em",
                      }}
                    >
                      <Star size={12} />
                      แนะนำ
                    </div>
                  )}

                  {/* Glow for recommended */}
                  {plan.recommended && (
                    <div
                      style={{
                        position: "absolute",
                        top: -40,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 180,
                        height: 180,
                        background:
                          "radial-gradient(circle, rgba(0,102,204,0.15), transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: plan.recommended
                        ? "rgba(0,102,204,0.2)"
                        : "rgba(0,102,204,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon
                      size={24}
                      style={{ color: plan.recommended ? "white" : "#06c" }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: plan.recommended ? "white" : "#1d1d1f",
                      marginBottom: 6,
                    }}
                  >
                    {plan.name}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 4,
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: plan.price === "ติดต่อราคา" ? 24 : 32,
                        fontWeight: 700,
                        color: plan.recommended ? "white" : "#1d1d1f",
                      }}
                    >
                      {plan.price === "ติดต่อราคา" ? plan.price : `฿${plan.price}`}
                    </span>
                    {plan.unit && (
                      <span
                        style={{
                          fontSize: 14,
                          color: plan.recommended
                            ? "rgba(255,255,255,0.6)"
                            : "#86868b",
                        }}
                      >
                        {plan.unit}
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: plan.recommended
                        ? "rgba(255,255,255,0.5)"
                        : "#86868b",
                      marginBottom: 24,
                    }}
                  >
                    <Clock size={14} />
                    {plan.duration}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      flex: 1,
                      marginBottom: 28,
                    }}
                  >
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: 13,
                          color: plan.recommended
                            ? "rgba(255,255,255,0.8)"
                            : "#1d1d1f",
                          lineHeight: 1.4,
                        }}
                      >
                        <CheckCircle
                          size={15}
                          style={{
                            color: plan.recommended
                              ? "rgba(0,102,204,0.8)"
                              : "#06c",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        />
                        {f}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "12px 20px",
                      background: plan.recommended ? "white" : "#06c",
                      color: plan.recommended ? "#1d1d1f" : "white",
                      borderRadius: 14,
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {plan.price === "ติดต่อราคา" ? "ปรึกษาฟรี" : "สมัครเลย"}
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/*  Section 3: Custom AI Development                            */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 120 }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                background: "rgba(0,102,204,0.06)",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              <Code2 size={18} style={{ color: "#06c" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#06c" }}>
                Custom AI Development
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              ทุกโปรเจกต์ราคาต่างกัน
              <br />
              เพราะเราสร้างเฉพาะสำหรับคุณ
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#86868b",
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              ไม่มีราคาตายตัว เพราะทุกธุรกิจมีความต้องการที่แตกต่าง
              เราออกแบบ solution เฉพาะสำหรับแต่ละองค์กร
            </p>
          </motion.div>

          {/* Typical Range Banner */}
          <motion.div
            variants={fadeUp}
            className="apple-card"
            style={{
              background: "#f5f5f7",
              borderRadius: 24,
              padding: "clamp(24px, 4vw, 40px) clamp(20px, 4vw, 48px)",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#86868b",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Typical Project Range
            </p>
            <div
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              ฿50,000 — ฿500,000+
            </div>
            <p style={{ fontSize: 15, color: "#86868b", lineHeight: 1.6 }}>
              ขึ้นกับ scope, ความซับซ้อน, และระยะเวลาโปรเจกต์
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={fadeUp} style={{ marginBottom: 56 }}>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#1d1d1f",
                textAlign: "center",
                marginBottom: 36,
              }}
            >
              กระบวนการทำงาน
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: 16,
              }}
              className="process-grid"
            >
              {devProcess.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    variants={fadeUp}
                    style={{
                      textAlign: "center",
                      position: "relative",
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
                        margin: "0 auto 12px",
                      }}
                    >
                      <StepIcon size={22} style={{ color: "#06c" }} />
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#06c",
                        letterSpacing: "0.06em",
                        marginBottom: 4,
                      }}
                    >
                      {step.step}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#1d1d1f",
                        marginBottom: 4,
                      }}
                    >
                      {step.label}
                    </div>
                    <div style={{ fontSize: 12, color: "#86868b" }}>
                      {step.desc}
                    </div>
                    {/* Arrow connector */}
                    {i < devProcess.length - 1 && (
                      <div
                        className="process-arrow"
                        style={{
                          position: "absolute",
                          top: 26,
                          right: -12,
                          color: "#d1d5db",
                        }}
                      >
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Example Projects */}
          <motion.div variants={fadeUp}>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#1d1d1f",
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              ตัวอย่างโปรเจกต์
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "#86868b",
                textAlign: "center",
                marginBottom: 36,
              }}
            >
              ราคาตัวอย่างเพื่อประกอบการตัดสินใจ (ราคาจริงขึ้นกับรายละเอียด)
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
              }}
              className="pricing-grid-3"
            >
              {exampleProjects.map((proj) => {
                const ProjIcon = proj.icon;
                return (
                  <motion.div
                    key={proj.title}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="apple-card"
                    style={{
                      background: "white",
                      borderRadius: 24,
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "32px 28px",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 14,
                        background: "rgba(0,102,204,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 18,
                      }}
                    >
                      <ProjIcon size={22} style={{ color: "#06c" }} />
                    </div>
                    <h4
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#1d1d1f",
                        marginBottom: 10,
                      }}
                    >
                      {proj.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#6e6e73",
                        lineHeight: 1.6,
                        marginBottom: 20,
                        minHeight: 66,
                      }}
                    >
                      {proj.scope}
                    </p>
                    <div
                      style={{
                        borderTop: "1px solid rgba(0,0,0,0.04)",
                        paddingTop: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: 13, color: "#86868b" }}>
                          ราคาโดยประมาณ
                        </span>
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: "#1d1d1f",
                          }}
                        >
                          {proj.range}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: 13, color: "#86868b" }}>
                          ระยะเวลา
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#6e6e73",
                          }}
                        >
                          {proj.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            style={{ textAlign: "center", marginTop: 48 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                background: "#06c",
                color: "white",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              ปรึกษาฟรี ประเมินราคาโปรเจกต์
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/*  Section 4: AI Content Creation                              */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 120 }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                background: "rgba(0,102,204,0.06)",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              <PenTool size={18} style={{ color: "#06c" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#06c" }}>
                AI Content Creation
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              สร้างคอนเทนต์ด้วย AI
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#86868b",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              คอนเทนต์คุณภาพ ส่งมอบตรงเวลา ราคาคุ้มค่า
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              alignItems: "stretch",
            }}
            className="pricing-grid-4"
          >
            {contentPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="apple-card"
                  style={{
                    background: "white",
                    borderRadius: 24,
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "36px 28px 32px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "rgba(0,102,204,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={24} style={{ color: "#06c" }} />
                  </div>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 6,
                    }}
                  >
                    {plan.name}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 4,
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: "#1d1d1f",
                      }}
                    >
                      ฿{plan.price}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#86868b",
                      marginBottom: 24,
                    }}
                  >
                    {plan.unit}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      flex: 1,
                      marginBottom: 28,
                    }}
                  >
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: 13,
                          color: "#1d1d1f",
                          lineHeight: 1.4,
                        }}
                      >
                        <CheckCircle
                          size={15}
                          style={{
                            color: "#06c",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        />
                        {f}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "12px 20px",
                      background: "rgba(0,102,204,0.06)",
                      color: "#06c",
                      borderRadius: 14,
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    สอบถามรายละเอียด
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/*  Section 5: FAQ                                              */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 120 }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                background: "rgba(0,102,204,0.06)",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              <HelpCircle size={18} style={{ color: "#06c" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#06c" }}>
                FAQ
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
              }}
            >
              คำถามที่พบบ่อย
            </h2>
          </motion.div>

          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "24px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#1d1d1f",
                      paddingRight: 16,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown
                      size={20}
                      style={{ color: "#86868b", flexShrink: 0 }}
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontSize: 15,
                          color: "#6e6e73",
                          lineHeight: 1.7,
                          paddingBottom: 24,
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .pricing-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .process-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .process-arrow {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .pricing-grid-4 {
            grid-template-columns: 1fr !important;
          }
          .pricing-grid-3 {
            grid-template-columns: 1fr !important;
          }
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
