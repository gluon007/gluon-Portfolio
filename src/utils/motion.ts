import type { PointerEvent } from "react"

export const calm = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export function glow(e: PointerEvent<HTMLElement>): void {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
}

export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: calm() ? "instant" : "smooth",
  })
}
