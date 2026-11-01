import { useState } from "react"
import { modules, projects } from "../data/projects"
import { Arrow } from "../components/common/Arrow"
import { Button } from "../components/common/Button"
import { Label } from "../components/common/Label"
import { Tag } from "../components/common/Tag"
import { ProductPreview } from "../components/portfolio/ProductPreview"
import { ProjectCard } from "../components/portfolio/ProjectCard"

const FOLDERS = ["Professional", "Personal", "Experiments"] as const
const FILTERS = ["All Work", "Professional", "Personal"] as const

export function Library() {
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

  const toggleFolder = (folderName: string) => {
    setClosed((prev) =>
      prev.includes(folderName)
        ? prev.filter((x) => x !== folderName)
        : [...prev, folderName],
    )
  }

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
          {FILTERS.map((f) => (
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
          <div
            className="project-index"
            role="group"
            aria-label="Project folders"
          >
            <div className="index-label mono">PROJECT INDEX</div>
            {FOLDERS.map((f) => {
              const items = filtered.filter((p) => p.category === f)
              if (
                !items.length &&
                (query || (filter !== "All Work" && filter !== f))
              ) {
                return null
              }
              const open = !closed.includes(f)
              return (
                <div className="folder" key={f}>
                  <button
                    className="folder-toggle"
                    aria-expanded={open}
                    aria-controls={`folder-${f}`}
                    onClick={() => toggleFolder(f)}
                  >
                    <span className="chevron" aria-hidden="true">
                      ▸
                    </span>
                    {f}
                    <span className="count">{items.length}</span>
                  </button>
                  <div
                    id={`folder-${f}`}
                    className={`folder-body ${open ? "open" : ""}`.trim()}
                  >
                    <div>
                      {items.length ? (
                        items.map((p) => (
                          <button
                            key={p.id}
                            className={active.id === p.id ? "selected" : ""}
                            aria-current={active.id === p.id}
                            onClick={() => setSelected(p.id)}
                          >
                            <span className="mono">
                              0{filtered.indexOf(p) + 1}
                            </span>
                            <span>
                              {p.title}
                              <small>{p.type}</small>
                            </span>
                            <Arrow />
                          </button>
                        ))
                      ) : (
                        <p className="folder-empty">
                          Future experiments will be filed here.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="selected-project" key={active.id}>
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
