"use client";

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Magnetic from './Magnetic';

const services = [
    { id: '01', title: 'Continuous Compliance', tools: 'Agentic AI / OSCAL / NIST', desc: 'Automated monitoring of systems and policies to ensure persistent adherence to regulatory standards through continuous posture verification.' },
    { id: '02', title: 'AI-Driven Analysis', tools: 'LLM / Reasoning Agents / Python', desc: 'Agentic AI that autonomously maps, classifies, and tests compliance requirements against complex system metadata and configurations.' },
    { id: '03', title: 'ZK Evaluation', tools: 'Aleo / Leo / ZKPs', desc: 'Validating security controls using Zero-Knowledge Proofs, allowing compliance logic to execute privately without revealing sensitive data.' },
    { id: '04', title: 'Immutable Anchoring', tools: 'Algorand / Zcash / Blockchain', desc: 'Creating a tamper-proof audit trail by anchoring verification events across distributed ledgers for permanent, provable assurance.' },
];

export default function WhatWeDo() {
    const [openId, setOpenId] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            {/* Phase Indicator */}
            <div className="absolute left-6 top-60 hidden xl:flex flex-col items-center gap-12 z-20">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Operational Phase</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bebas text-2xl tracking-tighter tabular-nums">002</span>
            </div>

            {/* Ambient Red Splash Background Logic */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <AnimatePresence>
                    {hoveredId && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0.1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute bg-accent w-[800px] h-[800px] rounded-full blur-[150px]"
                            style={{
                                left: hoveredId === '01' ? '15%' : hoveredId === '02' ? '35%' : hoveredId === '03' ? '65%' : '85%',
                                top: '40%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 relative z-10 border-l border-white/5 pl-12">
                <div className="flex flex-col gap-4 w-full md:w-1/3">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Expertise <span className="text-white/10 text-[10px] tracking-widest font-sans">// CAPABILITY_MAP</span>
                    </span>
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]"
                    >
                        WHat <br /> <span className="text-white/20">We Do</span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl font-light text-white/50 max-w-xl leading-relaxed mt-auto"
                >
                    We replace invasive audits with persistent verification. Partnering with <span className="text-white">enterprise leaders</span> and <span className="text-white">Web3 protocols</span> to craft high-assurance digital ecosystems.
                </motion.p>
            </div>

            <div className="w-full border-t border-white/10 relative z-10">
                {services.map((service, idx) => (
                    <ServiceRow
                        key={service.id}
                        service={service}
                        idx={idx}
                        isOpen={openId === service.id}
                        isHovered={hoveredId === service.id}
                        onToggle={() => setOpenId(openId === service.id ? null : service.id)}
                        onHover={() => setHoveredId(service.id)}
                        onLeave={() => setHoveredId(null)}
                    />
                ))}
            </div>
        </section>
    );
}

function ServiceRow({ service, idx, isOpen, isHovered, onToggle, onHover, onLeave }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onToggle}
            className={`border-b border-white/10 transition-all duration-700 cursor-pointer overflow-hidden group relative ${isHovered ? 'bg-white/[0.02]' : ''}`}
        >
            {/* Background Marquee Effect on Hover */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap flex items-center h-full"
                >
                    <span className="text-[15rem] font-black font-bebas text-white/[0.03] uppercase leading-none tracking-tighter">
                        {service.title} &nbsp; {service.tools} &nbsp; {service.title} &nbsp; {service.tools} &nbsp;
                    </span>
                    <span className="text-[15rem] font-black font-bebas text-white/[0.03] uppercase leading-none tracking-tighter">
                        {service.title} &nbsp; {service.tools} &nbsp; {service.title} &nbsp; {service.tools} &nbsp;
                    </span>
                </motion.div>
            </div>

            <div className={`py-12 md:py-20 flex items-center justify-between px-4 transition-all duration-500 ease-in-out relative z-10`}>
                <div className="flex items-center gap-8 md:gap-24 overflow-hidden">
                    <span className={`text-2xl font-bebas transition-colors duration-500 ${isHovered || isOpen ? 'text-accent' : 'text-white/20'}`}>
                        {service.id}
                    </span>
                    <div className="flex flex-col relative">
                        <h3 className={`text-5xl md:text-9xl font-normal font-bebas uppercase tracking-tighter transition-all duration-700 leading-none pr-8 ${isOpen || isHovered ? 'text-white' : 'text-white/40'}`}>
                            {service.title}
                        </h3>
                        {/* Animated Line Under Title */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isHovered ? 1 : 0 }}
                            className="h-[2px] w-full bg-accent origin-left mt-2"
                        />
                    </div>
                </div>

                <Magnetic strength={0.2}>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0, scale: isHovered ? 1.2 : 1 }}
                        className={`w-14 h-14 md:w-20 md:h-20 border rounded-full flex items-center justify-center transition-all duration-500 ${isOpen || isHovered ? 'border-accent bg-accent text-black' : 'border-white/20 text-white/20'}`}
                    >
                        <span className="text-3xl md:text-5xl font-light">+</span>
                    </motion.div>
                </Magnetic>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-20 pl-16 md:pl-44 flex flex-col md:flex-row gap-12 md:gap-24 justify-between pr-12 relative z-10">
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-4xl font-normal text-white/80 max-w-3xl leading-tight font-bebas uppercase tracking-tight"
                            >
                                {service.desc}
                            </motion.p>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col gap-4 border-l border-accent/30 pl-8 min-w-[300px]"
                            >
                                <span className="text-accent text-xs uppercase tracking-[0.4em] font-black">Expertise Tools</span>
                                <span className="text-xl md:text-2xl font-normal font-bebas uppercase tracking-widest text-white/60">
                                    {service.tools}
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

