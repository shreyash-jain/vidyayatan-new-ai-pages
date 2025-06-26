"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { type CarouselApi } from "@/components/ui/carousel";

interface CarouselPaginationProps {
    api: CarouselApi | undefined;
    count: number;
    current: number;
}

export const CarouselPagination: React.FC<CarouselPaginationProps> = ({ api, count, current }) => {
    return (
        <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className="p-1 rounded-full focus:outline-none"
                >
                    <motion.div
                        className="h-2 w-2 rounded-full"
                        animate={current === i + 1 ? 'active' : 'inactive'}
                        variants={{
                            active: {
                                scale: 1.75,
                                backgroundColor: '#8B5CF6' // purple-500
                            },
                            inactive: {
                                scale: 1,
                                backgroundColor: '#D1D5DB' // gray-300
                            }
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                </button>
            ))}
        </div>
    );
}; 