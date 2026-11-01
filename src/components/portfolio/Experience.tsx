interface ExperienceProps {
  className?: string
  role?: string
  company?: string
  detail?: string
  date?: string
  current?: boolean
}

export function Experience({
  className = "",
  role = "UI/UX Designer",
  company = "SRDT Pvt. Ltd.",
  detail = "Lucknow, India",
  date = "August 2025 — Present",
  current = true,
}: ExperienceProps) {
  return (
    <div className={`experience-row ${className}`.trim()}>
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
