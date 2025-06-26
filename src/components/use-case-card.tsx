"use client"

import { Progress } from "@/components/ui/progress";
import { ArrowRight, Clock, Settings, HeartPulse, Truck, BookOpenCheck, ShieldCheck, ShoppingCart, Landmark, Building, AppWindow, Car } from "lucide-react";

const iconMap = {
    Manufacturing: <Settings className="h-8 w-8 text-white" />,
    Healthcare: <HeartPulse className="h-8 w-8 text-white" />,
    Logistics: <Truck className="h-8 w-8 text-white" />,
    EdTech: <BookOpenCheck className="h-8 w-8 text-white" />,
    "Security Services": <ShieldCheck className="h-8 w-8 text-white" />,
    FMCG: <ShoppingCart className="h-8 w-8 text-white" />,
    Finance: <Landmark className="h-8 w-8 text-white" />,
    "Real Estate": <Building className="h-8 w-8 text-white" />,
    SaaS: <AppWindow className="h-8 w-8 text-white" />,
    Automotive: <Car className="h-8 w-8 text-white" />,
};

const colorMap = {
    Manufacturing: {
        border: "from-blue-50/70 to-sky-100/70",
        iconBg: "from-blue-400 to-sky-700",
        text: "text-blue-600",
        bullet: "text-blue-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-blue-400 [&>*]:to-sky-700",
        innerGradient: "from-white to-blue-100/60",
    },
    Healthcare: {
        border: "from-red-50/70 to-rose-100/70",
        iconBg: "from-red-400 to-rose-700",
        text: "text-red-600",
        bullet: "text-red-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-red-400 [&>*]:to-rose-700",
        innerGradient: "from-white to-red-100/60",
    },
    Logistics: {
        border: "from-orange-50/70 to-amber-100/70",
        iconBg: "from-orange-400 to-amber-700",
        text: "text-orange-600",
        bullet: "text-orange-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-orange-400 [&>*]:to-amber-700",
        innerGradient: "from-white to-orange-100/60",
    },
    EdTech: {
        border: "from-indigo-50/70 to-violet-100/70",
        iconBg: "from-indigo-400 to-violet-700",
        text: "text-indigo-600",
        bullet: "text-indigo-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-indigo-400 [&>*]:to-violet-700",
        innerGradient: "from-white to-indigo-100/60",
    },
    "Security Services": {
        border: "from-slate-50/70 to-gray-100/70",
        iconBg: "from-slate-400 to-gray-700",
        text: "text-slate-600",
        bullet: "text-slate-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-slate-400 [&>*]:to-gray-700",
        innerGradient: "from-white to-slate-100/60",
    },
    FMCG: {
        border: "from-green-50/70 to-emerald-100/70",
        iconBg: "from-green-400 to-emerald-700",
        text: "text-green-600",
        bullet: "text-green-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-green-400 [&>*]:to-emerald-700",
        innerGradient: "from-white to-green-100/60",
    },
    Finance: {
        border: "from-lime-50/70 to-green-100/70",
        iconBg: "from-lime-400 to-green-700",
        text: "text-lime-600",
        bullet: "text-lime-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-lime-400 [&>*]:to-green-700",
        innerGradient: "from-white to-lime-100/60",
    },
    "Real Estate": {
        border: "from-amber-50/70 to-yellow-100/70",
        iconBg: "from-amber-400 to-yellow-700",
        text: "text-amber-600",
        bullet: "text-amber-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-amber-400 [&>*]:to-yellow-700",
        innerGradient: "from-white to-amber-100/60",
    },
    SaaS: {
        border: "from-cyan-50/70 to-sky-100/70",
        iconBg: "from-cyan-400 to-sky-700",
        text: "text-cyan-600",
        bullet: "text-cyan-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-cyan-400 [&>*]:to-sky-700",
        innerGradient: "from-white to-cyan-100/60",
    },
    Automotive: {
        border: "from-stone-50/70 to-neutral-100/70",
        iconBg: "from-stone-400 to-neutral-700",
        text: "text-stone-600",
        bullet: "text-stone-500",
        progress: "[&>*]:bg-gradient-to-r [&>*]:from-stone-400 [&>*]:to-neutral-700",
        innerGradient: "from-white to-stone-100/60",
    },
};

export interface UseCase {
    number: number;
    industry: keyof typeof iconMap;
    title: string;
    role: string;
    capabilities: string[];
    primaryImpact: {
        leadTime: string;
    };
    secondaryImpact: {
        output: string;
    };
    efficiency: number;
}

interface UseCaseCardProps {
  useCase: UseCase;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  const colors = colorMap[useCase.industry];
  return (
    <div className={`bg-gradient-to-br ${colors.border} p-1 rounded-2xl w-full h-full`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Left Column */}
            <div className="md:col-span-1 flex flex-col justify-between">
                <div>
                    <span className={`inline-block bg-white/80 ${colors.text} text-sm font-medium px-3 py-1 rounded-full shadow-sm`}>
                        #{useCase.number} • {useCase.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mt-4" style={{ fontFamily: 'var(--font-space-grotesk)'}}>
                        {useCase.title}
                    </h3>
                </div>
                <div className={`mt-4 flex items-center justify-center bg-gradient-to-br ${colors.iconBg} rounded-xl aspect-square w-24 h-24 p-6`}>
                    {iconMap[useCase.industry]}
                </div>
            </div>

            {/* Middle Column */}
            <div className={`bg-gradient-to-br ${colors.innerGradient} rounded-lg p-4 flex flex-col justify-start items-start border border-black/5 w-full`}>
                <h4 className="font-bold text-gray-700">Role & Capabilities</h4>
                <p className={`${colors.text} font-semibold my-2`}>{useCase.role}</p>
                <ul className="space-y-2">
                    {useCase.capabilities.map((cap, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-gray-500 mr-2 text-lg">•</span>
                            <span className="text-gray-600 text-sm">{cap}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Column */}
            <div className={`bg-gradient-to-br ${colors.innerGradient} rounded-lg p-4 flex flex-col justify-between border border-black/5`}>
                <div className="flex-grow">
                    <h4 className="font-bold text-gray-700">ROI / Cost-Down Impact</h4>
                    
                    <div className="mt-4">
                        <div className="flex items-center text-gray-600">
                            <ArrowRight className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm font-semibold">Primary Impact</span>
                        </div>
                        <p className={`${colors.text} font-bold text-lg ml-6`}>{useCase.primaryImpact.leadTime}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm font-semibold">Secondary Impact</span>
                        </div>
                        <p className="text-gray-700 font-semibold ml-6">{useCase.secondaryImpact.output}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-1 px-1">
                        <span>Efficiency Gain</span>
                        <span className="font-bold text-gray-800">{useCase.efficiency}%+</span>
                    </div>
                    <Progress value={useCase.efficiency} className={`w-full h-2 ${colors.progress}`} />
                </div>
            </div>
        </div>
    </div>
  );
}; 