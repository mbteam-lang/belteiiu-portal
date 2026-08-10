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
    </div>
);
}