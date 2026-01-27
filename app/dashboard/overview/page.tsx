export default function OverviewPage() {
  // Midlertidige tall (erstattes med backend senere)
  const stats = [
    { label: "Communities", value: 0 },
    { label: "Brukere", value: 0 },
    { label: "Aktive sesjoner", value: 0 },
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Oversikt</h1>
        <p className="text-slate-400 mt-1">
          Hurtig oversikt over Intraa-plattformen
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="text-3xl font-semibold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400 mb-2">Systemstatus</p>
        <p className="text-green-400 font-medium">● Operativ</p>
      </div>
    </div>
  );
}
