"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { label: "Systems Anchored", value: 1240, suffix: "+", sub: "// PERSISTENT_RECORDS" },
    { label: "Active Proofs", value: 850, suffix: "K", sub: "// ZERO_KNOWLEDGE_LOAD" },
    { label: "Compliance Score", value: 100, suffix: "%", sub: "// NIST_800_MAPPING" },
    { label: "Response Time", value: 12, suffix: "ms", sub: "// ULTRA_LOW_LATENCY" },
];

export default function CounterSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-l border-white/5 pl-12">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-4">
                        <span className="text-accent font-bebas text-xs tracking-[0.4em] uppercase opacity-40">
                            {stat.sub}
                        </span>
                        <div className="flex flex-col">
                            <CountUp value={stat.value} suffix={stat.suffix} />
                            <span className="text-xl md:text-2xl font-bebas text-white/40 uppercase tracking-tight">
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const count = useMotionValue(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, {
                duration: 2,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.round(latest).toString();
                    }
                }
            });
            return controls.stop;
        }
    }, [inView, value, count]);

    return (
        <span className="text-6xl md:text-8xl font-normal font-bebas tracking-tighter text-white tabular-nums leading-none">
            <span ref={ref}>0</span>
            <span className="text-accent">{suffix}</span>
        </span>
    );
}

