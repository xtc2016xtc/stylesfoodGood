import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";

const About = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(2); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);

    return (
        <div>

        </div>
    )
}

export default About