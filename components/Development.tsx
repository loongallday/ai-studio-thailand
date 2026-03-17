"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Plus,
  Box,
  MousePointerClick,
  SlidersHorizontal,
  Users,
  Calendar,
  DollarSign,
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
    <div className="bg-[#f5f5f7] rounded-2xl p-4 mt-5 max-h-[220px] overflow-hidden">
      <div className="flex flex-col gap-2">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className={`flex items-start gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {m.from === "bot" && (
              <div className="w-6 h-6 rounded-full bg-[#06c] flex items-center justify-center shrink-0 mt-0.5">
                <Bot size={14} color="#fff" />
              </div>
            )}
            <div
              className={`px-3 py-2 rounded-[14px] text-xs leading-relaxed max-w-[75%] ${
                m.from === "user"
                  ? "bg-[#06c] text-white"
                  : "bg-white text-[#1d1d1f] shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
              }`}
            >
              {m.text}
            </div>
            {m.from === "user" && (
              <div className="w-6 h-6 rounded-full bg-[#e5e5ea] flex items-center justify-center shrink-0 mt-0.5">
                <User size={14} color="#6e6e73" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 bg-white rounded-[20px] px-3 py-2 border border-black/[0.08]">
        <span className="text-xs text-[#6e6e73] flex-1">พิมพ์ข้อความ...</span>
        <Send size={14} color="#06c" />
      </div>
    </div>
  );
}

function SearchMockup() {
  return (
    <div className="mt-4">
      <div className="bg-[#f5f5f7] rounded-xl px-3.5 py-2.5 flex items-center gap-2 mb-2.5">
        <Search size={14} color="#6e6e73" />
        <span className="text-xs text-[#1d1d1f]">นโยบายการคืนสินค้า</span>
      </div>
      {["คู่มือนโยบาย v3.2 — หน้า 14", "ข้อกำหนดการคืนสินค้า 2024", "FAQ — การคืนสินค้าออนไลน์"].map(
        (r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg mb-0.5 ${
              i === 0 ? "bg-[rgba(0,102,204,0.06)]" : ""
            }`}
          >
            <FileText size={12} color={i === 0 ? "#06c" : "#6e6e73"} />
            <span className={`text-[11px] ${i === 0 ? "text-[#06c]" : "text-[#6e6e73]"}`}>{r}</span>
            {i === 0 && (
              <span className="text-[9px] bg-[#06c] text-white px-1.5 py-px rounded-md font-semibold ml-auto">
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
    <div className="flex items-center justify-center gap-1.5 mt-5 py-3">
      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15 }}
          className="flex items-center gap-1.5"
        >
          <div
            className="rounded-[10px] px-3 py-2 text-[10px] font-semibold whitespace-nowrap"
            style={{
              background: `${n.color}12`,
              border: `1.5px solid ${n.color}30`,
              color: n.color,
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
    <div className="flex items-end gap-1 h-[60px] mt-4 px-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          className="flex-1 rounded min-h-1"
          style={{
            background: `linear-gradient(to top, #06c, ${i >= 5 ? "#34d399" : "#60a5fa"})`,
          }}
        />
      ))}
    </div>
  );
}

