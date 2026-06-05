export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/clases", label: "Clases" }, { href: "/membres-as", label: "Membres As" }, { href: "/miembros", label: "Miembros" }, { href: "/pagos", label: "Pagos" }, { href: "/rutinas", label: "Rutinas" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "GymFlow", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="GymFlow">{children}</ProtectedShell>
      </body>
    </html>
  );
}
