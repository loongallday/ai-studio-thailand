"use client";
import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

export default function Hero() {
  return (
    <section className="relative bg-[#fbfbfd] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(41,151,255,0.12) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,86,214,0.10) 0%, transparent 70%)" }}
          animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          {/* Animated Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <AnimatedLogo />
          </div>

          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#06c] text-[13px] font-semibold uppercase tracking-widest mb-3"
          >
            AI STUDIO THAILAND
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[40px] sm:text-[56px] md:text-[80px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1d1d1f] mb-2"
          >
            สอน. สร้าง. ให้คำปรึกษา.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-[28px] sm:text-[40px] md:text-[52px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#6e6e73] mb-6"
          >
            ด้าน AI
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[16px] sm:text-[19px] text-[#6e6e73] max-w-[600px] mx-auto mb-8 leading-[1.55]"
          >
            เราคือทีมพัฒนาเบื้องหลัง LocalAI Thailand และ CloudAI Thailand — ทั้งสอน workshop
            พัฒนาระบบ AI ขนาดใหญ่ และสร้าง content ด้าน AI สำหรับธุรกิจไทย
          </motion.p>

          {/* Philosophy quote */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="max-w-[560px] mx-auto mb-10 py-5 border-t border-b border-black/[0.06]"
          >
            <p className="text-[15px] sm:text-[17px] text-[#1d1d1f] font-medium italic leading-[1.6] text-center">
              "ไม่มี solution สำเร็จรูปที่เหมาะกับทุกคน
              <br className="hidden sm:block" />
              มีแต่ระบบที่สร้างขึ้นให้พอดีกับธุรกิจคุณ"
            </p>
            <p className="text-[12px] text-[#6e6e73] text-center mt-2 tracking-wider uppercase">Our Philosophy</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14"
          >
            <a href="#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
            <a href="#contact" className="apple-btn apple-btn-outline">Request a Demo</a>
            <a href="#services" className="apple-link">ดูบริการทั้งหมด</a>
          </motion.div>

          {/* 3 Pillars */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[#fbfbfd] to-transparent z-10 pointer-events-none sm:hidden" />
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#fbfbfd] to-transparent z-10 pointer-events-none sm:hidden" />
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible scrollbar-hide">
              {[
                {
                  emoji: "🎓",
                  title: "Workshop & Training",
                  desc: "สอน AI ตั้งแต่พื้นฐานถึงขั้นสูง Workshop 1-3 วัน สำหรับทีม",
                  link: "#workshop",
                },
                {
                  emoji: "⚡",
                  title: "Custom AI Development",
                  desc: "พัฒนาระบบ AI ขนาดใหญ่ ทั้ง On-Premise และ Cloud ออกแบบเฉพาะธุรกิจคุณ",
                  link: "#development",
                },
                {
                  emoji: "✨",
                  title: "AI Content Creation",
                  desc: "สร้าง content เกี่ยวกับ AI — Blog, Social Media, Video สำหรับธุรกิจไทย",
                  link: "#creator",
                },
              ].map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="apple-card p-5 sm:p-8 text-center group min-w-[260px] shrink-0 snap-start sm:min-w-0 sm:shrink"
                >
                  <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{item.emoji}</span>
                  <h3 className="text-[14px] sm:text-[17px] font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#06c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-[#6e6e73] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-16 flex justify-center gap-8 sm:gap-16 md:gap-24"
          >
            {[
              { value: "50+", label: "Workshop จัดแล้ว" },
              { value: "30+", label: "AI Projects" },
              { value: "500+", label: "ผู้เรียน" },
            ].map((stat, i, arr) => (
              <motion.div
                key={stat.label}
                className={`text-center ${i < arr.length - 1 ? "sm:border-r sm:border-black/[0.08] sm:pr-12 md:pr-20" : ""}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.1 }}
              >
                <p className="text-[18px] sm:text-[28px] font-semibold text-[#1d1d1f] tracking-tight">{stat.value}</p>
                <p className="text-[10px] sm:text-[12px] text-[#6e6e73] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
