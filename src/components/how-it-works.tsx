import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plug, Bot, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Plug,
    title: 'Connect & Ingest',
    description:
      'Securely plug into email, CRM, ERP, HRIS, or custom databases via pre-built connectors.',
    colors: {
      icon: 'text-blue-600',
      iconBg: 'bg-blue-100',
      circle: 'bg-blue-600',
    },
  },
  {
    icon: Bot,
    title: 'Deploy AI Employees',
    description:
      'Choose personas or design your own with our drag-and-drop agent builder inspired by best-in-class persona landing flows.',
    colors: {
      icon: 'text-purple-600',
      iconBg: 'bg-purple-100',
      circle: 'bg-purple-600',
    },
  },
  {
    icon: BarChart,
    title: 'Optimize & Scale',
    description:
      'Real-time dashboards surface ROI, accuracy, and cost metrics with A/B testing baked in.',
    colors: {
      icon: 'text-green-600',
      iconBg: 'bg-green-100',
      circle: 'bg-green-600',
    },
  },
];

const Connector = () => <div className="flex-1 h-px bg-slate-200" />;

const HowItWorks = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            How Vidyayatan AI Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            From first contact to optimized results—here's how we bring AI to your business.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-stretch justify-center w-full">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="relative flex-1 max-w-xs p-4 pt-8">
                  <div className={`absolute top-2 left-6 ${step.colors.circle} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-base z-10`}>
                    {index + 1}
                  </div>
                  <Card className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-6 pt-10">
                      <div className="flex items-center gap-x-4 mb-3">
                        <div className={`p-3 rounded-lg inline-block ${step.colors.iconBg}`}>
                          <Icon className={`w-6 h-6 ${step.colors.icon}`} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex flex-shrink-0 items-center">
                    <div className="w-16 h-px bg-slate-200" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="relative w-full max-w-sm p-4 pt-8">
                  <div className={`absolute top-2 left-6 ${step.colors.circle} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-base z-10`}>
                    {index + 1}
                  </div>
                  <Card className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-6 pt-10">
                      <div className="flex items-center gap-x-4 mb-3">
                        <div className={`p-3 rounded-lg inline-block ${step.colors.iconBg}`}>
                          <Icon className={`w-6 h-6 ${step.colors.icon}`} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                {index < steps.length - 1 && (
                  <div className="h-12 w-px bg-slate-200" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;