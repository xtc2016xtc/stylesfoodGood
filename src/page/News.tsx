import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect, useState} from "react";
import {announcementData, eventData, latestData, latestDate, newsData} from "@/data/slidesData.ts";
import {Link, useParams} from "react-router-dom";

const News = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex
    const [showBackToTop, setShowBackToTop] = useState(false); // 定义状态来控制按钮显示
    const [activeTab, setActiveTab] = useState('773');
    const { id } = useParams();
    const [visibleItems, setVisibleItems] = useState(4); // 控制可见项目的数量
    const [loading, setLoading] = useState(false); // 控制加载状态

    useEffect(() => {
        setActiveIndex(1); // 手动设置 activeIndex 为 2

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition > documentHeight / 5) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActiveIndex,id]);

    useEffect(() => {
        if(id) {
            setActiveTab(id)
        }
    }, [id]);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleItems(prevVisibleItems => prevVisibleItems + 1); // 每次加载 5 个项目
            setLoading(false);
        }, 1000); // 模拟加载时间
    };

    const tabsData = [
        { label: '最新', data: latestData, id: '773' },
        { label: '新闻', data: newsData, id: '774' },
        { label: '公告', data: announcementData, id: '775' },
        { label: '活动', data: eventData, id: '776'},
    ];

    const currentTabData = tabsData.find(tab => tab.id === activeTab);


    return (
        <div className="bg-pos-y-0 News relative w-full bg-[#f0f0f0] overflow-hidden">
            <div className="relative z-[2] w-[1280px] left-[50%] ml-[-640px] min-h-[1240px] pb-[208px]">
                <ul className="flex justify-between pt-[146px] w-full h-[700px] list-none">
                    {latestDate.map(tab => (
                        <li key={tab.id} title={tab.id} className="rec_item opacity-90 relative w-[420px] h-[450px]">
                                <Link to={tab.url} className="ellipsis relative z-[1] inline-block w-full h-full
                                text-[24px] text-[#393b40] text-decoration-none overflow-hidden">
                                    <div className="w-[380px] h-[190px] my-[20px] mx-auto overflow-hidden">
                                        <img src={tab.image} alt={tab.alt} className="w-full h-full object-cover recommend__item——img hover:opacity-100 hover:scale-[1.2]"/>
                                    </div>
                                    <div className="text-[24px] font-text_items leading-[34px] text-[#fefefe] px-[17px] py-0 overflow-hidden max-h-[70px]">
                                        {tab.alt}
                                    </div>
                                    <p className="font-text_item"/>
                                </Link>
                            <div className="flex justify-between absolute left-0 bottom-[15px] w-full box-border py-0 px-[20px]">
                                {tab.timestamp ? (
                                    <span className="text-[16px] leading-[22px] inline-block text-[gray]">{new Date(tab.timestamp).toLocaleDateString('zh-CN')}</span>
                                ) : (
                                    <></>
                                )}
                                <span className="text-[#ffc000] text-decoration-none text-[16px] leading-[22px]">新闻</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="mt-[38px] list-none">
                    {tabsData.map(tab => (
                        <li key={tab.id} className={activeTab === tab.id ? 'category__item category__item-active' : 'category__item'}>
                            <Link to={`/main/news/${tab.id}`} className="category__link" onClick={() => setActiveTab(tab.id)}>
                                {tab.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="mt-[38px] list-none h-auto transition-allProps">
                    {currentTabData?.data.slice(0, visibleItems).map((item, index) => (
                        <li key={index}
                            className="border-l-[#ffc000] relative min-h-[170px] bg-[#fafafa] py-[15px] px-[20px] mb-[10px] rounded-[4px] news__itemsRR">
                            <Link to={item.url}
                                  className="flex relative z-[1] w-full h-full text-[24px] text-[#393b40] text-decoration-none overflow-hidden ellipsis">
                                <img src={item.image} alt={item.alt}
                                     className="w-[265px] h-[140px] mr-[20px] object-cover"/>
                                <div className="w-[calc(100%-285px)]">
                                    <h3 className="ellipsis text-[24px] font-normal" title={item.alt}>{item.alt}</h3>
                                    <p className="font-text_item1 leading-[22px]"/>
                                </div>
                            </Link>
                            <div className="absolute z-[1] bottom-[16px] right-0 flex justify-end w-[300px] px-[20px] py-0 box-border">
                                {item.timestamp ? (
                                    <div
                                        className="text-[#999] w-[120px] text-right">{new Date(item.timestamp).toLocaleDateString('zh-CN')}</div>
                                ) : (
                                    <></>
                                )}
                                <Link to={item.url} className="w-auto text-decoration-none cursor-pointer ml-[56px] text-[#9c3] text-right]">
                                    新闻
                                </Link>
                            </div>
                        </li>
                    ))}
                    {currentTabData && visibleItems < currentTabData.data.length && (
                        <li className="news__more" onClick={handleLoadMore}>
                            {loading ? '加载中...' : '加载更多'}
                        </li>
                    )}
                </ul>
            </div>
            {showBackToTop && (
                <button
                    onClick={handleBackToTop}
                    title="回到顶部"
                    className="backTop opacity-100 cursor-pointer fixed w-[60px] h-[60px] rounded-[4px] z-[999] right-[54px] bottom-[108px]"
                />
            )}
        </div>
    )
}

export default News