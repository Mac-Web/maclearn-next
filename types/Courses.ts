export type ArticleType = {
  paragraph: string;
  unit: string;
  articleName: string;
  articleDate: string;
  articleRelease: string;
  author: string;
  id: number;
};

export type CourseType = {
  name: string;
  heroName?: string;
  description: string;
  metadataDescription: string;
  articles: ArticleType[];
};
