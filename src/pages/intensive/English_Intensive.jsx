import React from 'react';
import { useTranslation } from 'react-i18next';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import usePageTitle from '@/hooks/usePageTitle';
import CourseTable from '@/components/common/CourseTable';
import {course1, course2} from '../../data/englistIntensive';
import intensive_course_1 from '@/assets/images/Intensive_course/english_intensive/intensive_course_1.jpg'
import intensive_course_2 from '@/assets/images/Intensive_course/english_intensive/intensive_course_2.jpg'
import intensive_course_3 from '@/assets/images/Intensive_course/english_intensive/intensive_course_3.jpg'

export default function EnglishIntensive() {
  const { t } = useTranslation();
  usePageTitle('ថ្នាក់បំប៉នភាសាអង់គ្លេស', 'English Intensive Course');

  const images = [
    intensive_course_1,
    intensive_course_2,
    intensive_course_3,
  ];

  // Common table th styles
  const thStyles = "md:px-5 md:py-4 text-center bg-[#0a96a4] border border-gray-200 dark:border-slate-700 md:text-lg text-xs text-white font-medium";
  const tdStyles = "md:px-5 md:py-4 border border-gray-200 dark:border-slate-700 text-center text-sm md:text-base text-wrap text-gray-700 dark:text-slate-200";

  return (
    <main className="Dormitory py-5 md:py-10">
      <section className="max-w-7xl m-auto md:px-5 px-4 space-y-10">
        
        {/* Intro Video */}
        <div className="flex justify-center items-center">
          <YouTubePlayer videoId="vf8r6z1VtBc" />
        </div>

        {/* Content Body */}
        <div className="space-y-8 md:text-left text-justify">
          <p className="text-md text-gray-500 dark:text-slate-300 leading-relaxed">
            {t('english_intensive.js_eng_desc')}
          </p>
          <div className="space-y-4">
            <h2 className="md:text-xl text-lg text-gray-800 dark:text-slate-100 font-semibold flex items-center gap-2">
              <span className="text-[#0a96a4]">❖</span> {t('english_intensive.js_en_term')}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-1 text-justify sm:text-left">
              {t('english_intensive.js_desc_term_1')}<br />
              {t('english_intensive.js_desc_term_2')}<br />
              {t('english_intensive.js_desc_term_3')}
            </p>
          </div>

          {/* Section: Subjects */}
          <div className="space-y-4">
            <h2 className="md:text-xl text-lg text-gray-800 dark:text-slate-100 font-semibold flex items-center gap-2">
              <span className="text-[#0a96a4]">❖</span> {t('english_intensive.js_en_sub')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="">
                  <CourseTable
                      title={`${t("english_intensive.js_title_ic_1")} `}
                      badge={t("tuition.js_credit")}
                      data={course1}
                      t={t}
                      headerColor = "#0a96a4"
                  />
                  <div className="bg-white dark:bg-slate-800 p-5 flex justify-between items-center font-bold border-t border-slate-100 dark:border-slate-700 rounded-b-lg">
                      <span className="text-gray-700 dark:text-slate-200 text-base sm:text-lg">{t('tuition.js_total')} : </span>
                      <span className="text-lg text-[#0a96a4] dark:text-cyan-400">{t('chinese_intensive.js_15')}</span>
                  </div>
              </div>

              <div className="">
                  <CourseTable
                      title={`${t("english_intensive.js_title_ic_2")} `}
                      badge={t("tuition.js_credit")}
                      data={course2}
                      t={t}
                      headerColor = "#0a96a4"
                  />
                  <div className="bg-white dark:bg-slate-800 p-5 flex justify-between items-center font-bold border-t border-slate-100 dark:border-slate-700 rounded-b-lg">
                      <span className="text-gray-700 dark:text-slate-200 text-base sm:text-lg">{t('tuition.js_total')} : </span>
                      <span className="text-lg text-[#0a96a4] dark:text-cyan-400">{t('chinese_intensive.js_15')}</span>
                  </div>
              </div>
          </div>
            
          </div>

          {/* Section: Schedule */}
          <div className="space-y-4">
            <h2 className="md:text-xl text-lg text-gray-800 dark:text-slate-100 font-semibold flex items-center gap-2">
              <span className="text-[#0a96a4]">❖</span> {t('english_intensive.js_en_class_day')}
            </h2>

            
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Mon - Fri Table */}
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full table-auto border-collapse border border-gray-200 dark:border-slate-700 shadow-sm">
                  <thead>
                    <tr>
                      <th className={thStyles} colSpan={2}>{t('tuition.js_mon_fri')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                    <tr className="bg-white dark:bg-slate-800">
                      <td className={`${tdStyles} font-medium`}>{t('tuition.js_morning')}</td>
                      <td className={tdStyles}>08:00 AM - 11:15 AM</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-slate-700/50">
                      <td className={`${tdStyles} font-medium`}>{t('tuition.js_afternoon')}</td>
                      <td className={tdStyles}>02:00 PM - 05:15 PM</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800">
                      <td className={`${tdStyles} font-medium`}>{t('tuition.js_evening')}</td>
                      <td className={tdStyles}>05:30 PM - 08:30 PM</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-slate-700/50 italic text-gray-500 dark:text-slate-400">
                      <td className="text-gray-500 dark:text-slate-400 text-center py-4" colSpan={2}>{t('tuition.js_first_intake')}</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800 italic text-gray-500 dark:text-slate-400">
                      <td className="text-gray-500 dark:text-slate-400 text-center py-3" colSpan={2}>{t('tuition.js_second_intake')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Sat - Sun Table */}
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full table-auto border-collapse border border-gray-200 dark:border-slate-700 shadow-sm">
                  <thead>
                    <tr>
                      <th className={thStyles} colSpan={2}>{t('tuition.js_sat_sun')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                    <tr className="bg-white dark:bg-slate-800">
                      <td className={`${tdStyles} font-medium`} rowSpan={2}>{t('tuition.js_staturday')}</td>
                      <td className={tdStyles}>08:00 AM - 11:30 AM</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800">
                      <td className={tdStyles}>01:30 PM - 05:30 PM</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-slate-700/50">
                      <td className={`${tdStyles} font-medium`} rowSpan={2}>{t('tuition.js_sunday')}</td>
                      <td className={tdStyles}>08:00 AM - 11:30 AM</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-slate-700/50">
                      <td className={tdStyles}>01:30 PM - 05:30 PM</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800 italic text-sm">
                      <td className="text-gray-500 dark:text-slate-400 text-center py-4" colSpan={2}>{t('tuition.js_second_intake')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          

          {/* Section: Tuition Fees */}
          <div className="space-y-4">
            <h2 className="md:text-xl text-lg text-gray-700 dark:text-slate-100 font-semibold flex items-center gap-2">
              <span className="text-[#0a96a4]">❖</span> {t('tuition.js_tuition_fee')}
            </h2>
            
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full table-auto border-collapse border border-gray-200 dark:border-slate-700 shadow-sm">
                <thead>
                  <tr>
                    <th className={thStyles} colSpan={2}>{t('tuition.js_course')}</th>
                    <th className={thStyles}>{t('english_intensive.js_percourse')}</th>
                    <th className={thStyles}>{t('tuition.js_na_year')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-300">
                    <td className={tdStyles} colSpan={2}>{t('english_intensive.js_intensive_1')}</td>
                    <td className={tdStyles}>$ 280</td>
                    <td className={tdStyles} rowSpan={2}>$ 500</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-slate-700/50 text-gray-500 dark:text-slate-300">
                    <td className={tdStyles} colSpan={2}>{t('english_intensive.js_intensive_2')}</td>
                    <td className={tdStyles}>$ 280</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-4">
            {images.map((src, idx) => (
              <div key={idx} className="flex justify-center items-center overflow-hidden rounded-3xl shadow-md tracking-wide transition-transform duration-300 hover:scale-[1.02]">
                <img src={src} alt={`Intensive course feature ${idx + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

        </div>

        {/* Closing Video */}
        <div className="flex justify-center items-center pt-5">
          <YouTubePlayer videoId="QIFtHMp5uWA" />
        </div>

      </section>
    </main>
  );
}