"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  PenTool,
  Instagram,
  Youtube,
  Mic,
  Star,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Play,
  Headphones,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

const contentTypes = [
  {
    icon: PenTool,
    title: "Blog & Articles",
    description:
      "บทความเชิงลึกเกี่ยวกับ AI เป็นภาษาไทย อัพเดตเทรนด์ล่าสุด รีวิวเครื่องมือ",
    stats: "50+ บทความ",
  },
  {
    icon: Instagram,
    title: "Social Media",
    description:
      "คอนเทนต์สำหรับ TikTok, Instagram, Facebook เกี่ยวกับ AI ทิป ข่าว และเทคนิค",
    stats: "3 โพสต์/สัปดาห์",
  },
  {
    icon: Youtube,
    title: "Video Tutorials",
    description:
      "วิดีโอสอน AI ภาษาไทย ตั้งแต่เริ่มต้นจนถึงขั้นสูง step-by-step",
    stats: "30+ วิดีโอ",
  },
  {
    icon: Star,
    title: "AI Tool Reviews",
    description:
      "รีวิวเครื่องมือ AI เปรียบเทียบข้อดีข้อเสีย ช่วยเลือกเครื่องมือที่ใช่",
    stats: "40+ รีวิว",
  },
  {
    icon: Mic,
    title: "AI Podcast",
    description:
      "Podcast เกี่ยวกับ AI ในไทย สัมภาษณ์ผู้เชี่ยวชาญ อัพเดตวงการ",
    stats: "24 ตอน",
  },
];

const mockBlogPosts = [
  {
    category: "AI Trends",
    title: "10 เทรนด์ AI ที่ธุรกิจไทยต้องรู้ในปี 2026",
    readTime: "8 นาที",
    date: "14 มี.ค. 2026",
    likes: 248,
  },
  {
    category: "Tutorial",
    title: "สร้าง RAG Chatbot ด้วย n8n + Ollama ฉบับเข้าใจง่าย",
    readTime: "12 นาที",
    date: "10 มี.ค. 2026",
    likes: 412,
  },
  {
    category: "Review",
    title: "Claude vs ChatGPT vs Gemini — ตัวไหนเหมาะกับคนไทย",
    readTime: "10 นาที",
    date: "7 มี.ค. 2026",
    likes: 589,
  },
];

const mockSocialPosts = [
  {
    platform: "TikTok",
    content: "5 AI Tools ที่คนไทยต้องลอง! #AIThailand #Tech",
    views: "125K",
    likes: "8.2K",
    color: "#1d1d1f",
  },
  {
    platform: "Instagram",
    content: "สรุป AI News ประจำสัปดาห์ | EP.48",
    views: "45K",
    likes: "3.1K",
    color: "#06c",
  },
  {
    platform: "YouTube",
    content: "สอน n8n Automation สำหรับ Beginner [FULL]",
    views: "89K",
    likes: "5.4K",
    color: "#dc2626",
  },
];

const clientServices = [
  "สร้าง Blog Content เกี่ยวกับ AI สำหรับเว็บไซต์",
  "ผลิต Social Media Content รายเดือน",
  "สร้าง Video Tutorial สำหรับผลิตภัณฑ์ AI",
  "เขียน Whitepaper และ Case Study",
  "จัด Webinar และ Live Session",
  "สร้าง Newsletter เกี่ยวกับ AI",
];

