import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useActiveIndex } from "@/components/Nav/ActiveIndexContext.tsx";
import { cityData } from "@/data/slidesData.ts";
import {  Navigation, Pagination } from "swiper/modules"; // 导入 Swiper 模块
import { Swiper, SwiperSlide } from 'swiper/react'; // 导入 Swiper 组件和 SwiperSlide 组件
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle"; // 导入 Swiper 的 CSS 文件

import SwiperCore from 'swiper';

/*初版本*/
/*const CharacterDetail = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex
    const locations = useLocation();
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0); // 新增状态来管理当前选中的标签
    const [pageIndex, setPageIndex] = useState(0); // 新增状态来管理分页器的起始索引
    const [isAnimating, setIsAnimating] = useState(false); // 新增状态来管理动画

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

    const handlePrevTab = () => {
        if (isAnimating || pageIndex === 0) return;
        setIsAnimating(true);
        setPageIndex((prevIndex) => prevIndex - 1);
        setTimeout(() => setIsAnimating(false), 300); // 动画持续时间
    };

    const handleNextTab = () => {
        if (isAnimating || pageIndex === Math.ceil(cityDetail.details.length / 6) - 1) return;
        setIsAnimating(true);
        setPageIndex((prevIndex) => prevIndex + 1);
        setTimeout(() => setIsAnimating(false), 300); // 动画持续时间
    };

    const handleTabClick = (index: number) => {
        setCurrentTab(index);
        navigate(`${location.pathname}?cat=${index}`);
    };

    return (
        <div className="bg-pos-y-0 character relative w-full h-screen overflow-hidden text-[12px]">
            <div className="character__bg1 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bg})`}}/>
            <div className="character__bg2 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bgImg})`}}/>
            {/!*时间轴*!/}
            <ul className="absolute z-[9] top-0 left-0 w-[370px] h-full box-border pt-[187px] character__sidebar">
                {cityData.map((city, index) => (
                    <li key={index}
                        className={`w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider ${city.id === cityDetail.id ? 'character__city--active' : ''}`}>
                        <Link to={`${city.url}?cat=0`}
                              className="inline-block w-[40%] h-full text-[#fff] cursor-pointer">{city.name}</Link>
                    </li>
                ))}
                <li className="pointer-events-none w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider">敬请期待</li>
            </ul>
            {/!*详情页内容*!/}
            <div className="city_shider_img relative w-full h-full">
                <div className="text-center">
                    <h1>{detail.content}</h1>
                    <img src={cityDetail.details[currentTab].image} alt={cityDetail.details[currentTab].alt}
                         className="mx-auto"/>
                    <p>{cityDetail.details[currentTab].content}</p>
                </div>
            </div>
            {/!*分页器*!/}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 w-full justify-center">
                <button onClick={handlePrevTab}
                        className={`bg-gray-800 text-white px-4 py-2 ${pageIndex === 0 ? 'bg-yellow-500 cursor-not-allowed' : ''}`}>上一页
                </button>
                <div className="overflow-hidden w-[660px]">
                    <div className={`flex transition-transform duration-300 ${isAnimating ? 'transform' : ''}`}
                         style={{transform: `translateX(-${pageIndex * (108 + 14) * 6}px)`}}>
                        {cityDetail.details.map((detail, index) => (
                            <div key={index} className={`w-[110px] h-[132px] mx-[9px] flex-shrink-0 ${currentTab === index ? 'border border-white' : ''}`}
                                 onClick={() => handleTabClick(index)}>
                                <img src={detail.image} alt={detail.alt} className="w-full h-[106px] object-cover"/>
                                <p className="text-center">{detail.alt}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNextTab}
                        className={`bg-gray-800 text-white px-4 py-2 ${pageIndex === Math.ceil(cityDetail.details.length / 6) - 1 ? 'bg-yellow-500 cursor-not-allowed' : ''}`}>下一页
                </button>
            </div>
        </div>
    );
};

export default CharacterDetail;*/

/*修改1*/
/*const CharacterDetail = () => {
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

    const cityDetail = cityData.find(c => c.id === city);

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
            {/!*时间轴*!/}
            <ul className="absolute z-[9] top-0 left-0 w-[370px] h-full box-border pt-[187px] character__sidebar">
                {cityData.map((city, index) => (
                    <li key={index}
                        className={`w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider ${city.id === cityDetail.id ? 'character__city--active' : ''}`}>
                        <Link to={`${city.url}?cat=0`}
                              className="inline-block w-[40%] h-full text-[#fff] cursor-pointer">{city.name}</Link>
                    </li>
                ))}
                <li className="pointer-events-none w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider">敬请期待</li>
            </ul>
            {/!*详情页内容*!/}
            <div className="city_shider_img relative w-full h-full">
                <div className="text-center">
                    <h1>{detail.content}</h1>
                    <img src={cityDetail.details[currentTab].image} alt={cityDetail.details[currentTab].alt}
                         className="mx-auto"/>
                    <p>{cityDetail.details[currentTab].content}</p>
                </div>
            </div>
            {/!*分页器*!/}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 w-[800px] justify-center">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={6}
                    navigation={true}
                    pagination={false}
                    onSlideChange={handleSlideChange}
                    initialSlide={detailIndex}
                >
                    {cityDetail.details.map((detail, index) => (
                        <SwiperSlide key={index} onClick={() => handleTabClick(index)}>
                            <div className={`w-[110px] h-[132px] mx-[9px] flex-shrink-0 ${currentTab === index ? 'border border-white' : ''}`}>
                                <img src={detail.image} alt={detail.alt} className="w-full h-[106px] object-cover"/>
                                <p className="text-center">{detail.alt}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CharacterDetail;*/

