"use client";

import { motion } from "framer-motion";
import { Scale, MessageSquare, Shield, AlertCircle, ArrowRight } from "lucide-react";

export default function AiDebate() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-8 text-xs font-bold uppercase tracking-wider border border-primary/20"
            >
              <Scale className="h-4 w-4" /> Multi-Agent Architecture
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              The Courtroom of the Future.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted-foreground mb-12 font-medium"
            >
              We don't just use one AI. We pit two advanced AI agents against each other to battle over your contract, overseen by an impartial Judge AI.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: <AlertCircle className="h-5 w-5 text-blue-500" />, title: "Consumer Advocate", desc: "Ruthlessly searches for traps, liabilities, and unfair terms." },
                { icon: <Shield className="h-5 w-5 text-blue-500" />, title: "Corporate Defender", desc: "Argues why the terms are necessary and standard." },
                { icon: <Scale className="h-5 w-5 text-primary" />, title: "Arbitrator Judge", desc: "Analyzes both sides and issues a final, unbiased risk verdict." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 p-2 bg-blue-900/50 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold tracking-tight">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-[120px] -z-10"></div>
            
            {/* Architectural Diagram */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-3xl p-8 border border-white/10"
            >
              <div className="flex flex-col items-center gap-6">
                
                {/* Judge */}
                <div className="w-full flex justify-center">
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-primary/30 bg-primary/5 w-48 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <Scale className="h-8 w-8 text-primary mb-2" />
                    <span className="font-bold text-foreground">Judge AI</span>
                    <span className="text-xs text-muted-foreground">Final Verdict</span>
                  </div>
                </div>

                <div className="flex w-full justify-center gap-4 relative">
                  {/* Lines */}
                  <svg className="absolute top-1/2 left-1/2 -tranblue-x-1/2 -tranblue-y-1/2 w-32 h-32 -z-10" fill="none" viewBox="0 0 100 100">
                    <path d="M 10 50 L 90 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M 50 10 L 50 50" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>

                  {/* Advocate */}
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 w-40">
                    <AlertCircle className="h-8 w-8 text-blue-400 mb-2" />
                    <span className="font-bold text-foreground text-sm">Advocate</span>
                  </div>

                  {/* Defender */}
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 w-40">
                    <Shield className="h-8 w-8 text-blue-400 mb-2" />
                    <span className="font-bold text-foreground text-sm">Defender</span>
                  </div>
                </div>

                {/* Document */}
                <div className="w-full flex justify-center mt-4">
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-700 bg-blue-900 w-48">
                    <MessageSquare className="h-6 w-6 text-blue-400 mb-2" />
                    <span className="font-medium text-foreground text-sm">Uploaded Contract</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
