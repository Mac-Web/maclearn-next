import type { QuizType } from "@/types/Quiz";
import { notFound } from "next/navigation";
import quizzesData from "@/content/quizzes.json";

const quizzes = quizzesData as Record<string, QuizType[]>;
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
  console.log(quizData);

  return (
    <div>
      {quizData.name}
      {quizData.description}
    </div>
  );
}

export default Page;
