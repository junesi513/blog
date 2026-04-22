export function AboutPage() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <header className="card" style={{ padding: 22 }}>
        <h1 style={{ margin: 0, letterSpacing: '-0.03em' }}>About</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          여기를 본인 소개로 채우면 포트폴리오의 완성도가 확 올라갑니다.
        </p>
      </header>

      <section className="card" style={{ padding: 22, display: 'grid', gap: 10 }}>
        <div>
          <div style={{ fontWeight: 750 }}>Your Name</div>
          <div className="muted">Frontend Engineer · React/TypeScript</div>
        </div>
        <div className="muted">
          제품의 맥락을 이해하고, 사용자 경험과 유지보수성을 동시에 챙기는 개발을
          지향합니다.
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a className="btn" href="https://github.com/" target="_blank">
            GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
          <a className="btn primary" href="mailto:you@example.com">
            you@example.com
          </a>
        </div>
      </section>
    </div>
  )
}

