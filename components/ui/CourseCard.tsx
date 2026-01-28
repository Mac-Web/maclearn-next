"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  img: string;
  title: string;
  description: string;
  link: string;
};

function CourseCard({ img, title, description, link }: CourseCardProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <Link
        href={link}
        className="bg-gray-300 dark:bg-gray-900 rounded flex flex-col items-center gap-y-3 px-4 py-2.5 w-50 h-full"
      >
        <Image src={img} alt={title + " Image"} width={100} height={100} />
        <h2 className="text-black dark:text-white font-bold text-xl text-center">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center text-sm">{description}</p>
      </Link>
    </motion.div>
  );
}

export default CourseCard;
