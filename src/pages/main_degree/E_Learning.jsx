
import { Link } from 'react-router-dom';
import { getLanguage } from '@/services/languageService';
import { useFaculty } from '@/hooks/useFaculty';
import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

const eLearningCache = {};

export default function E_Learning() {
    const { t } = useTranslation();
    usePageTitle('ការសិក្សាតាមប្រព័ន្ធអេឡិចត្រូនិក', 'E-learning');
    const currentLanguage = getLanguage();
    const { facultiesData, loading } = useFaculty(3);
    return (
        <div className='bg-[#F8FAFC] dark:bg-[#282828] min-h-screen transition-colors duration-200'>
            <section className='lg:max-w-7xl m-auto md:px-5 px-3 py-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2">
                    {
                        facultiesData?.data?.map((items, index) => (
                            <Link key={index} to={items.link} className="group">
                                {/* <Link key={index} to={`/e-faculty/${items.id}`} className="group"> */}
                                <div
                                    className="rounded-lg flex items-center gap-2 md:gap-4 w-full text-white border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        backgroundColor: items.color,
                                        borderColor: items.color,
                                        boxShadow: `0 4px 15px -5px ${items.color}88`
                                    }}
                                >
                                    <div className="flex justify-center items-center md:w-24 md:h-24 w-16 h-16 bg-white/95 dark:bg-[#353535]/95 md:p-3 p-2 shrink-0">
                                        <img
                                            src={items.image}
                                            alt={'Image 404'}
                                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                                            error onError={
                                                (e) => e.target.src = ''
                                            }
                                        />
                                    </div>
                                    <div className="text-left pr-4">
                                        <h3 className="md:text-lg text-md font-bold leading-tight">
                                            {items.faculty}
                                        </h3>
                                        <p className="text-xs md:text-sm mt-1.5 opacity-90 font-medium">
                                            {t('header.js_have')} {items.major_count} {t('home.majors')}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
            <div className='h-10'></div>
        </div>
    );
}