"use client";

import LiveDebate from "@/components/LiveDebate";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Bot } from "lucide-react";
import { Suspense } from "react";

function DebateContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const documentId = searchParams.get("id") || "demo_doc_123";

  return (
    <>
      {/* Header */}
      <div className="container mx-auto px-6 py-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            <Bot className="text-primary w-6 h-6" />
            Live Adversarial Debate
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Agents are actively arguing the terms of your contract.</p>
        </div>
        
        <button 
          onClick={() => router.push("/dashboard")}
          className="group flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 transition-all premium-shadow"
        >
          Skip to Dashboard
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex-1 container mx-auto px-6 py-8">
        <LiveDebate documentId={documentId} onAnalysisComplete={() => {}} />
      </div>
    </>
  );
}

export default function DebatePage() {
  return (
    <main className="flex-1 flex flex-col bg-background/50 relative">
      <div className="absolute inset-0 bg-grid -z-20 opacity-30"></div>
      <Suspense fallback={<div className="p-8">Loading debate...</div>}>
        <DebateContent />
      </Suspense>
    </main>
  );
}
