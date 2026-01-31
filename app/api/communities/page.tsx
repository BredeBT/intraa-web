"use client";

import { useEffect, useState } from "react";

type Community = {
  id: string;
  name: string;
};

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [name, setName] = useState("");

  async function load() {
    const res = await fetch("/api/communities");
    const data = await res.json();
    setCommunities(data);
  }

  async function create() {
    if (!name) return;

    await fetch("/api/communities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName("");
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Communities</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="bg-slate-900 border border-slate-700 px-3 py-2 rounded"
          placeholder="Community navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={create}
          className="bg-white text-black px-4 py-2 rounded"
        >
          Opprett
        </button>
      </div>

      <ul className="space-y-2">
        {communities.map((c) => (
          <li
            key={c.id}
            className="border border-slate-800 rounded px-4 py-2"
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
