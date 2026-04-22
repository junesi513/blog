import ReactMarkdown from 'react-markdown'
import '../markdown.css'

export function MarkdownArticle({ markdown }: { markdown: string }) {
  return (
    <div className="md">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

