"use client";
import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

export default function Hero() {
  return (
    <section className="bg-white pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Animated Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <AnimatedLogo />
        </div>

        {/* Main headline — Apple Education K-12 size */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[28px] sm:text-[64px] md:text-[80px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1d1d1f] mb-6"
        >
          สอน. สร้าง. ให้คำปรึกษา.
          <br />
          <span className="text-[#6e6e73]">ด้าน AI</span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[15px] sm:text-[21px] text-[#6e6e73] max-w-[640px] mx-auto mb-10 leading-[1.47]"
        >
          เราคือทีมพัฒนาเบื้องหลัง LocalAI Thailand และ CloudAI Thailand — ทั้งสอน workshop
          พัฒนาระบบ AI ขนาดใหญ่ และสร้าง content ด้าน AI สำหรับธุรกิจไทย
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0"
        >
          <a href="#contact" className="btn-primary w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">ปรึกษาฟรี</a>
          <a href="#contact" className="btn-outline w-full sm:w-auto shadow-[0_0_20px_rgba(0,102,204,0.15)] hover:shadow-[0_0_30px_rgba(0,102,204,0.25)] transition-shadow">Request a Demo</a>
          <a href="#services" className="apple-link">ดูบริการทั้งหมด</a>
        </motion.div>

        {/* 3 Pillars — Apple Education card style */}
        <div className="relative">
          {/* Gradient fade edges for mobile carousel */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none sm:hidden" />
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none sm:hidden" />
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
              transition={{ delay: 0.7 + i * 0.1 }}
              className="apple-card p-5 sm:p-8 text-center group min-w-[260px] shrink-0 snap-start sm:min-w-0 sm:shrink rounded-2xl border border-black/[0.04] hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{item.emoji}</span>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#06c] transition-colors">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>
        </div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-12 sm:mt-20 max-w-[560px] mx-auto py-5 sm:py-6 border-t border-b border-[#d2d2d7]/50"
        >
          <span className="text-[32px] sm:text-[40px] leading-none text-[#86868b] font-serif block mb-2">&ldquo;</span>
          <p className="text-[14px] sm:text-[17px] text-[#1d1d1f] font-medium italic leading-[1.6]">
            ไม่มี solution สำเร็จรูปที่เหมาะกับทุกคน
            <br className="hidden sm:block" />
            มีแต่ระบบที่สร้างขึ้นให้พอดีกับธุรกิจคุณ
          </p>
          <p className="text-[12px] text-[#86868b] mt-2 tracking-[0.15em] uppercase">Our Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
}
