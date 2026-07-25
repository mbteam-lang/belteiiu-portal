import React, { useState, useEffect, useRef } from 'react';
import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Certificat1 from '@/assets/images/main_program/ima/ima_certi_1.jpg'
import Certificat2 from '@/assets/images/main_program/ima/imag_certi_2.jpg'
import Child3 from '@/assets/images/main_program/ima/person3.jpg'
import Child4 from '@/assets/images/main_program/ima/person4.jpg'
import Ima_Exam_1 from '@/assets/images/main_program/ima/ima_exam_1.jpg'
import Ima_Exam_2 from '@/assets/images/main_program/ima/ima_exam_2.jpg'
import Ima_Exam_3 from '@/assets/images/main_program/ima/ima_exam_3.jpg'
import Ima_Exam_4 from '@/assets/images/main_program/ima/ima_exam_4.jpg'
import Ima_Exam_5 from '@/assets/images/main_program/ima/ima_exam_5.jpg'
import Ima_Exam_6 from '@/assets/images/main_program/ima/ima_exam_6.jpg'

export default function Ima() {
    usePageTitle('កម្មវិធី អភិវឌ្ឍបញ្ញា IMA', 'Intelligent Mental-Arithmetic');
    const { t } = useTranslation();
    const [openCards, setOpenCards] = useState({});

    const players = useRef([]);
    const toggleCard = (index) => {
        setOpenCards((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };
    const data = [{
        title: t('belteiis.header.main_program.ima'),
        about: t('belteiis.contents.sub_program.about_ima'),
        about_detail: t('belteiis.contents.sub_program.ima_descript1'),
        about_image: [
            { image: Ima_Exam_5 },
            { image: Ima_Exam_2 },
            { image: Ima_Exam_3 },
        ],

        curriculum: t('belteiis.contents.sub_program.curriculum'),
        curriculum_descript: t('belteiis.contents.sub_program.ima_descript2'),
        curriculum_list: [
            { title: t('belteiis.contents.sub_program.foundation'), remark: t('belteiis.contents.sub_program.remark_1'), color: "bg-[#0181CA]" },
            { title: t('belteiis.contents.sub_program.basic'), remark: t('belteiis.contents.sub_program.remark_2'), color: "bg-[#FFB928]" },
            { title: t('belteiis.contents.sub_program.elementary_a'), remark: t('belteiis.contents.sub_program.remark_3'), color: "bg-[#FF3B30]" },
            { title: t('belteiis.contents.sub_program.elementary_b'), remark: t('belteiis.contents.sub_program.remark_4'), color: "bg-[#08BFD0]" },
            { title: t('belteiis.contents.sub_program.intermediate_a'), remark: t('belteiis.contents.sub_program.remark_5'), color: "bg-[#34C759]" },
            { title: t('belteiis.contents.sub_program.intermediate_b'), remark: t('belteiis.contents.sub_program.remark_6'), color: "bg-[#3430FF]" },
            { title: t('belteiis.contents.sub_program.higher_a'), remark: t('belteiis.contents.sub_program.remark_7'), color: "bg-[#FFB928]" },
            { title: t('belteiis.contents.sub_program.higher_b'), remark: t('belteiis.contents.sub_program.remark_8'), color: "bg-[#0181CA]" },
            { title: t('belteiis.contents.sub_program.higher_c'), remark: t('belteiis.contents.sub_program.remark_9'), color: "bg-[#34C759]" },
            { title: t('belteiis.contents.sub_program.advance_a'), remark: t('belteiis.contents.sub_program.remark_a'), color: "bg-[#3430FF]" },
            { title: t('belteiis.contents.sub_program.advance_b'), remark: t('belteiis.contents.sub_program.remark_b'), color: "bg-[#FFB928]" },
            { title: t('belteiis.contents.sub_program.grand'), remark: t('belteiis.contents.sub_program.remark_grand'), color: "bg-[#0181CA]" }
        ],

        outcome: t('belteiis.contents.sub_program.outcome'),
        outcome_descript: t('belteiis.contents.sub_program.ima_descript3'),
        outcome_image: [
            { image: Ima_Exam_1 },
            { image: Ima_Exam_6 },
            { image: Ima_Exam_4 },
        ],

        term: t('belteiis.contents.sub_program.term_6'),
        group_i: t('belteiis.contents.sub_program.group_i'),
        term_g1: [
            { title: t('belteiis.contents.sub_program.ima_part1'), color: "bg-[#FF3B30]" },
            { title: t('belteiis.contents.sub_program.ima_part2'), color: "bg-[#08BFD0]" },
            { title: t('belteiis.contents.sub_program.ima_part3'), color: "bg-[#3430FF]" },
        ],
        group_ii: t('belteiis.contents.sub_program.group_ii'),
        term_g2: [
            { title: t('belteiis.contents.sub_program.ima_part4'), color: "bg-[#FF3B30]" },
            { title: t('belteiis.contents.sub_program.ima_part5'), color: "bg-[#08BFD0]" },
            { title: t('belteiis.contents.sub_program.ima_part6'), color: "bg-[#3430FF]" },
        ],

        dayandtime: t('belteiis.contents.sub_program.dayandtime'),
        dt: [
            { title: t('belteiis.contents.tuition.js_staturday'), color: "border-[#0181CA]" },
            { title: t('belteiis.contents.sub_program.dt_morning'), color: "border-[#FFB928]" },
            { title: t('belteiis.contents.sub_program.dt_afternoon'), color: "border-[#FF3B30]" },
        ],

        certificate: t('belteiis.contents.sub_program.certificate'),
        certificate_image: [
            { image: Certificat1, },
            { image: Child3, },
            { image: Certificat2, },
            { image: Child4, },
        ],
        videos: t('belteiis.contents.sub_program.action_video'),
        playlist: [
            { video: 'https://www.youtube.com/embed/D4HpQ_CuGjU' },
            { video: 'https://www.youtube.com/embed/9cY-hNCZR2Q' },
            { video: 'https://www.youtube.com/embed/nA32TtJW8QQ' },
            { video: 'https://www.youtube.com/embed/c_fH-DC2BPc' },
            { video: 'https://www.youtube.com/embed/_5N-5PlzAbc' },
            { video: 'https://www.youtube.com/embed/lOvS7rG8TXE' },
            { video: 'https://www.youtube.com/embed/IYEvXv10aEE' },
            { video: 'https://www.youtube.com/embed/X2z95X4OSmk' },
        ]
    }];

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            data[0].playlist.forEach((_, index) => {
                const player = new window.YT.Player(`youtube-player-${index}`, {
                    events: {
                        onStateChange: (event) => onPlayerStateChange(event, index),
                    },
                });
                players.current[index] = player;
            });
        };

        return () => {
            delete window.onYouTubeIframeAPIReady;
        };
    }, []);

    const onPlayerStateChange = (event, index) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            players.current.forEach((player, i) => {
                if (i !== index && player && typeof player.pauseVideo === 'function') {
                    player.pauseVideo();
                }
            });
        }
    };

    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0'>
            {data.map((item, index) => (
                <div key={index} className='mb-2'>
                    <div className='cursor-pointer' >
                        <div className={` mt-3 overflow-hidden text-left  text-sm text-gray-800 country leading-6`}>
                            <h1 className='md:px-5 px-5 mt-3 text-[#0181ca] country md:text-2xl text-xl font-semibold'>{item.title}</h1>
                            <div className='border-[#0181ca] border-t-4 m-5 text-lg'>
                                {/* video highlight */}
                                <>
                                    <div className='m-auto flex justify-center items-center mb-5 md:px-0 mt-5'>
                                        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                                            <iframe
                                                className='absolute top-0 left-0 w-full h-full'
                                                src="https://www.youtube.com/embed/KiYMMnpkD88"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    </div>
                                    <div className='m-auto flex justify-center items-center mb-5 md:px-0 mt-5'>
                                        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                                            <iframe
                                                className='absolute top-0 left-0 w-full h-full'
                                                src="https://www.youtube.com/embed/36xeYtmoTiY"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    </div>
                                </>
                                <div className='md:flex justify-between mx-auto'>
                                    <div className='flex flex-col'>
                                        <div className="flex flex-col md:flex-row">
                                            <div className="w-full flex flex-col space-y-3">
                                                {/* About */}
                                                <div className="space-y-3 md:p-4 p-3 text-justify bg-white  rounded-lg">
                                                    <span className="text-lg md:text-xl font-semibold text-[#0181ca]">
                                                        ❖&nbsp; &nbsp; {item.about}
                                                    </span>
                                                    <pre className="px-4 py-2 bg-gray-50 border border-gray-200 rounded text-sm md:text-lg text-gray-800 break-words whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: item.about_detail }} />
                                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                                                        {item.about_image.map((item_image, index) => (
                                                            <div key={index} className="rounded-md overflow-hidden justify-center items-center">
                                                                <img src={item_image.image} alt="Certification Image" className={`w-full h-full object-cover`} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* Curriculum */}
                                                <div className="space-y-3 md:p-4 p-3 text-justify bg-white  rounded-lg">
                                                    <span className="text-lg md:text-xl font-semibold text-[#0181ca]">
                                                        ❖&nbsp; &nbsp; {item.curriculum}
                                                    </span>
                                                    <pre className="px-4 py-2 bg-gray-50 border border-gray-200 rounded text-sm md:text-lg text-gray-800 break-words whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: item.curriculum_descript }} />
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                                                        {item.curriculum_list.map((sub_item, index_sub) => (
                                                            <div key={index_sub} className='rounded-lg shadow-md overflow-hidden'>
                                                                <div className={`md:h-20 h-16 flex items-center px-4 space-x-4 border-b ${sub_item.color} bg-opacity-10`} onClick={() => toggleCard(index_sub)}>
                                                                    <div className='flex justify-between items-center w-full'>
                                                                        <div className='flex justify-center items-center gap-5'>
                                                                            <div className='relative flex justify-center items-center'>
                                                                                <div className='lg:w-14 lg:h-14 w-12 h-12 bg-[#BFE2EA] flex justify-center items-center rounded-full'>
                                                                                    <div className='lg:w-10 lg:h-10 w-8 h-8 bg-[#0181ca] rounded-full flex justify-center items-center'>
                                                                                        <div className='text-white flex justify-center items-center' style={{ width: '20px', height: '20px' }}>
                                                                                            {index_sub + 1}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h2 className='text-[13px] md:text-md'>{sub_item.title}</h2>
                                                                        </div>
                                                                        <ExpandMoreIcon className='w-6 h-6' />
                                                                    </div>
                                                                </div>
                                                                {openCards[index_sub] && (
                                                                    <div className='p-6'>
                                                                        <h3 className='text-[#0181ca] md:text-lg text-sm mb-2' dangerouslySetInnerHTML={{ __html: sub_item.remark }} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Learning outcome */}
                                                <div className="space-y-3 md:p-4 p-3 text-justify bg-white  rounded-lg">
                                                    <span className="text-lg md:text-xl font-semibold text-[#0181ca]">
                                                        ❖&nbsp; &nbsp; {item.outcome}
                                                    </span>
                                                    <pre className="px-4 py-2 bg-gray-50 border border-gray-200 rounded text-sm md:text-lg text-gray-800 break-words whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: item.outcome_descript }} />
                                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                                                        {item.outcome_image.map((item_image, index) => (
                                                            <div key={index} className="rounded-md overflow-hidden justify-center items-center">
                                                                <img src={item_image.image} alt="Certification Image" className={`w-full h-full object-cover`} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Day and time */}
                                                <div className="space-y-3 md:p-4 p-3 text-justify bg-white  rounded-lg">
                                                    <span className="text-lg md:text-xl font-semibold text-[#0181ca]">
                                                        ❖&nbsp; &nbsp; {item.term}
                                                    </span>
                                                    <div className='md:flex w-full gap-5'>
                                                        <div className='w-full'>
                                                            <div className="bg-white rounded-lg p-4 md:p-6 mb-6 items-center justify-center border border-gray-200">
                                                                <div className="space-y-4 ">
                                                                    {/* Term Section */}
                                                                    <div className="flex items-center space-x-4 border-b pb-4 mb-4">
                                                                        <div className="bg-[#0181ca] flex justify-center items-center text-white w-10 h-10 rounded-full">
                                                                            <EditCalendarIcon className="justify-center items-center w-6 h-6" />
                                                                        </div>
                                                                        <h2 className="text-lg font-semibold"> {item.group_i}</h2>
                                                                    </div>
                                                                    {item.term_g1.map((g1, index) => (
                                                                        <div key={index} className={`p-4 rounded-lg ${g1.color} bg-opacity-10`}>
                                                                            <h3 className="md:text-lg text-sm">{g1.title}</h3>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-full'>
                                                            <div className="bg-white rounded-lg p-4 md:p-6 mb-6 items-center justify-center border border-gray-200">
                                                                <div className="space-y-4 ">
                                                                    {/* Term Section */}
                                                                    <div className="flex items-center space-x-4 border-b pb-4 mb-4">
                                                                        <div className="bg-[#0181ca] flex justify-center items-center text-white w-10 h-10 rounded-full">
                                                                            <EditCalendarIcon className="justify-center items-center w-6 h-6" />
                                                                        </div>
                                                                        <h2 className="text-lg font-semibold"> {item.group_ii}</h2>
                                                                    </div>
                                                                    {item.term_g2.map((g2, index) => (
                                                                        <div key={index} className={`p-4 rounded-lg ${g2.color} bg-opacity-10`}>
                                                                            <h3 className="md:text-lg text-sm">{g2.title}</h3>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="text-lg md:text-xl font-semibold text-[#0181ca]">
                                                        ❖&nbsp; &nbsp; {item.dayandtime}
                                                    </span>
                                                    <div className="bg-white rounded-lg border p-6">
                                                        <div className="space-y-4">
                                                            {item.dt.map((item_dt, index_dt) => (
                                                                <div key={index_dt} className={`border-l-4 ${item_dt.color} border-opacity-50 pl-4`}>
                                                                    <h2 className="md:text-lg text-sm">{item_dt.title}</h2>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Certificate */}
                                                <div className="space-y-3 md:p-4 p-3 text-justify bg-white  rounded-lg">
                                                    <span className="text-lg md:text-xl font-semibold text-[#0181ca]">
                                                        ❖&nbsp; &nbsp; {item.certificate}
                                                    </span>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                        {item.certificate_image.map((item_image, index) => (
                                                            <div key={index} className="rounded-md overflow-hidden justify-center items-center">
                                                                <img src={item_image.image} alt="Certification Image" className={`w-full h-full object-cover`} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Video Documents */}
                                                <div className="space-y-3 md:p-4 p-3 text-justify bg-white  rounded-lg">
                                                    <span className="text-lg md:text-xl font-semibold text-[#0181ca]">
                                                        ❖&nbsp; &nbsp; {item.videos}
                                                    </span>
                                                    <div className="bg-white rounded-lg md:mt-4 mt-2">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                            {item.playlist.map((item, index) => (
                                                                <div key={index} className="rounded-md overflow-hidden">

                                                                    <iframe
                                                                        id={`youtube-player-${index}`}
                                                                        className="w-full h-64 object-cover md:border-4 border-2 border-red-600"
                                                                        src={`${item.video}?enablejsapi=1`}
                                                                        // loading="lazy"
                                                                        frameBorder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                                        allowFullScreen
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='h-10'></div>
        </section>
    )
}
