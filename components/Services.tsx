"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Sparkles, ArrowRight, Clock, Users, Calendar, Server, Cloud, Palette, Video, Mic } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "AI Workshop & Training",
    subtitle: "สอน AI ตั้งแต่พื้นฐานถึงขั้นสูง",
    color: "#06c",
    colorLight: "rgba(232, 89, 12, 0.08)",
    description:
      "Workshop 1-3 วัน สำหรับทีมของคุณ เรียนรู้ AI อย่างลึกซึ้ง ปฏิบัติจริง ใช้ได้จริง ตั้งแต่พื้นฐานจนถึงขั้นสูง",
    topics: [
      "Prompt Engineering",
      "RAG Pipeline",
      "n8n Automation",
      "AI Strategy",
    ],
    mockType: "schedule" as const,
  },
  {
    icon: Code,
    title: "Custom AI Development",
    subtitle: "พัฒนาระบบ AI ขนาดใหญ่",
    color: "#1d4ed8",
    colorLight: "rgba(29, 78, 216, 0.08)",
    description:
      "ทั้ง On-Premise (LocalAI) และ Cloud (CloudAI) — Enterprise-grade, compliance-ready พร้อมทีมซัพพอร์ตตลอด",
    topics: [
      "Enterprise AI",
      "On-Premise Deploy",
      "Cloud Solutions",
      "Compliance Ready",
    ],
    mockType: "architecture" as const,
  },
  {
    icon: Sparkles,
    title: "AI Content Creation",
    subtitle: "สร้าง content เกี่ยวกับ AI",
    color: "#059669",
    colorLight: "rgba(5, 150, 105, 0.08)",
    description:
      "เราเป็น AI Creator / Influencer สร้าง content ทุกรูปแบบ ทั้ง Blog, Social Media, Video และ Podcast",
    topics: [
      "Blog & Articles",
      "Social Media",
      "Video Tutorials",
      "Podcast",
    ],
    mockType: "social" as const,
  },
];

