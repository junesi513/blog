import { Link } from 'react-router-dom'
import { getAllPosts } from '../blog/posts'
import { useEffect, useState } from 'react'
import type { BlogPost } from '../blog/posts'

export function HomePage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null)

  useEffect(() => {
    void getAllPosts().then((p) => setPosts(p.slice(0, 3)))
  }, [])

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section className="card" style={{ padding: 22 }}>
        <span className="chip">Portfolio · Tech Blog</span>
        <h1 style={{ margin: '14px 0 8px', letterSpacing: '-0.03em' }}>
          깔끔하게 보여주고, 깊게 기록합니다.
        </h1>
        <p className="muted" style={{ margin: 0, maxWidth: 70 + 'ch' }}>
          프로젝트는 간결하게, 글은 재현 가능한 형태로. 문제/해결/배운 점을 중심으로
          정리합니다.
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <Link className="btn primary" to="/projects">
            프로젝트 보기
          </Link>
          <Link className="btn" to="/blog">
            글 보러가기
          </Link>
        </div>
      </section>

      <section className="card" style={{ padding: 22 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>최근 글</h2>
          <Link className="muted" to="/blog">
            전체 보기 →
          </Link>
        </div>

        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          {posts?.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="card"
              style={{
                padding: 14,
                background: 'transparent',
                boxShadow: 'none',
              }}
            >
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span className="chip">{p.date}</span>
                {p.tags?.slice(0, 2).map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 10, fontWeight: 650 }}>{p.title}</div>
              <div className="muted" style={{ marginTop: 6 }}>
                {p.summary}
              </div>
            </Link>
          ))}
          {!posts && <div className="muted">불러오는 중…</div>}
        </div>
      </section>
    </div>
  )
}

