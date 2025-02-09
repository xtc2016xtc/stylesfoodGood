import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Socials } from "@/types";

const Sil: Socials[] = [
    {
        link: "icon-weibo",
        text: "官方微博",
        path: '/'
    },
    {
        link: "icon-taptap",
        text: "Taptap",
        path: '/'
    },
    {
        link: "icon-miyoushe",
        text: "官方社区",
        path: '/'
    }
];

const Social = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPosition > windowHeight * 0.1) {
                setIsHidden(false);
            } else {
                setIsHidden(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleRotateClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div className={`fixed z-[999] right-0 top-[50%] opacity-100 transform translate-y-[-50%] transition-all duration-500 ease-out ${isHidden ? 'hide' : ''} ${isRotated ? 'translate-x-full' : ''}`}>
            <ul className="relative w-[178px] social_list">
                <li className="w-full text-[16px]">
                    <Link to="/" className="flex items-center justify-between w-full min-h-[44px] text-[16px] text-[#333] px-[21px] flex-col pointer-events-none">
                        <p className="text-[18px] text-[#121212] mt-[18px] mx-auto mb-[27px]">关注我们</p>
                        <img src="/Social/wx.png" alt="Facebook" className="w-[147px] h-[147px]" />
                        <p className="opacity-80 mt-[10px] mx-auto mb-[20px]">扫码关注微信</p>
                    </Link>
                </li>
                {Sil.map((item, index) => (
                    <li className="w-full text-[16px]" key={index}>
                        <Link to={item.path}
                              className="flex items-center justify-between w-full min-h-[44px] text-[16px] text-[#333] px-[21px] hover:bg-[#333] hover:text-[#ffd49f] cursor-pointer">
                            <span className={`text-[30px] ${item.link}`} /> {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className={`social_btn absolute  left-[-30px] top-[10px] flex items-center justify-center w-[30px] h-[52px] bg-[#333] border-left-color ${isRotated ? 'rotate-180' : ''}`} onClick={handleRotateClick} />
        </div>
    );
};

export default Social;