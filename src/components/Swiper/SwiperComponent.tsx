import { Autoplay, Navigation, Pagination } from "swiper/modules"; // 导入 Swiper 模块
import { Swiper, SwiperSlide } from 'swiper/react'; // 导入 Swiper 组件和 SwiperSlide 组件
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle"; // 导入 Swiper 的 CSS 文件
import { Link } from "react-router-dom";

// 定义虚拟数据的类型
/*interface SlideData {
    id: string;
    url: string;
    image: string;
    alt: string;
}

// 定义虚拟数据
const slidesData: SlideData[] = [
    {
        id: "127515",
        url: "/main/news/detail/127515",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127827/beefdc787efbe11ebf59adcda4983e9d_3405584647452393570.jpg",
        alt: "图1"
    },
    {
        id: "127773",
        url: "/main/news/detail/127773",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127830/fceeb5c3b0de2791836a37ff8753b8a3_6020254494486414138.jpg",
        alt: "图2"
    },
    {
        id: "127699",
        url: "/main/news/detail/127699",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127829/7c0657c77130d5ce52bd9d4bdaf2a4ad_975736290156877350.jpg",
        alt: "图3"
    },
    {
        id: "127563",
        url: "/main/news/detail/127563",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127828/7b1e36fd8b98b494dcb0fafef603af85_4491787042756208976.jpg",
        alt: "图4"
    }
];

// 定义 SwiperComponent 组件
const SwiperComponent = () => {
    return (
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // 使用的 Swiper 模块
                spaceBetween={4} // 每个滑块之间的间距
                centeredSlides={true} // 滑块居中显示
                autoplay={{
                    delay: 2500, // 自动播放的延迟时间
                    disableOnInteraction: false, // 用户交互后是否禁用自动播放
                }}
                pagination={{
                    clickable: true, // 分页按钮是否可点击
                }}
                navigation={false} // 是否显示导航按钮
                loop={true} // 是否循环播放
                className="Tabs_conte" // 自定义的 CSS 类名
            >
                {/!* 使用虚拟数据生成 SwiperSlide 组件 *!/}
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-[640px]">
                        <Link to={slide.url} className="flex w-full h-full">
                            <img
                                src={slide.image}
                                draggable="false"
                                className="w-full h-full object-cover"
                                alt={slide.alt}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};

export default SwiperComponent; */// 导出 SwiperComponent 组件


/*2*/
// 定义虚拟数据的类型
interface SlideData {
    id: string;
    url: string;
    image: string;
    alt: string;
}

// 定义虚拟数据
const slidesData: SlideData[] = [
    {
        id: "127515",
        url: "/main/news/detail/127515",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127827/beefdc787efbe11ebf59adcda4983e9d_3405584647452393570.jpg",
        alt: "图1"
    },
    {
        id: "127773",
        url: "/main/news/detail/127773",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127830/fceeb5c3b0de2791836a37ff8753b8a3_6020254494486414138.jpg",
        alt: "图2"
    },
    {
        id: "127699",
        url: "/main/news/detail/127699",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127829/7c0657c77130d5ce52bd9d4bdaf2a4ad_975736290156877350.jpg",
        alt: "图3"
    },
    {
        id: "127563",
        url: "/main/news/detail/127563",
        image: "https://fastcdn.mihoyo.com/content-v2/hk4e/127828/7b1e36fd8b98b494dcb0fafef603af85_4491787042756208976.jpg",
        alt: "图4"
    }
];

// 定义 SwiperComponent 组件
const SwiperComponent = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // 使用的 Swiper 模块
            spaceBetween={4} // 每个滑块之间的间距
            centeredSlides={true} // 滑块居中显示
            autoplay={{
                delay: 2500, // 自动播放的延迟时间
                disableOnInteraction: false, // 用户交互后是否禁用自动播放
            }}
            pagination={{
                clickable: true, // 分页按钮是否可点击
            }}
            navigation={false} // 是否显示导航按钮
            loop={true} // 是否循环播放
            className="Tabs_conte" // 自定义的 CSS 类名
        >
            {/* 使用虚拟数据生成 SwiperSlide 组件 */}
            {slidesData.map((slide) => (
                <SwiperSlide key={slide.id} className="w-[640px]">
                    <Link to={slide.url} className="flex w-full h-full">
                        <img
                            src={slide.image}
                            draggable="false"
                            className="w-full h-full object-cover"
                            alt={slide.alt}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent; // 导出 SwiperComponent 组件