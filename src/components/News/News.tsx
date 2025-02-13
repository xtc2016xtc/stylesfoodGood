import TabsT from "@/components/News/Tabs.tsx";
import SwiperComponent from "@/components/Swiper/SwiperComponent.tsx";
import {latestData} from "@/data/slidesData.ts";

const News = () => {

    const relatedList = latestData
        .slice(0,5)
        .map((item) => ({
            id: item.id,
            alt: item.alt,
            timestamp: item.timestamp || '', // 确保 timestamp 始终是字符串
            url: item.url,
            image: item.image,
        }));

    return (
        <section className="news flex flex-col w-full h-[910px]">
            <h3 className="newst relative mx-auto mt-[183px] mb-[60px] text-[50px] text-center font-normal">
                新闻资讯
            </h3>
            <div className="flex justify-center h-[400px] mx-auto my-0">
                {/*轮播*/}
                <SwiperComponent relatedList={relatedList}/>

                <TabsT />
            </div>
        </section>
    )
}

export default News;