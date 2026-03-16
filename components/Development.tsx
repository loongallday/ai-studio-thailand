"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Database,
  Workflow,
  BarChart3,
  Plug,
  Server,
  ArrowRight,
  CheckCircle,
  Search,
  Palette,
  Wrench,
  TestTube,
  Rocket,
  HeartHandshake,
  Cloud,
  Shield,
  ExternalLink,
} from "lucide-react";

const capabilities = [
  {
    icon: MessageSquare,
    title: "AI Chatbot & Customer Service",
    description:
      "สร้างแชทบอทอัจฉริยะ ตอบคำถามลูกค้าอัตโนมัติ 24/7 รองรับภาษาไทย",
  },
  {
    icon: Database,
    title: "RAG Knowledge Base",
    description:
      "ระบบค้นหาข้อมูลอัจฉริยะจากเอกสารองค์กร ตอบคำถามจากฐานความรู้จริง",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "อัตโนมัติกระบวนการทำงานด้วย AI ลดงาน manual เพิ่มประสิทธิภาพ",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    description:
      "วิเคราะห์ข้อมูลด้วย AI สร้างรายงานอัตโนมัติ แดชบอร์ดอัจฉริยะ",
  },
  {
    icon: Plug,
    title: "AI Integration",
    description:
      "เชื่อมต่อ AI กับระบบที่มีอยู่ ERP, CRM, LINE, Email และอื่นๆ",
  },
  {
    icon: Server,
    title: "Enterprise AI Infrastructure",
    description:
      "วางโครงสร้าง AI สำหรับองค์กรขนาดใหญ่ ทั้ง On-Premise และ Cloud",
  },
];

const processSteps = [
  {
    icon: Search,
    label: "Discovery",
    thai: "สำรวจ",
    description: "วิเคราะห์ปัญหาและความต้องการ",
  },
  {
    icon: Palette,
    label: "Design",
    thai: "ออกแบบ",
    description: "ออกแบบ solution ที่เหมาะสม",
  },
  {
    icon: Wrench,
    label: "Build",
    thai: "พัฒนา",
    description: "พัฒนาระบบตาม spec",
  },
  {
    icon: TestTube,
    label: "Test",
    thai: "ทดสอบ",
    description: "ทดสอบครบทุกกรณี",
  },
  {
    icon: Rocket,
    label: "Deploy",
    thai: "ติดตั้ง",
    description: "วางระบบ production",
  },
  {
    icon: HeartHandshake,
    label: "Maintain",
    thai: "ดูแล",
    description: "ซัพพอร์ตต่อเนื่อง",
  },
];

const caseExamples = [
  {
    industry: "ธนาคาร",
    project: "AI Document Processing",
    result: "ลดเวลาตรวจสอบเอกสาร 80%",
    color: "#1d4ed8",
  },
  {
    industry: "อีคอมเมิร์ซ",
    project: "AI Customer Service Bot",
    result: "ตอบลูกค้าอัตโนมัติ 90% ของคำถาม",
    color: "#06c",
  },
  {
    industry: "โรงงาน",
    project: "Predictive Maintenance AI",
    result: "ลดค่าซ่อมบำรุง 35%",
    color: "#059669",
  },
];