function WorkshopScheduleMock() {
  const days = [
    {
      day: "Day 1",
      label: "Foundation",
      items: ["AI Overview & Trends", "Prompt Engineering 101", "Hands-on Lab"],
    },
    {
      day: "Day 2",
      label: "Build",
      items: ["RAG Pipeline Setup", "n8n Automation", "Integration Workshop"],
    },
    {
      day: "Day 3",
      label: "Deploy",
      items: ["AI Strategy Planning", "Team Project", "Presentation & Review"],
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <Calendar size={16} style={{ color: "#06c" }} />
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#06c",
            letterSpacing: "0.02em",
          }}
        >
          WORKSHOP SCHEDULE
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {days.map((d, i) => (
          <motion.div
            key={d.day}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                minWidth: 56,
                textAlign: "center",
                padding: "8px 0",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#06c",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {d.day}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#86868b",
                  marginTop: 2,
                }}
              >
                {d.label}
              </div>
            </div>
            <div
              style={{
                width: 2,
                background:
                  "linear-gradient(to bottom, #06c, rgba(232,89,12,0.15))",
                borderRadius: 1,
                minHeight: 60,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              {d.items.map((item) => (
                <div
                  key={item}
                  style={{
                    fontSize: 13,
                    color: "#1d1d1f",
                    padding: "4px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#06c",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureMock() {
  const layers = [
    {
      label: "Application Layer",
      items: ["Chatbot", "Dashboard", "API Gateway"],
      color: "#1d4ed8",
    },
    {
      label: "AI Engine",
      items: ["LLM", "RAG", "Vector DB"],
      color: "#3b82f6",
    },
    {
      label: "Infrastructure",
      items: ["On-Premise", "Cloud", "Hybrid"],
      color: "#60a5fa",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <Server size={16} style={{ color: "#1d4ed8" }} />
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#1d4ed8",
            letterSpacing: "0.02em",
          }}
        >
          ARCHITECTURE OVERVIEW
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.12 }}
            style={{
              background: `linear-gradient(135deg, ${layer.color}08, ${layer.color}04)`,
              border: `1px solid ${layer.color}20`,
              borderRadius: 12,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: layer.color,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {layer.label}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {layer.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 12,
                    color: "#1d1d1f",
                    background: "white",
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 11,
              color: "#86868b",
            }}
          >
            <Server size={12} /> On-Premise
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 11,
              color: "#86868b",
            }}
          >
            <Cloud size={12} /> Cloud
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialMediaMock() {
  const posts = [
    {
      platform: "Blog",
      icon: Palette,
      title: "5 วิธีใช้ AI ในธุรกิจไทย",
      engagement: "2.4K reads",
    },
    {
      platform: "YouTube",
      icon: Video,
      title: "สอน RAG Pipeline ฉบับเข้าใจง่าย",
      engagement: "8.1K views",
    },
    {
      platform: "Podcast",
      icon: Mic,
      title: "AI ในไทย EP.12: อนาคต LLM",
      engagement: "1.2K listens",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <Sparkles size={16} style={{ color: "#059669" }} />
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#059669",
            letterSpacing: "0.02em",
          }}
        >
          LATEST CONTENT
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {posts.map((post, i) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(5, 150, 105, 0.04)",
              border: "1px solid rgba(5, 150, 105, 0.12)",
              borderRadius: 12,
              padding: "12px 14px",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(5, 150, 105, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <post.icon size={16} style={{ color: "#059669" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#059669",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {post.platform}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#1d1d1f",
                  fontWeight: 500,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {post.title}
              </div>
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#86868b",
                whiteSpace: "nowrap",
              }}
            >
              {post.engagement}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
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
            Our Services
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
            เราทำอะไรบ้าง
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#86868b",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            ครบวงจรด้าน AI ตั้งแต่สอน สร้าง พัฒนา
            จนถึงเป็น AI Creator ให้ธุรกิจของคุณ
          </p>
        </motion.div>

        {/* Service Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 64,
          }}
        >
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const ServiceIcon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 48,
                  alignItems: "center",
                }}
                className="services-grid"
              >
                {/* Text Content */}
                <div
                  style={{
                    order: isReversed ? 2 : 1,
                    padding: "8px 0",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: service.colorLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <ServiceIcon
                      size={28}
                      style={{ color: service.color }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: 8,
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 17,
                      color: service.color,
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    {service.subtitle}
                  </p>

                  <p
                    style={{
                      fontSize: 16,
                      color: "#6e6e73",
                      lineHeight: 1.65,
                      marginBottom: 24,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Topic Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 28,
                    }}
                  >
                    {service.topics.map((topic) => (
                      <span
                        key={topic}
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: service.color,
                          background: service.colorLight,
                          padding: "6px 14px",
                          borderRadius: 20,
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={`#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    whileHover={{ x: 4 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 15,
                      fontWeight: 600,
                      color: service.color,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    เรียนรู้เพิ่มเติม <ArrowRight size={16} />
                  </motion.a>
                </div>

                {/* Mock Visual */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                  }}
                >
                  <div
                    className="apple-card"
                    style={{
                      background: "white",
                      borderRadius: 20,
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                      overflow: "hidden",
                    }}
                  >
                    {service.mockType === "schedule" && (
                      <WorkshopScheduleMock />
                    )}
                    {service.mockType === "architecture" && (
                      <ArchitectureMock />
                    )}
                    {service.mockType === "social" && <SocialMediaMock />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginTop: 80,
          }}
          className="stats-grid"
        >
          {[
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
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="apple-card"
              style={{
                textAlign: "center",
                padding: "32px 20px",
                background: "white",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
              }}
            >
              <stat.icon
                size={24}
                style={{ color: stat.color, marginBottom: 12 }}
              />
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#86868b",
                  marginTop: 6,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > div {
            order: unset !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
