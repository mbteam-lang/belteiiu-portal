import React from "react";
import { motion } from "framer-motion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ListCard = ({
  images,
  title
}) => {
  return (
    <motion.div 
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group w-full min-h-[4.5rem] bg-white dark:bg-[#353535] shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700/60 rounded-xl px-4 py-3 flex items-center justify-between transition-colors duration-200 cursor-pointer gap-3"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-sky-50/80 dark:bg-slate-700/80 flex items-center justify-center p-2 shrink-0 overflow-hidden">
          <img
            src={images}
            alt={title || "Icon"}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 ease-out"
          />
        </div>
        <p className="text-base md:text-lg font-medium text-slate-800 dark:text-slate-100 group-hover:text-[#0a96a4] dark:group-hover:text-cyan-300 transition-colors duration-200 leading-snug line-clamp-2">
          {title}
        </p>
      </div>

      <NavigateNextIcon
        className="
          text-slate-400 dark:text-slate-500
          shrink-0
          group-hover:text-[#0a96a4]
          dark:group-hover:text-cyan-400
          group-hover:translate-x-1
          transition-all duration-200
        "
      />
    </motion.div>
  );
};

export default ListCard;