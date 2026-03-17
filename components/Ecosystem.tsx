"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  Cloud,
  ExternalLink,
  Sparkles,
  GraduationCap,
  Code,
  Megaphone,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Lock,
  BarChart3,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Brand Card component                                               */
/* ------------------------------------------------------------------ */
function BrandCard({
  name,
  tagline,
  description,
  icon: Icon,
  features,
  url,
  isCenter,
  color,
  delay,
}: {
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ size: number; className?: string; style?: React.CSSProperties }>;
  features: { icon: React.ComponentType<{ size: number; className?: string; style?: React.CSSProperties }>; text: string }[];
  url: string | null;
  isCenter: boolean;
  color: string;
  delay: number;
}) {
  const isDark = isCenter;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`apple-card flex-1 min-w-0 rounded-[28px] p-6 md:p-8 lg:p-10 text-center relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] border border-white/[0.08] shadow-2xl scale-[1.02] md:scale-105 z-10 relative order-first md:order-none ring-1 ring-white/10"
          : "bg-white border border-black/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.06)] z-[1] hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
      }`}
    >
      {/* Glow effect for center card */}
      {isDark && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(0,102,204,0.15),transparent_70%)] pointer-events-none" />
      )}

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-[20px] flex items-center justify-center mx-auto mb-5 relative"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #06c, #3b82f6)"
            : `${color}10`,
        }}
      >
        <Icon size={30} className={isDark ? "text-white" : ""} style={{ color: isDark ? undefined : color }} />
      </div>

      {/* Name */}
      <h3 className={`text-[20px] md:text-[22px] font-bold mb-1.5 ${isDark ? "text-white" : "text-[#1d1d1f]"}`}>
        {name}
      </h3>

      {/* Tagline */}
      <p
        className={`text-[14px] md:text-[15px] font-semibold mb-3.5 ${isDark ? "text-white/70" : ""}`}
        style={{ color: isDark ? undefined : color }}
      >
        {tagline}
      </p>

      {/* Description */}
      <p className={`text-[13px] md:text-[14px] leading-relaxed mb-6 min-h-[66px] ${isDark ? "text-white/50" : "text-[#6e6e73]"}`}>
        {description}
      </p>

      {/* Features */}
      <div className="flex flex-col gap-2.5 mb-7 text-left">
        {features.map((f) => {
          const FeatureIcon = f.icon;
          return (
            <div
              key={f.text}
              className={`flex items-center gap-2.5 text-[13px] font-medium ${isDark ? "text-white/75" : "text-[#1d1d1f]"}`}
            >
              <FeatureIcon
                size={15}
                className="shrink-0"
                style={{ color: isDark ? "rgba(255,255,255,0.5)" : color }}
              />
              {f.text}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      {url ? (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-semibold no-underline hover:opacity-90 transition-all"
          style={{
            background: isDark ? "white" : color,
            color: isDark ? "#1d1d1f" : "white",
          }}
        >
          เยี่ยมชมเว็บไซต์ <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      ) : (
        <div
          className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-semibold ${
            isDark ? "bg-white/10 text-white/60" : "bg-black/[0.04] text-[#6e6e73]"
          }`}
        >
          คุณอยู่ที่นี่
        </div>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Ecosystem Component                                           */
/* ------------------------------------------------------------------ */
export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="apple-section bg-white px-4 overflow-hidden"
    >
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#06c] uppercase tracking-widest mb-3">
            OUR ECOSYSTEM
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            เครือข่าย AI ครบวงจร
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            3 แบรนด์ 1 เป้าหมาย ระบบนิเวศ AI ที่ตอบโจทย์ทุกความต้องการ
            ไม่ว่าจะ On-Premise หรือ Cloud
          </p>
        </motion.div>

        {/* Connection Lines (SVG) + Brand Cards */}
        <div className="relative mt-8 md:mt-12">
          {/* SVG connection lines behind cards */}
          <svg
            className="absolute -top-[50px] left-0 right-0 w-full h-10 z-0 hidden md:block pointer-events-none"
          >
            <style>{`@keyframes dashFlow { to { stroke-dashoffset: -24; } }`}</style>
            <line
              x1="25%"
              y1="20"
              x2="50%"
              y2="20"
              stroke="rgba(0,102,204,0.2)"
              strokeWidth="2"
              strokeDasharray="8,4"
              style={{ animation: "dashFlow 2s linear infinite" }}
            />
            <line
              x1="50%"
              y1="20"
              x2="75%"
              y2="20"
              stroke="rgba(0,102,204,0.2)"
              strokeWidth="2"
              strokeDasharray="8,4"
              style={{ animation: "dashFlow 2s linear infinite" }}
            />
            <circle cx="25%" cy="20" r="4" fill="#06c" opacity="0.3" />
            <circle cx="50%" cy="20" r="6" fill="#06c" opacity="0.4" />
            <circle cx="75%" cy="20" r="4" fill="#1d4ed8" opacity="0.3" />
          </svg>

          {/* Brand Cards Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch relative z-[1]">
            {/* Left: LocalAI Thailand */}
            <BrandCard
              name="LocalAI Thailand"
              tagline="AI ส่วนตัว บนเครื่องของคุณ"
              description="โซลูชัน AI ที่รันบนเซิร์ฟเวอร์ขององค์กร ข้อมูลไม่ออกนอกบริษัท เหมาะกับธุรกิจที่ต้องการความปลอดภัยสูง"
              icon={Server}
              color="#06c"
              url="https://localaithai.com"
              isCenter={false}
              delay={0.1}
              features={[
                { icon: Lock, text: "ข้อมูลอยู่ภายในองค์กร 100%" },
                { icon: Zap, text: "ไม่มีค่า API รายเดือน" },
                { icon: Shield, text: "PDPA & Compliance Ready" },
              ]}
            />

            {/* Center: AI Studio Thailand (elevated, dark) */}
            <BrandCard
              name="AI Studio Thailand"
              tagline="สอน สร้าง ให้คำปรึกษา"
              description="ศูนย์กลาง AI ครบวงจร ตั้งแต่สอน สร้าง พัฒนา ไปจนถึงเป็น AI Creator ให้ธุรกิจของคุณ"
              icon={Cpu}
              color="#06c"
              url={null}
              isCenter={true}
              delay={0.2}
              features={[
                { icon: GraduationCap, text: "AI Workshop & Training" },
                { icon: Code, text: "Custom AI Development" },
                { icon: Megaphone, text: "AI Content Creation" },
              ]}
            />

            {/* Right: CloudAI Thailand */}
            <BrandCard
              name="CloudAI Thailand"
              tagline="AI Automation บน Cloud"
              description="ระบบ AI บนคลาวด์ที่ยืดหยุ่น เริ่มต้นได้เร็ว ขยายได้ไม่จำกัด เหมาะกับ startup และ SME"
              icon={Cloud}
              color="#1d4ed8"
              url="https://cloudaithai.com"
              isCenter={false}
              delay={0.3}
              features={[
                { icon: Globe, text: "เริ่มต้นได้ภายใน 1 สัปดาห์" },
                { icon: BarChart3, text: "Scale ตามการใช้งาน" },
                { icon: Zap, text: "ใช้ model ล่าสุดเสมอ" },
              ]}
            />
          </div>
        </div>

        {/* Connection indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 mb-10 md:mt-10 md:mb-20 flex justify-center items-center gap-3"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[rgba(0,102,204,0.2)]" />
          <div className="text-[13px] font-semibold text-[#6e6e73] tracking-[0.04em]">
            CONNECTED ECOSYSTEM
          </div>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[rgba(0,102,204,0.2)]" />
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="apple-card bg-[#f5f5f7] rounded-[28px] p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle decorative element */}
          <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(0,102,204,0.04),transparent_70%)] pointer-events-none" />

          <div className="w-14 h-14 rounded-2xl bg-[rgba(0,102,204,0.08)] flex items-center justify-center mx-auto mb-7">
            <Sparkles size={28} className="text-[#06c]" />
          </div>

          <h3 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold text-[#1d1d1f] leading-[1.25] mb-5">
            ไม่ว่าคุณต้องการ AI แบบไหน
            <br />
            เราช่วยได้ทั้งหมด
          </h3>

          <p className="text-[16px] md:text-[18px] text-[#6e6e73] leading-[1.7] max-w-[640px] mx-auto mb-10">
            ทุกธุรกิจมีความต้องการที่ต่างกัน เราเชื่อว่า AI ที่ดีต้องออกแบบให้เหมาะกับ
            context ของแต่ละองค์กร ไม่ใช่แค่เอาเครื่องมือสำเร็จรูปมาขาย
            แต่เข้าใจปัญหาจริง ออกแบบ solution จริง และส่งมอบผลลัพธ์จริง
          </p>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[640px] mx-auto">
            {[
              {
                icon: Zap,
                title: "เข้าใจปัญหาจริง",
                desc: "วิเคราะห์ความต้องการเฉพาะทาง",
              },
              {
                icon: Shield,
                title: "ออกแบบเฉพาะทาง",
                desc: "ไม่ใช่ one-size-fits-all",
              },
              {
                icon: Globe,
                title: "ส่งมอบผลลัพธ์",
                desc: "วัดผลได้ ใช้งานจริง",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 md:p-6 bg-white rounded-[18px] border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              >
                <item.icon size={24} className="text-[#06c] mb-3" />
                <div className="text-[14px] md:text-[15px] font-bold text-[#1d1d1f] mb-1.5">
                  {item.title}
                </div>
                <div className="text-[12px] md:text-[13px] text-[#6e6e73] leading-normal">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#06c] text-white rounded-[14px] text-[15px] md:text-[16px] font-semibold no-underline cursor-pointer"
            >
              พูดคุยกับเรา <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
