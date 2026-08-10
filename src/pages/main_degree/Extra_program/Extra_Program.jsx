import usePageTitle from "@/hooks/usePageTitle";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useExtraProgram } from "@/hooks/useExtraProgram";
import { FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";

export default function ExtraProgram() {
  const navigate = useNavigate();
  usePageTitle('កម្មវិធីសិក្សាបន្ថែម', 'Extra-Curriculum Programs');
  const { extraProgram, loading } = useExtraProgram();

  const fixedItem = useMemo(
    () => ({
      id: "fixed",
      title: "BELTEI IU Talk",
      image: "https://i.pinimg.com/736x/65/fc/81/65fc81b43e96d9977be5eb141f4315b3.jpg",
      link: "https://www.youtube.com/@BELTEIIUTalkCambodia"
    }),
    []
  );

  const listData = useMemo(
    () => [fixedItem, ...extraProgram],
    [fixedItem, extraProgram]
  );

  return (
    // Expanded container from max-w-7xl to max-w-7xl for a much grander desktop presence
    <div className="max-w-7xl mx-auto px-4 py-5 lg:py-14">

      {/* Grid Layout: Spacious gap, 1 col mobile, 2 cols md, 3 cols lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">

        
        {!loading &&
          listData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank", "noopener,noreferrer");
                  return;
                }
                navigate(`/extra-list/${item.id}`, {
                  state: { title: item.title },
                });
              }}
              className="group flex items-center w-full text-left bg-white dark:bg-[#353535] border border-gray-200 dark:border-slate-700 p-1.5 md:p-3 rounded-lg hover:bg-gray-50/60 dark:hover:bg-slate-700/60 hover:border-[#0a96a4]/50 transition-all duration-200"
            >
              {/* Significantly Enlarged Thumbnail Container */}
              <div className="relative w-28 h-18 md:w-36 md:h-24 rounded-md overflow-hidden flex-shrink-0 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Info Column with Enlarged Fonts */}
              <div className="flex-1 min-w-0 px-4 md:px-5 flex flex-col justify-center">

                <h3 className="font-medium text-gray-700 dark:text-slate-100 text-sm md:text-base lg:text-[17px] leading-snug line-clamp-2 group-hover:text-[#0a96a4] dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Icon Signifier */}
              <div className="flex-shrink-0 pr-1 text-gray-400 dark:text-slate-400 group-hover:text-[#0a96a4]/70 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all duration-200 mr-2">
                {item.link ? (
                  <FaExternalLinkAlt className="text-xs md:text-sm" />
                ) : (
                  <FaChevronRight className="text-sm md:text-base" />
                )}
              </div>
            </button>
          ))}
      </div>
    </div>
  );
}