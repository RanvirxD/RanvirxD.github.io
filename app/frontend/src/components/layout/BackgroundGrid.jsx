import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundGrid() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <motion.svg
        style={{ y }}
        className="absolute -right-24 top-[8vh] w-[65vw] max-w-[900px] opacity-[0.09] dark:opacity-[0.12]"
        viewBox="0 0 800 800"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
      >
        {/* Circuit board line art */}
        <g>
          <path d="M40 120 H320 V60 H520" />
          <path d="M40 200 H180 V260 H420 V180 H720" />
          <path d="M40 320 H220 V400 H520 V340 H760" />
          <path d="M40 460 H140 V520 H300 V460 H520 V560 H760" />
          <path d="M40 620 H240 V700 H520 V640 H720" />
          <path d="M120 40 V120 M420 40 V180 M660 40 V180 M180 260 V360 M420 400 V520 M300 520 V660 M660 460 V620" />
          {[
            [120, 40], [420, 40], [660, 40], [520, 60], [320, 120], [180, 200],
            [420, 260], [720, 200], [220, 320], [520, 340], [760, 320],
            [140, 460], [300, 460], [520, 460], [760, 560], [240, 620], [520, 640], [720, 620],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />
          ))}
          <rect x="360" y="360" width="80" height="80" rx="4" />
          <rect x="376" y="376" width="48" height="48" rx="2" />
          <path d="M360 380 H340 M360 400 H340 M360 420 H340 M440 380 H460 M440 400 H460 M440 420 H460 M380 360 V340 M400 360 V340 M420 360 V340 M380 440 V460 M400 440 V460 M420 440 V460" />
        </g>
      </motion.svg>

      {/* Second floating chip cluster (parallax layer 2) */}
      <motion.svg
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute -left-32 top-[45vh] w-[45vw] max-w-[620px] opacity-[0.07] dark:opacity-[0.1]"
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <rect x="180" y="180" width="240" height="240" rx="6" />
        <rect x="220" y="220" width="160" height="160" rx="3" />
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={i}>
            <path d={`M180 ${200 + i * 22} H120`} />
            <path d={`M420 ${200 + i * 22} H480`} />
            <path d={`M${200 + i * 22} 180 V120`} />
            <path d={`M${200 + i * 22} 420 V480`} />
          </g>
        ))}
      </motion.svg>
    </div>
  );
}