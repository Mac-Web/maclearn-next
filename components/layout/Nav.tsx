import NavSearch from "./NavSearch";
import NavTheme from "./NavTheme";
import Link from "next/link";
import Image from "next/image";

const navLinkStyles = "text-gray-800 dark:text-gray-300 transition-colors p-2.5 hover:text-blue-600 dark:hover:text-blue-500";

function Nav() {
  return (
    <nav
      className="flex items-center justify-between gap-x-2 border-b border-gray-700 px-5 md:px-20 lg:px-[calc(50%-550px)] h-17 z-50 
    sticky top-0 bg-gray-200 dark:bg-gray-950"
    >
      <Link
        href="/"
        className="flex items-center gap-x-2 text-black dark:text-white text-lg duration-300 pr-5 py-2 font-bold
       hover:text-shadow-gray-400 hover:text-shadow-sm"
        scroll={true}
      >
        <Image src="/logo.png" alt="MacLearn Logo" width={35} height={35} /> MacLearn
      </Link>
      <NavSearch />
      <div className="flex gap-x-3 items-center">
        <div className="md:flex items-center gap-x-3 hidden">
          <Link href="/html" className={navLinkStyles}>
            HTML
          </Link>
          <Link href="/css" className={navLinkStyles}>
            CSS
          </Link>
          <Link href="/references" className={navLinkStyles}>
            References
          </Link>
          <Link href="/playground" className={navLinkStyles}>
            Playground
          </Link>
          <NavTheme />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
