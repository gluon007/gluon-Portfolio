import { caseStudies, type Block, type Study } from "../caseStudies"
import type { Project } from "../types/portfolio"
import { Label } from "../components/common/Label"
import { Link } from "../components/common/Link"
import { Tag } from "../components/common/Tag"
import { Tilt } from "../components/common/Tilt"
import { ContactCTA } from "../components/portfolio/ContactCTA"
import { NextProject } from "../components/portfolio/NextProject"
import { ProductPreview } from "../components/portfolio/ProductPreview"

function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case "p":
      return <p key={i}>{b.text}</p>
    case "h3":
      return (
        <h3 key={i} className="cs-sub">
          {b.text}
        </h3>
      )
    case "list":
      return (
        <ul key={i} className="cs-list">
          {b.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      )
    case "olist":
      return (
        <ol key={i} className="cs-list cs-ordered">
          {b.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      )
    case "defs":
      return (
        <div key={i} className="cs-defs">
          {b.items.map(([k, v]) => (
            <div key={k}>
              <strong>{k}</strong>
              <p>{v}</p>
            </div>
          ))}
        </div>
      )
    case "objective":
      return (
        <p key={i} className="cs-objective">
          <span className="mono">DESIGN OBJECTIVE</span>
          {b.text}
        </p>
      )
    case "note":
      return (
        <p key={i} className="cs-note">
          {b.text}
        </p>
      )
    case "placeholder":
      return (
        <div key={i} className="cs-placeholder mono">
          {b.text}
        </div>
      )
    case "takeaway":
      return (
        <blockquote key={i} className="cs-takeaway">
          <span className="mono">THE TAKEAWAY</span>
          {b.text}
        </blockquote>
      )
  }
}

interface RichCaseStudyProps {
  study: Study
  project: Project
}

function RichCaseStudy({ study, project }: RichCaseStudyProps) {
  return (
    <div className="page case-page">
      <div className="case-header-nav">
        <Link to="/library" className="text-link back-link">
          ← Project Library
        </Link>
        <Tag>{study.tag}</Tag>
      </div>
      <h1>{study.title}</h1>
      <p className="case-headline">{study.headline}</p>
      {study.lede.map((l) => (
        <p className="page-intro" key={l}>
          {l}
        </p>
      ))}
      <Tilt className="case-visual">
        <ProductPreview kind={project.id} large />
        <span className="mono">
          ILLUSTRATIVE INTERFACE CONCEPT · FINAL PROJECT SCREENS TO BE ADDED
        </span>
      </Tilt>
      <div className="case-metadata">
        {study.meta.map(([k, v]) => (
          <div key={k}>
            <Label>{k}</Label>
            <p>{v}</p>
          </div>
        ))}
      </div>
      {study.sections.map((s) => (
        <section className="case-section rich" key={s.n} id={`cs-${s.n}`}>
          <div className="cs-heading">
            <Label>
              {s.n} / {s.title.toUpperCase()}
            </Label>
            <h2>{s.title}</h2>
          </div>
          <div className="cs-prose">{s.blocks.map(renderBlock)}</div>
        </section>
      ))}
      <NextProject id={project.id} />
      <ContactCTA />
    </div>
  )
}

const FALLBACK_SECTIONS = [
  [
    "Context",
    "The challenge",
    "Add the product context, problem definition, audience, and project constraints.",
  ],
  [
    "Discovery",
    "Understand before designing",
    "Add available research, discovery methods, and evidence. Findings and user feedback have not been supplied.",
  ],
  [
    "Architecture",
    "From complexity to clarity",
    "Add the information architecture, user flows, and the rationale behind key design decisions.",
  ],
  [
    "Interface",
    "A system, not a set of screens",
    "Add high-fidelity project screens, reusable components, interaction states, and responsive behavior.",
  ],
  [
    "Reflection",
    "What changed and what comes next",
    "Add verified outcomes, reflections, and future improvements. No numerical results are claimed.",
  ],
] as const

interface CaseStudyProps {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  const study = caseStudies[project.id]
  if (study) return <RichCaseStudy study={study} project={project} />

  return (
    <div className="page">
      <div className="case-header-nav">
        <Link to="/library" className="text-link back-link">
          ← Project Library
        </Link>
        <Tag>CASE STUDY / {project.type.toUpperCase()}</Tag>
      </div>
      <h1>{project.title}</h1>
      <p className="page-intro">{project.description}</p>
      <Tilt className="case-visual">
        <ProductPreview kind={project.id} large />
        <span className="mono">
          ILLUSTRATIVE INTERFACE CONCEPT · ACTUAL PROJECT SCREENS TO BE ADDED
        </span>
      </Tilt>
      <div className="case-metadata">
        {[
          ["ROLE", "UI/UX Design"],
          ["SCOPE", project.type],
          ["TIMELINE", "To be documented"],
          ["STATUS", `${project.category} project`],
        ].map(([k, v]) => (
          <div key={k}>
            <Label>{k}</Label>
            <p>{v}</p>
          </div>
        ))}
      </div>
      <div className="documentation-notice">
        Case study in progress. The sections below are clearly marked content
        placeholders, not claims of completed research or verified results.
      </div>
      {FALLBACK_SECTIONS.map(([label, title, text], i) => (
        <section className="case-section" key={label}>
          <div>
            <Label>
              0{i + 1} / {label.toUpperCase()}
            </Label>
            <h2>{title}</h2>
          </div>
          <div>
            <Tag>CONTENT TO BE ADDED</Tag>
            <p>{text}</p>
          </div>
        </section>
      ))}
      <NextProject id={project.id} />
      <ContactCTA />
    </div>
  )
}
