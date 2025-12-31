import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="relative !px-0 py-10">
      <article className="prose dark:prose-invert max-w-[calc(100%-4rem)] mx-auto animate-pulse">
        {/* Title - h1 */}
        <div className="h-10 md:h-12 lg:h-14 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-4" />

        {/* Date */}
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-8" />

        {/* Content paragraphs */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        </div>

        {/* Heading 2 */}
        <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-8 mb-4" />

        {/* Code block */}
        <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg w-full my-4" />

        {/* More paragraphs */}
        <div className="space-y-4 mt-6">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        </div>

        {/* Heading 2 */}
        <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mt-8 mb-4" />

        {/* List items */}
        <div className="space-y-3 mt-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 ml-4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 ml-4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/5 ml-4" />
        </div>
      </article>

      {/* TOC Skeleton */}
      <aside className="hidden min-[1380px]:block absolute top-0 bottom-0 left-full min-[1460px]:left-[calc(100%+3rem)] w-64">
        <div className="sticky top-4 animate-pulse">
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-4" />
          <div className="space-y-3 pl-2 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 ml-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 ml-2" />
          </div>
        </div>
      </aside>
    </Container>
  );
}
