import { SetStateAction, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { latestData, newsData, announcementData, eventData } from "@/data/slidesData.ts";

const TabsT = () => {
    const storedActiveTab = localStorage.getItem('activeTab');
    const [activeTab, setActiveTab] = useState(storedActiveTab !== null ? storedActiveTab : 'latest');

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const handleTabChange = (value: SetStateAction<string>) => {
        setActiveTab(value);
    };

    const tabsData = [
        { label: '最新', data: latestData, id: 'latest' },
        { label: '新闻', data: newsData, id: 'news' },
        { label: '公告', data: announcementData, id: 'announcement' },
        { label: '活动', data: eventData, id: 'event' },
    ];

    return (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="Tabs_conte">
            <TabsList className="flex items-start w-[592px] mx-auto mt-[35px] mb-0 Tabss">
                {tabsData.map(tab => (
                    <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className={`pt-0 pb-[12px] px-[19px] relative text-[18px] items-center cursor-pointer ${activeTab === tab.id ? 'activeTS' : ''}`}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabsData.map(tab => (
                <TabsContent
                    key={tab.id}
                    value={tab.id}
                    className="w-[592px] mx-auto my-0 h-[260px] overflow-hidden"
                >
                    {tab.data.map((item, index) => (
                        <Link to={item.url} key={index} title={item.alt} className="relative flex items-center w-full hover:cursor-pointer hover:bg-[rgba(255,212,159,0.06)] h-[50px] box-content text-[16px] border-bottom_list text-colorBus">
                            <p className="w-[480px] text-white h-[20px] text-ellipsis whitespace-nowrap leading-[20px] pl-[11px] overflow-hidden">{item.alt}</p>
                            {item.timestamp ? (
                                <p className="absolute top-0 right-[11px] text-[rgba(255,255,255,0.35)] text-sm h-[48px] leading-[50px]">{new Date(item.timestamp).toLocaleDateString('zh-CN')}</p>
                            ) : (
                                <></>
                            )}
                        </Link>
                    ))}
                </TabsContent>
            ))}
            <Link to="/" className="absolute right-[33px] bottom-[20px] h-[22px] leading-[22px] text-lg text-[rgba(255,255,255,0.75)] cursor-pointer pl-[38px] zx hover:text-[rgba(255,212,159,0.75)] hover:bg-[url('./assets/news/jia1.png')]">
                查看全部咨询
            </Link>
        </Tabs>
    );
};

export default TabsT