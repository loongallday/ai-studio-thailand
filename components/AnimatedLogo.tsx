"use client";
import { motion } from "framer-motion";

export default function AnimatedLogo({ size = 1 }: { size?: number }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 80"
      fill="none"
      className="w-full max-w-[380px] sm:max-w-[460px] h-auto mx-auto"
      style={{ transform: `scale(${size})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <defs>
        <linearGradient id="studioGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <motion.stop
            offset="0%"
            animate={{ stopColor: ["#e8590c", "#d4a017", "#e8590c"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.stop
            offset="100%"
            animate={{ stopColor: ["#d4a017", "#e8590c", "#d4a017"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </linearGradient>
      </defs>

      {/* "AI" — fade + slide up */}
      <motion.text
        x="10" y="58"
        fontFamily="Bai Jamjuree, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="56"
        letterSpacing="-1"
        fill="#1d1d1f"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        AI
      </motion.text>

      {/* "Studio" — fade + slide up with gradient */}
      <motion.text
        x="100" y="58"
        fontFamily="Bai Jamjuree, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="56"
        letterSpacing="-1"
        fill="url(#studioGrad)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
      >
        Studio
      </motion.text>

      {/* Underline under "Studio" — draws itself */}
      <motion.line
        x1="100" y1="66" x2="340" y2="66"
        stroke="url(#studioGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
      />

      {/* Dot accent */}
      <motion.circle
        cx="348" cy="48"
        r="4"
        fill="#e8590c"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3, duration: 0.3, type: "spring", stiffness: 300 }}
      />
      <motion.circle
        cx="348" cy="48"
        r="10"
        fill="none"
        stroke="#e8590c"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
      />
    </motion.svg>
  );
}
