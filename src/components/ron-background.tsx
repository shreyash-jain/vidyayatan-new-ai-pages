import { motion, type Transition } from "framer-motion";
import React from "react";
import { MousePointer2 } from "lucide-react";

const CodeSnippet = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.pre
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: [0, 0.8, 0.8, 0], y: [20, 0, 0, -20] }}
    transition={{ duration: 10, repeat: Infinity, repeatDelay: Math.random() * 8 + 4, ease: "easeInOut" }}
    className={`absolute font-mono text-xs text-purple-600 p-2 bg-gray-100/80 rounded-md ${className}`}
  >
    <code>{children}</code>
  </motion.pre>
);

const UiComponent = ({ className, children, transition }: { className?: string; children?: React.ReactNode; transition?: Transition }) => (
    <motion.div
        initial={{ opacity: 0.1, y: '100%' }}
        animate={{ opacity: [0.1, 0.9, 0.1], y: ['100%', '-100%', '-100%'] }}
        transition={transition || { duration: 18, repeat: Infinity, ease: "linear", repeatDelay: Math.random() * 5 }}
        className={`absolute bg-white shadow-lg border border-gray-200/90 rounded-lg p-2 ${className}`}
    >
        {children}
    </motion.div>
);

const Wireframe = ({ className, transition }: { className?: string; transition?: Transition }) => (
    <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={transition || { duration: 15, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 10 }}
        className={`absolute border-2 border-dashed border-blue-400/80 rounded-lg ${className}`}
    />
);

export const RonBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <UiComponent className="top-[10%] left-[15%] w-28" transition={{ duration: 14, repeat: Infinity, repeatDelay: 2 }}>
        <div className="w-full h-4 bg-teal-400/80 rounded-full" />
      </UiComponent>

      <UiComponent className="top-[30%] right-[10%] w-36" transition={{ duration: 20, repeat: Infinity, repeatDelay: 4 }}>
        <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-purple-400/80" />
            <div className="w-20 h-2 bg-purple-400/80 ml-2" />
        </div>
      </UiComponent>
      
      <UiComponent className="bottom-[15%] left-[25%] w-32" transition={{ duration: 16, repeat: Infinity, repeatDelay: 1 }}>
        <div className="w-full h-2 bg-blue-400/80 rounded-sm mb-1.5" />
        <div className="w-10/12 h-2 bg-blue-400/80 rounded-sm" />
      </UiComponent>

      <Wireframe className="top-[5%] right-[5%] w-40 h-20" />
      <Wireframe className="bottom-[10%] left-[5%] w-52 h-24" transition={{ duration: 18 }} />

      <CodeSnippet className="top-[50%] left-[5%]">{'<div className="card" />'}</CodeSnippet>
      <CodeSnippet className="bottom-[25%] right-[15%]">{'button {\n  color: #6C5CE7;\n}'}</CodeSnippet>
      
      <motion.div 
        className="absolute"
        animate={{ x: [ '10%', '80%', '80%', '10%', '10%'], y: ['15%', '40%', '80%', '50%', '15%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", repeatDelay: 1}}
      >
        <MousePointer2 size={20} className="text-blue-500" />
      </motion.div>
    </div>
  );
}; 