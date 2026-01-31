import type { UnitsType } from "@/types/Courses";
import Link from "next/link";

const navBtnStyles =
  "bg-blue-500! dark:bg-blue-600! hover:bg-blue-600! dark:hover:bg-blue-700! text-black dark:text-white text-lg py-2 px-7 rounded cursor-pointer";

type NavBtnsProps = {
  id: number;
  course: string;
  courseArticles: UnitsType;
};

function NavBtns({ id, course, courseArticles }: NavBtnsProps) {
  const itemList = Object.values(courseArticles).flat();
  const currentIndex = itemList.findIndex((article) => {
    if ("articleName" in article) {
      return article.id === id;
    }
  });
  const prevLink =
    `/${course}/` + (id === 0 ? "" : ("name" in itemList[currentIndex - 1] ? "q/" : "") + itemList[currentIndex - 1].slug);
  const nextLink = `/${course}/` + ("name" in itemList[currentIndex + 1] ? "q/" : "") + itemList[currentIndex + 1].slug;

  return (
    <div className="flex justify-center gap-x-7 mt-10 mb-15">
      <Link href={prevLink} className={navBtnStyles}>
        Back
      </Link>
      <Link href={nextLink} className={navBtnStyles}>
        Next
      </Link>
    </div>
  );
}

export default NavBtns;
