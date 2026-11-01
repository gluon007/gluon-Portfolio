import { Label } from "../components/common/Label"
import { Tag } from "../components/common/Tag"
import { Tilt } from "../components/common/Tilt"
import { ContactCTA } from "../components/portfolio/ContactCTA"
import { Experience } from "../components/portfolio/Experience"
import { Principles } from "../components/portfolio/Principles"

const IDENTITY_CHIPS = [
  "Product thinking",
  "UX problem-solving",
  "Visual design",
  "Interaction craft",
  "Design systems",
]

export function About() {
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
            {IDENTITY_CHIPS.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>
        <Tilt className="identity-visual">
          <div
            className="portrait-frame"
            role="img"
            aria-label="Portrait placeholder. A personal photo will be added here."
          >
            <span className="portrait-shape portrait-sage" />
            <span className="portrait-shape portrait-clay" />
            <span className="portrait-mark" aria-hidden="true">
              S.
            </span>
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
