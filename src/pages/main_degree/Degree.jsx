import React from 'react';
import { motion } from 'framer-motion';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useDegree } from '@/hooks/useDegree';

export default function Degree() {
    usePageTitle('កម្មវិធីសិក្សា', 'Degree');
    const { degree, loading } = useDegree();

    return (
        <div className='bg-[#F5F5F5] dark:bg-[#282828] min-h-screen transition-colors duration-200 py-6'>
            <section className="max-w-7xl m-auto px-4 md:h-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {
                        degree?.map((program, programIndex) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: programIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className='p-6 shadow-sm hover:shadow-md rounded-2xl bg-[#FFFFFF] dark:bg-[#353535] border border-gray-100 dark:border-slate-700 transition-all duration-300' 
                                key={programIndex} 
                            >
                                <div className='flex gap-4 items-center mb-4'>
                                    <div className={`p-3 rounded-2xl ${program.programs_id === 1 ? 'bg-cyan-50 dark:bg-cyan-950/40 text-[#0a96a4] dark:text-cyan-400' : 'bg-blue-50 dark:bg-blue-950/40 text-[#277BC1] dark:text-blue-400'}`}>
                                        <SchoolIcon style={{ fontSize: '2.5rem' }} />
                                    </div>
                                    <div>
                                        <h1 className='country text-gray-800 dark:text-slate-100 md:text-xl text-lg font-bold'>{program.title}</h1>
                                        <h2 className='country md:text-base text-sm text-gray-600 dark:text-slate-300 mt-0.5'>{program.remark}</h2>
                                    </div>
                                </div>
                                <div className='space-y-3 pt-2'>
                                    {program.degrees.map((deg, index) => (
                                        <Link key={index} to={`/faculty/${deg.degrees_id}`} className="block">
                                            <motion.div 
                                                whileHover={{ y: -2, scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                transition={{ duration: 0.15 }}
                                                className={`group p-3 px-4 shadow-sm rounded-xl flex justify-between items-center w-full transition-shadow duration-200 cursor-pointer ${
                                                    program.programs_id === 1 ? 'bg-[#0a96a4] hover:bg-[#088390]' : 'bg-[#277BC1] hover:bg-[#1f649f]'
                                                }`}
                                            >
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-white country md:text-base text-sm font-medium'>{deg.degrees}</span>
                                                </div>
                                                <div className='flex items-center text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-200'>
                                                    <NavigateNextIcon />
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}