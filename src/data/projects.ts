export type Project = {
  name: string
  description: string
  stack: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: '교내 라이브 코딩 시스템 구축 및 운용',
    description:
      '교내 과제/중간/기말 시험에 사용되는 온라인 라이브코딩(채점) 시스템 인프라를 구축·운용했습니다. 대량 트래픽 상황에서 DB 병목으로 Manager 프로세스가 종료되는 이슈를 MySQL Replication(쓰기/읽기 분리)로 해결했습니다.',
    stack: ['Infra', 'Ubuntu', 'MySQL', 'MySQL Replication', 'SSL', 'Automation'],
  },
  {
    name: 'AI 기반 멀웨어 탐지 마이크로서비스 아키텍처',
    description:
      'MSA 기반 악성코드 탐지 서비스에서 Backend 인증 로직을 세션 대신 JWT로 설계·구현했고, Spring 컨테이너를 Dockerizing 후 Kubernetes에 배포했습니다. Prometheus/Grafana 모니터링, Jenkins CI/CD, ArgoCD 기반 GitOps 운영을 구성했습니다.',
    stack: [
      'Spring Boot',
      'JWT',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'ArgoCD',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    name: '무중단 서비스 배포 플랫폼',
    description:
      '중소기업/소규모 팀도 무중단 배포 인프라를 운영할 수 있도록, 코드 업로드 → 컨테이너화 → K8s 배포 → 자동 확장/롤백까지 지원하는 플랫폼을 목표로 했습니다. 백엔드(Spring Security/JWT/REST)와 CI/CD, K8s 운영 및 YAML 자동 생성 스크립트 등을 담당했습니다.',
    stack: [
      'Kubernetes',
      'EKS',
      'AWS',
      'Docker',
      'ArgoCD',
      'Prometheus',
      'Grafana',
      'Spring Boot',
      'Spring Security',
      'Redis',
    ],
  },
]

