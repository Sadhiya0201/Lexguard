"use client";

import { motion } from "framer-motion";
import { Activity, ShieldAlert, CheckCircle, PieChart } from "lucide-react";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface RiskDashboardProps {
  status: "idle" | "analyzing" | "complete";
  finalScore?: number;
}

export default function RiskDashboard({ status, finalScore = 85 }: RiskDashboardProps) {
  const data = [
    { name: "Risk", value: status === "complete" ? finalScore : 0 },
    { name: "Safe", value: status === "complete" ? 100 - finalScore : 100 },
  ];

  const COLORS = ["#3b82f6", "#1e3a8a"]; // Blue-500 and Blue-900

  return (
    <div className="flex flex-col h-full glass-card rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Header */}
      <div className="p-4 border-b border-white/5 bg-blue-900/50 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-2">
          <PieChart className="h-5 w-5 text-primary" />
          <h3 className="font-semibold tracking-tight text-sm">Risk Intelligence</h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col z-10 relative">
        {status === "idle" ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm font-medium">
            Upload a document to see risk score.
          </div>
        ) : status === "analyzing" ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
             <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-[spin_3s_linear_infinite]"></div>
                <div className="absolute inset-2 border-4 border-blue-500/20 border-dashed rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
                <Activity className="w-8 h-8 text-primary animate-pulse" />
             </div>
             <p className="text-sm font-medium text-primary animate-pulse">Calculating Risk Vector...</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-32 h-32 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={60}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold tracking-tighter text-blue-500">{finalScore}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-blue-500 mb-1">HIGH RISK</h4>
                <p className="text-sm text-blue-300 font-medium">This contract heavily favors the company.</p>
              </div>
            </div>

            <div className="space-y-4">
               <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                     <ShieldAlert className="w-4 h-4 text-blue-500" />
                     <span className="font-semibold text-blue-400 text-sm">Financial Trap Detected</span>
                  </div>
                  <p className="text-xs text-blue-300 font-medium leading-relaxed">
                    Clause 7.1 contains a $15,000 TRAP. This is highly punitive and acts as a de-facto non-compete.
                  </p>
               </div>

               <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                     <CheckCircle className="w-4 h-4 text-blue-500" />
                     <span className="font-semibold text-blue-400 text-sm">Action Recommended</span>
                  </div>
                  <p className="text-xs text-blue-300 font-medium leading-relaxed">
                    Request removal of Clause 7.1 or amortize the cost over 6 months instead of 24.
                  </p>
               </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
