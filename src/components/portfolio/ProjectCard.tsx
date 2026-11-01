import type { Project } from "../../types/portfolio"
import { Arrow } from "../common/Arrow"
import { Link } from "../common/Link"
import { Tag } from "../common/Tag"
import { ProductPreview } from "./ProductPreview"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <div className="project-visual">
        <ProductPreview kind={project.id} />
        <span className="visual-note">INTERFACE EXPLORATION</span>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <Tag>{project.type}</Tag>
          <span className="project-number">0{index + 1}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="card-link">
          VIEW PROJECT <Arrow />
        </div>
      </div>
    </Link>
  )
}

