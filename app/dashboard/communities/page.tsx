"use client";

import { useState } from "react";

type Community = {
  id: string;
  name: string;
  description?: string;
};

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function createCommunity(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) return;

    const newCommunity: Community = {
      id: crypto.randomUUID(),
      name,
      description,
    };

    setCommunities((prev) => [...prev, newCommunity]);
    setName("");
    setDescription("");
    setShowForm(false);
  }

  return (
    <div>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Communities</h1>
          <p className="text-slate-400 mt-1">
            Administrer communities i Intraa
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
        >
          + Opprett community
        </button>
      </header>

      {showForm && (
        <form
          onSubmit={createCommunity}
          className="mb-6 rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Navn</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2"
              placeholder="F.eks. Sport Outlet IT"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Beskrivelse</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2"
              placeholder="Valgfritt"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900"
            >
              Opprett
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-md border border-slate-700 px-4 py-2 text-sm"
            >
              Avbryt
            </button>
          </div>
        </form>
      )}

      {communities.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-slate-400">
          Ingen communities opprettet ennå.
        </div>
      ) : (
        <div className="grid gap-4">
          {communities.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="font-medium">{c.name}</h2>
              {c.description && (
                <p className="text-sm text-slate-400 mt-1">
                  {c.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
