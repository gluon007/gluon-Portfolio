/**
 * Copies text to the clipboard reliably across secure contexts,
 * embedded iframes (e.g., Figma Make previews), and legacy browsers.
 */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  // 1. Try modern Clipboard API if supported and in secure context
  if (navigator?.clipboard && typeof navigator.clipboard.writeText === "function") {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // SecurityError, NotAllowedError, or iframe restriction: fall back to execCommand
    }
  }

  // 2. Fallback: temporary hidden textarea with document.execCommand('copy')
  try {
    const textArea = document.createElement("textarea")
    textArea.value = text

    // Position outside visible screen without scrolling
    textArea.setAttribute("readonly", "")
    textArea.style.position = "fixed"
    textArea.style.left = "-9999px"
    textArea.style.top = "0"
    textArea.style.fontSize = "16px" // Prevent auto-zoom on mobile iOS
    textArea.style.opacity = "0"

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    const successful = document.execCommand("copy")
    document.body.removeChild(textArea)
    return successful
  } catch {
    return false
  }
}

