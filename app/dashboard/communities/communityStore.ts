"use client";

export type CommunityVisibility = "public" | "private";

export type Community = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  visibility: CommunityVisibility;
  ownerId: string;
  createdAt: string;
};

const STORAGE_KEY = "intraa:communities";

function readStorage(): Community[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as Community[];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  } catch {
    return [];
  }
}

function writeStorage(communities: Community[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(communities));
}

export function getCommunities(): Community[] {
  return readStorage();
}

export function getCommunityBySlug(slug: string): Community | undefined {
  return readStorage().find((community) => community.slug === slug);
}

export function saveCommunity(community: Community): Community[] {
  const existing = readStorage();
  const updated = [...existing, community];
  writeStorage(updated);
  return updated;
}

export function deleteCommunity(slug: string): Community[] {
  const updated = readStorage().filter((community) => community.slug !== slug);
  writeStorage(updated);
  return updated;
}
