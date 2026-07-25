// src/data/ged.js

import thumbnail1 from '@/assets/images/main_program/ged/g1_g6.png';
import thumbnail2 from '@/assets/images/main_program/ged/g7_g10.png';
import thumbnail3 from '@/assets/images/main_program/ged/g7_g12.png';

import Child1 from '@/assets/images/main_program/ged/1_6_child.jpg';
import Child2 from '@/assets/images/main_program/ged/7_9_child.jpg';
import Child3 from '@/assets/images/main_program/ged/10_12_child.jpg';

import Cetificat1 from '@/assets/images/main_program/ged/1_6_certificat.jpg';
import Cetificat2 from '@/assets/images/main_program/ged/7_9_certificat.jpg';
import Cetificat3 from '@/assets/images/main_program/ged/10_12_certificat.jpg';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalculateIcon from '@mui/icons-material/Calculate';
import PublicIcon from '@mui/icons-material/Public';
import ScienceIcon from '@mui/icons-material/Science';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ComputerIcon from '@mui/icons-material/Computer';

export const gedMenu = [
    {
        title: 'belteiis.header.main_program.ged',
        sub_programs: [
            {
                title: 'belteiis.contents.sub_program.sub_ged_1',
                color: "bg-[#ECFDF5] ",
                image: thumbnail1,
                id: 1
            },
            {
                title: 'belteiis.contents.sub_program.sub_ged_2',
                color: "bg-[#F3E8FF]",
                image: thumbnail2,
                id: 2
            },
            {
                title: 'belteiis.contents.sub_program.sub_ged_3',
                color: "bg-[#FFFBEB]",
                image: thumbnail3,
                id: 3
            }
        ]
    }
];

export const gedDetails = [
    {
        curriculum: 'belteiis.contents.sub_program.curriculum',
        dayandtime: 'belteiis.contents.sub_program.dayandtime',
        certificate: 'belteiis.contents.sub_program.certificate',
        details: [
            {
                id: 1,
                title: 'belteiis.contents.sub_program.sub_ged_1',
                description: 'belteiis.contents.sub_program.description1',
                subjects: [
                    { title: 'belteiis.contents.sub_program.sub_khmer', icon: AutoStoriesIcon , color: "bg-[#0181CA] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_math', icon: CalculateIcon, color: "bg-[#FFB928] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_social', icon: PublicIcon, color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_practical', icon: ScienceIcon, color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_english', icon: GTranslateIcon, color: "bg-[#34C759] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_physical', icon: SportsTennisIcon, color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_tv', icon: MusicNoteIcon, color: "bg-[#FFB928] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_computer', icon: ComputerIcon, color: "bg-[#0181CA] bg-opacity-10" }
                ],
                dt: [
                    { title: 'belteiis.contents.sub_program.dt_mon_sat', color: "border-[#0181CA] border-opacity-50" },
                    { title: 'belteiis.contents.sub_program.dt_morning', color: "border-[#FFB928] border-opacity-50" },
                    { title: 'belteiis.contents.sub_program.dt_afternoon', color: "border-[#FF3B30] border-opacity-50" },
                ],
                albums: [
                    { image: Cetificat1 },
                    { image: Child1 }
                ],
                video: 'https://www.youtube.com/embed/AEXySQA-b0U'
            },
            {
                id: 2,
                title: 'belteiis.contents.sub_program.sub_ged_2',
                introduction: 'belteiis.contents.sub_program.introduction',
                description: 'belteiis.contents.sub_program.description2',
                subjects: [
                    { title: 'belteiis.contents.sub_program.sub_khmer', icon: AutoStoriesIcon, color: "bg-[#0181CA] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_math', icon: CalculateIcon, color: "bg-[#FFB928] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_social_studies', icon: PublicIcon, color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_science', icon: ScienceIcon, color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_english', icon: GTranslateIcon, color: "bg-[#3430FF] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_physical', icon: SportsTennisIcon, color: "bg-[#34C759] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_computer', icon: ComputerIcon, color: "bg-[#FF3B30] bg-opacity-10" }
                ],
                dt: [
                    { title: 'belteiis.contents.sub_program.dt_mon_sat', color: "border-[#0181CA] border-opacity-50" },
                    { title: 'belteiis.contents.sub_program.dt_6_12_morning', color: "border-[#FFB928] border-opacity-50" },
                    { title: 'belteiis.contents.sub_program.dt_6_12_afternoon', color: "border-[#FF3B30] border-opacity-50" },
                ],
                albums: [
                    { image: Cetificat2 },
                    { image: Child2 }
                ],
                video: 'https://www.youtube.com/embed/djUPnSqp_dA'
            },
            {
                id: 3,
                title: 'belteiis.contents.sub_program.sub_ged_3',
                introduction: 'belteiis.contents.sub_program.introduction',
                description: 'belteiis.contents.sub_program.description2',
                subjects: [
                    { title: 'belteiis.contents.sub_program.sub_khmer', icon: AutoStoriesIcon, color: "bg-[#0181CA] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_math', icon: CalculateIcon, color: "bg-[#FFB928] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_social_studies', icon: PublicIcon, color: "bg-[#FF3B30] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_science', icon: ScienceIcon, color: "bg-[#08BFD0] bg-opacity-10" },
                    { title: 'belteiis.contents.sub_program.sub_english', icon: GTranslateIcon, color: "bg-[#3430FF] bg-opacity-10" },
                ],
                dt: [
                    { title: 'belteiis.contents.sub_program.dt_mon_sat', color: "border-[#0181CA] border-opacity-50" },
                    { title: 'belteiis.contents.sub_program.dt_6_12_morning', color: "border-[#FFB928] border-opacity-50" },
                    { title: 'belteiis.contents.sub_program.dt_6_12_afternoon', color: "border-[#FF3B30] border-opacity-50" },
                ],
                albums: [
                    { image: Cetificat3 },
                    { image: Child3 }
                ],
                video: 'https://www.youtube.com/embed/qfmpNx8XAh4'
            }
        ],
    }
];

