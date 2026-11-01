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

  return (
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
          {navigationItems.map(({ to, title }) => (
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
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
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
  )
}
