import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useExtraViewDetail } from '@/hooks/useExtraViewDetail';
import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';

export default function ViewExtraDetail({ itemTitle }) {
  const { t } = useTranslation();
  const { id } = useParams();
  usePageTitle('កម្មវិធីសិក្សាបន្ថែម', 'Main Extra');
  const { extraViewDetail, loading } = useExtraViewDetail(id);

  
  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-4 animate-pulse">
        <div className="h-5 bg-gray-300 dark:bg-slate-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-1/2"></div>
        <div className="mt-4 bg-gray-300 dark:bg-slate-700 rounded aspect-video w-full"></div>
        <hr className="my-3 border-t border-dashed border-gray-300 dark:border-slate-700" />
        <div className="h-20 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-24 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-24 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-24 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (!extraViewDetail.length) {
    return <div className="text-center py-10">
      
    </div>;
  }
  const item = extraViewDetail[0];
  return (
    <div className="flex flex-col gap-2 p-2 md:p-4 max-w-7xl m-auto" >
      {item.video_id ? (
        <div className="mt-4 aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src={`https://www.youtube.com/embed/${item.video_id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <img src={item.image} alt={item.title} className="rounded-md mt-4" />
      )}
      <p className="text-md md:text-lg text-gray-800 dark:text-slate-100">{item.title}</p>
      <p className="text-sm text-gray-500 dark:text-slate-400">{t("news.posted")} : {item.created_at}</p>
      <hr className="my-3 border-t border-dashed border-gray-400 dark:border-slate-700" />
      <p className="text-md md:text-lg text-gray-800 dark:text-slate-100">{item.title +" : "+item.program+item.batch}</p>
      <p className="text-md md:text-lg text-gray-800 dark:text-slate-200">{item.description}</p>
      <div className="flex flex-col gap-2">
        {item.image_album?.map((img, index) => (
          <img key={index} src={img} alt={`album-${index}`} className="rounded-md"/>
        ))}
      </div>
    </div>
  );
}
