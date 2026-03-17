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
  icon: React.ComponentType<{ size: number; style: React.CSSProperties }>;
  features: { icon: React.ComponentType<{ size: number; style: React.CSSProperties }>; text: string }[];
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
      className="apple-card"
      style={{
        background: isDark
          ? "linear-gradient(160deg, #1d1d1f, #2d2d2f)"
          : "white",
        borderRadius: 28,
        border: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
        boxShadow: isDark
          ? "0 20px 60px rgba(0,0,0,0.3)"
          : "0 8px 32px rgba(0,0,0,0.06)",
        padding: "clamp(28px, 4vw, 44px) clamp(20px, 3vw, 32px) clamp(24px, 3vw, 36px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        flex: 1,
        minWidth: 0,
        transform: isDark ? "scale(1.04)" : undefined,
        zIndex: isDark ? 2 : 1,
      }}
    >
      {/* Glow effect for center card */}
      {isDark && (
        <div
          style={{
            position: "absolute",
            top: -40,
            left: "50%",
            transform: "translateX(-50%)",
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(0,102,204,0.15), transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 20,
          background: isDark
            ? "linear-gradient(135deg, #06c, #3b82f6)"
            : `${color}10`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          position: "relative",
        }}
      >
        <Icon
          size={30}
          style={{ color: isDark ? "white" : color }}
        />
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: isDark ? "white" : "#1d1d1f",
          marginBottom: 6,
        }}
      >
        {name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: isDark ? "rgba(255,255,255,0.7)" : color,
          marginBottom: 14,
        }}
      >
        {tagline}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: isDark ? "rgba(255,255,255,0.5)" : "#6e6e73",
          lineHeight: 1.6,
          marginBottom: 24,
          minHeight: 66,
        }}
      >
        {description}
      </p>

      {/* Features */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 28,
          textAlign: "left",
        }}
      >
        {features.map((f) => {
          const FeatureIcon = f.icon;
          return (
            <div
              key={f.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                color: isDark ? "rgba(255,255,255,0.75)" : "#1d1d1f",
                fontWeight: 500,
              }}
            >
              <FeatureIcon
                size={15}
                style={{
                  color: isDark ? "rgba(255,255,255,0.5)" : color,
                  flexShrink: 0,
                }}
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
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 22px",
            background: isDark ? "white" : color,
            color: isDark ? "#1d1d1f" : "white",
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          เยี่ยมชมเว็บไซต์ <ExternalLink size={14} />
        </motion.a>
      ) : (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 22px",
            background: isDark
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.04)",
            color: isDark ? "rgba(255,255,255,0.6)" : "#86868b",
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
          }}
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
      style={{
        background: "#fff",
        padding: "clamp(60px, 10vw, 120px) 16px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* ========================================================== */}
        {/*  Header                                                     */}
        {/* ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
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
            Our Ecosystem
          </div>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            เครือข่าย AI ครบวงจร
          </h2>
          <p
            style={{
              fontSize: 19,
              color: "#86868b",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            3 แบรนด์ 1 เป้าหมาย ระบบนิเวศ AI ที่ตอบโจทย์ทุกความต้องการ
            ไม่ว่าจะ On-Premise หรือ Cloud
          </p>
        </motion.div>

        {/* ========================================================== */}
        {/*  Connection Lines (SVG)                                     */}
        {/* ========================================================== */}
        <div style={{ position: "relative" }}>
          {/* SVG connection lines behind cards */}
          <svg
            className="connection-svg"
            style={{
              position: "absolute",
              top: -30,
              left: 0,
              right: 0,
              width: "100%",
              height: 40,
              zIndex: 0,
            }}
          >
            <line
              x1="25%"
              y1="20"
              x2="50%"
              y2="20"
              stroke="rgba(0,102,204,0.15)"
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            <line
              x1="50%"
              y1="20"
              x2="75%"
              y2="20"
              stroke="rgba(0,102,204,0.15)"
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            {/* Dots at connection points */}
            <circle cx="25%" cy="20" r="4" fill="#06c" opacity="0.3" />
            <circle cx="50%" cy="20" r="6" fill="#06c" opacity="0.4" />
            <circle cx="75%" cy="20" r="4" fill="#1d4ed8" opacity="0.3" />
          </svg>

          {/* ======================================================== */}
          {/*  Brand Cards Row                                          */}
          {/* ======================================================== */}
          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "stretch",
              position: "relative",
              zIndex: 1,
            }}
            className="brand-cards-row"
          >
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

        {/* ========================================================== */}
        {/*  Connection indicator between cards                         */}
        {/* ========================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 mb-10 sm:mt-10 sm:mb-20"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              height: 1,
              flex: 1,
              maxWidth: 120,
              background:
                "linear-gradient(to right, transparent, rgba(0,102,204,0.2))",
            }}
          />
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#86868b",
              letterSpacing: "0.04em",
            }}
          >
            CONNECTED ECOSYSTEM
          </div>
          <div
            style={{
              height: 1,
              flex: 1,
              maxWidth: 120,
              background:
                "linear-gradient(to left, transparent, rgba(0,102,204,0.2))",
            }}
          />
        </motion.div>

        {/* ========================================================== */}
        {/*  Philosophy Quote                                           */}
        {/* ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="apple-card"
          style={{
            background: "#f5f5f7",
            borderRadius: 28,
            padding: "clamp(32px, 6vw, 64px) clamp(20px, 5vw, 48px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle decorative element */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,102,204,0.04), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(0,102,204,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
            }}
          >
            <Sparkles size={28} style={{ color: "#06c" }} />
          </div>

          <h3
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.25,
              marginBottom: 20,
            }}
          >
            ไม่ว่าคุณต้องการ AI แบบไหน
            <br />
            เราช่วยได้ทั้งหมด
          </h3>

          <p
            style={{
              fontSize: 18,
              color: "#6e6e73",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto 40px",
            }}
          >
            ทุกธุรกิจมีความต้องการที่ต่างกัน เราเชื่อว่า AI ที่ดีต้องออกแบบให้เหมาะกับ
            context ของแต่ละองค์กร ไม่ใช่แค่เอาเครื่องมือสำเร็จรูปมาขาย
            แต่เข้าใจปัญหาจริง ออกแบบ solution จริง และส่งมอบผลลัพธ์จริง
          </p>

          {/* Three pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              maxWidth: 640,
              margin: "0 auto",
            }}
            className="philosophy-grid"
          >
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
                style={{
                  padding: "24px 16px",
                  background: "white",
                  borderRadius: 18,
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                }}
              >
                <item.icon
                  size={24}
                  style={{
                    color: "#06c",
                    marginBottom: 12,
                  }}
                />
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#86868b",
                    lineHeight: 1.5,
                  }}
                >
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
            style={{ marginTop: 40 }}
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
              พูดคุยกับเรา <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 639px) {
          .brand-cards-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .brand-cards-row > div:nth-child(2) {
            order: -1 !important;
            transform: none !important;
          }
          .connection-svg {
            display: none !important;
          }
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
