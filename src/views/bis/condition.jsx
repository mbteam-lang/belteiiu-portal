import React from 'react';
import usePageTitle from '@/hooks/usePageTitle'
import { useTranslation } from 'react-i18next'
export default function Condition() {
    usePageTitle('គោលការណ៍​​ឯកជនភាព', 'Terms and Conditions');
    const { t } = useTranslation();
    return (
        <div>
            <div className='priavcy mt-10 max-w-7xl w-11/12 m-auto text-[#333]'>
                <div className='flex justify-center items-center md:text-2xl text-lg font-semibold'>
                    <h1>{t('belteiis.contents.condition.js_title')}</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mt-4'>{t('belteiis.contents.condition.js_sub_title')}</h1>
                    <h1 className="md:text-lg text-sm mt-4">{t('belteiis.contents.condition.js_dec') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mt-4'>{t('belteiis.contents.condition.js_title1')}</h1>
                    <h1 className="md:text-lg text-sm mt-4">{t('belteiis.contents.condition.js_title1.1') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mt-4'>{t('belteiis.contents.condition.js_title2')}</h1>
                    <h1 className="md:text-lg text-sm mt-4" >{t('belteiis.contents.condition.js_title2.1') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{t('belteiis.contents.condition.js_title3')}</h1>
                    <h1 className="md:text-lg text-sm mt-4" >{t('belteiis.contents.condition.js_title3.1') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{t('belteiis.contents.condition.js_title4')}</h1>
                    <h1 className="md:text-lg text-sm mt-4" >{t('belteiis.contents.condition.js_title4.1') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{t('belteiis.contents.condition.js_title5')}</h1>
                    <h1 className="md:text-lg text-sm mt-4" >{t('belteiis.contents.condition.js_title5.1') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{t('belteiis.contents.condition.js_title7')}</h1>
                    <h1 className="md:text-lg text-sm">{t('belteiis.contents.condition.js_title7.1') }</h1>
                    <h1 className="md:text-lg text-sm">{t('belteiis.contents.condition.js_title7.2') }</h1>
                    <h1 className="md:text-lg text-sm">{t('belteiis.contents.condition.js_title7.3') }</h1>
                    <h1 className="md:text-lg text-sm">{t('belteiis.contents.condition.js_title7.4') }</h1>
                    <h1 className="md:text-lg text-sm">{t('belteiis.contents.condition.js_title7.5') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{t('belteiis.contents.condition.js_title8')}</h1>
                    <h1 className="md:text-lg text-sm mt-4">{t('belteiis.contents.condition.js_title8.1') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{t('belteiis.contents.condition.js_title9')}</h1>
                    <h1 className="md:text-lg text-sm mt-4">{t('belteiis.contents.condition.js_title9.1') }</h1>
                </div>
                <div className=' mx-auto px-4'>
                    <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{t('belteiis.contents.condition.js_title10')}</h1>
                    <h1 className="md:text-lg text-sm mt-4">{t('belteiis.contents.condition.js_title10.1') }</h1>
                </div>
                <div className='h-10'></div>
            </div>
        </div>
    );
}
