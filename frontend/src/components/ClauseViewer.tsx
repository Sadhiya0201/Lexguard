"use client";

import { motion } from "framer-motion";
import { FileText, AlignLeft } from "lucide-react";

interface ClauseViewerProps {
  documentText: string;
}

export default function ClauseViewer({ documentText }: ClauseViewerProps) {
  if (!documentText) return null;

  // Extremely basic mock highlighting for the demo
  const highlightTrap = (text: string) => {
    const parts = text.split("7.1 Training Repayment. Employee agrees to repay all training costs estimated at $15,000 if employment terminates within 24 months.");
    
    if (parts.length < 2) return <p className="whitespace-pre-wrap text-sm text-blue-300 leading-relaxed font-medium">{text}</p>;

    return (
      <p className="whitespace-pre-wrap text-sm text-blue-300 leading-relaxed font-medium">
        {parts[0]}
        <span className="bg-blue-500/20 text-blue-300 px-1 py-0.5 rounded border border-blue-500/30 animate-pulse">
          7.1 Training Repayment. Employee agrees to repay all training costs estimated at $15,000 if employment terminates within 24 months.
        </span>
        {parts[1]}
      </p>
    );
  };

  return (
    <div className="flex flex-col h-full glass-card rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Header */}
      <div className="p-4 border-b border-white/5 bg-blue-900/50 flex items-center gap-2 z-10 relative">
        <AlignLeft className="h-5 w-5 text-blue-400" />
        <h3 className="font-semibold tracking-tight text-sm text-blue-200">Contract Viewer</h3>
      </div>

      <div className="p-6 overflow-y-auto flex-1 z-10 relative custom-scrollbar">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner"
        >
          {highlightTrap(documentText)}
        </motion.div>
      </div>
    </div>
  );
}
