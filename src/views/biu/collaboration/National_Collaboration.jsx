import usePageTitle from '@/hooks/usePageTitle';
import { useCollaboration } from '@/hooks/useCollaboration';
import NoData from '@/components/common/Nodata';

export default function NationalCollaboration() {
    usePageTitle('កិច្ចសហប្រតិបត្តិការជាតិ', 'National Collaboration');
    const { collaboration, loading } = useCollaboration(1);
    return (
        <div className="py-6 min-h-screen max-w-7xl m-auto">
            <section className="container mx-auto md:px-4 px-2 max-w-2xl">
                <div className="space-y-6">
                {loading && (
                    Array.from({ length: 2 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3 animate-pulse mt-3"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-24 h-12 bg-gray-200 rounded" />
                                <div className="h-4 w-32 bg-gray-200 rounded" />
                            </div>
                            <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        </div>
                    ))
                )}
                {!loading && collaboration.length===0 &&(
                    <NoData/>
                )}
                {((collaboration || []).map((country, countryIdx) => (
                    <div key={country.id || countryIdx} className="space-y-2">
                        <div className="bg-[#0a96a4] text-white rounded-lg p-4 flex items-center shadow-sm">
                            {country.image && (
                                <img
                                    src={country.image}
                                    alt={country.country}
                                    className="w-12 h-8 object-cover rounded mr-4"
                                />
                            )}
                            <h2 className="text-xl font-semibold tracking-wide">
                                {country.country}
                            </h2>
                        </div>
                        
                        <div className="space-y-1 lg:space-y-2">
                        {(country.collaborations || []).map((item, idx) => {
                            return (
                            <div 
                                key={item.id || idx} 
                                className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-100 hover:border-gray-200 hover:bg-gray-50/40 transition-all duration-200 group"
                            >
                                <div className="flex items-center min-w-0 flex-1 mr-4">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-lg flex items-center justify-center p-1.5 border border-gray-100 mr-3 sm:mr-4">
                                        <img
                                            src={item.logo}
                                            alt={item.title || "logo"}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <a
                                            href={item.link || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="no-underline inline-block text-gray-700 hover:text-blue-800"
                                        >
                                            <h3 className="text-[13px] md:text-lg font-medium leading-tight">
                                                {item.title}
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                                {item.image && (
                                    <div className="flex-shrink-0 w-16 md:w-24 md:h-16 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                                        <img
                                            src={item.image}
                                            alt="Colab preview"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    ))
                )}
                </div>
            </section>
        </div>
    );
}