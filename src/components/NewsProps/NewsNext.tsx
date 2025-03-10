import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {latestData} from "@/data/slidesData.ts";

const NewsNext = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(1); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);

    const { id } = useParams<{ id: string }>();
    const slide = latestData.find((slide) => slide.id === id); // 根据 URL 参数查找相应的详情数据

    console.log("参数",slide);


    return (
        <div className="bg-pos-y-0">

        </div>
    )
}

export default NewsNext