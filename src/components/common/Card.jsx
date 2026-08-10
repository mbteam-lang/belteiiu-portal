import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ListCard = ({
  images,
  title
}) => {
  return (
    <div className="group w-full min-h-[4.5rem] bg-white dark:bg-[#353535] border border-gray-200 dark:border-slate-700/80 rounded-xl px-4 py-3 flex items-center justify-between shadow-xs transition-all duration-300 cursor-pointer gap-3">
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-sky-50/80 dark:bg-slate-700/80 flex items-center justify-center p-2 shrink-0">
          <img
            src={images}
            alt={title || "Icon"}
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 leading-snug line-clamp-2">
          {title}
        </p>
      </div>

      <NavigateNextIcon
        className="
          text-slate-400 dark:text-slate-500
          shrink-0
          dark:group-hover:text-cyan-400
        "
      />
    </div>
  );
};

export default ListCard;