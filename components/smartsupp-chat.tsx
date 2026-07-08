"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmartsuppChat() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip admin pages
    if (pathname?.startsWith("/admin")) return;

    // Prevent duplicate loads
    if (document.getElementById("smartsupp-script")) return;

    const key = "78152bcf032b7e0f2df2264509df5b8de3a26398";

    // Initialize smartsupp
    (window as any)._smartsupp = (window as any)._smartsupp || {};
    (window as any)._smartsupp.key = key;

    // Load the script
    const script = document.createElement("script");
    script.id = "smartsupp-script";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    script.src = "https://www.smartsuppchat.com/loader.js?";
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existing = document.getElementById("smartsupp-script");
      if (existing) existing.remove();
    };
  }, [pathname]);

  return null;
}
