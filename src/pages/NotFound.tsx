import { Button } from "../components/common/Button"

export function NotFound() {
  return (
    <div className="page">
      <h1>Page not found.</h1>
      <Button to="/">Back home ↗</Button>
    </div>
  )
}
