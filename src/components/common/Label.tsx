import type { ReactNode } from "react"

interface LabelProps {
  children: ReactNode
}

export function Label({ children }: LabelProps) {
  return <div className="eyebrow">{children}</div>
}
