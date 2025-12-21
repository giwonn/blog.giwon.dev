import { getArticle } from "@/actions/articles";
import { MDXContent } from "@/lib/mdx";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { Container } from "@/components/ui/Container";
import { notFound } from "next/navigation";

interface ArticleDetailProps {
    articleId: string;
}

export async function Article({ articleId }: ArticleDetailProps) {
    const article = await getArticle(articleId);

    if (!article) {
        notFound();
    }

    return (
        <Container className="relative !px-0 py-10">
            <article className="prose dark:prose-invert max-w-[calc(100%-4rem)] mx-auto">
                <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">{article.title}</h1>
                <div className="mb-8 text-gray-500">{article.date}</div>
                <MDXContent source={article.content} />
            </article>
            <aside className="hidden min-[1380px]:block absolute top-0 bottom-0 left-full min-[1460px]:left-[calc(100%+3rem)] w-64 transition-[left] duration-300 ease-in-out">
                <div className="sticky top-4">
                    <TableOfContents content={article.content} />
                </div>
            </aside>
        </Container>
    );
}
