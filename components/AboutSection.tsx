"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Megaphone,
  ArrowRight,
  Heart,
  Shield,
  Puzzle,
  Server,
  Cloud,
  Cpu,
  ExternalLink,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  CheckCircle,
  Lightbulb,
  Users,
  Target,
  Globe,
  Zap,
} from "lucide-react";

/* --- Animation Variants --- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* --- Data --- */
const threeThings = [
  {
    icon: GraduationCap,
    title: "สอน (Teach)",
    description:
      "จัด Workshop & Training ให้ทีมและองค์กร ตั้งแต่ AI พื้นฐานจนถึง Automation ขั้นสูง เน้นฝึกปฏิบัติจริง ใช้งานได้ทันที",
    highlights: ["AI Fundamentals", "AI Automation Masterclass", "Custom In-house Training"],
  },
  {
    icon: Code2,
    title: "สร้าง (Build)",
    description:
      "พัฒนาระบบ AI แบบ Custom เฉพาะองค์กร ตั้งแต่ Chatbot, RAG Pipeline, Document Processing ไปจนถึง Full AI Platform",
    highlights: ["Custom AI Solutions", "System Integration", "Production Deployment"],
  },
  {
    icon: Megaphone,
    title: "สร้างสรรค์ (Create)",
    description:
      "สร้างคอนเทนต์ด้าน AI ทั้ง Blog, Social Media, Video Production และ Content Strategy ที่เข้าถึงกลุ่มเป้าหมาย",
    highlights: ["Blog & Articles", "Social Media Content", "Video Production"],
  },
];

const principles = [
  {
    icon: Puzzle,
    title: "ไม่มี Solution สำเร็จรูป",
    description:
      "ทุกธุรกิจมีความต้องการที่ต่างกัน เราไม่เอา template มาขาย แต่ออกแบบ solution ที่เหมาะกับ context ของคุณ",
  },
  {
    icon: Shield,
    title: "Open-Source First",
    description:
      "เราเชื่อในพลังของ Open Source ใช้เทคโนโลยีเปิด เช่น Ollama, n8n, Flowise ลดค่าใช้จ่าย ไม่ผูกมัดกับ vendor",
  },
  {
    icon: Target,
    title: "พอดีกับธุรกิจ",
    description:
      "ไม่ over-engineer ไม่ใส่ AI ทุกที่ แต่เลือกจุดที่ AI สร้าง impact สูงสุดให้กับธุรกิจของคุณ",
  },
];

const ecosystemBrands = [
  {
    name: "LocalAI Thailand",
    tagline: "AI ส่วนตัว บนเครื่องของคุณ",
    description: "โซลูชัน AI ที่รันภายในองค์กร ข้อมูลไม่ออกนอกบริษัท",
    icon: Server,
    url: "https://localaithai.com",
    color: "#06c",
  },
  {
    name: "AI Studio Thailand",
    tagline: "สอน สร้าง ให้คำปรึกษา",
    description: "ศูนย์กลาง AI ครบวงจร ทั้งสอน พัฒนา และสร้างคอนเทนต์",
    icon: Cpu,
    url: null,
    color: "#06c",
  },
  {
    name: "CloudAI Thailand",
    tagline: "AI Automation บน Cloud",
    description: "ระบบ AI บนคลาวด์ เริ่มต้นได้เร็ว ขยายได้ไม่จำกัด",
    icon: Cloud,
    url: "https://cloudaithai.com",
    color: "#1d4ed8",
  },
];

const contactDetails = [
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "082-704-7606",
    href: "tel:0827047606",
  },
  {
    icon: Mail,
    label: "อีเมล",
    value: "chavin@pace-design.co.th",
    href: "mailto:chavin@pace-design.co.th",
  },
  {
    icon: MessageSquare,
    label: "LINE Official",
    value: "@542mgysj",
    href: "https://line.me/R/ti/p/@542mgysj",
  },
  {
    icon: MapPin,
    label: "สถานที่",
    value: "Bangkok, Thailand",
    href: null,
  },
];

