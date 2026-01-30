"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Community } from "../communityStore";
import { getCommunityBySlug } from "../communityStore";

type CommunityHomePageProps = {
  params: { slug: string };
};

export default function CommunityHomePage({ params }: CommunityHomePageProps) {
  const [community, setCommunity] = useState<Community | null>(null);
  const [isMissing, setIsMissing] = useState(false);

  useEffect(() => {
    const found = getCommunityBySlug(params.slug);
    if (!found) {
      setIsMissing(true);
      return;
    }
    setCommunity(found);
  }, [params.slug]);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-400">Community</p>
          <h1 className="text-2xl font-semibold">
            {community?.name ?? params.slug}
          </h1>
          {community && (
            <p className="text-sm text-slate-400 mt-1">/{community.slug}</p>
          )}
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

      {isMissing ? (
        <section className="rounded-xl border border-dashed border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-lg font-medium mb-2">Community ikke funnet</h2>
          <p className="text-slate-400 text-sm">
            Vi finner ikke en community med denne slugen lokalt. Gå tilbake til
            oversikten og opprett en ny.
          </p>
        </section>
      ) : (
        <>
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-medium mb-4">Detaljer</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Beskrivelse
                </p>
                <p className="text-sm text-slate-200 mt-2">
                  {community?.description || "Ingen beskrivelse lagt til ennå."}
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Metadata
                </p>
                <ul className="text-sm text-slate-300 mt-2 space-y-1">
                  <li>
                    <span className="text-slate-500">Kategori:</span>{" "}
                    {community?.category || "Uten kategori"}
                  </li>
                  <li>
                    <span className="text-slate-500">Synlighet:</span>{" "}
                    {community?.visibility === "public"
                      ? "Offentlig"
                      : "Privat"}
                  </li>
                  <li>
                    <span className="text-slate-500">Eier:</span>{" "}
                    {community?.ownerId}
                  </li>
                </ul>
              </div>
            </div>
          </section>

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
        </>
      )}
    </div>
  );
}
