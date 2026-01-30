"use client";

import type { CourseType } from "@/types/Courses";
import { useState, useEffect, useRef, useMemo } from "react";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import coursesData from "@/content/courses.json";
import Link from "next/link";

type SearchArticleType = {
  name: string;
  slug: string;
  course: string;
};

const courses = coursesData as Record<string, CourseType>;
const articleNames = Object.values(courses).reduce((acc: SearchArticleType[], course) => {
  return acc.concat(
    course.articles.map((article) => {
      return { name: article.articleName, slug: article.slug, course: course.name.toLowerCase() };
    }),
  );
}, []);

function NavSearch() {
  const [search, setSearch] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchArticles = useMemo<SearchArticleType[]>(() => {
    return articleNames.filter((article) => article.name.toLowerCase().includes(search.trim().toLowerCase()));
  }, [search]);
  const pathName = usePathname();

  useEffect(() => {
    const clickListener = (e: Event) => {
      if (!searchContainerRef.current?.contains(e.target as Node)) {
        setSearching(false);
      }
    };
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  useEffect(() => {
    setSearching(false);
    setSearch("");
  }, [pathName]);

  function handleClear() {
    setSearch("");
    searchInputRef.current?.focus();
    setTimeout(() => {
      setSearching(true);
    }, 50);
  }

  return (
    <div className="relative flex-1 mx-2" ref={searchContainerRef}>
      <div
        className={`bg-gray-300 dark:bg-gray-900 relative rounded flex items-center pr-2
          ${searchArticles.length > 0 && search.trim().length > 0 && searching ? "rounded-b-none" : ""}`}
      >
        <input
          type="text"
          placeholder="Search articles"
          className="w-full bg-transparent outline-none border-none text-black dark:text-white text-[18px] px-3 py-1.5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setSearching(true)}
          ref={searchInputRef}
        />
        {search.length > 0 && (
          <MdClose
            className="flex items-center justify-center hover:bg-gray-300 hover:dark:bg-gray-800 rounded cursor-pointer 
                  duration-300 w-7.5 h-7.5"
            title="Clear search"
            onClick={handleClear}
          />
        )}
      </div>
      {searchArticles.length > 0 && search.trim().length > 0 && searching && (
        <div className="absolute top-full left-0 w-full bg-gray-300 dark:bg-gray-900 flex flex-col rounded-b overflow-hidden">
          {searchArticles.slice(0, 5).map((article) => {
            return (
              <Link
                key={article.slug}
                href={`/${article.course}/${article.slug}`}
                className="px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-800"
              >
                {article.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NavSearch;
