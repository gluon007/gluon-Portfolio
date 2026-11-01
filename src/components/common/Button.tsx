import type { ReactNode } from "react"
import { Link } from "./Link"

interface ButtonProps {
  to: string
  children: ReactNode
  secondary?: boolean
}

export function Button({ to, children, secondary = false }: ButtonProps) {
  return (
    <Link to={to} className={`button ${secondary ? "secondary" : ""}`.trim()}>
      {children}
    </Link>
  )
}

