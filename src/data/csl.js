// src/data/esl.js
import thumbnail1 from '@/assets/images/main_program/csl/csl_pre_certi.jpg'
import thumbnail2 from '@/assets/images/main_program/csl/csl_yn_certi.jpg'
import thumbnail3 from '@/assets/images/main_program/csl/csl_adl_certi.jpg'

import Child1 from '@/assets/images/main_program/csl/person1.jpg'
import Child2 from '@/assets/images/main_program/csl/person2.jpg'

import Child3 from '@/assets/images/main_program/csl/person3.jpg'
import Child4 from '@/assets/images/main_program/csl/person4.jpg'
import Child5 from '@/assets/images/main_program/csl/person5.jpg'

export const cslMenu = [
    {
        title: 'belteiis.header.main_program.csl',
        sub_programs: [
            {
                title: 'belteiis.contents.sub_program.sub_csl_1',
                color: "bg-[#5DC761] bg-opacity-10",
                image: thumbnail1,
                id: 1
            },
            {
                title: 'belteiis.contents.sub_program.sub_csl_2',
                color: "bg-[#6777B3] bg-opacity-10",
                image: thumbnail2,
                id: 2
            },
            {
                title: 'belteiis.contents.sub_program.sub_csl_3',
                color: "bg-[#FD706F] bg-opacity-10",
                image: thumbnail3,
                id: 3
            }
        ]
    }
];

export const cslDetails = [
    {
        certificate: 'belteiis.contents.sub_program.certificate',
        dayandtime: 'belteiis.contents.sub_program.dayandtime',
        term_title: 'belteiis.contents.sub_program.term_title',
        details: [
            {
                id: 1,
                title: 'belteiis.contents.sub_program.sub_csl_1',
                description: 'belteiis.contents.sub_program.csl_descript1',
                terms: [
                    { title: 'belteiis.contents.sub_program.term_csl_jan_july', color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_apr_oct', color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_july_jun', color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_oct_apr', color: "bg-[#FFB928] bg-opacity-10" },
                ],
                dt: [
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_evening' },
                ],
                albums: [
                    { image: thumbnail1 },
                    { image: Child1 },
                    { image: Child2 }
                ]
            },
            {
                id: 2,
                title: 'belteiis.contents.sub_program.sub_csl_2',
                description: 'belteiis.contents.sub_program.csl_descript2',
                terms: [
                    { title: 'belteiis.contents.sub_program.term_csl_jan_july', color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_apr_oct', color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_july_jun', color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_oct_apr', color: "bg-[#FFB928] bg-opacity-10" },
                ],
                dt: [
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_evening' },
                ],
                albums: [
                    { image: thumbnail2 },
                    { image: Child3 },
                    { image: Child4 }
                ]
            },
            {
                id: 3,
                title: 'belteiis.contents.sub_program.sub_csl_3',
                description: 'belteiis.contents.sub_program.csl_descript3',
                terms: [
                    { title: 'belteiis.contents.sub_program.term_csl_jan_july', color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_apr_oct', color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_july_jun', color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.term_csl_oct_apr', color: "bg-[#FFB928] bg-opacity-10" },
                ],
                dt: [
                    { title: 'belteiis.contents.sub_program.dt_mon_fri' },
                    { title: 'belteiis.contents.sub_program.esl_evening' },
                ],
                albums: [
                    { image: thumbnail3 },
                    { image: Child5 }
                ]
            }
        ],
    }
];

