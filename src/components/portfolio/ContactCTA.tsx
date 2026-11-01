import { Arrow } from "../common/Arrow"
import { Button } from "../common/Button"
import { Label } from "../common/Label"

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div>
        <Label>HAVE SOMETHING IN MIND?</Label>
        <h2>Let’s make something useful.</h2>
        <p>Open to product design roles and considered collaborations.</p>
      </div>
      <Button to="mailto:ssshrey007@gmail.com">
        Let’s talk <Arrow />
      </Button>
    </section>
  )
}
