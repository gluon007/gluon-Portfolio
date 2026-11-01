import { useEffect, useRef, useState } from "react"
import { modules } from "../../data/projects"
import { calm } from "../../utils/motion"
import { ModuleCard } from "./ModuleCard"

export function ModuleScroller() {
  const ref = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const update = () => {
    const el = ref.current
    if (el) {
      setEdge({
        start: el.scrollLeft <= 2,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
      })
    }
  }

  useEffect(() => {
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const go = (dir: number) => {
    ref.current?.scrollBy({
      left: dir * 336,
      behavior: calm() ? "auto" : "smooth",
    })
  }

  return (
    <>
      <div className="module-controls">
        <span className="mono">{modules.length} MODULES</span>
        <div>
          <button
            aria-label="Previous modules"
            disabled={edge.start}
            onClick={() => go(-1)}
          >
            ←
          </button>
          <button
            aria-label="Next modules"
            disabled={edge.end}
            onClick={() => go(1)}
          >
            →
          </button>
        </div>
      </div>
      <div
        className="module-grid"
        ref={ref}
        onScroll={update}
        role="region"
        aria-label="UNIF modules"
        tabIndex={0}
      >
        {modules.map((m, i) => (
          <ModuleCard key={m} name={m} index={i} />
        ))}
      </div>
    </>
  )
}
