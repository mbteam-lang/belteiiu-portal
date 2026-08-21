
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { useAcademicResearch } from '@/hooks/useAcademicResearch';
import usePageTitle from '@/hooks/usePageTitle';

export default function Academic_Categories() {
    usePageTitle('ការចុះឈ្មោះ', 'Admission');
    const { academicResearch, loading } = useAcademicResearch();
    return (
        <>
            <div className="grid grid-cols-1 md:gap-3 p-4 md:space-y-0 space-y-2 select-none">
                {loading ? (
                    Array.from({ length: 5 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-4 animate-pulse"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-200 rounded" />
                                <div className="h-4 w-32 bg-gray-200 rounded" />
                            </div>
                            <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        </div>
                    ))
                ) : (
                    academicResearch?.map((academic_research) => (
                        <Link key={academic_research.id} to={`/academic_faculties/${academic_research.id}#${hashLanguage}`} rel="noopener noreferrer" className="flex rounded-lg shadow-sm overflow-hidden">
                            <div className="bg-white flex items-center justify-center p-2 px-4">
                                <img
                                    src={academic_research.image}
                                    alt={academic_research.title}
                                    className="md:w-14 md:h-14 w-10 h-10 object-contain"
                                />
                            </div>
                            <div className="w-full flex items-center justify-between px-4 py-3" style={{ background: `linear-gradient(to right, ${academic_research.color})`, }}>
                                <span className="md:text-md text-md font-normal text-white">
                                    {academic_research.title}
                                </span>
                                <NavigateNextIcon className="text-white flex-shrink-0" />
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}
