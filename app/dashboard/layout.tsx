export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
        <div className="mb-10">
          <h1 className="text-lg font-semibold">Intraa</h1>
          <p className="text-xs text-slate-400 mt-1">
            Admin dashboard
          </p>
        </div>

        <nav className="space-y-2 text-sm">
          <a
            href="/dashboard"
            className="block rounded-md px-3 py-2 bg-slate-800 text-white"
          >
            Oversikt
          </a>

          <a
            href="#"
            className="block rounded-md px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            Communities
          </a>

          <a
            href="#"
            className="block rounded-md px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            Medlemmer
          </a>

          <a
            href="#"
            className="block rounded-md px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            Innstillinger
          </a>
        </nav>

        <form action="/logout" method="post" className="mt-10">
  <button
    type="submit"
    className="w-full text-left rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition"
  >
    Logg ut
  </button>
</form>

      </aside>

      {/* Main content */}
      <main className="flex-1 p-12">
        {children}
      </main>
    </div>
  );
}
