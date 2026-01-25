export default function CommunitiesPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Communities</h1>
        <p className="text-slate-400 mt-1">
          Oversikt over communities opprettet i Intraa
        </p>
      </header>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400 text-sm">
          Ingen communities er opprettet ennå.
        </p>

        <button
          className="mt-4 inline-flex items-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white transition"
          disabled
        >
          + Opprett community (kommer)
        </button>
      </div>
    </div>
  );
}