export default function Development() {
  return (
    <section
      id="development"
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
              color: "#1d4ed8",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Custom AI Development
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
            เราพัฒนาอะไร
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
            พัฒนาระบบ AI แบบ custom สำหรับองค์กรของคุณ
            ทั้ง On-Premise และ Cloud ด้วยทีมที่เข้าใจธุรกิจไทย
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 96,
          }}
          className="capabilities-grid"
        >
          {capabilities.map((cap, i) => {
            const CapIcon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="apple-card"
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: "28px 24px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(29, 78, 216, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <CapIcon size={24} style={{ color: "#1d4ed8" }} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#6e6e73",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 96 }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              กระบวนการทำงาน
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#86868b",
              }}
            >
              6 ขั้นตอนที่พิสูจน์แล้วว่าได้ผล
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 0,
              flexWrap: "wrap",
            }}
            className="process-flow"
          >
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      width: 130,
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        background: "white",
                        border: "2px solid rgba(29, 78, 216, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 12px",
                      }}
                    >
                      <StepIcon
                        size={24}
                        style={{ color: "#1d4ed8" }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#1d1d1f",
                        marginBottom: 2,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#1d4ed8",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {step.thai}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#86868b",
                        lineHeight: 1.4,
                      }}
                    >
                      {step.description}
                    </div>
                  </div>
                  {i < processSteps.length - 1 && (
                    <ArrowRight
                      size={18}
                      style={{
                        color: "#d1d5db",
                        flexShrink: 0,
                        marginTop: -28,
                      }}
                      className="process-arrow"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* On-Premise vs Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 96 }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              On-Premise vs Cloud
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#86868b",
              }}
            >
              เราทำได้ทั้งสองแบบ — เลือกแบบที่เหมาะกับคุณ
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
            }}
            className="deployment-grid"
          >
            {/* On-Premise Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="apple-card"
              style={{
                background: "white",
                borderRadius: 24,
                border: "1px solid rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "6px 0",
                  background:
                    "linear-gradient(135deg, #06c, #ea580c)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  LocalAI Thailand
                </span>
              </div>
              <div style={{ padding: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <Server
                    size={28}
                    style={{ color: "#06c" }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#1d1d1f",
                      }}
                    >
                      On-Premise AI
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "#86868b",
                      }}
                    >
                      ข้อมูลอยู่ในองค์กร 100%
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  {[
                    "ข้อมูลไม่ออกนอกองค์กร",
                    "ไม่มีค่า API รายเดือน",
                    "ควบคุมได้เต็มที่",
                    "เหมาะกับ compliance สูง",
                    "รองรับ air-gapped environment",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: "#1d1d1f",
                      }}
                    >
                      <CheckCircle
                        size={16}
                        style={{ color: "#06c", flexShrink: 0 }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
                <motion.a
                  href="https://localaithai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#06c",
                    textDecoration: "none",
                  }}
                >
                  localaithai.com <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>

            {/* Cloud Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="apple-card"
              style={{
                background: "white",
                borderRadius: 24,
                border: "1px solid rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "6px 0",
                  background:
                    "linear-gradient(135deg, #1d4ed8, #2563eb)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  CloudAI Thailand
                </span>
              </div>
              <div style={{ padding: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <Cloud
                    size={28}
                    style={{ color: "#1d4ed8" }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#1d1d1f",
                      }}
                    >
                      Cloud AI
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "#86868b",
                      }}
                    >
                      ยืดหยุ่น ขยายได้ไม่จำกัด
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  {[
                    "เริ่มต้นเร็ว ไม่ต้องซื้อเซิร์ฟเวอร์",
                    "Scale ได้ตามการใช้งาน",
                    "ใช้ model ล่าสุดเสมอ",
                    "เหมาะกับ startup & SME",
                    "จ่ายตามใช้จริง",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: "#1d1d1f",
                      }}
                    >
                      <CheckCircle
                        size={16}
                        style={{ color: "#1d4ed8", flexShrink: 0 }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
                <motion.a
                  href="https://cloudaithai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1d4ed8",
                    textDecoration: "none",
                  }}
                >
                  cloudaithai.com <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Case Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 8,
              }}
            >
              ตัวอย่างผลงาน
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#86868b",
              }}
            >
              โปรเจ็กต์จริงที่เราส่งมอบให้ลูกค้า
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="cases-grid"
          >
            {caseExamples.map((ex, i) => (
              <motion.div
                key={ex.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="apple-card"
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: "28px 24px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: ex.color,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {ex.industry}
                </div>
                <h4
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {ex.project}
                </h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 14px",
                    background: `${ex.color}08`,
                    borderRadius: 10,
                    border: `1px solid ${ex.color}15`,
                  }}
                >
                  <Shield
                    size={16}
                    style={{ color: ex.color, flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: ex.color,
                    }}
                  >
                    {ex.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
          .deployment-grid {
            grid-template-columns: 1fr !important;
          }
          .cases-grid {
            grid-template-columns: 1fr !important;
          }
          .process-arrow {
            display: none !important;
          }
          .process-flow {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
