import Image from "next/image";
import Link from "next/link";

const footerColumnStyles = "flex flex-col gap-y-2.5 flex-1";
const footerLinkStyles = "text-gray-800 dark:text-gray-100 hover:underline w-fit";
const footerColumnTitleStyles = "text-gray-800 dark:text-gray-100 mb-2.5 font-bold text-base";

function Footer() {
  return (
    <footer className="border-t border-gray-700 py-12 px-5 md:px-20 lg:px-[calc(50%-550px)]  flex flex-wrap md:flex-nowrap gap-y-15 justify-between items-start gap-x-15 mt-12 text-sm">
      <div className={footerColumnStyles}>
        <Link
          href="/"
          className="flex items-center gap-x-2 text-black dark:text-white text-lg duration-300 pr-5 py-2 font-bold
           hover:text-shadow-gray-400 hover:text-shadow-sm"
        >
          <Image src="/logo.png" alt="MacLearn Logo" width={35} height={35} /> MacLearn
        </Link>
        <div className="text-gray-800 dark:text-gray-100">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://macweb.app" target="_blank" className="underline">
            MacWeb
          </a>
        </div>
        <div className="text-gray-800 dark:text-gray-100">All rights reserved</div>
        <div className="text-gray-800 dark:text-gray-100">
          Made with ❤️ by{" "}
          <a href="https://github.com/tonymac129/" target="_blank" className="underline">
            Tony Macaroni
          </a>
        </div>
      </div>
      <div className={footerColumnStyles}>
        <h2 className={footerColumnTitleStyles}>Browse Tabs</h2>
        <Link href="/" className={footerLinkStyles}>
          Home
        </Link>
        <Link href="/html" className={footerLinkStyles}>
          HTML
        </Link>
        <Link href="/css" className={footerLinkStyles}>
          CSS
        </Link>
        <Link href="/references" className={footerLinkStyles}>
          References
        </Link>
        <Link href="/playground" className={footerLinkStyles}>
          Playground
        </Link>
      </div>
      <div className={footerColumnStyles}>
        <h2 className={footerColumnTitleStyles}>MacLearn Information</h2>
        <a href="https://mac-web.github.io/macblog/#/apps/maclearn" className={footerLinkStyles} target="_blank">
          About
        </a>
        <a href="https://mac-web.github.io/macblog/#/apps/maclearn/updates" className={footerLinkStyles} target="_blank">
          Updates
        </a>
        <a href="https://forms.gle/P5QfiZFgZ3KURdbJ8" className={footerLinkStyles} target="_blank">
          Feedback
        </a>
      </div>
      <div className={footerColumnStyles}>
        <h2 className={footerColumnTitleStyles}>MacWeb Apps</h2>
        <a href="https://mac-web.github.io/" className={footerLinkStyles} target="_blank">
          MacWeb
        </a>
        <a href="https://mac-web.github.io/macvg/" className={footerLinkStyles} target="_blank">
          MacVG
        </a>
        <a href="https://mac-web.github.io/macideas/" className={footerLinkStyles} target="_blank">
          MacIdeas
        </a>
        <a href="https://mac-web.github.io/mactools/" className={footerLinkStyles} target="_blank">
          MacTools
        </a>
        <a href="https://mac-web.github.io/macblog/" className={footerLinkStyles} target="_blank">
          MacBlog
        </a>
      </div>
      <div className={footerColumnStyles}>
        <h2 className={footerColumnTitleStyles}>Social</h2>
        <div className="flex flex-wrap gap-5 items-center">
          <a href="mailto:hello@macweb.app" target="_blank" title="Email us">
            <Image src="/icons/social/email.svg" alt="Email icon" width={25} height={25} className="invert dark:invert-0" />
          </a>
          <a href="https://www.youtube.com/@MacWebApp" target="_blank" title="YouTube">
            <Image src="/icons/social/youtube.svg" alt="YouTube icon" width={25} height={25} className="invert dark:invert-0" />
          </a>
          <a href="https://github.com/Mac-Web/maclearn" target="_blank" title="Source code">
            <Image src="/icons/social/github.svg" alt="GitHub icon" width={25} height={25} className="invert dark:invert-0" />
          </a>
          <a href="https://discord.gg/UT7g2S2cBP" target="_blank" title="Join our server!">
            <Image src="/icons/social/discord.svg" alt="Discord icon" width={25} height={25} className="invert dark:invert-0" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
