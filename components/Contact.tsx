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
      className="bg-white py-16 md:py-24 lg:py-[120px] px-4"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-[13px] md:text-[14px] font-semibold text-[#06c] tracking-[0.08em] uppercase mb-3">
            Contact Us
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1d1d1f] leading-[1.15] mb-4">
            พร้อมเริ่มต้นกับ AI?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#86868b] max-w-[520px] mx-auto leading-relaxed">
            ติดต่อเราวันนี้ รับคำปรึกษาเบื้องต้นฟรี
            เราพร้อมช่วยคุณวางแผน AI ที่เหมาะกับธุรกิจ
          </p>
        </motion.div>

        {/* Main Grid: Form + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="apple-card bg-white rounded-[28px] p-4 md:p-6 lg:p-8 border border-black/[0.06]"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-5"
              >
                <div className="w-16 h-16 rounded-[20px] bg-[rgba(5,150,105,0.1)] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-[#059669]" />
                </div>
                <h3 className="text-[22px] md:text-[24px] font-bold text-[#1d1d1f] mb-2">
                  ส่งข้อความสำเร็จ!
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#6e6e73] leading-relaxed">
                  ขอบคุณที่สนใจบริการของเรา
                  ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
              </motion.div>
            ) : (
              <form
                action="https://formspree.io/f/mzzeydvp"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="flex flex-col gap-5"
              >
                <div className="text-[13px] font-bold text-[#06c] tracking-[0.06em] uppercase mb-1">
                  ส่งข้อความถึงเรา
                </div>

                {/* Name + Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1d1d1f] mb-2"
                    >
                      <User size={14} className="text-[#86868b]" />
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="ชื่อของคุณ"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-[16px] text-[#1d1d1f] bg-white outline-none transition-colors focus:border-[#06c] focus:shadow-[0_0_0_3px_rgba(232,89,12,0.1)] placeholder:text-[#c7c7cc] box-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1d1d1f] mb-2"
                    >
                      <Building size={14} className="text-[#86868b]" />
                      บริษัท
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="ชื่อบริษัท (ถ้ามี)"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-[16px] text-[#1d1d1f] bg-white outline-none transition-colors focus:border-[#06c] focus:shadow-[0_0_0_3px_rgba(232,89,12,0.1)] placeholder:text-[#c7c7cc] box-border"
                    />
                  </div>
                </div>

                {/* Email + Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1d1d1f] mb-2"
                    >
                      <Mail size={14} className="text-[#86868b]" />
                      อีเมล
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-[16px] text-[#1d1d1f] bg-white outline-none transition-colors focus:border-[#06c] focus:shadow-[0_0_0_3px_rgba(232,89,12,0.1)] placeholder:text-[#c7c7cc] box-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1d1d1f] mb-2"
                    >
                      <Phone size={14} className="text-[#86868b]" />
                      เบอร์โทร
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="08X-XXX-XXXX"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-[16px] text-[#1d1d1f] bg-white outline-none transition-colors focus:border-[#06c] focus:shadow-[0_0_0_3px_rgba(232,89,12,0.1)] placeholder:text-[#c7c7cc] box-border"
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div>
                  <label
                    htmlFor="service"
                    className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1d1d1f] mb-2"
                  >
                    <FileText size={14} className="text-[#86868b]" />
                    บริการที่สนใจ
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-[16px] text-[#1d1d1f] bg-white outline-none cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22%2386868b%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M8%2012l-6-6h12z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center] box-border focus:border-[#06c] focus:shadow-[0_0_0_3px_rgba(232,89,12,0.1)]"
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
                    className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1d1d1f] mb-2"
                  >
                    <MessageSquare size={14} className="text-[#86868b]" />
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="บอกเราเกี่ยวกับโปรเจ็กต์หรือความต้องการของคุณ..."
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-[16px] text-[#1d1d1f] bg-white outline-none resize-y min-h-[120px] leading-relaxed box-border font-[inherit] focus:border-[#06c] focus:shadow-[0_0_0_3px_rgba(232,89,12,0.1)] placeholder:text-[#c7c7cc]"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-full bg-[#1d1d1f] text-white font-medium flex items-center justify-center gap-2 text-[15px] md:text-[16px] border-none cursor-pointer mt-1"
                  style={{
                    background: "linear-gradient(135deg, #06c, #ea580c)",
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
            className="grid grid-cols-1 gap-3"
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
                  className="apple-card flex items-center gap-4 p-4 md:p-6 min-h-[44px] bg-white rounded-[20px] border border-black/[0.06] no-underline cursor-pointer transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0"
                    style={{ background: `${info.color}12` }}
                  >
                    <InfoIcon size={22} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-[#86868b] tracking-[0.04em] uppercase mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f]">
                      {info.value}
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-[#d1d5db] ml-auto" />
                </motion.a>
              );
            })}

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="apple-card p-4 md:p-6 bg-white rounded-[20px] border border-black/[0.06]"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <Clock size={18} className="text-[#06c]" />
                <span className="text-[14px] font-bold text-[#1d1d1f]">
                  เวลาทำการ
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#6e6e73]">จันทร์ - ศุกร์</span>
                  <span className="text-[#1d1d1f] font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#6e6e73]">เสาร์</span>
                  <span className="text-[#1d1d1f] font-semibold">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#6e6e73]">อาทิตย์</span>
                  <span className="text-[#86868b] font-medium">ปิดทำการ</span>
                </div>
              </div>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="apple-card p-4 md:p-6 rounded-[20px] border border-[rgba(232,89,12,0.1)]"
              style={{
                background: "linear-gradient(135deg, rgba(232,89,12,0.04), rgba(232,89,12,0.02))",
              }}
            >
              <div className="flex items-center gap-2 mb-3.5">
                <Sparkles size={18} className="text-[#06c]" />
                <span className="text-[14px] font-bold text-[#1d1d1f]">
                  ทำไมต้องติดต่อเรา
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.75 + i * 0.06 }}
                    className="flex items-center gap-2.5 text-[14px] text-[#1d1d1f]"
                  >
                    <CheckCircle size={16} className="text-[#06c] shrink-0" />
                    {reason}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
