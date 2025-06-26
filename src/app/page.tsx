"use client";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { ArrowRight, Code, Zap, Bot, Paintbrush, BrainCircuit, MessageSquare, Star, TrendingUp, User, Database, Briefcase, Layers, Palette, TestTube2 } from "lucide-react";
import { motion } from "framer-motion";
import { DecorativeCircles } from "@/components/ui/decorative-circles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { BookingDialog } from "@/components/booking-dialog";
// import { AiEmployeeCard } from "@/components/ai-employee-card";
import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import React from "react";
import { RonBackground } from "@/components/ron-background";
import { RileyBackground } from "@/components/riley-background";
import { NovaBackground } from "@/components/nova-background";
import { LedgerBackground } from "@/components/ledger-background";
import { AtlasBackground } from "@/components/atlas-background";
import { FluxBackground } from "@/components/flux-background";
import { UseCaseCard } from "@/components/use-case-card";
import type { UseCase } from "@/components/use-case-card";
import { CarouselPagination } from "@/components/ui/carousel-pagination";
import { HeroAnimation } from "@/components/hero-animation";
import { ClientPanel } from "@/components/client-panel";
import { BottleneckCard } from '@/components/bottleneck-card';
import HowItWorks from "@/components/how-it-works";
import SkillStack from "@/components/skill-stack";
import Faq from "@/components/faq";

const logos = [
  { name: "KOC", src: "/assets/logos/koc.png" },
  { name: "TNT", src: "/assets/logos/tnt.png" },
  { name: "Kansoft", src: "/assets/logos/kansoft.png" },
  { name: "Galaxy", src: "/assets/logos/galaxy.png" },
  { name: "Fusion Galaxxy", src: "/assets/logos/fusion.png" },
  { name: "Thot", src: "/assets/logos/thot.png" },
  { name: "FGSPL", src: "/assets/logos/fgspl.png" },
];

const trustedLogos = [
  "Frame 1000000941.png",
  "Frame 1000000942.png",
  "Frame 1000000944.png",
  "Frame 1000000945.png",
  "Frame 1000000946.png",
  "Frame 1000000947.png",
  "Frame 1000000948.png",
  "Frame 1000000949.png",
  "Frame 1000001026.png",
  "Frame 1000001027.png",
];

const aiToolbox = [
  {
    category: "AI IDEs",
    tools: "Replit Ghostwriter, Codeium",
    capabilities: "Auto-code, debug, deploy faster",
    icon: <Code className="h-8 w-8 text-purple-400" />,
  },
  {
    category: "Automation",
    tools: "N8N, Loveable, Make",
    capabilities: "Drag-and-drop task automation",
    icon: <Zap className="h-8 w-8 text-purple-400" />,
  },
  {
    category: "AI Agents",
    tools: "LangGraph, AutoGen, CrewAI",
    capabilities: "Multi-agent decision-making workflows",
    icon: <Bot className="h-8 w-8 text-purple-400" />,
  },
  {
    category: "UI Builders",
    tools: "Framer AI, Uizard",
    capabilities: "Auto-generate clean, responsive frontends",
    icon: <Paintbrush className="h-8 w-8 text-purple-400" />,
  },
  {
    category: "LLM/NLP",
    tools: "OpenAI, Claude, LlamaIndex",
    capabilities: "Smart document parsing, summarization, chat",
    icon: <BrainCircuit className="h-8 w-8 text-purple-400" />,
  },
];

