import Hero from "@/components/layout/Hero";
import CourseCard from "@/components/ui/CourseCard";

const courses = [
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

export default function Home() {
  return (
    <div>
      <Hero title="Welcome to MacLearn!" description="Learn and master web development for free." />
      <div className="flex justify-center gap-x-5 flex-wrap px-25">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </div>
  );
}
