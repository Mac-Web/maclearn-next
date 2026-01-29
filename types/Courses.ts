export type ArticleType = {
  paragraph: string;
  unit: string;
  articleName: string;
  articleDate: string;
  articleRelease: string;
  author: string;
  id: number;
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
