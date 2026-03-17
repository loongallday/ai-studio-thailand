import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Easing,
} from "remotion";
import React from "react";

/* ── helpers ───────────────────────────────────────── */

const fontFamily =
  "'Bai Jamjuree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(Math.max(v, lo), hi);

/* ── topic cards ───────────────────────────────────── */

const topics = [
  {
    title: "Prompt Engineering",
    desc: "ออกแบบ Prompt อย่างมืออาชีพ",
    icon: "💬",
  },
  {
    title: "RAG Pipeline",
    desc: "สร้างระบบค้นหาด้วย AI",
    icon: "🔗",
  },
  {
    title: "n8n Automation",
    desc: "เชื่อมต่อ Workflow อัตโนมัติ",
    icon: "⚡",
  },
];

const terminalLines = [
  "$ ollama run llama3",
  "Loading model...",
  '>>> สรุปรายงานประจำเดือน',
  "",
  "✓ วิเคราะห์ข้อมูล 1,247 รายการ",
  "✓ สร้างสรุป 5 หัวข้อหลัก",
  "✓ ส่งผลลัพธ์ไปยัง Google Sheets",
  "",
  "Done in 3.2s",
];

const stats = [
  { label: "ผู้เข้าร่วม", value: 500, suffix: "+" },
  { label: "Workshop", value: 50, suffix: "+" },
  { label: "⭐", value: 4.9, suffix: "/5", decimals: 1 },
];

/* ── checkmark ─────────────────────────────────────── */

const Checkmark: React.FC<{ progress: number }> = ({ progress }) => {
  const len = 24;
  return (
    <svg width={28} height={28} viewBox="0 0 28 28">
      <circle
        cx={14}
        cy={14}
        r={12}
        fill="none"
        stroke="#34c759"
        strokeWidth={2}
        opacity={clamp(progress * 2, 0, 1)}
      />
      <path
        d="M8 14.5 L12 18.5 L20 10"
        fill="none"
        stroke="#34c759"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={len}
        strokeDashoffset={len * (1 - clamp(progress, 0, 1))}
      />
    </svg>
  );
};

/* ── main composition ──────────────────────────────── */

