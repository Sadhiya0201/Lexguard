import { Navbar } from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background ambient light */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>
      <div className="fixed inset-0 z-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>

      <Navbar />

      <main className="flex-1 relative z-10 pt-16 flex flex-col">
        {children}
      </main>
    </div>
  );
}
