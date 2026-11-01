interface ProductPreviewProps {
  kind?: string
  large?: boolean
}

export function ProductPreview({
  kind = "unif",
  large = false,
}: ProductPreviewProps) {
  const isWebsiteConcept = kind === "srmu" || kind === "srdt"

  const logoText =
    kind === "srmu"
      ? "SRMU"
      : kind === "sp-jain"
        ? "SP JAIN"
        : kind === "expense"
          ? "balance"
          : "unif"

  const crumbText =
    kind === "srmu" ? "Explore your possibilities" : "Workspace / Overview"

  const workspaceHeading =
    kind === "sp-jain"
      ? "Admissions overview"
      : kind === "expense"
        ? "Money, made clear."
        : "Academic overview"

  return (
    <div
      className={`product-preview ${large ? "large" : ""} ${kind}`.trim()}
      aria-label="Illustrative interface concept, not a shipped product screenshot"
    >
      <div className="preview-bar">
        <span className="product-logo">
          {logoText}
          <span className="logo-dot">.</span>
        </span>
        <span className="preview-crumb">{crumbText}</span>
        <span className="avatar">SS</span>
      </div>

      {isWebsiteConcept ? (
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
                <strong>{workspaceHeading}</strong>
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
