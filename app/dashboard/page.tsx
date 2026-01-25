export default function DashboardPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Oversikt</h1>
        <p className="text-slate-400 mt-1">
          Velkommen til Intraa admin-dashboard
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Communities</p>
          <p className="text-2xl font-semibold mt-2">0</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Brukere</p>
          <p className="text-2xl font-semibold mt-2">0</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Status</p>
          <p className="text-2xl font-semibold mt-2">Aktiv</p>
        </div>
      </div>
    </div>
  );
}
