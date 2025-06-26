"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const clients = [
  { logo: "/assets/logos/Frame 1000000941.png", stat: "↑ 3x Output", name: "Client 1" },
  { logo: "/assets/logos/Frame 1000000942.png", stat: "↓ 70% Cost", name: "Client 2" },
  { logo: "/assets/logos/Frame 1000000944.png", stat: "90% faster deployment", name: "Client 3" },
  { logo: "/assets/logos/Frame 1000000945.png", stat: "↑ 2.5x Revenue", name: "Client 4" },
  { logo: "/assets/logos/Frame 1000000946.png", stat: "↓ 50% Onboarding Time", name: "Client 5" },
  { logo: "/assets/logos/Frame 1000000947.png", stat: "↑ 4x Engagement", name: "Client 6" },
  { logo: "/assets/logos/Frame 1000000948.png", stat: "99% Uptime", name: "Client 7" },
  { logo: "/assets/logos/Frame 1000000949.png", stat: "↓ 60% Manual Work", name: "Client 8" },
];

export const ClientPanel: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-xs p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        orientation="vertical"
        className="w-full h-64"
      >
        <CarouselContent className="-mt-1 h-full">
          {clients.map((client, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/3">
              <div className="p-1">
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-full shadow-inner">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-sm" style={{fontFamily: 'var(--font-space-grotesk)'}}>{client.stat}</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}; 