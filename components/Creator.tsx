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
    <div style={{ display: "flex", alignItems: "end", gap: 2, height: 32 }}>
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
            style={{
              width: 3,
              borderRadius: 2,
              background: "#06c",
              minHeight: 4,
            }}
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
    <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#06c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>AI</span>
      </div>
      <div>
        <div
          style={{
            background: isImage ? "transparent" : "#e8f5e9",
            borderRadius: "0 16px 16px 16px",
            padding: isImage ? 0 : "10px 14px",
            maxWidth: 260,
            overflow: "hidden",
          }}
        >
          {isImage ? (
            <div
              style={{
                width: 220,
                height: 120,
                borderRadius: 12,
                background: "linear-gradient(135deg, #06c 0%, #5ac8fa 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              AI Workshop 2026
            </div>
          ) : (
            <p style={{ fontSize: 13, color: "#1d1d1f", lineHeight: 1.5, margin: 0 }}>
              {text}
            </p>
          )}
        </div>
        <span style={{ fontSize: 10, color: "#86868b", marginTop: 2, display: "block" }}>
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
      style={{
        background: "#fff",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* ════════════════════════════════════════════
            Section 1: Hero
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: "center", marginBottom: 100 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(0, 102, 204, 0.06)",
              marginBottom: 20,
            }}
          >
            <PenTool size={14} style={{ color: "#06c" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#06c" }}>
              AI Creator Studio
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            AI Content Creation
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 2.5vw, 21px)",
              color: "#6e6e73",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
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
          style={{ marginBottom: 100 }}
        >
          <h3
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#06c",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Our Content
          </h3>
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#1d1d1f",
              textAlign: "center",
              marginBottom: 56,
              letterSpacing: "-0.01em",
            }}
          >
            สิ่งที่เราสร้าง
          </h3>

          {/* Row 1: Blog + TikTok */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 24,
            }}
            className="portfolio-row"
          >
            {/* ── Blog Card (Medium-style) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="apple-card"
              style={{
                background: "#fff",
                borderRadius: 24,
                border: "1px solid rgba(0,0,0,0.06)",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Article header image placeholder */}
              <div
                style={{
                  height: 180,
                  background: "linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <PenTool size={48} style={{ color: "#86868b", opacity: 0.3 }} />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "#06c",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 8,
                  }}
                >
                  AI Automation
                </div>
              </div>
              <div style={{ padding: "24px 28px 28px" }}>
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
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "#06c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>AI</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>
                    AI Studio Thailand
                  </span>
                  <span style={{ fontSize: 12, color: "#86868b" }}>
                    14 มี.ค. 2026
                  </span>
                </div>
                <h4
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    lineHeight: 1.35,
                    marginBottom: 10,
                  }}
                >
                  AI Automation คืออะไร? เหมาะกับธุรกิจไหน?
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "#6e6e73",
                    lineHeight: 1.65,
                    marginBottom: 16,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  หลายคนเคยได้ยินคำว่า AI Automation แต่ยังไม่แน่ใจว่ามันช่วยธุรกิจได้จริงหรือไม่
                  บทความนี้จะพาคุณไปรู้จักกับ AI Automation ตั้งแต่พื้นฐาน จนถึงการประยุกต์ใช้จริงในธุรกิจ SME ไทย...
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 14,
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 12,
                      color: "#86868b",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Clock size={13} /> 8 min read
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Heart size={13} /> 412
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Bookmark size={16} style={{ color: "#86868b", cursor: "pointer" }} />
                    <Share2 size={16} style={{ color: "#86868b", cursor: "pointer" }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── TikTok/Reels Card (dark vertical) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="apple-card"
              style={{
                background: "#000",
                borderRadius: 24,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                minHeight: 420,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {/* Simulated video background gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)",
                  zIndex: 1,
                }}
              />
              {/* Centered play button */}
              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <Play size={28} style={{ color: "#fff", marginLeft: 3 }} />
              </div>
              {/* TikTok badge */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  padding: "4px 10px",
                  borderRadius: 8,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  zIndex: 2,
                }}
              >
                TikTok / Reels
              </div>
              {/* Right-side engagement buttons */}
              <div
                style={{
                  position: "absolute",
                  right: 16,
                  bottom: 100,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                  zIndex: 2,
                }}
              >
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
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <BtnIcon size={24} style={{ color: "#fff" }} />
                      <span style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>
                        {btn.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Bottom overlay info */}
              <div style={{ position: "relative", zIndex: 2, padding: "24px 20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#06c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #fff",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>AI</span>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
                    @aistudiothailand
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "#fff", lineHeight: 1.5, marginBottom: 10 }}>
                  5 AI Tools ที่ช่วยให้ธุรกิจ SME ประหยัดเวลา 10 ชม./สัปดาห์
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <Music size={12} />
                  <span>original sound - aistudiothailand</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 8,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <Eye size={13} />
                  <span style={{ fontWeight: 600 }}>125K views</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: YouTube + Podcast + LINE OA */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 24,
            }}
            className="portfolio-row-3"
          >
            {/* ── YouTube Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="apple-card"
              style={{
                background: "#fff",
                borderRadius: 24,
                border: "1px solid rgba(0,0,0,0.06)",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  height: 160,
                  background: "linear-gradient(135deg, #1d1d1f 0%, #424245 100%)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(255,0,0,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Play size={18} style={{ color: "#fff", marginLeft: 2 }} />
                </div>
                {/* Duration badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.8)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  18:42
                </div>
              </div>
              <div style={{ padding: "16px 18px 20px" }}>
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#1d1d1f",
                    lineHeight: 1.4,
                    marginBottom: 10,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  สอน n8n Automation สำหรับธุรกิจ SME ไทย [ฉบับเต็ม]
                </h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#dc2626",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Youtube size={12} style={{ color: "#fff" }} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#1d1d1f" }}>
                    AI Studio Thailand
                  </span>
                  <CheckCircle
                    size={13}
                    style={{ color: "#86868b" }}
                  />
                </div>
                <div style={{ fontSize: 12, color: "#86868b" }}>
                  89K views &middot; 2 สัปดาห์ที่แล้ว
                </div>
              </div>
            </motion.div>

            {/* ── Podcast Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
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
              {/* Podcast cover */}
              <div
                style={{
                  height: 120,
                  background: "linear-gradient(135deg, #06c 0%, #5ac8fa 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  padding: "0 20px",
                }}
              >
                <Mic size={32} style={{ color: "#fff" }} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>
                    AI Talk TH
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>
                    Podcast by AI Studio
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "18px 18px 20px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#06c",
                    marginBottom: 6,
                  }}
                >
                  EP.48 &middot; 45 นาที
                </div>
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#1d1d1f",
                    lineHeight: 1.4,
                    marginBottom: 14,
                  }}
                >
                  Local AI กับอนาคตธุรกิจไทย
                </h4>
                {/* Waveform */}
                <div style={{ marginBottom: 14, overflow: "hidden", borderRadius: 4 }}>
                  <WaveformBars playing={podcastPlaying} />
                </div>
                {/* Player controls */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    marginTop: "auto",
                  }}
                >
                  <SkipBack size={18} style={{ color: "#86868b", cursor: "pointer" }} />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPodcastPlaying(!podcastPlaying)}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "#06c",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    {podcastPlaying ? (
                      <Pause size={18} style={{ color: "#fff" }} />
                    ) : (
                      <Play size={18} style={{ color: "#fff", marginLeft: 2 }} />
                    )}
                  </motion.button>
                  <SkipForward size={18} style={{ color: "#86868b", cursor: "pointer" }} />
                  <Volume2 size={16} style={{ color: "#86868b", marginLeft: 8 }} />
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 12,
                    fontSize: 10,
                    color: "#86868b",
                  }}
                >
                  <span>12:34</span>
                  <div
                    style={{
                      flex: 1,
                      height: 3,
                      background: "rgba(0,0,0,0.06)",
                      borderRadius: 2,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "28%",
                        height: "100%",
                        background: "#06c",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <span>45:00</span>
                </div>
              </div>
            </motion.div>

            {/* ── LINE OA Broadcast Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
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
              {/* LINE header */}
              <div
                style={{
                  background: "#06c",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Send size={16} style={{ color: "#fff" }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
                    AI Studio Thailand
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>
                    LINE Official Account
                  </div>
                </div>
              </div>
              {/* Chat area */}
              <div
                style={{
                  flex: 1,
                  padding: "16px 14px",
                  background: "#d9e7f5",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
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
              <div
                style={{
                  padding: "12px 14px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#fff",
                }}
              >
                <span style={{ fontSize: 11, color: "#86868b" }}>
                  Broadcast &middot; 12K ผู้รับ
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#06c",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  Open rate 68% <TrendingUp size={12} />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            Section 3: สร้าง Content ให้ธุรกิจคุณ
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 100 }}
        >
          <h3
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#06c",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Content Services
          </h3>
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#1d1d1f",
              textAlign: "center",
              marginBottom: 16,
              letterSpacing: "-0.01em",
            }}
          >
            สร้าง Content ให้ธุรกิจคุณ
          </h3>
          <p
            style={{
              fontSize: 17,
              color: "#6e6e73",
              textAlign: "center",
              maxWidth: 520,
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            เรารับผลิตคอนเทนต์เกี่ยวกับ AI และเทคโนโลยี
            ครบทุกรูปแบบสำหรับธุรกิจของคุณ
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
            className="services-grid"
          >
            {/* AI Blog Writing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="apple-card"
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "32px 24px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "rgba(0, 102, 204, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <FileText size={22} style={{ color: "#06c" }} />
              </div>
              <h4
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: 8,
                }}
              >
                AI Blog Writing
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "#6e6e73",
                  lineHeight: 1.6,
                  marginBottom: 18,
                }}
              >
                บทความคุณภาพสูงเกี่ยวกับ AI สำหรับเว็บไซต์ของคุณ SEO-optimized
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  marginBottom: 18,
                  fontSize: 13,
                  color: "#1d1d1f",
                }}
              >
                {["4 บทความ/เดือน", "SEO keyword research", "รูปประกอบ AI-generated"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <CheckCircle size={14} style={{ color: "#06c", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#06c",
                  background: "rgba(0, 102, 204, 0.06)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  display: "inline-block",
                }}
              >
                เริ่มต้น 9,900/เดือน
              </div>
            </motion.div>

            {/* Social Media Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="apple-card"
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "32px 24px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "rgba(0, 102, 204, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Camera size={22} style={{ color: "#06c" }} />
              </div>
              <h4
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: 8,
                }}
              >
                Social Media
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "#6e6e73",
                  lineHeight: 1.6,
                  marginBottom: 18,
                }}
              >
                ดูแล Social Media ครบทุกแพลตฟอร์ม TikTok, IG, Facebook
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  marginBottom: 18,
                  fontSize: 13,
                  color: "#1d1d1f",
                }}
              >
                {["12 โพสต์/เดือน", "Content calendar", "Engagement report"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <CheckCircle size={14} style={{ color: "#06c", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#06c",
                  background: "rgba(0, 102, 204, 0.06)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  display: "inline-block",
                }}
              >
                เริ่มต้น 14,900/เดือน
              </div>
            </motion.div>

            {/* Video Production */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="apple-card"
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "32px 24px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "rgba(0, 102, 204, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Play size={22} style={{ color: "#06c" }} />
              </div>
              <h4
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: 8,
                }}
              >
                Video Production
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "#6e6e73",
                  lineHeight: 1.6,
                  marginBottom: 18,
                }}
              >
                ผลิตวิดีโอ Tutorial, Demo, Explainer สำหรับธุรกิจ AI
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  marginBottom: 18,
                  fontSize: 13,
                  color: "#1d1d1f",
                }}
              >
                {["2 วิดีโอ/เดือน", "Script + Storyboard", "Editing + Subtitle"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <CheckCircle size={14} style={{ color: "#06c", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#06c",
                  background: "rgba(0, 102, 204, 0.06)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  display: "inline-block",
                }}
              >
                เริ่มต้น 19,900/เดือน
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="apple-card"
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "32px 24px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "rgba(0, 102, 204, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Mail size={22} style={{ color: "#06c" }} />
              </div>
              <h4
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: 8,
                }}
              >
                Newsletter
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "#6e6e73",
                  lineHeight: 1.6,
                  marginBottom: 18,
                }}
              >
                Email newsletter รายสัปดาห์ สรุป AI News ให้ลูกค้าของคุณ
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  marginBottom: 18,
                  fontSize: 13,
                  color: "#1d1d1f",
                }}
              >
                {["4 ฉบับ/เดือน", "Template design", "A/B testing subject"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <CheckCircle size={14} style={{ color: "#06c", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#06c",
                  background: "rgba(0, 102, 204, 0.06)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  display: "inline-block",
                }}
              >
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
          style={{
            marginBottom: 100,
            background: "#f5f5f7",
            borderRadius: 28,
            padding: "56px 32px",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#1d1d1f",
              textAlign: "center",
              marginBottom: 48,
              letterSpacing: "-0.01em",
            }}
          >
            ตัวเลข
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            className="stats-grid"
          >
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
                  style={{
                    textAlign: "center",
                    padding: "32px 16px",
                    background: "#fff",
                    borderRadius: 20,
                    border: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <StatIcon
                    size={24}
                    style={{ color: "#06c", marginBottom: 14 }}
                  />
                  <div
                    style={{
                      fontSize: "clamp(32px, 4vw, 44px)",
                      fontWeight: 700,
                      color: "#1d1d1f",
                      lineHeight: 1.1,
                      marginBottom: 6,
                    }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#6e6e73",
                      fontWeight: 500,
                    }}
                  >
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
          style={{ marginBottom: 100 }}
        >
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#1d1d1f",
              textAlign: "center",
              marginBottom: 48,
              letterSpacing: "-0.01em",
            }}
          >
            ติดตามเรา
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
            className="social-grid"
          >
            {[
              {
                name: "TikTok",
                handle: "@aistudiothailand",
                followers: "25K followers",
                bg: "linear-gradient(135deg, #1d1d1f 0%, #424245 100%)",
                color: "#fff",
                icon: Play,
              },
              {
                name: "Instagram",
                handle: "@aistudio.th",
                followers: "12K followers",
                bg: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)",
                color: "#fff",
                icon: Camera,
              },
              {
                name: "YouTube",
                handle: "AI Studio Thailand",
                followers: "8K subscribers",
                bg: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                color: "#fff",
                icon: Youtube,
              },
              {
                name: "LINE OA",
                handle: "@aistudio-th",
                followers: "5K friends",
                bg: "linear-gradient(135deg, #06c 0%, #5ac8fa 100%)",
                color: "#fff",
                icon: Send,
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
                  style={{
                    background: social.bg,
                    borderRadius: 24,
                    padding: "32px 24px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <SocialIcon size={24} style={{ color: social.color }} />
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: social.color,
                      marginBottom: 4,
                    }}
                  >
                    {social.name}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: 8,
                    }}
                  >
                    {social.handle}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                    }}
                  >
                    {social.followers}
                  </div>
                  <ExternalLink
                    size={14}
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      color: "rgba(255,255,255,0.5)",
                    }}
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
          style={{
            textAlign: "center",
            background: "linear-gradient(135deg, #06c 0%, #5ac8fa 100%)",
            borderRadius: 32,
            padding: "64px 32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: -20,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              พร้อมสร้าง Content
              <br />
              ให้ธุรกิจของคุณ?
            </h3>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.85)",
                maxWidth: 480,
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              ไม่ว่าจะจ้างเราสร้าง content หรือติดตามเราเพื่อเรียนรู้ AI
              เราพร้อมช่วยคุณ
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  background: "#fff",
                  color: "#06c",
                  borderRadius: 14,
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                จ้างเราสร้าง Content <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  borderRadius: 14,
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                ติดตามเรา
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          .portfolio-row {
            grid-template-columns: 1fr !important;
          }
          .portfolio-row-3 {
            grid-template-columns: 1fr 1fr !important;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .social-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .portfolio-row-3 {
            grid-template-columns: 1fr !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .social-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .social-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