/* ================================================================== */
/*  AboutSection Component                                             */
/* ================================================================== */
export default function AboutSection() {
  return (
    <section className="bg-white pt-20 md:pt-[120px] pb-0">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6">
        {/* Hero: เราคือใคร */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-[100px]"
        >
          <div className="text-[13px] md:text-[14px] font-semibold text-[#06c] tracking-[0.08em] uppercase mb-3">
            About Us
          </div>
          <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-[#1d1d1f] leading-[1.1] mb-6">
            เราคือใคร
          </h1>
          <p className="text-[16px] md:text-[19px] text-[#86868b] max-w-[680px] mx-auto leading-[1.7]">
            AI Studio Thailand คือทีมพัฒนาเบื้องหลัง{" "}
            <span className="text-[#1d1d1f] font-semibold">
              LocalAI Thailand
            </span>{" "}
            และ{" "}
            <span className="text-[#1d1d1f] font-semibold">
              CloudAI Thailand
            </span>{" "}
            เราเชื่อว่า AI ไม่ใช่แค่เทคโนโลยี แต่เป็นเครื่องมือที่ช่วยให้ธุรกิจไทย
            ทำงานฉลาดขึ้น เร็วขึ้น และเติบโตได้อย่างยั่งยืน
          </p>
        </motion.div>

        {/* Values / Philosophy Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="apple-card bg-[#f5f5f7] rounded-3xl p-6 md:p-8 lg:p-12 flex items-center justify-center gap-5 md:gap-10 lg:gap-14 flex-wrap mb-12 md:mb-20 lg:mb-[100px]"
        >
          {[
            { icon: Heart, label: "Passion for AI", sublabel: "หลงใหลในเทคโนโลยี", color: "#ff375f" },
            { icon: Users, label: "People First", sublabel: "เข้าใจคนก่อนเข้าใจเทค", color: "#06c" },
            { icon: Lightbulb, label: "Practical AI", sublabel: "AI ที่ใช้งานได้จริง", color: "#ff9500" },
            { icon: Globe, label: "Thai Market Focus", sublabel: "เข้าใจตลาดไทย", color: "#30d158" },
          ].map((v) => {
            const VIcon = v.icon;
            return (
              <div key={v.label} className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]" style={{ background: `${v.color}12` }}>
                  <VIcon size={22} style={{ color: v.color }} />
                </div>
                <div>
                  <div className="text-[14px] md:text-[15px] font-bold text-[#1d1d1f]">
                    {v.label}
                  </div>
                  <div className="text-[12px] md:text-[13px] text-[#86868b]">
                    {v.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* 3 สิ่งที่เราทำ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16 md:mb-[100px]"
        >
          <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1d1d1f] leading-[1.15] mb-3.5">
              3 สิ่งที่เราทำ
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-[520px] mx-auto leading-relaxed">
              สอน สร้าง และสร้างสรรค์ AI ให้กับธุรกิจไทย
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {threeThings.map((item) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="apple-card bg-white rounded-3xl border border-black/[0.06] p-6 md:p-8"
                >
                  <div className="w-14 h-14 rounded-[18px] bg-[rgba(0,102,204,0.06)] flex items-center justify-center mb-6">
                    <ItemIcon size={28} className="text-[#06c]" />
                  </div>

                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#1d1d1f] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[14px] md:text-[15px] text-[#6e6e73] leading-[1.7] mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    {item.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2 text-[14px] text-[#1d1d1f] font-medium"
                      >
                        <CheckCircle size={15} className="text-[#06c] shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* หลักการ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16 md:mb-[100px]"
        >
          <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1d1d1f] leading-[1.15] mb-3.5">
              หลักการของเรา
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-[520px] mx-auto leading-relaxed">
              สิ่งที่เราเชื่อและยึดมั่นในทุกโปรเจกต์
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {principles.map((p) => {
              const PIcon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="apple-card bg-[#f5f5f7] rounded-3xl p-6 md:p-8 lg:p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-[18px] bg-white flex items-center justify-center mx-auto mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <PIcon size={28} className="text-[#06c]" />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1d1d1f] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6e6e73] leading-[1.7]">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Ecosystem */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16 md:mb-[100px]"
        >
          <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1d1d1f] leading-[1.15] mb-3.5">
              Ecosystem
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
              AI Studio Thailand เป็นศูนย์กลางที่เชื่อมโยง LocalAI และ CloudAI
              เข้าด้วยกัน เพื่อตอบโจทย์ทุกรูปแบบของ AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {ecosystemBrands.map((brand, i) => {
              const BrandIcon = brand.icon;
              const isCenter = i === 1;
              return (
                <motion.div
                  key={brand.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className={`apple-card rounded-3xl p-6 md:p-8 lg:p-10 text-center relative overflow-hidden ${
                    isCenter
                      ? "bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] border border-white/[0.08] shadow-2xl scale-[1.02] md:scale-105 z-10"
                      : "bg-white border border-black/[0.06] hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
                  }`}
                >
                  {isCenter && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(0,102,204,0.15),transparent_70%)] pointer-events-none" />
                  )}

                  <div
                    className="w-14 h-14 rounded-[18px] flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: isCenter
                        ? "linear-gradient(135deg, #06c, #3b82f6)"
                        : `${brand.color}10`,
                    }}
                  >
                    <BrandIcon
                      size={28}
                      style={{ color: isCenter ? "white" : brand.color }}
                    />
                  </div>

                  <h3 className={`text-[18px] md:text-[20px] font-bold mb-1.5 ${isCenter ? "text-white" : "text-[#1d1d1f]"}`}>
                    {brand.name}
                  </h3>
                  <p className={`text-[14px] font-semibold mb-3 ${isCenter ? "text-white/70" : "text-[#06c]"}`}>
                    {brand.tagline}
                  </p>
                  <p className={`text-[14px] leading-relaxed mb-6 ${isCenter ? "text-white/50" : "text-[#6e6e73]"}`}>
                    {brand.description}
                  </p>

                  {brand.url ? (
                    <motion.a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-semibold no-underline text-white"
                      style={{ background: brand.color }}
                    >
                      เยี่ยมชม <ExternalLink size={14} />
                    </motion.a>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white/10 text-white/60 rounded-xl text-[13px] font-semibold">
                      คุณอยู่ที่นี่
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16 md:mb-[100px]"
        >
          <motion.div
            variants={fadeUp}
            className="apple-card bg-[#f5f5f7] rounded-[28px] p-6 md:p-10 lg:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(0,102,204,0.04),transparent_70%)] pointer-events-none" />

            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold text-[#1d1d1f] mb-3">
              ติดต่อเรา
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-[500px] mx-auto mb-8 md:mb-10 leading-relaxed">
              พร้อมรับฟังและช่วยเหลือ ปรึกษาเบื้องต้นฟรี
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[800px] mx-auto">
              {contactDetails.map((c) => {
                const CIcon = c.icon;
                const Wrapper = c.href ? "a" : "div";
                const linkProps = c.href
                  ? {
                      href: c.href,
                      target: c.href.startsWith("http") ? "_blank" : undefined,
                      rel: c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined,
                    }
                  : {};
                return (
                  <Wrapper
                    key={c.label}
                    {...linkProps}
                    className={`flex flex-col items-center gap-2.5 p-4 md:p-6 bg-white rounded-xl no-underline shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:bg-black/[0.02] transition-all ${
                      c.href ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-[14px] bg-[rgba(0,102,204,0.06)] flex items-center justify-center">
                      <CIcon size={20} className="text-[#06c]" />
                    </div>
                    <div className="text-[12px] font-semibold text-[#86868b] uppercase tracking-[0.04em]">
                      {c.label}
                    </div>
                    <div className="text-[14px] font-semibold text-[#1d1d1f]">
                      {c.value}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 md:mt-10 px-8 py-3.5 bg-[#06c] text-white rounded-[14px] text-[15px] md:text-[16px] font-semibold no-underline cursor-pointer"
            >
              พูดคุยกับเรา
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
