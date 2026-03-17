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

/* --- Animation Variants --- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* --- Workshop Pricing Data --- */
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

/* --- Development Example Projects --- */
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

/* --- Development Process Steps --- */
const devProcess = [
  { step: "01", label: "ปรึกษาฟรี", desc: "เข้าใจปัญหาและเป้าหมาย", icon: Search },
  { step: "02", label: "ออกแบบ", desc: "Solution Architecture", icon: Palette },
  { step: "03", label: "เสนอราคา", desc: "Scope + Timeline + Cost", icon: FileText },
  { step: "04", label: "ตกลง", desc: "เซ็นสัญญาเริ่มงาน", icon: Shield },
  { step: "05", label: "พัฒนา", desc: "Agile Development", icon: Wrench },
  { step: "06", label: "ส่งมอบ", desc: "Deploy + Training + Support", icon: Rocket },
];

/* --- Content Pricing Data --- */
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

/* --- FAQ Data --- */
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
    <section className="bg-white pt-20 md:pt-[120px] pb-0">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6">
        {/* Section 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-[100px]"
        >
          <div className="text-[13px] md:text-[14px] font-semibold text-[#06c] tracking-[0.08em] uppercase mb-3">
            Pricing
          </div>
          <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-[#1d1d1f] leading-[1.1] mb-5">
            ราคาโปร่งใส
            <br />
            ไม่มีค่าใช้จ่ายซ่อน
          </h1>
          <p className="text-[16px] md:text-[19px] text-[#86868b] max-w-[600px] mx-auto leading-[1.7]">
            ทุกบริการมีราคาชัดเจน ไม่มี hidden fee
            ปรึกษาเบื้องต้นฟรีเสมอ ก่อนตัดสินใจ
          </p>
        </motion.div>

        {/* Section 2: Workshop & Training Pricing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20 md:mb-[120px]"
        >
          <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(0,102,204,0.06)] rounded-full mb-5">
              <GraduationCap size={18} className="text-[#06c]" />
              <span className="text-[14px] font-semibold text-[#06c]">
                Workshop & Training
              </span>
            </div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1d1d1f] leading-[1.15] mb-3.5">
              เรียนรู้ AI จากผู้เชี่ยวชาญ
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-[520px] mx-auto leading-relaxed">
              หลักสูตรที่ออกแบบมาให้ใช้งานได้จริง ไม่ใช่แค่ทฤษฎี
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {workshopPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className={`apple-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col ${
                    plan.recommended
                      ? "bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] border border-white/[0.08] ring-2 ring-[#06c] shadow-[0_12px_48px_rgba(0,102,204,0.2)]"
                      : "bg-white border border-black/[0.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-[#06c] rounded-full text-[11px] font-bold text-white tracking-[0.04em]">
                      <Star size={12} />
                      แนะนำ
                    </div>
                  )}

                  {plan.recommended && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(0,102,204,0.15),transparent_70%)] pointer-events-none" />
                  )}

                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5"
                    style={{
                      background: plan.recommended
                        ? "rgba(0,102,204,0.2)"
                        : "rgba(0,102,204,0.06)",
                    }}
                  >
                    <Icon
                      size={24}
                      className={plan.recommended ? "text-white" : "text-[#06c]"}
                    />
                  </div>

                  <h3 className={`text-[18px] md:text-[20px] font-bold mb-1.5 ${plan.recommended ? "text-white" : "text-[#1d1d1f]"}`}>
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className={`font-bold ${plan.recommended ? "text-white" : "text-[#1d1d1f]"} ${
                        plan.price === "ติดต่อราคา" ? "text-[22px] md:text-[24px]" : "text-[32px] md:text-[40px]"
                      }`}
                    >
                      {plan.price === "ติดต่อราคา" ? plan.price : `฿${plan.price}`}
                    </span>
                    {plan.unit && (
                      <span className={`text-[14px] ${plan.recommended ? "text-white/60" : "text-[#86868b]"}`}>
                        {plan.unit}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center gap-1.5 text-[13px] mb-6 ${plan.recommended ? "text-white/50" : "text-[#86868b]"}`}>
                    <Clock size={14} />
                    {plan.duration}
                  </div>

                  <div className="flex flex-col gap-2.5 flex-1 mb-7">
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        className={`flex items-start gap-2 text-[13px] leading-[1.4] ${
                          plan.recommended ? "text-white/80" : "text-[#1d1d1f]"
                        }`}
                      >
                        <CheckCircle
                          size={15}
                          className={`shrink-0 mt-0.5 ${plan.recommended ? "text-[rgba(0,102,204,0.8)]" : "text-[#06c]"}`}
                        />
                        {f}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center justify-center gap-1.5 px-5 py-3 rounded-[14px] text-[14px] font-semibold no-underline cursor-pointer ${
                      plan.recommended
                        ? "bg-white text-[#1d1d1f]"
                        : "bg-[#06c] text-white"
                    }`}
                  >
                    {plan.price === "ติดต่อราคา" ? "ปรึกษาฟรี" : "สมัครเลย"}
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section 3: Custom AI Development */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20 md:mb-[120px]"
        >
          <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(0,102,204,0.06)] rounded-full mb-5">
              <Code2 size={18} className="text-[#06c]" />
              <span className="text-[14px] font-semibold text-[#06c]">
                Custom AI Development
              </span>
            </div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1d1d1f] leading-[1.15] mb-3.5">
              ทุกโปรเจกต์ราคาต่างกัน
              <br />
              เพราะเราสร้างเฉพาะสำหรับคุณ
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
              ไม่มีราคาตายตัว เพราะทุกธุรกิจมีความต้องการที่แตกต่าง
              เราออกแบบ solution เฉพาะสำหรับแต่ละองค์กร
            </p>
          </motion.div>

          {/* Typical Range Banner */}
          <motion.div
            variants={fadeUp}
            className="apple-card bg-[#f5f5f7] rounded-3xl p-6 md:p-8 lg:p-10 text-center mb-10 md:mb-12"
          >
            <p className="text-[14px] font-semibold text-[#86868b] tracking-[0.04em] uppercase mb-3">
              Typical Project Range
            </p>
            <div className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1d1d1f] mb-2">
              ฿50,000 — ฿500,000+
            </div>
            <p className="text-[14px] md:text-[15px] text-[#86868b] leading-relaxed">
              ขึ้นกับ scope, ความซับซ้อน, และระยะเวลาโปรเจกต์
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={fadeUp} className="mb-10 md:mb-14">
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1d1d1f] text-center mb-8 md:mb-9">
              กระบวนการทำงาน
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {/* Connecting line behind steps (desktop) */}
              <div className="absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#06c]/10 via-[#06c]/20 to-[#06c]/10 hidden lg:block z-0" />
              {devProcess.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    variants={fadeUp}
                    className="text-center relative z-[1]"
                  >
                    <div className="w-[52px] h-[52px] rounded-2xl bg-[rgba(0,102,204,0.06)] flex items-center justify-center mx-auto mb-3 border-2 border-white">
                      <StepIcon size={22} className="text-[#06c]" />
                    </div>
                    <div className="text-[11px] font-bold text-[#06c] tracking-[0.06em] mb-1">
                      {step.step}
                    </div>
                    <div className="text-[13px] md:text-[14px] font-bold text-[#1d1d1f] mb-1">
                      {step.label}
                    </div>
                    <div className="text-[12px] text-[#86868b]">
                      {step.desc}
                    </div>
                    {i < devProcess.length - 1 && (
                      <div className="absolute top-[26px] -right-3 text-[#06c]/40 hidden lg:block z-[2]">
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
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1d1d1f] text-center mb-3">
              ตัวอย่างโปรเจกต์
            </h3>
            <p className="text-[14px] md:text-[15px] text-[#86868b] text-center mb-8 md:mb-9">
              ราคาตัวอย่างเพื่อประกอบการตัดสินใจ (ราคาจริงขึ้นกับรายละเอียด)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {exampleProjects.map((proj) => {
                const ProjIcon = proj.icon;
                return (
                  <motion.div
                    key={proj.title}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="apple-card bg-white rounded-3xl border border-black/[0.06] p-6 md:p-8"
                  >
                    <div className="w-11 h-11 rounded-[14px] bg-[rgba(0,102,204,0.06)] flex items-center justify-center mb-4">
                      <ProjIcon size={22} className="text-[#06c]" />
                    </div>
                    <h4 className="text-[16px] md:text-[18px] font-bold text-[#1d1d1f] mb-2.5">
                      {proj.title}
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#6e6e73] leading-relaxed mb-5 min-h-[66px]">
                      {proj.scope}
                    </p>
                    <div className="border-t border-black/[0.04] pt-4 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[13px] text-[#86868b]">ราคาโดยประมาณ</span>
                        <span className="text-[14px] md:text-[15px] font-bold text-[#1d1d1f]">{proj.range}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[13px] text-[#86868b]">ระยะเวลา</span>
                        <span className="text-[13px] md:text-[14px] font-semibold text-[#6e6e73]">{proj.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="text-center mt-10 md:mt-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#06c] text-white rounded-[14px] text-[15px] md:text-[16px] font-semibold no-underline cursor-pointer"
            >
              ปรึกษาฟรี ประเมินราคาโปรเจกต์
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Section 4: AI Content Creation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20 md:mb-[120px]"
        >
          <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(0,102,204,0.06)] rounded-full mb-5">
              <PenTool size={18} className="text-[#06c]" />
              <span className="text-[14px] font-semibold text-[#06c]">
                AI Content Creation
              </span>
            </div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1d1d1f] leading-[1.15] mb-3.5">
              สร้างคอนเทนต์ด้วย AI
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-[520px] mx-auto leading-relaxed">
              คอนเทนต์คุณภาพ ส่งมอบตรงเวลา ราคาคุ้มค่า
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {contentPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="apple-card bg-white rounded-2xl border border-black/[0.04] p-6 md:p-8 flex flex-col hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-[rgba(0,102,204,0.06)] flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#06c]" />
                  </div>

                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1d1d1f] mb-1.5">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[24px] md:text-[28px] font-bold text-[#1d1d1f]">
                      ฿{plan.price}
                    </span>
                  </div>
                  <div className="text-[13px] text-[#86868b] mb-6">
                    {plan.unit}
                  </div>

                  <div className="flex flex-col gap-2.5 flex-1 mb-7">
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-[13px] text-[#1d1d1f] leading-[1.4]"
                      >
                        <CheckCircle size={15} className="text-[#06c] shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-1.5 px-5 py-3 bg-[rgba(0,102,204,0.06)] text-[#06c] rounded-[14px] text-[14px] font-semibold no-underline cursor-pointer"
                  >
                    สอบถามรายละเอียด
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section 5: FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20 md:mb-[120px]"
        >
          <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(0,102,204,0.06)] rounded-full mb-5">
              <HelpCircle size={18} className="text-[#06c]" />
              <span className="text-[14px] font-semibold text-[#06c]">FAQ</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1d1d1f] leading-[1.15]">
              คำถามที่พบบ่อย
            </h2>
          </motion.div>

          <div className="max-w-[720px] mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border-b border-black/[0.06]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full py-6 bg-transparent border-none cursor-pointer text-left min-h-[48px]"
                >
                  <span className="text-[15px] md:text-[17px] font-semibold text-[#1d1d1f] pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-[#86868b] shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] md:text-[15px] text-[#6e6e73] leading-[1.7] pb-6">
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
    </section>
  );
}
