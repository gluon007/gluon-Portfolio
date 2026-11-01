import { Arrow } from "../components/common/Arrow"
import { Label } from "../components/common/Label"
import { Link } from "../components/common/Link"
import { Tag } from "../components/common/Tag"
import { ModuleScroller } from "../components/portfolio/ModuleScroller"
import { NextProject } from "../components/portfolio/NextProject"
import { ProductPreview } from "../components/portfolio/ProductPreview"

export function Unif() {
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
