import { motion, type Transition } from "framer-motion";
import React from "react";
import { CheckCircle, Smartphone, Tablet, Globe, Bug } from "lucide-react";

const DeviceIcon = ({ className, children, transition }: { className?: string; children?: React.ReactNode; transition?: Transition }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={transition || { duration: 12, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 10 }}
        className={`absolute text-gray-400 ${className}`}
    >
        {children}
    </motion.div>
);

const BugIcon = ({ className, transition }: { className?: string; transition?: Transition }) => (
    <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: [0, 1, 0], rotate: [-45, 0, 45] }}
        transition={transition || { duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 12 + 5 }}
        className={`absolute text-yellow-500 ${className}`}
    >
        <Bug size={24} />
    </motion.div>
);

const TestSpinner = ({ className }: { className?: string }) => (
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className={`absolute text-blue-500 ${className}`}
    >
        <CheckCircle size={32} />
    </motion.div>
);

const ProgressBar = ({ className, transition }: { className?: string; transition?: Transition }) => (
    <motion.div
        className={`absolute h-2 bg-blue-200 rounded-full ${className}`}
        initial={{ width: 0 }}
        animate={{ width: ["0%", "100%", "0%"] }}
        transition={transition || { duration: 7, repeat: Infinity, ease: "linear", repeatDelay: Math.random() * 8 + 2 }}
    />
);

const FlowchartLine = ({ className, d, transition }: { className?: string; d: string; transition?: Transition }) => (
    <motion.svg
        className={`absolute ${className}`}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
    >
        <motion.path
            d={d}
            stroke="#0984E3"
            strokeWidth="2"
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.7, 0] }}
            transition={transition || { duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 10 }}
        />
    </motion.svg>
);

export const FluxBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <DeviceIcon className="top-[15%] left-[10%]" transition={{ duration: 10, repeatDelay: 2 }}>
        <Smartphone size={28} />
      </DeviceIcon>
      <DeviceIcon className="bottom-[20%] right-[15%]" transition={{ duration: 14, repeatDelay: 4 }}>
        <Tablet size={32} />
      </DeviceIcon>
      <DeviceIcon className="top-[40%] right-[10%]" transition={{ duration: 11, repeatDelay: 6 }}>
        <Globe size={30} />
      </DeviceIcon>
      <DeviceIcon className="top-[75%] left-[25%]" transition={{ duration: 9, repeatDelay: 8 }}>
        <Smartphone size={24} />
      </DeviceIcon>

      <BugIcon className="top-[25%] right-[25%]" />
      <BugIcon className="bottom-[30%] left-[15%]" transition={{ duration: 6, repeatDelay: 8}} />
      <BugIcon className="top-[60%] right-[45%]" transition={{ duration: 5, repeatDelay: 10}} />

      <TestSpinner className="bottom-[15%] right-[35%]" />
      <TestSpinner className="top-[55%] left-[20%]" />
      <TestSpinner className="top-[10%] right-[50%]" />

      <ProgressBar className="w-[10%] top-[30%] left-[30%]" />
      <ProgressBar className="w-[15%] bottom-[40%] right-[20%]" transition={{ duration: 6, repeatDelay: 5 }} />

      <FlowchartLine d="M 10,10 C 20,20 40,20 50,10" className="top-[5%] left-[40%]" />
      <FlowchartLine d="M 20,80 Q 50,20 80,80" className="bottom-[5%] left-[10%]" transition={{ duration: 10, repeatDelay: 5 }} />
    </div>
  );
}; 