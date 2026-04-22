import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="card" style={{ padding: 22 }}>
      <h1 style={{ margin: 0 }}>404</h1>
      <p className="muted" style={{ marginTop: 10 }}>
        페이지를 찾을 수 없어요.
      </p>
      <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  )
}