export const WorkshopVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  /* ── Phase 1: title (0-30) ─────────────────────── */

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleOut = interpolate(frame, [26, 34], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  /* ── Phase 2: topic cards (30-70) ──────────────── */

  const cardSprings = topics.map((_, i) =>
    spring({
      frame: frame - 30 - i * 6,
      fps,
      config: { damping: 14, stiffness: 120, mass: 0.8 },
    })
  );
  const cardsOut = interpolate(frame, [64, 72], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  /* ── Phase 3: terminal (70-110) ────────────────── */

  const terminalIn = interpolate(frame, [70, 78], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const terminalScale = interpolate(frame, [70, 78], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const charsRevealed = interpolate(frame, [72, 108], [0, 300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const terminalOut = interpolate(frame, [106, 114], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  /* ── Phase 4: results (110-150) ────────────────── */

  const resultsIn = interpolate(frame, [110, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const resultsY = interpolate(frame, [110, 120], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const checkProgress = interpolate(frame, [118, 132], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const resultsOut = interpolate(frame, [144, 152], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  /* ── Phase 5: stats (150-180) ──────────────────── */

  const statsIn = interpolate(frame, [150, 160], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const statsY = interpolate(frame, [150, 160], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const counterProgress = interpolate(frame, [155, 175], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  /* ── build visible terminal text ───────────────── */

  let charBudget = Math.floor(charsRevealed);
  const visibleLines: string[] = [];
  for (const line of terminalLines) {
    if (charBudget <= 0) break;
    if (charBudget >= line.length) {
      visibleLines.push(line);
      charBudget -= line.length + 1;
    } else {
      visibleLines.push(line.slice(0, charBudget));
      charBudget = 0;
    }
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        fontFamily,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── Phase 1: Title ──────────────────────────── */}
      {frame < 35 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: titleOpacity * titleOut,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: 6,
              color: "#6e6e73",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            AI Studio Thailand
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: -1.5,
              lineHeight: 1.1,
            }}
          >
            AI Workshop
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#6e6e73",
              marginTop: 18,
            }}
          >
            เรียนรู้ AI แบบลงมือทำจริง
          </div>
        </div>
      )}

      {/* ── Phase 2: Topic Cards ────────────────────── */}
      {frame >= 28 && frame < 74 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            opacity: cardsOut,
          }}
        >
          {topics.map((topic, i) => {
            const s = cardSprings[i];
            return (
              <div
                key={topic.title}
                style={{
                  width: 340,
                  padding: "48px 36px",
                  borderRadius: 20,
                  backgroundColor: "#f5f5f7",
                  border: "1px solid #e5e5ea",
                  opacity: s,
                  transform: `translateY(${(1 - s) * 80}px)`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 18 }}>
                  {topic.icon}
                </div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#1d1d1f",
                    marginBottom: 10,
                  }}
                >
                  {topic.title}
                </div>
                <div style={{ fontSize: 17, color: "#6e6e73" }}>
                  {topic.desc}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Phase 3: Terminal ───────────────────────── */}
      {frame >= 68 && frame < 116 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: terminalIn * terminalOut,
            transform: `scale(${terminalScale})`,
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 4,
              color: "#6e6e73",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            AI in Action
          </div>
          <div
            style={{
              width: 800,
              backgroundColor: "#1d1d1f",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 18px",
                backgroundColor: "#2c2c2e",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#febc2e",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#28c840",
                }}
              />
              <span
                style={{
                  marginLeft: 12,
                  fontSize: 13,
                  color: "#98989d",
                  fontFamily: "monospace",
                }}
              >
                Terminal
              </span>
            </div>
            {/* Body */}
            <div
              style={{
                padding: "24px 28px",
                fontFamily:
                  "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
                fontSize: 17,
                lineHeight: 1.7,
                color: "#e5e5ea",
                minHeight: 280,
              }}
            >
              {visibleLines.map((line, li) => (
                <div key={li}>
                  {line.startsWith("✓") ? (
                    <span style={{ color: "#34c759" }}>{line}</span>
                  ) : line.startsWith("$") ? (
                    <span>
                      <span style={{ color: "#34c759" }}>$</span>
                      {line.slice(1)}
                    </span>
                  ) : line.startsWith(">>>") ? (
                    <span style={{ color: "#5ac8fa" }}>{line}</span>
                  ) : (
                    <span style={{ color: "#98989d" }}>{line}</span>
                  )}
                </div>
              ))}
              {/* blinking cursor */}
              {frame >= 72 && frame < 110 && (
                <span
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 20,
                    backgroundColor:
                      Math.floor(frame / 4) % 2 === 0
                        ? "#e5e5ea"
                        : "transparent",
                    verticalAlign: "text-bottom",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Phase 4: Results ───────────────────────── */}
      {frame >= 108 && frame < 154 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: resultsIn * resultsOut,
            transform: `translateY(${resultsY}px)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 16,
            }}
          >
            <Checkmark progress={checkProgress} />
            <Checkmark progress={clamp(checkProgress - 0.25, 0, 1) * (1 / 0.75)} />
            <Checkmark progress={clamp(checkProgress - 0.5, 0, 1) * (1 / 0.5)} />
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#1d1d1f",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            ทีมของคุณพร้อมใช้ AI
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "#6e6e73",
              marginTop: 14,
            }}
          >
            ตั้งแต่วันแรกหลัง Workshop
          </div>
        </div>
      )}

      {/* ── Phase 5: Stats ─────────────────────────── */}
      {frame >= 148 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 100,
            opacity: statsIn,
            transform: `translateY(${statsY}px)`,
          }}
        >
          {stats.map((stat) => {
            const current =
              stat.decimals === 1
                ? (counterProgress * stat.value).toFixed(1)
                : Math.floor(counterProgress * stat.value);
            return (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 72,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    lineHeight: 1,
                  }}
                >
                  {current}
                  <span style={{ fontSize: 36, color: "#6e6e73" }}>
                    {stat.suffix}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: "#6e6e73",
                    marginTop: 10,
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </AbsoluteFill>
  );
};
