import {useActiveIndex} from "@/components/Nav/ActiveIndexContext.tsx";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const About = () => {

    const { setActiveIndex } = useActiveIndex(); // 使用上下文设置 activeIndex

    useEffect(() => {
        setActiveIndex(2); // 手动设置 activeIndex 为 2
    }, [setActiveIndex]);



    return (
       <div className="bg-[#393b40] p-[8px]">
            <div className="error">
                <div className="min-w-[50vh] max-h-[90%] mt-[10vh] error-500">
                    <div className="relative w-full text-center">
                        <img src="/CharacterDetail/500/500.png" alt="500" className="error__icon"/>
                        <div className="error_word">
                            <p className="error_title">
                                该页面不存在
                            </p>
                            <div className="error_sen">
                                <p className="error_content">
                                    未知
                                </p>
                            </div>
                            <img src="/CharacterDetail/cat/1222.png" alt="star" className="error__star"/>
                            <Link to={`/main`} className="error__backlink">
                                返回首页 »
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default About