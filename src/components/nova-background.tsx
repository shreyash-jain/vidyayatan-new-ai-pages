import { motion, type Transition } from "framer-motion";
import React from "react";
import { Check, MessageSquare, FileText } from "lucide-react";

const TaskCard = ({ className, children, transition }: { className?: string; children?: React.ReactNode; transition?: Transition }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: [0, 1, 1, 0], y: [50, 0, 0, -50] }}
        transition={transition || { duration: 15, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 10 }}
        className={`absolute bg-white shadow-lg border border-gray-200/80 rounded-lg p-3 ${className}`}
    >
        {children}
    </motion.div>
);

const FeedbackIcon = ({ className, transition }: { className?: string; transition?: Transition }) => (
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1, 0] }}
        transition={transition || { duration: 12, repeat: Infinity, ease: "circOut", repeatDelay: Math.random() * 8 + 4 }}
        className={`absolute text-orange-400 ${className}`}
    >
        <MessageSquare size={24} />
    </motion.div>
);

const DocumentIcon = ({ className, transition }: { className?: string; transition?: Transition }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={transition || { duration: 10, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 5 }}
        className={`absolute text-purple-400 ${className}`}
    >
        <FileText size={28} />
    </motion.div>
);

export const NovaBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background with very subtle accents */}
      <div className="absolute inset-0 bg-white" />

      {/* Animated Elements */}
      <TaskCard className="top-[10%] left-[15%] w-40" transition={{ duration: 18, repeat: Infinity, repeatDelay: 2 }}>
        <p className="text-xs font-semibold text-gray-700">User Research</p>
        <div className="w-full h-1 bg-purple-200 rounded-full mt-2" />
      </TaskCard>

      <TaskCard className="top-[40%] right-[10%] w-48" transition={{ duration: 20, repeat: Infinity, repeatDelay: 5 }}>
        <p className="text-xs font-semibold text-gray-700">Feature Spec: API Integration</p>
        <div className="w-full h-1 bg-aqua-200 rounded-full mt-2" />
        <motion.div initial={{ scale: 0}} animate={{scale: 1}} transition={{delay: 10, duration: 0.3}} className="absolute -top-2 -right-2 bg-green-400 text-white rounded-full p-0.5">
            <Check size={14} />
        </motion.div>
      </TaskCard>

      <TaskCard className="bottom-[15%] left-[25%] w-36" transition={{ duration: 16, repeat: Infinity, repeatDelay: 3 }}>
        <p className="text-xs font-semibold text-gray-700">Q3 Roadmap</p>
        <div className="w-full h-1 bg-orange-200 rounded-full mt-2" />
      </TaskCard>

      <FeedbackIcon className="top-[60%] left-[10%]" />
      <FeedbackIcon className="bottom-[10%] right-[15%]" transition={{ duration: 14, repeat: Infinity, repeatDelay: 6}} />

      <DocumentIcon className="top-[15%] right-[20%]" />
      <DocumentIcon className="bottom-[40%] left-[5%]" transition={{ duration: 12, repeat: Infinity, repeatDelay: 4 }} />
      
    </div>
  );
}; 