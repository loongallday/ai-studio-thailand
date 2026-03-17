"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  PenTool,
  Play,
  Pause,
  Youtube,
  Mic,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  Clock,
  Music,
  SkipForward,
  SkipBack,
  Volume2,
  Send,
  Camera,
  FileText,
  Mail,
  Calendar,
  CheckCircle,
  Users,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Waveform bars for Podcast card ─── */
function WaveformBars({ playing }: { playing: boolean }) {
  return (
    <div className="flex items-end gap-0.5 h-8">
      {Array.from({ length: 40 }).map((_, i) => {
        const h = Math.random() * 24 + 8;
        return (
          <motion.div
            key={i}
            animate={
              playing
                ? { height: [h, Math.random() * 28 + 4, h], opacity: [0.6, 1, 0.6] }
                : { height: h, opacity: 0.35 }
            }
            transition={
              playing
                ? { duration: 0.4 + Math.random() * 0.4, repeat: Infinity, repeatType: "mirror" }
                : { duration: 0.3 }
            }
            className="w-[3px] rounded-sm bg-[#06c] min-h-1"
          />
        );
      })}
    </div>
  );
}

/* ─── LINE Chat Bubble ─── */
function LINEBubble({
  text,
  time,
  isImage,
}: {
  text: string;
  time: string;
  isImage?: boolean;
}) {
  return (
    <div className="flex gap-2 mb-2">
      <div className="w-8 h-8 rounded-full bg-[#06c] flex items-center justify-center shrink-0">
        <span className="text-white text-[11px] font-bold">AI</span>
      </div>
      <div>
        <div
          className={`rounded-[0_16px_16px_16px] max-w-[260px] overflow-hidden ${
            isImage ? "bg-transparent p-0" : "bg-[#e8f5e9] px-3.5 py-2.5"
          }`}
        >
          {isImage ? (
            <div className="w-[220px] h-[120px] rounded-xl bg-gradient-to-br from-[#06c] to-[#5ac8fa] flex items-center justify-center text-white text-[13px] font-semibold">
              AI Workshop 2026
            </div>
          ) : (
            <p className="text-[13px] text-[#1d1d1f] leading-relaxed m-0">
              {text}
            </p>
          )}
        </div>
        <span className="text-[10px] text-[#86868b] mt-0.5 block">
          {time}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Creator() {
  const [podcastPlaying, setPodcastPlaying] = useState(false);

  return (
    <section
      id="creator"
      className="bg-white py-[clamp(60px,10vw,120px)] px-4"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* ════════════════════════════════════════════
            Section 1: Hero
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,102,204,0.06)] mb-5">
            <PenTool size={14} className="text-[#06c]" />
            <span className="text-[13px] font-semibold text-[#06c]">
              AI Creator Studio
            </span>
          </div>
          <h2 className="text-[clamp(36px,6vw,56px)] font-bold text-[#1d1d1f] leading-[1.1] mb-5 tracking-tight">
            AI Content Creation
          </h2>
          <p className="text-[clamp(17px,2.5vw,21px)] text-[#6e6e73] max-w-[600px] mx-auto leading-relaxed">
            เราสร้าง content ที่ทำให้ AI เข้าถึงได้สำหรับทุกคน
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════
            Section 2: สิ่งที่เราสร้าง — 5 Portfolio Cards
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-sm font-semibold text-[#06c] tracking-widest uppercase mb-3 text-center">
            Our Content
          </h3>
          <h3 className="text-[clamp(28px,4vw,40px)] font-bold text-[#1d1d1f] text-center mb-14 tracking-tight">
            สิ่งที่เราสร้าง
          </h3>

          {/* All 5 cards in one horizontal scroll on mobile, grid on desktop */}
          <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3">

            {/* ── Card 1: Blog Card (Medium-style) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="apple-card min-w-[280px] shrink-0 snap-start md:min-w-0 md:shrink bg-white rounded-3xl border border-black/[0.06] overflow-hidden cursor-pointer"
            >
              {/* Article header image placeholder */}
              <div className="h-[180px] bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] flex items-center justify-center relative">
                <PenTool size={48} className="text-[#86868b] opacity-30" />
                <div className="absolute top-4 left-4 bg-[#06c] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  AI Automation
                </div>
              </div>
              <div className="p-6 pb-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#06c] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">AI</span>
                  </div>
                  <span className="text-[13px] font-semibold text-[#1d1d1f]">
                    AI Studio Thailand
                  </span>
                  <span className="text-xs text-[#86868b]">
                    14 มี.ค. 2026
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#1d1d1f] leading-snug mb-2.5">
                  AI Automation คืออะไร? เหมาะกับธุรกิจไหน?
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-4 line-clamp-3">
                  หลายคนเคยได้ยินคำว่า AI Automation แต่ยังไม่แน่ใจว่ามันช่วยธุรกิจได้จริงหรือไม่
                  บทความนี้จะพาคุณไปรู้จักกับ AI Automation ตั้งแต่พื้นฐาน จนถึงการประยุกต์ใช้จริงในธุรกิจ SME ไทย...
                </p>
                <div className="flex items-center justify-between pt-3.5 border-t border-black/5">
                  <div className="flex items-center gap-3 text-xs text-[#86868b]">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> 8 min read
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={13} /> 412
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Bookmark size={16} className="text-[#86868b] cursor-pointer" />
                    <Share2 size={16} className="text-[#86868b] cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Card 2: TikTok/Reels Card (dark vertical) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="apple-card min-w-[280px] shrink-0 snap-start md:min-w-0 md:shrink bg-black rounded-3xl overflow-hidden cursor-pointer relative aspect-[9/16] max-w-[200px] md:max-w-[240px] flex flex-col justify-end"
            >
              {/* Simulated video background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-[1]" />
              {/* Centered play button with pulse */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-[10px] flex items-center justify-center z-[2]"
              >
                <Play size={28} className="text-white ml-0.5" />
              </motion.div>
              {/* TikTok badge */}
              <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-white z-[2]">
                TikTok / Reels
              </div>
              {/* Right-side engagement buttons */}
              <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-[2]">
                {[
                  { icon: Heart, label: "8.2K" },
                  { icon: MessageCircle, label: "342" },
                  { icon: Share2, label: "1.2K" },
                  { icon: Bookmark, label: "589" },
                ].map((btn) => {
                  const BtnIcon = btn.icon;
                  return (
                    <div
                      key={btn.label}
                      className="flex flex-col items-center gap-0.5"
                    >
                      <BtnIcon size={24} className="text-white" />
                      <span className="text-[11px] text-white font-semibold">
                        {btn.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Bottom overlay info */}
              <div className="relative z-[2] p-5">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#06c] flex items-center justify-center border-2 border-white">
                    <span className="text-white text-[9px] font-bold">AI</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    @aistudiothailand
                  </span>
                </div>
                <p className="text-sm text-white leading-normal mb-2.5">
                  5 AI Tools ที่ช่วยให้ธุรกิจ SME ประหยัดเวลา 10 ชม./สัปดาห์
                </p>
                <div className="flex items-center gap-1 text-xs text-white/70">
                  <Music size={12} />
                  <span>original sound - aistudiothailand</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-white/60">
                  <Eye size={13} />
                  <span className="font-semibold">125K views</span>
                </div>
              </div>
            </motion.div>

            {/* ── Card 3: YouTube Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="apple-card min-w-[280px] shrink-0 snap-start md:min-w-0 md:shrink bg-white rounded-3xl border border-black/[0.06] overflow-hidden cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-gradient-to-br from-[#1d1d1f] to-[#424245] relative flex items-center justify-center">
                <div className="w-[52px] h-9 rounded-lg bg-red-600/90 flex items-center justify-center">
                  <Play size={18} className="text-white ml-0.5" />
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded">
                  18:42
                </div>
              </div>
              <div className="px-[18px] pt-4 pb-5">
                <h4 className="text-[15px] font-semibold text-[#1d1d1f] leading-snug mb-2.5 line-clamp-2">
                  สอน n8n Automation สำหรับธุรกิจ SME ไทย [ฉบับเต็ม]
                </h4>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                    <Youtube size={12} className="text-white" />
                  </div>
                  <span className="text-[13px] font-medium text-[#1d1d1f]">
                    AI Studio Thailand
                  </span>
                  <CheckCircle size={13} className="text-[#86868b]" />
                </div>
                <div className="text-xs text-[#86868b]">
                  89K views &middot; 2 สัปดาห์ที่แล้ว
                </div>
              </div>
            </motion.div>

            {/* ── Card 4: Podcast Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="apple-card min-w-[280px] shrink-0 snap-start md:min-w-0 md:shrink bg-white rounded-3xl border border-black/[0.06] overflow-hidden flex flex-col"
            >
              {/* Podcast cover */}
              <div className="h-[120px] bg-gradient-to-br from-[#06c] to-[#5ac8fa] flex items-center justify-center gap-3 px-5">
                <Mic size={32} className="text-white" />
                <div>
                  <div className="text-base font-bold text-white">
                    AI Talk TH
                  </div>
                  <div className="text-xs text-white/80">
                    Podcast by AI Studio
                  </div>
                </div>
              </div>
              <div className="px-[18px] pt-[18px] pb-5 flex-1 flex flex-col">
                <div className="text-[11px] font-semibold text-[#06c] mb-1.5">
                  EP.48 &middot; 45 นาที
                </div>
                <h4 className="text-[15px] font-semibold text-[#1d1d1f] leading-snug mb-3.5">
                  Local AI กับอนาคตธุรกิจไทย
                </h4>
                {/* Waveform */}
                <div className="mb-3.5 overflow-hidden rounded">
                  <WaveformBars playing={podcastPlaying} />
                </div>
                {/* Player controls */}
                <div className="flex items-center justify-center gap-4 mt-auto">
                  <SkipBack size={18} className="text-[#86868b] cursor-pointer" />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPodcastPlaying(!podcastPlaying)}
                    className="w-10 h-10 rounded-full bg-[#06c] border-none flex items-center justify-center cursor-pointer"
                  >
                    {podcastPlaying ? (
                      <Pause size={18} className="text-white" />
                    ) : (
                      <Play size={18} className="text-white ml-0.5" />
                    )}
                  </motion.button>
                  <SkipForward size={18} className="text-[#86868b] cursor-pointer" />
                  <Volume2 size={16} className="text-[#86868b] ml-2" />
                </div>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mt-3 text-[10px] text-[#86868b]">
                  <span>12:34</span>
                  <div className="flex-1 h-[3px] bg-black/[0.06] rounded-sm relative">
                    <div className="w-[28%] h-full bg-[#06c] rounded-sm" />
                  </div>
                  <span>45:00</span>
                </div>
              </div>
            </motion.div>

            {/* ── Card 5: LINE OA Broadcast Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="apple-card min-w-[280px] shrink-0 snap-start md:min-w-0 md:shrink bg-white rounded-3xl border border-black/[0.06] overflow-hidden flex flex-col"
            >
              {/* LINE header */}
              <div className="bg-[#06c] px-[18px] py-3.5 flex items-center gap-2.5">
                <Send size={16} className="text-white" />
                <div>
                  <div className="text-sm font-bold text-white">
                    AI Studio Thailand
                  </div>
                  <div className="text-[11px] text-white/80">
                    LINE Official Account
                  </div>
                </div>
              </div>
              {/* Chat area */}
              <div className="flex-1 px-3.5 py-4 bg-[#d9e7f5] flex flex-col gap-1">
                <LINEBubble
                  text="สวัสดีครับ! AI Studio มีอัพเดทใหม่ให้คุณ"
                  time="10:30"
                />
                <LINEBubble
                  text=""
                  time="10:30"
                  isImage
                />
                <LINEBubble
                  text="Workshop AI Automation สำหรับ SME เปิดรับสมัครแล้ว! Early bird ลด 30% ถึงสิ้นเดือนนี้"
                  time="10:31"
                />
                <LINEBubble
                  text="กดลิงก์ด้านล่างเพื่อสมัครเลย"
                  time="10:31"
                />
              </div>
              {/* Bottom bar */}
              <div className="px-3.5 py-3 border-t border-black/[0.06] flex items-center justify-between bg-white">
                <span className="text-[11px] text-[#86868b]">
                  Broadcast &middot; 12K ผู้รับ
                </span>
                <span className="text-[11px] font-semibold text-[#06c] flex items-center gap-1">
                  Open rate 68% <TrendingUp size={12} />
                </span>
              </div>
            </motion.div>
          </div>
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 md:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 md:hidden" />
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            Section 3: สร้าง Content ให้ธุรกิจคุณ — Service Cards
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h3 className="text-sm font-semibold text-[#06c] tracking-widest uppercase mb-3 text-center">
            Content Services
          </h3>
          <h3 className="text-[clamp(28px,4vw,40px)] font-bold text-[#1d1d1f] text-center mb-4 tracking-tight">
            สร้าง Content ให้ธุรกิจคุณ
          </h3>
          <p className="text-[17px] text-[#6e6e73] text-center max-w-[520px] mx-auto mb-12 leading-relaxed">
            เรารับผลิตคอนเทนต์เกี่ยวกับ AI และเทคโนโลยี
            ครบทุกรูปแบบสำหรับธุรกิจของคุณ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AI Blog Writing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="apple-card bg-white rounded-2xl py-8 px-6 border border-black/[0.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[rgba(0,102,204,0.08)] flex items-center justify-center mb-[18px]">
                <FileText size={22} className="text-[#06c]" />
              </div>
              <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">
                AI Blog Writing
              </h4>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-[18px]">
                บทความคุณภาพสูงเกี่ยวกับ AI สำหรับเว็บไซต์ของคุณ SEO-optimized
              </p>
              <div className="flex flex-col gap-1.5 mb-[18px] text-[13px] text-[#1d1d1f]">
                {["4 บทความ/เดือน", "SEO keyword research", "รูปประกอบ AI-generated"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-[#06c] shrink-0" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="text-[13px] font-semibold text-[#06c] bg-[rgba(0,102,204,0.06)] px-3 py-1.5 rounded-lg inline-block">
                เริ่มต้น 9,900/เดือน
              </div>
            </motion.div>

            {/* Social Media Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="apple-card bg-white rounded-2xl py-8 px-6 border border-black/[0.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[rgba(0,102,204,0.08)] flex items-center justify-center mb-[18px]">
                <Camera size={22} className="text-[#06c]" />
              </div>
              <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">
                Social Media
              </h4>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-[18px]">
                ดูแล Social Media ครบทุกแพลตฟอร์ม TikTok, IG, Facebook
              </p>
              <div className="flex flex-col gap-1.5 mb-[18px] text-[13px] text-[#1d1d1f]">
                {["12 โพสต์/เดือน", "Content calendar", "Engagement report"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-[#06c] shrink-0" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="text-[13px] font-semibold text-[#06c] bg-[rgba(0,102,204,0.06)] px-3 py-1.5 rounded-lg inline-block">
                เริ่มต้น 14,900/เดือน
              </div>
            </motion.div>

            {/* Video Production */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="apple-card bg-white rounded-2xl py-8 px-6 border border-black/[0.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[rgba(0,102,204,0.08)] flex items-center justify-center mb-[18px]">
                <Play size={22} className="text-[#06c]" />
              </div>
              <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">
                Video Production
              </h4>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-[18px]">
                ผลิตวิดีโอ Tutorial, Demo, Explainer สำหรับธุรกิจ AI
              </p>
              <div className="flex flex-col gap-1.5 mb-[18px] text-[13px] text-[#1d1d1f]">
                {["2 วิดีโอ/เดือน", "Script + Storyboard", "Editing + Subtitle"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-[#06c] shrink-0" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="text-[13px] font-semibold text-[#06c] bg-[rgba(0,102,204,0.06)] px-3 py-1.5 rounded-lg inline-block">
                เริ่มต้น 19,900/เดือน
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="apple-card bg-white rounded-2xl py-8 px-6 border border-black/[0.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[rgba(0,102,204,0.08)] flex items-center justify-center mb-[18px]">
                <Mail size={22} className="text-[#06c]" />
              </div>
              <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">
                Newsletter
              </h4>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-[18px]">
                Email newsletter รายสัปดาห์ สรุป AI News ให้ลูกค้าของคุณ
              </p>
              <div className="flex flex-col gap-1.5 mb-[18px] text-[13px] text-[#1d1d1f]">
                {["4 ฉบับ/เดือน", "Template design", "A/B testing subject"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-[#06c] shrink-0" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="text-[13px] font-semibold text-[#06c] bg-[rgba(0,102,204,0.06)] px-3 py-1.5 rounded-lg inline-block">
                เริ่มต้น 7,900/เดือน
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            Section 4: ตัวเลข — Stats
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 bg-[#f5f5f7] rounded-[28px] py-14 px-8"
        >
          <h3 className="text-[clamp(28px,4vw,40px)] font-bold text-[#1d1d1f] text-center mb-12 tracking-tight">
            ตัวเลข
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 100, suffix: "+", label: "บทความ", icon: FileText },
              { value: 50, suffix: "K+", label: "ผู้ติดตาม", icon: Users },
              { value: 200, suffix: "+", label: "วิดีโอ", icon: Play },
              { value: 500, suffix: "+", label: "Workshop ผู้เข้าร่วม", icon: Calendar },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-center py-8 px-4 bg-white rounded-[20px] border border-black/[0.04]"
                >
                  <StatIcon size={24} className="text-[#06c] mb-3.5 mx-auto" />
                  <div className="text-[clamp(32px,4vw,44px)] font-bold text-[#1d1d1f] leading-[1.1] mb-1.5" style={{ fontFeatureSettings: '"tnum"' }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-[#6e6e73] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            Section 5: ติดตามเรา — Social Links
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h3 className="text-[clamp(28px,4vw,40px)] font-bold text-[#1d1d1f] text-center mb-12 tracking-tight">
            ติดตามเรา
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                name: "TikTok",
                handle: "@aistudiothailand",
                followers: "25K followers",
                bgClass: "bg-gradient-to-br from-[#1d1d1f] to-[#424245]",
                icon: Play,
                accentColor: "#fe2c55",
              },
              {
                name: "Instagram",
                handle: "@aistudio.th",
                followers: "12K followers",
                bgClass: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
                icon: Camera,
                accentColor: "#833AB4",
              },
              {
                name: "YouTube",
                handle: "AI Studio Thailand",
                followers: "8K subscribers",
                bgClass: "bg-gradient-to-br from-red-600 to-red-500",
                icon: Youtube,
                accentColor: "#ff0000",
              },
              {
                name: "LINE OA",
                handle: "@aistudio-th",
                followers: "5K friends",
                bgClass: "bg-gradient-to-br from-[#06c] to-[#5ac8fa]",
                icon: Send,
                accentColor: "#06c200",
              },
            ].map((social, i) => {
              const SocialIcon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${social.bgClass} rounded-3xl py-8 px-6 no-underline flex flex-col items-center text-center cursor-pointer relative overflow-hidden border-l-4`}
                  style={{ borderLeftColor: social.accentColor }}
                >
                  <div className="w-[52px] h-[52px] rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <SocialIcon size={24} className="text-white" />
                  </div>
                  <div className="text-lg font-bold text-white mb-1">
                    {social.name}
                  </div>
                  <div className="text-sm text-white/80 mb-2">
                    {social.handle}
                  </div>
                  <div className="text-[13px] text-white/70 font-medium">
                    {social.followers}
                  </div>
                  <ExternalLink
                    size={14}
                    className="absolute top-4 right-4 text-white/50"
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            Section 6: CTA
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center bg-gradient-to-br from-[#06c] via-[#2997ff] to-[#5ac8fa] rounded-[32px] py-16 px-8 relative overflow-hidden"
        >
          {/* Decorative radial gradients */}
          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-white/[0.08]" />
          <div className="absolute -bottom-[60px] -left-5 w-40 h-40 rounded-full bg-white/[0.06]" />
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(88,86,214,0.15) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(175,82,222,0.12) 0%, transparent 70%)" }} />
          <div className="relative z-[1]">
            <h3 className="text-[clamp(28px,4vw,40px)] font-bold text-white mb-4 leading-tight">
              พร้อมสร้าง Content
              <br />
              ให้ธุรกิจของคุณ?
            </h3>
            <p className="text-[17px] text-white/85 max-w-[480px] mx-auto mb-8 leading-relaxed">
              ไม่ว่าจะจ้างเราสร้าง content หรือติดตามเราเพื่อเรียนรู้ AI
              เราพร้อมช่วยคุณ
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 py-4 px-8 bg-white text-[#06c] rounded-[14px] text-base font-semibold no-underline cursor-pointer"
              >
                จ้างเราสร้าง Content <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 py-4 px-8 bg-white/15 backdrop-blur-md text-white rounded-[14px] text-base font-semibold no-underline cursor-pointer border border-white/25"
              >
                ติดตามเรา
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
