import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';
import { CodeBlock } from '@/components/mdx/CodeBlock';

function rehypeMermaid() {
    return (tree: Root) => {
        visit(tree, 'element', (node: Element) => {
            if (node.tagName === 'code' && node.properties?.className) {
                const classes = node.properties.className as string[];
                if (classes.includes('language-mermaid')) {
                    // Store the raw code before highlight.js processes it
                    const code = node.children
                        .filter((child): child is { type: 'text'; value: string } => child.type === 'text')
                        .map(child => child.value)
                        .join('');
                    node.properties['data-mermaid'] = code;
                }
            }
        });
    };
}

function rehypeCodeLanguage() {
    return (tree: Root) => {
        visit(tree, 'element', (node: Element, _index, parent) => {
            if (node.tagName === 'code' && (parent as Element)?.tagName === 'pre') {
                const classes = (node.properties?.className as string[]) || [];
                const langClass = classes.find(c => c.startsWith('language-'));
                node.properties['data-language'] = langClass ? langClass.replace('language-', '') : 'text';
            }
        });
    };
}

const mdxComponents = {
    pre: CodeBlock,
};

interface MDXContentProps {
    source: string;
    components?: Record<string, React.ComponentType<unknown>>;
}

export async function MDXContent({ source, components = {} }: MDXContentProps) {
    return (
        <MDXRemote
            source={source}
            components={{ ...mdxComponents, ...components }}
            options={{
                mdxOptions: {
                    format: 'md',
                    remarkPlugins: [remarkGfm, remarkMath],
                    rehypePlugins: [
                        rehypeRaw,
                        rehypeMermaid,
                        rehypeHighlight,
                        rehypeCodeLanguage,
                        rehypeSlug,
                        rehypeKatex,
                        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
                    ],
                },
            }}
        />
    );
}
