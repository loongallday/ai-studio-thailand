"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Database,
  Workflow,
  BarChart3,
  Plug,
  Server,
  ArrowRight,
  CheckCircle,
  Search,
  Palette,
  Wrench,
  TestTube,
  Rocket,
  HeartHandshake,
  Cloud,
  Shield,
  ExternalLink,
  Send,
  Bot,
  User,
  FileText,
  Cpu,
  GitBranch,
  Activity,
  Globe,
  Zap,
  Lock,
  TrendingUp,
  Clock,
  ChevronRight,
  Terminal,
  CircleCheck,
  MonitorDot,
  Gauge,
  Code2,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Inline Mockup Components ─── */

function ChatMockup() {
  const messages = [
    { from: "user", text: "สินค้ารุ่น A250 มีสต็อกไหม?" },
    { from: "bot", text: "สินค้า A250 มีในสต็อก 128 ชิ้น พร้อมจัดส่งภายใน 1 วันทำการครับ" },
    { from: "user", text: "ขอใบเสนอราคา 50 ชิ้น" },
    { from: "bot", text: "สร้างใบเสนอราคาเรียบร้อยแล้วครับ ส่งไปยังอีเมลของท่านแล้ว" },
  ];
  return (
    <div
      style={{
        background: "#f5f5f7",
        borderRadius: 16,
        padding: 16,
        marginTop: 20,
        maxHeight: 220,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15 }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              justifyContent: m.from === "user" ? "flex-end" : "flex-start",
            }}
          >
            {m.from === "bot" && (
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  background: "#06c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Bot size={14} color="#fff" />
              </div>
            )}
            <div
              style={{
                background: m.from === "user" ? "#06c" : "#fff",
                color: m.from === "user" ? "#fff" : "#1d1d1f",
                padding: "8px 12px",
                borderRadius: 14,
                fontSize: 12,
                lineHeight: 1.5,
                maxWidth: "75%",
                boxShadow: m.from === "bot" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
              }}
            >
              {m.text}
            </div>
            {m.from === "user" && (
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  background: "#e5e5ea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <User size={14} color="#6e6e73" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 12,
          background: "#fff",
          borderRadius: 20,
          padding: "8px 12px",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <span style={{ fontSize: 12, color: "#86868b", flex: 1 }}>พิมพ์ข้อความ...</span>
        <Send size={14} color="#06c" />
      </div>
    </div>
  );
}

function SearchMockup() {
  return (
    <div style={{ marginTop: 16 }}>
      <div
        style={{
          background: "#f5f5f7",
          borderRadius: 12,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <Search size={14} color="#86868b" />
        <span style={{ fontSize: 12, color: "#1d1d1f" }}>นโยบายการคืนสินค้า</span>
      </div>
      {["คู่มือนโยบาย v3.2 — หน้า 14", "ข้อกำหนดการคืนสินค้า 2024", "FAQ — การคืนสินค้าออนไลน์"].map(
        (r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 10px",
              borderRadius: 8,
              background: i === 0 ? "rgba(0,102,204,0.06)" : "transparent",
              marginBottom: 2,
            }}
          >
            <FileText size={12} color={i === 0 ? "#06c" : "#86868b"} />
            <span style={{ fontSize: 11, color: i === 0 ? "#06c" : "#6e6e73" }}>{r}</span>
            {i === 0 && (
              <span
                style={{
                  fontSize: 9,
                  background: "#06c",
                  color: "#fff",
                  padding: "1px 6px",
                  borderRadius: 6,
                  fontWeight: 600,
                  marginLeft: "auto",
                }}
              >
                98%
              </span>
            )}
          </motion.div>
        )
      )}
    </div>
  );
}

function WorkflowMockup() {
  const nodes = [
    { label: "Trigger", color: "#06c" },
    { label: "AI Process", color: "#059669" },
    { label: "Action", color: "#ea580c" },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        marginTop: 20,
        padding: "12px 0",
      }}
    >
      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15 }}
          style={{ display: "flex", alignItems: "center", gap: 6 }}
        >
          <div
            style={{
              background: `${n.color}12`,
              border: `1.5px solid ${n.color}30`,
              borderRadius: 10,
              padding: "8px 12px",
              fontSize: 10,
              fontWeight: 600,
              color: n.color,
              whiteSpace: "nowrap",
            }}
          >
            {n.label}
          </div>
          {i < nodes.length - 1 && <ArrowRight size={12} color="#d1d5db" />}
        </motion.div>
      ))}
    </div>
  );
}

