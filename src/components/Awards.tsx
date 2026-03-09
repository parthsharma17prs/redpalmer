"use client";

import { motion } from 'framer-motion';

const partners = [
    { year: 'ANCHOR', title: 'Algorand Protocol', project: 'Immutable Audit Anchoring', img: 'https://framerusercontent.com/images/m1X3CPZ5JCv6sVqH5a9SzUuuXTo.jpg', status: 'SYNCHRONIZED' },
    { year: 'PRIVACY', title: 'Aleo Network', project: 'Private ZK Computation', img: 'https://framerusercontent.com/images/r0qjn23eNOAVLQfk3TzhfFjNhe4.jpg', status: 'ACTIVE_NODE' },
    { year: 'PROOF', title: 'Zcash Protocol', project: 'Confidential Attestations', img: 'https://framerusercontent.com/images/VT310qn9CgKuOTrXFOLhZALciE.png', status: 'VALIDATING' },
    { year: 'OSCAL', title: 'NIST Standards', project: 'Standardized Compliance', img: 'https://framerusercontent.com/images/WmDGeUasQkCARkfUExK22qAlDFc.png', status: 'STANDARDIZED' },
    { year: 'REGULATORY', title: 'ISO/IEC Frameworks', project: 'Global Compliance Mapping', img: 'https://framerusercontent.com/images/8rcXl0j3NquReHM8SwF3VK8zQ.png', status: 'CERTIFIED' },
    { year: 'TRUST', title: 'Ethereum Foundation', project: 'Smart Contract Assurance', img: 'https://framerusercontent.com/images/VT310qn9CgKuOTrXFOLhZALciE.png', status: 'OPERATIONAL' },
];

export default function Awards() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            {/* Phase Indicator */}
            <div className="absolute left-6 top-60 hidden xl:flex flex-col items-center gap-12 z-20">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Distribution Phase</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bebas text-2xl tracking-tighter tabular-nums">004</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8 relative z-10 border-l border-white/5 pl-12">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Ecosystem <span className="text-accent-lime text-[10px] tracking-widest font-sans">// SHARED_RESOURCES</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                        NETWORK & <br /> <span className="text-white/20">PARTNERS</span>
                    </h2>
                </div>

                <p className="text-xl md:text-2xl text-white/50 max-w-sm leading-relaxed font-light">
                    Leveraging <span className="text-white">world-class</span> blockchain protocols and regulatory frameworks to deliver <span className="text-accent-lime">provable</span> compliance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-white/5 relative z-10">
                {partners.map((partner, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group border-r border-b border-white/10 p-12 flex flex-col gap-10 hover:bg-white/[0.01] transition-all duration-700 h-[350px] relative"
                    >
                        {/* Background Technical Noise */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover mix-blend-overlay" />

                        <div className="flex justify-between items-start relative z-10">
                            <span className="text-accent font-bebas text-2xl tracking-tighter opacity-40">/{partner.year}</span>
                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-sm border border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/60">{partner.status}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-normal font-bebas uppercase tracking-tighter text-white group-hover:text-accent transition-colors duration-500">
                                {partner.title}
                            </h3>
                            <p className="text-lg font-bebas text-white/30 uppercase tracking-tight leading-none italic">
                                {partner.project}
                            </p>
                        </div>

                        <div className="mt-auto relative z-10 flex items-end justify-between">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/10">Verification Protocol</span>
                                <div className="h-[1px] w-12 bg-white/10 group-hover:w-full transition-all duration-700 origin-left" />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-accent group-hover:text-accent transition-all duration-500">
                                <span className="text-xl">→</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

