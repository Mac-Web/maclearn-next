export type ArticleType = {
  paragraph: string;
  unit: string;
  articleName: string;
  articleDate: string;
  articleRelease: string;
  author: string;
  id: number;
  slug: string;
  sidebarText?: string;
  interactives?: string[];
  interactiveHTML?: string;
  interactiveCSS?: string;
};

export type CourseType = {
  name: string;
  heroName?: string;
  description: string;
  metadataDescription: string;
  articles: ArticleType[];
};

export type UnitsType = Record<string, ArticleType[]>;
