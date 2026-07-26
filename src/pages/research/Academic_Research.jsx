import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useParams } from "react-router-dom";
import { useAcademicResearch } from '@/hooks/useAcademicResearch';
import { useAcademicFilter } from '@/hooks/useAcademicFilter';
import { getLanguage } from '@/services/languageService';
import NoData from "@/components/common/Nodata";
import usePageTitle from "@/hooks/usePageTitle";

export default function Academic_Research() {
    const { id } = useParams();
    usePageTitle('កិច្ចការស្រាវជ្រាវ' , 'Academic Research');
    const [search, setSearch] = useState("");
    const [majorId, setMajorId] = useState("");
    const [yearId, setYearId] = useState("");
    const [openFilter, setOpenFilter] = useState(false);

    const { academicResearch, loading,refetch } = useAcademicResearch(id);
    const { filters } = useAcademicFilter(id);
    const handleSearch = () => {
        refetch({
            faculty_id: id,
            query: search,
            year_id: yearId,
            major_id: majorId,
        });
    };

    const handleReset = () => {
        setMajorId("");
        setYearId("");
        setSearch("");
        refetch({ faculty_id: id });
        setOpenFilter(false);
    };

    const handleShowResult = () => {
        refetch({
            faculty_id: id,
            query: search,
            year_id: yearId,
            major_id: majorId,
        });
        setOpenFilter(false);
    };

    return (
        <div className="p-2 max-w-7xl m-auto md:px-5">
            <div className="flex items-center gap-2 mb-4 select-none">
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 border rounded-lg px-3 py-2 shadow-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    className="p-2 rounded-lg bg-gray-100 shadow text-red-500"
                    onClick={() => handleReset()}
                >
                    <RefreshIcon  />
                </button>
                <button
                    className="p-2 rounded-lg bg-gray-100 shadow text-[#0a96a4]"
                    onClick={() => setOpenFilter(true)}
                >
                    <FilterAltIcon />
                </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {loading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-white rounded-lg shadow-sm px-3 py-1 animate-pulse"
                        >
                            <div className="flex items-center w-full">
                                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>

                                <div className="flex-1 ml-3">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : academicResearch.length > 0 ? (
                    academicResearch.map((academics) => (
                        <div
                            key={academics.id}
                            onClick={() => window.open(academics.pdf, "_blank", "noopener,noreferrer")}
                            className="flex items-center justify-between bg-white rounded-lg shadow-sm px-3 py-1 cursor-pointer hover:bg-gray-50"
                        >
                            <div className="flex items-center">
                                <img src={academics.image} alt='404' className="w-16 rounded-md" />
                                <div className="w-full ml-3">
                                    <h1 className="md:text-base text-sm font-normal text-gray-800 line-clamp-2 text-left">
                                        {academics.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10">
                        <NoData/>
                    </div>
                )}
            </div>

            {openFilter && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-end justify-center z-50">
                    <div className="bg-white w-full rounded-t-2xl p-5 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
                            <button onClick={() => setOpenFilter(false)}>✕</button>
                        </div>

                        <label className="block mb-2 font-medium text-gray-500">Major</label>
                        <select
                            className="w-full border rounded-lg px-3 py-2 mb-4"
                            value={majorId}
                            onChange={(e) => setMajorId(e.target.value)}
                        >
                            <option value="">Select Major</option>
                            {filters.major?.map((m) => (
                                <option key={m.id} value={m.id}>{m.title}</option>
                            ))}
                        </select>

                        <label className="block mb-2 font-medium text-gray-500">Year</label>
                        <select
                            className="w-full border rounded-lg px-3 py-2 mb-6"
                            value={yearId}
                            onChange={(e) => setYearId(e.target.value)}
                        >
                            <option value="">Select Year</option>
                            {filters.year?.map((y) => (
                                <option key={y.id} value={y.id}>{y.title}</option>
                            ))}
                        </select>

                        <div className="flex justify-between items-center">
                            <button className="text-gray-500" onClick={handleReset}>
                                View all
                            </button>
                            <button
                                className="bg-teal-600 text-white px-4 py-2 rounded-lg"
                                onClick={handleShowResult}
                            >
                                Show Result
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}