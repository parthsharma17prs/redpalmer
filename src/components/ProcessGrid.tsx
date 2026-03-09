"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
    { id: '01', title: 'Ingest Securely', desc: 'Instead of full data access, we ingest minimal metadata, control signals, and configuration fingerprints.' },
    { id: '02', title: 'Analyze Automatically', desc: 'AI agents map and classify compliance requirements, identifying gaps and testing controls autonomously.' },
    { id: '03', title: 'Prove Cryptographically', desc: 'Leverage ZKPs to validate controls are operating correctly without revealing the underlying sensitive data.' },
    { id: '04', title: 'Anchor Immutably', desc: 'Verification events are anchored across distributed ledgers for permanent, tamper-proof proof of compliance.' }
];

export default function ProcessGrid() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            {/* Phase Indicator */}
            <div className="absolute left-6 top-60 hidden xl:flex flex-col items-center gap-12 z-20">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Validation Phase</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bebas text-2xl tracking-tighter tabular-nums">005</span>
            </div>

            <div className="flex justify-between items-end mb-32 relative z-10 border-l border-white/5 pl-12 overflow-hidden">
                <div className="flex flex-col gap-4">
                    <span className="text-accent-lime font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Workflow <span className="text-white/10 text-[10px] tracking-widest font-sans">// LOGIC_STACK</span>
                    </span>
                    <motion.h2
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]"
                    >
                        HOW WE <span className="text-accent underline underline-offset-[20px] decoration-accent/20">WORK</span>
                    </motion.h2>
                </div>

                <p className="text-white/20 text-xs font-black uppercase tracking-[0.4em] hidden md:block pb-4 tracking-widest">// SYSTEM_PROCESS_v2.01</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className={`group relative p-10 h-[400px] md:h-[450px] border-r border-b border-white/10 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-700`}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        animate={{
                            backgroundColor: hoveredIdx === idx ? 'var(--accent)' : 'transparent',
                        }}
                    >
                        <div className="text-2xl font-bebas text-accent group-hover:text-white opacity-40 group-hover:opacity-100 relative z-10 transition-all duration-500">
                            {step.id} —
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl lg:text-3xl font-normal font-bebas uppercase mb-6 tracking-tighter leading-none group-hover:text-white transition-colors duration-500">
                                {step.title}
                            </h3>

                            <p className="text-xl md:text-2xl font-normal font-bebas uppercase leading-tight tracking-tighter text-white/40 group-hover:text-white/90 transition-colors duration-500">
                                {step.desc}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="h-[1px] w-8 bg-accent/30 group-hover:bg-white/50 group-hover:w-16 transition-all duration-700" />
                            <span className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Operational</span>
                        </div>

                        {/* Background Giant Text on Hover */}
                        <motion.div
                            className="absolute -bottom-10 -right-10 text-[12rem] font-black font-bebas text-white/[0.02] group-hover:text-white/[0.05] uppercase leading-none tracking-tighter pointer-events-none select-none"
                            animate={{
                                y: hoveredIdx === idx ? 0 : 50,
                                opacity: hoveredIdx === idx ? 1 : 0,
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {step.id}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
