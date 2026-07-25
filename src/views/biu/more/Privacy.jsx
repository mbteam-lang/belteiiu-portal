import React from 'react';
import i18n from 'i18next'

export default function Privacy() {
    return (
        <div className='priavcy mt-10 max-w-7xl w-11/12 m-auto text-[#333] text-justify'>
            <div className='flex justify-center items-center md:text-2xl text-lg font-semibold'>
                <h1>{i18n.t('privacy.js_title')}</h1>
            </div>
            <div className=' mx-auto px-4'>
                <h1 className='md:text-xl text-lg font-semibold mb-4 mt-4'>{i18n.t('privacy.js_sub_title')}</h1>
                <h2 className='md:text-lg text-md font-semibold'>{i18n.t('privacy.js_update')}</h2>
                <h1 className='md:text-lg text-sm'>{i18n.t('privacy.js_dec')}</h1>
            </div>
            <div className=' mx-auto px-4'>
                <h1 className='md:text-xl text-lg font-semibold mt-4'>{i18n.t('privacy.js_title1')}</h1>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title1.1')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs1.1')}</p>
            </div>
            <div className=' mx-auto px-4'>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title1.2')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs1.2')}</p>
            </div>
            <div className=' mx-auto px-4'>
                <h1 className='md:text-xl text-lg font-semibold mt-4'>{i18n.t('privacy.js_title2')}</h1>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title2.1')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs2.1')}</p>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title2.2')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs2.2')}</p>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title2.3')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs2.3')}</p>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title2.4')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs2.4')}</p>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title2.5')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs2.5')}</p>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title2.6')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs2.6')}</p>
                <h2 className='md:text-lg text-md font-semibold mt-4'>{i18n.t('privacy.js_title2.7')}</h2>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs2.7')}</p>
            </div>
            <div className=' mx-auto px-4'>
                <h1 className='md:text-xl text-lg font-semibold mt-4'>{i18n.t('privacy.js_title3')}</h1>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs3')}</p>
            </div>
            <div className=' mx-auto px-4'>
                <h1 className='md:text-xl text-lg font-semibold mt-4'>{i18n.t('privacy.js_title4')}</h1>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs4')}</p>
            </div>
            <div className=' mx-auto px-4'>
                <h1 className='md:text-xl text-lg font-semibold mt-4'>{i18n.t('privacy.js_title5')}</h1>
                <p className='md:text-lg text-sm'>{i18n.t('privacy.js_decs5')}</p>
            </div>
            <div className=' mx-auto px-4'>
                <h1 className='md:text-xl text-lg font-semibold mt-4'>{i18n.t('privacy.js_title6')}</h1>
                <p className='md:text-lg text-md'>{i18n.t('privacy.js_decs6')}</p>
            </div>
            <div className='h-10'></div>
        </div>
    );
}
