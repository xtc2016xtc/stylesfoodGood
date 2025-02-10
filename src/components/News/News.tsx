import TabsT from "@/components/News/Tabs.tsx";
import SwiperComponent from "@/components/Swiper/SwiperComponent.tsx";

const News = () => {
    return (
        <section className="news flex flex-col w-full h-[910px]">
            <h3 className="newst relative mx-auto mt-[183px] mb-[60px] text-[50px] text-center font-normal">
                新闻资讯
            </h3>
            <div className="flex justify-center h-[400px] mx-auto my-0">
                {/*轮播*/}
                <SwiperComponent />

                <TabsT />
            </div>
        </section>
    )
}

export default News;