import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";

const Products = () => {
    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(4); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);
    return (
        <div>
            Products
        </div>
    )
}

export default Products