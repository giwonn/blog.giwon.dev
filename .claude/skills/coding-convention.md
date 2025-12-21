---
name: Coding Convention
description: 개발 컨벤션을 준수하여 기능 개발 혹은 리팩토링을 진행한다.
---

## When to Use

- 기능을 개발할 때 이 skill을 사용한다.
- 리팩토링을 진행할 때 이 skill을 사용한다.

## Workflow

1. 네이밍
  - 컴포넌트: PascalCase (예: `ArticleCard.tsx`)
  - 함수/변수: camelCase
  - 타입/인터페이스: PascalCase

2. import 방식
  - 절대 경로 사용: `@/*` (예: `@/components/ui/Button`)

## Example

```typescript
interface ArticleCardProps {
    article: ArticleSummary;
}

export function ArticleCard({ article }: ArticleCardProps) {
    ...
}
```

## CheckList

- [ ] 네이밍 확인
- [ ] import 방식 확인