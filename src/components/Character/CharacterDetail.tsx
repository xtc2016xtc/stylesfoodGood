import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useActiveIndex } from "@/components/Nav/ActiveIndexContext.tsx";
import { cityData } from "@/data/slidesData.ts";

const CharacterDetail = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex
    const locations = useLocation();

    useEffect(() => {
        const storedActiveIndex = sessionStorage.getItem('activeIndex');
        if (storedActiveIndex) {
            setActiveIndex(parseInt(storedActiveIndex, 10));
        } else {
            setActiveIndex(2);
            sessionStorage.setItem('activeIndex', '2');
        }
    }, [setActiveIndex]);

    useEffect(() => {
        setActiveIndex(2)
    }, [locations, setActiveIndex]);

    const { city } = useParams<{ city: string }>();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');

    const cityDetail = cityData.find(c => c.id === city);

    if (!cityDetail) {
        return <div>城市数据未找到</div>;
    }

    const detailIndex = parseInt(cat || '0', 10);
    const detail = cityDetail.details[detailIndex];

    return (
        <div className="character-detail p-4">
            <h1>{detail.content} 详情</h1>
        </div>
    );
};

export default CharacterDetail;