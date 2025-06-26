import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Cpu,
  Bot,
  MessageSquare,
  ImageIcon,
  FileText,
  Search,
  Book,
  Wrench,
  Blocks,
} from 'lucide-react';
import Image from 'next/image';
import { DecorativeCircles } from './ui/decorative-circles';
import { cn } from '@/lib/utils';

const skills = [
  {
    icon: Cpu,
    title: 'Autonomous Decision Engines',
    description: 'Self-directed AI agents that analyze, act, and evolve—eliminating entire task pipelines with a single API call.',
    illustration: '/assets/illustrations/autonomous-engines.png',
    color: 'blue',
  },
  {
    icon: Bot,
    title: 'Language Model Integration',
    description: 'Bring your domain knowledge into large language models and supercharge their precision while reducing hallucinations.',
    illustration: '/assets/illustrations/ai-toolbox.svg',
    color: 'purple',
  },
  {
    icon: MessageSquare,
    title: 'Unified Channel Operations',
    description: 'Email, SMS, chat, voice—all powered by one smart brain ensuring consistency across all customer touchpoints.',
    illustration: '/assets/illustrations/unified-channel-operations.svg',
    color: 'green',
  },
  {
    icon: ImageIcon,
    title: 'Visual Intelligence Modules',
    description: 'Detect, label, or generate imagery in seconds. Perfect for QA, creative workflows, or smart recommendations.',
    illustration: '/assets/illustrations/visual-intelligence.svg',
    color: 'orange',
  },
  {
    icon: FileText,
    title: 'Document AI Layer',
    description: 'Instantly parse invoices, contracts, or custom forms. Extract data and push it directly to your CRM or ERP.',
    illustration: '/assets/illustrations/document-ai-layer.svg',
    color: 'red',
  },
  {
    icon: Search,
    title: 'Smart Search & Suggestions',
    description: 'Transform your database into a dynamic revenue engine with context-aware search and predictive recommendations.',
    illustration: '/assets/illustrations/smart-search.svg',
    color: 'yellow',
  },
  {
    icon: Book,
    title: 'Industry-Specific Blueprints',
    description: 'Launch faster with pre-trained solutions for logistics, retail, healthcare, and more.',
    illustration: '/assets/illustrations/industry-specific-blueprints.svg',
    color: 'teal',
  },
  {
    icon: Wrench,
    title: 'Custom AI Pipelines',
    description: 'From raw data to production-ready AI models, built specifically for your business logic.',
    illustration: '/assets/illustrations/custom-ai-pipelines.png',
    color: 'indigo',
  },
  {
    icon: Blocks,
    title: 'Open Model Integrations',
    description: 'Plug into DeepSeek, LLaMA, or Qwen with seamless deployment and cost savings.',
    illustration: '/assets/illustrations/open-model-integration.png',
    color: 'pink',
    size: { width: 320, height: 240 },
  },
];

const colorClasses = {
  blue: { icon: 'text-blue-600', bg: 'bg-blue-100' },
  purple: { icon: 'text-purple-600', bg: 'bg-purple-100' },
  green: { icon: 'text-green-600', bg: 'bg-green-100' },
  orange: { icon: 'text-orange-600', bg: 'bg-orange-100' },
  red: { icon: 'text-red-600', bg: 'bg-red-100' },
  yellow: { icon: 'text-yellow-600', bg: 'bg-yellow-100' },
  teal: { icon: 'text-teal-600', bg: 'bg-teal-100' },
  indigo: { icon: 'text-indigo-600', bg: 'bg-indigo-100' },
  pink: { icon: 'text-pink-600', bg: 'bg-pink-100' },
};

const SkillStack = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -top-1/4 -left-24">
        <DecorativeCircles />
      </div>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            AI-Employee <span className="text-blue-600">Skill Stack</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI teammates aren&rsquo;t one-trick bots — they&rsquo;re full-stack specialists pre-loaded with advanced capabilities. Combine, extend, or tailor them for your unique workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const colors = colorClasses[skill.color as keyof typeof colorClasses];
            const isEvenRow = Math.floor(index / 2) % 2 === 0;
            const isFirstInPair = index % 2 === 0;
            
            let colSpan = '';
            if (isEvenRow) {
              colSpan = isFirstInPair ? 'md:col-span-3' : 'md:col-span-2';
            } else {
              colSpan = isFirstInPair ? 'md:col-span-2' : 'md:col-span-3';
            }

            if (index === skills.length - 1 && skills.length % 2 !== 0) {
              colSpan = 'md:col-span-5';
            }

            return (
              <Card 
                key={index} 
                className={cn(
                  "bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden flex flex-col",
                  colSpan
                )}
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-x-4 mb-[40px]">
                    <div className={`p-3 rounded-lg ${colors.bg}`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{skill.title}</h3>
                  </div>
                  <div className="flex-grow flex flex-col md:flex-row items-center gap-x-6">
                    <p className="text-slate-600 text-sm flex-1 text-center md:text-left">{skill.description}</p>
                    {skill.illustration && (
                      <div className="flex-shrink-0">
                        <Image
                          src={skill.illustration}
                          alt={`${skill.title} illustration`}
                          width={skill.size?.width || 240}
                          height={skill.size?.height || 180}
                          className={cn(
                            "h-auto object-contain",
                            skill.title === 'Open Model Integrations'
                                ? "w-48 md:w-64 lg:w-80"
                                : "w-40 md:w-48 lg:w-60"
                          )}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillStack; 