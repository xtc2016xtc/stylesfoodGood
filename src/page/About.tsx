import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";
import Shider from "@/components/Character/shider.tsx";

const About = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(2); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);

    return (
        <div className="city_shider_img relative w-full h-full">
            <Shider/>
        </div>
    )
}

export default About