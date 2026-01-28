"use client";

import { FaStar, FaRegStar, FaShare, FaFlag } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

function ArticleBtns() {
  const [favorited, setFavorited] = useState<boolean>(false);

  return (
    <div className="flex gap-x-7 py-4">
      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 1.1, y: -1 }} onClick={() => setFavorited(!favorited)}>
        {favorited ? (
          <FaStar size={20} className="cursor-pointer text-blue-600" title="Unfavorite article" />
        ) : (
          <FaRegStar size={20} className="cursor-pointer" title="Favorite article" />
        )}
      </motion.div>
      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 1.1, y: -1 }} onClick={() => setFavorited(!favorited)}>
        <FaShare size={20} className="cursor-pointer" title="Share article" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, y: -3 }}
        whileTap={{ scale: 1.1, y: -1 }}
        onClick={() => window.open("https://forms.gle/GrNw79oqWgr2u9aLA", "_blank")}
      >
        <FaFlag size={20} className="cursor-pointer" title="Report article" />
      </motion.div>
    </div>
  );
}

export default ArticleBtns;
