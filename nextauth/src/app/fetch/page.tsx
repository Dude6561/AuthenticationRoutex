// app/fetch/page.tsx

import React from "react";

// ✅ This is a Server Component by default
export default async function Page() {
  const res = await fetch("https://catfact.ninja/fact", {
    next: { revalidate: 5 }, // ✅ App Router only
  });

  const data = await res.json();

  return (
    <div>
      <h1>Cached and Displaying</h1>
      <h2>{data.fact}</h2>
    </div>
  );
}
