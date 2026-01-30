import { ArticleType } from "@/types/Courses";
import Link from "next/link";

const navBtnStyles =
  "bg-blue-500! dark:bg-blue-600! hover:bg-blue-600! dark:hover:bg-blue-700! text-black dark:text-white text-lg py-2 px-7 rounded cursor-pointer";

type NavBtnsProps = {
  id: number;
  course: string;
  courseArticles: ArticleType[];
  last?: boolean;
};

function NavBtns({ id, course, courseArticles, last }: NavBtnsProps) {
  return (
    <div className="flex justify-center gap-x-7 mt-10 mb-15">
      <Link
        href={`/${course}/${id === 0 ? "" : courseArticles.find((article) => article.id === id - 1)!.slug}`}
        className={navBtnStyles}
      >
        Back
      </Link>
      <Link
        href={`/${course}/${last ? "" : courseArticles.find((article) => article.id === id + 1)!.slug}`}
        className={navBtnStyles}
      >
        Next
      </Link>
    </div>
  );
}

export default NavBtns;
