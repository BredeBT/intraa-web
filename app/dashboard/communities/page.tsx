import Link from "next/link";

export default function CommunitiesPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Communities</h1>
        <p className="text-slate-400 mt-1">
          Administrer communities i Intraa
        </p>
      </header>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-medium mb-2">Ingen communities enda</h2>
        <p className="text-slate-400 text-sm mb-4">
          Opprett en community for å starte hjemside og feed.
        </p>
        <Link
          href="/dashboard/communities/new"
          className="inline-flex items-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
        >
          + Opprett community
        </Link>
      </div>
    </div>
  );
}
