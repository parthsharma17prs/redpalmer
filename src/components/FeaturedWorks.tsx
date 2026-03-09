"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Magnetic from './Magnetic';

const works = [
    { id: '0A', title: 'Banking & Fintech', client: 'Automated Posture Monitoring', img: 'https://framerusercontent.com/images/WmDGeUasQkCARkfUExK22qAlDFc.png', tag: 'FIN-AUDIT-v4' },
    { id: '0B', title: 'Decentralized Protocols', client: 'Privacy-Preserving Proofs', img: 'https://framerusercontent.com/images/VT310qn9CgKuOTrXFOLhZALciE.png', tag: 'ZKP-PRIME-02' },
    { id: '0C', title: 'Government Compliance', client: 'Secure Infrastructure', img: 'https://framerusercontent.com/images/r0qjn23eNOAVLQfk3TzhfFjNhe4.jpg', tag: 'GOV-SEC-STD' },
    { id: '0D', title: 'Enterprise Automation', client: 'Complex Risk Mapping', img: 'https://framerusercontent.com/images/8rcXl0j3NquReHM8SwF3VK8zQ.png', tag: 'ENT-AUTO-MAP' },
];

export default function FeaturedWorks() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            {/* Phase Indicator */}
            <div className="absolute left-6 top-60 hidden xl:flex flex-col items-center gap-12 z-20">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Execution Phase</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bebas text-2xl tracking-tighter tabular-nums">003</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-24 relative z-10 border-l border-white/5 pl-12">
                <div className="flex flex-col gap-4">
                    <span className="text-accent-lime font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Case Studies <span className="text-white/10 text-[10px] tracking-widest font-sans">// PROOF_GALLERY</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                        Privacy-First <br /> <span className="text-white/20">Solutions</span>
                    </h2>
                </div>
                <Magnetic strength={0.1}>
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500"
                    >
                        View All Infrastructures
                        <span>→</span>
                    </motion.button>
                </Magnetic>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10 border-l border-white/5 pl-12">
                {works.map((work, idx) => (
                    <WorkCard key={work.id} work={work} idx={idx} />
                ))}
            </div>

        </section>
    );
}

function WorkCard({ work, idx }: any) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <Magnetic strength={0.1}>
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative cursor-pointer flex flex-col gap-8"
            >
                {/* Image Container */}
                <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-900 relative rounded-[2rem] border border-white/5 group-hover:border-accent/40 transition-all duration-700 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">

                    {/* Background Marquee on Hover */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="whitespace-nowrap flex items-center"
                        >
                            <span className="text-[10rem] font-black font-bebas text-white/[0.05] uppercase leading-none tracking-tighter">
                                {work.title} &nbsp; {work.tag} &nbsp; {work.title} &nbsp; {work.tag} &nbsp;
                            </span>
                        </motion.div>
                    </div>

                    <motion.img
                        style={{ y }}
                        src={work.img}
                        className="w-full h-[130%] object-cover absolute top-[-15%] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        alt={work.title}
                    />

                    {/* Scanning Line Effect */}
                    <motion.div
                        animate={{ top: ['-10%', '110%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-accent/20 blur-[2px] z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Technical Label Overlay */}
                    <div className="absolute top-8 right-8 flex flex-col items-end gap-2 z-20">
                        <span className="bg-black/80 backdrop-blur-md text-white/50 text-[10px] font-mono px-3 py-1 rounded-sm border border-white/5 tracking-widest uppercase">
                            /{work.id}
                        </span>
                        <span className="bg-accent/90 text-black text-[9px] font-black px-2 py-0.5 rounded-sm tracking-tighter">
                            {work.tag}
                        </span>
                    </div>

                    {/* Overlay on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-10 z-20"
                    >
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col gap-1">
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em] font-bebas">Infrastructure</span>
                                    <span className="text-white text-4xl font-normal font-bebas uppercase tracking-tight leading-none">Verified Protocol</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center text-accent">
                                    <span className="text-2xl">→</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Text details */}
                <div className="flex flex-col gap-4 pt-2 relative">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <h3 className="text-4xl md:text-5xl font-normal font-bebas uppercase tracking-tighter group-hover:text-accent transition-colors duration-500 leading-none mb-2">
                                {work.title}
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-white/10 group-hover:bg-accent/50 group-hover:w-20 transition-all duration-700" />
                                <p className="text-white/40 text-lg md:text-xl font-light leading-none italic uppercase font-bebas tracking-widest">
                                    {work.client}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Magnetic>
    );
}

