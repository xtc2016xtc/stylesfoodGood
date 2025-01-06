import {CSSProperties, useEffect, useRef, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {NavbarProps} from "@/types";

const Navbar = ({ navItems }:NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]) // 存储导航项的引用

    // 获取当前激活的导航项索引
    const getActiveIndex = () => {
        const activeItem = navItems.findIndex(item => item.path === location.pathname);
        return activeItem !== -1 ? activeItem : 0;
    };

    const activeIndex = getActiveIndex();

    // 当路径变化时，更新蓝色长条的位置和宽度
    useEffect(() => {
        if (navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    }, [activeIndex]);

    // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
    const handleMouseEnter = (index:number) => {
        if (navRefs.current[index]) {
            const { offsetLeft, offsetWidth } = navRefs.current[index];
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
        setHoveredIndex(index);
    };

    // 当鼠标离开导航项时，恢复蓝色长条的位置和宽度
    const handleMouseLeave = () => {
        if (navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
        setHoveredIndex(null);
    };

    const updateIndicatorStyle = () => {
        const activeIndex = navItems.findIndex(item => item.path === location.pathname);
        if (activeIndex !== -1 && navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = navRefs.current[activeIndex]!;
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    };

    useEffect(() => {
        updateIndicatorStyle();
        window.addEventListener('resize', updateIndicatorStyle);
        return () => {
            window.removeEventListener('resize', updateIndicatorStyle);
        };
    }, [location.pathname]);

    return (
        <section className="fixed top-0 z-0 w-full opacity-100 justify-center transition-opacity duration-500 ease-in-out flex flex-row ">
           <div className="h-[66px] translate-x-0 opacity-100 flex flex-shrink fixed top-0 left-0 w-full transition-opacity duration-500 ease-in-out min-w-[1208px] bg-black bg-opacity-75 shadow-md">
               {/* Logo */}
               <img src="https://via.placeholder.com/188x88.png?text=Logo" alt="Logo" className='opacity-100 w-[317px] float-left ml-2 mr-0 h-full cursor-pointer bg-no-repeat'/>
               <div className="inline-block relative max-w-[750px] w-auto -ml-34">
                   {/* 导航项 */}
                   <div className="inline-block list-none -ml-40 pr-2.5">
                       {navItems.map((item, index) => (
                           <NavLink
                               key={index}
                               to={item.path}
                               className="relative float-left w-auto h-[66px] header_navitem hover:text-white hover:custom-text-shadow mx-[30px] !important leading-[66px] text-[17px] font-normal tracking-[0px] text-[#ccc] text-center cursor-pointer select-none no-underline"
                               onMouseEnter={() => handleMouseEnter(index)}
                               onMouseLeave={handleMouseLeave}
                               ref={el => navRefs.current[index] = el}
                           >
                               {item.label}
                               {((hoveredIndex === index) || (hoveredIndex === null && activeIndex === index)) && (
                                   <div
                                       className="absolute z-10 transition-all duration-200 ease-in-out bg-[#69e0ff] h-[5px] w-[40px] top-0"></div>
                               )}
                           </NavLink>
                       ))}
                       <div
                           className="absolute z-10 transition-all duration-200 ease-in-out bg-[#69e0ff] h-[5px] w-[40px] top-0"
                           style={indicatorStyle}
                       ></div>
                   </div>
               </div>
               {/* 用户信息 */}
               <div className="absolute right-[30px] top-0 h-full max-w-[270px] flex items-center hover:opacity-100">
                   <Link to="https://www.baidu.com" className="flex items-center mr-[20px] hover:opacity-100 opacity-60">
                       <span className=" leading-[66px] text-[17px] font-normal tracking-[0px] text-[#ccc] text-center cursor-pointer">新手引导指南</span>
                       <img src="https://via.placeholder.com/40" alt="User" className="w-[27px] h-[27px] ml-[18px]" />
                   </Link>
                   {/* 未登录 */}
                   <div className="flex justify-end h-full whitespace-nowrap">
                       <button className="flex items-center px-[10px] border-none outline-none bg-none text-white cursor-pointer hover:opacity-100 opacity-60">
                           <span className="leading-[66px] opacity-60 text-[17px] font-normal tracking-[0px] text-[#ccc] text-center cursor-pointer">登录</span>
                           <img src="https://via.placeholder.com/40" alt="User" className="w-[27px] h-[27px] ml-[18px]" />
                       </button>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default Navbar;