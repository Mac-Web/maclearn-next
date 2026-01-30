"use client";

import { FaStar, FaRegStar, FaShare, FaFlag } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "@/components/ui/Modal";

function ArticleBtns() {
  const [favorited, setFavorited] = useState<boolean>(false);
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (shareModalOpen) {
      document.body.classList.add("modal-open");
      if (typeof window !== "undefined") {
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [shareModalOpen]);

  return (
    <div className="flex gap-x-7 py-4">
      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 1.1, y: -1 }} onClick={() => setFavorited(!favorited)}>
        {favorited ? (
          <FaStar size={20} className="cursor-pointer text-blue-600" title="Unfavorite article" />
        ) : (
          <FaRegStar size={20} className="cursor-pointer" title="Favorite article" />
        )}
      </motion.div>
      <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 1.1, y: -1 }} onClick={() => setShareModalOpen(true)}>
        <FaShare size={20} className="cursor-pointer" title="Share article" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, y: -3 }}
        whileTap={{ scale: 1.1, y: -1 }}
        onClick={() => window.open("https://forms.gle/GrNw79oqWgr2u9aLA", "_blank")}
      >
        <FaFlag size={20} className="cursor-pointer" title="Report article" />
      </motion.div>
      <AnimatePresence>
        {shareModalOpen && (
          <Modal close={() => setShareModalOpen(false)}>
            <h2 className="text-black dark:text-white text-2xl text-center font-bold">Share Article</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Link copied! Send the article link to anyone via email, social media, or more to share your web development
              knowledge and skills!
            </p>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ArticleBtns;
