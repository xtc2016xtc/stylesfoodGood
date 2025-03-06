import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";

const News = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(1); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);

    return (
        <div className="bg-pos-y-0 News relative w-full bg-[#f0f0f0] overflow-hidden">
            <div className="relative z-[2] w-[1280px] left-[50%] ml-[-640px] min-h-[1240px] pb-[208px]">

            </div>
        </div>
    )
}

export default News