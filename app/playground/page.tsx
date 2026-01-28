import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Playground | MacLearn",
  description:
    "Experiment and practice your web development skills with HTML, CSS, and JavaScript with the powerful, fast, and flexible code playground on MacLearn, the best online platform for learning web development!",
  authors: [{ name: "MacWeb", url: "https://macweb.app" }],
  openGraph: {
    title: "Playground | MacLearn",
    description:
      "Experiment and practice your web development skills with HTML, CSS, and JavaScript with the powerful, fast, and flexible code playground on MacLearn, the best online platform for learning web development!",
    url: "https://maclearn.macweb.app/playground",
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
        title="Code Playground"
        description="Test, experiment, and apply the coding skills you've learned in the code playground."
      />
    </div>
  );
}

export default Page;
