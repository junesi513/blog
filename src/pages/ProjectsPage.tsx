import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <header className="card" style={{ padding: 22 }}>
        <h1 style={{ margin: 0, letterSpacing: '-0.03em' }}>Projects</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          대표 프로젝트 위주로 정리했습니다. 링크/스택/핵심 기여를 한눈에 보이게
          구성했어요.
        </p>
      </header>

      <section style={{ display: 'grid', gap: 12 }}>
        {projects.map((p) => (
          <article key={p.name} className="card" style={{ padding: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 12,
              }}
            >
              <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>{p.name}</h2>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p className="muted" style={{ marginTop: 10 }}>
              {p.description}
            </p>
            {p.links && (
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                {p.links.map((l) => (
                  <a key={l.href} className="btn" href={l.href} target="_blank">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  )
}

