import { useState } from "react"
import { projects } from "../data/projects"
import { Arrow } from "../components/common/Arrow"
import { Button } from "../components/common/Button"
import { Label } from "../components/common/Label"
import { Link } from "../components/common/Link"
import { Tag } from "../components/common/Tag"
import { Tilt } from "../components/common/Tilt"
import { ContactCTA } from "../components/portfolio/ContactCTA"
import { Experience } from "../components/portfolio/Experience"
import { Principles } from "../components/portfolio/Principles"
import { ProductPreview } from "../components/portfolio/ProductPreview"
import { ProjectCard } from "../components/portfolio/ProjectCard"

const MARQUEE_ITEMS = [
  "UX problem-solving",
  "Information architecture",
  "Interaction design",
  "Visual design",
  "Design systems",
  "Prototyping",
  "Responsive UI",
]

const HERO_SWITCH_OPTIONS = [
  ["unif", "UNIF"],
  ["srmu", "SRMU"],
  ["sp-jain", "SP Jain"],
] as const

export function Home() {
  const [activePreview, setActivePreview] = useState("unif")

  const previewTitle =
    activePreview === "unif"
      ? "UNIF ECOSYSTEM"
      : activePreview === "srmu"
        ? "SRMU WEBSITE"
        : "SP JAIN CRM"

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Tag>
            <span className="current-dot" /> AVAILABLE FOR SELECT PROJECTS
          </Tag>
          <h1>
            Thoughtful systems.
            <br />
            <span>Clear experiences.</span>
          </h1>
          <p className="hero-description">
            I’m Shrey Sharma, a product-minded designer turning complex
            workflows into intuitive digital experiences.
          </p>
          <div className="actions">
            <Button to="/library">
              View selected work <Arrow />
            </Button>
            <Button to="/about" secondary>
              About me
            </Button>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>BASED IN</dt>
              <dd>Lucknow, India</dd>
            </div>
            <div>
              <dt>ROLE</dt>
              <dd>UI/UX Designer</dd>
            </div>
            <div>
              <dt>CURRENTLY</dt>
              <dd>SRDT Pvt. Ltd.</dd>
            </div>
          </dl>
        </div>
        <Tilt className="hero-art">
          <div className="art-caption">
            <span>01 / {previewTitle}</span>
          </div>
          <ProductPreview key={activePreview} kind={activePreview} large />
          <div
            className="hero-switch"
            role="group"
            aria-label="Preview a project"
          >
            {HERO_SWITCH_OPTIONS.map(([key, label]) => (
              <button
                key={key}
                aria-pressed={activePreview === key}
                className={activePreview === key ? "active" : ""}
                onClick={() => setActivePreview(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </Tilt>
      </section>

      <div className="marquee" aria-label="Capabilities">
        <div className="marquee-track">
          {[0, 1].map((iteration) => (
            <span key={iteration} aria-hidden={iteration === 1}>
              {MARQUEE_ITEMS.map((item) => (
                <span key={item}>
                  {item}
                  <i>✦</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="selected-work" className="section selected">
        <div className="section-heading">
          <div>
            <Label>01 / SELECTED WORK</Label>
            <h2>A few problems worth solving.</h2>
          </div>
          <Link to="/library" className="text-link">
            Project Library <Arrow />
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </section>

      <section className="section">
        <Label>02 / EXPERIENCE</Label>
        <div className="section-heading">
          <h2>Designing for real-world complexity.</h2>
          <span className="subtle mono">CURRENTLY</span>
        </div>
        <Experience />
      </section>

      <section className="section philosophy">
        <Label>03 / DESIGN PHILOSOPHY</Label>
        <div className="section-heading">
          <h2>Clarity is a design decision.</h2>
          <Link to="/about" className="text-link">
            How I think <Arrow />
          </Link>
        </div>
        <Principles />
      </section>

      <ContactCTA />
    </>
  )
}
