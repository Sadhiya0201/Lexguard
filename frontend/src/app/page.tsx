import Hero from "@/components/Hero";
import Link from "next/link";
import { Scale, ShieldCheck, Zap, Lock, BarChart } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col bg-background overflow-x-hidden">
      
      {/* Hero Section */}
      <Hero />

      {/* Trusted By / Social Proof */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by modern legal teams and startups
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Fake logos for hackathon */}
            <div className="text-xl font-bold font-serif flex items-center gap-2"><Scale className="w-6 h-6"/> TechLaw Partners</div>
            <div className="text-xl font-bold flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> SecureDocs</div>
            <div className="text-xl font-bold flex items-center gap-2"><Lock className="w-6 h-6"/> Verify.ai</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Uncover Hidden Risks in Seconds</h2>
            <p className="text-lg text-muted-foreground">Our proprietary adversarial AI system acts as your personal legal team, arguing both sides of every clause to find exactly where you're exposed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-card premium-shadow hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Adversarial Debate</h3>
              <p className="text-muted-foreground leading-relaxed">Watch as a Consumer Advocate AI and Corporate Defender AI battle over the implications of each clause in real-time.</p>
            </div>
            
            <div className="p-8 rounded-3xl glass-card premium-shadow hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <BarChart className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Risk Heatmaps</h3>
              <p className="text-muted-foreground leading-relaxed">Visual intelligence highlights the most dangerous sections of any contract, color-coded by liability, privacy, and financial risk.</p>
            </div>

            <div className="p-8 rounded-3xl glass-card premium-shadow hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <ShieldCheck className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Negotiation Ammo</h3>
              <p className="text-muted-foreground leading-relaxed">Don't just find the problems. Get AI-generated, legally-sound rebuttal suggestions to push back and negotiate better terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to level the playing field?</h2>
          <Link href="/upload" className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform duration-300 premium-shadow">
            Analyze Contract Now
          </Link>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="border-t border-border bg-background py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold tracking-tight">LEXGUARD<span className="text-primary font-light">AI</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Platform</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
          
          <p className="text-sm text-muted-foreground opacity-70">
            © {new Date().getFullYear()} LexguardAI. Built for Hackathon.
          </p>
        </div>
      </footer>
    </main>
  );
}
