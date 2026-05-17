"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Scale, ArrowLeft, ChevronRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isHome = pathname === "/";
  
  // Breadcrumb mapping
  const breadcrumbs: Record<string, string> = {
    "/upload": "Upload Document",
    "/processing": "AI Processing",
    "/debate": "Live AI Debate",
    "/dashboard": "Risk Dashboard",
    "/report": "Final Report"
  };

  const currentBreadcrumb = breadcrumbs[pathname];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors duration-500">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Left Section: Logo & Breadcrumbs */}
          <div className="flex items-center gap-4">
            {!isHome ? (
               <button 
                  onClick={() => router.back()} 
                  className="p-2 hover:bg-muted rounded-full transition-colors group"
                  aria-label="Go back"
               >
                 <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
               </button>
            ) : null}

            {!isHome && <div className="hidden sm:block w-px h-6 bg-border mx-2"></div>}

            <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50">
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg tracking-tight hidden sm:block">LEXGUARD<span className="text-primary font-light">AI</span></span>
            </Link>

            {currentBreadcrumb && (
               <div className="hidden md:flex items-center gap-2 ml-4">
                 <ChevronRight className="w-4 h-4 text-muted-foreground" />
                 <span className="text-sm font-medium text-foreground tracking-wide">
                   {currentBreadcrumb}
                 </span>
               </div>
            )}
          </div>

          {/* Right Section: Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            {isHome && (
              <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
                <Link href="#demo" className="hover:text-foreground transition-colors">How it Works</Link>
              </div>
            )}
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {isHome && (
                 <Link href="/upload" className="px-5 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm font-medium transition-all duration-300 premium-shadow hover:-translate-y-0.5">
                   Analyze Contract
                 </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              className="p-2 -mr-2 text-foreground z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6"
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight">Home</Link>
            <Link href="/upload" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight">Upload Document</Link>
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight">Risk Dashboard</Link>
            
            <div className="mt-auto pb-12">
              <Link href="/upload" onClick={() => setMobileMenuOpen(false)} className="w-full flex justify-center py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium premium-shadow">
                Analyze Contract Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
