// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle";
// import characterData from "@/data/slidesData.ts";

// import required modules
import {FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import characterData from "@/data/slidesData.ts";
import {useState} from "react";
import SwiperCore from "swiper";


/*初版*/
const Shider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null); // 存储缩略图Swiper实例


    return (
        <>
            <div className="relative">
                {/* 主 Swiper (主图展示) */}
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    loop={true} // 启用主图循环模式
                    thumbs={{ swiper: thumbsSwiper }} // 使用缩略图同步
                    modules={[FreeMode, Navigation, Thumbs, Pagination]} // 启用各个模块
                    className="swiper-container my-swiper" // 添加自定义类名
                >
                    {characterData.map((character) => (
                        <SwiperSlide key={character.id}>
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                {/* 角色图片 */}
                                <img
                                    src={character.imageUrl}
                                    draggable="false"
                                    className="w-full h-[400px] object-cover"
                                    alt={character.name}
                                />
                                <div className="absolute top-4 left-4 z-10 text-white">
                                    <img
                                        src={character.iconUrl}
                                        draggable="false"
                                        className="w-16 h-16 rounded-full"
                                        alt={`${character.name} Icon`}
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full text-white">
                                    <h2 className="text-2xl font-bold">{character.name}</h2>
                                    <p className="text-sm">{character.cv}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* 缩略图 Swiper */}
                <Swiper
                    onSwiper={setThumbsSwiper} // 获取缩略图Swiper实例
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    loop={true} // 启用缩略图循环模式
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper-container my-thumbs"
                >
                    {characterData.map((character) => (
                        <SwiperSlide key={character.id}>
                            <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0 cursor-pointer">
                                <img
                                    src={character.pageThumb.imageUrl}
                                    alt={character.pageThumb.name}
                                    className="w-full h-[106px] object-cover rounded-lg"
                                />
                                <p className="text-center text-white text-sm mt-1">{character.pageThumb.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            );
        </>
        /*<>
            {/!* 主体 Swiper *!/}
            <Swiper
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                pagination={pagination}
                className="swiper-shier select-none"
            >
                {characterData.map((character) => (
                    <SwiperSlide key={character.id}>
                        <div className="">
                            <img
                                src={character.imageUrl}
                                draggable="false"
                                className=""
                                alt={character.name}
                            />
                            {/!*<img*!/}
                            {/!*    src={character.iconUrl}*!/}
                            {/!*    draggable="false"*!/}
                            {/!*    className="character__icon"*!/}
                            {/!*    alt={`${character.name} Icon`}*!/}
                            {/!*!/>*!/}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/!* 分页器 Swiper
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                wrapperClass="list-none"
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=""
            >
                {characterData.map((character) => (
                    <SwiperSlide key={character.id} className="">
                        <div className="">
                            <img
                                src={character.pageThumb.imageUrl}
                                alt={character.pageThumb.name}
                                className=""
                            />
                            <p className="">{character.pageThumb.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>*!/}
        </>*/
    );
}

export default Shider




