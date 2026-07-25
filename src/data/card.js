
import BgBis from '@/assets/images/bg_bis.png';
import BgBec from '@/assets/images/bec.png';
import BgBiu from '@/assets/images/cover2.jpg';
import HeaderBis from '@/assets/images/header_bis.png';
import HeaderBiu from '@/assets/images/header_biu.png';
import HeaderBLC from '@/assets/images/header_blc.png';

export const cardMenu = [
    {
        images: [HeaderBis],
        Bgimages: [BgBis],
        title: 'BELTEI INTERNATIONAL SCHOOL',
        subTitle: 'The best quality education in Cambodia',
        size: 'md:w-[2.5rem] w-[2.5rem]',
        color: 'text-[#1e6090]',
        bg: '[#1e6090]',
        link: '/bis/home'
    },
    {
        images: [HeaderBiu],
        Bgimages: [BgBiu],
        title: 'BELTEI INTERNATIONAL UNIVERSITY',
        subTitle: 'The future of global leader',
        size: 'md:w-[2.5rem] w-[2.5rem]',
        color: 'text-[#0a96a4]',
        bg: '[#0a96a4]',
        link: '/biu/home'
    },
    {
        images: [HeaderBLC],
        Bgimages: [BgBec],
        title: 'BELTEI E-Learning Cambodia',
        subTitle: 'The future of global leader',
        size: 'md:w-[2.5rem] w-[2.5rem]',
        color: 'text-[#0a96a4]',
        bg: '[#0a96a4]',
        link: '/index_beltei_elearning'
    }
];
