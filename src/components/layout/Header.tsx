import { useEffect } from "react"
import { navigationItems } from "../../data/projects"
import type { Theme } from "../../types/portfolio"
import { Link } from "../common/Link"

interface HeaderProps {
  route: string
  menu: boolean
  setMenu: (open: boolean) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

export function Header({ route, menu, setMenu, theme, setTheme }: HeaderProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [setMenu])

  useEffect(() => {
    if (menu) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }
    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [menu])

  return (
    <header>
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setMenu(false)}>
          <strong>
            SHREY SHARMA<span className="brand-dot">.</span>
          </strong>
          <span>GLUON PORTFOLIO</span>
        </Link>
        <div className="header-controls">
          <nav
            id="main-nav"
            aria-label="Main navigation"
            className={menu ? "open" : ""}
          >
            {navigationItems.map(({ to, title }) => (
              <Link
                to={to}
                key={to}
                onClick={() => setMenu(false)}
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
            <Link
              to="/contact"
              className="nav-action"
              onClick={() => setMenu(false)}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </nav>
          <button
            className="header-theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="main-nav"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "CLOSE ×" : "MENU ☰"}
          </button>
        </div>
      </div>
      <div
        className={`menu-backdrop ${menu ? "open" : ""}`}
        onClick={() => setMenu(false)}
        aria-hidden="true"
      />
    </header>
  )
}
