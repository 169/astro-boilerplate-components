'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var dateFns = require('date-fns');

const BlogCard = (props) => (jsxRuntime.jsx("a", { className: "hover:translate-y-1", href: props.instance.url, children: jsxRuntime.jsxs("div", { className: "overflow-hidden rounded-md bg-slate-800", children: [jsxRuntime.jsx("div", { className: "aspect-w-3 aspect-h-2", children: jsxRuntime.jsx("img", { className: "h-full w-full object-cover object-center", style: props.fit ? { height: "auto" } : {}, src: props.instance.frontmatter.imgSrc, alt: props.instance.frontmatter.imgAlt, loading: "lazy" }) }), jsxRuntime.jsxs("div", { className: "px-3 pt-4 pb-6 text-center", children: [jsxRuntime.jsx("h2", { className: "text-xl font-semibold", children: props.instance.frontmatter.title }), jsxRuntime.jsx("div", { className: "mt-1 text-xs text-gray-400", children: dateFns.format(new Date(props.instance.frontmatter.pubDate), 'LLL d, yyyy') }), jsxRuntime.jsx("div", { className: "mt-2 text-sm", children: props.instance.frontmatter.description })] })] }) }));

const BlogGallery = (props) => (jsxRuntime.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: props.postList.map((elt) => (jsxRuntime.jsx(BlogCard, { instance: elt, fit: true }, elt.url))) }));

const FooterCopyright = (props) => (jsxRuntime.jsx("div", { className: "border-t border-gray-600 pt-5", children: jsxRuntime.jsxs("div", { className: "text-sm text-gray-200", children: ["\u00A9 Copyright ", new Date().getFullYear(), " by ", props.site_name, ". Built with \u2665 by", ' ', jsxRuntime.jsx("a", { className: "text-cyan-400 hover:underline", href: "https://creativedesignsguru.com", target: "_blank", rel: "noopener noreferrer", children: "CreativeDesignsGuru" }), "."] }) }));

const GradientText = (props) => (jsxRuntime.jsx("span", { className: "bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent", children: props.children }));

const HeroAvatar = (props) => (jsxRuntime.jsxs("div", { className: "flex flex-col items-center md:flex-row md:justify-between md:gap-x-24", children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h1", { className: "text-3xl font-bold", children: props.title }), jsxRuntime.jsx("p", { className: "mt-6 text-xl leading-9", children: props.description }), jsxRuntime.jsx("div", { className: "mt-3 flex gap-1", children: props.socialButtons })] }), jsxRuntime.jsx("div", { className: "shrink-0", children: props.avatar })] }));

const HeroSocial = (props) => (jsxRuntime.jsx("img", { className: "h-12 w-12 hover:translate-y-1", src: props.src, alt: props.alt, loading: "lazy" }));

const Logo = (props) => (jsxRuntime.jsxs("div", { className: "flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent", children: [props.icon, props.name] }));

const NavbarTwoColumns = (props) => (jsxRuntime.jsx("div", { className: "flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between", children: props.children }));

const NavMenu = (props) => (jsxRuntime.jsx("nav", { children: jsxRuntime.jsx("ul", { className: "flex gap-x-3 font-medium text-gray-200", children: props.children }) }));

const NavMenuItem = (props) => (jsxRuntime.jsx("li", { className: "hover:text-white", children: jsxRuntime.jsx("a", { href: props.href, target: props.target || '_self', children: props.children }) }));

const NewerOlderPagination = (props) => (jsxRuntime.jsxs("div", { className: "flex justify-center gap-8", children: [props.page.url.prev && jsxRuntime.jsx("a", { href: props.page.url.prev, children: "\u2190 Newer Posts" }), props.page.url.next && jsxRuntime.jsx("a", { href: props.page.url.next, children: "Older Posts \u2192" })] }));

const Newsletter = (props) => (jsxRuntime.jsxs("div", { className: "flex flex-col items-center justify-between gap-6 sm:flex-row", children: [jsxRuntime.jsxs("div", { className: "sm:w-7/12", children: [jsxRuntime.jsx("div", { className: "text-3xl font-bold", children: props.title }), jsxRuntime.jsx("p", { className: "mt-3 text-gray-300", children: props.description })] }), jsxRuntime.jsx("div", { className: "w-full sm:w-5/12", children: jsxRuntime.jsxs("form", { className: "flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600", children: [jsxRuntime.jsx("input", { className: "w-full appearance-none bg-slate-800 focus:outline-none" }), jsxRuntime.jsx("button", { className: "ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50", type: "submit", children: "Subscribe" })] }) })] }));

const PaginationHeader = (props) => (jsxRuntime.jsxs("div", { className: "text-center", children: [jsxRuntime.jsx("h1", { className: "text-3xl font-bold", children: props.title }), jsxRuntime.jsx("div", { className: "mt-3 text-gray-200", children: props.description })] }));

const PostContent = (props) => (jsxRuntime.jsx("div", { className: "mx-auto mt-5 max-w-prose", children: jsxRuntime.jsx("div", { className: "prose prose-invert mt-8 prose-img:rounded-lg", children: props.children }) }));

const PostHeader = (props) => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("h1", { className: "text-center text-3xl font-bold", children: props.content.title }), jsxRuntime.jsxs("div", { className: "mt-2 text-center text-sm text-gray-400", children: ["By ", props.author, " on", ' ', dateFns.format(new Date(props.content.pubDate), 'LLL d, yyyy')] })] }));

