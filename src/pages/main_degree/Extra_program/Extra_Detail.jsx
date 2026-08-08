import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import ViewExtra from "./View_Extra";
import usePageTitle from "@/hooks/usePageTitle";
import { useExtraDetail } from "@/hooks/useExtraDetail";

export default function ExtraDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  usePageTitle('ព័ត៌មានលម្អិត', 'Curriculum Detail');
  const { extraDetail, loading, showView } = useExtraDetail(id);

  return (
    <div className="flex flex-col gap-3 p-3 max-w-7xl m-auto">
      {showView &&(
        <div>
          <ViewExtra/>
        </div>
      )}
      {!loading &&
        extraDetail.map((group) => (
          <div key={group.id} className="mt-4">
            <h1 className="mx-auto text-white font-semibold md:w-[230px] w-[200px] md:h-[50px] h-[36px] flex items-center justify-center text-sm md:text-lg rounded-xl bg-[#0a96a4]">
              {group.batch}
            </h1>
            <div className="h-3"></div>
            {group.list.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  navigate(`/view-extra-detail/${item.id}`, {
                    state: { title: item.title },
                  })
                }
                className="flex w-full border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition mb-2"
              >
                <div className="relative flex-shrink-0 p-1 pl-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[120px] h-[70px] md:w-[160px] md:h-[90px] object-cover rounded"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaYoutube className="text-red-600 text-3xl md:text-4xl drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-3 flex items-center">
                  <p className="font-medium text-gray-700 dark:text-slate-100 line-clamp-2 text-left text-md md:text-lg">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ))}
      
    </div>
  );
}
