"use client";

import { motion } from "framer-motion";
import { Activity, ShieldAlert, FileSearch, PieChart } from "lucide-react";

export default function RiskIntelligence() {
  const features = [
    {
      title: "Real-Time Risk Scoring",
      desc: "Our engine assigns a dynamic risk score from 0-100 based on financial, privacy, and legal liabilities.",
      icon: <Activity className="text-blue-400 h-6 w-6" />
    },
    {
      title: "Clause-by-Clause Breakdown",
      desc: "Every dangerous sentence is highlighted in red with plain-English explanations of what it actually means.",
      icon: <FileSearch className="text-blue-400 h-6 w-6" />
    },
    {
      title: "Negotiation Leverage",
      desc: "Get AI-generated pushback templates to send to HR or landlords to renegotiate unfair terms.",
      icon: <ShieldAlert className="text-blue-400 h-6 w-6" />
    }
  ];

  return (
    <section className="py-32 relative bg-blue-950">
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Risk Intelligence <span className="text-gradient-primary">Dashboard</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Visualizing legal danger before it becomes a real-world problem.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-3/5 w-full glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-blue-900 border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PieChart className="text-primary h-5 w-5" />
                <span className="font-semibold text-sm">Contract Analysis: Software Engineer Offer</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 grid grid-cols-2 gap-6 bg-blue-950/50">
              <div className="col-span-2 md:col-span-1 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Activity className="w-24 h-24 text-blue-500" />
                </div>
                <h4 className="text-blue-400 font-semibold mb-2">Overall Risk Score</h4>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-foreground">84</span>
                  <span className="text-muted-foreground text-sm mb-1">/ 100</span>
                </div>
                <div className="w-full bg-blue-800 rounded-full h-2 mt-4">
                  <div className="bg-blue-500 h-2 rounded-full w-[84%] animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 grid grid-rows-2 gap-4">
                 <div className="p-4 rounded-xl border border-white/5 bg-blue-900 flex items-center justify-between">
                    <span className="text-sm text-blue-400">Financial Risk</span>
                    <span className="text-blue-400 font-bold">HIGH</span>
                 </div>
                 <div className="p-4 rounded-xl border border-white/5 bg-blue-900 flex items-center justify-between">
                    <span className="text-sm text-blue-400">Privacy Risk</span>
                    <span className="text-blue-400 font-bold">MEDIUM</span>
                 </div>
              </div>

              <div className="col-span-2 p-5 rounded-2xl border border-blue-500/30 bg-blue-500/10">
                <h4 className="text-blue-400 font-semibold mb-3 text-sm flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> CRITICAL CLAUSE FOUND</h4>
                <p className="text-blue-300 text-sm font-mono p-4 bg-black/60 rounded-xl border border-blue-500/20 shadow-inner">
                  "Employee agrees to repay all training costs estimated at $15,000 if employment terminates within 24 months..."
                </p>
                <div className="flex items-start gap-2 mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <Activity className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-400 text-xs font-medium leading-relaxed">Advocate Note: This is an exploitative TRAP (Training Repayment Agreement Provision). Highly risky. Consider renegotiating.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/5 space-y-10">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/80 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-blue-800 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