function MiniChart() {
  const bars = [35, 52, 45, 68, 82, 75, 90];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 4,
        height: 60,
        marginTop: 16,
        padding: "0 4px",
      }}
    >
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          style={{
            flex: 1,
            background: `linear-gradient(to top, #06c, ${i >= 5 ? "#34d399" : "#60a5fa"})`,
            borderRadius: 4,
            minHeight: 4,
          }}
        />
      ))}
    </div>
  );
}

function ApiDiagram() {
  const endpoints = ["ERP", "CRM", "LINE"];
  return (
    <div style={{ marginTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div
        style={{
          background: "rgba(0,102,204,0.08)",
          borderRadius: 10,
          padding: "6px 16px",
          fontSize: 11,
          fontWeight: 700,
          color: "#06c",
        }}
      >
        AI Hub
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {endpoints.map((ep, i) => (
          <motion.div
            key={ep}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{ textAlign: "center" }}
          >
            <div style={{ width: 1, height: 16, background: "#d1d5db", margin: "0 auto" }} />
            <div
              style={{
                background: "#f5f5f7",
                borderRadius: 8,
                padding: "4px 12px",
                fontSize: 10,
                fontWeight: 600,
                color: "#6e6e73",
              }}
            >
              {ep}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  const layers = [
    { label: "Application Layer", items: ["Web App", "Mobile", "LINE Bot"], color: "#06c" },
    { label: "AI Engine", items: ["LLM", "RAG", "Agents"], color: "#059669" },
    { label: "Infrastructure", items: ["GPU Server", "Vector DB", "API Gateway"], color: "#6e6e73" },
  ];
  return (
    <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6 }}>
      {layers.map((layer, li) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + li * 0.12 }}
          style={{
            background: `${layer.color}08`,
            border: `1px solid ${layer.color}20`,
            borderRadius: 10,
            padding: "8px 14px",
          }}
        >
          <div style={{ fontSize: 9, fontWeight: 700, color: layer.color, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {layer.label}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {layer.items.map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 10,
                  color: "#1d1d1f",
                  background: "#fff",
                  padding: "2px 8px",
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
    </div>
  );
}

/* ─── Process Step Mockups ─── */

function WhiteboardMockup() {
  return (
    <div
      style={{
        background: "#fffef5",
        borderRadius: 16,
        border: "1px solid #e8e5d0",
        padding: 20,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ fontSize: 10, color: "#b8a040", fontWeight: 600, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Discovery Board
      </div>
      {[
        { text: "Pain Point: manual data entry", x: 8, y: 0, rotate: -2 },
        { text: "Goal: 80% automation", x: 60, y: 4, rotate: 1 },
        { text: "Users: 50 staff", x: 20, y: 8, rotate: -1 },
        { text: "Timeline: 3 months", x: 100, y: 2, rotate: 2 },
      ].map((note, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: note.rotate }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          style={{
            display: "inline-block",
            background: "#fff9c4",
            padding: "6px 10px",
            borderRadius: 4,
            fontSize: 10,
            color: "#5d4e00",
            margin: "4px 6px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            border: "1px solid #f0e68c",
          }}
        >
          {note.text}
        </motion.div>
      ))}
    </div>
  );
}

function ArchMockup() {
  return (
    <div
      style={{
        background: "#f5f5f7",
        borderRadius: 16,
        padding: 20,
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ fontSize: 10, color: "#6e6e73", fontWeight: 600, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        System Architecture
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { label: "Frontend", sub: "Next.js + React", color: "#06c" },
          { label: "AI Service", sub: "LangChain + LLM", color: "#059669" },
          { label: "Database", sub: "PostgreSQL + pgvector", color: "#7c3aed" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: item.color,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#1d1d1f" }}>{item.label}</div>
              <div style={{ fontSize: 10, color: "#86868b" }}>{item.sub}</div>
            </div>
            <div
              style={{
                fontSize: 9,
                background: `${item.color}12`,
                color: item.color,
                padding: "2px 8px",
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              v1.0
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
        {["REST API", "WebSocket", "gRPC"].map((proto) => (
          <span
            key={proto}
            style={{
              fontSize: 9,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 6,
              padding: "2px 8px",
              color: "#6e6e73",
            }}
          >
            {proto}
          </span>
        ))}
      </div>
    </div>
  );
}

function CodeMockup() {
  return (
    <div
      style={{
        background: "#1d1d1f",
        borderRadius: 16,
        padding: "16px 14px",
        fontFamily: "'SF Mono', 'Fira Code', monospace",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        <div style={{ width: 10, height: 10, borderRadius: 5, background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: 5, background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: 5, background: "#28c840" }} />
      </div>
      {[
        { text: "from langchain import ChatOpenAI", color: "#c084fc" },
        { text: "from rag import VectorStore", color: "#c084fc" },
        { text: "", color: "" },
        { text: 'llm = ChatOpenAI(model="gpt-4o")', color: "#fbbf24" },
        { text: 'store = VectorStore("company_docs")', color: "#fbbf24" },
        { text: "", color: "" },
        { text: "chain = llm | store | output", color: "#34d399" },
        { text: 'result = chain.invoke("query")', color: "#34d399" },
      ].map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.08 }}
          style={{
            fontSize: 11,
            color: line.color || "transparent",
            lineHeight: 1.8,
            whiteSpace: "nowrap",
          }}
        >
          {line.text || "\u00A0"}
        </motion.div>
      ))}
    </div>
  );
}

function TestMockup() {
  const tests = [
    { name: "test_chatbot_response", pass: true, ms: 124 },
    { name: "test_rag_accuracy", pass: true, ms: 342 },
    { name: "test_thai_language", pass: true, ms: 89 },
    { name: "test_edge_cases", pass: true, ms: 256 },
    { name: "test_load_100_users", pass: true, ms: 1503 },
  ];
  return (
    <div
      style={{
        background: "#f5f5f7",
        borderRadius: 16,
        padding: 20,
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <TestTube size={14} color="#059669" />
        <span style={{ fontSize: 11, fontWeight: 700, color: "#059669", textTransform: "uppercase", letterSpacing: "0.05em" }}>All Tests Passed</span>
        <span style={{ fontSize: 10, color: "#86868b", marginLeft: "auto" }}>5/5</span>
      </div>
      {tests.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 0",
            borderBottom: i < tests.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none",
          }}
        >
          <CircleCheck size={12} color="#059669" />
          <span style={{ fontSize: 10, color: "#1d1d1f", fontFamily: "monospace", flex: 1 }}>{t.name}</span>
          <span style={{ fontSize: 9, color: "#86868b" }}>{t.ms}ms</span>
        </motion.div>
      ))}
    </div>
  );
}

function DashboardMockup() {
  return (
    <div
      style={{
        background: "#f5f5f7",
        borderRadius: 16,
        padding: 20,
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <Rocket size={14} color="#06c" />
        <span style={{ fontSize: 11, fontWeight: 700, color: "#06c", textTransform: "uppercase", letterSpacing: "0.05em" }}>Production Live</span>
        <div style={{ width: 6, height: 6, borderRadius: 3, background: "#34d399", marginLeft: "auto" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          { label: "Uptime", value: "99.97%", color: "#059669" },
          { label: "Response", value: "< 200ms", color: "#06c" },
          { label: "Users", value: "1,247", color: "#7c3aed" },
          { label: "Queries/day", value: "8,432", color: "#ea580c" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#fff",
              borderRadius: 10,
              padding: "10px 12px",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: 9, color: "#86868b", marginBottom: 2 }}>{stat.label}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonitorMockup() {
  return (
    <div
      style={{
        background: "#1d1d1f",
        borderRadius: 16,
        padding: 20,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <Activity size={14} color="#34d399" />
        <span style={{ fontSize: 11, fontWeight: 600, color: "#34d399" }}>System Healthy</span>
        <span style={{ fontSize: 9, color: "#6e6e73", marginLeft: "auto" }}>Live</span>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            background: "#34d399",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 40, marginBottom: 12 }}>
        {Array.from({ length: 20 }).map((_, i) => {
          const h = 20 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
          return (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.03 }}
              style={{
                flex: 1,
                background: h > 60 ? "#fbbf24" : "#34d399",
                borderRadius: 2,
                minHeight: 2,
              }}
            />
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {[
          { label: "CPU", value: "24%", color: "#34d399" },
          { label: "RAM", value: "6.2G", color: "#60a5fa" },
          { label: "GPU", value: "45%", color: "#fbbf24" },
        ].map((m) => (
          <div key={m.label} style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: "#6e6e73", marginBottom: 2 }}>{m.label}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: m.color }}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function Development() {
  /* Process steps data with alternating layout */
  const processSteps = [
    {
      icon: Search,
      label: "Discovery",
      thai: "สำรวจความต้องการ",
      title: "เข้าใจปัญหาก่อนลงมือทำ",
      description:
        "เราเริ่มจากการทำความเข้าใจธุรกิจ ปัญหา และเป้าหมายของคุณอย่างลึกซึ้ง ผ่าน workshop และการสัมภาษณ์ผู้ใช้จริง เพื่อหา use case ที่ AI จะสร้างคุณค่าสูงสุด",
      mockup: <WhiteboardMockup />,
      align: "left",
    },
    {
      icon: Palette,
      label: "Design",
      thai: "ออกแบบสถาปัตยกรรม",
      title: "ออกแบบอย่างรอบคอบ",
      description:
        "ออกแบบ system architecture ที่ scale ได้ เลือก model และเทคโนโลยีที่เหมาะสม วาง data pipeline และ integration points ทั้งหมดก่อนเริ่มพัฒนา",
      mockup: <ArchMockup />,
      align: "right",
    },
    {
      icon: Wrench,
      label: "Build",
      thai: "พัฒนาระบบ",
      title: "พัฒนาด้วยเทคโนโลยีล่าสุด",
      description:
        "ทีม engineer ที่มีประสบการณ์ลงมือสร้างระบบตาม design ด้วย best practices — clean code, CI/CD, automated testing ทุกขั้นตอน sprint review ทุก 2 สัปดาห์",
      mockup: <CodeMockup />,
      align: "left",
    },
    {
      icon: TestTube,
      label: "Test",
      thai: "ทดสอบทุกกรณี",
      title: "ทดสอบจนมั่นใจ",
      description:
        "ทดสอบทุกมิติ — unit test, integration test, load test และ user acceptance test รวมถึงทดสอบกับข้อมูลจริงของคุณ เพื่อให้มั่นใจว่าระบบพร้อมใช้งาน",
      mockup: <TestMockup />,
      align: "right",
    },
    {
      icon: Rocket,
      label: "Deploy",
      thai: "ติดตั้งระบบ",
      title: "วางระบบ Production อย่างมืออาชีพ",
      description:
        "Deploy ระบบด้วย zero-downtime strategy ไม่ว่าจะ on-premise หรือ cloud มี rollback plan, monitoring และ alerting พร้อมตั้งแต่วันแรก",
      mockup: <DashboardMockup />,
      align: "left",
    },
    {
      icon: HeartHandshake,
      label: "Maintain",
      thai: "ดูแลต่อเนื่อง",
      title: "ซัพพอร์ตไม่ทิ้งกัน",
      description:
        "ดูแลระบบต่อเนื่องด้วย SLA ที่ชัดเจน — monitor performance, update model, ปรับ fine-tune ตาม feedback จริง ให้ AI ของคุณดีขึ้นเรื่อยๆ",
      mockup: <MonitorMockup />,
      align: "right",
    },
  ];

  const caseExamples = [
    {
      industry: "ธนาคาร",
      tag: "Financial Services",
      project: "AI Document Processing",
      description: "ระบบ OCR + AI ตรวจสอบเอกสารสินเชื่ออัตโนมัติ ลดเวลาจาก 2 ชั่วโมงเหลือ 15 นาที",
      result: "ลดเวลาตรวจสอบเอกสาร 80%",
      tech: ["GPT-4o", "OCR", "Python"],
      color: "#1d4ed8",
    },
    {
      industry: "อีคอมเมิร์ซ",
      tag: "E-Commerce",
      project: "AI Customer Service Bot",
      description: "แชทบอท LINE ตอบคำถามลูกค้า 24/7 เข้าใจภาษาไทย สั่งซื้อได้ในแชท",
      result: "ตอบลูกค้าอัตโนมัติ 90% ของคำถาม",
      tech: ["LangChain", "LINE API", "RAG"],
      color: "#06c",
    },
    {
      industry: "โรงงาน",
      tag: "Manufacturing",
      project: "Predictive Maintenance AI",
      description: "วิเคราะห์ข้อมูล sensor เครื่องจักร ทำนายการเสียหายก่อนเกิดขึ้น",
      result: "ลดค่าซ่อมบำรุง 35%",
      tech: ["TensorFlow", "IoT", "Dashboard"],
      color: "#059669",
    },
  ];

  return (
    <section
      id="development"
      style={{
        background: "#fff",
        padding: "0 24px",
        overflow: "hidden",
      }}
    >
      {/* ──────────── SECTION 1: Hero ──────────── */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          paddingTop: 120,
          paddingBottom: 100,
          textAlign: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,102,204,0.06)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <Code2 size={14} color="#06c" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#06c" }}>Engineering Lab</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 5.5vw, 56px)",
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Custom AI Development
          </h2>
          <p
            style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "#6e6e73",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            ออกแบบและสร้างระบบ AI ที่พอดีกับธุรกิจคุณ
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#86868b",
              maxWidth: 520,
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            ไม่ใช่แค่ใช้เครื่องมือสำเร็จรูป — เราออกแบบ พัฒนา และดูแลระบบ AI
            ที่สร้างขึ้นเฉพาะสำหรับกระบวนการทำงานของคุณ ทั้ง On-Premise และ Cloud
          </p>
        </motion.div>
      </div>

      {/* ──────────── SECTION 2: Bento Grid ──────────── */}
      <div style={{ maxWidth: 1080, margin: "0 auto", paddingBottom: 120 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#1d1d1f",
              marginBottom: 12,
              letterSpacing: "-0.01em",
            }}
          >
            สิ่งที่เราสร้าง
          </h3>
          <p style={{ fontSize: 17, color: "#86868b", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            ครอบคลุมทุก AI use case ที่องค์กรต้องการ
          </p>
        </motion.div>

        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto auto auto",
            gap: 20,
          }}
        >
          {/* Large: AI Chatbot (spans 2 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="apple-card bento-chatbot"
            style={{
              gridColumn: "span 2",
              background: "#fff",
              borderRadius: 24,
              padding: "32px 28px 24px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(0,102,204,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageSquare size={20} color="#06c" />
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", margin: 0 }}>
                  AI Chatbot & Customer Service
                </h4>
                <p style={{ fontSize: 13, color: "#86868b", margin: 0 }}>
                  แชทบอทอัจฉริยะ ตอบคำถาม 24/7 รองรับภาษาไทย
                </p>
              </div>
            </div>
            <ChatMockup />
          </motion.div>

          {/* Small: RAG Knowledge Base */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="apple-card bento-rag"
            style={{
              gridColumn: "span 1",
              background: "#fff",
              borderRadius: 24,
              padding: "28px 22px 20px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(124,58,237,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Database size={18} color="#7c3aed" />
            </div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", margin: "0 0 4px" }}>
              RAG Knowledge Base
            </h4>
            <p style={{ fontSize: 12, color: "#86868b", margin: 0, lineHeight: 1.5 }}>
              ค้นหาข้อมูลจากเอกสารองค์กร
            </p>
            <SearchMockup />
          </motion.div>

          {/* Small: Workflow Automation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="apple-card bento-workflow"
            style={{
              gridColumn: "span 1",
              background: "#fff",
              borderRadius: 24,
              padding: "28px 22px 20px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(234,88,12,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Workflow size={18} color="#ea580c" />
            </div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", margin: "0 0 4px" }}>
              Workflow Automation
            </h4>
            <p style={{ fontSize: 12, color: "#86868b", margin: 0, lineHeight: 1.5 }}>
              อัตโนมัติกระบวนการด้วย n8n + AI
            </p>
            <WorkflowMockup />
          </motion.div>

          {/* Small: Data Analytics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="apple-card bento-analytics"
            style={{
              gridColumn: "span 1",
              background: "#fff",
              borderRadius: 24,
              padding: "28px 22px 20px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(5,150,105,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <BarChart3 size={18} color="#059669" />
            </div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", margin: "0 0 4px" }}>
              Data Analytics
            </h4>
            <p style={{ fontSize: 12, color: "#86868b", margin: 0, lineHeight: 1.5 }}>
              แดชบอร์ดและรายงานอัจฉริยะ
            </p>
            <MiniChart />
          </motion.div>

          {/* Small: System Integration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="apple-card bento-integration"
            style={{
              gridColumn: "span 1",
              background: "#fff",
              borderRadius: 24,
              padding: "28px 22px 20px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(0,102,204,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Plug size={18} color="#06c" />
            </div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", margin: "0 0 4px" }}>
              System Integration
            </h4>
            <p style={{ fontSize: 12, color: "#86868b", margin: 0, lineHeight: 1.5 }}>
              เชื่อมต่อ ERP, CRM, LINE
            </p>
            <ApiDiagram />
          </motion.div>

          {/* Large: Enterprise AI Infrastructure (spans 2 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="apple-card bento-enterprise"
            style={{
              gridColumn: "span 2",
              background: "#fff",
              borderRadius: 24,
              padding: "32px 28px 24px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Server size={20} color="#1d1d1f" />
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", margin: 0 }}>
                  Enterprise AI Infrastructure
                </h4>
                <p style={{ fontSize: 13, color: "#86868b", margin: 0 }}>
                  วางโครงสร้าง AI ระดับองค์กร ทั้ง On-Premise และ Cloud
                </p>
              </div>
            </div>
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </div>

      {/* ──────────── SECTION 3: Process (Alternating) ──────────── */}
      <div
        style={{
          background: "#f5f5f7",
          margin: "0 -24px",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            style={{ textAlign: "center", marginBottom: 80 }}
          >
            <h3
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              กระบวนการพัฒนา
            </h3>
            <p style={{ fontSize: 17, color: "#86868b", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              6 ขั้นตอนที่พิสูจน์แล้วว่าส่งมอบคุณค่าได้จริง
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              const isLeft = step.align === "left";
              return (
                <div
                  key={step.label}
                  className="process-step"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 48,
                    alignItems: "center",
                  }}
                >
                  {/* Text side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={isLeft ? fadeLeft : fadeRight}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{ order: isLeft ? 1 : 2 }}
                    className={isLeft ? "process-text-left" : "process-text-right"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          background: "#fff",
                          border: "2px solid rgba(0,102,204,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        }}
                      >
                        <StepIcon size={22} color="#06c" />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#06c",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Step {i + 1} — {step.label}
                        </div>
                        <div style={{ fontSize: 13, color: "#86868b", fontWeight: 500 }}>{step.thai}</div>
                      </div>
                    </div>
                    <h4
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#1d1d1f",
                        marginBottom: 12,
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 15,
                        color: "#6e6e73",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Mockup side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={isLeft ? fadeRight : fadeLeft}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{ order: isLeft ? 2 : 1 }}
                    className={isLeft ? "process-mockup-right" : "process-mockup-left"}
                  >
                    {step.mockup}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ──────────── SECTION 4: On-Premise vs Cloud ──────────── */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 0" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#1d1d1f",
              marginBottom: 12,
              letterSpacing: "-0.01em",
            }}
          >
            On-Premise vs Cloud
          </h3>
          <p style={{ fontSize: 17, color: "#86868b", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            เราทำได้ทั้งสองแบบ เลือกแบบที่เหมาะกับองค์กรของคุณ
          </p>
        </motion.div>

        <div
          className="deployment-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {/* LocalAI Card (Dark) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="apple-card"
            style={{
              background: "#1d1d1f",
              borderRadius: 24,
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle gradient overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 200,
                height: 200,
                background: "radial-gradient(circle, rgba(0,102,204,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Server size={24} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>On-Premise AI</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>LocalAI Thailand</div>
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                ข้อมูลอยู่ในองค์กร 100% ควบคุมได้เต็มที่ เหมาะกับธุรกิจที่ต้องการ compliance สูงสุด
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { icon: Lock, text: "ข้อมูลไม่ออกนอกองค์กร" },
                  { icon: Zap, text: "ไม่มีค่า API รายเดือน" },
                  { icon: Shield, text: "Air-gapped environment" },
                  { icon: Cpu, text: "รองรับ GPU Server ทุกรุ่น" },
                  { icon: Gauge, text: "Latency ต่ำ ประมวลผลเร็ว" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontSize: 14,
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          background: "rgba(255,255,255,0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <ItemIcon size={14} color="rgba(255,255,255,0.6)" />
                      </div>
                      {item.text}
                    </div>
                  );
                })}
              </div>

              <motion.a
                href="https://localaithai.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "10px 18px",
                }}
              >
                localaithai.com <ExternalLink size={14} />
              </motion.a>
            </div>
          </motion.div>

          {/* CloudAI Card (Light) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="apple-card"
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "36px 32px",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 200,
                height: 200,
                background: "radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(0,102,204,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Cloud size={24} color="#06c" />
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#1d1d1f" }}>Cloud AI</div>
                  <div style={{ fontSize: 13, color: "#86868b" }}>CloudAI Thailand</div>
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "#6e6e73",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                เข้าถึง frontier model ล่าสุด ไม่ต้องลงทุนฮาร์ดแวร์ Scale ได้ไม่จำกัดตามการเติบโตของธุรกิจ
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { icon: Rocket, text: "เริ่มต้นเร็ว ไม่ต้องซื้อเซิร์ฟเวอร์" },
                  { icon: TrendingUp, text: "Scale ได้ตามการใช้งาน" },
                  { icon: Globe, text: "ใช้ model ล่าสุด GPT-4o, Claude" },
                  { icon: Clock, text: "จ่ายตามใช้จริง pay-as-you-go" },
                  { icon: Zap, text: "Deploy ภายใน 1-2 สัปดาห์" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontSize: 14,
                        color: "#1d1d1f",
                      }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          background: "rgba(0,102,204,0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <ItemIcon size={14} color="#06c" />
                      </div>
                      {item.text}
                    </div>
                  );
                })}
              </div>

              <motion.a
                href="https://cloudaithai.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#06c",
                  textDecoration: "none",
                  background: "rgba(0,102,204,0.06)",
                  borderRadius: 12,
                  padding: "10px 18px",
                }}
              >
                cloudaithai.com <ExternalLink size={14} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Decision Helper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            background: "#f5f5f7",
            borderRadius: 20,
            padding: "28px 32px",
          }}
        >
          <p style={{ fontSize: 17, color: "#1d1d1f", fontWeight: 600, margin: "0 0 4px" }}>
            ไม่แน่ใจ? ปรึกษาเราฟรี
          </p>
          <p style={{ fontSize: 14, color: "#86868b", margin: "0 0 16px" }}>
            เราช่วยวิเคราะห์ว่าแบบไหนเหมาะกับองค์กรคุณ ไม่มีค่าใช้จ่าย
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#06c",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              padding: "12px 28px",
              borderRadius: 12,
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            นัดพูดคุย <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* ──────────── SECTION 5: Case Studies ──────────── */}
      <div
        style={{
          background: "#f5f5f7",
          margin: "0 -24px",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <h3
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#1d1d1f",
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              ผลงาน
            </h3>
            <p style={{ fontSize: 17, color: "#86868b", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              ตัวอย่างโปรเจกต์จริงที่เราส่งมอบให้ลูกค้า
            </p>
          </motion.div>

          <div
            className="cases-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {caseExamples.map((ex, i) => (
              <motion.div
                key={ex.industry}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="apple-card"
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "32px 28px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: ex.color,
                      background: `${ex.color}0a`,
                      padding: "4px 10px",
                      borderRadius: 8,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {ex.tag}
                  </span>
                  <span style={{ fontSize: 12, color: "#86868b" }}>{ex.industry}</span>
                </div>

                <h4
                  style={{
                    fontSize: 19,
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {ex.project}
                </h4>

                <p
                  style={{
                    fontSize: 14,
                    color: "#6e6e73",
                    lineHeight: 1.6,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {ex.description}
                </p>

                {/* Result highlight */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 16px",
                    background: `${ex.color}08`,
                    borderRadius: 12,
                    border: `1px solid ${ex.color}15`,
                    marginBottom: 16,
                  }}
                >
                  <TrendingUp size={16} color={ex.color} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: ex.color }}>{ex.result}</span>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {ex.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        color: "#6e6e73",
                        background: "#f5f5f7",
                        padding: "3px 10px",
                        borderRadius: 8,
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────── SECTION 6: CTA ──────────── */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 0" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <h3
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: "#1d1d1f",
              marginBottom: 16,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            เริ่มโปรเจกต์ AI ของคุณ
          </h3>
          <p
            style={{
              fontSize: 18,
              color: "#6e6e73",
              maxWidth: 520,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            ทุกโปรเจกต์เริ่มจากการพูดคุย บอกเราว่าคุณต้องการอะไร
            แล้วเราจะออกแบบ solution ที่พอดีกับคุณ
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#06c",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                padding: "16px 36px",
                borderRadius: 14,
                textDecoration: "none",
                cursor: "pointer",
                border: "none",
              }}
            >
              ปรึกษาฟรี <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(0,0,0,0.04)",
                color: "#1d1d1f",
                fontSize: 16,
                fontWeight: 600,
                padding: "16px 36px",
                borderRadius: 14,
                textDecoration: "none",
                cursor: "pointer",
                border: "none",
              }}
            >
              ดูบริการทั้งหมด <ChevronRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ──────────── Responsive Styles ──────────── */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-chatbot,
          .bento-enterprise {
            grid-column: span 2 !important;
          }
          .bento-rag,
          .bento-workflow,
          .bento-analytics,
          .bento-integration {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-chatbot,
          .bento-enterprise,
          .bento-rag,
          .bento-workflow,
          .bento-analytics,
          .bento-integration {
            grid-column: span 1 !important;
          }
          .process-step {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .process-text-left,
          .process-text-right {
            order: 1 !important;
          }
          .process-mockup-left,
          .process-mockup-right {
            order: 2 !important;
          }
          .deployment-grid {
            grid-template-columns: 1fr !important;
          }
          .cases-grid {
            grid-template-columns: 1fr !important;
          }
          .terminal-mockup {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
          }
          .terminal-mockup pre,
          .terminal-mockup code {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
}
