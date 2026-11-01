import type { ReactNode } from "react"
import { glow } from "../../utils/motion"

export interface LinkProps {
  to: string
  children: ReactNode
  className?: string
}

export function Link({ to, children, className = "" }: LinkProps) {
  return (
    <a
      onPointerMove={className.includes("project-card") ? glow : undefined}
      className={className}
      href={to.startsWith("mailto:") || to.startsWith("tel:") ? to : `#${to}`}
    >
      {children}
    </a>
  )
}

