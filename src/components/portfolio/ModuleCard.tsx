import { Arrow } from "../common/Arrow"
import { Label } from "../common/Label"
import { Link } from "../common/Link"

interface ModuleCardProps {
  name: string
  index: number
}

export function ModuleCard({ name, index }: ModuleCardProps) {
  return (
    <article className="module">
      <div className="module-card">
        <div className="module-head">
          <Label>{(index + 1).toString().padStart(2, "0")}</Label>
          <h3>{name}</h3>
        </div>
        <div className="module-body">
          <div>
            <p>
              Part of the UNIF university ecosystem. Module-specific scope,
              workflows, interface visuals, and outcomes are awaiting
              documentation.
            </p>
            <Link to="mailto:ssshrey007@gmail.com" className="text-link">
              Ask about this module <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

