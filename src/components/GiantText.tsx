"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GiantText({ text }: { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // High-velocity parallax layers
    const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 500]);

    // Dramatic Scaling from smallish to "filling the frame"
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.5, 2.5]);

    // Smooth transition from scaling to swiping up
    const y = useTransform(scrollYProgress, [0.7, 1], [0, -400]);

    // Fading out at the very end
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <section ref={containerRef} className="h-[250vh] w-full bg-black relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Layer (Fast) */}
                <motion.h2
                    style={{ x: x1, opacity: 0.05 }}
                    className="absolute text-[30vw] font-normal font-bebas tracking-tighter uppercase whitespace-nowrap text-white"
                >
                    {text}
                </motion.h2>

                <motion.div
                    style={{ scale, y, opacity }}
                    className="flex flex-col items-center justify-center relative z-10"
                >
                    <motion.h2
                        style={{ x: x2 }}
                        className="text-[20vw] font-normal font-bebas tracking-tighter uppercase whitespace-nowrap text-white"
                        transition={{ ease: "easeOut" }}
                    >
                        {text}
                    </motion.h2>

                    {/* Visual Depth Accents */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.8]) }}
                        className="mt-4 flex gap-8 items-center text-[#991b1b] font-bebas text-2xl md:text-5xl uppercase tracking-[1em]"
                    >
                        <span className="drop-shadow-[0_0_20px_rgba(153,27,27,0.5)]">CRAFTING</span>
                        <div className="w-4 h-4 rounded-full bg-[#7f1d1d] animate-pulse"></div>
                        <span className="drop-shadow-[0_0_20px_rgba(153,27,27,0.5)]">FUTURE</span>
                    </motion.div>
                </motion.div>

                {/* Foreground Layer (Slow) */}
                <motion.h2
                    style={{ x: useTransform(scrollYProgress, [0, 1], [0, -200]), opacity: 0.15 }}
                    className="absolute bottom-20 text-[10vw] font-normal font-bebas tracking-tighter uppercase whitespace-nowrap text-[#7f1d1d]"
                >
                    INFRASTRUCTURE
                </motion.h2>

                {/* Background "Glow" - Darker Red */}
                <motion.div
                    style={{
                        scale: useTransform(scrollYProgress, [0, 0.8], [0.8, 1.8]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0.15, 0])
                    }}
                    className="absolute inset-0 bg-[#450a0a] rounded-full blur-[200px] -z-10"
                />
            </div>
        </section>
    );
}
