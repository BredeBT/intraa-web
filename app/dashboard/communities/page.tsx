"use client";

import { useState } from "react";

type Community = {
  id: string;
  name: string;
};

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [name, setName] = useState("");

  function createCommunity() {
    if (!name.trim()) return;

    setCommunities((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
      },
    ]);

    setName("");
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Communities</h1>
        <p className="text-slate-400 mt-1">
          Administrer communities i Intraa
        </p>
      </header>

      {/* Create box */}
      <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-medium mb-3">Opprett community</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Navn på community"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
          />

          <button
            onClick={createCommunity}
            className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
          >
            Opprett
          </button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {communities.length === 0 && (
          <p className="text-slate-400 text-sm">
            Ingen communities opprettet ennå.
          </p>
        )}

        {communities.map((community) => (
          <div
            key={community.id}
            className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3"
          >
            {community.name}
          </div>
        ))}
      </div>
    </div>
  );
}
