"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormState = {
  name: string;
  slug: string;
  description: string;
  category: string;
  visibility: "public" | "private";
  ownerId: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function CommunityCreatePage() {
  const router = useRouter();
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    slug: "",
    description: "",
    category: "",
    visibility: "public",
    ownerId: "",
  });

  const derivedSlug = useMemo(() => {
    if (formState.slug.trim()) {
      return toSlug(formState.slug);
    }

    return toSlug(formState.name);
  }, [formState.name, formState.slug]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormState((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const payload = {
      name: formState.name.trim(),
      slug: derivedSlug,
      ownerId: formState.ownerId.trim(),
      description: formState.description.trim(),
      category: formState.category.trim(),
      visibility: formState.visibility,
    };

    if (!payload.name || !payload.slug || !payload.ownerId) {
      setStatus("error");
      setError("Fyll inn navn, slug og eier-ID før du fortsetter.");
      return;
    }

    try {
      const response = await fetch("/api/communities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Kunne ikke opprette community");
      }

      setStatus("success");
      router.push(`/dashboard/communities/${payload.slug}`);
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Ukjent feil oppstod",
      );
    }
  }

  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Opprett ny community</h1>
        <p className="text-slate-400 mt-1">
          Fyll inn grunninfo før du setter opp hjemside og feed.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-6"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="name">
            Navn på community
          </label>
          <input
            id="name"
            type="text"
            placeholder="Eks: Intraa Norge"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="slug">
            Slug / URL
          </label>
          <input
            id="slug"
            type="text"
            placeholder="intraa-norge"
            value={formState.slug}
            onChange={(event) => updateField("slug", event.target.value)}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <p className="text-xs text-slate-500">
            Hjemsiden blir tilgjengelig på{" "}
            <span className="text-slate-300">
              /dashboard/communities/{derivedSlug || "din-slug"}
            </span>
          </p>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-200"
            htmlFor="description"
          >
            Kort beskrivelse
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Hva handler communityen om?"
            value={formState.description}
            onChange={(event) => updateField("description", event.target.value)}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-200"
              htmlFor="category"
            >
              Kategori
            </label>
            <input
              id="category"
              type="text"
              placeholder="Eks: Idrett, teknologi"
              value={formState.category}
              onChange={(event) => updateField("category", event.target.value)}
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-200"
              htmlFor="visibility"
            >
              Synlighet
            </label>
            <select
              id="visibility"
              value={formState.visibility}
              onChange={(event) =>
                updateField("visibility", event.target.value as FormState["visibility"])
              }
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
            >
              <option value="public">Offentlig</option>
              <option value="private">Privat</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-200"
            htmlFor="ownerId"
          >
            Eier-ID (midlertidig)
          </label>
          <input
            id="ownerId"
            type="text"
            placeholder="Legg inn eier-ID (f.eks. admin)"
            value={formState.ownerId}
            onChange={(event) => updateField("ownerId", event.target.value)}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <p className="text-xs text-slate-500">
            Brukes av API-et nå mens auth er pausert.
          </p>
        </div>

        {status === "error" && error && (
          <div className="rounded-md border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
            {error}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Oppretter..." : "Opprett community"}
          </button>
          <Link
            href="/dashboard/communities"
            className="text-sm text-slate-400 hover:text-slate-200"
          >
            Avbryt
          </Link>
        </div>
      </form>
    </div>
  );
}
