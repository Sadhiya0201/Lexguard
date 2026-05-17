"use client";

import { Download, Scale, AlertTriangle, ShieldCheck, FileSignature, CheckCircle2 } from "lucide-react";

export default function ReportPage() {
  return (
    <main className="flex-1 flex justify-center bg-muted/20 py-12 px-6">
      
      <div className="w-full max-w-4xl bg-background border border-border shadow-2xl rounded-2xl overflow-hidden relative">
        {/* Print Header */}
        <div className="bg-primary/5 border-b border-primary/10 p-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-xl">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">LexguardAI Intelligence Report</h1>
              <p className="text-sm text-muted-foreground font-mono mt-1">ID: LXG-2026-8491-A • CONFIDENTIAL</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all premium-shadow">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        <div className="p-10 space-y-12">
          
          {/* Executive Summary */}
          <section>
            <h2 className="text-lg font-bold tracking-tight border-b border-border pb-2 mb-4">Executive Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed">
                  This document has been evaluated by LexguardAI's adversarial agents. The primary risk profile is classified as <span className="font-bold text-danger">HIGH RISK</span>, largely due to heavily skewed unilateral non-compete covenants and ambiguous indemnification clauses that expose the signee to unlimited personal financial liability.
                </p>
              </div>
              <div className="bg-danger/10 border border-danger/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <AlertTriangle className="w-8 h-8 text-danger mb-2" />
                <span className="text-sm font-bold text-danger">DO NOT SIGN</span>
                <span className="text-xs text-muted-foreground">Renegotiation Required</span>
              </div>
            </div>
          </section>

          {/* AI Response Quality Implementation (Structured, Polished) */}
          <section>
            <h2 className="text-lg font-bold tracking-tight border-b border-border pb-2 mb-6">Critical Risk Analysis</h2>
            
            <div className="space-y-8">
              {/* Clause 1 */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 relative">
                <div className="absolute top-6 right-6 px-3 py-1 bg-danger/20 text-danger text-xs font-bold rounded-full border border-danger/30">CRITICAL RISK</div>
                
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileSignature className="w-5 h-5 text-muted-foreground" />
                  1. Non-Compete Covenant (Section 4.2)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Original Text</h4>
                    <p className="text-sm font-mono bg-muted p-4 rounded-lg border border-border text-foreground/80 leading-relaxed">
                      "Employee agrees not to engage in any business competing with the Company anywhere in the World for a period of 5 years following termination..."
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Explanation & Real-World Impact</h4>
                      <p className="text-sm text-foreground/90">This clause legally bars you from working in your industry globally for half a decade. This destroys future earning potential and severely limits career mobility.</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-1 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Negotiation Advice
                      </h4>
                      <p className="text-sm text-blue-500 font-medium">Request geographic limitation (e.g., "within 50 miles of main office") and time limitation (e.g., "6 months"). If denied, ask for severance pay equal to the non-compete duration.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clause 2 */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 relative">
                <div className="absolute top-6 right-6 px-3 py-1 bg-orange-500/20 text-orange-500 text-xs font-bold rounded-full border border-orange-500/30">MODERATE RISK</div>
                
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileSignature className="w-5 h-5 text-muted-foreground" />
                  2. Training Repayment Agreement (Section 7.1)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Original Text</h4>
                    <p className="text-sm font-mono bg-muted p-4 rounded-lg border border-border text-foreground/80 leading-relaxed">
                      "Should the employee depart within 24 months, they are liable for $25,000 in onboarding and training cost recuperation."
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Explanation & Real-World Impact</h4>
                      <p className="text-sm text-foreground/90">This is a TRAP (Training Repayment Agreement Provision). It acts as shadow debt to prevent you from quitting, forcing you to pay a massive fee if you leave early.</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-1 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Negotiation Advice
                      </h4>
                      <p className="text-sm text-blue-500 font-medium">Require an itemized list of what constitutes "$25,000 of training" before signing. Push for a prorated forgiveness schedule (e.g., debt decreases by 1/24th every month worked).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Verification */}
          <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              Cryptographically verified AI analysis
            </div>
            <div>Timestamp: {new Date().toISOString().split('T')[0]}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
