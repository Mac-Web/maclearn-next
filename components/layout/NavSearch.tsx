"use client";

import { useState, useRef } from "react";
import { MdClose } from "react-icons/md";

function NavSearch() {
  const [search, setSearch] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  function handleClear() {
    setSearch("");
    searchInputRef.current?.focus();
  }

  return (
    <div className="flex-1 bg-gray-300 dark:bg-gray-900 mx-2 relative rounded flex items-center pr-2">
      <input
        type="text"
        placeholder="Search articles"
        className="w-full bg-transparent outline-none border-none text-black dark:text-white text-[18px] px-3 py-1.5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
  );
}

export default NavSearch;
