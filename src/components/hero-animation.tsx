"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const employees = [
  { avatar: '/assets/employees/ron.png', message: 'Optimized Sales Pipeline' },
  { avatar: '/assets/employees/riley.png', message: 'Reduced Onboarding Time by 80%' },
  { avatar: '/assets/employees/nova.png', message: 'Automated Compliance Checks' },
  { avatar: '/assets/employees/flux.png', message: 'Improved Design Iteration Speed' },
  { avatar: '/assets/employees/atlas.png', message: 'Cut Logistics Costs by 25%' },
  { avatar: '/assets/employees/ledger.png', message: 'Streamlined Financial Reporting' },
];

const AnimatedCounter = ({ to }: { to: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
  
    useEffect(() => {
      const controls = animate(count, to, {
        type: "spring",
        stiffness: 40,
        damping: 20,
        delay: 0.5,
      });
      return controls.stop;
    }, [count, to]);
  
    return <motion.span>{rounded}</motion.span>;
};

const Chip: React.FC<{ message: string }> = ({ message }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute bottom-full mb-2 w-max max-w-xs px-3 py-1.5 bg-white rounded-full shadow-lg"
    >
        <p className="text-sm font-semibold text-purple-700" style={{fontFamily: 'var(--font-lato)'}}>{message}</p>
    </motion.div>
)

const Avatar: React.FC<{ 
    employee: (typeof employees)[0];
    isActive: boolean;
    initialPos: { x: string, y: string };
}> = ({ employee, isActive, initialPos }) => {
    const controls = useAnimation();

    useEffect(() => {
        if (isActive) {
            controls.start({
                x: '0vw',
                y: '10vh',
                scale: 1.2,
                transition: { duration: 1, ease: 'easeInOut' }
            });
        } else {
            controls.start({
                ...initialPos,
                scale: 1,
                transition: { duration: 1, ease: 'easeInOut' }
            });
        }
    }, [isActive, controls, initialPos]);

    return (
        <motion.div
            className="absolute top-1/2 left-1/2"
            initial={{ ...initialPos, scale: 0 }}
            animate={controls}
        >
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                }}
                className="relative"
            >
                <Image 
                    src={employee.avatar} 
                    alt="AI Employee" 
                    width={56} 
                    height={56} 
                    className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full border-2 md:border-4 border-white shadow-xl" 
                />
                <AnimatePresence>
                    {isActive && <Chip message={employee.message} />}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export const HeroAnimation: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const currentIndexRef = useRef(0);
    const [positions, setPositions] = useState<{x: string; y: string}[]>([]);

    useEffect(() => {
        setPositions(
            employees.map((_, index) => {
                const isLeftSide = index < 3;
                const xSideMultiplier = isLeftSide ? -1 : 1;
                
                // Responsive X positioning - smaller range on mobile
                const isMobile = window.innerWidth < 768;
                const xRange = isMobile ? 8 : 10; // Smaller range on mobile
                const xBase = isMobile ? 15 : 18; // Closer to center on mobile
                const x = (Math.random() * xRange + xBase) * xSideMultiplier;

                // Distribute Y vertically, more compactly
                const yIndex = index % 3; // 0, 1, 2 for both sides
                const yBase = (yIndex - 1) * (isMobile ? 12 : 18); // Smaller spread on mobile
                const y = yBase + (Math.random() * (isMobile ? 4 : 8) - (isMobile ? 2 : 4)); // Less jitter on mobile

                return {
                    x: `${x}vw`,
                    y: `${y}vh`,
                };
            })
        );

        const interval = setInterval(() => {
            setActiveIndex(currentIndexRef.current);

            setTimeout(() => {
                setActiveIndex(null);
            }, 3500); // Hold chip for 3.5s

            currentIndexRef.current = (currentIndexRef.current + 1) % employees.length;
        }, 5000); // Switch avatar every 5s

        return () => clearInterval(interval);
    }, []);

    if (positions.length === 0) {
        return null; // Don't render on the server or before positions are set
    }

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 md:gap-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <p className="text-3xl md:text-5xl font-bold text-purple-700" style={{fontFamily: 'var(--font-space-grotesk)'}}>
                        <AnimatedCounter to={50} />+
                    </p>
                    <p className="text-sm md:text-md font-semibold text-gray-600 tracking-wider" style={{fontFamily: 'var(--font-lato)'}}>
                        HAPPY CLIENTS
                    </p>
                </motion.div>
                <motion.div 
                    className="flex items-center justify-center w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-purple-100 to-violet-200 rounded-full shadow-2xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-purple-600" />
                </motion.div>
            </div>

            {employees.map((employee, index) => (
                <Avatar 
                    key={index} 
                    employee={employee} 
                    isActive={index === activeIndex} 
                    initialPos={positions[index]}
                />
            ))}
        </div>
    );
}; 