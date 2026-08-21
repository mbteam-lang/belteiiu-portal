import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTubePlayer  from '@/components/common/YouTubePlayer';
import usePageTitle from "@/hooks/usePageTitle";
import { useAbout } from "@/hooks/useAbout";

export default function Award() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  usePageTitle('ព័ត៌មានលម្អិត', 'Award Details');
  const { award, loading , nodata} = useAbout(id);

  // Modal control functions
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (award[0]?.albums?.length || 0) - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === (award[0]?.albums?.length || 0) - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="p-3 md:p-5 space-y-6 lg:max-w-7xl m-auto min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {award.map((award) => (
        <div key={award.id} className="space-y-4">
          {award.video_1 && (
            <div className="w-full mb-2">
              <YouTubePlayer videoId={award.video_1} />
            </div>
          )}
          {award.video_2 && (
           <div className="w-full mb-2">
              <YouTubePlayer videoId={award.video_2} />
            </div>
          )}

          <div className="border-l-4 border-blue-600 dark:border-cyan-500 pl-4 py-1.5 transition-all">
            <span className="text-xs font-semibold tracking-wider text-gray-400 dark:text-slate-400 uppercase font-sans">
              ព័ត៌មានលម្អិត / Award Details
            </span>
            <h2 className="font-medium text-gray-700 dark:text-slate-100 text-base md:text-xl lg:text-2xl mt-0.5 leading-tight">
              {award.title}
            </h2>
          </div>
          <div className="w-full border-t border-dashed border-gray-300 dark:border-slate-700 my-2"></div>
          <p className="text-gray-500 dark:text-white text-sm mt-1">{award.remark}</p>
          {award.albums && award.albums.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {award.albums.map((album, index) => (
                <img
                  key={album.albums_id}
                  src={album.name}
                  alt={`Album ${album.albums_id}`}
                  className="w-full object-fill rounded-md cursor-pointer"
                  onClick={() => openModal(index)}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Modal for Full Image View */}
      {isModalOpen && award[0]?.albums && award[0].albums.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>
              ×
            </button>
            <button className="absolute left-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white text-2xl shadow-lg" onClick={goToPrevious}>
              ←
            </button>
            <img
              src={award[0].albums[currentImageIndex].name}
              alt={`Full Album ${award[0].albums[currentImageIndex].albums_id}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button className="absolute right-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white text-2xl shadow-lg" onClick={goToNext}>
              →
            </button>
        </div>  
      )}
    </div>
  );
}