"use client";

import type { CourseItemType } from "@/types/Courses";
import { AnimatePresence, motion } from "framer-motion";
import { MdArticle, MdQuiz } from "react-icons/md";
import Link from "next/link";

type AccordionProps = {
  id: number;
  articles: CourseItemType[];
  course: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
};

function Accordion({ id, articles, course, open, setOpen }: AccordionProps) {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 rounded overflow-hidden">
      <h2
        className="text-black dark:text-white cursor-pointer px-7 py-3 text-lg font-bold"
        onClick={() => setOpen(open ? -1 : id)}
      >
        {articles[0].unit}
      </h2>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className=" border-gray-700 text-gray-700 dark:text-gray-300 box-content"
          >
            {articles.map((article) => {
              const isQuiz = "name" in article;
              const href = `/${course}/${isQuiz ? "q/" : ""}${article.slug}`;
              return (
                <Link
                  key={article.slug}
                  href={href}
                  className="px-5 py-3 hover:bg-[#bec2c9] dark:hover:bg-gray-800 flex items-center gap-x-5"
                >
                  {isQuiz ? <MdQuiz size={25} title="Quiz" /> : <MdArticle size={25} title="Article" />}
                  {isQuiz ? article.name + " Quiz" : article.articleName}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
