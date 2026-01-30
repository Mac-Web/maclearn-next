import type { CourseType } from "@/types/Courses";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { dbConnect } from "@/lib/db";
import { User } from "@/models/User";
import coursesData from "@/content/courses.json";
import Link from "next/link";
import Hero from "@/components/layout/Hero";
import CourseCard from "@/components/ui/CourseCard";

const courseCards = [
  {
    img: "/ui/html.png",
    title: "HTML",
    description: "Learn HTML to add content to your webpage.",
    link: "/html",
  },
  {
    img: "/ui/css.png",
    title: "CSS",
    description: "Master CSS to design and style your webpage.",
    link: "/css",
  },
  {
    img: "/ui/references.png",
    title: "References",
    description: "Browse our detailed references to learn more.",
    link: "/references",
  },
  {
    img: "/ui/playground.png",
    title: "Playground",
    description: "Experiment and apply your skills in playground.",
    link: "/playground",
  },
];

type HomeArticleType = {
  name: string;
  slug: string;
  course: string;
};

const courses = coursesData as Record<string, CourseType>;
const articleNames = Object.values(courses).reduce((acc: HomeArticleType[], course) => {
  return acc.concat(
    course.articles.map((article) => {
      return { name: article.articleName, slug: article.slug, course: course.name.toLowerCase() };
    }),
  );
}, []);

export default async function Home() {
  const session = await getServerSession(authOptions);
  let savedArticles: HomeArticleType[] = [];
  if (session?.user?.email) {
    await dbConnect();
    const existingUser = await User.findOne({ email: session.user.email });
    savedArticles = articleNames.filter((article) => existingUser.maclearnArticles.includes(article.slug));
  }

  return (
    <div className="mb-15">
      <Hero title="Welcome to MacLearn!" description="Learn and master web development for free." />
      <div className="flex justify-center gap-5 flex-wrap px-5 md:px-20 lg:px-[calc(50%-550px)]">
        {courseCards.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
      {session && (
        <>
          <h2 className="text-center text-2xl font-bold my-10">Your Favorited Articles</h2>
          <div className="flex justify-center gap-3 flex-wrap px-5 md:px-20 lg:px-[calc(50%-550px)]">
            {savedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.course}/${article.slug}`}
                className="bg-gray-300 dark:bg-gray-900 hover:bg-gray-400 dark:hover:bg-gray-800 rounded py-3 px-5"
              >
                {article.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
