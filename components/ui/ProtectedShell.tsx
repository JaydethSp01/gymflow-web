"use client";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/ui/Sidebar";
import { AppShell } from "@/components/ui/AppShell";
import { AuthGate } from "@/components/ui/AuthGate";

export function ProtectedShell({
  items,
  title = "Panel",
  children,
}: {
  items: NavItem[];
  title?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <AuthGate>{children}</AuthGate>;
  }

  return (
    <AuthGate>
      <AppShell items={items} title={title}>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
          <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h1>
          </header>
          <main className="flex-1 p-6">
            <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6">
              {children}
            </div>
          </main>
          <footer className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">© 2023 GymFlow</p>
          </footer>
        </div>
      </AppShell>
    </AuthGate>
  );
}

export default ProtectedShell;