import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "HTML | MacLearn",
  description:
    "Learn all the basics of HTML, from hyperlinks and headings to lists and tables, with the free, complete, and detailed HTML course on MacLearn, the best online platform for learning web development!",
  authors: [{ name: "MacWeb", url: "https://macweb.app" }],
  openGraph: {
    title: "HTML | MacLearn",
    description:
      "Learn all the basics of HTML, from hyperlinks and headings to lists and tables, with the free, complete, and detailed HTML course on MacLearn, the best online platform for learning web development!",
    url: "https://maclearn.macweb.app/html",
    siteName: "MacLearn",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
      },
    ],
    type: "website",
  },
};

function Page() {
  return (
    <div>
      <Hero
        title="Learn HTML"
        description="HTML is a very powerful markup language that adds content and structure to your page."
      />
    </div>
  );
}

export default Page;
