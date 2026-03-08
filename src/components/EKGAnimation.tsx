import { motion } from 'framer-motion';

export function EKGAnimation() {
  return (
    <div className="absolute right-0 top-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[400px] lg:w-[1000px] lg:h-[500px]"
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="ekgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0 200 L200 200 L220 200 L240 120 L260 280 L280 200 L300 200 L320 200 L340 200 L360 150 L380 250 L400 200 L420 200 L440 200 L460 200 L480 200 L500 180 L520 220 L540 200 L560 200 L580 200 L600 200 L620 200 L640 200 L660 200 L680 200 L700 200 L720 200 L740 200 L760 200 L780 200 L800 200 L820 200 L840 200 L860 200 L880 200 L900 200 L920 200 L940 200 L960 200 L980 200 L1000 200"
          stroke="url(#ekgGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
            },
            opacity: {
              duration: 0.5,
            },
          }}
        />
        
        <motion.path
          d="M0 200 L200 200 L220 200 L240 120 L260 280 L280 200 L300 200 L320 200 L340 200 L360 150 L380 250 L400 200 L420 200 L440 200 L460 200 L480 200 L500 180 L520 220 L540 200 L560 200 L580 200 L600 200 L620 200 L640 200 L660 200 L680 200 L700 200 L720 200 L740 200 L760 200 L780 200 L800 200 L820 200 L840 200 L860 200 L880 200 L900 200 L920 200 L940 200 L960 200 L980 200 L1000 200"
          stroke="rgba(6, 182, 212, 0.6)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />
      </svg>
    </div>
  );
}
