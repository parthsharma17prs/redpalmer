"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface StickySectionProps {
    children: ReactNode;
    index: number;
}

export default function StickySection({ children, index }: StickySectionProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section ref={container} className="relative h-[150vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale, opacity }}
                    className="w-full h-full flex flex-col items-center justify-center"
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}

