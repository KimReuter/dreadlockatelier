"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollThread() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed left-8 top-0 w-4 h-full z-40 pointer-events-none">
      <svg
        width="16"
        height="100%"
        viewBox="0 0 16 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M8 0 C8 0, 13 150, 8 300 C3 450, 13 600, 8 750 C3 900, 8 1000, 8 1000"
          stroke="#999E8C"
          strokeWidth="1"
          fill="none"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}