# Blog (Portfolio + Tech)

`blog/site`에 **React(Vite) 기반 포트폴리오 + 기술 블로그**가 준비되어 있어요.

## 실행

```bash
cd site
npm install
npm run dev
```

## 구성

- **Home**: 소개 + 최근 글 3개
- **Projects**: 프로젝트 카드 목록
- **Blog**: 마크다운 포스트 목록/검색 + 상세 페이지
- **About**: 간단한 프로필/링크

## 글 쓰기 (마크다운)

`site/src/content/posts/*.md`에 파일을 추가하면 자동으로 목록에 잡힙니다.

예시:

```md
---
title: "제목"
date: "2026-04-22"
summary: "요약"
tags: ["react", "typescript"]
---

본문...
```

## 커스터마이즈 포인트

- **이름/링크/이메일**: `site/src/components/SiteHeader.tsx`, `site/src/pages/AboutPage.tsx`
- **프로젝트 목록**: `site/src/data/projects.ts`
- **디자인(전역)**: `site/src/index.css` / `site/src/markdown.css`
