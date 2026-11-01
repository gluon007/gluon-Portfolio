interface PdfViewerProps {
  url: string
}

export function PdfViewer({ url }: PdfViewerProps) {
  return (
    <object
      data={`${url}#toolbar=0&navpanes=0`}
      type="application/pdf"
      aria-label="Resume PDF"
    >
      <iframe
        src={`${url}#toolbar=0&navpanes=0`}
        title="Resume PDF"
        style={{
          width: "100%",
          height: "min(80vh, 920px)",
          minHeight: "520px",
          border: "none",
        }}
      >
        <div className="pdf-fallback" role="alert">
          <svg viewBox="0 0 120 96" width="120" height="96" aria-hidden="true">
            <rect
              x="30"
              y="8"
              width="60"
              height="80"
              rx="6"
              fill="#FAF7F1"
              stroke="#D0C1AF"
              strokeWidth="2"
            />
            <rect x="40" y="20" width="26" height="4" rx="2" fill="#AD5E43" />
            <rect x="40" y="31" width="40" height="3" rx="1.5" fill="#D0C1AF" />
            <rect x="40" y="39" width="34" height="3" rx="1.5" fill="#D0C1AF" />
            <circle
              cx="82"
              cy="68"
              r="17"
              fill="#A8B1A0"
              stroke="#FAF7F1"
              strokeWidth="3"
            />
            <path
              d="M75 61l14 14M89 61L75 75"
              stroke="#29251F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <strong>This browser can’t display the PDF here.</strong>
            <p>You can still download it and open it on your device.</p>
          </div>
          <a className="button" href={url} download="Shrey-Sharma-Resume.pdf">
            Download the PDF{" "}
            <span className="arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </iframe>
    </object>
  )
}
