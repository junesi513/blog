import { NavLink } from 'react-router-dom'

function LinkItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        isActive ? 'navLink navLinkActive' : 'navLink'
      }
    >
      {label}
    </NavLink>
  )
}

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <div className="brand">
          <NavLink to="/" className="brandLink" aria-label="Home">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandText">Your Name</span>
          </NavLink>
        </div>
        <nav className="nav" aria-label="Primary">
          <LinkItem to="/" label="Home" />
          <LinkItem to="/projects" label="Projects" />
          <LinkItem to="/blog" label="Blog" />
          <LinkItem to="/about" label="About" />
        </nav>
        <div className="headerActions">
          <a className="btn" href="https://github.com/" target="_blank">
            GitHub
          </a>
          <a className="btn primary" href="mailto:you@example.com">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

