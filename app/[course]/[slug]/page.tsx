import type { ArticleType, CourseType } from "@/types/Courses";
import { notFound } from "next/navigation";
import coursesData from "@/content/courses.json";

const courses = coursesData as Record<string, CourseType>;
const courseNames = ["html", "css", "references"];

function getArticleData(course: string, slug: number): ArticleType {
  if (!courseNames.includes(course)) notFound();
  const courseData = courses[course];
  const articleData = courseData.articles.find((article) => Number(article.id) === Number(slug));
  if (!articleData) notFound();
  return articleData;
}

export async function generateMetadata({ params }: { params: { course: string; slug: number } }) {
  const { course, slug } = await params;
  const articleData = getArticleData(course, slug);
  const title = `${articleData.articleName} | MacLearn`;

  return {
    title,
    description: articleData.paragraph.slice(0, 100),
    authors: [{ name: "MacWeb", url: "https://macweb.app" }],
    openGraph: {
      title,
      description: articleData.paragraph.slice(0, 100),
      url: `https://maclearn.macweb.app/${course}/${slug}`,
      siteName: "MacLearn",
      images: [
        {
          url: "/logo.png",
          width: 200,
          height: 200,
        },
      ],
      type: "website",
    },
  };
}

async function Page({ params }: { params: { course: string; slug: number } }) {
  //TODO: change params slug to a string add a string field to json data

  const { course, slug } = await params;
  const articleData = getArticleData(course, slug);

  return (
    <div className="px-5 md:px-20 lg:px-[calc(50%-550px)]">
      <h1>{articleData.articleName}</h1>
      <div dangerouslySetInnerHTML={{ __html: articleData.paragraph }} />
    </div>
  );
}

export default Page;
