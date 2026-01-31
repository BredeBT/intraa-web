import Link from "next/link";

type CommunityHomePageProps = {
  params: { slug: string };
};

export default function CommunityHomePage({ params }: CommunityHomePageProps) {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-400">Community</p>
          <h1 className="text-2xl font-semibold">{params.slug}</h1>
        </div>
        <div className="flex gap-2">
          <Link
            href="/dashboard/communities/new"
            className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:text-white"
          >
            Ny community
          </Link>
          <Link
            href="/dashboard/communities"
            className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
          >
            Tilbake til oversikt
          </Link>
        </div>
      </header>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-medium mb-2">Hjemside / feed</h2>
        <p className="text-slate-400 text-sm mb-6">
          Dette blir feed-siden som viser poster og aktivitet i communityen.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-300 font-medium">
              Skriv første oppdatering
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Kommer snart: opprett post, pinned innlegg, og filtre.
            </p>
          </div>

          <div className="rounded-lg border border-dashed border-slate-700 bg-slate-950/40 p-4 text-sm text-slate-500">
            Ingen innlegg ennå. Denne flaten skal fylles med innhold og
            aktiviteter.
          </div>
        </div>
      </section>
    </div>
  );
}
