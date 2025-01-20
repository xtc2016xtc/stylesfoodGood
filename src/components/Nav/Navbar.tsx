import {CSSProperties, useCallback, useEffect, useRef, useState} from 'react';
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

    const updateIndicatorStyle = useCallback(() => {
        const activeIndex = navItems.findIndex(item => item.path === location.pathname);
        if (activeIndex !== -1 && navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    }, [location.pathname, navItems]);

    useEffect(() => {
        updateIndicatorStyle();
        window.addEventListener('resize', updateIndicatorStyle);
        return () => {
            window.removeEventListener('resize', updateIndicatorStyle);
        };
    }, [updateIndicatorStyle]);


    return (
        <div className="Navbar">
           <div className="Navbar-container">
               {/* Logo */}
               <img src="/Header/logo-header-cut.png" alt="Logo" className='Navbar-logo'/>
               <div className="Navbar-items">
                   {/* 导航项 */}
                   <div className="Navbar-items-content">
                       {navItems.map((item, index) => (
                           <NavLink
                               key={index}
                               to={item.path}
                               className="Navbar-link"
                               onMouseEnter={() => handleMouseEnter(index)}
                               onMouseLeave={handleMouseLeave}
                               ref={el => navRefs.current[index] = el}
                           >
                               {item.label}
                               {((hoveredIndex === index) || (hoveredIndex === null && activeIndex === index)) && (
                                   <div
                                       className="Navbar-length" />
                               )}
                           </NavLink>
                       ))}
                       <div className="Navbar-length" style={indicatorStyle} />
                   </div>
               </div>
               {/* 用户信息 */}
               <div className="Navbar-userinfo">
                   <Link to="https://www.baidu.com" className="flex items-center mr-[20px] hover:opacity-100 opacity-60">
                       <span className=" leading-[66px] text-[17px] font-normal tracking-[0px] text-[#ccc] text-center cursor-pointer">新手引导指南</span>
                       <img src="/Header/ys.png" alt="User" className="w-[27px] h-[27px] ml-[18px]" />
                   </Link>
                   {/* 未登录 */}
                   <div className="flex justify-end h-full whitespace-nowrap">
                       <button className="flex items-center px-[10px] border-none outline-none bg-none text-white cursor-pointer hover:opacity-100 opacity-60">
                           <span className="leading-[66px] opacity-60 text-[17px] font-normal tracking-[0px] text-[#ccc] text-center cursor-pointer">登录</span>
                           <img src="/Header/ys.png" alt="User" className="w-[27px] h-[27px] ml-[18px]" />
                       </button>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Navbar;