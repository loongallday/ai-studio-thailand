"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  Cloud,
  ArrowRight,
  ExternalLink,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const brands = [
  {
    name: "AI Studio Thailand",
    tagline: "ศูนย์กลาง AI ครบวงจร",
    description:
      "แบรนด์แม่ที่รวมทุกบริการ AI ไว้ในที่เดียว ตั้งแต่สอน สร้าง พัฒนา ไปจนถึงเป็น AI Creator",
    icon: Cpu,
    color: "#06c",
    colorLight: "rgba(232, 89, 12, 0.08)",
    url: null,
    isParent: true,
    features: [
      "AI Workshop & Training",
      "Custom AI Development",
      "AI Content Creation",
      "AI Consulting & Strategy",
    ],
  },
  {
    name: "LocalAI Thailand",
    tagline: "On-Premise AI สำหรับองค์กร",
    description:
      "โซลูชัน AI ที่รันบนเซิร์ฟเวอร์ขององค์กร ข้อมูลไม่ออกนอกบริษัท เหมาะกับธุรกิจที่ต้องการความปลอดภัยสูง",
    icon: Server,
    color: "#06c",
    colorLight: "rgba(232, 89, 12, 0.08)",
    url: "https://localaithai.com",
    isParent: false,
    features: [
      "ข้อมูลอยู่ภายในองค์กร 100%",
      "ไม่มีค่า API รายเดือน",
      "Compliance & PDPA Ready",
      "รองรับ Air-gapped",
    ],
  },
  {
    name: "CloudAI Thailand",
    tagline: "Cloud AI Automation",
    description:
      "ระบบ AI บนคลาวด์ที่ยืดหยุ่น เริ่มต้นได้เร็ว ขยายได้ไม่จำกัด เหมาะกับ startup และ SME",
    icon: Cloud,
    color: "#1d4ed8",
    colorLight: "rgba(29, 78, 216, 0.08)",
    url: "https://cloudaithai.com",
    isParent: false,
    features: [
      "เริ่มต้นได้ภายใน 1 สัปดาห์",
      "Scale ได้ตามการใช้งาน",
      "ใช้ model ล่าสุดเสมอ",
      "จ่ายตามใช้จริง",
    ],
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      style={{
        background: "#fff",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Section Header */}
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
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            3 แบรนด์ 1 เป้าหมาย
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#86868b",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            ระบบนิเวศ AI ที่ครบวงจร ตอบโจทย์ทุกความต้องการ
            ไม่ว่าจะ On-Premise หรือ Cloud
          </p>
        </motion.div>

        {/* Brand Connection Visual */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            marginBottom: 80,
          }}
        >
          {/* Parent Brand — AI Studio Thailand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="apple-card"
            style={{
              background: "white",
              borderRadius: 28,
              border: "2px solid rgba(232, 89, 12, 0.2)",
              boxShadow: "0 8px 40px rgba(232, 89, 12, 0.08)",
              padding: "40px 48px",
              maxWidth: 640,
              width: "100%",
              textAlign: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background:
                  "linear-gradient(135deg, #06c, #ea580c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Cpu size={32} style={{ color: "white" }} />
            </div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 6,
              }}
            >
              {brands[0].name}
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "#06c",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              {brands[0].tagline}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#6e6e73",
                lineHeight: 1.6,
                maxWidth: 400,
                margin: "0 auto 20px",
              }}
            >
              {brands[0].description}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {brands[0].features.map((f) => (
                <span
                  key={f}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#06c",
                    background: "rgba(232, 89, 12, 0.06)",
                    padding: "5px 12px",
                    borderRadius: 8,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Connection Lines */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 200,
              position: "relative",
              height: 60,
              width: "100%",
              maxWidth: 640,
            }}
            className="connection-lines"
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                width: 2,
                height: 30,
                background:
                  "linear-gradient(to bottom, rgba(232,89,12,0.3), rgba(232,89,12,0.1))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                top: 30,
                height: 2,
                background:
                  "linear-gradient(to right, rgba(232,89,12,0.2), rgba(29,78,216,0.2))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "25%",
                top: 30,
                width: 2,
                height: 30,
                background:
                  "linear-gradient(to bottom, rgba(232,89,12,0.2), rgba(232,89,12,0.1))",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "25%",
                top: 30,
                width: 2,
                height: 30,
                background:
                  "linear-gradient(to bottom, rgba(29,78,216,0.2), rgba(29,78,216,0.1))",
              }}
            />
          </div>

          {/* Sub-brands */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              maxWidth: 640,
              width: "100%",
            }}
            className="sub-brands-grid"
          >
            {brands.slice(1).map((brand, i) => {
              const BrandIcon = brand.icon;
              return (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="apple-card"
                  style={{
                    background: "white",
                    borderRadius: 24,
                    border: `1px solid ${brand.color}20`,
                    boxShadow: `0 4px 24px ${brand.color}08`,
                    padding: "32px 28px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: brand.colorLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <BrandIcon
                      size={26}
                      style={{ color: brand.color }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 4,
                    }}
                  >
                    {brand.name}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: brand.color,
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    {brand.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#6e6e73",
                      lineHeight: 1.55,
                      marginBottom: 18,
                    }}
                  >
                    {brand.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      marginBottom: 20,
                      textAlign: "left",
                    }}
                  >
                    {brand.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 13,
                          color: "#1d1d1f",
                        }}
                      >
                        <CheckCircle
                          size={14}
                          style={{
                            color: brand.color,
                            flexShrink: 0,
                          }}
                        />
                        {f}
                      </div>
                    ))}
                  </div>

                  {brand.url && (
                    <motion.a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "10px 20px",
                        background: brand.color,
                        color: "white",
                        borderRadius: 12,
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      เยี่ยมชมเว็บไซต์{" "}
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="apple-card"
          style={{
            background: "white",
            borderRadius: 28,
            padding: "56px 48px",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(232, 89, 12, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
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
              marginBottom: 16,
            }}
          >
            ไม่มี solution สำเร็จรูป
          </h3>

          <p
            style={{
              fontSize: 18,
              color: "#6e6e73",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto 36px",
            }}
          >
            ทุกธุรกิจมีความต้องการที่ต่างกัน เราเชื่อว่า AI ที่ดีต้องออกแบบให้เหมาะกับ
            context ของแต่ละองค์กร ไม่ใช่แค่เอาเครื่องมือสำเร็จรูปมาขาย
            แต่เข้าใจปัญหาจริง ออกแบบ solution จริง และส่งมอบผลลัพธ์จริง
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
              maxWidth: 600,
              margin: "0 auto",
            }}
            className="philosophy-grid"
          >
            {[
              {
                icon: Zap,
                title: "เข้าใจปัญหาจริง",
                desc: "วิเคราะห์ความต้องการเฉพาะ",
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
                  padding: "20px 16px",
                  background: "#fff",
                  borderRadius: 16,
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <item.icon
                  size={22}
                  style={{
                    color: "#06c",
                    marginBottom: 10,
                  }}
                />
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#86868b",
                  }}
                >
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .sub-brands-grid {
            grid-template-columns: 1fr !important;
          }
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
          .connection-lines {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
