import {Link, useLocation, useParams} from 'react-router-dom';
import { useActiveIndex } from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect, useState} from "react";
import {latestData} from '@/data/slidesData'
import DeatailDl from "@/components/News/detail/DeatailDl.tsx"; // 导入虚拟数据

// 定义 Detail 组件
const Detail = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex
    const [showBackToTop, setShowBackToTop] = useState(false); // 定义状态来控制按钮显示
    const location = useLocation();

    useEffect(() => {
        const storedActiveIndex = sessionStorage.getItem('activeIndex');
        if (storedActiveIndex) {
            setActiveIndex(parseInt(storedActiveIndex, 10));
        } else {
            setActiveIndex(1); // 手动设置 activeIndex 为 1
            sessionStorage.setItem('activeIndex', '1');
        }
    }, [setActiveIndex]);

    useEffect(() => {
        console.log('Current activeIndex:', sessionStorage.getItem('activeIndex'));
        console.log('Current location:', location.pathname);
        setActiveIndex(1)
    }, [location, setActiveIndex]);


    const { id } = useParams<{ id: string }>(); // 获取 URL 参数
    const slide = latestData.find((slide) => slide.id === id); // 根据 URL 参数查找相应的详情数据

    useEffect(() => {
        if (!slide) {
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            // 当页面滑动到三分之一时显示按钮
            if (scrollPosition > documentHeight / 3) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [slide]);

    if (!slide) {
        return null;
    }

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 获取相关的列表数据（例如，排除当前的 slide）
    /*const relatedList = slidesData.filter((item) => item.id !== slide.id);*/

    // 获取相关的列表数据（例如，排除当前的 slide）
    // const relatedList = slidesData
    //     .filter((item) => item.id !== slide.id)
    //     .map((item) => ({
    //         alt: item.alt,
    //         timestamp: item.timestamp || '',
    //         url: item.url,
    //         image: item.image,
    //     }));

   /* const startId = "127773"

    /!*指定id*!/
    // 获取相关的列表数据（例如，排除当前的 slide）
    const relatedList = slidesData
        .filter((item) => item.id !== slide.id && item.id >= startId) // 过滤出 id 大于等于 startId 的数据
        .map((item) => ({
            alt: item.alt,
            timestamp: item.timestamp || '', // 确保 timestamp 始终是字符串
            url: item.url,
            image: item.image,
        }));*/

    // 获取相关的列表数据（例如，排除当前的 slide）
    const startId = "773"; // 指定起始 id
    const relatedList = latestData
        .filter((item) => item.id >= startId)// 过滤出 id 大于等于 startId 的数据
        .slice(0,5)
        .map((item) => ({
            alt: item.alt,
            timestamp: item.timestamp || '', // 确保 timestamp 始终是字符串
            url: item.url,
            image: item.image,
        }));

    if(!relatedList){
        return null
    }


    return (
        <div className="news_detail bg-pos-y-0">
            <div className="flex justify-center items-start relative w-full pt-[66px] pb-[210px]">
                <div className="relative w-[900px] min-h-[390px]">
                    <div className="flex justify-between mt-[80px] w-full h-[50px] align-top">
                        <div className="flex justify-center items-center text-[16px] h-[18px] leading-[18px]">
                            {slide.breadcrumbs.map((breadcrumb, index) => (
                                <span key={index}>
                                    <Link to={breadcrumb.url} className="text-[gray] text-decoration-none hover:text-white">
                                        {breadcrumb.name}
                                    </Link>
                                    {index < slide.breadcrumbs.length - 1 && (
                                        <span className="inline-block w-[24px] text-[#aaa] text-center">{'>'}</span>
                                    )}
                                </span>
                            ))}
                            {/*<Link to={"/main/"} className="text-[gray] text-decoration-none hover:text-white">
                                首页
                            </Link>
                            <span className="inline-block w-[24px] text-[#aaa] text-center">{'>'}</span>
                            <Link to={"/main/news"} className="text-[gray] text-decoration-none hover:text-white">
                                新闻
                            </Link>
                            <span className="inline-block w-[24px] text-[#aaa] text-center">{'>'}</span>
                            <Link to={"/main/news/720"} className="text-[gray] text-decoration-none hover:text-white">
                                新闻
                            </Link>*/}
                            <span className="inline-block w-[24px] text-[#aaa] text-center">{'>'}</span>
                            <span className="inline-block text-[#cfcfcf] leading-[30px] max-w-[550px] hover:text-white">{slide.alt}</span>
                        </div>
                        <Link to={'/main/news'} className="w-[138px] text-[#ccc] text-decoration-none hover:text-white text-right text-[16px]">
                            返回新闻列表
                        </Link>
                    </div>
                    <div className="min-h-[0px] cate relative bg-[#f0f0f0] text-[0] px-[90px] pt-[79px] pb-[115px]">
                        <div className="leading-[40px] text-[32px] text-[#333]">{slide.alt}</div>
                        {slide.timestamp ? (
                            <div
                                className="mt-[13px] text-[16px] leading-[22px] text-[#999]">发布时间 {new Date(slide.timestamp).toLocaleDateString('zh-CN')}</div>
                        ) : (
                            <></>
                        )}
                        <div className="mt-[51px] text-[14px] text-[#7d7d7d] leading-[24px] flex flex-col">
                            <div className="whitespace-pre-wrap min-h-[1.5em] text-center detail7 max-w-[720px]">
                                <video
                                    src={slide.videoSrc}
                                    className="w-[800px] align-middle videsss detail7"
                                    title-={slide.alt}
                                    controls
                                    controlsList="nodownload"
                                    poster={slide.image}
                                    webkit-playsinline="true"
                                    playsInline={true}
                                />
                            </div>
                            <div className="whitespace-pre-wrap min-h-[1.5em] text-center detail7 max-w-[720px]" />
                            {slide.content.map((item, index) => (
                                <div key={index}>
                                    {typeof item === 'string' ? (
                                        <p className="whitespace-pre-wrap">{item}</p>
                                    ) : (
                                        <div className="whitespace-pre-wrap min-h-[1.5em] text-center detail7 max-w-[720px]" />
                                    )}
                                </div>
                            ))}
                            <div className="whitespace-pre-wrap  detail7 max-w-[720px]">
                                <br className="detail7"/>
                                <br className="detail7"/>
                                关于 《产品》
                                <div className="whitespace-pre-wrap  detail7 max-w-[720px] text-start">
                                    <br className="detail7"/>
                                    《原神》是由米哈游自研的一款开放世界冒险RPG。你将在游戏中探索一个被称作「提瓦特」的幻想世界。
                                    <br className="detail7"/>
                                    在这广阔的世界中，你可以踏遍七国，邂逅性格各异、能力独特的同伴，与他们一同对抗强敌，踏上寻回血亲之路；也可以不带目的地漫游，沉浸在充满生机的世界里，让好奇心驱使自己发掘各个角落的奥秘……直到你与分离的血亲重聚，在终点见证一切事物的沉淀。《原神》现已登录PS平台、iOS、Android、PC平台，并支持移动端、PC端以及PS平台数据互通，旅行者可自由选择平台和设备开启冒险。
                                </div>
                            </div>
                        </div>
                        {/*按钮*/}
                        <div className="absolute left-[50%] bottom-[41px] flex justify-between w-[721px] mx-0 mt-[24px] mb-0 translate-x-[-50%] select-none">
                            {slide.buttons.map((button, index) => (
                                <Link key={index} to={button.url} className={`w-[70px] h-[44px] buttombarr rounded-[4px] opacity-80 text-center text-[16px] text-[#ccc] cursor-pointer text-decoration-none ${index === 0 ? 'rotate-[180deg]' : ''}`} />
                            ))}
                            {/*<Link to={'/main/news/detail/127515'} className="rotate-[180deg] w-[70px] h-[44px] buttombarr rounded-[4px] opacity-80 text-center text-[16px] text-[#ccc] cursor-pointer text-decoration-none"/>
                            <Link to={'/main/news/detail/127773'} className="w-[70px] h-[44px] buttombarr rounded-[4px] opacity-80 text-center text-[16px] text-[#ccc] cursor-pointer text-decoration-none"/>*/}
                        </div>
                    </div>
                </div>
                <DeatailDl relatedList={relatedList}/>
                {showBackToTop && (
                    <button
                        onClick={handleBackToTop}
                        title="回到顶部"
                        className="backTop opacity-100 cursor-pointer fixed w-[60px] h-[60px] rounded-[4px] z-[999] right-[54px] bottom-[108px]"
                    />
                )}
            </div>
        </div>
    );
};

export default Detail; // 导出 Detail 组件