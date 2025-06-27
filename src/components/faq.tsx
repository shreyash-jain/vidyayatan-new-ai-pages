"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is an AI employee and how does it work?',
    answer: (
      <>
        An AI employee is a virtual assistant powered by machine learning that can{' '}
        <span className="text-slate-700 font-semibold">automate tasks, make decisions, and interact across systems</span>
        —just like a real team member. It uses data-driven logic to streamline workflows, reduce manual effort, and boost efficiency.
      </>
    ),
  },
  {
    question: 'Can I integrate your AI with my existing tools and systems?',
    answer: (
      <>
        Absolutely. Our AI integrates easily with{' '}
        <span className="text-slate-700 font-semibold">CRMs, ERPs, APIs, databases, and communication platforms</span>{' '}
        like Slack, WhatsApp, and Email—ensuring a seamless experience with your current stack.
      </>
    ),
  },
  {
    question: 'How secure is my data with your AI solutions?',
    answer: (
      <>
        We follow enterprise-grade security standards, including{' '}
        <span className="text-slate-700 font-semibold">end-to-end encryption, GDPR compliance, and access control</span>. 
        Your data is never used to train public models and remains private to your organization.
      </>
    ),
  },
  {
    question: 'Do I need technical knowledge to set up an AI employee?',
    answer: (
      <>
        Not at all. Our{' '}
        <span className="text-slate-700 font-semibold">no-code/low-code setup</span> allows even non-technical users to deploy
        AI teammates within minutes. For advanced customizations, developer support is available.
      </>
    ),
  },
  {
    question: 'What business processes can your AI automate?',
    answer: (
      <>
        Our AI can automate{' '}
        <span className="text-slate-700 font-semibold">customer support, document processing, email management, scheduling, data entry, reporting</span>,
        and more. It&rsquo;s built to flex across industries like retail, logistics, healthcare, and finance.
      </>
    ),
  },
  {
    question: 'How does your AI handle updates and learning over time?',
    answer: (
      <>
        Our AI{' '}
        <span className="text-slate-700 font-semibold">continuously learns and adapts</span> based on usage patterns. You can
        also retrain or fine-tune it with your domain data to improve accuracy and performance over time.
      </>
    ),
  },
  {
    question: 'Is your AI customizable for niche industry needs?',
    answer: (
      <>
        Yes. We offer{' '}
        <span className="text-slate-700 font-semibold">pre-trained vertical solutions and also build custom AI models</span>{' '}
        tailored to your specific workflows and industry needs.
      </>
    ),
  },
  {
    question: 'Do you support open-source model deployment?',
    answer: (
      <>
        Yes. You can deploy models like{' '}
        <span className="text-slate-700 font-semibold">LLaMA, DeepSeek, or Qwen</span> directly into your stack—cutting costs
        while maintaining full control.
      </>
    ),
  },
  {
    question: 'What is the pricing model for your AI solution?',
    answer: (
      <>
        We offer{' '}
        <span className="text-slate-700 font-semibold">flexible plans based on usage, number of AI agents, and deployment needs</span>.
        Contact our sales team for a personalized quote.
      </>
    ),
  },
];

const Faq = () => {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  const handleValueChange = (value: string | undefined) => {
    setOpenItem(value);
  };

  // Test if Radix is working
  React.useEffect(() => {
    console.log('FAQ component mounted');
    return () => console.log('FAQ component unmounted');
  }, []);

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Still curious? Here&rsquo;s everything you might want to know about our AI teammates.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            value={openItem}
            onValueChange={handleValueChange}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`faq-${index}`}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                style={{ position: 'relative', zIndex: 1 }}
                onClick={() => console.log(`AccordionItem ${index} clicked`)}
              >
                <AccordionTrigger 
                  className="px-6 py-5 text-left font-semibold text-slate-800 hover:no-underline hover:bg-slate-50/50 transition-colors [&[data-state=open]]:bg-slate-50/50 w-full flex justify-between items-center"
                  onClick={() => console.log(`FAQ ${index} trigger clicked: ${faq.question}`)}
                >
                  <span className="text-base font-semibold pr-4 flex-1">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq; 