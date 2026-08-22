
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useDegree } from '@/hooks/useDegree';

export default function Degree() {
    usePageTitle('កម្មវិធីសិក្សា', 'Degree');
    const { degree, loading } = useDegree();

    return (
        <div className='bg-[#F5F5F5] dark:bg-[#282828] min-h-screen transition-colors duration-200'>
            <div className='h-5'></div>
            <section className="lg:max-w-7xl m-auto px-2 md:h-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-5'>
                    {
                        degree?.map((program, programIndex) => (
                            <div className='mb-4 p-4 shadow rounded-xl bg-[#FFFFFF] dark:bg-[#353535] border border-gray-100 dark:border-slate-700' key={programIndex} >
                                <div className='flex gap-3'>
                                    <SchoolIcon style={{ fontSize: '3rem' }} className={`${program.programs_id === 1 ? 'text-[#0a96a4] dark:text-cyan-400' : 'text-[#277BC1] dark:text-blue-400'}`} />
                                    <div>
                                        <h1 className='country text-gray-800 dark:text-slate-100 md:text-lg text-md font-bold'>{program.title}</h1>
                                        <h1 className='country md:text-lg text-md text-gray-800 dark:text-white'>{program.remark}</h1>
                                    </div>
                                </div>
                                <div>
                                    {program.degrees.map((degree, index) => (
                                        <Link key={index} to={`/faculty/${degree.degrees_id}`}>
                                            <button className={`md:p-2 px-2 mt-3 py-2 shadow rounded-md flex justify-between w-full ${program.programs_id === 1 ? 'bg-[#0a96a4]' : 'bg-[#277BC1]'}`}>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-white country md:text-lg text-md'>{degree.degrees}</span>
                                                </div>
                                                <div className='flex items-center text-white'>
                                                    <NavigateNextIcon />
                                                </div>
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}
