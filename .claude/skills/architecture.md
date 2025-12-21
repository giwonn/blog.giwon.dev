---
name: Architecture
description: 프로젝트의 아키텍처를 준수하여 기능 개발 혹은 리팩토링을 진행한다.
---

## When to Use

- 기능을 개발할 때 이 skill을 사용한다.
- 리팩토링을 진행할 때 이 skill을 사용한다.

## Example
- FSD Architecture 참고
  ```
  src/
  ├── actions/       # Server Actions
  ├── app/           # 페이지 라우트
  ├── components/    # 재사용 컴포넌트
  │   ├── layout/    # Header, Footer
  │   ├── mdx/       # MDX 관련 (CodeBlock, Mermaid, TOC)
  │   ├── providers/ # Context Providers
  │   └── ui/        # 공통 UI 컴포넌트
  ├── features/      # 기능별 모듈
  ├── lib/           # 유틸리티 함수
  └── types/         # 타입 정의
  ```