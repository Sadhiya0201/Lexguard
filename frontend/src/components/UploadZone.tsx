"use client";

import { motion } from "framer-motion";
import { UploadCloud, File, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";

interface UploadZoneProps {
  onUploadSuccess: (documentId: string, text: string) => void;
}

export default function UploadZone({ onUploadSuccess }: UploadZoneProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.pdf') && !file.name.endsWith('.docx') && !file.name.endsWith('.txt')) {
      setError("Please upload a PDF, DOCX, or TXT file.");
      return;
    }

    setError("");
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const response = await fetch(`${apiUrl}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload");
      }

      const data = await response.json();
      
      const mockText = `This Employment Agreement (the "Agreement") is entered into...\n\n4.2 Termination. Company reserves the right to terminate employment without cause at any time.\n\n7.1 Training Repayment. Employee agrees to repay all training costs estimated at $15,000 if employment terminates within 24 months.\n\n10.5 Non-Compete. Employee shall not work for any competitor in the global tech industry for a period of 2 years post-termination.`;
      
      onUploadSuccess(data.document_id, mockText);
    } catch (err) {
      console.error(err);
      setError("An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDemo = () => {
    setIsUploading(true);
    setTimeout(() => {
      const mockText = `This Employment Agreement (the "Agreement") is entered into...\n\n4.2 Termination. Company reserves the right to terminate employment without cause at any time.\n\n7.1 Training Repayment. Employee agrees to repay all training costs estimated at $15,000 if employment terminates within 24 months.\n\n10.5 Non-Compete. Employee shall not work for any competitor in the global tech industry for a period of 2 years post-termination.`;
      onUploadSuccess("demo_doc_123", mockText);
    }, 1500);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center glass-card rounded-[2.5rem] relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
       <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="bg-primary/10 w-24 h-24 rounded-[1.5rem] flex items-center justify-center mb-6 mx-auto shadow-inner shadow-primary/20 ring-1 ring-primary/30">
          {isUploading ? (
            <Loader2 className="h-10 w-10 text-primary animate-spin" />
          ) : (
            <UploadCloud className="h-10 w-10 text-primary" />
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 tracking-tight">Upload Contract for Analysis</h3>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto font-medium text-sm">
          Drag and drop your document here, or click to browse. Supported formats: PDF, DOCX, TXT.
        </p>

        {error && <p className="text-blue-500 mb-4 text-sm font-semibold">{error}</p>}

        <label className="relative cursor-pointer px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-primary/30 hover:-tranblue-y-1 duration-300 w-full max-w-xs mx-auto overflow-hidden group">
          <input 
            type="file" 
            className="hidden" 
            accept=".pdf,.docx,.txt"
            onChange={handleUpload}
            disabled={isUploading}
          />
          <div className="absolute inset-0 bg-white/20 tranblue-y-full group-hover:tranblue-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
          <span className="relative z-10">{isUploading ? "Uploading..." : "Select Document"}</span>
        </label>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-12 h-px bg-border"></div>
          <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">or</span>
          <div className="w-12 h-px bg-border"></div>
        </div>

        <button 
          onClick={handleDemo}
          disabled={isUploading}
          className="mt-6 text-sm font-semibold text-primary hover:text-primary/80 transition-colors hover:underline underline-offset-4"
        >
          Try Demo Contract Instantly
        </button>
      </motion.div>
    </div>
  );
}
