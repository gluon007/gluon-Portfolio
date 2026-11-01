import { Label } from "../common/Label"

interface PrinciplesProps {
  className?: string
}

const PRINCIPLES = [
  [
    "Understand the system.",
    "Start with the real problem. Understand how people, tasks, and product logic connect.",
  ],
  [
    "Make complexity legible.",
    "Create structure, hierarchy, and patterns that make the next step feel natural.",
  ],
  [
    "Make details matter.",
    "Treat every state, interaction, and component as part of the whole experience.",
  ],
] as const

export function Principles({ className = "" }: PrinciplesProps) {
  return (
    <div className={`principles ${className}`.trim()}>
      {PRINCIPLES.map(([title, text], i) => (
        <div key={title}>
          <Label>0{i + 1} /</Label>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

