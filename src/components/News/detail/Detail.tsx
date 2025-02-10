import { useParams } from 'react-router-dom';
import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";

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

// 定义 Detail 组件
const Detail  = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(1); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);

    const { id } = useParams<{ id: string }>(); // 获取 URL 参数
    const slide = slidesData.find((slide) => slide.id === id); // 根据 URL 参数查找相应的详情数据

    if (!slide) {
        return <div>未找到详情数据</div>;
    }

    return (
        <div>
            <h1>{slide.alt}</h1>
            <img src={slide.image} alt={slide.alt} />
            <p>详情内容...</p>
        </div>
    );
};

export default Detail; // 导出 Detail 组件



/*Detail*/