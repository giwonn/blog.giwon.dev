import { Container } from "@/components/ui/Container";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { Article } from "@/features/articles/Article";

// Define params as a Promise for Next.js 15+
type Params = Promise<{ articleId: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
    const { articleId } = await params;

    return (
        <>
            <ReadingProgressBar />
            <Container className="py-10">
                <Article articleId={articleId} />
            </Container>
        </>
    );
}
