"use client";
import { motion } from "framer-motion";

export default function AnimatedLogo({ size = 1 }: { size?: number }) {
  const scale = size;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 70"
      fill="none"
      style={{ width: 320 * scale, height: 70 * scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        {/* Animated gradient */}
        <linearGradient id="studioGradAnim" x1="0%" y1="0%" x2="100%" y2="100%">
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

        {/* Clip paths for letter-by-letter reveal */}
        <clipPath id="clipA">
          <motion.rect
            x="0" y="0" width="40" height="70"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          />
        </clipPath>
        <clipPath id="clipI">
          <motion.rect
            x="42" y="0" width="20" height="70"
            initial={{ width: 0 }}
            animate={{ width: 20 }}
            transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
          />
        </clipPath>
        <clipPath id="clipStudio">
          <motion.rect
            x="72" y="0" width="250" height="70"
            initial={{ width: 0 }}
            animate={{ width: 250 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </clipPath>
      </defs>

      {/* "A" — slides in */}
      <g clipPath="url(#clipA)">
        <motion.text
          x="0" y="52"
          fontFamily="Bai Jamjuree, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="54"
          letterSpacing="-2"
          fill="#1d1d1f"
          initial={{ y: 70 }}
          animate={{ y: 52 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          A
        </motion.text>
      </g>

      {/* "I" — slides in */}
      <g clipPath="url(#clipI)">
        <motion.text
          x="38" y="52"
          fontFamily="Bai Jamjuree, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="54"
          letterSpacing="-2"
          fill="#1d1d1f"
          initial={{ y: 70 }}
          animate={{ y: 52 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
        >
          I
        </motion.text>
      </g>

      {/* Space */}

      {/* "Studio" — gradient, reveals left-to-right */}
      <g clipPath="url(#clipStudio)">
        <motion.text
          x="72" y="52"
          fontFamily="Bai Jamjuree, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="54"
          letterSpacing="-2"
          fill="url(#studioGradAnim)"
          initial={{ y: 70 }}
          animate={{ y: 52 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Studio
        </motion.text>
      </g>

      {/* Underline that draws itself */}
      <motion.line
        x1="72" y1="58" x2="248" y2="58"
        stroke="url(#studioGradAnim)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      />

      {/* Subtle glow dot after "Studio" */}
      <motion.circle
        cx="255" cy="42"
        r="3"
        fill="#e8590c"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.3, type: "spring", stiffness: 300 }}
      />
      <motion.circle
        cx="255" cy="42"
        r="8"
        fill="none"
        stroke="#e8590c"
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity }}
      />
    </motion.svg>
  );
}
