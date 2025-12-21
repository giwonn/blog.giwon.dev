import { Container } from "@/components/ui/Container";
import { ArticleList } from "@/features/articles/ArticleList";

export default function ArticlesPage() {
    return (
        <Container className="py-10">
            <ArticleList />
        </Container>
    );
}
