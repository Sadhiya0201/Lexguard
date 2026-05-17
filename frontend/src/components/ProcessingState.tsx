"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, FileText, Activity } from "lucide-react";

interface ProcessingStateProps {
  onComplete: () => void;
}

const steps = [
  { id: 1, text: "Parsing document structure...", icon: <FileText className="w-5 h-5" /> },
  { id: 2, text: "Extracting critical clauses...", icon: <Loader2 className="w-5 h-5 animate-spin" /> },
  { id: 3, text: "Initializing Consumer Advocate Agent...", icon: <Activity className="w-5 h-5" /> },
  { id: 4, text: "Initializing Corporate Defender Agent...", icon: <Activity className="w-5 h-5" /> },
  { id: 5, text: "Preparing AI Courtroom...", icon: <CheckCircle2 className="w-5 h-5" /> },
];

export function ProcessingState({ onComplete }: ProcessingStateProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    
    let isMounted = true;
    const runSteps = async () => {
      for (let i = 0; i < steps.length; i++) {
        if (!isMounted) return;
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 500));
      }
      
      if (!isMounted) return;
      timeout = setTimeout(() => {
        onComplete();
      }, 500);
    };

    runSteps();

    return () => {
      isMounted = false;
      if (timeout) clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="w-full max-w-md mx-auto glass-card p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 relative mb-8">
           <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-[spin_3s_linear_infinite]"></div>
           <div className="absolute inset-2 border-4 border-blue-500/20 border-dashed rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
           <div className="absolute inset-0 flex items-center justify-center">
              <Activity className="w-8 h-8 text-primary animate-pulse" />
           </div>
        </div>

        <h3 className="text-xl font-bold mb-8 tracking-tight text-foreground">Initializing Analysis</h3>

        <div className="w-full space-y-4">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isPending = index > currentStep;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: isPending ? 0.3 : 1, 
                  x: 0,
                  scale: isCurrent ? 1.02 : 1
                }}
                className={`flex items-center gap-4 p-3 rounded-xl transition-colors duration-300 ${
                  isCurrent ? "bg-primary/10 border border-primary/20" : "bg-transparent border border-transparent"
                }`}
              >
                <div className={`flex-shrink-0 ${isCompleted ? "text-blue-500" : isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.icon}
                </div>
                <span className={`text-sm font-medium ${isCompleted ? "text-foreground" : isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                  {step.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
