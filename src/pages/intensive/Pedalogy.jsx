import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import picture1 from '@/assets/images/pedagogy/picture1.jpg'
import picture2 from '@/assets/images/pedagogy/picture2.jpg'
import picture3 from '@/assets/images/pedagogy/picture3.jpg'

export default function Pedalogy() {
  const { t } = useTranslation();
  usePageTitle('ថ្នាក់បំប៉នចិត្តគរុកោសល្យ', 'Pedagogy');

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-900 transition-colors duration-200">
      <section className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 space-y-8">
        
        {/* Hero Video Section */}
        <div className='m-auto flex justify-center items-center mb-5 md:px-0 mt-5'>
          <YouTubePlayer videoId="Ub7U6lxK4tg" />
        </div>

        {/* Content Cards Wrapper */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-3 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 space-y-6">
          
          {/* About Section */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('pedagogy.js_about_program')}</h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify md:text-left">{t('pedagogy.js_peda_desc')}</p>
          </div>

          <hr className="border-slate-100 dark:border-slate-700" />

          {/* Terms Section */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('pedagogy.js_term')}</h2>
            <div className="text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-1 text-justify md:text-left">
              <p>{t('pedagogy.js_term_1')}</p>
              <p>{t('pedagogy.js_term_2')}</p>
              <p>{t('pedagogy.js_term_3')}</p>
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-700" />

          {/* Program Section */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('pedagogy.js_program')}</h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify md:text-left">{t('pedagogy.js_program_desc')}</p>
          </div>

          <hr className="border-slate-100 dark:border-slate-700" />

          {/* Results Section */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('pedagogy.js_result')}</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">{t('pedagogy.js_result_desc')}</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none pl-0">
              {[1, 2, 3, 4].map((num) => (
                /* Changed items-start to items-center */
                <li key={num} className="flex items-center gap-3 text-base text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  {/* Removed m-3 to fix alignment */}
                  <span className="text-green-700 dark:text-green-400 font-bold shrink-0 m-1 md:m-2">✓</span>
                  <span className="leading-relaxed">{t(`pedagogy.js_result_${num}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-slate-100 dark:border-slate-700" />

          {/* Career Section */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('pedagogy.js_career')}</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">{t('pedagogy.js_career_desc')}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base text-slate-600 dark:text-slate-300 pl-4 list-disc space-y-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <li key={num} className="marker:text-green-500">
                  {t(`pedagogy.js_career_${num}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Schedule & Tables Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-[#0a96a4] text-lg">❖</span>
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('pedagogy.js_shedule')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weekday Table */}
            <div className="overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
              <table className="w-full border-collapse text-left text-sm md:text-base text-slate-600 dark:text-slate-300">
                <thead>
                  <tr className="text-white">
                    <th className="bg-[#0a96a4] px-6 py-4 font-semibold text-center" colSpan="2">
                      {t('tuition.js_mon_fri')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-700/40 w-1/3 text-center border-r border-slate-100 dark:border-slate-700">{t('tuition.js_morning')}</td>
                    <td className="px-6 py-4 text-center ">{'08:00 AM - 11:15 AM'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-700/40 text-center border-r border-slate-100 dark:border-slate-700">{t('tuition.js_afternoon')}</td>
                    <td className="px-6 py-4 text-center ">{'02:00 PM - 05:15 PM'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-700/40 text-center border-r border-slate-100 dark:border-slate-700">{t('tuition.js_evening')}</td>
                    <td className="px-6 py-4 text-center ">{'05:30 PM - 08:30 PM'}</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-700/30">
                    <td className="px-6 py-4 text-center italic text-gray-500 dark:text-slate-400 text-sm" colSpan="2">{t('tuition.js_first_int')}</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-700/30">
                    <td className="px-6 py-4 text-center italic text-gray-500 dark:text-slate-400 text-sm" colSpan="2">{t('tuition.js_second_int')}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Weekend Table */}
            <div className="overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
              <table className="w-full border-collapse text-left text-sm md:text-base text-slate-600 dark:text-slate-300">
                <thead >
                  <tr className="text-white text-center">
                    <th className="bg-[#0a96a4] px-6 py-4 font-semibold text-center" colSpan="2">{t('tuition.js_sat_sun')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-8 font-medium text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-700/40 text-center border-r border-slate-100 dark:border-slate-700" rowSpan="2">{t('tuition.js_staturday')}</td>
                    <td className="px-6 py-4 text-center border-b border-slate-100 dark:border-slate-700">08:00 AM - 11:30 AM</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 text-center ">01:30 PM - 05:30 PM</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-8 font-medium text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-700/40 text-center border-r border-slate-100 dark:border-slate-700" rowSpan="2">{t('tuition.js_sunday')}</td>
                    <td className="px-6 py-4 text-center border-b border-slate-100 dark:border-slate-700">08:00 AM - 11:30 AM</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 text-center ">01:30 PM - 05:30 PM</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-700/30">
                    <td className="px-6 py-4 text-center italic text-gray-500 dark:text-slate-400 text-sm" colSpan="2">{t('tuition.js_first_int')}</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-700/30">
                    <td className="px-6 py-4 text-center italic text-gray-500 dark:text-slate-400 text-sm" colSpan="2">{t('tuition.js_second_int')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tuition Fee Table */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-[#0a96a4] text-lg">❖</span>
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('tuition.js_tuition_fee')}</h2>
          </div>
         
          <div className="overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
            <table className="w-full border-collapse text-left text-sm md:text-base text-slate-600 dark:text-slate-300">
              <thead>
                <tr className="text-white text-center">
                  <th className="bg-[#0a96a4] px-6 py-4 font-semibold text-center">{t('tuition.js_course')}</th>
                  <th className="bg-[#0a96a4] px-6 py-4 font-semibold text-center">{t('english_intensive.js_percourse')}</th>
                  <th className="bg-[#0a96a4] px-6 py-4 font-semibold text-center">{t('tuition.js_na_year')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-center">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200 text-left">{t('pedagogy.js_peda_1')}</td>
                  <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-200">$ 280</td>
                  <td className="px-6 py-8 font-bold text-[#0a96a4] dark:text-cyan-400 text-lg" rowSpan="2">$ 500</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200 text-left">{t('pedagogy.js_peda_2')}</td>
                  <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-200">$ 280</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Subjects Table */}
        <div className="space-y-6 ">
          <div className="flex items-center gap-2">
            <span className="text-[#0a96a4] text-lg">❖</span>
            <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{t('pedagogy.js_subject')}</h2>
          </div>
          {/* Responsive Grid System (1 column on mobile, 2 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Semester 1 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-[#0a96a4] px-5 py-3.5 flex justify-between items-center text-white font-bold">
                  <span className="text-base md:text-lg">{t('tuition.js_course')} ១</span>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {t('pedagogy.js_gedesl')}
                  </span>
                </div>
                <ul className="divide-y divide-slate-100 dark:divide-slate-700 px-5">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <li key={`sem1-${num}`} className="py-4 flex justify-between items-start gap-4 text-sm md:text-base">
                      <span className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                        {t(`pedagogy.js_course_${num}`)}
                      </span>
                      <span className=" text-gray-500 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/60 px-2.5 py-0.5 rounded-lg border border-slate-100 dark:border-slate-600 shrink-0 whitespace-nowrap text-xs md:text-sm">
                        {num === 6 ? 2 : 3} {t('tuition.js_credit')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Semester 2 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-[#0a96a4] px-5 py-3.5 flex justify-between items-center text-white font-bold">
                  <span className="text-base md:text-lg">{t('tuition.js_course')} ២</span>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {t('pedagogy.js_gedesl')}
                  </span>
                </div>
                <ul className="divide-y divide-slate-100 dark:divide-slate-700 px-5">
                  {[7, 8, 9, 10, 11, 12].map((num) => (
                    <li key={`sem2-${num}`} className="py-4 flex justify-between items-start gap-4 text-sm md:text-base">
                      <span className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                        {t(`pedagogy.js_course_${num}`)}
                      </span>
                      <span className=" text-gray-500 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/60 px-2.5 py-0.5 rounded-lg border border-slate-100 dark:border-slate-600 shrink-0 whitespace-nowrap text-xs md:text-sm">
                        {num === 12 ? 2 : 3} {t('tuition.js_credit')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Total Row (Spans full width gracefully) */}
          <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-5 flex justify-between items-center font-bold shadow-md">
            <span className="text-gray-700 dark:text-slate-200 text-base md:text-lg">{t('tuition.js_total')} : </span>
            <span className="text-2xl text-[#0a96a4] dark:text-cyan-400">34</span>
          </div>
        </div>

        {/* Modernized Image Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          <div className="md:col-span-2 overflow-hidden rounded-lg shadow-sm border border-slate-100 bg-white p-2">
            <img src={picture1} alt="Pedagogy activity" className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300" />
          </div>
          <div className="grid grid-cols-1 gap-2 md:gap-4">
            <div className="overflow-hidden rounded-lg shadow-sm border border-slate-100 bg-white p-2">
              <img src={picture2} alt="Pedagogy class" className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm border border-slate-100 bg-white p-2">
              <img src={picture3} alt="Pedagogy student life" className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Footer Video Section */}
        <div className='m-auto flex justify-center items-center mb-5 md:px-0 mt-5'>
          <YouTubePlayer videoId="ccWtmi2AR6A" />
        </div>

      </section>
    </div>
  );
}