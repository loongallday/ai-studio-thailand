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

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Data ─── */
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
    <section
      style={{
        background: "#fff",
        paddingTop: 120,
        paddingBottom: 0,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        {/* ============================================================ */}
        {/*  Hero: เราคือใคร                                               */}
        {/* ============================================================ */}
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
            About Us
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            เราคือใคร
          </h1>
          <p
            style={{
              fontSize: 19,
              color: "#86868b",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            AI Studio Thailand คือทีมพัฒนาเบื้องหลัง{" "}
            <span style={{ color: "#1d1d1f", fontWeight: 600 }}>
              LocalAI Thailand
            </span>{" "}
            และ{" "}
            <span style={{ color: "#1d1d1f", fontWeight: 600 }}>
              CloudAI Thailand
            </span>{" "}
            เราเชื่อว่า AI ไม่ใช่แค่เทคโนโลยี แต่เป็นเครื่องมือที่ช่วยให้ธุรกิจไทย
            ทำงานฉลาดขึ้น เร็วขึ้น และเติบโตได้อย่างยั่งยืน
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/*  Values / Philosophy Strip                                     */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="apple-card"
          style={{
            background: "#f5f5f7",
            borderRadius: 24,
            padding: "clamp(24px, 4vw, 48px) clamp(20px, 4vw, 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(20px, 4vw, 56px)",
            marginBottom: "clamp(48px, 8vw, 100px)",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: Heart, label: "Passion for AI", sublabel: "หลงใหลในเทคโนโลยี" },
            { icon: Users, label: "People First", sublabel: "เข้าใจคนก่อนเข้าใจเทค" },
            { icon: Lightbulb, label: "Practical AI", sublabel: "AI ที่ใช้งานได้จริง" },
            { icon: Globe, label: "Thai Market Focus", sublabel: "เข้าใจตลาดไทย" },
          ].map((v) => {
            const VIcon = v.icon;
            return (
              <div
                key={v.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <VIcon size={22} style={{ color: "#06c" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#1d1d1f",
                    }}
                  >
                    {v.label}
                  </div>
                  <div style={{ fontSize: 13, color: "#86868b" }}>
                    {v.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ============================================================ */}
        {/*  3 สิ่งที่เราทำ                                                  */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 100 }}
        >
          <motion.div
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              3 สิ่งที่เราทำ
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
              สอน สร้าง และสร้างสรรค์ AI ให้กับธุรกิจไทย
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="about-grid-3"
          >
            {threeThings.map((item) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="apple-card"
                  style={{
                    background: "white",
                    borderRadius: 24,
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "40px 32px",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 18,
                      background: "rgba(0,102,204,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <ItemIcon size={28} style={{ color: "#06c" }} />
                  </div>

                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 12,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      color: "#6e6e73",
                      lineHeight: 1.7,
                      marginBottom: 24,
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {item.highlights.map((h) => (
                      <div
                        key={h}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 14,
                          color: "#1d1d1f",
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle
                          size={15}
                          style={{ color: "#06c", flexShrink: 0 }}
                        />
                        {h}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/*  หลักการ                                                        */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 100 }}
        >
          <motion.div
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              หลักการของเรา
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
              สิ่งที่เราเชื่อและยึดมั่นในทุกโปรเจกต์
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="about-grid-3"
          >
            {principles.map((p) => {
              const PIcon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="apple-card"
                  style={{
                    background: "#f5f5f7",
                    borderRadius: 24,
                    padding: "40px 32px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 18,
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <PIcon size={28} style={{ color: "#06c" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 12,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#6e6e73",
                      lineHeight: 1.7,
                    }}
                  >
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/*  Ecosystem                                                     */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 100 }}
        >
          <motion.div
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              Ecosystem
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
              AI Studio Thailand เป็นศูนย์กลางที่เชื่อมโยง LocalAI และ CloudAI
              เข้าด้วยกัน เพื่อตอบโจทย์ทุกรูปแบบของ AI
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="about-grid-3"
          >
            {ecosystemBrands.map((brand, i) => {
              const BrandIcon = brand.icon;
              const isCenter = i === 1;
              return (
                <motion.div
                  key={brand.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="apple-card"
                  style={{
                    background: isCenter
                      ? "linear-gradient(160deg, #1d1d1f, #2d2d2f)"
                      : "white",
                    borderRadius: 24,
                    border: isCenter
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.06)",
                    padding: "40px 32px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {isCenter && (
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
                      width: 56,
                      height: 56,
                      borderRadius: 18,
                      background: isCenter
                        ? "linear-gradient(135deg, #06c, #3b82f6)"
                        : `${brand.color}10`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <BrandIcon
                      size={28}
                      style={{ color: isCenter ? "white" : brand.color }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: isCenter ? "white" : "#1d1d1f",
                      marginBottom: 6,
                    }}
                  >
                    {brand.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: isCenter ? "rgba(255,255,255,0.7)" : "#06c",
                      marginBottom: 12,
                    }}
                  >
                    {brand.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: isCenter ? "rgba(255,255,255,0.5)" : "#6e6e73",
                      lineHeight: 1.6,
                      marginBottom: 24,
                    }}
                  >
                    {brand.description}
                  </p>

                  {brand.url ? (
                    <motion.a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "10px 22px",
                        background: brand.color,
                        color: "white",
                        borderRadius: 12,
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      เยี่ยมชม <ExternalLink size={14} />
                    </motion.a>
                  ) : (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "10px 22px",
                        background: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.6)",
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
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/*  Contact Info                                                  */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ marginBottom: 100 }}
        >
          <motion.div
            variants={fadeUp}
            className="apple-card"
            style={{
              background: "#f5f5f7",
              borderRadius: 28,
              padding: "clamp(32px, 5vw, 56px) clamp(20px, 4vw, 48px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
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

            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 12,
              }}
            >
              ติดต่อเรา
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#86868b",
                maxWidth: 500,
                margin: "0 auto 40px",
                lineHeight: 1.6,
              }}
            >
              พร้อมรับฟังและช่วยเหลือ ปรึกษาเบื้องต้นฟรี
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                maxWidth: 800,
                margin: "0 auto",
              }}
              className="about-contact-grid"
            >
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
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      padding: "24px 16px",
                      background: "white",
                      borderRadius: 18,
                      textDecoration: "none",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      cursor: c.href ? "pointer" : "default",
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
                      }}
                    >
                      <CIcon size={20} style={{ color: "#06c" }} />
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#86868b",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#1d1d1f",
                      }}
                    >
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
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 40,
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
              พูดคุยกับเรา
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid-3 {
            grid-template-columns: 1fr !important;
          }
          .about-contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
