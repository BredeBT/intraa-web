"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { Community } from "./communityStore";
import { getCommunities } from "./communityStore";

export default function CommunitiesPage() {
  const router = useRouter();
  const [communities, setCommunities] = useState<Community[]>([]);
  const [createUrl, setCreateUrl] = useState<string | null>(null);

  useEffect(() => {
    setCommunities(getCommunities());
    setCreateUrl(`${window.location.origin}/dashboard/communities/new`);
  }, []);

  function handleCreateClick() {
    router.push("/dashboard/communities/new");
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Communities</h1>
          <p className="text-slate-400 mt-1">
            Administrer communities i Intraa
          </p>
        </div>
        <button
          type="button"
          onClick={handleCreateClick}
          className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
        >
          + Opprett community
        </button>
      </header>

      {communities.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-medium mb-2">Ingen communities enda</h2>
          <p className="text-slate-400 text-sm mb-4">
            Opprett en community for å starte hjemside og feed.
          </p>
          <button
            type="button"
            onClick={handleCreateClick}
            className="inline-flex items-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
          >
            + Opprett community
          </button>
          <div className="mt-3 space-y-1 text-xs text-slate-500">
            <div>
              Fungerer også som link:{" "}
              <Link
                href="/dashboard/communities/new"
                className="text-slate-300 underline hover:text-white"
              >
                /dashboard/communities/new
              </Link>
            </div>
            {createUrl && (
              <div>
                Full URL:{" "}
                <a
                  href={createUrl}
                  className="text-slate-300 underline hover:text-white"
                >
                  {createUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {communities.map((community) => (
            <Link
              key={community.id}
              href={`/dashboard/communities/${community.slug}`}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{community.name}</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    /{community.slug}
                  </p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {community.visibility === "public"
                    ? "Offentlig"
                    : "Privat"}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-3 line-clamp-2">
                {community.description || "Ingen beskrivelse lagt til ennå."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-md bg-slate-800/60 px-2 py-1">
                  {community.category || "Uten kategori"}
                </span>
                <span className="rounded-md bg-slate-800/60 px-2 py-1">
                  Eier: {community.ownerId}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
