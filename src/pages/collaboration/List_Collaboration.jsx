import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useCollaboration } from '@/hooks/useCollaborationType';
import NoData from '@/components/common/Nodata';
import ListCard from "@/components/common/Card";

export default function List_Collaboration() {
    usePageTitle('កិច្ចសហប្រតិបត្តិការ', 'Collaboration');
    const { typeList , loading } = useCollaboration(); // Added fallback empty array just in case
   
    return (
    <div className="w-full px-4 pt-6">
        {loading ? (
            Array.from({ length: 2 }).map((_, idx) => (
                <div
                    key={idx}
                    className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 md:py-3 py-2 animate-pulse max-w-7xl mx-auto mb-3"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-200 rounded" />
                        <div className="h-4 w-32 bg-gray-200 rounded" />
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                </div>
            ))
        ) : (
            <div className="grid grid-cols-1 md:gap-2 max-w-7xl mx-auto">
                {typeList?.length === 0 ? (
                    <NoData />
                ) : (
                    typeList.map((items) => (
                        <Link
                            key={items.id}
                            to={items.url}
                            className="block"
                        >
                            <ListCard
                                images={items.image}
                                title={items.title}
                            />
                        </Link>
                    ))
                )}
            </div>
        )}
    </div>
);
}