import { motion } from "framer-motion";
import React from "react";
import { AlertTriangle, BarChart2, GitCommit } from "lucide-react";

const LogLine = ({ className, children, duration = 12, delay = 0 }: { className?: string; children?: React.ReactNode; duration?: number; delay?: number }) => (
  <motion.p
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: [0, 1, 1, 0] }}
    transition={{ duration, repeat: Infinity, repeatDelay: delay, ease: "linear" }}
    className={`absolute font-mono text-xs text-blue-600/80 ${className}`}
  >
    {children}
  </motion.p>
);

const AlertIcon = ({ className, transition }: { className?: string; transition?: any }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [1, 1, 0] }}
        transition={transition || { duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 10 + 8 }}
        className={`absolute text-yellow-500 ${className}`}
    >
        <AlertTriangle size={24} />
    </motion.div>
);

const Chart = ({ className }: { className?: string }) => (
    <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute text-green-500 ${className}`}
    >
        <BarChart2 size={32} />
    </motion.div>
);

export const LedgerBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <LogLine className="top-[15%] left-[5%]" delay={1}>[INFO] User:123 authenticated.</LogLine>
      <LogLine className="top-[30%] left-[10%]" duration={10} delay={4}>{"[WARN] Latency > 200ms for /api/data"}</LogLine>
      <LogLine className="top-[45%] left-[5%]" duration={14} delay={2}>[FIX] Deployed patch v1.2.3</LogLine>
      <LogLine className="bottom-[20%] left-[15%]" delay={6}>[PREDICT] Tech debt increase: 5%</LogLine>

      <AlertIcon className="top-[32%] right-[15%]" />
      
      <Chart className="bottom-[30%] right-[20%]" />
      
      <motion.div
          className="absolute top-[10%] right-[10%] w-px h-[80%] bg-gray-200"
      >
          <motion.div 
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
            animate={{ y: ['0%', '2000%']}}
            transition={{ duration: 8, repeat: Infinity, ease:'linear'}}
          />
      </motion.div>

       <motion.div
          className="absolute bottom-[10%] left-[10%] w-[80%] h-px bg-gray-200"
      >
          <motion.div 
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
            animate={{ x: ['0%', '4000%']}}
            transition={{ duration: 12, repeat: Infinity, ease:'linear', delay: 2}}
          />
      </motion.div>

    </div>
  );
}; 