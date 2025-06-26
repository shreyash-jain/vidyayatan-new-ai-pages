import { motion } from "framer-motion";
import React from "react";
import { Database, Shield } from "lucide-react";

const MicroserviceBlock = ({ className, children, color = "blue" }: { className?: string; children?: React.ReactNode; color?: "blue" | "teal" | "purple" }) => {
    const colorClasses = {
        blue: "border-blue-400/80 text-blue-700",
        teal: "border-teal-400/80 text-teal-700",
        purple: "border-purple-400/80 text-purple-700",
    };
    return (
        <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute bg-white/80 shadow-md rounded-md p-2 text-center ${colorClasses[color]} ${className}`}
        >
            <p className="text-xs font-semibold">{children}</p>
        </motion.div>
    );
};

const DataPacket = ({ className, transition, color = "teal", animate }: { className?: string; transition?: any, color?: "blue" | "teal" | "purple", animate?: any }) => {
    const colorClasses = {
        blue: "bg-blue-500",
        teal: "bg-teal-500",
        purple: "bg-purple-500",
    };
    return <motion.div animate={animate} transition={transition} className={`absolute w-1.5 h-1.5 rounded-full ${colorClasses[color]} ${className}`} />;
};

const IconElement = ({ className, children, transition }: { className?: string; children?: React.ReactNode; transition?: any }) => (
    <motion.div
        initial={{ opacity: 0.1, scale: 0.8 }}
        animate={{ opacity: [0.1, 0.7, 0.1] }}
        transition={transition || { duration: 20, repeat: Infinity, ease: "easeInOut", repeatDelay: Math.random() * 10 }}
        className={`absolute text-gray-400 ${className}`}
    >
        {children}
    </motion.div>
);

export const RileyBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <MicroserviceBlock className="top-[15%] left-[10%] w-24" color="blue">API Gateway</MicroserviceBlock>
      <MicroserviceBlock className="top-[40%] left-[35%] w-28" color="purple">Auth Service</MicroserviceBlock>
      <MicroserviceBlock className="top-[20%] right-[15%] w-24" color="teal">User DB</MicroserviceBlock>
      <MicroserviceBlock className="bottom-[15%] left-[20%] w-32" color="teal">Logging Service</MicroserviceBlock>
      <MicroserviceBlock className="bottom-[25%] right-[10%] w-28" color="blue">Data Sync</MicroserviceBlock>

      {/* Data flows */}
      <DataPacket color="blue" transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} animate={{ x: ['18%', '38%'], y: ['20%', '43%'], opacity: [1, 1, 0] }} />
      <DataPacket color="purple" transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 2 }} animate={{ x: ['45%', '25%'], y: ['45%', '25%'], opacity: [1, 1, 0] }} />
      <DataPacket color="teal" transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }} animate={{ x: ['80%', '48%'], y: ['25%', '44%'], opacity: [1, 1, 0] }} />
      <DataPacket color="blue" transition={{ duration: 7, repeat: Infinity, ease: 'linear', delay: 3 }} animate={{ x: ['28%', '80%'], y: ['80%', '70%'], opacity: [1, 1, 0] }} />

      {/* Icons */}
      <IconElement className="top-[60%] right-[30%]">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          <Database size={32} />
        </motion.div>
      </IconElement>
      <IconElement className="top-[75%] left-[15%]" transition={{ duration: 18, repeatDelay: 5 }}>
        <Shield size={28} />
      </IconElement>
    </div>
  );
}; 