import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "References | MacLearn",
  description:
    "Check out our detailed references, from HTML tags and attributes to CSS properties and selectors, with the free, complete, and detailed web development references on MacLearn, the best online platform for learning web development!",
  authors: [{ name: "MacWeb", url: "https://macweb.app" }],
  openGraph: {
    title: "References | MacLearn",
    description:
      "Check out our detailed references, from HTML tags and attributes to CSS properties and selectors, with the free, complete, and detailed web development references on MacLearn, the best online platform for learning web development!",
    url: "https://maclearn.macweb.app/references",
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
        title="Web Development References"
        description="Check out our detailed references on anything related to web development here."
      />
    </div>
  );
}

export default Page;
