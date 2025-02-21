import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useActiveIndex } from "@/components/Nav/ActiveIndexContext.tsx";
import { cityDateData } from "@/data/slidesData.ts";
// import {  Navigation, Pagination } from "swiper/modules"; // 导入 Swiper 模块
// import { Swiper, SwiperSlide } from 'swiper/react'; // 导入 Swiper 组件和 SwiperSlide 组件
/*// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle"; // 导入 Swiper 的 CSS 文件*/

import SwiperCore from 'swiper';
import Shider from "@/components/Character/shider.tsx";
// import Shider from "@/components/Character/shider.tsx";



/*修改2*/
const CharacterDetail = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex
    const locations = useLocation();
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0); // 新增状态来管理当前选中的标签
    const [pageIndex, setPageIndex] = useState(0); // 新增状态来管理分页器的起始索引

    const { city } = useParams<{ city: string }>();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');

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
        setActiveIndex(2);
    }, [locations, setActiveIndex]);

    const cityDetail = cityDateData.find(c => c.id === city);

    useEffect(() => {
        if (cityDetail) {
            const detailIndex = parseInt(cat || '0', 10);
            setCurrentTab(detailIndex);
            setPageIndex(Math.floor(detailIndex / 6));
        }
    }, [cat, cityDetail]);

    if (!cityDetail) {
        return <div>城市数据未找到</div>;
    }

    const detailIndex = parseInt(cat || '0', 10);
    const detail = cityDetail.details[detailIndex];

    const handleTabClick = (index: number) => {
        setCurrentTab(index);
        navigate(`${location.pathname}?cat=${index}`);
    };

    const handleSlideChange = (swiper: SwiperCore) => {
        const newIndex = swiper.activeIndex;
        setCurrentTab(newIndex);
        if (newIndex < pageIndex * 6 || newIndex >= (pageIndex + 1) * 6) {
            setPageIndex(Math.floor(newIndex / 6));
        }
    };

    return (
        <div className="bg-pos-y-0 character relative w-full h-screen overflow-hidden text-[12px]">
            <div className="character__bg1 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bg})`}}/>
            <div className="character__bg2 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bgImg})`}}/>
            {/*时间轴*/}
            <ul className="absolute z-[9] top-0 left-0 w-[370px] h-full box-border pt-[187px] character__sidebar">
                {cityDateData.map((city, index) => (
                    <li key={index}
                        className={`w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider ${city.id === cityDetail.id ? 'character__city--active' : ''}`}>
                        <Link to={`${city.url}?cat=0`}
                              className="inline-block w-[40%] h-full text-[#fff] cursor-pointer">{city.name}</Link>
                    </li>
                ))}
                <li className="pointer-events-none w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider">敬请期待</li>
            </ul>
            <Shider />
        </div>
    );
};

export default CharacterDetail;




