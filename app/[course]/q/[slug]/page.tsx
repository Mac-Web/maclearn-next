import type { QuizType } from "@/types/Quiz";
import type { CourseType, UnitsType } from "@/types/Courses";
import { notFound } from "next/navigation";
import quizzesData from "@/content/quizzes.json";
import coursesData from "@/content/courses.json";
import Sidebar from "@/components/layout/Sidebar";
import Quiz from "./Quiz";

const quizzes = quizzesData as Record<string, QuizType[]>;
const courses = coursesData as Record<string, CourseType>;
const courseNames = ["html", "css", "references"];

function getQuizData(course: string, slug: string): QuizType {
  if (!courseNames.includes(course)) notFound();
  const courseData = quizzes[course];
  const quizData = courseData.find((quiz) => quiz.slug === slug);
  if (!quizData) notFound();
  return quizData;
}

export async function generateMetadata({ params }: { params: { course: string; slug: string } }) {
  const { course, slug } = await params;
  const quizData = getQuizData(course, slug);
  const title = `${quizData.name} Quiz | MacLearn`;

  return {
    title,
    description: quizData.description,
    authors: [{ name: "MacWeb", url: "https://macweb.app" }],
    openGraph: {
      title,
      description: quizData.description,
      url: `https://maclearn.macweb.app/${course}/q/${slug}`,
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
  const quizData = getQuizData(course, slug);
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

  return (
    <div className="px-5 md:px-20 lg:px-[calc(50%-550px)] flex">
      <Sidebar courseUnits={courseUnits} course={course} slug={slug} />
      <div className="flex-1 pl-0 sm:pl-5 md:pl-15">
        <Quiz
          quiz={quizData}
          course={course}
          prevSlug={courses[course].articles.find((article) => article.id === quizData.prev)!.slug}
          nextSlug={courses[course].articles.find((article) => article.id === quizData.prev + 1)?.slug || "/"}
        />
      </div>
    </div>
  );
}

export default Page;
