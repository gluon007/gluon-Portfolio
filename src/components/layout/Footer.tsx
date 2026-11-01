import { scrollToTop } from "../../utils/motion"
import { Arrow } from "../common/Arrow"
import { Link } from "../common/Link"

export function Footer() {
  return (
    <footer className="container">
      <div className="footer-top">
        <Link to="/" className="footer-name">
          SHREY SHARMA <span>/ GLUON</span>
        </Link>
        <Link to="mailto:ssshrey007@gmail.com">
          ssshrey007@gmail.com <Arrow />
        </Link>
        <div>
          <span className="social-placeholder" title="Profile URL not supplied">
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
            scrollToTop()
          }}
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  )
}
