import type { ArticleType, CourseType, UnitsType } from "@/types/Courses";
import { notFound } from "next/navigation";
import coursesData from "@/content/courses.json";
import ArticleBtns from "./ArticleBtns";
import NavBtns from "./NavBtns";
import Hero from "@/components/layout/Hero";
import Lab from "./Lab";
import Link from "next/link";

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
  const courseUnits = courses[course].articles.reduce((acc: UnitsType, article) => {
    if (acc[article.unit]) {
      acc[article.unit].push(article);
    } else {
      acc[article.unit] = [article];
    }
    return acc;
  }, {});
  const contentParts = articleData.paragraph.split("[LAB]");

  return (
    <div className="px-5 md:px-20 lg:px-[calc(50%-550px)] flex">
      <div className="hidden sm:block w-40 md:w-60 max-h-[calc(100vh-68px)] sticky top-17 py-5 pr-3 overflow-auto">
        {Object.values(courseUnits).map((unit, i) => {
          return (
            <div key={i} className="flex flex-col">
              <h2 className="text-black dark:text-white font-bold text-xl px-4 py-3">{unit[0].unit}</h2>
              {unit.map((article) => (
                <Link
                  key={article.id}
                  href={`/${course}/${article.id}`}
                  className={` rounded hover:bg-gray-300 dark:hover:bg-gray-900 px-4 py-2
                    ${article.id == slug ? "text-blue-600 dark:text-blue-500" : "text-gray-700 dark:text-gray-300"}`}
                >
                  {article.articleName}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex-1 pl-0 sm:pl-5 md:pl-15">
        <Hero title={articleData.articleName} />
        <div className="flex justify-between">
          <h3 className="text-gray-700 dark:text-gray-300 font-bold flex items-end gap-x-5 w-full py-2">
            <span className="date">{new Date(articleData.articleDate).toLocaleDateString()}</span>
            <span>By {articleData.author}</span>
          </h3>
          <ArticleBtns />
        </div>
        <hr className="h-1.25 border-0 bg-blue-600 rounded-full" />
        {contentParts?.map((part, i) => {
          return (
            <div key={i}>
              <div
                className="py-5 text-[18px] text-gray-700 dark:text-gray-300 leading-7.5"
                dangerouslySetInnerHTML={{ __html: part }}
              />
              {i < contentParts.length - 1 && (
                <Lab
                  html={articleData.interactives ? articleData.interactives[i] : articleData.interactiveHTML!}
                  css={articleData.interactiveCSS || ""}
                />
              )}
            </div>
          );
        })}
        <NavBtns id={Number(slug)} course={course} last={slug == courses[course].articles.length - 1} />
      </div>
    </div>
  );
}

export default Page;
