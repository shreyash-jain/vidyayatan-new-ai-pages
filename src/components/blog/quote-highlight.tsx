"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface QuoteHighlightProps {
  quote: string;
  author?: string;
  role?: string;
  theme?: "orange" | "blue" | "purple";
}

export const QuoteHighlight = ({ 
  quote, 
  author, 
  role, 
  theme = "orange" 
}: QuoteHighlightProps) => {
  const themeStyles = {
    orange: {
      background: "from-orange-50 to-yellow-50",
      border: "border-orange-200",
      accent: "text-[#ec7524]",
      icon: "text-[#ec7524]"
    },
    blue: {
      background: "from-blue-50 to-cyan-50",
      border: "border-blue-200", 
      accent: "text-blue-600",
      icon: "text-blue-500"
    },
    purple: {
      background: "from-purple-50 to-indigo-50",
      border: "border-purple-200",
      accent: "text-purple-600",
      icon: "text-purple-500"
    }
  };

  const styles = themeStyles[theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-2xl bg-gradient-to-br ${styles.background} border-2 ${styles.border} my-12`}
    >
      <Quote className={`w-12 h-12 ${styles.icon} mb-4 opacity-80`} />
      
      <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6">
        &quot;{quote}&quot;
      </blockquote>
      
      {(author || role) && (
        <div className="flex items-center gap-3">
          <div className={`w-1 h-12 bg-gradient-to-b ${styles.accent.replace('text-', 'from-')} to-transparent rounded-full`}></div>
          <div>
            {author && (
              <div className={`font-semibold ${styles.accent}`}>{author}</div>
            )}
            {role && (
              <div className="text-gray-600 text-sm">{role}</div>
            )}
          </div>
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
        <Quote className="w-full h-full" />
      </div>
    </motion.div>
  );
}; 