const Project = (props) => (jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row", children: [jsxRuntime.jsx("div", { className: "shrink-0", children: jsxRuntime.jsx("a", { href: props.link, children: jsxRuntime.jsx("img", { className: "h-36 w-36 hover:translate-y-1", src: props.img.src, alt: props.img.alt, loading: "lazy" }) }) }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-y-2 md:flex-row", children: [jsxRuntime.jsx("a", { className: "hover:text-cyan-400", href: props.link, children: jsxRuntime.jsx("div", { className: "text-xl font-semibold", children: props.name }) }), jsxRuntime.jsx("div", { className: "ml-3 flex flex-wrap gap-2", children: props.category })] }), jsxRuntime.jsx("p", { className: "mt-3 text-gray-400", children: props.description })] })] }));

const Section = (props) => (jsxRuntime.jsxs("div", { className: "mx-auto max-w-screen-lg px-3 py-6", children: [props.title && (jsxRuntime.jsx("div", { className: "mb-6 text-2xl font-bold", children: props.title })), props.children] }));

const ColorTags = {
    SLATE: 'SLATE',
    GRAY: 'GRAY',
    ZINC: 'ZINC',
    NEUTRAL: 'NEUTRAL',
    STONE: 'STONE',
    RED: 'RED',
    ORANGE: 'ORANGE',
    AMBER: 'AMBER',
    YELLOW: 'YELLOW',
    LIME: 'LIME',
    GREEN: 'GREEN',
    EMERALD: 'EMERALD',
    TEAL: 'TEAL',
    CYAN: 'CYAN',
    SKY: 'SKY',
    BLUE: 'BLUE',
    INDIGO: 'INDIGO',
    VIOLET: 'VIOLET',
    PURPLE: 'PURPLE',
    FUCHSIA: 'FUCHSIA',
    PINK: 'PINK',
    ROSE: 'ROSE',
};
const colorToClassMap = {
    [ColorTags.SLATE]: 'bg-slate-400 text-slate-900',
    [ColorTags.GRAY]: 'bg-gray-400 text-gray-900',
    [ColorTags.ZINC]: 'bg-zinc-400 text-zinc-900',
    [ColorTags.NEUTRAL]: 'bg-neutral-400 text-neutral-900',
    [ColorTags.STONE]: 'bg-stone-400 text-stone-900',
    [ColorTags.RED]: 'bg-red-400 text-red-900',
    [ColorTags.ORANGE]: 'bg-orange-400 text-orange-900',
    [ColorTags.AMBER]: 'bg-amber-400 text-amber-900',
    [ColorTags.YELLOW]: 'bg-yellow-400 text-yellow-900',
    [ColorTags.LIME]: 'bg-lime-400 text-lime-900',
    [ColorTags.GREEN]: 'bg-green-400 text-green-900',
    [ColorTags.EMERALD]: 'bg-emerald-400 text-emerald-900',
    [ColorTags.TEAL]: 'bg-teal-400 text-teal-900',
    [ColorTags.CYAN]: 'bg-cyan-400 text-cyan-900',
    [ColorTags.SKY]: 'bg-sky-400 text-sky-900',
    [ColorTags.BLUE]: 'bg-blue-400 text-blue-900',
    [ColorTags.INDIGO]: 'bg-indigo-400 text-indigo-900',
    [ColorTags.VIOLET]: 'bg-violet-400 text-violet-900',
    [ColorTags.PURPLE]: 'bg-purple-400 text-purple-900',
    [ColorTags.FUCHSIA]: 'bg-fuchsia-400 text-fuchsia-900',
    [ColorTags.PINK]: 'bg-pink-400 text-pink-900',
    [ColorTags.ROSE]: 'bg-rose-400 text-rose-900',
};
const Tags = (props) => (jsxRuntime.jsx("div", { className: `rounded-md px-2 py-1 text-xs font-semibold ${colorToClassMap[props.color]}`, children: props.children }));

exports.BlogCard = BlogCard;
exports.BlogGallery = BlogGallery;
exports.ColorTags = ColorTags;
exports.FooterCopyright = FooterCopyright;
exports.GradientText = GradientText;
exports.HeroAvatar = HeroAvatar;
exports.HeroSocial = HeroSocial;
exports.Logo = Logo;
exports.NavMenu = NavMenu;
exports.NavMenuItem = NavMenuItem;
exports.NavbarTwoColumns = NavbarTwoColumns;
exports.NewerOlderPagination = NewerOlderPagination;
exports.Newsletter = Newsletter;
exports.PaginationHeader = PaginationHeader;
exports.PostContent = PostContent;
exports.PostHeader = PostHeader;
exports.Project = Project;
exports.Section = Section;
exports.Tags = Tags;
//# sourceMappingURL=index.js.map
