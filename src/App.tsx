import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { caseStudies, type Block, type Study } from "./caseStudies"

const modules = [
  "LMS",
  "PMS",
  "HRMS Mobile",
  "Facility Management",
  "Travel Desk",
  "E-Office",
  "Alumni",
  "Grievance",
  "CRM",
  "My Admission",
  "My Payments",
  "Ramswaroop Experience",
]
const projects = [
  {
    id: "unif",
    title: "UNIF Ecosystem",
    type: "Product system",
    category: "Professional",
    description:
      "A connected family of university tools. One ecosystem, twelve connected modules.",
  },
  {
    id: "srmu",
    title: "SRMU Website",
    type: "Web experience",
    category: "Professional",
    description: "A clearer path through programs and campus life.",
  },
  {
    id: "sp-jain",
    title: "SP Jain CRM",
    type: "CRM / Applications",
    category: "Professional",
    description: "Complex admissions workflows made manageable.",
  },
  {
    id: "srdt",
    title: "SRDT Training Website",
    type: "Web design",
    category: "Professional",
    description: "A training experience built around clarity.",
  },
  {
    id: "expense",
    title: "Expense Management",
    type: "Personal concept",
    category: "Personal",
    description: "Exploring a calmer approach to everyday finances.",
  },
]
type Project = typeof projects[number]
const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches
function glow(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
}
function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (calm()) return
    const el = e.currentTarget, r = el.getBoundingClientRect()
    el.style.setProperty("--rx", `${((0.5 - (e.clientY - r.top) / r.height) * 6).toFixed(2)}deg`)
    el.style.setProperty("--ry", `${(((e.clientX - r.left) / r.width - 0.5) * 8).toFixed(2)}deg`)
  }
  const leave = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg")
    e.currentTarget.style.setProperty("--ry", "0deg")
  }
  return <div className={`tilt ${className}`} onPointerMove={move} onPointerLeave={leave}>{children}</div>
}
function Link({
  to,
  children,
  className = "",
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      onPointerMove={className.includes("project-card") ? glow : undefined}
      className={className}
      href={to.startsWith("mailto:") || to.startsWith("tel:") ? to : `#${to}`}
    >
      {children}
    </a>
  )
}
function Button({
  to,
  children,
  secondary = false,
}: {
  to: string
  children: ReactNode
  secondary?: boolean
}) {
  return (
    <Link to={to} className={`button ${secondary ? "secondary" : ""}`}>
      {children}
    </Link>
  )
}
function Label({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>
}
function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`tag ${className}`.trim()}>{children}</span>
}
function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ProductPreview({
  kind = "unif",
  large = false,
}: {
  kind?: string
  large?: boolean
}) {
  return (
    <div
      className={`product-preview ${large ? "large" : ""} ${kind}`}
      aria-label="Illustrative interface concept, not a shipped product screenshot"
    >
      <div className="preview-bar">
        <span className="product-logo">
          {kind === "srmu"
            ? "SRMU"
            : kind === "sp-jain"
              ? "SP JAIN"
              : kind === "expense"
                ? "balance"
                : "unif"}
          <span className="logo-dot">.</span>
        </span>
        <span className="preview-crumb">
          {kind === "srmu"
            ? "Explore your possibilities"
            : "Workspace / Overview"}
        </span>
        <span className="avatar">SS</span>
      </div>
      {kind === "srmu" || kind === "srdt" ? (
        <div className="website-concept">
          <div className="tiny-label">LEARN. EXPLORE. BECOME.</div>
          <div className="web-headline">
            Your next chapter
            <br />
            starts here.
          </div>
          <div className="web-bottom">
            <span>Discover our programs ↗</span>
            <span>Engineering · Management · Design</span>
          </div>
          <div className="architectural">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="dashboard">
          <aside>
            <span className="mini-active">
              ▦ <span>Overview</span>
            </span>
            <span>
              ◷ <span>Activity</span>
            </span>
            <span>
              ▤{" "}
              <span>
                {kind === "sp-jain" ? "Applications" : "My workspace"}
              </span>
            </span>
            <span>
              ⊞ <span>Reports</span>
            </span>
            <div className="sidebar-bottom">Workspace settings</div>
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-heading">
              <div>
                <div className="tiny-label">YOUR WORKSPACE, AT A GLANCE</div>
                <strong>
                  {kind === "sp-jain"
                    ? "Admissions overview"
                    : kind === "expense"
                      ? "Money, made clear."
                      : "Academic overview"}
                </strong>
              </div>
              <span className="mini-pill">This month⌄</span>
            </div>
            <div className="mini-stats">
              {["Overview", "In progress", "Completed"].map((text, i) => (
                <div key={text}>
                  <span>{text}</span>
                  <strong>{["24", "08", "16"][i]}</strong>
                  <small>{i === 2 ? "Up to date" : "View details ↗"}</small>
                </div>
              ))}
            </div>
            <div className="mini-table">
              <div className="table-title">
                Recent {kind === "sp-jain" ? "applications" : "activity"}
                <span>View all ↗</span>
              </div>
              {[
                "Course enrollment",
                "Document verification",
                "Semester registration",
              ].map((text, i) => (
                <div className="table-row" key={text}>
                  <span className="activity-icon">{["▤", "▦", "⊞"][i]}</span>
                  <span>
                    {text}
                    <small>Academic workspace</small>
                  </span>
                  <span className={`status status-${i}`}>
                    {["Completed", "In review", "Completed"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
function ProjectCard({ project, index }: { project: Project index: number }) {
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
function Experience({
  className = "",
  role = "UI/UX Designer",
  company = "SRDT Pvt. Ltd.",
  detail = "Lucknow, India",
  date = "August 2025 — Present",
  current = true,
}: {
  className?: string
  role?: string
  company?: string
  detail?: string
  date?: string
  current?: boolean
}) {
  return (
    <div className={`experience-row ${className}`}>
      <div className="company-monogram">{company[0]}</div>
      <div>
        <h3>
          {role} <span>· {company}</span>
        </h3>
        <p>{detail}</p>
      </div>
      <span className="experience-date">
        {date} {current && <span className="current-dot" />}
      </span>
    </div>
  )
}
function Principles({ className = "" }: { className?: string }) {
  return (
    <div className={`principles ${className}`.trim()}>
      {[
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
      ].map(([title, text], i) => (
        <div key={title}>
          <Label>0{i + 1} /</Label>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}
function Home() {
  const [hk, setHk] = useState("unif")
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
          <dl className="hero-facts"><div><dt>BASED IN</dt><dd>Lucknow, India</dd></div><div><dt>ROLE</dt><dd>UI/UX Designer</dd></div><div><dt>CURRENTLY</dt><dd>SRDT Pvt. Ltd.</dd></div></dl>
        </div>
        <Tilt className="hero-art">
          <div className="art-caption"><span>01 / {hk === "unif" ? "UNIF ECOSYSTEM" : hk === "srmu" ? "SRMU WEBSITE" : "SP JAIN CRM"}</span></div>
          <ProductPreview key={hk} kind={hk} large />
          <div className="hero-switch" role="group" aria-label="Preview a project">
            {[["unif", "UNIF"], ["srmu", "SRMU"], ["sp-jain", "SP Jain"]].map(([k, t]) => (
              <button key={k} aria-pressed={hk === k} className={hk === k ? "active" : ""} onClick={() => setHk(k)}>{t}</button>
            ))}
          </div>
        </Tilt>
      </section>
      <div className="marquee" aria-label="Capabilities">
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <span key={n} aria-hidden={n === 1}>
              {["UX problem-solving", "Information architecture", "Interaction design", "Visual design", "Design systems", "Prototyping", "Responsive UI"].map((s) => (
                <span key={s}>{s}<i>✦</i></span>
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
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard project={p} index={i} key={p.id} />
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
function ContactCTA() {
  return (
    <section className="contact-cta">
      <div>
        <Label>HAVE SOMETHING IN MIND?</Label>
        <h2>Let’s make something useful.</h2>
        <p>Open to product design roles and considered collaborations.</p>
      </div>
      <Button to="mailto:ssshrey007@gmail.com">
        Let’s talk <Arrow />
      </Button>
    </section>
  )
}
function Library() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("All Work")
  const [selected, setSelected] = useState("unif")
  const [closed, setClosed] = useState<string[]>([])
  const filtered = projects.filter(
    (p) =>
      (filter === "All Work" || p.category === filter) &&
      `${p.title} ${p.description} ${p.type} ${
        p.id === "unif" ? modules.join(" ") : ""
      }`
        .toLowerCase()
        .includes(query.toLowerCase()),
  )
  const active = filtered.find((p) => p.id === selected) || filtered[0]
  return (
    <section className="page library-page">
      <Label>THE ARCHIVE / 01</Label>
      <h1>Project Library</h1>
      <p className="page-intro">
        A working index of projects, explorations, and ideas in motion.
      </p>
      <div className="search-field">
        <span aria-hidden="true">⌕</span>
        <input
          aria-label="Search projects"
          placeholder="Search projects, modules, or themes…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button aria-label="Clear search" onClick={() => setQuery("")}>
            ×
          </button>
        )}
      </div>
      <div className="filter-row">
        <div className="filters">
          {["All Work", "Professional", "Personal"].map((f) => (
            <button
              key={f}
              className={f === filter ? "active" : ""}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="mono subtle" aria-live="polite">
          {filtered.length.toString().padStart(2, "0")} PROJECTS / 03 CATEGORIES
        </span>
      </div>
      {active ? (
        <div className="library-workspace">
          <div className="project-index" role="group" aria-label="Project folders"><div className="index-label mono">PROJECT INDEX</div>{['Professional', 'Personal', 'Experiments'].map(f => { const items = filtered.filter(p => p.category === f); if (!items.length && (query || (filter !== 'All Work' && filter !== f))) return null; const open = !closed.includes(f); return <div className="folder" key={f}><button className="folder-toggle" aria-expanded={open} aria-controls={`folder-${f}`} onClick={() => setClosed(open ? [...closed, f] : closed.filter(x => x !== f))}><span className="chevron" aria-hidden="true">▸</span>{f}<span className="count">{items.length}</span></button><div id={`folder-${f}`} className={`folder-body ${open ? 'open' : ''}`}><div>{items.length ? items.map(p => <button key={p.id} className={active.id === p.id ? 'selected' : ''} aria-current={active.id === p.id} onClick={() => setSelected(p.id)}><span className="mono">0{filtered.indexOf(p) + 1}</span><span>{p.title}<small>{p.type}</small></span><Arrow /></button>) : <p className="folder-empty">Future experiments will be filed here.</p>}</div></div></div> })}</div><div className="selected-project" key={active.id}>
            <ProductPreview kind={active.id} large />
            <div className="detail-bottom">
              <div>
                <Tag>{active.category}</Tag>
                <h2>{active.title}</h2>
                <p>{active.description}</p>
              </div>
              <Button to={`/project/${active.id}`}>
                Explore project <Arrow />
              </Button>
            </div>
            {active.id === "unif" && (
              <div className="module-chips">
                {modules.slice(0, 6).map((m) => (
                  <span key={m}>{m}</span>
                ))}
                <span>+6 modules</span>
              </div>
            )}
            <div className="visual-disclaimer mono">
              ILLUSTRATIVE PREVIEW · PROJECT DOCUMENTATION IN PROGRESS
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <h2>
            {filter === "Experiments" && !query
              ? "A space for what’s next."
              : "No matching projects."}
          </h2>
          <p>
            {filter === "Experiments"
              ? "Future explorations in motion and interaction craft will live here."
              : "Try another keyword or explore all work."}
          </p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("")
              setFilter("All Work")
            }}
          >
            Explore all work
          </button>
        </div>
      )}
      <div className="mobile-projects">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      <p className="library-footnote">
        More projects will appear as case studies are documented.
      </p>
    </section>
  )
}
function ModuleCard({ name, index }: { name: string; index: number }) {
  return (
    <article className="module">
      <div className="module-card">
        <div className="module-head">
          <Label>{(index + 1).toString().padStart(2, "0")}</Label>
          <h3>{name}</h3>
        </div>
        <div className="module-body">
          <div>
            <p>Part of the UNIF university ecosystem. Module-specific scope, workflows, interface visuals, and outcomes are awaiting documentation.</p>
            <Link to="mailto:ssshrey007@gmail.com" className="text-link">Ask about this module <Arrow /></Link>
          </div>
        </div>
      </div>
    </article>
  )
}
function ModuleScroller() {
  const ref = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })
  const update = () => {
    const el = ref.current
    if (el) setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 })
  }
  useEffect(() => {
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])
  const go = (dir: number) => ref.current?.scrollBy({ left: dir * 336, behavior: calm() ? "auto" : "smooth" })
  return (
    <>
      <div className="module-controls">
        <span className="mono">{modules.length} MODULES</span>
        <div>
          <button aria-label="Previous modules" disabled={edge.start} onClick={() => go(-1)}>←</button>
          <button aria-label="Next modules" disabled={edge.end} onClick={() => go(1)}>→</button>
        </div>
      </div>
      <div className="module-grid" ref={ref} onScroll={update} role="region" aria-label="UNIF modules" tabIndex={0}>
        {modules.map((m, i) => <ModuleCard key={m} name={m} index={i} />)}
      </div>
    </>
  )
}
function Unif() {
  return (
    <div className="page">
      <Link to="/library" className="text-link back-link">
        ← Project Library
      </Link>
      <div className="split-hero">
        <div>
          <Tag>PROFESSIONAL WORK</Tag>
          <h1>UNIF Ecosystem</h1>
          <h3>One ecosystem. Twelve connected modules.</h3>
          <p className="page-intro">
            A suite of university workflows designed to bring academic
            operations, student services, and administration into a more
            coherent experience.
          </p>
        </div>
        <ProductPreview large />
      </div>
      <section className="section">
        <Label>MODULE DIRECTORY</Label>
        <h2>Explore the ecosystem</h2>
        <ModuleScroller />
      </section>
      <NextProject id="unif" />
    </div>
  )
}
function NextProject({ id }: { id: string }) {
  const next = projects[(projects.findIndex((p) => p.id === id) + 1) % projects.length]
  return (
    <Link to={`/project/${next.id}`} className="next-project">
      <span className="mono">NEXT PROJECT</span>
      <strong>{next.title} <Arrow /></strong>
    </Link>
  )
}
function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case "p": return <p key={i}>{b.text}</p>
    case "h3": return <h3 key={i} className="cs-sub">{b.text}</h3>
    case "list": return <ul key={i} className="cs-list">{b.items.map((x) => <li key={x}>{x}</li>)}</ul>
    case "olist": return <ol key={i} className="cs-list cs-ordered">{b.items.map((x) => <li key={x}>{x}</li>)}</ol>
    case "defs": return <div key={i} className="cs-defs">{b.items.map(([k, v]) => <div key={k}><strong>{k}</strong><p>{v}</p></div>)}</div>
    case "objective": return <p key={i} className="cs-objective"><span className="mono">DESIGN OBJECTIVE</span>{b.text}</p>
    case "note": return <p key={i} className="cs-note">{b.text}</p>
    case "placeholder": return <div key={i} className="cs-placeholder mono">{b.text}</div>
    case "takeaway": return <blockquote key={i} className="cs-takeaway"><span className="mono">THE TAKEAWAY</span>{b.text}</blockquote>
  }
}
function RichCaseStudy({ study, project }: { study: Study; project: Project }) {
  return (
    <div className="page case-page">
      <Link to="/library" className="text-link back-link">← Project Library</Link>
      <Tag>{study.tag}</Tag>
      <h1>{study.title}</h1>
      <p className="case-headline">{study.headline}</p>
      {study.lede.map((l) => <p className="page-intro" key={l}>{l}</p>)}
      <Tilt className="case-visual">
        <ProductPreview kind={project.id} large />
        <span className="mono">ILLUSTRATIVE INTERFACE CONCEPT · FINAL PROJECT SCREENS TO BE ADDED</span>
      </Tilt>
      <div className="case-metadata">
        {study.meta.map(([k, v]) => (<div key={k}><Label>{k}</Label><p>{v}</p></div>))}
      </div>
      {study.sections.map((s) => (
        <section className="case-section rich" key={s.n} id={`cs-${s.n}`}>
          <div className="cs-heading"><Label>{s.n} / {s.title.toUpperCase()}</Label><h2>{s.title}</h2></div>
          <div className="cs-prose">{s.blocks.map(renderBlock)}</div>
        </section>
      ))}
      <NextProject id={project.id} />
      <ContactCTA />
    </div>
  )
}
function CaseStudy({ project }: { project: Project }) {
  const study = caseStudies[project.id]
  if (study) return <RichCaseStudy study={study} project={project} />
  return (
    <div className="page">
      <Link to="/library" className="text-link back-link">
        ← Project Library
      </Link>
      <Tag>CASE STUDY / {project.type.toUpperCase()}</Tag>
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
      {[
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
      ].map(([label, title, text], i) => (
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
function About() {
  return (
    <div className="page">
      <div className="split-hero about-hero">
        <div>
          <Tag>ABOUT / 01</Tag>
          <h1>
            Designer by craft.
            <br />
            Systems thinker
            <br />
            by instinct.
          </h1>
          <p className="page-intro">
            I work at the intersection of user needs, product logic, and visual
            expression. I care about how a product behaves as much as how it
            looks.
          </p>
          <ul className="identity-chips" aria-label="Focus areas">
            {["Product thinking", "UX problem-solving", "Visual design", "Interaction craft", "Design systems"].map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <Tilt className="identity-visual">
          <div className="portrait-frame" role="img" aria-label="Portrait placeholder. A personal photo will be added here.">
            <span className="portrait-shape portrait-sage" />
            <span className="portrait-shape portrait-clay" />
            <span className="portrait-mark" aria-hidden="true">S.</span>
            <span className="portrait-label mono">PORTRAIT / TO BE ADDED</span>
            <div className="name-plate">
              <strong>Shrey Sharma</strong>
              <span>UI/UX Designer · also Gluon</span>
            </div>
          </div>
        </Tilt>
      </div>
      <section className="section about-how">
        <Label>HOW I THINK</Label>
        <h2>Good design makes the system clearer.</h2>
        <Principles className="about-principles" />
      </section>
      <section className="section about-narrative">
        <Label>THE PRACTICE</Label>
        <h2>
          Product logic meets
          <br />
          interface craft.
        </h2>
        <p>
          My focus spans UX problem-solving, visual design, interaction craft,
          and design systems. I’m interested in turning complex workflows into
          understandable experiences, with a consistent language across every
          screen and state.
        </p>
      </section>
      <Experience />
      <ContactCTA />
    </div>
  )
}
function PdfViewer({ url }: { url: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const measure = () => setWidth(Math.floor(el.clientWidth - 48))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [status])
  useEffect(() => {
    if (!width || status === "error") return
    let cancelled = false
    ;(async () => {
      try {
        const pdfjs = await import("pdfjs-dist")
        pdfjs.GlobalWorkerOptions.workerSrc = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default
        const doc = await pdfjs.getDocument(url).promise
        const host = wrap.current?.querySelector(".pdf-pages")
        if (!host || cancelled) return
        host.replaceChildren()
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n)
          const base = page.getViewport({ scale: 1 })
          const viewport = page.getViewport({ scale: (width / base.width) * dpr })
          const canvas = document.createElement("canvas")
          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.style.width = `${width}px`
          canvas.style.height = `${(viewport.height / dpr).toFixed(1)}px`
          canvas.setAttribute("role", "img")
          canvas.setAttribute("aria-label", `Resume PDF, page ${n} of ${doc.numPages}`)
          await page.render({ canvas, canvasContext: canvas.getContext("2d")!, viewport }).promise
          if (cancelled) return
          host.appendChild(canvas)
        }
        setStatus("ready")
      } catch {
        if (!cancelled) setStatus("error")
      }
    })()
    return () => { cancelled = true }
  }, [url, width])
  if (status === "error")
    return (
      <div className="pdf-fallback" role="alert">
        <svg viewBox="0 0 120 96" width="120" height="96" aria-hidden="true">
          <rect x="30" y="8" width="60" height="80" rx="6" fill="#FAF7F1" stroke="#D0C1AF" strokeWidth="2" />
          <rect x="40" y="20" width="26" height="4" rx="2" fill="#AD5E43" />
          <rect x="40" y="31" width="40" height="3" rx="1.5" fill="#D0C1AF" />
          <rect x="40" y="39" width="34" height="3" rx="1.5" fill="#D0C1AF" />
          <circle cx="82" cy="68" r="17" fill="#A8B1A0" stroke="#FAF7F1" strokeWidth="3" />
          <path d="M75 61l14 14M89 61L75 75" stroke="#29251F" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div><strong>This browser can’t display the PDF here.</strong><p>You can still download it and open it on your device.</p></div>
        <a className="button" href={url} download="Shrey-Sharma-Resume.pdf">Download the PDF <span className="arrow" aria-hidden="true">↓</span></a>
      </div>
    )
  return (
    <div className="pdf-canvas-wrap" ref={wrap} aria-busy={status === "loading"}>
      {status === "loading" && <div className="pdf-loading mono" role="status">LOADING PDF…</div>}
      <div className="pdf-pages" />
    </div>
  )
}
function Resume() {
  const [view, setView] = useState<"web" | "pdf">("web")
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
  return (
    <div className="page resume-page">
      <div className="resume-switch-bar">
        <div className="view-toggle" role="tablist" aria-label="Resume view">
          {([["web", "Web resume"], ["pdf", "PDF resume"]] as const).map(([k, t]) => (
            <button key={k} role="tab" id={`tab-${k}`} aria-selected={view === k} aria-controls="resume-pane" className={view === k ? "active" : ""} onClick={() => setView(k)}>{t}</button>
          ))}
        </div>
        <a className="button" href={resumeUrl} download="Shrey-Sharma-Resume.pdf">Download resume <span className="arrow" aria-hidden="true">↓</span></a>
      </div>
      <div id="resume-pane" role="tabpanel" aria-labelledby={`tab-${view}`} key={view} className="view-pane">
      {view === "pdf" ? (
        <section className="pdf-viewer">
          <div className="pdf-toolbar">
            <span className="mono">SHREY-SHARMA-RESUME.PDF · 1 PAGE</span>
            <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">Open in new tab <Arrow /></a>
          </div>
          <PdfViewer url={resumeUrl} />
        </section>
      ) : (
      <>
      <div className="resume-hero">
        <div className="resume-hero-copy">
          <h1>Shrey Sharma</h1>
          <p className="page-intro">UI/UX Designer · Product thinking · Interface craft</p>
          <p className="resume-summary">
            A product-minded designer turning complex workflows into intuitive digital experiences, with a focus on interface design, systems, and interaction detail.
          </p>
        </div>
        <Tilt className="resume-paper">
          <div className="paper-head"><b>Shrey Sharma</b><span>UI/UX Designer</span></div>
          <div className="paper-block pb-exp"><span className="paper-label">EXPERIENCE</span><strong>UI/UX Designer</strong><small>SRDT Pvt. Ltd. · Aug 2025 — Present</small></div>
          <div className="paper-block pb-cap"><span className="paper-label">CAPABILITIES</span><div className="paper-chips">{["UX", "IA", "Interaction", "Systems"].map((c) => <em key={c}>{c}</em>)}</div></div>
          <div className="paper-block pb-edu"><span className="paper-label">EDUCATION</span><small>MCA · AKTU · 2025</small></div>
          <div className="paper-block pb-tools"><span className="paper-label">TOOLS</span><div className="paper-chips">{["Figma", "Framer"].map((c) => <em key={c}>{c}</em>)}</div></div>
          <div className="paper-block pb-projects"><span className="paper-label">PROJECTS</span><span className="paper-projects">{projects.slice(0, 4).map((pr) => <small className="paper-pill" key={pr.id}>{pr.id === "unif" ? "UNIF" : pr.id === "srdt" ? "SRDT Training" : pr.title}</small>)}</span></div>
        </Tilt>
      </div>
      <section className="resume-section">
        <Label>EXPERIENCE</Label>
        <div className="experience-list">
          <Experience className="is-indented" />
          <Experience className="is-indented no-border" role="Digital Marketing" company="Shivmay Technologies" detail="Social media posts" date="June 2023 — August 2023" current={false} />
        </div>
      </section>
      <section className="resume-section">
        <Label>CORE CAPABILITIES</Label>
        <div className="skills">
          {[
            "UX problem-solving",
            "Information architecture",
            "Interaction design",
            "Visual design",
            "Prototyping",
            "Design systems",
            "Responsive UI",
            "Product thinking",
          ].map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <Label>SELECTED PROJECTS</Label>
        {projects.slice(0, 4).map((p) => (
          <Link key={p.id} to={`/project/${p.id}`} className="resume-project">
            <h3>{p.title}</h3>
            <span>
              {p.type} <Arrow />
            </span>
          </Link>
        ))}
      </section>
      <section className="resume-section">
        <Label>TOOLS</Label>
        <div className="skills tools-skills">{["Figma", "Framer", "VS Code"].map((s) => <Tag key={s} className={s === "Framer" ? "is-sticky" : ""}>{s}</Tag>)}</div>
      </section>
      <section className="resume-section">
        <Label>EDUCATION</Label>
        <div className="education-list">
          {[["MCA", "AKTU, Uttar Pradesh", "2025"], ["B.Sc. with Mathematics", "Dr. B. R. Ambedkar University, Agra", "2023"]].map(([d, school, y]) => (
            <div className="education-row" key={d}><h3>{d}</h3><span>{school}</span><span className="mono">{y}</span></div>
          ))}
        </div>
      </section>
      </>
      )}
      </div>
    </div>
  )
}
function Contact() {
  const [copied, setCopied] = useState(false)
  return (
    <div className="page contact-page">
      <div>
        <Tag>CONTACT / OPEN CHANNEL</Tag>
        <h1>
          Have a good problem?
          <br />
          Let’s talk about it.
        </h1>
        <p className="page-intro">
          For product design roles, considered collaborations, or thoughtful
          conversations about building better digital experiences.
        </p>
        <div className="hello-art" aria-hidden="true"><span>Hello</span><i /><i /></div>
        <div className="contact-signature">
          Shrey Sharma <span>/ Gluon</span>
        </div>
      </div>
      <div className="contact-panel">
        <Label>GET IN TOUCH</Label>
        <div className="contact-item">
          <span>Email</span>
          <div>
            <Link to="mailto:ssshrey007@gmail.com">ssshrey007@gmail.com</Link>
            <button
              aria-label="Copy email address"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("ssshrey007@gmail.com")
                  setCopied(true)
                } catch {
                  setCopied(false)
                }
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
        <div className="contact-item">
          <span>Phone</span>
          <Link to="tel:+919536727157">
            +91 9536727157 <Arrow />
          </Link>
        </div>
        <div className="contact-item">
          <span>Elsewhere</span>
          <div className="social-placeholders">
            <span>LinkedIn · link to be added</span>
            <span>Behance · link to be added</span>
          </div>
        </div>
        <Button to="mailto:ssshrey007@gmail.com">
          Send an email <Arrow />
        </Button>
        <p role="status" className="subtle">
          {copied
            ? "Email address copied to clipboard."
            : "A good conversation is a good place to start."}
        </p>
      </div>
    </div>
  )
}
export default function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/")
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  )
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem("portfolio-theme", theme)
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }, [theme])
  useEffect(() => {
    const change = () => {
      setRoute(window.location.hash.slice(1) || "/")
      setMenu(false)
      window.scrollTo(0, 0)
    }
    window.addEventListener("hashchange", change)
    return () => window.removeEventListener("hashchange", change)
  }, [])
  useEffect(() => {
    document.title = `${
      route === "/"
        ? "Shrey Sharma — UI/UX Designer"
        : route.includes("project")
          ? "Selected work — Shrey Sharma"
          : `${route.slice(1).replace(/^./, (c) => c.toUpperCase())} — Shrey Sharma`
    }`
  }, [route])
  const navigation = [
    ["/", "Home"],
    ["/library", "Project Library"],
    ["/about", "About"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
  ]
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])
  // Staggered, scroll-aware entry animation for each page. Elements are tagged before paint,
  // revealed with a soft fade + rise, then cleaned up so hover transitions stay smooth.
  useLayoutEffect(() => {
    if (calm() || !("IntersectionObserver" in window)) return
    const root = document.getElementById("main-content")
    if (!root) return
    const SEL = [".hero-copy>*", ".hero-art", ".marquee", ".page>*:not(.view-pane):not(.section):not(.case-section):not(.contact-cta)", ".section>*:not(.project-grid):not(.principles)", ".project-card", ".principles>div", ".contact-cta", ".case-section>*", ".view-pane>*", ".resume-hero-copy>*", ".resume-paper", ".education-row", ".module", ".cs-defs>div"].join(",")
    const seen = new WeakSet<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        entries.filter((e) => e.isIntersecting).sort((x, y) => x.boundingClientRect.top - y.boundingClientRect.top || x.boundingClientRect.left - y.boundingClientRect.left).forEach((e, i) => {
          const el = e.target as HTMLElement
          const delay = Math.min(i, 8) * 80
          el.style.transitionDelay = `${delay}ms`
          el.classList.add("rv-in")
          io.unobserve(el)
          window.setTimeout(() => { el.classList.remove("rv", "rv-in"); el.style.transitionDelay = "" }, 1100 + delay)
        })
      },
      { threshold: 0.06, rootMargin: "0px 0px -5% 0px" },
    )
    const scan = () => root.querySelectorAll(SEL).forEach((el) => { if (seen.has(el)) return; seen.add(el); el.classList.add("rv"); io.observe(el) })
    scan()
    const mo = new MutationObserver(scan)
    mo.observe(root, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [route])
  const project = projects.find((p) => `/project/${p.id}` === route)
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("main-content")?.focus()
        }}
      >
        Skip to content
      </a>
      <header>
        <div className="header-inner">
          <Link to="/" className="brand">
            <strong>
              SHREY SHARMA<span className="brand-dot">.</span>
            </strong>
            <span>GLUON / DESIGN PORTFOLIO</span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="main-nav"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "CLOSE ×" : "MENU ☰"}
          </button>
          <nav
            id="main-nav"
            aria-label="Main navigation"
            className={menu ? "open" : ""}
          >
            {navigation.map(([to, title]) => (
              <Link
                to={to}
                key={to}
                className={
                  route === to ||
                  (to === "/library" && route.startsWith("/project"))
                    ? "active"
                    : ""
                }
              >
                {title}
              </Link>
            ))}
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              aria-pressed={theme === "dark"}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <span className="theme-icon" aria-hidden="true" />
              <span>{theme === "light" ? "Dark" : "Light"}</span>
            </button>
            <Link to="/contact" className="nav-action">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="container">
        {route === "/" ? (
          <Home />
        ) : route === "/library" ? (
          <Library />
        ) : route === "/about" ? (
          <About />
        ) : route === "/resume" ? (
          <Resume />
        ) : route === "/contact" ? (
          <Contact />
        ) : project?.id === "unif" ? (
          <Unif />
        ) : project ? (
          <CaseStudy project={project} />
        ) : (
          <div className="page">
            <h1>Page not found.</h1>
            <Button to="/">Back home ↗</Button>
          </div>
        )}
      </main>
      <footer className="container">
        <div className="footer-top">
          <Link to="/" className="footer-name">
            SHREY SHARMA <span>/ GLUON</span>
          </Link>
          <Link to="mailto:ssshrey007@gmail.com">
            ssshrey007@gmail.com <Arrow />
          </Link>
          <div>
            <span
              className="social-placeholder"
              title="Profile URL not supplied"
            >
              LinkedIn · coming soon
            </span>
            <Link to="/resume">
              Resume <Arrow />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>DESIGNED WITH INTENT. BUILT WITH CARE.</span>
          <span>© {new Date().getFullYear()} SHREY SHARMA</span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: 0,
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              })
            }}
          >
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </>
  )
}
