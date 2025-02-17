// import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle"; // 导入 Swiper 的 CSS 文件

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


/*初版*/
const Shider = () => {
    // const images = [
    //     "https://swiperjs.com/demos/images/nature-1.jpg",
    //     "https://swiperjs.com/demos/images/nature-2.jpg",
    //     "https://swiperjs.com/demos/images/nature-3.jpg",
    //     "https://swiperjs.com/demos/images/nature-4.jpg",
    //     "https://swiperjs.com/demos/images/nature-5.jpg",
    //     "https://swiperjs.com/demos/images/nature-6.jpg",
    //     "https://swiperjs.com/demos/images/nature-7.jpg",
    //     "https://swiperjs.com/demos/images/nature-8.jpg",
    //     "https://swiperjs.com/demos/images/nature-9.jpg",
    //     "https://swiperjs.com/demos/images/nature-10.jpg",
    // ];
    //
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const captions = [
    //     "内容 1", "内容 2", "内容 3", "内容 4", "内容 5", "内容 6",
    //     "内容 7", "内容 8", "内容 9", "内容 10"
    // ];
    //
    // const relatedList = [
    //     { imgSrc: "https://swiperjs.com/demos/images/nature-1.jpg", text: "内容1" },
    //     { imgSrc: "https://swiperjs.com/demos/images/nature-1.jpg", text: "内容2" },
    //     // 其他内容
    // ];


    // const [thumbsSwiper, setThumbsSwiper] = useState(null)
    return (
        <>
            {/*主体*/}
            <Swiper
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-shier"
                >
                <SwiperSlide style={{opacity:1}}>
                    <ul>

                    </ul>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt="" className="w-[800px] h-[300px]"/>
                </SwiperSlide>
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-5.jpg"  alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-6.jpg"  alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" className="w-[800px] h-[300px]"/>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
            {/*分页器*/}
            <Swiper
                // onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                wrapperClass="list-none"
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
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <div className="w-[110px] h-[132px] mx-[9px] flex-shrink-0">*/}
                {/*        <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="内容1"*/}
                {/*             className="w-full h-[106px] object-cover"/>*/}
                {/*        <p className="text-center">内容1</p>*/}
                {/*    </div>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </>
    );
}

export default Shider


