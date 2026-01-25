import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6">
        <h1 className="text-lg font-semibold mb-1">Intraa</h1>
        <p className="text-sm text-slate-400 mb-6">Admin dashboard</p>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="block rounded-md px-3 py-2 bg-slate-800 hover:bg-slate-700 transition"
          >
            Oversikt
          </Link>

          <Link
            href="/dashboard/communities"
            className="block rounded-md px-3 py-2 bg-slate-800 hover:bg-slate-700 transition"
          >
            Communities
          </Link>

          <div className="px-3 py-2 text-slate-500">Medlemmer</div>
          <div className="px-3 py-2 text-slate-500">Innstillinger</div>
        </nav>

        <div className="mt-10">
          <Link
            href="/logout"
            className="text-sm text-slate-400 hover:text-white"
          >
            Logg ut
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
