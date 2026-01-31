"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    if (!password) return;

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        throw new Error("Unauthorized");
      }

      // Viktig: bruk replace så back ikke går til /login
      router.replace("/dashboard/overview");
    } catch (err) {
      alert("Feil passord");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 320 }}>
      <input
        type="password"
        placeholder="Admin-passord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleLogin();
          }
        }}
      />

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logger inn…" : "Logg inn"}
      </button>
    </div>
  );
}
