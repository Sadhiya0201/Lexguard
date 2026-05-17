"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProcessingState } from "@/components/ProcessingState";

function ProcessingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const documentId = searchParams.get("id") || "demo_doc_123";
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // When processing is complete (simulated inside ProcessingState), redirect to debate
    if (complete) {
      const timer = setTimeout(() => {
        router.push("/debate?id=" + documentId);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [complete, router, documentId]);

  return (
    <div className="w-full max-w-2xl glass-card rounded-3xl p-10 premium-shadow border border-primary/20 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Lexguard Engine Active</h1>
        <p className="text-muted-foreground font-mono text-sm">INITIALIZING ADVERSARIAL AGENTS...</p>
      </div>
      
      <ProcessingState onComplete={() => setComplete(true)} />
    </div>
  );
}

export default function ProcessingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden bg-background">
      {/* Cinematic AI Background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow opacity-50"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent top-1/2"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent left-1/2"></div>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ProcessingContent />
      </Suspense>
    </main>
  );
}
