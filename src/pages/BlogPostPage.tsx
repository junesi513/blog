import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { BlogPost } from '../blog/posts'
import { getPostBySlug } from '../blog/posts'
import { MarkdownArticle } from '../components/MarkdownArticle'

export function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    if (!slug) return
    void getPostBySlug(slug).then((p) => {
      if (!p) setMissing(true)
      setPost(p)
    })
  }, [slug])

  if (missing) {
    return (
      <div className="card" style={{ padding: 22 }}>
        <h1 style={{ margin: 0 }}>글을 찾을 수 없어요</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          URL을 확인하거나 목록으로 돌아가 주세요.
        </p>
        <div style={{ marginTop: 14 }}>
          <Link className="btn" to="/blog">
            목록으로
          </Link>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="card" style={{ padding: 22 }}>
        <div className="muted">불러오는 중…</div>
      </div>
    )
  }

  return (
    <article className="card" style={{ padding: 22 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <span className="chip">{post.date}</span>
        {(post.tags ?? []).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        <MarkdownArticle markdown={`# ${post.title}\n\n${post.markdown}`} />
      </div>
      <div style={{ marginTop: 18 }}>
        <Link className="btn" to="/blog">
          ← 목록으로
        </Link>
      </div>
    </article>
  )
}

