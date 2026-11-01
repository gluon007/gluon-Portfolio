import { useState } from "react"
import { projects } from "../data/projects"
import { Arrow } from "../components/common/Arrow"
import { Label } from "../components/common/Label"
import { Link } from "../components/common/Link"
import { Tag } from "../components/common/Tag"
import { Tilt } from "../components/common/Tilt"
import { Experience } from "../components/portfolio/Experience"
import { PdfViewer } from "../components/portfolio/PdfViewer"

const CORE_CAPABILITIES = [
  "UX problem-solving",
  "Information architecture",
  "Interaction design",
  "Visual design",
  "Prototyping",
  "Design systems",
  "Responsive UI",
  "Product thinking",
]

const TOOLS = ["Figma", "Framer", "VS Code"]

const EDUCATION = [
  ["MCA", "AKTU, Uttar Pradesh", "2025"],
  ["B.Sc. with Mathematics", "Dr. B. R. Ambedkar University, Agra", "2023"],
] as const

const TABS = [
  ["web", "Web resume"],
  ["pdf", "PDF resume"],
] as const

export function Resume() {
  const [view, setView] = useState<"web" | "pdf">("web")
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <div className="page resume-page">
      <div className="resume-switch-bar">
        <div className="view-toggle" role="tablist" aria-label="Resume view">
          {TABS.map(([k, t]) => (
            <button
              key={k}
              role="tab"
              id={`tab-${k}`}
              aria-selected={view === k}
              aria-controls="resume-pane"
              className={view === k ? "active" : ""}
              onClick={() => setView(k)}
            >
              {t}
            </button>
          ))}
        </div>
        <a
          className="button"
          href={resumeUrl}
          download="Shrey-Sharma-Resume.pdf"
        >
          Download resume{" "}
          <span className="arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>

      <div
        id="resume-pane"
        role="tabpanel"
        aria-labelledby={`tab-${view}`}
        key={view}
        className="view-pane"
      >
        {view === "pdf" ? (
          <section className="pdf-viewer">
            <div className="pdf-toolbar">
              <span className="mono">SHREY-SHARMA-RESUME.PDF · 1 PAGE</span>
              <a
                className="text-link"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in new tab <Arrow />
              </a>
            </div>
            <PdfViewer url={resumeUrl} />
          </section>
        ) : (
          <>
            <div className="resume-hero">
              <div className="resume-hero-copy">
                <h1>Shrey Sharma</h1>
                <p className="page-intro">
                  UI/UX Designer · Product thinking · Interface craft
                </p>
                <p className="resume-summary">
                  A product-minded designer turning complex workflows into
                  intuitive digital experiences, with a focus on interface
                  design, systems, and interaction detail.
                </p>
              </div>
              <Tilt className="resume-paper">
                <div className="paper-head">
                  <b>Shrey Sharma</b>
                  <span>UI/UX Designer</span>
                </div>
                <div className="paper-block pb-exp">
                  <span className="paper-label">EXPERIENCE</span>
                  <strong>UI/UX Designer</strong>
                  <small>SRDT Pvt. Ltd. · Aug 2025 — Present</small>
                </div>
                <div className="paper-block pb-cap">
                  <span className="paper-label">CAPABILITIES</span>
                  <div className="paper-chips">
                    {["UX", "IA", "Interaction", "Systems"].map((c) => (
                      <em key={c}>{c}</em>
                    ))}
                  </div>
                </div>
                <div className="paper-block pb-edu">
                  <span className="paper-label">EDUCATION</span>
                  <small>MCA · AKTU · 2025</small>
                </div>
                <div className="paper-block pb-tools">
                  <span className="paper-label">TOOLS</span>
                  <div className="paper-chips">
                    {["Figma", "Framer"].map((c) => (
                      <em key={c}>{c}</em>
                    ))}
                  </div>
                </div>
                <div className="paper-block pb-projects">
                  <span className="paper-label">PROJECTS</span>
                  <span className="paper-projects">
                    {projects.slice(0, 4).map((pr) => (
                      <small className="paper-pill" key={pr.id}>
                        {pr.id === "unif"
                          ? "UNIF"
                          : pr.id === "srdt"
                            ? "SRDT Training"
                            : pr.title}
                      </small>
                    ))}
                  </span>
                </div>
              </Tilt>
            </div>

            <section className="resume-section">
              <Label>EXPERIENCE</Label>
              <div className="experience-list">
                <Experience className="is-indented" />
                <Experience
                  className="is-indented no-border"
                  role="Digital Marketing"
                  company="Shivmay Technologies"
                  detail="Social media posts"
                  date="June 2023 — August 2023"
                  current={false}
                />
              </div>
            </section>

            <section className="resume-section">
              <Label>CORE CAPABILITIES</Label>
              <div className="skills">
                {CORE_CAPABILITIES.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <Label>SELECTED PROJECTS</Label>
              {projects.slice(0, 4).map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="resume-project"
                >
                  <h3>{p.title}</h3>
                  <span>
                    {p.type} <Arrow />
                  </span>
                </Link>
              ))}
            </section>

            <section className="resume-section">
              <Label>TOOLS</Label>
              <div className="skills tools-skills">
                {TOOLS.map((s) => (
                  <Tag key={s} className={s === "Framer" ? "is-sticky" : ""}>
                    {s}
                  </Tag>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <Label>EDUCATION</Label>
              <div className="education-list">
                {EDUCATION.map(([deg, school, year]) => (
                  <div className="education-row" key={deg}>
                    <h3>{deg}</h3>
                    <span>{school}</span>
                    <span className="mono">{year}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
