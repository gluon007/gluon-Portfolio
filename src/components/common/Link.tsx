import type { MouseEvent, ReactNode } from "react"
import { glow } from "../../utils/motion"

export interface LinkProps {
  to: string
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function Link({ to, children, className = "", onClick }: LinkProps) {
  return (
    <a
      onPointerMove={className.includes("project-card") ? glow : undefined}
      className={className}
      href={to.startsWith("mailto:") || to.startsWith("tel:") ? to : `#${to}`}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
