import type { CourseType } from "@/types/Courses";
import { notFound } from "next/navigation";
import coursesData from "@/content/courses.json";
import Hero from "@/components/layout/Hero";

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

  return (
    <div>
      <Hero title={courseData.heroName || `Learn ${courseData.name}`} description={courseData.description} />
    </div>
  );
}

export default Page;
