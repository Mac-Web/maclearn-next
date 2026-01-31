import type { ArticleType, CourseType, UnitsType } from "@/types/Courses";
import type { QuizType } from "@/types/Quiz";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { dbConnect } from "@/lib/db";
import { User } from "@/models/User";
import { notFound } from "next/navigation";
import { toggleFavorite } from "./actions";
import coursesData from "@/content/courses.json";
import quizzesData from "@/content/quizzes.json";
import ArticleBtns from "./ArticleBtns";
import NavBtns from "./NavBtns";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/layout/Hero";
import Lab from "./Lab";

const courses = coursesData as Record<string, CourseType>;
const quizzes = quizzesData as Record<string, QuizType[]>;
const courseNames = ["html", "css", "references"];

function getArticleData(course: string, slug: string): ArticleType {
  if (!courseNames.includes(course)) notFound();
  const courseData = courses[course];
  const articleData = courseData.articles.find((article) => article.slug === slug);
  if (!articleData) notFound();
  return articleData;
}

export async function generateMetadata({ params }: { params: { course: string; slug: string } }) {
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

async function Page({ params }: { params: { course: string; slug: string } }) {
  const { course, slug } = await params;
  const session = await getServerSession(authOptions);
  let favorited = false;
  if (session?.user?.email) {
    await dbConnect();
    const existingUser = await User.findOne({ email: session.user.email });
    if (existingUser.maclearnArticles.includes(slug)) {
      favorited = true;
    }
  }
  const articleData = getArticleData(course, slug);
  const courseUnits = courses[course].articles.reduce((acc: UnitsType, article) => {
    if (acc[article.unit]) {
      acc[article.unit].push(article);
      if (quizzes[course]) {
        const existingQuiz = quizzes[course].find((quiz) => quiz.prev === article.id);
        if (existingQuiz) {
          acc[article.unit].push(existingQuiz);
        }
      }
    } else {
      acc[article.unit] = [article];
    }
    return acc;
  }, {});
  const contentParts = articleData.paragraph.split("[LAB]");

  return (
    <div className="px-5 md:px-20 lg:px-[calc(50%-550px)] flex">
      <Sidebar courseUnits={courseUnits} course={course} slug={slug} />
      <div className="flex-1 pl-0 sm:pl-5 md:pl-15">
        <Hero title={articleData.articleName} />
        <div className="flex justify-between">
          <h3 className="text-gray-700 dark:text-gray-300 font-bold flex items-end gap-x-5 w-full py-2">
            <span className="date">{new Date(articleData.articleDate).toLocaleDateString()}</span>
            <span>By {articleData.author}</span>
          </h3>
          <ArticleBtns session={session} slug={slug} isFavorited={favorited} toggleFavorite={toggleFavorite} />
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
        <NavBtns id={articleData.id} course={course} courseArticles={courseUnits} />
      </div>
    </div>
  );
}

export default Page;
