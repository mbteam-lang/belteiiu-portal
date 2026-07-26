import React, { useState, useRef } from 'react';
import { Search, Sun, Moon, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import elearing from '@/assets/images/e-learning.png';
import { useSearch } from '@/hooks/useSearch';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'dark');
    const searchRef = useRef(null);
    const {searchResults} = useSearch();
    const sourceCourses = searchResults.length > 0 ? [...searchResults] : [];
    const filteredResults = sourceCourses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())
    );

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode ? 'dark' : 'light');
        window.dispatchEvent(new Event('storage'));
    };
    
    

    return (
        <nav className={`top-0 z-[110] border-b transition-colors duration-300 md:p-2 p-1 ${
            darkMode ? 'bg-[#121212] border-white/10' : 'bg-white border-gray-100'
        }`}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-8 ">
                
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                    <img src={elearing} alt="Logo" className='h-5 md:h-16' />
                </Link>

                {/* SEARCH BAR */}
                <div className="relative flex-1 max-w-2xl" ref={searchRef}>
                    <div className={`
                        relative flex items-center w-full 
                        px-4 md:px-4 py-1 md:py-2 
                        border rounded-full transition-all duration-300
                        ${darkMode 
                            ? 'bg-[#1e1e1e] border-white/10 focus-within:border-cyan-500/50' 
                            : 'bg-[#f8fafb] border-gray-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10 focus-within:border-cyan-500/50'
                        }
                        `}>
                            <Search className="text-gray-400 flex-shrink-0" size={18} />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
                                onFocus={() => setIsOpen(true)}
                                placeholder="Search courses..."
                                className={`
                                    w-full bg-transparent border-none outline-none ring-0
                                    focus:outline-none focus:border-none focus:ring-0
                                    px-3 py-1
                                    text-sm md:text-base 
                                    placeholder:text-gray-400
                                    ${darkMode ? 'text-white' : 'text-gray-800'}
                                `}
                            />

                            {query && (
                                <button onClick={() => setQuery('')} className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                    {/* DROPDOWN - Fixed Positioning for Mobile/Desktop overlapping */}
                    {isOpen && query.trim() !== '' && (
                        <div className={`absolute top-full left-0 w-full mt-2 rounded-2xl shadow-2xl border overflow-hidden z-[999] ${
                            darkMode ? 'bg-[#1e1e1e] border-white/10' : 'bg-white border-gray-100'
                        }`}>
                            <div className="max-h-[350px] overflow-y-auto p-2">
                                {filteredResults.length > 0 ? filteredResults.map((course) => (
                                    <Link key={course.id} to={`/lessons/${course.id}`} 
                                    onClick={() => {
                                        console.log('Navigating to course:', course.id);
                                        setIsOpen(false); 
                                        setQuery('');
                                    }}
                                        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${darkMode ? 'hover:bg-white/5' : 'hover:bg-cyan-50'}`}>
                                        <img src={course.thumbnail} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" alt="" />
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-semibold truncate ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{course.title}</p>
                                            <p className="text-xs text-gray-500">{course.faculty}</p>
                                        </div>
                                        <ChevronRight size={14} className="text-gray-300" />
                                    </Link>
                                )) : <p className="p-4 text-center text-sm text-gray-400">No results found</p>}
                            </div>
                        </div>
                    )}
                </div>

                {/* THEME TOGGLE (Uncommented for testing if needed) */}
                <div className="items-center gap-4 md:show hidden">
                    <button onClick={toggleDarkMode} className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-white/5 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}>
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default SearchComponent;