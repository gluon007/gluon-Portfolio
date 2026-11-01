export function SkipLink() {
  return (
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
  )
}

