import { useLayoutEffect } from "react"
import { calm } from "../utils/motion"

const SELECTORS = [
  ".hero-copy>*",
  ".hero-art",
  ".marquee",
  ".page>*:not(.view-pane):not(.section):not(.case-section):not(.contact-cta)",
  ".section>*:not(.project-grid):not(.principles)",
  ".project-card",
  ".principles>div",
  ".contact-cta",
  ".case-section>*",
  ".view-pane>*",
  ".resume-hero-copy>*",
  ".resume-paper",
  ".education-row",
  ".module",
  ".cs-defs>div",
].join(",")

/**
 * Staggered, scroll-aware entry animation for each page.
 * Elements are tagged before paint, revealed with a soft fade + rise,
 * then cleaned up so hover transitions stay smooth.
 */
export function useScrollReveal(dependency: unknown): void {
  useLayoutEffect(() => {
    if (calm() || !("IntersectionObserver" in window)) return
    const root = document.getElementById("main-content")
    if (!root) return

    const seen = new WeakSet<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .sort(
            (x, y) =>
              x.boundingClientRect.top - y.boundingClientRect.top ||
              x.boundingClientRect.left - y.boundingClientRect.left,
          )
          .forEach((e, i) => {
            const el = e.target as HTMLElement
            const delay = Math.min(i, 8) * 80
            el.style.transitionDelay = `${delay}ms`
            el.classList.add("rv-in")
            io.unobserve(el)
            window.setTimeout(() => {
              el.classList.remove("rv", "rv-in")
              el.style.transitionDelay = ""
            }, 1100 + delay)
          })
      },
      { threshold: 0.06, rootMargin: "0px 0px -5% 0px" },
    )

    const scan = () => root.querySelectorAll(SELECTORS).forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        el.classList.add("rv")
        io.observe(el)
      })

    scan()
    const mo = new MutationObserver(scan)
    mo.observe(root, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [dependency])
}
