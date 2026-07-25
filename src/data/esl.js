// src/data/esl.js
import thumbnail1 from '@/assets/images/main_program/esl/Pre1_Pre6.png'
import thumbnail2 from '@/assets/images/main_program/esl/Lvl1_Lvl6.png'
import thumbnail3 from '@/assets/images/main_program/esl/Lvl7_Lvl12.png'

import Child1 from '@/assets/images/main_program/esl/esl_pre_child.jpg'
import Child2 from '@/assets/images/main_program/esl/esl_yl_child.jpg'
import Child3 from '@/assets/images/main_program/esl/esl_al_child.jpg'

import Cetificat1 from '@/assets/images/main_program/esl/esl_pre_certi.jpg'
import Cetificat2 from '@/assets/images/main_program/esl/esl_yl_certi.jpg'
import Cetificat3 from '@/assets/images/main_program/esl/esl_al_certi.jpg'

export const eslMenu = [
    {
        title: 'belteiis.header.main_program.esl',
        sub_programs: [
            {
                title: 'belteiis.contents.sub_program.sub_esl_1',
                color: "bg-[#5DC761] bg-opacity-10",
                image: thumbnail1,
                id: 1
            },
            {
                title: 'belteiis.contents.sub_program.sub_esl_2',
                color: "bg-[#6777B3] bg-opacity-10",
                image: thumbnail2,
                id: 2
            },
            {
                title: 'belteiis.contents.sub_program.sub_esl_3',
                color: "bg-[#FD706F] bg-opacity-10",
                image: thumbnail3,
                id: 3
            }
        ]
    }
];

export const eslDetails = [
    {
        certificate: 'belteiis.contents.sub_program.certificate',
        dayandtime: 'belteiis.contents.sub_program.dayandtime',
        term_title: 'belteiis.contents.sub_program.term_title',
        details: [
            {
                id: 1,
                title: 'belteiis.contents.sub_program.sub_esl_1',
                description: 'belteiis.contents.sub_program.esl_descript1',
                terms: [
                    { title: 'belteiis.contents.sub_program.term_esl_mar_sep', color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_june_dec', color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_sep_mar', color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_dec_june', color: "bg-[#FFB928] bg-opacity-10" },
                ],
                dt_full: [
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_morning' },
                    { title: 'belteiis.contents.sub_program.esl_afternoon' },
                ],
                albums: [
                    { image: Cetificat1 },
                    { image: Child1 }
                ],
                video: 'https://www.youtube.com/embed/AEXySQA-b0U'
            },
            {
                id: 2,
                title: 'belteiis.contents.sub_program.sub_esl_2',
                description: 'belteiis.contents.sub_program.esl_descript2',
                terms: [
                    { title: 'belteiis.contents.sub_program.term_esl_mar_sep', color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_june_dec', color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_sep_mar', color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_dec_june', color: "bg-[#FFB928] bg-opacity-10" },
                ],
                dt_full: [
                    { title: 'belteiis.contents.sub_program.els_full_time' },
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_morning' },
                    { title: 'belteiis.contents.sub_program.esl_afternoon' },
                ],
                dt_part: [
                    { title: 'belteiis.contents.sub_program.els_part_time' },
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_evening' },
                ],
                albums: [
                    { image: Cetificat2 },
                    { image: Child2 }
                ],
                video: 'https://www.youtube.com/embed/kfF0zInXqac'
            },
            {
                id: 3,
                title: 'belteiis.contents.sub_program.sub_ged_3',
                description: 'belteiis.contents.sub_program.esl_descript3',
                terms: [
                    { title: 'belteiis.contents.sub_program.term_esl_mar_sep', color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_june_dec', color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_sep_mar', color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_esl_dec_june', color: "bg-[#FFB928] bg-opacity-10" },
                ],
                dt_full: [
                    { title: 'belteiis.contents.sub_program.els_full_time' },
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_morning' },
                    { title: 'belteiis.contents.sub_program.esl_afternoon' },
                ],
                dt_part: [
                    { title: 'belteiis.contents.sub_program.els_part_time' },
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_evening' },
                ],
                albums: [
                    { image: Cetificat3 },
                    { image: Child3 }
                ],
                video: 'https://www.youtube.com/embed/ojqlm3RAbsw'
            }
        ],
    }
];

