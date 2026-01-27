"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Slett både med og uten Domain, for å være helt sikker
    document.cookie =
      "intraa_auth=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie =
      "intraa_auth=; Path=/; Domain=.intraa.net; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    router.push("/login");
  }, [router]);

  return null;
}