export default function Creator() {
  return (
    <section
      id="creator"
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
              color: "#059669",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            AI Content Creation
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
            เราคือ AI Creator
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
            สร้างคอนเทนต์เกี่ยวกับ AI ทุกรูปแบบ
            ทั้งสำหรับตัวเองและสำหรับธุรกิจของคุณ
          </p>
        </motion.div>

        {/* Content Types */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            marginBottom: 80,
          }}
          className="content-types-grid"
        >
          {contentTypes.map((ct, i) => {
            const CTIcon = ct.icon;
            return (
              <motion.div
                key={ct.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="apple-card"
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "24px 18px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(5, 150, 105, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <CTIcon size={22} style={{ color: "#059669" }} />
                </div>
                <h4
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {ct.title}
                </h4>
                <p
                  style={{
                    fontSize: 12,
                    color: "#86868b",
                    lineHeight: 1.5,
                    marginBottom: 12,
                  }}
                >
                  {ct.description}
                </p>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#059669",
                    background: "rgba(5, 150, 105, 0.08)",
                    padding: "4px 10px",
                    borderRadius: 8,
                    display: "inline-block",
                  }}
                >
                  {ct.stats}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mock Blog Posts & Social Media — Side by Side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            marginBottom: 96,
          }}
          className="preview-grid"
        >
          {/* Blog Posts Mock */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#86868b",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Latest Blog Posts
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {mockBlogPosts.map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="apple-card"
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "20px",
                    border: "1px solid rgba(0,0,0,0.06)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#059669",
                        background: "rgba(5, 150, 105, 0.08)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#86868b",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#1d1d1f",
                      lineHeight: 1.4,
                      marginBottom: 12,
                    }}
                  >
                    {post.title}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color: "#86868b",
                      }}
                    >
                      {post.readTime}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        color: "#86868b",
                      }}
                    >
                      <Heart size={12} />
                      {post.likes}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media Mock */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#86868b",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Social Media
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {mockSocialPosts.map((post, i) => (
                <motion.div
                  key={post.platform}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="apple-card"
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "20px",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Platform header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: `${post.color}12`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {post.platform === "TikTok" && (
                        <Play
                          size={14}
                          style={{ color: post.color }}
                        />
                      )}
                      {post.platform === "Instagram" && (
                        <Instagram
                          size={14}
                          style={{ color: post.color }}
                        />
                      )}
                      {post.platform === "YouTube" && (
                        <Youtube
                          size={14}
                          style={{ color: post.color }}
                        />
                      )}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#1d1d1f",
                        }}
                      >
                        @aistudiothailand
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#86868b",
                        }}
                      >
                        {post.platform}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p
                    style={{
                      fontSize: 14,
                      color: "#1d1d1f",
                      lineHeight: 1.5,
                      marginBottom: 14,
                    }}
                  >
                    {post.content}
                  </p>

                  {/* Engagement */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      paddingTop: 12,
                      borderTop: "1px solid rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        color: "#86868b",
                      }}
                    >
                      <Heart size={13} /> {post.likes}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        color: "#86868b",
                      }}
                    >
                      <MessageCircle size={13} /> Comment
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        color: "#86868b",
                      }}
                    >
                      <Share2 size={13} /> Share
                    </div>
                    <div
                      style={{
                        marginLeft: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        color: "#86868b",
                      }}
                    >
                      <TrendingUp size={13} /> {post.views}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content for Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "#fff",
            borderRadius: 28,
            padding: "48px",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
          className="apple-card"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
            className="client-content-grid"
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#059669",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                For Your Business
              </div>
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  lineHeight: 1.25,
                  marginBottom: 12,
                }}
              >
                สร้าง Content
                <br />
                ให้ธุรกิจคุณ
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "#6e6e73",
                  lineHeight: 1.65,
                  marginBottom: 28,
                }}
              >
                นอกจากเราจะเป็น AI Creator เอง
                เรายังรับสร้างคอนเทนต์เกี่ยวกับ AI ให้ธุรกิจของคุณด้วย
                ไม่ว่าจะเป็น blog, video, social media หรือ whitepaper
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "#059669",
                  color: "white",
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                ติดต่อเรา <ArrowRight size={16} />
              </motion.a>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {clientServices.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    background: "white",
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <CheckCircle
                    size={18}
                    style={{ color: "#059669", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      color: "#1d1d1f",
                      fontWeight: 500,
                    }}
                  >
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            marginTop: 64,
          }}
          className="creator-stats-grid"
        >
          {[
            { icon: PenTool, value: "50+", label: "บทความ" },
            { icon: Youtube, value: "30+", label: "วิดีโอ" },
            { icon: Headphones, value: "24", label: "ตอน Podcast" },
            { icon: Users, value: "10K+", label: "ผู้ติดตาม" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="apple-card"
              style={{
                textAlign: "center",
                padding: "28px 16px",
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <stat.icon
                size={22}
                style={{ color: "#059669", marginBottom: 10 }}
              />
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#86868b",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          .content-types-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .content-types-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .preview-grid {
            grid-template-columns: 1fr !important;
          }
          .client-content-grid {
            grid-template-columns: 1fr !important;
          }
          .creator-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .content-types-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
