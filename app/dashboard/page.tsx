export default function DashboardPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-semibold">
          Oversikt
        </h1>
        <p className="text-slate-400 mt-2">
          Administrasjon og videre utvikling av plattformen
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="font-medium mb-2">Status</h2>
          <p className="text-slate-400 text-sm">
            Plattform under aktiv utvikling.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="font-medium mb-2">Communities</h2>
          <p className="text-slate-400 text-sm">
            Ingen communities opprettet ennå.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="font-medium mb-2">Neste steg</h2>
          <p className="text-slate-400 text-sm">
            Koble backend, roller og funksjoner.
          </p>
        </div>
      </section>
    </>
  );
}
