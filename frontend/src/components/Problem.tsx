"use client";

import { motion } from "framer-motion";
import { AlertTriangle, EyeOff, FileSignature } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <EyeOff className="h-8 w-8 text-blue-500" />,
      title: "Hidden Liabilities",
      description: "Contracts are intentionally dense to hide clauses that shift financial and legal liability onto you.",
    },
    {
      icon: <FileSignature className="h-8 w-8 text-blue-500" />,
      title: "Unequal Bargaining Power",
      description: "Companies spend millions on lawyers to draft agreements. Consumers have 0 protection when clicking 'I Agree'.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Exploitative Ambiguity",
      description: "Vague terms like 'reasonable effort' or 'at company discretion' are legal traps designed to deny your rights.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-blue-950">
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            The Legal System is <span className="text-blue-500">Rigged.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium"
          >
            Every day, millions of people sign offer letters, SaaS agreements, and rental contracts without understanding the rights they are signing away.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-3xl relative group hover:-tranblue-y-2 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              <div className="bg-blue-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
