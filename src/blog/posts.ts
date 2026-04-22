export type BlogPostFrontmatter = {
  title: string
  date: string
  summary: string
  tags?: string[]
}

export type BlogPost = BlogPostFrontmatter & {
  slug: string
  markdown: string
}

const modules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
})

let cache: BlogPost[] | null = null

function parseFrontmatter(raw: string): {
  data: Partial<BlogPostFrontmatter>
  content: string
} {
  const trimmed = raw.replace(/^\uFEFF/, '')
  if (!trimmed.startsWith('---\n')) return { data: {}, content: trimmed }
  const end = trimmed.indexOf('\n---\n', 4)
  if (end === -1) return { data: {}, content: trimmed }

  const head = trimmed.slice(4, end).trim()
  const content = trimmed.slice(end + '\n---\n'.length)

  const data: Partial<BlogPostFrontmatter> = {}
  for (const line of head.split('\n')) {
    const m = line.match(/^([a-zA-Z_][\w-]*):\s*(.+)\s*$/)
    if (!m) continue
    const key = m[1]
    let value = m[2]

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    if (key === 'tags') {
      const list = value
        .replace(/^\[/, '')
        .replace(/\]$/, '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => s.replace(/^["']|["']$/g, ''))
      data.tags = list
    } else if (key === 'title') {
      data.title = value
    } else if (key === 'date') {
      data.date = value
    } else if (key === 'summary') {
      data.summary = value
    }
  }

  return { data, content }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (cache) return cache

  const entries = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const raw = (await loader()) as string
      const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? path
      const parsed = parseFrontmatter(raw)
      const data = parsed.data

      const title = data.title ?? slug
      const date = data.date ?? new Date().toISOString().slice(0, 10)
      const summary = data.summary ?? ''
      const tags = Array.isArray(data.tags) ? data.tags.map(String) : undefined

      return {
        slug,
        title,
        date,
        summary,
        tags,
        markdown: parsed.content.trim(),
      } satisfies BlogPost
    }),
  )

  cache = entries.sort((a, b) => (a.date < b.date ? 1 : -1))
  return cache
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const all = await getAllPosts()
  return all.find((p) => p.slug === slug) ?? null
}

