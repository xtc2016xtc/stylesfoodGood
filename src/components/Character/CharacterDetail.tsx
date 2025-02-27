import {Link, useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import { useActiveIndex } from "@/components/Nav/ActiveIndexContext.tsx";
import { cityDateData } from "@/data/slidesData.ts";
import Shider from "@/components/Character/shider.tsx";
import {Details} from "@/types";
import ProgressBar from "@/components/home/ProgressBar/ProgressBar.tsx";

/*修改2*/
const CharacterDetail = () => {
    const { setActiveIndex } = useActiveIndex(); /*使用上下文设置 activeIndex*/
    const { city } = useParams<{ city: string }>();
    const [loading, setLoading] = useState(false); // 加载状态
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
        setLoading(true); // 开始加载
        setActiveIndex(2);
        setTimeout(() => {
            setLoading(false); // 停止加载
        }, 1000); // 模拟加载时间
    }, [location, setActiveIndex]);

    const cityDetail = cityDateData.find(c => c.id === city);

    useEffect(() => {

    }, [cat, cityDetail]);


    if (!cityDetail) {
        return <div>城市数据未找到</div>;
    }


    const cityDate: Details[] = cityDetail.Details;

    return (
        <div className="bg-pos-y-0 character relative w-full h-screen overflow-hidden text-[12px]">
            <div className="character__bg1 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bg})`}}/>
            <div className="character__bg2 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bgImg})`}}/>
            {/*时间轴*/}
            <ul className="absolute z-[9] top-0 left-0 w-[370px] h-full box-border pt-[187px] character__sidebar">
                {loading && <div className="loader"><ProgressBar/></div>} {/* 显示加载器 */}
                {cityDateData.map((city, index) => (
                    <li key={index}
                        className={`w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider ${city.id === cityDetail.id ? 'character__city--active' : ''}`}>
                        <Link to={`${city.url}?cat=0`}
                              className="inline-block w-[40%] h-full text-[#fff] cursor-pointer">
                            {city.name}
                        </Link>
                    </li>
                ))}
                <li className="pointer-events-none w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider">敬请期待</li>
            </ul>
            <Shider
                cityDetail={cityDate}
          />
        </div>
    );
};

export default CharacterDetail;




