// import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle"; // 导入 Swiper 的 CSS 文件

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const Shider = () => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="city_shider_img relative w-full h-full z-[9999]"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg"  alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg"  alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
            </Swiper>
            <Swiper
                // onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="absolute left-1/2 z-[998] transform -translate-x-1/2 flex items-center space-x-4 w-[800px] justify-center"
            >
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="内容1" className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="内容1"
                             className="w-full h-[106px] object-cover"/>
                        <p className="text-center">内容1</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Shider