/*修改2*/
/*const CharacterDetail = () => {
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

    const cityDetail = cityData.find(c => c.id === city);

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
            {/!*时间轴*!/}
            <ul className="absolute z-[9] top-0 left-0 w-[370px] h-full box-border pt-[187px] character__sidebar">
                {cityData.map((city, index) => (
                    <li key={index}
                        className={`w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider ${city.id === cityDetail.id ? 'character__city--active' : ''}`}>
                        <Link to={`${city.url}?cat=0`}
                              className="inline-block w-[40%] h-full text-[#fff] cursor-pointer">{city.name}</Link>
                    </li>
                ))}
                <li className="pointer-events-none w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider">敬请期待</li>
            </ul>
            {/!*详情页内容*!/}
            <div className="city_shider_img relative w-full h-full">
                <div className="text-center">
                    <h1>{detail.content}</h1>
                    <img src={cityDetail.details[currentTab].image} alt={cityDetail.details[currentTab].alt}
                         className="mx-auto"/>
                    <p>{cityDetail.details[currentTab].content}</p>
                </div>
            </div>
            {/!*分页器*!/}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 w-[800px] justify-center">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={6}
                    navigation={true}
                    pagination={false}
                    onSlideChange={handleSlideChange}
                    initialSlide={detailIndex}
                >
                    {cityDetail.details.map((detail, index) => (
                        <SwiperSlide key={index} onClick={() => handleTabClick(index)}>
                            <div className={`w-[110px] h-[132px] mx-[9px] flex-shrink-0 ${currentTab === index ? 'border border-white' : ''}`}>
                                <img src={detail.image} alt={detail.alt} className="w-full h-[106px] object-cover"/>
                                <p className="text-center">{detail.alt}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CharacterDetail;*/

/*修改3*/
const CharacterDetail = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex
    const locations = useLocation();
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0); // 新增状态来管理当前选中的标签

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

    const cityDetail = cityData.find(c => c.id === city);

    useEffect(() => {
        if (cityDetail) {
            const detailIndex = parseInt(cat || '0', 10);
            setCurrentTab(detailIndex);
        }
    }, [cat, cityDetail]);

    if (!cityDetail) {
        return <div>城市数据未找到</div>;
    }

    const detailIndex = parseInt(cat || '0', 10);

    const handleTabClick = (index: number) => {
        setCurrentTab(index);
        navigate(`${location.pathname}?cat=${index}`);
    };

    const handleSlideChange = (swiper: SwiperCore) => {
        const newIndex = swiper.activeIndex;
        setCurrentTab(newIndex);
    };

    return (
        <div className="bg-pos-y-0 character relative w-full h-screen overflow-hidden text-[12px]">
            <div className="character__bg1 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bg})`}}/>
            <div className="character__bg2 absolute top-0 right-0 bottom-0 left-0 bg-pos-cen bg-cover origin-center"
                 style={{backgroundImage: `url(${cityDetail.bgImg})`}}/>
            {/*时间轴*/}
            <ul className="absolute z-[9] top-0 left-0 w-[370px] h-full box-border pt-[187px] character__sidebar">
                {cityData.map((city, index) => (
                    <li key={index}
                        className={`w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider ${city.id === cityDetail.id ? 'character__city--active' : ''}`}>
                        <Link to={`${city.url}?cat=0`}
                              className="inline-block w-[40%] h-full text-[#fff] cursor-pointer">{city.name}</Link>
                    </li>
                ))}
                <li className="pointer-events-none w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider">敬请期待</li>
            </ul>
            {/*详情页内容*/}
            <div className="city_shider_img relative w-full h-full">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    pagination={{ clickable: true, renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>` }}
                    onSlideChange={handleSlideChange}
                    initialSlide={detailIndex}
                >
                    {cityDetail.details.map((detail, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center">
                                <h1>{detail.content}</h1>
                                <img src={detail.image} alt={detail.alt} className="mx-auto"/>
                                <p>{detail.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/*分页器*/}
            <div className="z-[999] absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 w-[800px] justify-center">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={6}
                    navigation={true}
                    pagination={false}
                    onSlideChange={handleSlideChange}
                    initialSlide={detailIndex}
                >
                    {cityDetail.details.map((detail, index) => (
                        <SwiperSlide key={index} onClick={() => handleTabClick(index)}>
                            <div className={`w-[110px] h-[132px] mx-[9px] flex-shrink-0 ${currentTab === index ? 'border border-white' : ''}`}>
                                <img src={detail.image} alt={detail.alt} className="w-full h-[106px] object-cover"/>
                                <p className="text-center">{detail.alt}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CharacterDetail;


