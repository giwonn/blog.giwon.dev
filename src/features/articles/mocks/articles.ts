import { ApiResponse } from "@/types";
import { Article, ArticleSummary } from "@/actions/articles";

// TODO: 백엔드 API 연동 후 mock 제거

const articles: Article[] = [
  {
    id: 1,
    slug: "hello-world",
    title: "Hello World",
    date: "2024-01-01",
    excerpt: "This is my first server action post.",
    content: `# Welcome to my blog!

This is a paragraph with **bold** and *italic* text.

## Code Example

Here's some JavaScript code:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
\`\`\`

And here's some TypeScript:

\`\`\`typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Giwon',
  age: 25,
};
\`\`\`

## List Example

- Item 1
- Item 2
- Item 3

That's all for now!`,
  },
  {
    id: 2,
    slug: "second-post",
    title: "Second Post",
    date: "2024-01-02",
    excerpt: "Another interesting post.",
    content: `# Second Post

This is the second post with some **MDX** content.

## React Component Example

You can even embed React components in MDX!

- 버튼 컴포넌트
\`\`\`tsx
<Button variant="primary" onClick={() => console.log('클릭')}>
  이건 진짜 동작하는 버튼
</Button>
\`\`\`

`,
  },
  {
    id: 3,
    slug: "markdown-showcase",
    title: "Markdown Rendering Showcase",
    date: "2024-01-03",
    excerpt: "A comprehensive showcase of all markdown rendering features.",
    content: `# Markdown Rendering Showcase

이 포스트는 다양한 마크다운 요소들이 어떻게 렌더링되는지 테스트하기 위한 샘플입니다.

## Typography

일반 텍스트와 함께 **굵은 글씨**, *기울임꼴*, ~~취소선~~, 그리고 \`인라인 코드\`를 사용할 수 있습니다.

> 이것은 인용문입니다.
> 여러 줄로 작성할 수도 있습니다.
>
> — 누군가의 명언

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4

## Lists

### Unordered List
- 첫 번째 항목
- 두 번째 항목
  - 중첩된 항목 1
  - 중첩된 항목 2
- 세 번째 항목

### Ordered List
1. 첫 번째 단계
2. 두 번째 단계
3. 세 번째 단계

### Task List
- [x] 완료된 작업
- [ ] 미완료 작업
- [ ] 또 다른 작업

## Code Blocks

### JavaScript
\`\`\`javascript
const greeting = (name) => {
  return \`Hello, \${name}!\`;
};

// Arrow function with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
\`\`\`

### TypeScript
\`\`\`typescript
interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  published: boolean;
}

async function fetchPosts(): Promise<BlogPost[]> {
  const response = await fetch('/api/posts');
  return response.json();
}
\`\`\`

### Python
\`\`\`python
def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    fib = [0, 1]
    for _ in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib

print(fibonacci(10))
\`\`\`

### Bash
\`\`\`bash
#!/bin/bash

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build && npm start
\`\`\`

### CSS
\`\`\`css
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
\`\`\`

### JSON
\`\`\`json
{
  "name": "giwon-blog",
  "version": "1.0.0",
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0"
  }
}
\`\`\`

## Table

| Feature | Status | Notes |
|---------|--------|-------|
| MDX Support | ✅ | Working with next-mdx-remote |
| Code Highlighting | ✅ | Using rehype-highlight |
| Dark Mode | ⏳ | In progress |
| Comments | ❌ | Not implemented |

## Links and Images

[Next.js Documentation](https://nextjs.org/docs)를 참고하세요.

## Horizontal Rule

---

## Math Equations

인라인 수식: 아인슈타인의 유명한 공식 $E = mc^2$ 입니다.

블록 수식:

$$
\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n
$$

이차방정식의 근의 공식:

$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

적분:

$$
\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$

행렬:

$$
\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
$$

## Mermaid Diagrams

플로우차트:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
\`\`\`

시퀀스 다이어그램:

\`\`\`mermaid
sequenceDiagram
    Client->>Server: Request
    Server->>Database: Query
    Database-->>Server: Result
    Server-->>Client: Response
\`\`\`

## Special Characters

특수 문자: © ® ™ → ← ↑ ↓ ± × ÷

## Nested Quote with Code

> 다음은 React 컴포넌트 예시입니다:
>
> \`\`\`tsx
> function App() {
>   return <div>Hello World</div>;
> }
> \`\`\`

## Conclusion

이 포스트가 마크다운 렌더링 테스트에 도움이 되길 바랍니다!
`,
  },
];

// 요약 목록용
export const mockArticleSummaries: ApiResponse<ArticleSummary[]> = {
  data: articles.map(({ id, slug, title, date, excerpt }) => ({
    id,
    slug,
    title,
    date,
    excerpt,
  })),
};

// 상세 조회용
export function getMockArticle(articleId: number): Article | null {
  return articles.find((article) => article.id === articleId) ?? null;
}
