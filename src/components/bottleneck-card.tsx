"use client";

import { motion, Variants } from 'framer-motion';
import { Clock, DollarSign, XCircle, PlusCircle } from 'lucide-react';
import React from 'react';

const iconMap = {
    "Work Hours": <Clock className="w-8 h-8 text-indigo-500" />,
    "Admin Costs": <DollarSign className="w-8 h-8 text-indigo-500" />,
    "Tool Fragmentation": <XCircle className="w-8 h-8 text-indigo-500" />,
    "Slow Delivery": <PlusCircle className="w-8 h-8 text-indigo-500" />,
};

interface BottleneckCardProps {
    title: keyof typeof iconMap;
    description: string;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

export const BottleneckCard: React.FC<BottleneckCardProps> = ({ title, description }) => {
    return (
        <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start gap-4 h-full"
            variants={cardVariants}
            whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.08)",
                transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
        >
            <div className="p-3 bg-indigo-100 rounded-full">
                {iconMap[title]}
            </div>
            <h3 className="text-lg font-bold text-gray-800" style={{fontFamily: 'var(--font-space-grotesk)'}}>{title}</h3>
            <p className="text-gray-600" style={{fontFamily: 'var(--font-lato)'}}>{description}</p>
        </motion.div>
    );
}; 