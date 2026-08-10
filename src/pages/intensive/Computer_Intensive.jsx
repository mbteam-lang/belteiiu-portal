import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import computer_intensive_1 from '@/assets/images/Intensive_course/computer_intensive/computer_intensive_1.jpg'
import computer_intensive_2 from '@/assets/images/Intensive_course/computer_intensive/computer_intensive_2.jpg'
import computer_intensive_3 from '@/assets/images/Intensive_course/computer_intensive/computer_intensive_3.jpg'
import computer_intensive_4 from '@/assets/images/Intensive_course/computer_intensive/computer_intensive_4.jpg'

export default function ComputerIntensive() {
  const { t } = useTranslation();
  usePageTitle('ថ្នាក់បំប៉នកុំព្យូទ័រ', 'Computer Intensive Course');

  // Course curriculum array for structured iteration
  const courses = [
    { id: 1, name: '1. Microsoft Word', duration: t('computer_intensive.js_hour_20'), price: '$ 50' },
    { id: 2, name: '2. Microsoft Excel', duration: t('computer_intensive.js_hour_20'), price: '$ 50' },
    { id: 3, name: '3. Microsoft PowerPoint', duration: t('computer_intensive.js_hour_20'), price: '$ 50' },
    { id: 4, name: '4. Internet & Email', duration: t('computer_intensive.js_hour_15'), price: '$ 50' },
  ];

  const galleryImages = [
    computer_intensive_1,
    computer_intensive_2,
    computer_intensive_3,
    computer_intensive_4,
  ];

  // Reusable CSS style groups
  const thStyles = "md:px-5 py-4 md:text-lg text-md text-center bg-[#0a96a4] border border-gray-200 dark:border-slate-700 text-white font-medium";
  const tdStyles = "md:px-5 px-3 md:text-lg text-md py-4 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200 transition-colors";

  return (
    <main className="Dormitory select-none py-6 md:py-10">
      <section className="max-w-7xl m-auto md:px-5 px-4 space-y-8">
        
        {/* Course Presentation Video */}
        <div className="m-auto flex justify-center items-center md:px-0">
          <YouTubePlayer videoId="v2C1sjIIvns" />
        </div>

        {/* Content Section */}
        <div className="space-y-8 md:text-left text-justify">
          
          {/* Main Description */}
          <p className="text-md text-gray-500 dark:text-slate-300 leading-relaxed">
            {t('computer_intensive.js_com_desc')}
          </p>

          {/* Section: Terms & Conditions */}
          <div className="space-y-4">
            <h2 className="md:text-xl text-lg text-gray-800 dark:text-slate-100 font-semibold flex items-center gap-2">
              <span className="text-[#0a96a4]">❖</span> {t('computer_intensive.js_com_term')}
            </h2>
            <p className="text-md text-gray-500 dark:text-slate-300 leading-loose pl-6">
              {t('computer_intensive.js_com_term_1')}<br />
              {t('computer_intensive.js_com_term_2')}<br />
              {t('computer_intensive.js_com_term_3')}
            </p>
          </div>

          {/* Section: Subject Matrix */}
          <div className="space-y-4">
            <h2 className="md:text-xl text-lg text-gray-800 dark:text-slate-100 font-semibold flex items-center gap-2">
              <span className="text-[#0a96a4]">❖</span> {t('computer_intensive.js_com_sub')}
            </h2>
            
            <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 dark:border-slate-700">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className={thStyles}>{t('computer_intensive.js_com_cc')}</th>
                    <th className={thStyles}>{t('computer_intensive.js_duration')}</th>
                    <th className={thStyles}>{t('computer_intensive.js_price')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                  {courses.map((item) => (
                    <tr key={item.id} className="even:bg-gray-50 dark:even:bg-slate-700/50 odd:bg-white dark:odd:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <td className={`${tdStyles} text-left font-medium`}>{item.name}</td>
                      <td className={`${tdStyles} text-center`}>{item.duration}</td>
                      <td className={`${tdStyles} text-center`}>{item.price}</td>
                    </tr>
                  ))}
                  {/* Totals Row */}
                  <tr className="bg-gray-100 dark:bg-slate-700 font-bold">
                    <td className={`${tdStyles} text-center`}>{t('tuition.js_total')}</td>
                    <td className={`${tdStyles} text-center`}>{t('computer_intensive.js_hour_75')}</td>
                    <td className={`${tdStyles} text-center text-[#0a96a4] dark:text-cyan-400`}>$ 200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Time Schedule */}
          <div className="space-y-4">
            <h2 className="md:text-xl text-lg text-gray-800 dark:text-slate-100 font-semibold flex items-center gap-2">
              <span className="text-[#0a96a4]">❖</span> {t('computer_intensive.js_com_shedule')}
            </h2>
            
            <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 dark:border-slate-700">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className={thStyles} colSpan={2}>{t('tuition.js_mon_fri')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700 text-sm">
                  <tr className="bg-white dark:bg-[#353535] hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className={`${tdStyles} text-center font-medium`}>{t('tuition.js_morning')}</td>
                    <td className={`${tdStyles} text-center`}>08:00 AM - 11:15 AM</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700">
                    <td className={`${tdStyles} text-center font-medium`}>{t('tuition.js_afternoon')}</td>
                    <td className={`${tdStyles} text-center`}>02:00 PM - 05:15 PM</td>
                  </tr>
                  <tr className="bg-white dark:bg-[#353535] hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className={`${tdStyles} text-center font-medium`}>{t('tuition.js_evening')}</td>
                    <td className={`${tdStyles} text-center`}>05:30 PM - 08:30 PM</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-slate-700/50 font-medium text-center italic text-gray-500 dark:text-slate-400">
                    <td className="" colSpan={2}>{t('tuition.js_first_int')}</td>
                  </tr>
                  <tr className="bg-white dark:bg-[#353535] font-medium text-center italic text-gray-500 dark:text-slate-400">
                    <td className="" colSpan={2}>{t('tuition.js_second_int')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {galleryImages.map((src, idx) => (
              <div 
                key={idx} 
                className="flex justify-center items-center overflow-hidden rounded-3xl shadow-md transition-transform duration-300 hover:scale-[1.015]"
              >
                <img 
                  src={src} 
                  alt={`Computer intensive activities ${idx + 1}`} 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}