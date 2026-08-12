import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import CourseTable from '@/components/common/CourseTable';
import {course1, course2, chinese1, chinese2} from "../../data/chineseIntensive";

export default function Chinese_Intensive() {
    const { t } = useTranslation();
    usePageTitle('ថ្នាក់បំប៉នភាសាចិន', 'Chinese Intensive Course')
    
    return (
        <>
            <div className='Dormitory computer_intensive'>
                <section className='max-w-7xl m-auto md:px-5 px-2'>
                    <div className='m-auto flex justify-center items-center mb-5 md:px-0 mt-5'>
                        <YouTubePlayer videoId="SUie6wkvdWg" />
                    </div>
                    <div className='space-y-7'>
                        <div className='md:text-left text-justify space-y-7'>
                            <p className='text-md text-gray-600 dark:text-white leading-7'>{t('chinese_intensive.js_chinese_desc')}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="">
                                <CourseTable
                                    title={`${t("chinese_intensive.js_course1")} `}
                                    badge={t("tuition.js_credit")}
                                    data={course1}
                                    t={t}
                                    headerColor = "#ffc62a"
                                />
                                <div className="bg-white dark:bg-[#353535] p-5 flex justify-between items-center font-bold border-t border-slate-100 dark:border-slate-700 rounded-b-lg">
                                    <span className="text-gray-700 dark:text-slate-200 text-base sm:text-lg">{t('tuition.js_total')} : </span>
                                    <span className="text-lg text-[#0a96a4] dark:text-cyan-400">{t('chinese_intensive.js_15')}</span>
                                </div>
                            </div>

                            <div className="">
                                <CourseTable
                                    title={`${t("chinese_intensive.js_course2")} `}
                                    badge={t("tuition.js_credit")}
                                    data={course2}
                                    t={t}
                                    headerColor = "#ffc62a"
                                />
                                <div className="bg-white dark:bg-[#353535] p-5 flex justify-between items-center font-bold border-t border-slate-100 dark:border-slate-700 rounded-b-lg">
                                    <span className="text-gray-700 dark:text-slate-200 text-base sm:text-lg">{t('tuition.js_total')} : </span>
                                    <span className="text-lg text-[#0a96a4] dark:text-cyan-400">{t('chinese_intensive.js_15')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="">
                                <CourseTable
                                    title="第一学期"
                                    badge="学分"
                                    data={chinese1}
                                    t={t}
                                    headerColor = "#ffc62a"
                                />
                                <div className="bg-white dark:bg-[#353535] p-5 flex justify-between items-center font-semibold border-t border-slate-100 dark:border-slate-700 rounded-b-lg">
                                    <span className="text-gray-700 dark:text-slate-200 text-base sm:text-lg">全部的 : </span>
                                    <span className="text-lg text-[#0a96a4] dark:text-cyan-400">15 学分</span>
                                </div>
                            </div>

                            <div className="">
                                <CourseTable
                                    title="第二学期"
                                    badge="学分"
                                    data={chinese2}
                                    t={t}
                                    headerColor = "#ffc62a"
                                />
                                <div className="bg-white dark:bg-[#353535] p-5 flex justify-between items-center font-semibold border-t border-slate-100 dark:border-slate-700 rounded-b-lg">
                                    <span className="text-gray-700 dark:text-slate-200 text-base sm:text-lg">全部的 : </span>
                                    <span className="text-lg text-[#0a96a4] dark:text-cyan-400">15 学分</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m-auto flex justify-center items-center mb-5 md:px-0 mt-5'>
                        <YouTubePlayer videoId="jnN_aIoayWM" />
                    </div>
                </section>
                <div className='h-10'></div>
            </div>
        </>

    )
}