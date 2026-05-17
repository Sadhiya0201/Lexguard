"use client";

import RiskDashboard from "@/components/RiskDashboard";
import { useRouter } from "next/navigation";
import { ShieldAlert, ArrowRight, FileText } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <main className="flex-1 flex flex-col bg-muted/20 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      
      {/* Header */}
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <ShieldAlert className="text-primary w-8 h-8" />
            Risk Intelligence Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            Our AI has evaluated the contract and identified key areas of exposure. Review the heatmaps and individual clause risk scores below.
          </p>
        </div>
        
        <button 
          onClick={() => router.push("/report")}
          className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:scale-105 transition-all premium-shadow"
        >
          <FileText className="w-4 h-4" />
          Generate Final Report
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex-1 container mx-auto px-6 pb-12">
        <RiskDashboard status="complete" />
      </div>
    </main>
  );
}
