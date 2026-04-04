"use client";
import { useEffect, useState } from "react";

type Props = { slug: string; increment?: boolean };

export default function ViewCounter({ slug, increment = false }: Props) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const method = increment ? "POST" : "GET";
    fetch(`/api/views/${slug}`, { method })
      .then((r) => r.json())
      .then((data) => setViews(data.views));
  }, [slug, increment]);

  if (views === null) return <span>— views</span>;
  return <span>{views.toLocaleString()} views</span>;
}
