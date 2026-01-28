"use client";

import type { ArticleType } from "@/types/Courses";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type AccordionProps = {
  id: number;
  articles: ArticleType[];
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
              return (
                <Link
                  href={`/${course}/${article.id}`}
                  key={article.id}
                  className="px-7 py-3 block hover:bg-[#bec2c9] dark:hover:bg-gray-800"
                >
                  {article.articleName}
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
