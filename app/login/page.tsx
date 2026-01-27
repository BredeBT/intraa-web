"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  if (res.ok) {
    router.push("/dashboard");
  } else {
    alert("Feil passord");
  }
}



  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-xl p-8"
      >
        <h1 className="text-xl font-semibold mb-6">Logg inn</h1>

        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 rounded-md bg-slate-950 border border-slate-700 px-3 py-2"
        />

        <button
          type="submit"
          className="w-full bg-slate-100 text-slate-900 py-2 rounded-md font-medium"
        >
          Logg inn
        </button>
      </form>
    </main>
  );
}
