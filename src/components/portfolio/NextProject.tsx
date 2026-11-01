import { projects } from "../../data/projects"
import { Arrow } from "../common/Arrow"
import { Link } from "../common/Link"

interface NextProjectProps {
  id: string
}

export function NextProject({ id }: NextProjectProps) {
  const currentIndex = projects.findIndex((p) => p.id === id)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <Link to={`/project/${next.id}`} className="next-project">
      <span className="mono">NEXT PROJECT</span>
      <strong>
        {next.title} <Arrow />
      </strong>
    </Link>
  )
}
