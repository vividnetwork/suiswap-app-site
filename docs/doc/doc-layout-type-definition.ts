export interface ArticleLayout {
    time: string;
    name: string;
    nameShow: string;
    description: string;
    markdownPath: string;
    cover: string;
    thumbnailImage?: string;
}

export interface SectionLayout {
    section: string;
    sectionShow: string;
    articles: Array<ArticleLayout>;
}

export interface CategoryLayout {
    category: string;
    categoryShow: string;
    categoryLogo?: { width: number, height: number, path: string };
    content: Array<SectionLayout>
}

export type DocLayout = Array<CategoryLayout>;