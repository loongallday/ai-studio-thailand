"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Settings,
  Star,
} from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "AI Fundamentals",
    subtitle: "เริ่มต้นเข้าใจ AI อย่างแท้จริง",
    duration: "1 วัน",
    price: "฿9,900",
    priceUnit: "/คน",
    color: "#06c",
    colorLight: "rgba(232, 89, 12, 0.08)",
    icon: GraduationCap,
    audience: "ผู้เริ่มต้น, ทีมที่ต้องการเข้าใจ AI พื้นฐาน",
    curriculum: [
      "AI คืออะไร — ประวัติ, ประเภท, และแนวโน้มล่าสุด",
      "Large Language Models (LLMs) ทำงานยังไง",
      "Prompt Engineering 101 — เขียน prompt ให้ได้ผลลัพธ์ดี",
      "Hands-on: ใช้ ChatGPT, Claude, Gemini อย่างมืออาชีพ",
      "AI Use Cases สำหรับธุรกิจไทย",
      "Workshop: สร้าง AI workflow แรกของคุณ",
      "Q&A และ แนวทางการนำไปใช้จริง",
    ],
    schedule: [
      { time: "09:00 - 10:30", topic: "AI Overview & LLM Fundamentals" },
      { time: "10:45 - 12:00", topic: "Prompt Engineering Workshop" },
      { time: "13:00 - 14:30", topic: "AI Tools Deep Dive" },
      { time: "14:45 - 16:00", topic: "Use Cases & Hands-on Lab" },
      { time: "16:00 - 17:00", topic: "Implementation Planning" },
    ],
  },
  {
    id: 2,
    title: "AI Automation Masterclass",
    subtitle: "สร้างระบบ AI อัตโนมัติแบบมืออาชีพ",
    duration: "2 วัน",
    price: "฿19,900",
    priceUnit: "/คน",
    color: "#1d4ed8",
    colorLight: "rgba(29, 78, 216, 0.08)",
    icon: Zap,
    audience: "Developer, IT Team, ผู้ที่มีพื้นฐาน technical",
    curriculum: [
      "n8n Automation — ตั้งแต่ติดตั้งจนใช้งานจริง",
      "Flowise — สร้าง AI Chatbot แบบ no-code",
      "RAG Pipeline — Knowledge Base + Vector Database",
      "API Integration กับระบบที่มีอยู่",
      "Hands-on: สร้าง AI Customer Service Bot",
      "Hands-on: สร้าง Document Q&A System",
      "Deploy & Monitor — วางระบบ production",
      "Best Practices & Security Considerations",
    ],
    schedule: [
      { time: "Day 1 AM", topic: "n8n Setup & Workflow Automation" },
      { time: "Day 1 PM", topic: "Flowise & AI Chatbot Building" },
      { time: "Day 2 AM", topic: "RAG Pipeline & Vector Database" },
      { time: "Day 2 PM", topic: "Integration, Deploy & Production" },
    ],
  },
  {
    id: 3,
    title: "AI for Business Leaders",
    subtitle: "วางแผน AI Strategy สำหรับผู้บริหาร",
    duration: "1 วัน",
    price: "฿14,900",
    priceUnit: "/คน",
    color: "#059669",
    colorLight: "rgba(5, 150, 105, 0.08)",
    icon: BarChart3,
    audience: "CEO, CTO, ผู้จัดการ, ผู้บริหารที่ตัดสินใจเรื่อง AI",
    curriculum: [
      "AI Landscape 2026 — สถานการณ์ AI ในไทยและโลก",
      "AI Strategy Framework — วางแผน AI ให้ตรงเป้า",
      "ROI Calculation — วัดผลตอบแทนจากการลงทุน AI",
      "Build vs Buy — ซื้อ หรือ สร้างเอง",
      "On-Premise vs Cloud — เลือกแบบไหนดี",
      "Implementation Roadmap — แผนการนำ AI เข้าองค์กร",
      "Case Studies จากธุรกิจไทยจริง",
    ],
    schedule: [
      { time: "09:00 - 10:30", topic: "AI Landscape & Strategy Framework" },
      { time: "10:45 - 12:00", topic: "ROI & Build vs Buy Analysis" },
      { time: "13:00 - 14:30", topic: "Implementation Roadmap Workshop" },
      { time: "14:45 - 16:00", topic: "Case Studies & Group Discussion" },
      { time: "16:00 - 17:00", topic: "Action Plan & Next Steps" },
    ],
  },
  {
    id: 4,
    title: "Custom In-house Training",
    subtitle: "ออกแบบหลักสูตรเฉพาะสำหรับทีมคุณ",
    duration: "1-5 วัน",
    price: "ติดต่อราคา",
    priceUnit: "",
    color: "#7c3aed",
    colorLight: "rgba(124, 58, 237, 0.08)",
    icon: Settings,
    audience: "องค์กรที่ต้องการหลักสูตรเฉพาะ, ทีมขนาดใหญ่",
    curriculum: [
      "ออกแบบหลักสูตรตาม use case ขององค์กร",
      "ปรับเนื้อหาตามระดับความรู้ของทีม",
      "ใช้ข้อมูลและระบบจริงขององค์กรในการ workshop",
      "รองรับ 10-50 คนต่อรุ่น",
      "มี follow-up session หลังจบ workshop",
      "สามารถจัดที่บริษัทหรือ online",
    ],
    schedule: [
      { time: "สัปดาห์ 1", topic: "ประเมินความต้องการ & ออกแบบหลักสูตร" },
      { time: "สัปดาห์ 2-3", topic: "เตรียม material & environment" },
      { time: "สัปดาห์ 4", topic: "จัด workshop ตามแผน" },
      { time: "สัปดาห์ 5-6", topic: "Follow-up & Support" },
    ],
  },
];

