import { useState } from "react"
import { Arrow } from "../components/common/Arrow"
import { Button } from "../components/common/Button"
import { Label } from "../components/common/Label"
import { Link } from "../components/common/Link"
import { Tag } from "../components/common/Tag"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ssshrey007@gmail.com")
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="page contact-page">
      <div>
        <Tag>CONTACT / OPEN CHANNEL</Tag>
        <h1>
          Have a good problem?
          <br />
          Let’s talk about it.
        </h1>
        <p className="page-intro">
          For product design roles, considered collaborations, or thoughtful
          conversations about building better digital experiences.
        </p>
        <div className="hello-art" aria-hidden="true">
          <span>Hello</span>
          <i />
          <i />
        </div>
        <div className="contact-signature">
          Shrey Sharma <span>/ Gluon</span>
        </div>
      </div>

      <div className="contact-panel">
        <Label>GET IN TOUCH</Label>
        <div className="contact-item">
          <span>Email</span>
          <div>
            <Link to="mailto:ssshrey007@gmail.com">ssshrey007@gmail.com</Link>
            <button aria-label="Copy email address" onClick={copyEmail}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
        <div className="contact-item">
          <span>Phone</span>
          <Link to="tel:+919536727157">
            +91 9536727157 <Arrow />
          </Link>
        </div>
        <div className="contact-item">
          <span>Elsewhere</span>
          <div className="social-placeholders">
            <span>LinkedIn · link to be added</span>
            <span>Behance · link to be added</span>
          </div>
        </div>
        <Button to="mailto:ssshrey007@gmail.com">
          Send an email <Arrow />
        </Button>
        <p role="status" className="subtle">
          {copied
            ? "Email address copied to clipboard."
            : "A good conversation is a good place to start."}
        </p>
      </div>
    </div>
  )
}
