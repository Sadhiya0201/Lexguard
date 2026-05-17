"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 min-h-[85vh] overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-50 -z-20"></div>
      
      {/* Massive Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-primary/20 rounded-[100%] blur-[120px] -z-10 animate-pulse-glow"></div>

      <div className="max-w-5xl mx-auto text-center z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 text-primary text-sm font-semibold tracking-wide mb-8"
        >
          <Sparkles className="w-4 h-4" />
          The Next Generation of Legal Intelligence
        </motion.div>

        {/* Massive Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
        >
          Before You Agree, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-pulse-glow">Let AI Argue.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          LEXGUARDAI uses adversarial AI agents to expose hidden legal risks, exploitative clauses, and dangerous terms before users sign.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/upload" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-base font-bold hover:scale-105 transition-all premium-shadow">
            <FileText className="w-5 h-5" />
            Analyze Contract
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#demo" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-background border border-border text-foreground hover:bg-muted/50 rounded-full text-base font-bold transition-all premium-shadow">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform text-primary" />
            Watch Demo
          </Link>
        </motion.div>

      </div>
      
      {/* Floating Decorative Cards (Simulating AI Analysis) */}
      <div className="absolute top-1/4 left-10 hidden lg:flex flex-col gap-2 p-4 glass-card premium-shadow rounded-2xl animate-bounce" style={{ animationDuration: '4s' }}>
        <div className="h-2 w-12 bg-danger rounded-full"></div>
        <div className="h-2 w-24 bg-muted rounded-full"></div>
        <div className="text-xs font-bold text-danger mt-1">High Risk Detected</div>
      </div>

      <div className="absolute bottom-1/4 right-10 hidden lg:flex flex-col gap-2 p-4 glass-card premium-shadow rounded-2xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        <div className="h-2 w-16 bg-success rounded-full"></div>
        <div className="h-2 w-20 bg-muted rounded-full"></div>
        <div className="text-xs font-bold text-success mt-1">Standard Clause</div>
      </div>
    </section>
  );
}