const aiEmployees = [
  {
    name: "Ron",
    role: "AI Frontend Developer",
    description: "Converts product specs into responsive UIs, optimizes frontend performance, and pushes pixel-perfect updates at lightning speed.",
    image: "/assets/employees/ron.png",
  },
  {
    name: "Riley",
    role: "AI Backend Manager",
    description: "Manages databases, APIs, and server logic. Handles user auth, data syncing, and microservices. Ensures system reliability and compliance.",
    image: "/assets/employees/riley.png",
  },
  {
    name: "Nova",
    role: "AI Product Manager",
    description: "Transforms feedback into feature revenue. Nova distills customer chatter into ranked backlogs, writes spec docs your devs actually love, and auto-updates sprint boards— getting you to product-market fit before competitors can pivot.",
    image: "/assets/employees/nova.png",
  },
  {
    name: "Ledger",
    role: "AI Tech Lead",
    description: "Reconciles ledgers and backend logs, flags anomalies and performance issues, and predicts tech debt and recommends fixes.",
    image: "/assets/employees/ledger.png",
  },
  {
    name: "Atlas",
    role: "AI Designer",
    description: "Turns ideas into intuitive UX/UI wireframes, parses docs into live prototypes, and generates brand-consistent assets.",
    image: "/assets/employees/atlas.png",
  },
  {
    name: "Flux",
    role: "AI QA Engineer",
    description: "Auto-tests across devices and edge cases, learns from bug history, and orchestrates full-cycle test automation.",
    image: "/assets/employees/flux.png",
  },
];

const useCases: UseCase[] = [
    {
        number: 1,
        industry: "Manufacturing",
        title: "Overnight engineer drafts 3-D cable designs",
        role: "AI Proposal Engineer",
        capabilities: ["CAD design automation", "Technical specifications", "Cost optimization"],
        primaryImpact: { leadTime: "3 days → 30 min" },
        secondaryImpact: { output: "4× with same staff" },
        efficiency: 90,
    },
    {
        number: 2,
        industry: "Healthcare",
        title: "AI predicts patient readmission risks in real-time",
        role: "AI Clinical Analyst",
        capabilities: ["EHR data analysis", "Predictive risk scoring", "Care coordination alerts"],
        primaryImpact: { leadTime: "48 hours → 5 min" },
        secondaryImpact: { output: "30% reduction in readmissions" },
        efficiency: 75,
    },
    {
        number: 3,
        industry: "Logistics",
        title: "Automated route planning saves thousands in fuel costs",
        role: "AI Logistics Coordinator",
        capabilities: ["Dynamic route optimization", "Real-time traffic analysis", "Delivery schedule automation"],
        primaryImpact: { leadTime: "8 hours → 15 min" },
        secondaryImpact: { output: "20% fuel cost reduction" },
        efficiency: 85,
    },
     {
        number: 4,
        industry: "EdTech",
        title: "Personalized learning paths for every student",
        role: "AI Curriculum Planner",
        capabilities: ["Adaptive learning modules", "Student performance tracking", "Automated content generation"],
        primaryImpact: { leadTime: "1 week → Instant" },
        secondaryImpact: { output: "40% higher student engagement" },
        efficiency: 80,
    },
    {
        number: 5,
        industry: "Security Services",
        title: "AI monitor flags security threats before they escalate",
        role: "AI Surveillance Officer",
        capabilities: ["Real-time anomaly detection", "Automated alert triage", "False positive reduction"],
        primaryImpact: { leadTime: "30 min → 10 sec" },
        secondaryImpact: { output: "95% threat detection rate" },
        efficiency: 95,
    },
    {
        number: 6,
        industry: "FMCG",
        title: "Optimized inventory management reduces spoilage",
        role: "AI Supply Chain Analyst",
        capabilities: ["Demand forecasting", "Automated stock replenishment", "Supplier performance tracking"],
        primaryImpact: { leadTime: "2 days → 4 hours" },
        secondaryImpact: { output: "25% reduction in waste" },
        efficiency: 70,
    },
    {
        number: 7,
        industry: "Finance",
        title: "Automated fraud detection protects user accounts",
        role: "AI Fraud Analyst",
        capabilities: ["Transactional pattern analysis", "Real-time risk scoring", "Automated account locking"],
        primaryImpact: { leadTime: "5 min → 500 ms" },
        secondaryImpact: { output: "99.8% fraud capture rate" },
        efficiency: 98,
    },
    {
        number: 8,
        industry: "Real Estate",
        title: "AI generates property valuations in seconds",
        role: "AI Property Appraiser",
        capabilities: ["Market data analysis", "Comparable property matching", "Automated valuation reports"],
        primaryImpact: { leadTime: "24 hours → 15 sec" },
        secondaryImpact: { output: "92% valuation accuracy" },
        efficiency: 88,
    },
    {
        number: 9,
        industry: "SaaS",
        title: "Automated user support resolves tickets instantly",
        role: "AI Support Agent",
        capabilities: ["Natural language understanding", "Knowledge base integration", "Automated ticket routing"],
        primaryImpact: { leadTime: "6 hours → Instant" },
        secondaryImpact: { output: "60% ticket deflection" },
        efficiency: 92,
    },
    {
        number: 10,
        industry: "Automotive",
        title: "Predictive maintenance for vehicle fleets",
        role: "AI Fleet Manager",
        capabilities: ["Sensor data analysis", "Failure prediction modeling", "Automated maintenance scheduling"],
        primaryImpact: { leadTime: "Reactive → Proactive" },
        secondaryImpact: { output: "20% reduction in downtime" },
        efficiency: 78,
  },
];

