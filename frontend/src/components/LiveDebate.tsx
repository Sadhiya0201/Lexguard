"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Shield, Scale, Bot, AlertCircle, Loader2 } from "lucide-react";

interface LogEntry {
  agent: string;
  message: string;
}

interface LiveDebateProps {
  documentId: string;
  onAnalysisComplete?: (finalVerdict: string) => void;
}

export default function LiveDebate({ documentId, onAnalysisComplete }: LiveDebateProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isStreaming, setIsStreaming] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!documentId) return;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    const eventSource = new EventSource(`${apiUrl}/stream-debate?document_id=${documentId}`);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setLogs((prev) => [...prev, data]);
      } catch (err) {
        console.error("Failed to parse SSE data", err);
      }
    };

    eventSource.addEventListener("done", (event) => {
      setIsStreaming(false);
      eventSource.close();
      if (onAnalysisComplete) {
        // Extract verdict from last log if it's the judge
        onAnalysisComplete("Analysis Complete");
      }
    });

    eventSource.onerror = (err) => {
      console.error("SSE Error:", err);
      eventSource.close();
      setIsStreaming(false);
    };

    return () => {
      eventSource.close();
    };
  }, [documentId, onAnalysisComplete]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getAgentStyles = (agent: string) => {
    if (agent.includes("Advocate")) return { color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-500/10", border: "border-blue-200 dark:border-blue-500/30", align: "justify-start", icon: <User className="w-5 h-5 text-blue-600 dark:text-blue-400" /> };
    if (agent.includes("Defender")) return { color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-500/10", border: "border-blue-200 dark:border-blue-500/30", align: "justify-end", icon: <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" /> };
    if (agent.includes("Judge")) return { color: "text-primary", bg: "bg-primary/10", border: "border-primary/30", align: "justify-center w-full", icon: <Scale className="w-5 h-5 text-primary" /> };
    return { color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-800", border: "border-border", align: "justify-start w-full", icon: <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" /> };
  };

  const formatMessage = (msg: string) => {
    return msg.split('\n').map((line, i) => {
      if (line.includes(': ')) {
        const [label, ...rest] = line.split(': ');
        return (
          <div key={i} className="mb-2 last:mb-0">
            <span className="font-bold text-xs uppercase tracking-wider opacity-70 block mb-0.5">{label}</span>
            <span className="block leading-relaxed">{rest.join(': ')}</span>
          </div>
        );
      }
      return <div key={i} className="mb-2 last:mb-0 leading-relaxed">{line}</div>;
    });
  };

  return (
    <div className="flex flex-col h-full glass-card rounded-[2rem] overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Header */}
      <div className="p-4 border-b border-border bg-card/50 backdrop-blur-md flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-primary" />
          <h3 className="font-semibold tracking-tight text-sm">Live AI Courtroom</h3>
        </div>
        <div className="flex items-center gap-2">
          {isStreaming ? (
            <>
              <Loader2 className="w-4 h-4 text-primary animate-spin" />
              <span className="text-xs font-medium text-primary animate-pulse">Analysis in progress...</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs font-medium text-blue-500">Verdict Reached</span>
            </>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 z-10 relative scroll-smooth">
        {logs.length === 0 && isStreaming && (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
            <Bot className="w-12 h-12 mb-4 opacity-50" />
            <p className="text-sm">Initializing multi-agent graph...</p>
          </div>
        )}

        <AnimatePresence>
          {logs.map((log, index) => {
            const styles = getAgentStyles(log.agent);
            const isJudge = log.agent.includes("Judge");
            const isSystem = log.agent === "System";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`flex ${styles.align}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${isJudge ? 'w-full flex-col items-center text-center' : ''}`}>
                  {!isJudge && !isSystem && log.agent.includes("Advocate") && (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${styles.bg} border ${styles.border}`}>
                      {styles.icon}
                    </div>
                  )}

                  <div className={`flex flex-col ${isJudge ? 'w-full' : ''}`}>
                    <span className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${styles.color} ${isJudge ? 'text-center' : ''}`}>
                      {log.agent}
                    </span>
                    <div className={`p-5 rounded-2xl border ${styles.border} ${styles.bg} backdrop-blur-sm shadow-sm ${isJudge ? 'w-full' : ''}`}>
                      {isSystem ? (
                         <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div className="text-sm font-mono text-foreground/80 leading-relaxed">{formatMessage(log.message)}</div>
                         </div>
                      ) : (
                         <div className="text-sm text-foreground/90 font-medium">{formatMessage(log.message)}</div>
                      )}
                    </div>
                  </div>

                  {!isJudge && !isSystem && log.agent.includes("Defender") && (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${styles.bg} border ${styles.border}`}>
                      {styles.icon}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
