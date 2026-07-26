import React, { useState, useEffect } from 'react';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import dormitoryData from '../../data/dormitory';

export default function Dormitory() {
  usePageTitle('អគារស្នាក់នៅនិស្សិត', 'Dormitory');
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dormitoryData);
  }, []);

  return (
    <div className='min-h-screen py-4 md:py-6'>
      <section className='max-w-7xl m-auto px-3 md:px-6 space-y-3 md:space-y-6'>
        
        {/* Featured Video Player */}
        <div className='w-full overflow-hidden rounded-2xl shadow-md '>
          <div className="aspect-video rounded-xl overflow-hidden">
            <YouTubePlayer videoId="1XuYhWRPKZM" />
          </div>
        </div>

        {/* Content Description Section */}
        <div className='bg-white rounded-xl border border-slate-200 p-4 md:p-8 shadow-sm space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-base'>
          <div className="space-y-3">
            <p className='text-gray-600 font-medium text-base md:text-lg'>
              {t('dormitory.js_dorm_desc')}
            </p>
            <p className='text-justify'>{t('dormitory.js_dorm1')}</p>
            <p className='text-justify'>{t('dormitory.js_dorm2')}</p>
            <p className='text-justify'>{t('dormitory.js_dorm3')}</p>
          </div>
          
          {/* Bullet points feature styled into a clean layout list */}
          <ul className='space-y-2 pl-5 list-disc text-gray-500 font-medium border-t border-slate-100 pt-4'>
            <li>{t('dormitory.js_dorm4')}</li>
            <li>{t('dormitory.js_dorm5')}</li>
            <li>{t('dormitory.js_dorm6')}</li>
          </ul>
        </div>

        {/* Gallery Image Grid */}
        {data.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4'>
            {data.map((item, index) => (
              <div 
                key={`${item.image}-${index}`} 
                className="group overflow-hidden rounded-2xl hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt="Dormitory view" 
                  className='w-full aspect-[4/3] object-cover rounded-xl group-hover:opacity-95 transition-opacity' 
                />
              </div>
            ))}
          </div>
        )}

        {/* Secondary Showcase Video Playlist Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='w-full overflow-hidden rounded-2xl shadow-sm  sm:p-3 hover:shadow-md transition-shadow duration-300'>
            <div className="aspect-video rounded-xl overflow-hidden">
              <YouTubePlayer videoId="ntOJWu1tEa4" />
            </div>
          </div>
          
          <div className='w-full overflow-hidden rounded-2xl shadow-sm  sm:p-3 hover:shadow-md transition-shadow duration-300'>
            <div className="aspect-video rounded-xl overflow-hidden">
              <YouTubePlayer videoId="cENeBBntyWE" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}