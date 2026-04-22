export type Project = {
  name: string
  description: string
  stack: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'Project Alpha',
    description: '문제 정의부터 배포까지 끝까지 만든 서비스 예시.',
    stack: ['React', 'TypeScript', 'Vite'],
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
  {
    name: 'Project Beta',
    description: '기술적으로 깊게 파고든 토이 프로젝트 예시.',
    stack: ['Node.js', 'PostgreSQL', 'Docker'],
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
]

