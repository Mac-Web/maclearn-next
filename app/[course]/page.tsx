import type { UnitsType, CourseType } from "@/types/Courses";
import { notFound } from "next/navigation";
import coursesData from "@/content/courses.json";
import Hero from "@/components/layout/Hero";
import Units from "./Units";

const courses = coursesData as Record<string, CourseType>;
const courseNames = ["html", "css", "references"];

export async function generateMetadata({ params }: { params: { course: string } }) {
  const { course } = await params;

  if (!courseNames.includes(course)) notFound();

  const courseData = courses[course];
  const title = `${courseData.heroName || `Learn ${courseData.name}`} | MacLearn`;

  return {
    title,
    description: courseData.metadataDescription,
    authors: [{ name: "MacWeb", url: "https://macweb.app" }],
    openGraph: {
      title,
      description: courseData.metadataDescription,
      url: "https://maclearn.macweb.app/" + course,
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

async function Page({ params }: { params: { course: string } }) {
  const { course } = await params;

  if (!courseNames.includes(course)) notFound();

  const courseData = courses[course];
  const courseUnits = courseData.articles.reduce((acc: UnitsType, article) => {
    if (acc[article.unit]) {
      acc[article.unit].push(article);
    } else {
      acc[article.unit] = [article];
    }
    return acc;
  }, {});

  return (
    <div className="mb-15">
      <Hero title={courseData.heroName || `Learn ${courseData.name}`} description={courseData.description} />
      <Units courseUnits={courseUnits} course={course} />
    </div>
  );
}

export default Page;
