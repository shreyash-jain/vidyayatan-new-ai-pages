"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface InfographicItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  color?: string;
}

interface InfographicSectionProps {
  title: string;
  subtitle?: string;
  items: InfographicItemProps[];
  layout?: "grid" | "flow" | "timeline";
  backgroundColor?: string;
}

export const InfographicSection = ({ 
  title, 
  subtitle, 
  items, 
  layout = "grid",
  backgroundColor = "bg-white"
}: InfographicSectionProps) => {
  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center group"
        >
          <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color || 'from-blue-500 to-purple-600'} p-4 group-hover:scale-110 transition-transform duration-300`}>
            <item.icon className="w-full h-full text-white" />
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
          <div className="text-lg font-semibold text-gray-700 mb-2">{item.label}</div>
          {item.description && (
            <div className="text-sm text-gray-500">{item.description}</div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderFlowLayout = () => (
    <div className="flex flex-wrap justify-center gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[200px] max-w-[300px] text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color || 'from-green-500 to-emerald-600'} p-3`}>
            <item.icon className="w-full h-full text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
          <div className="text-base font-medium text-gray-700">{item.label}</div>
          {item.description && (
            <div className="text-sm text-gray-500 mt-2">{item.description}</div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderTimelineLayout = () => (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-600 rounded-full"></div>
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-1/2 ${index % 2 === 1 ? 'pl-8' : 'pr-8'}`}>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.color || 'from-blue-500 to-purple-600'} p-2`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-600">{item.description}</div>
                )}
              </div>
            </div>
            <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10"></div>
            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderLayout = () => {
    switch (layout) {
      case "flow":
        return renderFlowLayout();
      case "timeline":
        return renderTimelineLayout();
      default:
        return renderGridLayout();
    }
  };

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {renderLayout()}
      </div>
    </section>
  );
}; 