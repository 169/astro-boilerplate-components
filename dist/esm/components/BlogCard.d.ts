import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from '../types/IFrontMatter';
type IBlogCardProps = {
    instance: MarkdownInstance<IFrontmatter>;
    fit: boolean;
};
declare const BlogCard: (props: IBlogCardProps) => import("react/jsx-runtime").JSX.Element;
export { BlogCard };
