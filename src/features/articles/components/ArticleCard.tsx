import Link from "next/link";
import { ArticleSummary } from "@/actions/articles";

interface ArticleCardProps {
    article: ArticleSummary;
}

export function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Link href={`/articles/${article.id}`} className="block">
            <article className="p-6 rounded-xl bg-white dark:bg-[#3a3a3a] border border-gray-300 dark:border-[#4a4a4a] shadow-md hover:shadow-xl hover:border-gray-400 dark:hover:border-[#5a5a5a] hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">{article.title}</h2>
                <p className="text-gray-600 dark:text-[#c0c0c0] mb-2">{article.excerpt}</p>
                <time className="text-sm text-gray-500 dark:text-[#a0a0a0]">{article.date}</time>
            </article>
        </Link>
    );
}