export default function Home() {
  const [employeeApi, setEmployeeApi] = React.useState<CarouselApi>()
  const [employeeCurrent, setEmployeeCurrent] = React.useState(0)
  const [employeeCount, setEmployeeCount] = React.useState(0)

  const [useCaseApi, setUseCaseApi] = React.useState<CarouselApi>()
  const [useCaseCurrent, setUseCaseCurrent] = React.useState(0)
  const [useCaseCount, setUseCaseCount] = React.useState(0)

  React.useEffect(() => {
    if (!employeeApi) return;

    setEmployeeCount(employeeApi.scrollSnapList().length)
    setEmployeeCurrent(employeeApi.selectedScrollSnap() + 1)

    employeeApi.on("select", () => {
      setEmployeeCurrent(employeeApi.selectedScrollSnap() + 1)
    })
  }, [employeeApi])

  React.useEffect(() => {
    if (!useCaseApi) return;

    setUseCaseCount(useCaseApi.scrollSnapList().length)
    setUseCaseCurrent(useCaseApi.selectedScrollSnap() + 1)

    useCaseApi.on("select", () => {
      setUseCaseCurrent(useCaseApi.selectedScrollSnap() + 1)
    })
  }, [useCaseApi])

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-white overflow-hidden gradient-wave-bg">
      <DecorativeCircles />
      <Header />
      {/* Hero Section */}
      <section className="w-full pt-32 md:pt-44 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
          {/* Text Content */}
          <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } }
              }}
              className="flex flex-col items-center"
          >
              <motion.h1
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold"
                  style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}
              >
                  Intelligent AI for Modern Business.
              </motion.h1>
              <motion.p
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="text-base md:text-lg max-w-2xl mt-4"
                  style={{ color: "#495057", fontFamily: 'var(--font-lato)' }}
              >
                  Accelerate software development and scale your business with AI-driven automation.
              </motion.p>
              <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="mt-6"
              >
                  <BookingDialog>
                      <button
                          className="group flex items-center justify-center gap-2 rounded-full px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 text-base whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                          style={{ fontFamily: 'var(--font-lato)', fontWeight: 500, boxShadow: '0 4px 24px 0 rgba(160, 163, 232, 0.3)' }}
                      >
                          <span>Book Demo</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                  </BookingDialog>
              </motion.div>
          </motion.div>

          {/* Animation */}
          <div className="relative w-full h-[60vh] max-h-[600px]">
            <HeroAnimation />
          </div>
        </div>
    </section>

      {/* Trusted by Section */}
      <section className="relative z-10 w-full py-8 md:py-16">
        <div className="flex flex-col items-center">
          <span className="text-base md:text-lg text-[#495057] font-bold mb-6 tracking-wide" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Trusted by Industry Leaders
          </span>
            <div className="flex gap-12 animate-scroll-infinite whitespace-nowrap" style={{ animation: 'scroll-infinite 30s linear infinite' }}>
              {trustedLogos.concat(trustedLogos).map((logo, idx) => (
                <img
                  key={idx}
                  src={`/assets/logos/${logo}`}
                  alt={`Trusted company logo ${idx + 1}`}
                  className="h-10 md:h-14 w-auto object-contain"
                />
              ))}
          </div>
        </div>
      </section>

      {/* Modern Problem & AI Solutions Section (Unified) */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}>
              The Modern Problem: Slow Software Development
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
              Growth stalls when humans handle what software can do flawlessly.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <BottleneckCard
              title="Work Hours"
              description="30-40% of work hours wasted on repetitive tasks"
            />
            <BottleneckCard
              title="Admin Costs"
              description="$1,200+/employee/year on HR admin costs"
            />
            <BottleneckCard
              title="Tool Fragmentation"
              description="Context switching and tool fragmentation drain productivity"
            />
            <BottleneckCard
              title="Slow Delivery"
              description="High overhead and slow delivery for MVPs and features"
            />
          </motion.div>
        </div>
      </section>

      {/* The Vidyayatan AI Solution Section */}
      <section className="relative z-10 w-full py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-20 flex flex-col gap-8 py-12 md:py-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#495057', fontFamily: 'var(--font-space-grotesk)' }}>
              Our Next-Gen AI Toolbox
            </h3>
            <p className="text-base md:text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              We leverage a suite of powerful, cutting-edge AI tools to build intelligent solutions that drive growth and efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiToolbox.map((item, index) => (
                <motion.div
                  key={item.category}
                  className="p-6 glass-card"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4
                    className="text-xl font-bold mb-2"
                    style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {item.category}
                  </h4>
                  <p
                    className="text-sm font-semibold text-gray-600 mb-4"
                    style={{ fontFamily: 'var(--font-lato)' }}
                  >
                    {item.tools}
                  </p>
                  <p
                    className="text-base"
                    style={{ color: "#495057", fontFamily: 'var(--font-lato)' }}
                  >
                    {item.capabilities}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Employees Section */}
      <section className="relative z-10 w-full py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-20 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: '#495057', fontFamily: 'var(--font-space-grotesk)' }}>
            Meet Your AI Employees
          </h2>
          <blockquote className="text-base md:text-lg text-center text-gray-600 italic px-2 md:px-16" style={{ fontFamily: 'var(--font-lato)' }}>
            "Don't hire another department—activate one."
          </blockquote>
          <Carousel
            setApi={setEmployeeApi}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
              WheelGesturesPlugin(),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto p-10"
          >
            <CarouselContent className="h-full">
              {aiEmployees.map((employee) => (
                <CarouselItem key={employee.name} className="px-2 h-full">
                  <div className="relative bg-white rounded-2xl p-6 md:p-10 w-full h-full flex overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center my-auto w-full">
                      <div className="md:w-1/3 space-y-4">
                        <h3 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>{employee.name}</h3>
                        <p className="text-lg font-medium text-gray-500" style={{ fontFamily: 'var(--font-lato)' }}>{employee.role}</p>
                        <p className="text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>{employee.description}</p>
                      </div>
                      <div className="md:w-2/3 relative mt-8 md:mt-0 h-full">
                        <div className="absolute inset-0 w-full h-full">
                          {employee.name === "Ron" && <RonBackground />}
                          {employee.name === "Riley" && <RileyBackground />}
                          {employee.name === "Nova" && <NovaBackground />}
                          {employee.name === "Ledger" && <LedgerBackground />}
                          {employee.name === "Atlas" && <AtlasBackground />}
                          {employee.name === "Flux" && <FluxBackground />}
                        </div>
                        <Image
                          src={employee.image}
                          alt={employee.name}
                          width={500}
                          height={500}
                          className="relative z-10 rounded-xl object-contain"
                        />
                      </div>
                    </div>
          </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <CarouselPagination api={employeeApi} count={employeeCount} current={employeeCurrent} />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 w-full py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-20 flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: '#495057', fontFamily: 'var(--font-space-grotesk)' }}>
                Industry Use Cases
            </h2>
            <p className="text-base md:text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
                From manufacturing floors to hospital wards, our AI agents are revolutionizing industries by automating complex tasks and delivering measurable ROI.
            </p>
            <Carousel
                setApi={setUseCaseApi}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {useCases.map((useCase) => (
                        <CarouselItem key={useCase.number} className="pl-4 basis-full">
                            <UseCaseCard useCase={useCase} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <CarouselPagination api={useCaseApi} count={useCaseCount} current={useCaseCurrent} />
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />
      
      <SkillStack />

      <Faq />

      </div>
    );
}
