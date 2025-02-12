import { useParams } from 'react-router-dom';
import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";
import {slidesData} from '@/data/slidesData'; // 导入虚拟数据


// 定义 Detail 组件
const Detail  = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(1); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);

    const { id } = useParams<{ id: string }>(); // 获取 URL 参数
    const slide = slidesData.find((slide) => slide.id === id); // 根据 URL 参数查找相应的详情数据

    if (!slide) {
        return null;
    }

    return (
        <div>
            <h1>{slide.alt}</h1>
            <img src={slide.image} alt={slide.alt} />
            {slide.timestamp ? (
                <p className="absolute top-0 right-[11px] text-[rgba(255,255,255,0.35)] text-sm h-[48px] leading-[50px]">{new Date(slide.timestamp).toLocaleDateString('zh-CN')}</p>
            ) : (
                <></>
            )}
            {slide.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};

export default Detail; // 导出 Detail 组件



/*Detail*/