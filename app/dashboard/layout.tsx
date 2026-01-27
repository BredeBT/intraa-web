"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
   { label: "Oversikt", href: "/dashboard/communities" },
    { label: "Communities", href: "/dashboard/communities" },
    { label: "Users", href: "/dashboard/users" },
    { label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
        <h1 className="text-xl font-semibold mb-8">Intraa</h1>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm transition ${
                  active
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 pt-6 border-t border-slate-800">
          <Link
            href="/logout"
            className="text-sm text-slate-400 hover:text-white"
          >
            Logg ut
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
