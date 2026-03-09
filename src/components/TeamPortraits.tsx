"use client";

import { motion } from 'framer-motion';

const team = [
    { name: 'AXON v1.0', role: 'Chief Inference Engine', status: 'ACTIVE', bio: 'Specializing in recursive compliance mapping and automated risk classification across multi-cloud architectures.', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop', id: 'AGNT_09A' },
    { name: 'SIGMA 0x', role: 'ZK Infrastructure Lead', status: 'STABLE', bio: 'Pioneering the application of PLONK and Halo2 circuits for private, high-throughput regulatory state verification.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', id: 'AGNT_42B' },
    { name: 'KRONOS', role: 'Immutability Architect', status: 'ONLINE', bio: 'Expert in distributed ledger anchoring and cryptographic time-stamping for permanent audit integrity.', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop', id: 'AGNT_11X' },
];

export default function TeamPortraits() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            <div className="flex flex-col md:flex-row justify-between items-end mb-32 relative z-10 border-l border-white/5 pl-12 font-bebas">
                <div className="flex flex-col gap-4">
                    <span className="text-accent-lime text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Personnel <span className="text-white/10 text-[10px] tracking-widest font-sans">// AGENTIC_LEADERSHIP</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter uppercase leading-[0.8]">
                        CORE <br /> <span className="text-white/20">FOUNDERS</span>
                    </h2>
                </div>
                <div className="text-right flex flex-col items-end gap-2 opacity-20">
                    <span className="text-xs uppercase tracking-widest font-black">Directory: PERSONNEL_RECORDS</span>
                    <span className="text-[10px] font-mono">HASH: 0x902_ALPHA_NODES</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 relative z-10 border-l border-t border-white/5 bg-white/5">
                {team.map((member, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="group relative bg-black p-8 md:p-12 flex flex-col gap-10 hover:bg-white/[0.02] transition-colors duration-700"
                    >
                        {/* Member Metadata Header */}
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black font-mono text-accent tracking-tighter">{member.id}</span>
                                <span className="text-xs font-bebas text-white/40 uppercase tracking-widest">{member.role}</span>
                            </div>
                            <div className={`px-2 py-0.5 rounded-sm border text-[9px] font-black uppercase tracking-tighter ${member.status === 'ACTIVE' ? 'border-accent-lime text-accent-lime bg-accent-lime/5' : 'border-white/20 text-white/40'}`}>
                                {member.status}
                            </div>
                        </div>

                        {/* Portrait */}
                        <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 group-hover:border-accent/40 transition-all duration-1000 relative">
                            <img
                                src={member.img}
                                className="w-full h-full object-cover grayscale brightness-40 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000 scale-110 group-hover:scale-100"
                                alt={member.name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                            {/* Scanning Effect Overlay */}
                            <motion.div
                                animate={{ top: ['-10%', '110%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 right-0 h-[1px] bg-accent/30 blur-sm pointer-events-none"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-4xl md:text-5xl font-normal font-bebas uppercase tracking-tighter text-white group-hover:text-accent transition-colors duration-500">{member.name}</h3>
                            <p className="text-white/40 text-lg font-light leading-snug font-sans italic border-l border-white/10 pl-6">
                                {member.bio}
                            </p>
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="text-[10px] font-black uppercase tracking-widest text-accent">Access Personnel Profile</span>
                            <span className="text-2xl text-accent">→</span>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}