function ApiDiagram() {
  const endpoints = ["ERP", "CRM", "LINE"];
  return (
    <div className="mt-4 flex flex-col items-center gap-1.5">
      <div className="bg-[rgba(0,102,204,0.08)] rounded-[10px] px-4 py-1.5 text-[11px] font-bold text-[#06c]">
        AI Hub
      </div>
      <div className="flex gap-3">
        {endpoints.map((ep, i) => (
          <motion.div
            key={ep}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="text-center"
          >
            <div className="w-px h-4 bg-[#d1d5db] mx-auto" />
            <div className="bg-[#f5f5f7] rounded-lg px-3 py-1 text-[10px] font-semibold text-[#6e6e73]">
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
    <div className="mt-5 flex flex-col gap-1.5">
      {layers.map((layer, li) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + li * 0.12 }}
          className="rounded-[10px] px-3.5 py-2"
          style={{
            background: `${layer.color}08`,
            border: `1px solid ${layer.color}20`,
          }}
        >
          <div
            className="text-[9px] font-bold mb-1 uppercase tracking-wide"
            style={{ color: layer.color }}
          >
            {layer.label}
          </div>
          <div className="flex gap-2">
            {layer.items.map((item) => (
              <span
                key={item}
                className="text-[10px] text-[#1d1d1f] bg-white px-2 py-0.5 rounded-md border border-black/[0.06]"
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
    <div className="bg-[#fffef5] rounded-2xl border border-[#e8e5d0] p-5 relative overflow-hidden">
      <div className="text-[10px] text-[#b8a040] font-semibold mb-3 uppercase tracking-wide">
        Discovery Board
      </div>
      {[
        { text: "Pain Point: manual data entry", rotate: -2 },
        { text: "Goal: 80% automation", rotate: 1 },
        { text: "Users: 50 staff", rotate: -1 },
        { text: "Timeline: 3 months", rotate: 2 },
      ].map((note, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: note.rotate }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="inline-block bg-[#fff9c4] px-2.5 py-1.5 rounded text-[10px] text-[#5d4e00] m-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#f0e68c]"
        >
          {note.text}
        </motion.div>
      ))}
    </div>
  );
}

function ArchMockup() {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-5 border border-black/[0.06]">
      <div className="text-[10px] text-[#6e6e73] font-semibold mb-3 uppercase tracking-wide">
        System Architecture
      </div>
      <div className="flex flex-col gap-2">
        {[
          { label: "Frontend", sub: "Next.js + React", color: "#06c" },
          { label: "AI Service", sub: "LangChain + LLM", color: "#059669" },
          { label: "Database", sub: "PostgreSQL + pgvector", color: "#7c3aed" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: item.color }}
            />
            <div className="flex-1">
              <div className="text-[11px] font-semibold text-[#1d1d1f]">{item.label}</div>
              <div className="text-[10px] text-[#6e6e73]">{item.sub}</div>
            </div>
            <div
              className="text-[9px] px-2 py-0.5 rounded-md font-semibold"
              style={{
                background: `${item.color}12`,
                color: item.color,
              }}
            >
              v1.0
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-1.5">
        {["REST API", "WebSocket", "gRPC"].map((proto) => (
          <span
            key={proto}
            className="text-[9px] bg-white border border-black/[0.08] rounded-md px-2 py-0.5 text-[#6e6e73]"
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
    <div className="bg-[#1d1d1f] rounded-2xl px-3.5 py-4 font-mono overflow-x-auto">
      <div className="flex gap-1.5 mb-3.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
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
          className="text-[10px] md:text-[12px] leading-[1.8] whitespace-nowrap"
          style={{ color: line.color || "transparent" }}
        >
          {line.text || "\u00A0"}
          {i === 7 && <span className="inline-block w-[7px] h-[15px] bg-[#34d399] ml-0.5 rounded-[1px]" style={{ animation: "blink 1s step-end infinite" }} />}
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
    <div className="bg-[#f5f5f7] rounded-2xl p-5 border border-black/[0.06]">
      <div className="flex items-center gap-2 mb-3.5">
        <TestTube size={14} color="#059669" />
        <span className="text-[11px] font-bold text-[#059669] uppercase tracking-wide">All Tests Passed</span>
        <span className="text-[10px] text-[#6e6e73] ml-auto">5/5</span>
      </div>
      {tests.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08 }}
          className={`flex items-center gap-2 py-[5px] ${
            i < tests.length - 1 ? "border-b border-black/[0.04]" : ""
          }`}
        >
          <CircleCheck size={12} color="#059669" />
          <span className="text-[10px] text-[#1d1d1f] font-mono flex-1">{t.name}</span>
          <span className="text-[9px] text-[#6e6e73]">{t.ms}ms</span>
        </motion.div>
      ))}
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-5 border border-black/[0.06]">
      <div className="flex items-center gap-2 mb-4">
        <Rocket size={14} color="#06c" />
        <span className="text-[11px] font-bold text-[#06c] uppercase tracking-wide">Production Live</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] ml-auto" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Uptime", value: "99.97%", color: "#059669" },
          { label: "Response", value: "< 200ms", color: "#06c" },
          { label: "Users", value: "1,247", color: "#7c3aed" },
          { label: "Queries/day", value: "8,432", color: "#ea580c" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-[10px] px-3 py-2.5 border border-black/[0.04]"
          >
            <div className="text-[9px] text-[#6e6e73] mb-0.5">{stat.label}</div>
            <div className="text-base font-bold" style={{ color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonitorMockup() {
  return (
    <div className="bg-[#1d1d1f] rounded-2xl p-5 overflow-hidden">
      <div className="flex items-center gap-2 mb-3.5">
        <Activity size={14} color="#34d399" />
        <span className="text-[11px] font-semibold text-[#34d399]">System Healthy</span>
        <span className="text-[9px] text-[#6e6e73] ml-auto">Live</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
      </div>
      <div className="flex items-end gap-0.5 h-10 mb-3">
        {Array.from({ length: 20 }).map((_, i) => {
          const h = 20 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
          return (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.03 }}
              className="flex-1 rounded-sm min-h-0.5"
              style={{ background: h > 60 ? "#fbbf24" : "#34d399" }}
            />
          );
        })}
      </div>
      <div className="flex gap-3">
        {[
          { label: "CPU", value: "24%", color: "#34d399" },
          { label: "RAM", value: "6.2G", color: "#60a5fa" },
          { label: "GPU", value: "45%", color: "#fbbf24" },
        ].map((m) => (
          <div key={m.label} className="flex-1">
            <div className="text-[9px] text-[#6e6e73] mb-0.5">{m.label}</div>
            <div className="text-[13px] font-bold" style={{ color: m.color }}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

/* ─── Interactive: Live Architecture Builder ─── */
function ArchitectureBuilder() {
  const [nodes, setNodes] = useState<string[]>([]);

  const allNodes = [
    { id: "ai", label: "AI Model (GPT-5)", icon: Cpu, color: "#6366f1", description: "โมเดล AI หลักสำหรับประมวลผลภาษา" },
    { id: "rag", label: "RAG Pipeline", icon: Database, color: "#06c", description: "ค้นหาข้อมูลจากฐานความรู้องค์กร", connectsTo: ["ai"] },
    { id: "line", label: "LINE Bot", icon: MessageSquare, color: "#00b900", description: "แชทบอทรับคำถามจากลูกค้า 24/7", connectsTo: ["ai", "rag"] },
    { id: "n8n", label: "n8n Workflow", icon: Workflow, color: "#f97316", description: "ระบบ automation เชื่อมทุกอย่างเข้าด้วยกัน", connectsTo: ["ai", "rag", "line"] },
    { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "#059669", description: "แดชบอร์ดติดตามผลแบบ real-time", connectsTo: ["ai", "n8n"] },
  ];

  const toggleNode = (id: string) => {
    setNodes((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );
  };

  const resetAll = () => setNodes([]);
  const addAll = () => setNodes(allNodes.map((n) => n.id));

  return (
    <div className="max-w-[980px] mx-auto py-20 md:py-[120px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <p className="text-[13px] font-semibold text-[#6366f1] uppercase tracking-widest mb-3">
          INTERACTIVE BUILDER
        </p>
        <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.03em]">
          ลองสร้าง Architecture ของคุณ
        </h3>
        <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto leading-relaxed">
          คลิกเลือก component ที่ต้องการ แล้วดูว่าระบบเชื่อมต่อกันอย่างไร
        </p>
      </motion.div>

      {/* Button Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {allNodes.map((node) => {
          const isActive = nodes.includes(node.id);
          return (
            <motion.button
              key={node.id}
              variants={fadeUp}
              onClick={() => toggleNode(node.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-300 cursor-pointer ${
                isActive
                  ? "text-white shadow-lg"
                  : "bg-white text-[#1d1d1f] border-black/10 hover:border-black/20"
              }`}
              style={
                isActive
                  ? { background: node.color, borderColor: node.color }
                  : {}
              }
            >
              <Plus
                size={14}
                className={`transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
              />
              {node.label}
            </motion.button>
          );
        })}
        <div className="flex gap-2 ml-2">
          <button
            onClick={addAll}
            className="text-xs text-[#06c] font-semibold px-3 py-2 rounded-lg hover:bg-[#06c]/5 transition-colors cursor-pointer bg-transparent border-none"
          >
            เลือกทั้งหมด
          </button>
          <button
            onClick={resetAll}
            className="text-xs text-[#86868b] font-semibold px-3 py-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer bg-transparent border-none"
          >
            รีเซ็ต
          </button>
        </div>
      </motion.div>

      {/* Canvas */}
      <div className="relative bg-[#f5f5f7] rounded-3xl p-6 md:p-10 min-h-[320px] border border-black/[0.06] overflow-hidden">
        {nodes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-[#86868b]"
          >
            <MousePointerClick size={40} className="mb-3 opacity-40" />
            <p className="text-sm font-medium">คลิกปุ่มด้านบนเพื่อเพิ่ม component</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {allNodes
              .filter((n) => nodes.includes(n.id))
              .map((node) => {
                const Icon = node.icon;
                const connections = node.connectsTo?.filter((c) => nodes.includes(c)) || [];
                return (
                  <motion.div
                    key={node.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="bg-white rounded-2xl p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-black/[0.04]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${node.color}12` }}
                      >
                        <Icon size={20} style={{ color: node.color }} />
                      </div>
                      <span className="text-sm font-bold text-[#1d1d1f]">{node.label}</span>
                    </div>
                    <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">
                      {node.description}
                    </p>
                    {connections.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {connections.map((c) => {
                          const target = allNodes.find((n) => n.id === c);
                          return (
                            <span
                              key={c}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                              style={{
                                color: target?.color,
                                background: `${target?.color}10`,
                              }}
                            >
                              → {target?.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>

        {/* Live connection count */}
        {nodes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center justify-center gap-6 text-xs text-[#6e6e73]"
          >
            <span className="flex items-center gap-1.5">
              <Box size={12} /> {nodes.length} components
            </span>
            <span className="flex items-center gap-1.5">
              <GitBranch size={12} />{" "}
              {allNodes
                .filter((n) => nodes.includes(n.id))
                .reduce(
                  (acc, n) =>
                    acc + (n.connectsTo?.filter((c) => nodes.includes(c)).length || 0),
                  0
                )}{" "}
              connections
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─── Interactive: Code Preview Toggle ─── */
function CodePreviewToggle() {
  const [activeTab, setActiveTab] = useState<"python" | "docker" | "n8n">("python");

  const tabs = [
    { id: "python" as const, label: "Python", icon: Code2 },
    { id: "docker" as const, label: "Docker", icon: Box },
    { id: "n8n" as const, label: "n8n", icon: Workflow },
  ];

  const codeSnippets = {
    python: {
      filename: "inference.py",
      lines: [
        { text: "from langchain.chat_models import ChatOpenAI", color: "#c084fc" },
        { text: "from langchain.vectorstores import Chroma", color: "#c084fc" },
        { text: "from langchain.chains import RetrievalQA", color: "#c084fc" },
        { text: "", color: "" },
        { text: "# โหลด AI Model + เชื่อมฐานความรู้องค์กร", color: "#6b7280" },
        { text: 'llm = ChatOpenAI(model="gpt-4o", temperature=0)', color: "#fbbf24" },
        { text: 'vectordb = Chroma(persist_directory="./company_data")', color: "#fbbf24" },
        { text: "", color: "" },
        { text: "qa_chain = RetrievalQA.from_chain_type(", color: "#34d399" },
        { text: "    llm=llm,", color: "#34d399" },
        { text: '    chain_type="stuff",', color: "#34d399" },
        { text: "    retriever=vectordb.as_retriever()", color: "#34d399" },
        { text: ")", color: "#34d399" },
        { text: "", color: "" },
        { text: '# ถามคำถาม → AI ตอบจากข้อมูลจริง', color: "#6b7280" },
        { text: 'result = qa_chain.run("สินค้า A250 มีสต็อกกี่ชิ้น?")', color: "#60a5fa" },
        { text: "print(result)", color: "#60a5fa" },
      ],
    },
    docker: {
      filename: "docker-compose.yml",
      lines: [
        { text: 'version: "3.8"', color: "#fbbf24" },
        { text: "services:", color: "#c084fc" },
        { text: "  ai-api:", color: "#34d399" },
        { text: "    build: ./api", color: "#e5e7eb" },
        { text: "    ports:", color: "#e5e7eb" },
        { text: '      - "8000:8000"', color: "#fbbf24" },
        { text: "    environment:", color: "#e5e7eb" },
        { text: "      - OPENAI_API_KEY=${OPENAI_KEY}", color: "#60a5fa" },
        { text: "    depends_on:", color: "#e5e7eb" },
        { text: "      - chromadb", color: "#60a5fa" },
        { text: "", color: "" },
        { text: "  chromadb:", color: "#34d399" },
        { text: "    image: chromadb/chroma:latest", color: "#e5e7eb" },
        { text: "    ports:", color: "#e5e7eb" },
        { text: '      - "8001:8000"', color: "#fbbf24" },
        { text: "    volumes:", color: "#e5e7eb" },
        { text: "      - chroma_data:/chroma/chroma", color: "#60a5fa" },
      ],
    },
    n8n: {
      filename: "workflow.json",
      lines: [
        { text: "{", color: "#e5e7eb" },
        { text: '  "name": "AI Customer Service",', color: "#fbbf24" },
        { text: '  "nodes": [', color: "#c084fc" },
        { text: "    {", color: "#e5e7eb" },
        { text: '      "type": "n8n-nodes-base.webhook",', color: "#34d399" },
        { text: '      "name": "LINE Webhook",', color: "#fbbf24" },
        { text: '      "parameters": {', color: "#e5e7eb" },
        { text: '        "path": "/line-bot",', color: "#60a5fa" },
        { text: '        "method": "POST"', color: "#60a5fa" },
        { text: "      }", color: "#e5e7eb" },
        { text: "    },", color: "#e5e7eb" },
        { text: "    {", color: "#e5e7eb" },
        { text: '      "type": "n8n-nodes-base.openAi",', color: "#34d399" },
        { text: '      "name": "AI Response",', color: "#fbbf24" },
        { text: '      "parameters": {', color: "#e5e7eb" },
        { text: '        "model": "gpt-4o"', color: "#60a5fa" },
        { text: "      }", color: "#e5e7eb" },
      ],
    },
  };

  const currentCode = codeSnippets[activeTab];

  return (
    <div className="bg-[#f5f5f7] -mx-4 md:-mx-6 px-4 md:px-6 py-20 md:py-[120px]">
      <div className="max-w-[980px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-[13px] font-semibold text-[#059669] uppercase tracking-widest mb-3">
            CODE PREVIEW
          </p>
          <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.03em]">
            ดูโค้ดจริงที่เราเขียน
          </h3>
          <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto leading-relaxed">
            ตัวอย่างโค้ดจาก stack ที่เราใช้จริงในโปรเจกต์ — สลับแท็บเพื่อดูแต่ละส่วน
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        >
          {/* Terminal header */}
          <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[11px] text-[#6b7280] ml-2 font-mono">
                {currentCode.filename}
              </span>
            </div>
            <Terminal size={14} className="text-[#6b7280]" />
          </div>

          {/* Tabs */}
          <div className="bg-[#252526] flex border-b border-[#333]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold transition-all duration-200 border-b-2 cursor-pointer bg-transparent border-l-0 border-r-0 border-t-0 ${
                    isActive
                      ? "text-white border-[#06c] bg-[#1e1e1e]"
                      : "text-[#6b7280] border-transparent hover:text-[#9ca3af] hover:bg-[#2a2a2a]"
                  }`}
                >
                  <Icon size={12} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Code area */}
          <div className="bg-[#1e1e1e] p-5 md:p-6 overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-[12px] md:text-[13px] leading-[1.8]"
              >
                {currentCode.lines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-[#4b5563] w-8 text-right mr-4 select-none shrink-0">
                      {i + 1}
                    </span>
                    <span style={{ color: line.color || "#e5e7eb" }}>
                      {line.text || "\u00A0"}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Interactive: Project Timeline Calculator ─── */
function TimelineCalculator() {
  const [workflowCount, setWorkflowCount] = useState(5);

  // Calculate estimates based on workflow count
  const getTimeline = (count: number) => {
    if (count <= 3) return { weeks: "1-2", label: "สัปดาห์" };
    if (count <= 7) return { weeks: "2-4", label: "สัปดาห์" };
    if (count <= 12) return { weeks: "4-6", label: "สัปดาห์" };
    return { weeks: "6-8", label: "สัปดาห์" };
  };

  const getCost = (count: number) => {
    const base = 50000;
    const perWorkflow = 30000;
    const min = base + count * perWorkflow * 0.8;
    const max = base + count * perWorkflow * 1.3;
    return {
      min: Math.round(min / 1000) * 1000,
      max: Math.round(max / 1000) * 1000,
    };
  };

  const getTeam = (count: number) => {
    if (count <= 3) return { size: "1-2", roles: "Dev + PM" };
    if (count <= 8) return { size: "2-3", roles: "Dev + AI Engineer + PM" };
    if (count <= 14) return { size: "3-4", roles: "2 Dev + AI Engineer + PM" };
    return { size: "4-5", roles: "2 Dev + AI Engineer + DevOps + PM" };
  };

  const timeline = getTimeline(workflowCount);
  const cost = getCost(workflowCount);
  const team = getTeam(workflowCount);

  const formatNumber = (n: number) => n.toLocaleString("th-TH");

  return (
    <div className="max-w-[980px] mx-auto py-20 md:py-[120px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <p className="text-[13px] font-semibold text-[#f97316] uppercase tracking-widest mb-3">
          PROJECT CALCULATOR
        </p>
        <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.03em]">
          ประเมินโปรเจกต์ของคุณ
        </h3>
        <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto leading-relaxed">
          เลื่อน slider เพื่อดูประมาณการ timeline, งบประมาณ และทีมที่ต้องใช้
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-[#f5f5f7] rounded-3xl p-8 md:p-12 border border-black/[0.06]"
      >
        {/* Slider section */}
        <div className="text-center mb-10">
          <label className="text-sm font-semibold text-[#1d1d1f] mb-1 block">
            จำนวน Workflow / AI Features
          </label>
          <p className="text-xs text-[#86868b] mb-6">
            เช่น Chatbot, OCR, Automation, Dashboard, API ฯลฯ
          </p>
          <div className="flex items-center justify-center gap-6 max-w-[500px] mx-auto">
            <span className="text-xs text-[#86868b] font-mono w-6 text-right">1</span>
            <input
              type="range"
              min={1}
              max={20}
              value={workflowCount}
              onChange={(e) => setWorkflowCount(Number(e.target.value))}
              className="flex-1 h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #f97316 0%, #f97316 ${((workflowCount - 1) / 19) * 100}%, #d1d5db ${((workflowCount - 1) / 19) * 100}%, #d1d5db 100%)`,
              }}
            />
            <span className="text-xs text-[#86868b] font-mono w-6">20</span>
          </div>
          <motion.div
            key={workflowCount}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="mt-4"
          >
            <span className="text-[48px] md:text-[56px] font-bold text-[#f97316] tracking-tight">
              {workflowCount}
            </span>
            <span className="text-lg text-[#86868b] ml-2">workflows</span>
          </motion.div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            key={`timeline-${workflowCount}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="bg-white rounded-2xl p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#dbeafe] flex items-center justify-center mx-auto mb-3">
              <Calendar size={22} className="text-[#2563eb]" />
            </div>
            <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-1">
              Timeline
            </p>
            <p className="text-[28px] font-bold text-[#1d1d1f]">
              {timeline.weeks}
            </p>
            <p className="text-sm text-[#6e6e73]">{timeline.label}</p>
          </motion.div>

          <motion.div
            key={`cost-${workflowCount}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#fef3c7] flex items-center justify-center mx-auto mb-3">
              <DollarSign size={22} className="text-[#d97706]" />
            </div>
            <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-1">
              งบประมาณโดยประมาณ
            </p>
            <p className="text-[28px] font-bold text-[#1d1d1f]">
              {formatNumber(cost.min)}-{formatNumber(cost.max)}
            </p>
            <p className="text-sm text-[#6e6e73]">บาท</p>
          </motion.div>

          <motion.div
            key={`team-${workflowCount}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#d1fae5] flex items-center justify-center mx-auto mb-3">
              <Users size={22} className="text-[#059669]" />
            </div>
            <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-1">
              ทีมที่ต้องใช้
            </p>
            <p className="text-[28px] font-bold text-[#1d1d1f]">
              {team.size}
            </p>
            <p className="text-sm text-[#6e6e73]">{team.roles}</p>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[#86868b] text-center mt-6">
          * ตัวเลขเป็นการประมาณการเบื้องต้น ราคาจริงขึ้นอยู่กับความซับซ้อนและ requirement ของโปรเจกต์
        </p>
      </motion.div>
    </div>
  );
}

export default function Development() {
  /* Process steps data */
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
    <section id="development" className="bg-white px-4 md:px-6 overflow-hidden">
      {/* ──────────── SECTION 1: Hero ──────────── */}
      <div className="max-w-[980px] mx-auto apple-section text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[13px] font-semibold text-[#06c] uppercase tracking-widest mb-3">
            ENGINEERING LAB
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            Custom AI Development.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47] mb-4">
            ออกแบบและสร้างระบบ AI ที่พอดีกับธุรกิจคุณ
          </p>
          <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto leading-[1.7]">
            ไม่ใช่แค่ใช้เครื่องมือสำเร็จรูป — เราออกแบบ พัฒนา และดูแลระบบ AI
            ที่สร้างขึ้นเฉพาะสำหรับกระบวนการทำงานของคุณ ทั้ง On-Premise และ Cloud
          </p>
        </motion.div>
      </div>

      {/* ──────────── SECTION 2: Bento Grid ──────────── */}
      <div className="max-w-[980px] mx-auto pb-20 md:pb-[120px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.03em]">
            สิ่งที่เราสร้าง
          </h3>
          <p className="text-[17px] text-[#6e6e73] max-w-[480px] mx-auto leading-relaxed">
            ครอบคลุมทุก AI use case ที่องค์กรต้องการ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
          {/* Large: AI Chatbot (spans 2 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="md:col-span-2 bg-white rounded-2xl p-7 md:px-7 md:py-8 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-10 h-10 rounded-xl bg-[rgba(0,102,204,0.08)] flex items-center justify-center">
                <MessageSquare size={20} color="#06c" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1d1d1f]">
                  AI Chatbot & Customer Service
                </h4>
                <p className="text-[13px] text-[#6e6e73]">
                  แชทบอทอัจฉริยะ ตอบคำถาม 24/7 รองรับภาษาไทย
                </p>
              </div>
            </div>
            <ChatMockup />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </motion.div>

          {/* Small: RAG Knowledge Base */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl px-5 pt-7 pb-5 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
          >
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(124,58,237,0.08)] flex items-center justify-center mb-3">
              <Database size={18} color="#7c3aed" />
            </div>
            <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-1">
              RAG Knowledge Base
            </h4>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
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
            className="bg-white rounded-2xl px-5 pt-7 pb-5 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
          >
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(234,88,12,0.08)] flex items-center justify-center mb-3">
              <Workflow size={18} color="#ea580c" />
            </div>
            <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-1">
              Workflow Automation
            </h4>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
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
            className="bg-white rounded-2xl px-5 pt-7 pb-5 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
          >
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(5,150,105,0.08)] flex items-center justify-center mb-3">
              <BarChart3 size={18} color="#059669" />
            </div>
            <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-1">
              Data Analytics
            </h4>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
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
            className="bg-white rounded-2xl px-5 pt-7 pb-5 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
          >
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(0,102,204,0.08)] flex items-center justify-center mb-3">
              <Plug size={18} color="#06c" />
            </div>
            <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-1">
              System Integration
            </h4>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
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
            className="md:col-span-2 bg-white rounded-3xl p-7 md:px-7 md:py-8 border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.03)] relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center">
                <Server size={20} color="#1d1d1f" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1d1d1f]">
                  Enterprise AI Infrastructure
                </h4>
                <p className="text-[13px] text-[#6e6e73]">
                  วางโครงสร้าง AI ระดับองค์กร ทั้ง On-Premise และ Cloud
                </p>
              </div>
            </div>
            <ArchitectureDiagram />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* ──────────── SECTION 3: Process ──────────── */}
      <div className="bg-[#f5f5f7] -mx-4 md:-mx-6 px-4 md:px-6 py-16 md:py-[120px]">
        <div className="max-w-[980px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.03em]">
              กระบวนการพัฒนา
            </h3>
            <p className="text-[17px] text-[#6e6e73] max-w-[480px] mx-auto leading-relaxed">
              6 ขั้นตอนที่พิสูจน์แล้วว่าส่งมอบคุณค่าได้จริง
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              const isLeft = step.align === "left";
              return (
                <div
                  key={step.label}
                  className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-12 md:items-center"
                >
                  {/* Text side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={isLeft ? fadeLeft : fadeRight}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={isLeft ? "md:order-1" : "md:order-2"}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#06c] flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(0,102,204,0.35)]">
                        <span className="text-base md:text-xl font-bold text-white">{i + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] md:text-xs font-bold text-[#06c] uppercase tracking-widest flex items-center gap-1.5 truncate">
                          <StepIcon size={14} color="#06c" className="shrink-0" /> Step {i + 1} — {step.label}
                        </div>
                        <div className="text-[12px] md:text-[13px] text-[#6e6e73] font-medium truncate">{step.thai}</div>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-[#1d1d1f] mb-3 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[15px] text-[#6e6e73] leading-[1.7]">
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
                    className={`${isLeft ? "md:order-2" : "md:order-1"} max-h-[200px] md:max-h-none overflow-hidden rounded-xl md:rounded-2xl`}
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
      <div className="max-w-[980px] mx-auto py-20 md:py-[120px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.03em]">
            On-Premise vs Cloud
          </h3>
          <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto leading-relaxed">
            เราทำได้ทั้งสองแบบ เลือกแบบที่เหมาะกับองค์กรของคุณ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {/* LocalAI Card (Dark) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#1d1d1f] rounded-3xl p-8 md:p-9 relative overflow-hidden hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            {/* Subtle gradient overlay */}
            <div
              className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,102,204,0.12) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-[14px] bg-white/[0.08] flex items-center justify-center">
                  <Server size={24} color="#fff" />
                </div>
                <div>
                  <div className="text-[22px] font-bold text-white">On-Premise AI</div>
                  <div className="text-[13px] text-white/50">LocalAI Thailand</div>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-[1.7] mb-7">
                ข้อมูลอยู่ในองค์กร 100% ควบคุมได้เต็มที่ เหมาะกับธุรกิจที่ต้องการ compliance สูงสุด
              </p>

              <div className="flex flex-col gap-3.5 mb-8">
                {[
                  { icon: Lock, text: "ข้อมูลไม่ออกนอกองค์กร" },
                  { icon: Zap, text: "ไม่มีค่า API รายเดือน" },
                  { icon: Shield, text: "Air-gapped environment" },
                  { icon: Cpu, text: "รองรับ GPU Server ทุกรุ่น" },
                  { icon: Gauge, text: "Latency ต่ำ ประมวลผลเร็ว" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-sm text-white/85">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 rounded-xl px-[18px] py-2.5 no-underline"
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
            className="bg-white rounded-3xl p-8 md:p-9 border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.03)] relative overflow-hidden hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            <div
              className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-[14px] bg-[rgba(0,102,204,0.08)] flex items-center justify-center">
                  <Cloud size={24} color="#06c" />
                </div>
                <div>
                  <div className="text-[22px] font-bold text-[#1d1d1f]">Cloud AI</div>
                  <div className="text-[13px] text-[#6e6e73]">CloudAI Thailand</div>
                </div>
              </div>

              <p className="text-sm text-[#6e6e73] leading-[1.7] mb-7">
                เข้าถึง frontier model ล่าสุด ไม่ต้องลงทุนฮาร์ดแวร์ Scale ได้ไม่จำกัดตามการเติบโตของธุรกิจ
              </p>

              <div className="flex flex-col gap-3.5 mb-8">
                {[
                  { icon: Rocket, text: "เริ่มต้นเร็ว ไม่ต้องซื้อเซิร์ฟเวอร์" },
                  { icon: TrendingUp, text: "Scale ได้ตามการใช้งาน" },
                  { icon: Globe, text: "ใช้ model ล่าสุด GPT-4o, Claude" },
                  { icon: Clock, text: "จ่ายตามใช้จริง pay-as-you-go" },
                  { icon: Zap, text: "Deploy ภายใน 1-2 สัปดาห์" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#1d1d1f]">
                      <div className="w-7 h-7 rounded-lg bg-[rgba(0,102,204,0.06)] flex items-center justify-center shrink-0">
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#06c] bg-[rgba(0,102,204,0.06)] rounded-xl px-[18px] py-2.5 no-underline"
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
          className="text-center bg-[#f5f5f7] rounded-[20px] px-8 py-7"
        >
          <p className="text-[17px] text-[#1d1d1f] font-semibold mb-1">
            ไม่แน่ใจ? ปรึกษาเราฟรี
          </p>
          <p className="text-sm text-[#6e6e73] mb-4">
            เราช่วยวิเคราะห์ว่าแบบไหนเหมาะกับองค์กรคุณ ไม่มีค่าใช้จ่าย
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#06c] text-white text-sm font-semibold px-7 py-3 rounded-xl no-underline cursor-pointer border-none"
          >
            นัดพูดคุย <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* ──────────── INTERACTIVE: Live Architecture Builder ──────────── */}
      <ArchitectureBuilder />

      {/* ──────────── INTERACTIVE: Code Preview Toggle ──────────── */}
      <CodePreviewToggle />

      {/* ──────────── INTERACTIVE: Project Timeline Calculator ──────────── */}
      <TimelineCalculator />

      {/* ──────────── SECTION 5: Case Studies ──────────── */}
      <div className="bg-[#f5f5f7] -mx-4 md:-mx-6 px-4 md:px-6 py-20 md:py-[120px]">
        <div className="max-w-[980px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.03em]">
              ผลงาน
            </h3>
            <p className="text-[17px] text-[#6e6e73] max-w-[480px] mx-auto leading-relaxed">
              ตัวอย่างโปรเจกต์จริงที่เราส่งมอบให้ลูกค้า
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {caseExamples.map((ex, i) => (
              <motion.div
                key={ex.industry}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="bg-white rounded-3xl p-7 md:p-8 border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col border-l-4"
                style={{ borderLeftColor: ex.color }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg tracking-wide"
                    style={{
                      color: ex.color,
                      background: `${ex.color}0a`,
                    }}
                  >
                    {ex.tag}
                  </span>
                  <span className="text-xs text-[#6e6e73]">{ex.industry}</span>
                </div>

                <h4 className="text-[19px] font-bold text-[#1d1d1f] mb-2.5 leading-tight">
                  {ex.project}
                </h4>

                <p className="text-sm text-[#6e6e73] leading-relaxed mb-5 flex-1">
                  {ex.description}
                </p>

                {/* Result highlight */}
                <div
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl mb-4"
                  style={{
                    background: `${ex.color}08`,
                    border: `1px solid ${ex.color}15`,
                  }}
                >
                  <TrendingUp size={16} color={ex.color} />
                  <span className="text-sm font-bold" style={{ color: ex.color }}>{ex.result}</span>
                </div>

                {/* Tech tags */}
                <div className="flex gap-1.5 flex-wrap">
                  {ex.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-[3px] rounded-lg font-medium"
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
      <div className="max-w-[980px] mx-auto py-20 md:py-[120px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-[32px] md:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 leading-[1.15] tracking-tight">
            เริ่มโปรเจกต์ AI ของคุณ
          </h3>
          <p className="text-lg text-[#6e6e73] max-w-[520px] mx-auto mb-9 leading-relaxed">
            ทุกโปรเจกต์เริ่มจากการพูดคุย บอกเราว่าคุณต้องการอะไร
            แล้วเราจะออกแบบ solution ที่พอดีกับคุณ
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#06c] text-white text-base font-semibold px-9 py-4 rounded-[14px] no-underline cursor-pointer border-none"
            >
              ปรึกษาฟรี <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-black/[0.04] text-[#1d1d1f] text-base font-semibold px-9 py-4 rounded-[14px] no-underline cursor-pointer border-none"
            >
              ดูบริการทั้งหมด <ChevronRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
