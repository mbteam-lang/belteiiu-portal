import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo, useRef } from "react";
import { FaYoutube } from "react-icons/fa";
import pdfIcon from "../../../../assets/images/pdf.png";
import { getResponseMessage } from '@/utils/getResponseMessage';
import usePageTitle from '@/hooks/usePageTitle';
import { useExtraList } from '@/hooks/useExtraList';
import NoData from '@/components/common/Nodata';

export default function ExtraList() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const itemTitle = location.state?.title;
    const openedRef = useRef(false);
    const [filterYear, setFilterYear] = useState("");

    const { 
        data, 
        isGrouped, 
        years, 
        fileTitle, 
        fileLink, 
        noData, 
        loading, 
        currentLanguage 
    } = useExtraList(id);
    usePageTitle(itemTitle || 'កម្មវិធីសិក្សាបន្ថែម' , 'Main Extra');

    
    useEffect(() => {
        // open pdf
        if (!loading && data.length === 0 && fileLink) {
            if (!openedRef.current) {
                openedRef.current = true;
                window.open(fileLink, "_blank");
            }
            navigate('/biu/extra_program', { replace: true });
        }
        // check year
        if (years.length > 0) {
            setFilterYear(years[0]);
        }
    }, [data, fileLink, loading, navigate, years]);

    const filteredData = useMemo(() => {
        if (!filterYear) return data;
        if (isGrouped) {
            return data.map(group => ({
                ...group,
                items: (group.items || []).filter(item => item.year === filterYear)
            })).filter(group => group.items.length > 0);
        } else {
            return data.filter(item => item.year === filterYear);
        }
    }, [data, filterYear, isGrouped]);

    return (
        <div className="flex flex-col gap-2 md:gap-3 md:p-3 p-2 max-w-7xl m-auto">
            {fileLink && fileTitle && (
                <Link to={fileLink} target="_blank" className="flex-shrink-0">
                    <div className="flex items-center gap-4 p-2 bg-gray-200 rounded-lg w-full">
                        <img
                            src={pdfIcon}
                            alt="PDF"
                            className="w-14 h-14 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 overflow-hidden">
                            <h2 className="text-md md:text-lg font-medium text-gray-700 line-clamp-2">
                                {fileTitle}
                            </h2>
                        </div>
                    </div>
                </Link>
            )}

            {years.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    <button 
                        onClick={() => setFilterYear("")} 
                        className={`px-4 py-2 rounded ${!filterYear ? 'bg-[#0a96a4] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        {currentLanguage ? "ទាំងអស់" : "All"}
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setFilterYear(year)}
                            className={`px-4 py-2 rounded ${filterYear === year ? 'bg-[#0a96a4] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {currentLanguage ? `ឆ្នាំទី ${year}` : `Year ${year}`}
                        </button>
                    ))}
                </div>
            )}

            {loading && Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex border border-gray-200 bg-gray-50 rounded-r-lg animate-pulse">
                    <div className="w-[160px] h-[90px] bg-gray-300"></div>
                    <div className="flex-1 p-3 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                </div>
            ))}

            {!loading && !isGrouped && filteredData.map((item) => (
                <button 
                    key={item.id}
                    onClick={() => navigate(`/biu/extras-detail/${item.id}#${currentLanguage}`, { state: { title: itemTitle } })}
                    className="flex w-full border border-gray-200 bg-gray-50 rounded-lg hover:bg-gray-100 transition mb-1 text-left p-2" 
                >
                    <img 
                        src={item.image} 
                        className="w-[110px] h-[70px] md:w-[160px] md:h-[90px] flex-shrink-0 object-cover" 
                        alt=""
                    />
                    <div className="flex flex-col justify-start items-start px-3 py-1 text-left w-full overflow-hidden">
                        <p className="font-medium text-gray-600 text-md md:text-lg leading-tight line-clamp-1 w-full text-left">
                            {item.title}
                        </p>
                        {item.description && (
                            <p className="text-sm md:text-md text-gray-600 leading-snug line-clamp-2 mt-1 w-full text-left">
                                {item.description}
                            </p>
                        )}
                    </div>
                </button>
            ))}

            {!loading && isGrouped && filteredData.map((group) => (
                <div key={group.id} className="mt-3">
                    <h1 className={`mx-auto text-white font-semibold md:w-[320px] w-[245px] md:h-[50px] h-[35px] overflow-hidden flex items-center justify-center text-[13px] md:text-lg rounded-[50%] mb-6 ${
                        group.id === 1 ? "bg-[#0a96a4]" : group.id === 2 ? "bg-red-500" : "bg-[#0a96a4]"
                    }`}>
                        {group.program}{group.id === 1 ? " (IP)" : " (NP)"}
                    </h1>
                    {group.items?.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => navigate(`/biu/extras-detail/${item.id}#${currentLanguage}`, { state: { title: item.title } })}
                            className="flex w-full border border-gray-200 bg-gray-50 rounded-lg hover:bg-gray-100 transition mb-2"
                        >
                            <div className="relative flex-shrink-0 p-1">
                                <img src={item.image} className="w-[130px] h-[80px] md:w-[160px] md:h-[90px] flex-shrink-0 object-cover rounded" alt=""/>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaYoutube className="text-red-600 text-3xl md:text-4xl drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-3">
                                <p className="font-medium text-gray-600 line-clamp-3 text-[14px] md:text-lg">
                                    {item.title}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            ))}

            {!loading && noData && (
                <NoData/>
            )}
        </div>
    );
}