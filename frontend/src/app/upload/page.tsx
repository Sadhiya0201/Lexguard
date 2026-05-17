"use client";

import { useState } from "react";
import UploadZone from "@/components/UploadZone";
import { FileText, ShieldAlert, Briefcase, FileSignature, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const handleDemoSelect = (demoName: string) => {
    setSelectedDemo(demoName);
    // Simulate processing delay for effect
    setTimeout(() => {
      router.push("/processing");
    }, 1500);
  };

  const demos = [
    { name: "Internship Agreement", icon: <Briefcase className="w-5 h-5 text-blue-500" />, desc: "Finds unpaid clauses & non-competes." },
    { name: "Rental Lease", icon: <FileSignature className="w-5 h-5 text-blue-500" />, desc: "Identifies hidden fees & eviction risks." },
    { name: "Privacy Policy", icon: <ShieldAlert className="w-5 h-5 text-blue-500" />, desc: "Detects data selling & arbitration terms." }
  ];

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 bg-grid relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>
      
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left: Upload Zone */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Upload Contract</h1>
            <p className="text-muted-foreground">Drag and drop your PDF or Word document to let our adversarial AI agents analyze it.</p>
          </div>
          
          <div className="glass-card rounded-3xl p-2 premium-shadow">
             <UploadZone onUploadSuccess={(id) => router.push("/processing?id=" + id)} />
          </div>
        </div>

        {/* Right: Demo Contracts */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-2">Or Try a Demo</h2>
            <p className="text-sm text-muted-foreground">Select a pre-loaded document to see LEXGUARDAI in action immediately.</p>
          </div>

          <div className="flex flex-col gap-4">
            {demos.map((demo) => (
              <button 
                key={demo.name}
                onClick={() => handleDemoSelect(demo.name)}
                disabled={selectedDemo !== null}
                className={`flex items-start gap-4 p-5 text-left rounded-2xl glass-card transition-all duration-300 ${
                  selectedDemo === demo.name 
                    ? "ring-2 ring-primary border-primary scale-[1.02] premium-glow"
                    : "hover:border-primary/50 hover:bg-muted/50 hover:-translate-y-1"
                }`}
              >
                <div className="p-3 rounded-xl bg-background border border-border shadow-sm">
                  {demo.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground flex items-center justify-between">
                    {demo.name}
                    {selectedDemo === demo.name ? (
                      <span className="text-xs font-bold text-primary animate-pulse">Loading...</span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-50" />
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{demo.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
