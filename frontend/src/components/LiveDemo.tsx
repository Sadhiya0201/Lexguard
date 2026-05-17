"use client";

import { motion } from "framer-motion";
import { UploadCloud, File, CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";

export default function LiveDemo() {
  return (
    <section className="py-32 relative bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        >
          Try LEXGUARDAI Now
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 font-medium"
        >
          Upload a sample contract to see our adversarial AI agents in action. 
          Your document is analyzed locally and never stored.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto glass-card rounded-[2.5rem] p-4 border border-white/5 shadow-2xl"
        >
          <div className="border border-dashed border-white/10 rounded-[2rem] p-16 hover:bg-white/[0.02] hover:border-primary/30 transition-all duration-500 cursor-pointer group flex flex-col items-center justify-center relative overflow-hidden bg-blue-950/50">
            <div className="absolute inset-0 bg-primary/5 tranblue-y-full group-hover:tranblue-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
            
            <div className="bg-primary/10 w-24 h-24 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 ease-[0.16,1,0.3,1] shadow-inner shadow-primary/20 ring-1 ring-primary/20">
              <UploadCloud className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Drag & Drop your contract here</h3>
            <p className="text-muted-foreground mb-8 font-medium">Supports PDF, DOCX, TXT up to 10MB</p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900 border border-white/5 text-sm font-medium text-blue-300">
                <File className="w-4 h-4 text-blue-400" /> Offer_Letter.pdf
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900 border border-white/5 text-sm font-medium text-blue-300">
                <File className="w-4 h-4 text-blue-400" /> Lease_Agreement.docx
              </span>
            </div>

            <Link href="/dashboard" className="relative z-10 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-xl hover:shadow-primary/30 hover:scale-[1.02] duration-300">
              <Lock className="w-4 h-4" /> Start Secure Analysis
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground font-medium px-4 pb-4">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> AES-256 Encryption</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Zero Data Retention</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Instant Results</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
