"use client";
import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

export default function Hero() {
  return (
    <section className="bg-white pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        {/* Animated Logo */}
        <div className="flex justify-center mb-8">
          <AnimatedLogo size={1.2} />
        </div>

        {/* Main headline — Apple Education K-12 size */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[44px] sm:text-[64px] md:text-[80px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1d1d1f] mb-6"
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
          className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[640px] mx-auto mb-10 leading-[1.47]"
        >
          เราคือทีมพัฒนาเบื้องหลัง LocalAI Thailand และ CloudAI Thailand — ทั้งสอน workshop
          พัฒนาระบบ AI ขนาดใหญ่ และสร้าง content ด้าน AI สำหรับธุรกิจไทย
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a href="#contact" className="btn-primary">ปรึกษาฟรี</a>
          <a href="#contact" className="btn-outline">Request a Demo</a>
          <a href="#services" className="apple-link">ดูบริการทั้งหมด</a>
        </motion.div>

        {/* 3 Pillars — Apple Education card style */}
        <div className="grid sm:grid-cols-3 gap-6">
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
              className="apple-card p-8 text-center group"
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

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 max-w-[560px] mx-auto py-6 border-t border-b border-[#d2d2d7]/50"
        >
          <p className="text-[17px] text-[#1d1d1f] font-medium italic leading-[1.6]">
            "ไม่มี solution สำเร็จรูปที่เหมาะกับทุกคน
            <br className="hidden sm:block" />
            มีแต่ระบบที่สร้างขึ้นให้พอดีกับธุรกิจคุณ"
          </p>
          <p className="text-[12px] text-[#6e6e73] mt-2 tracking-[0.15em] uppercase">Our Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
}