function ScheduleTimeline({
  schedule,
  color,
}: {
  schedule: { time: string; topic: string }[];
  color: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {schedule.map((item, i) => (
        <motion.div
          key={item.time}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.06 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
            padding: "10px 0",
            borderBottom:
              i < schedule.length - 1
                ? "1px solid rgba(0,0,0,0.04)"
                : "none",
          }}
        >
          <div
            style={{
              minWidth: 90,
              fontSize: 12,
              fontWeight: 600,
              color: color,
              paddingTop: 1,
              letterSpacing: "0.01em",
            }}
          >
            {item.time}
          </div>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: color,
              opacity: 0.3,
              marginTop: 5,
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: 14,
              color: "#1d1d1f",
              lineHeight: 1.5,
            }}
          >
            {item.topic}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Workshop() {
  return (
    <section
      id="workshop"
      style={{
        background: "white",
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
            AI Workshop & Training
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
            เรียน AI จากผู้เชี่ยวชาญ
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
            Workshop ที่ออกแบบมาสำหรับคนไทย เน้นปฏิบัติจริง ใช้ได้จริง
            พร้อม support หลังจบคอร์ส
          </p>
        </motion.div>

        {/* Workshop Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}
          className="workshop-grid"
        >
          {workshops.map((workshop, index) => {
            const WorkshopIcon = workshop.icon;

            return (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="apple-card"
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  border: "1px solid rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card Header */}
                <div
                  style={{
                    padding: "28px 28px 0 28px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: workshop.colorLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WorkshopIcon
                        size={24}
                        style={{ color: workshop.color }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 13,
                          color: "#86868b",
                        }}
                      >
                        <Clock size={14} />
                        {workshop.duration}
                      </div>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {workshop.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      color: workshop.color,
                      fontWeight: 500,
                      marginBottom: 8,
                    }}
                  >
                    {workshop.subtitle}
                  </p>

                  {/* Price */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 4,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: "#1d1d1f",
                      }}
                    >
                      {workshop.price}
                    </span>
                    {workshop.priceUnit && (
                      <span
                        style={{
                          fontSize: 14,
                          color: "#86868b",
                        }}
                      >
                        {workshop.priceUnit}
                      </span>
                    )}
                  </div>

                  {/* Audience */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      padding: "12px 14px",
                      background: "white",
                      borderRadius: 12,
                      border: "1px solid rgba(0,0,0,0.04)",
                      marginBottom: 20,
                    }}
                  >
                    <Users
                      size={16}
                      style={{
                        color: workshop.color,
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#86868b",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          marginBottom: 2,
                        }}
                      >
                        เหมาะสำหรับ
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "#1d1d1f",
                          lineHeight: 1.5,
                        }}
                      >
                        {workshop.audience}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Curriculum */}
                <div
                  style={{
                    padding: "0 28px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#86868b",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    หลักสูตร
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {workshop.curriculum.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.04 }}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                        }}
                      >
                        <CheckCircle
                          size={16}
                          style={{
                            color: workshop.color,
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 14,
                            color: "#1d1d1f",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Schedule Timeline */}
                <div
                  style={{
                    padding: "20px 28px",
                    marginTop: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#86868b",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    ตารางเรียน
                  </div>
                  <div
                    style={{
                      background: "white",
                      borderRadius: 14,
                      border: "1px solid rgba(0,0,0,0.04)",
                      padding: "8px 16px",
                    }}
                  >
                    <ScheduleTimeline
                      schedule={workshop.schedule}
                      color={workshop.color}
                    />
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "0 28px 28px 28px" }}>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      width: "100%",
                      padding: "14px 24px",
                      background: workshop.color,
                      color: "white",
                      borderRadius: 14,
                      fontSize: 15,
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    สมัครเรียน <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: 64,
            padding: "32px",
            background: "rgba(232, 89, 12, 0.04)",
            borderRadius: 20,
            border: "1px solid rgba(232, 89, 12, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Star size={18} style={{ color: "#06c" }} />
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#1d1d1f",
              }}
            >
              สิ่งที่ได้รับหลังจบ Workshop
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
            }}
          >
            {[
              "Certificate of Completion",
              "Workshop Materials & Templates",
              "30 วัน Support หลังจบคอร์ส",
              "Community Access ตลอดชีพ",
            ].map((benefit) => (
              <div
                key={benefit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: "#6e6e73",
                }}
              >
                <CheckCircle size={14} style={{ color: "#06c" }} />
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .workshop-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
