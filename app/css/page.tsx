import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "CSS | MacLearn",
  description:
    "Learn all the basics of CSS, from colors and backgrounds to layouts and animations, with the free, complete, and detailed CSS course on MacLearn, the best online platform for learning web development!",
  authors: [{ name: "MacWeb", url: "https://macweb.app" }],
  openGraph: {
    title: "CSS | MacLearn",
    description:
      "Learn all the basics of CSS, from colors and backgrounds to layouts and animations, with the free, complete, and detailed CSS course on MacLearn, the best online platform for learning web development!",
    url: "https://maclearn.macweb.app/css",
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
        title="Learn CSS"
        description="CSS is an extremely flexible language that styles the layout and the design of your webpage."
      />
    </div>
  );
}

export default Page;
