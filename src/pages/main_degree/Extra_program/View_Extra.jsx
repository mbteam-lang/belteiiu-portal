import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useExtraView } from '@/hooks/useExtraView';
import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

export default function ViewExtra() {
  const { t } = useTranslation();
  const { id } = useParams();
  usePageTitle('កម្មវិធីសិក្សាបន្ថែម', 'Main Extra');
  const { extraView, loading } = useExtraView(id);
  const item = extraView?.[0];

  return (
    <div className="max-w-7xl m-auto">
      {/* 1. SKELETON LOADING STATE */}
      {(loading || !item) ? (
        <div className="flex flex-col gap-2 animate-pulse">
          <div className="mt-4 bg-gray-300 dark:bg-slate-700 rounded aspect-video w-full"></div>
          <div className="h-5 bg-gray-300 dark:bg-slate-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-1/2"></div>
          <hr className="my-3 border-t border-dashed border-gray-300 dark:border-slate-700" />
          <div className="h-20 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="h-24 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
            <div className="h-24 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
            <div className="h-24 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
          </div>
        </div>
      ) : (
        /* 2. ACTUAL CONTENT STATE (Only runs when item exists) */
        <div className="flex flex-col gap-2">
          {item.video_id ? (
            <div className="mt-2 aspect-video">
              <iframe
                className="w-full h-full rounded-md"
                src={`https://www.youtube.com/embed/${item.video_id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img src={item.image} alt={item.title} className="rounded-md mt-2" />
          )}
          <p className="text-gray-600 dark:text-slate-100 text-md md:text-lg text-justify">{item.title}</p>
          <p className="text-sm text-gray-500 dark:text-slate-400">{t("news.posted")} : {item.created_at}</p>
          <hr className="my-3 border-t border-dashed border-gray-400 dark:border-slate-700" />
          <p className="text-gray-600 dark:text-slate-200 text-md md:text-lg text-justify">{item.description}</p>
          <div className="flex flex-col gap-2">
            {item.image_album?.map((img, index) => (
              <img key={index} src={img} alt={`album-${index}`} className="rounded-md"/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}