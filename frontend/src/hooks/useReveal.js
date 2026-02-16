import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));

    // Safety: if nothing found, no-op
    if (!els.length) return;

    // Respect reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // keep it premium: reveal once then stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
