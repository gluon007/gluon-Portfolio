import { useEffect, useState } from "react"
import { projects } from "./data/projects"
import type { Theme } from "./types/portfolio"
import { useScrollReveal } from "./hooks/useScrollReveal"
import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { SkipLink } from "./components/layout/SkipLink"
import { About } from "./pages/About"
import { CaseStudy } from "./pages/CaseStudy"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Library } from "./pages/Library"
import { NotFound } from "./pages/NotFound"
import { Resume } from "./pages/Resume"
import { Unif } from "./pages/Unif"

export default function App() {
  const [route, setRoute] = useState<string>(
    () => window.location.hash.slice(1) || "/",
  )
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState<Theme>(() =>
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
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || "/")
      setMenu(false)
      window.scrollTo(0, 0)
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  useEffect(() => {
    document.title =
      route === "/"
        ? "Shrey Sharma - UI/UX Designer"
        : route.includes("project")
          ? "Selected work — Shrey Sharma"
          : `${route.slice(1).replace(/^./, (c) => c.toUpperCase())} — Shrey Sharma`
  }, [route])

  useScrollReveal(route)

  const activeProject = projects.find((p) => `/project/${p.id}` === route)

  const renderContent = () => {
    if (route === "/") return <Home />
    if (route === "/library") return <Library />
    if (route === "/about") return <About />
    if (route === "/resume") return <Resume />
    if (route === "/contact") return <Contact />
    if (activeProject?.id === "unif") return <Unif />
    if (activeProject) return <CaseStudy project={activeProject} />
    return <NotFound />
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <SkipLink />
      <Header
        route={route}
        menu={menu}
        setMenu={setMenu}
        theme={theme}
        setTheme={setTheme}
      />
      <main id="main-content" tabIndex={-1} className="container">
        {renderContent()}
      </main>
      <Footer />
    </>
  )
}
