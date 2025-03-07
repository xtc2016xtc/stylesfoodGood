import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const NewsNext = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(1); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);

    const { id } = useParams<{ id: string }>();

    console.log("参数",id);


    return (
        <div className="bg-pos-y-0">

        </div>
    )
}

export default NewsNext