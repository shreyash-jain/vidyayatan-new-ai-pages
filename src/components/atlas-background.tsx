import { motion, type Transition } from "framer-motion";
import React from "react";
import { Type } from "lucide-react";

const WireframeBlock = ({ className, transition, children }: { className?: string; transition?: Transition; children?: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={transition || { duration: 15, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 8 }}
        className={`absolute border-2 border-dashed border-gray-300 rounded-lg p-2 ${className}`}
    >
        {children}
    </motion.div>
);

const ColorSwatch = ({ className, color }: { className?: string; color: string }) => (
    <motion.div
        initial={{ opacity: 0.8, scale: 0 }}
        animate={{ opacity: [0.8, 1, 0.8], scale: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: Math.random() * 5 }}
        className={`absolute w-8 h-8 rounded-full shadow-md ${color} ${className}`}
    />
);

const PenPath = () => (
    <motion.svg className="absolute w-full h-full" viewBox="0 0 200 200">
        <motion.path
            d="M 20,80 C 40,30 80,30 100,80 S 160,130 180,80"
            fill="transparent"
            stroke="#6C5CE7"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
    </motion.svg>
);

export const AtlasBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
        <PenPath />
        
        <WireframeBlock className="top-[15%] left-[10%] w-32 h-16" />
        <WireframeBlock className="bottom-[20%] right-[15%] w-40 h-20">
            <div className="w-full h-4 bg-gray-200/80 rounded-sm" />
            <div className="w-10/12 h-4 bg-gray-200/80 rounded-sm mt-2" />
        </WireframeBlock>

        <ColorSwatch color="bg-violet-400" className="top-[20%] right-[10%]" />
        <ColorSwatch color="bg-cyan-400" className="bottom-[15%] left-[25%]" />
        <ColorSwatch color="bg-orange-400" className="top-[50%] left-[5%]" />
        
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 5}} className="absolute top-[60%] right-[10%] text-gray-400">
            <Type size={32} />
        </motion.div>
    </div>
  );
}; 