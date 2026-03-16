"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  User,
  Building,
  FileText,
  Sparkles,
} from "lucide-react";

const serviceOptions = [
  { value: "", label: "เลือกบริการที่สนใจ" },
  { value: "workshop", label: "AI Workshop & Training" },
  { value: "development", label: "Custom AI Development" },
  { value: "content", label: "AI Content Creation" },
  { value: "other", label: "อื่นๆ" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "082-704-7606",
    href: "tel:0827047606",
    color: "#06c",
  },
  {
    icon: Mail,
    label: "อีเมล",
    value: "chavin@pace-design.co.th",
    href: "mailto:chavin@pace-design.co.th",
    color: "#1d4ed8",
  },
  {
    icon: MessageSquare,
    label: "LINE Official",
    value: "@542mgysj",
    href: "https://line.me/R/ti/p/@542mgysj",
    color: "#059669",
  },
];

const reasons = [
  "ตอบกลับภายใน 24 ชั่วโมง",
  "ปรึกษาเบื้องต้นฟรี",
  "ออกแบบ solution เฉพาะ",
  "ราคาโปร่งใส",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
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
          style={{ textAlign: "center", marginBottom: 64 }}
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
            Contact Us
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
            พร้อมเริ่มต้นกับ AI?
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
            ติดต่อเราวันนี้ รับคำปรึกษาเบื้องต้นฟรี
            เราพร้อมช่วยคุณวางแผน AI ที่เหมาะกับธุรกิจ
          </p>
        </motion.div>

        {/* Main Grid: Form + Info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 48,
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="apple-card"
            style={{
              background: "#fff",
              borderRadius: 28,
              padding: "40px",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 20,
                    background: "rgba(5, 150, 105, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <CheckCircle
                    size={32}
                    style={{ color: "#059669" }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 8,
                  }}
                >
                  ส่งข้อความสำเร็จ!
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: "#6e6e73",
                    lineHeight: 1.6,
                  }}
                >
                  ขอบคุณที่สนใจบริการของเรา
                  ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
              </motion.div>
            ) : (
              <form
                action="https://formspree.io/f/mzzeydvp"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#06c",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  ส่งข้อความถึงเรา
                </div>

                {/* Name + Company Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                  className="form-row"
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#1d1d1f",
                        marginBottom: 8,
                      }}
                    >
                      <User size={14} style={{ color: "#86868b" }} />
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="ชื่อของคุณ"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        fontSize: 15,
                        color: "#1d1d1f",
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 14,
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#1d1d1f",
                        marginBottom: 8,
                      }}
                    >
                      <Building
                        size={14}
                        style={{ color: "#86868b" }}
                      />
                      บริษัท
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="ชื่อบริษัท (ถ้ามี)"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        fontSize: 15,
                        color: "#1d1d1f",
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 14,
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Email + Phone Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                  className="form-row"
                >
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#1d1d1f",
                        marginBottom: 8,
                      }}
                    >
                      <Mail size={14} style={{ color: "#86868b" }} />
                      อีเมล
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        fontSize: 15,
                        color: "#1d1d1f",
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 14,
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#1d1d1f",
                        marginBottom: 8,
                      }}
                    >
                      <Phone size={14} style={{ color: "#86868b" }} />
                      เบอร์โทร
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="08X-XXX-XXXX"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        fontSize: 15,
                        color: "#1d1d1f",
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 14,
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div>
                  <label
                    htmlFor="service"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#1d1d1f",
                      marginBottom: 8,
                    }}
                  >
                    <FileText
                      size={14}
                      style={{ color: "#86868b" }}
                    />
                    บริการที่สนใจ
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      fontSize: 15,
                      color: "#1d1d1f",
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: 14,
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'%2386868b\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M8 12l-6-6h12z\'/%3E%3C/svg%3E")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      boxSizing: "border-box",
                    }}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#1d1d1f",
                      marginBottom: 8,
                    }}
                  >
                    <MessageSquare
                      size={14}
                      style={{ color: "#86868b" }}
                    />
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="บอกเราเกี่ยวกับโปรเจ็กต์หรือความต้องการของคุณ..."
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      fontSize: 15,
                      color: "#1d1d1f",
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: 14,
                      outline: "none",
                      resize: "vertical",
                      minHeight: 120,
                      lineHeight: 1.6,
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "16px 28px",
                    background:
                      "linear-gradient(135deg, #06c, #ea580c)",
                    color: "white",
                    borderRadius: 16,
                    fontSize: 16,
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    marginTop: 4,
                  }}
                >
                  <Send size={18} />
                  ส่งข้อความ
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Contact Cards */}
            {contactInfo.map((info, i) => {
              const InfoIcon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={
                    info.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="apple-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "22px 24px",
                    background: "#fff",
                    borderRadius: 20,
                    border: "1px solid rgba(0,0,0,0.06)",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: `${info.color}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <InfoIcon
                      size={22}
                      style={{ color: info.color }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#86868b",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {info.label}
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#1d1d1f",
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    style={{
                      color: "#d1d5db",
                      marginLeft: "auto",
                    }}
                  />
                </motion.a>
              );
            })}

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="apple-card"
              style={{
                padding: "22px 24px",
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <Clock
                  size={18}
                  style={{ color: "#06c" }}
                />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1d1d1f",
                  }}
                >
                  เวลาทำการ
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "#6e6e73" }}>
                    จันทร์ - ศุกร์
                  </span>
                  <span
                    style={{
                      color: "#1d1d1f",
                      fontWeight: 600,
                    }}
                  >
                    09:00 - 18:00
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "#6e6e73" }}>เสาร์</span>
                  <span
                    style={{
                      color: "#1d1d1f",
                      fontWeight: 600,
                    }}
                  >
                    09:00 - 15:00
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "#6e6e73" }}>อาทิตย์</span>
                  <span
                    style={{
                      color: "#86868b",
                      fontWeight: 500,
                    }}
                  >
                    ปิดทำการ
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="apple-card"
              style={{
                padding: "22px 24px",
                background:
                  "linear-gradient(135deg, rgba(232,89,12,0.04), rgba(232,89,12,0.02))",
                borderRadius: 20,
                border: "1px solid rgba(232,89,12,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <Sparkles
                  size={18}
                  style={{ color: "#06c" }}
                />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1d1d1f",
                  }}
                >
                  ทำไมต้องติดต่อเรา
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {reasons.map((reason, i) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.75 + i * 0.06 }}
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
                      style={{
                        color: "#06c",
                        flexShrink: 0,
                      }}
                    />
                    {reason}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus,
        select:focus,
        textarea:focus {
          border-color: #06c !important;
          box-shadow: 0 0 0 3px rgba(232, 89, 12, 0.1);
        }
        input::placeholder,
        textarea::placeholder {
          color: #c7c7cc;
        }
      `}</style>
    </section>
  );
}
