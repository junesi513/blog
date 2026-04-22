export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container siteFooterInner">
        <span className="muted">© {new Date().getFullYear()} Your Name</span>
        <span className="muted">Built with React + Vite</span>
      </div>
    </footer>
  )
}

