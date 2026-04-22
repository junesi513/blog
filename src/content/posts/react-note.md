---
title: "React 성능 튜닝 체크리스트"
date: "2026-04-21"
summary: "렌더링/메모이제이션/리스트 최적화 관점에서 빠르게 점검하기."
tags: ["react", "performance"]
---

React 앱이 느리다면, 아래 순서로 빠르게 점검합니다.

## 1) 원인부터 확인

- React DevTools Profiler로 **느린 컴포넌트**를 찾습니다.
- “왜 리렌더가 발생했는지”를 먼저 파악합니다.

## 2) 흔한 해결책

- props 안정화: `useMemo`, `useCallback`
- 리스트: key 안정성, 가상 스크롤(virtualization)
- 상태 범위: 전역 상태가 불필요하게 넓지 않은지

> 최적화는 측정이 먼저입니다. “빠르게”보다 “측정 가능한 개선”이 중요합니다.

