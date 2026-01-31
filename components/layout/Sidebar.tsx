import type { UnitsType } from "@/types/Courses";
import Link from "next/link";

type SidebarProps = {
  courseUnits: UnitsType;
  course: string;
  slug: string;
};

function Sidebar({ courseUnits, course, slug }: SidebarProps) {
  return (
    <div className="hidden sm:block w-40 md:w-60 max-h-[calc(100vh-68px)] sticky top-17 py-5 pr-3 overflow-auto">
      {Object.values(courseUnits).map((unit, i) => {
        return (
          <div key={i} className="flex flex-col">
            <h2 className="text-black dark:text-white font-bold text-xl px-4 py-3">{unit[0].unit}</h2>
            {unit.map((article) => {
              const isQuiz = "name" in article;
              const href = `/${course}/${isQuiz ? "q/" : ""}${article.slug}`;
              return (
                <Link
                  key={article.slug}
                  href={href}
                  className={` rounded hover:bg-gray-300 dark:hover:bg-gray-900 px-4 py-2
                    ${article.slug === slug ? "text-blue-600 dark:text-blue-500" : "text-gray-700 dark:text-gray-300"}`}
                >
                  {isQuiz ? article.name + " Quiz" : article.articleName}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
