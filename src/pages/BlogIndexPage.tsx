import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import type { BlogPost } from '../blog/posts'
import { getAllPosts } from '../blog/posts'

export function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null)
  const [q, setQ] = useState('')

  useEffect(() => {
    void getAllPosts().then(setPosts)
  }, [])

  const filtered = useMemo(() => {
    if (!posts) return null
    const query = q.trim().toLowerCase()
    if (!query) return posts
    return posts.filter((p) => {
      const hay = `${p.title} ${p.summary} ${(p.tags ?? []).join(' ')}`.toLowerCase()
      return hay.includes(query)
    })
  }, [posts, q])

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <header className="card" style={{ padding: 22 }}>
        <h1 style={{ margin: 0, letterSpacing: '-0.03em' }}>Blog</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          기록은 자산이 되게. 재현 가능한 형태로 정리합니다.
        </p>
        <div style={{ marginTop: 14 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="검색 (제목/태그/요약)"
            aria-label="Search posts"
            style={{
              width: '100%',
              height: 42,
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.02)',
              color: 'var(--text)',
              padding: '0 12px',
              outline: 'none',
            }}
          />
        </div>
      </header>

      <section className="card" style={{ padding: 10 }}>
        <div style={{ display: 'grid' }}>
          {filtered?.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              style={{
                padding: 14,
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="chip">{p.date}</span>
                {(p.tags ?? []).map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 10, fontWeight: 700 }}>{p.title}</div>
              <div className="muted" style={{ marginTop: 6 }}>
                {p.summary}
              </div>
            </Link>
          ))}
          {filtered && filtered.length === 0 && (
            <div className="muted" style={{ padding: 16 }}>
              검색 결과가 없어요.
            </div>
          )}
          {!filtered && (
            <div className="muted" style={{ padding: 16 }}>
              불러오는 중…
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

