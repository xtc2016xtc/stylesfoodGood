import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect, useState} from "react";

const News = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex
    const [showBackToTop, setShowBackToTop] = useState(false); // 定义状态来控制按钮显示

    useEffect(() => {
        setActiveIndex(1); // 手动设置 activeIndex 为 2

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition > documentHeight / 5) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActiveIndex]);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <div className="bg-pos-y-0 News relative w-full bg-[#f0f0f0] overflow-hidden">
            <div className="relative z-[2] w-[1280px] left-[50%] ml-[-640px] min-h-[1240px] pb-[208px]">
                <ul className="flex justify-between pt-[146px] w-full h-[700px] list-none"></ul>
                <ul className="mt-[38px] list-none"></ul>
                <ul className="mt-[38px] list-none h-auto transition-allProps"></ul>
            </div>
            {showBackToTop && (
                <button
                    onClick={handleBackToTop}
                    title="回到顶部"
                    className="backTop opacity-100 cursor-pointer fixed w-[60px] h-[60px] rounded-[4px] z-[999] right-[54px] bottom-[108px]"
                />
            )}
        </div>
    )
}

export default News