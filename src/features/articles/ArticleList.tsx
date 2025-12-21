import { getArticleSummaries } from "@/actions/articles";
import { ArticleCard } from "@/features/articles/components/ArticleCard";

export async function ArticleList() {
    const articles = await getArticleSummaries();

    return (
        <section>
            <h2 className="mb-8 text-3xl font-bold">Blog Articles</h2>
            <div className="space-y-6">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}
