import type { PointerEvent, ReactNode } from "react"
import { calm } from "../../utils/motion"

interface TiltProps {
  children: ReactNode
  className?: string
}

export function Tilt({ children, className = "" }: TiltProps) {
  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (calm()) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty(
      "--rx",
      `${((0.5 - (e.clientY - r.top) / r.height) * 6).toFixed(2)}deg`,
    )
    el.style.setProperty(
      "--ry",
      `${(((e.clientX - r.left) / r.width - 0.5) * 8).toFixed(2)}deg`,
    )
  }

  const handlePointerLeave = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg")
    e.currentTarget.style.setProperty("--ry", "0deg")
  }

  return (
    <div
      className={`tilt ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  )
}

