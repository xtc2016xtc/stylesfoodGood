import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { NavbarProps } from "@/types";
import { useActiveIndex } from '@/components/Nav/ActiveIndexContext';

/*问候语*/
/*function Timeauto(): string {
    const date = new Date();
    const hours = date.getHours();

    if(hours >=7 && hours <= 11){
        return "早上好"
    }else if(hours >=12 && hours <= 13){
        return "中午好"
    }else if(hours >=14 && hours <= 17){
        return "下午好"
    }else {
        return "晚上好"
    }
}

const Navbar = ({ navItems }:NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]) // 存储导航项的引用
    /!*显示下拉*!/
    const [dropdownVisible, setDropdownVisible] = useState(false);


    const title = Timeauto()
    /!*点击*!/
    // const toggleDropdown = () => {
    //     setDropdownVisible(!dropdownVisible);
    // };

    /!*移入*!/
    const showDropdown = () => {
        setDropdownVisible(true);
    };

    /!*移出*!/
    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    console.log("navRefs", title)

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
                {/!* Logo *!/}
                <Link to="/" className='Navbar-logo'/>
                <Link to="/" className='Navbar-logo-1'/>
                {/!*<img src="/src/assets/logo-header-cut.png" alt="Logo" />*!/}
                {/!*<img src="/src/assets/logo-header-full.png" alt="Logo" />*!/}
                <div className="Navbar-items">
                    {/!* 导航项 *!/}
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
                        <div className="Navbar-length" style={indicatorStyle}/>
                    </div>
                </div>
                {/!* 用户信息 *!/}
                <div className="Navbar-userinfo">
                    <Link to="https://www.baidu.com" className="Navbar-User">
                        <span className="Navbar-Info-1">新手引导指南</span>
                        <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser"/>
                    </Link>


                    <div className="flex justify-end h-full whitespace-nowrap">
                        {/!* 未登录 *!/}
                        {/!*<button className="Navbar-userU">*!/}
                        {/!*    <span className="Navbar-span">登录</span>*!/}
                        {/!*    <img src="/Header/ys.png" alt="User" className="w-[27px] h-[27px] ml-[18px]" />*!/}
                        {/!*</button>*!/}
                        {/!*已登录*!/}
                        <div className="Navbar-center">
                            <button className="Navbar-users" onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}>
                                <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
                                &nbsp;&nbsp;
                                <strong className="font-[normal] text-decoration">155****91</strong>
                            </button>
                            {/!*下拉*!/}
                            <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
                                 onMouseEnter={showDropdown}
                                 onMouseLeave={hideDropdown}>
                                <Link to="https://www.baidu.com"
                                      className="text-1 hover:text-white text-decoration-none text-colorBus">
                                    通行证
                                </Link>
                                <Link to="/"
                                      className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
                                    登出
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;*/


/*修改第二版*/
/*import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavbarProps } from "@/types";

/!*问候语*!/
function Timeauto(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 7 && hours <= 11) {
        return "早上好"
    } else if (hours >= 12 && hours <= 13) {
        return "中午好"
    } else if (hours >= 14 && hours <= 17) {
        return "下午好"
    } else {
        return "晚上好"
    }
}

const Navbar = ({ navItems }: NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]) // 存储导航项的引用
    /!*显示下拉*!/
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const title = Timeauto()

    /!*移入*!/
    const showDropdown = () => {
        setDropdownVisible(true);
    };

    /!*移出*!/
    const hideDropdown = () => {
        setDropdownVisible(false);
    };

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
    }, [activeIndex, location.pathname]);

    // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
    const handleMouseEnter = (index: number) => {
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

    console.log("当前路径",updateIndicatorStyle())

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
                {/!* Logo *!/}
                <Link to="/" className='Navbar-logo' />
                <Link to="/" className='Navbar-logo-1' />
                <div className="Navbar-items">
                    {/!* 导航项 *!/}
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
                                    <div className="Navbar-length" />
                                )}
                            </NavLink>
                        ))}
                        <div className="Navbar-length" style={indicatorStyle} />
                    </div>
                </div>
                {/!* 用户信息 *!/}
                <div className="Navbar-userinfo">
                    <Link to="https://www.baidu.com" className="Navbar-User">
                        <span className="Navbar-Info-1">新手引导指南</span>
                        <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser" />
                    </Link>
                    <div className="flex justify-end h-full whitespace-nowrap">
                        <div className="Navbar-center">
                            <button className="Navbar-users" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
                                &nbsp;&nbsp;
                                <strong className="font-[normal] text-decoration">155****91</strong>
                            </button>
                            {/!*下拉*!/}
                            <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
                                 onMouseEnter={showDropdown}
                                 onMouseLeave={hideDropdown}>
                                <Link to="https://www.baidu.com"
                                      className="text-1 hover:text-white text-decoration-none text-colorBus">
                                    通行证
                                </Link>
                                <Link to="/"
                                      className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
                                    登出
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;*/

/*修改第三版*/
/*import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavbarProps } from "@/types";

/!*问候语*!/
function Timeauto(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 7 && hours <= 11) {
        return "早上好"
    } else if (hours >= 12 && hours <= 13) {
        return "中午好"
    } else if (hours >= 14 && hours <= 17) {
        return "下午好"
    } else {
        return "晚上好"
    }
}

const Navbar = ({ navItems }: NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]) // 存储导航项的引用
    /!*显示下拉*!/
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const title = Timeauto()

    /!*移入*!/
    const showDropdown = () => {
        setDropdownVisible(true);
    };

    /!*移出*!/
    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    // 获取当前激活的导航项索引
    const getActiveIndex = () => {
        const activeItem = navItems.findIndex(item => item.path === location.pathname);
        console.log("当前路径索引:", activeItem); // 打印当前路径的索引
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
    }, [activeIndex, location.pathname]);

    // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
    const handleMouseEnter = (index: number) => {
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

    // 打印当前路径
    useEffect(() => {
        console.log("当前路径:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="Navbar">
            <div className="Navbar-container">
                {/!* Logo *!/}
                <Link to="/" className='Navbar-logo' />
                <Link to="/" className='Navbar-logo-1' />
                <div className="Navbar-items">
                    {/!* 导航项 *!/}
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
                                    <div className="Navbar-length" />
                                )}
                            </NavLink>
                        ))}
                        <div className="Navbar-length" style={indicatorStyle} />
                    </div>
                </div>
                {/!* 用户信息 *!/}
                <div className="Navbar-userinfo">
                    <Link to="https://www.baidu.com" className="Navbar-User">
                        <span className="Navbar-Info-1">新手引导指南</span>
                        <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser" />
                    </Link>
                    <div className="flex justify-end h-full whitespace-nowrap">
                        <div className="Navbar-center">
                            <button className="Navbar-users" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
                                &nbsp;&nbsp;
                                <strong className="font-[normal] text-decoration">155****91</strong>
                            </button>
                            {/!*下拉*!/}
                            <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
                                 onMouseEnter={showDropdown}
                                 onMouseLeave={hideDropdown}>
                                <Link to="https://www.baidu.com"
                                      className="text-1 hover:text-white text-decoration-none text-colorBus">
                                    通行证
                                </Link>
                                <Link to="/"
                                      className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
                                    登出
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;*/

/*修改第四版*/
/*import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavbarProps } from "@/types";

/!*问候语*!/
function Timeauto(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 7 && hours <= 11) {
        return "早上好"
    } else if (hours >= 12 && hours <= 13) {
        return "中午好"
    } else if (hours >= 14 && hours <= 17) {
        return "下午好"
    } else {
        return "晚上好"
    }
}

const Navbar = ({ navItems }: NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]) // 存储导航项的引用
    /!*显示下拉*!/
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const title = Timeauto()

    /!*移入*!/
    const showDropdown = () => {
        setDropdownVisible(true);
    };

    /!*移出*!/
    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    // 获取当前激活的导航项索引
    const getActiveIndex = () => {
        const activeItem = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}$`);
            return regex.test(location.pathname);
        });
        console.log("当前路径索引:", activeItem); // 打印当前路径的索引
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
    }, [activeIndex, location.pathname]);

    // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
    const handleMouseEnter = (index: number) => {
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
        const activeIndex = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}$`);
            return regex.test(location.pathname);
        });
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

    // 打印当前路径
    useEffect(() => {
        console.log("当前路径:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="Navbar">
            <div className="Navbar-container">
                {/!* Logo *!/}
                <Link to="/" className='Navbar-logo' />
                <Link to="/" className='Navbar-logo-1' />
                <div className="Navbar-items">
                    {/!* 导航项 *!/}
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
                                    <div className="Navbar-length" />
                                )}
                            </NavLink>
                        ))}
                        <div className="Navbar-length" style={indicatorStyle} />
                    </div>
                </div>
                {/!* 用户信息 *!/}
                <div className="Navbar-userinfo">
                    <Link to="https://www.baidu.com" className="Navbar-User">
                        <span className="Navbar-Info-1">新手引导指南</span>
                        <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser" />
                    </Link>
                    <div className="flex justify-end h-full whitespace-nowrap">
                        <div className="Navbar-center">
                            <button className="Navbar-users" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
                                &nbsp;&nbsp;
                                <strong className="font-[normal] text-decoration">155****91</strong>
                            </button>
                            {/!*下拉*!/}
                            <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
                                 onMouseEnter={showDropdown}
                                 onMouseLeave={hideDropdown}>
                                <Link to="https://www.baidu.com"
                                      className="text-1 hover:text-white text-decoration-none text-colorBus">
                                    通行证
                                </Link>
                                <Link to="/"
                                      className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
                                    登出
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;*/

/*修改第五版*/
/*import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavbarProps } from "@/types";

/!*问候语*!/
function Timeauto(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 7 && hours <= 11) {
        return "早上好"
    } else if (hours >= 12 && hours <= 13) {
        return "中午好"
    } else if (hours >= 14 && hours <= 17) {
        return "下午好"
    } else {
        return "晚上好"
    }
}

const Navbar = ({ navItems }: NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]) // 存储导航项的引用
    /!*显示下拉*!/
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const title = Timeauto()

    /!*移入*!/
    const showDropdown = () => {
        setDropdownVisible(true);
    };

    /!*移出*!/
    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    // 获取当前激活的导航项索引
    const getActiveIndex = () => {
        const activeItem = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}`);
            return regex.test(location.pathname);
        });
        console.log("当前路径索引:", activeItem); // 打印当前路径的索引
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
    }, [activeIndex, location.pathname]);

    // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
    const handleMouseEnter = (index: number) => {
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
        const activeIndex = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}`);
            return regex.test(location.pathname);
        });
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

    // 打印当前路径
    useEffect(() => {
        console.log("当前路径:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="Navbar">
            <div className="Navbar-container">
                {/!* Logo *!/}
                <Link to="/" className='Navbar-logo' />
                <Link to="/" className='Navbar-logo-1' />
                <div className="Navbar-items">
                    {/!* 导航项 *!/}
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
                                    <div className="Navbar-length" />
                                )}
                            </NavLink>
                        ))}
                        <div className="Navbar-length" style={indicatorStyle} />
                    </div>
                </div>
                {/!* 用户信息 *!/}
                <div className="Navbar-userinfo">
                    <Link to="https://www.baidu.com" className="Navbar-User">
                        <span className="Navbar-Info-1">新手引导指南</span>
                        <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser" />
                    </Link>
                    <div className="flex justify-end h-full whitespace-nowrap">
                        <div className="Navbar-center">
                            <button className="Navbar-users" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
                                &nbsp;&nbsp;
                                <strong className="font-[normal] text-decoration">155****91</strong>
                            </button>
                            {/!*下拉*!/}
                            <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
                                 onMouseEnter={showDropdown}
                                 onMouseLeave={hideDropdown}>
                                <Link to="https://www.baidu.com"
                                      className="text-1 hover:text-white text-decoration-none text-colorBus">
                                    通行证
                                </Link>
                                <Link to="/"
                                      className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
                                    登出
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;*/

/*修改第6版*/
// import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { NavbarProps } from "@/types";
//
// /*问候语*/
// function Timeauto(): string {
//     const date = new Date();
//     const hours = date.getHours();
//
//     if (hours >= 7 && hours <= 11) {
//         return "早上好"
//     } else if (hours >= 12 && hours <= 13) {
//         return "中午好"
//     } else if (hours >= 14 && hours <= 17) {
//         return "下午好"
//     } else {
//         return "晚上好"
//     }
// }
//
// const Navbar = ({ navItems }: NavbarProps) => {
//     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
//     const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
//     const location = useLocation(); // 获取当前路径
//     const navRefs = useRef<(HTMLAnchorElement | null)[]>([]) // 存储导航项的引用
//     /*显示下拉*/
//     const [dropdownVisible, setDropdownVisible] = useState(false);
//
//     const title = Timeauto()
//
//     /*移入*/
//     const showDropdown = () => {
//         setDropdownVisible(true);
//     };
//
//     /*移出*/
//     const hideDropdown = () => {
//         setDropdownVisible(false);
//     };
//
//     // 获取当前激活的导航项索引
//     const getActiveIndex = () => {
//         const activeItem = navItems.findIndex(item => {
//             const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}`);
//             return regex.test(location.pathname);
//         });
//         console.log("当前路径索引:", activeItem); // 打印当前路径的索引
//         return activeItem !== -1 ? activeItem : 0;
//     };
//
//     const activeIndex = getActiveIndex();
//
//     // 当路径变化时，更新蓝色长条的位置和宽度
//     useEffect(() => {
//         if (navRefs.current[activeIndex]) {
//             const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
//             setIndicatorStyle({
//                 left: offsetLeft,
//                 width: offsetWidth,
//             });
//         }
//     }, [activeIndex, location.pathname]);
//
//     // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
//     const handleMouseEnter = (index: number) => {
//         if (navRefs.current[index]) {
//             const { offsetLeft, offsetWidth } = navRefs.current[index];
//             setIndicatorStyle({
//                 left: offsetLeft,
//                 width: offsetWidth,
//             });
//         }
//         setHoveredIndex(index);
//     };
//
//     // 当鼠标离开导航项时，恢复蓝色长条的位置和宽度
//     const handleMouseLeave = () => {
//         if (navRefs.current[activeIndex]) {
//             const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
//             setIndicatorStyle({
//                 left: offsetLeft,
//                 width: offsetWidth,
//             });
//         }
//         setHoveredIndex(null);
//     };
//
//     const updateIndicatorStyle = useCallback(() => {
//         const activeIndex = navItems.findIndex(item => {
//             const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}`);
//             return regex.test(location.pathname);
//         });
//         if (activeIndex !== -1 && navRefs.current[activeIndex]) {
//             const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
//             setIndicatorStyle({
//                 left: offsetLeft,
//                 width: offsetWidth,
//             });
//         }
//     }, [location.pathname, navItems]);
//
//     useEffect(() => {
//         updateIndicatorStyle();
//         window.addEventListener('resize', updateIndicatorStyle);
//         return () => {
//             window.removeEventListener('resize', updateIndicatorStyle);
//         };
//     }, [updateIndicatorStyle]);
//
//     // 打印当前路径
//     useEffect(() => {
//         console.log("当前路径:", location.pathname);
//     }, [location.pathname]);
//
//     return (
//         <div className="Navbar">
//             <div className="Navbar-container">
//                 {/* Logo */}
//                 <Link to="/" className='Navbar-logo' />
//                 <Link to="/" className='Navbar-logo-1' />
//                 <div className="Navbar-items">
//                     {/* 导航项 */}
//                     <div className="Navbar-items-content">
//                         {navItems.map((item, index) => (
//                             <NavLink
//                                 key={index}
//                                 to={item.path}
//                                 className="Navbar-link"
//                                 onMouseEnter={() => handleMouseEnter(index)}
//                                 onMouseLeave={handleMouseLeave}
//                                 ref={el => navRefs.current[index] = el}
//                             >
//                                 {item.label}
//                                 {((hoveredIndex === index) || (hoveredIndex === null && activeIndex === index)) && (
//                                     <div className="Navbar-length" />
//                                 )}
//                             </NavLink>
//                         ))}
//                         <div className="Navbar-length" style={indicatorStyle} />
//                     </div>
//                 </div>
//                 {/* 用户信息 */}
//                 <div className="Navbar-userinfo">
//                     <Link to="https://www.baidu.com" className="Navbar-User">
//                         <span className="Navbar-Info-1">新手引导指南</span>
//                         <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser" />
//                     </Link>
//                     <div className="flex justify-end h-full whitespace-nowrap">
//                         <div className="Navbar-center">
//                             <button className="Navbar-users" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
//                                 <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
//                                 &nbsp;&nbsp;
//                                 <strong className="font-[normal] text-decoration">155****91</strong>
//                             </button>
//                             {/*下拉*/}
//                             <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
//                                  onMouseEnter={showDropdown}
//                                  onMouseLeave={hideDropdown}>
//                                 <Link to="https://www.baidu.com"
//                                       className="text-1 hover:text-white text-decoration-none text-colorBus">
//                                     通行证
//                                 </Link>
//                                 <Link to="/"
//                                       className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
//                                     登出
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Navbar;

/*7*/
/*问候语*/


/*问候语*/
/*function Timeauto(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 7 && hours <= 11) {
        return "早上好";
    } else if (hours >= 12 && hours <= 13) {
        return "中午好";
    } else if (hours >= 14 && hours <= 17) {
        return "下午好";
    } else {
        return "晚上好";
    }
}

const Navbar = ({ navItems }: NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]); // 存储导航项的引用
    const { activeIndex, setActiveIndex } = useActiveIndex(); // 使用上下文获取和设置 activeIndex
    const [dropdownVisible, setDropdownVisible] = useState(false); // 显示下拉

    const title = Timeauto();

    /!*移入*!/
    const showDropdown = () => {
        setDropdownVisible(true);
    };

    /!*移出*!/
    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    // 获取当前激活的导航项索引
    const getActiveIndex = () => {
        const activeItem = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}$`);
            return regex.test(location.pathname);
        });
        return activeItem !== -1 ? activeItem : 0;
    };

    useEffect(() => {
        const index = getActiveIndex();
        setActiveIndex(index);
    }, [location.pathname, navItems, setActiveIndex]);

    // 当路径变化时，更新蓝色长条的位置和宽度
    useEffect(() => {
        if (navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    }, [activeIndex, location.pathname]);

    // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
    const handleMouseEnter = (index: number) => {
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
        const activeIndex = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}$`);
            return regex.test(location.pathname);
        });
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
                {/!* Logo *!/}
                <Link to="/" className='Navbar-logo' />
                <Link to="/" className='Navbar-logo-1' />
                <div className="Navbar-items">
                    {/!* 导航项 *!/}
                    <div className="Navbar-items-content">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`Navbar-link ${activeIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                ref={el => navRefs.current[index] = el}
                            >
                                {item.label}
                                {((hoveredIndex === index) || (hoveredIndex === null && activeIndex === index)) && (
                                    <div className="Navbar-length" />
                                )}
                            </Link>
                        ))}
                        <div className="Navbar-length" style={indicatorStyle} />
                    </div>
                </div>
                {/!* 用户信息 *!/}
                <div className="Navbar-userinfo">
                    <Link to="https://www.baidu.com" className="Navbar-User">
                        <span className="Navbar-Info-1">新手引导指南</span>
                        <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser" />
                    </Link>
                    <div className="flex justify-end h-full whitespace-nowrap">
                        <div className="Navbar-center">
                            <button className="Navbar-users" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
                                &nbsp;&nbsp;
                                <strong className="font-[normal] text-decoration">155****91</strong>
                            </button>
                            {/!*下拉*!/}
                            <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
                                 onMouseEnter={showDropdown}
                                 onMouseLeave={hideDropdown}>
                                <Link to="https://www.baidu.com"
                                      className="text-1 hover:text-white text-decoration-none text-colorBus">
                                    通行证
                                </Link>
                                <Link to="/"
                                      className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
                                    登出
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;*/


/*问候语*/
function Timeauto(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 7 && hours <= 11) {
        return "早上好";
    } else if (hours >= 12 && hours <= 13) {
        return "中午好";
    } else if (hours >= 14 && hours <= 17) {
        return "下午好";
    } else {
        return "晚上好";
    }
}

const Navbar = ({ navItems }: NavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 当前悬停的导航项索引
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({}); // 蓝色长条的样式
    const location = useLocation(); // 获取当前路径
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]); // 存储导航项的引用
    const { activeIndex, setActiveIndex } = useActiveIndex(); // 使用上下文获取和设置 activeIndex
    const [dropdownVisible, setDropdownVisible] = useState(false); // 显示下拉

    const title = Timeauto();

    /*移入*/
    const showDropdown = () => {
        setDropdownVisible(true);
    };

    /*移出*/
    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    // 获取当前激活的导航项索引
    const getActiveIndex = useCallback(() => {
        const activeItem = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}$`);
            return regex.test(location.pathname);
        });
        return activeItem !== -1 ? activeItem : 0;
    }, [location.pathname, navItems]);

    useEffect(() => {
        const index = getActiveIndex();
        setActiveIndex(index);
    }, [location.pathname, getActiveIndex, setActiveIndex]);

    // 当路径变化时，更新蓝色长条的位置和宽度
    useEffect(() => {
        if (navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    }, [activeIndex, location.pathname]);

    // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
    const handleMouseEnter = (index: number) => {
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
        const activeIndex = navItems.findIndex(item => {
            const regex = new RegExp(`^${item.path.replace(/:\w+/g, '\\w+')}$`);
            return regex.test(location.pathname);
        });
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
                <Link to="/" className='Navbar-logo' />
                <Link to="/" className='Navbar-logo-1' />
                <div className="Navbar-items">
                    {/* 导航项 */}
                    <div className="Navbar-items-content">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`Navbar-link ${activeIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                ref={el => navRefs.current[index] = el}
                            >
                                {item.label}
                                {((hoveredIndex === index) || (hoveredIndex === null && activeIndex === index)) && (
                                    <div className="Navbar-length" />
                                )}
                            </Link>
                        ))}
                        <div className="Navbar-length" style={indicatorStyle} />
                    </div>
                </div>
                {/* 用户信息 */}
                <div className="Navbar-userinfo">
                    <Link to="https://www.baidu.com" className="Navbar-User">
                        <span className="Navbar-Info-1">新手引导指南</span>
                        <img src="/Header/ys.png" alt="User" className="Navbar-ImgUser" />
                    </Link>
                    <div className="flex justify-end h-full whitespace-nowrap">
                        <div className="Navbar-center">
                            <button className="Navbar-users" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                <span className="text-1 text-[#ccc] cursor-pointer">{title}!</span>
                                &nbsp;&nbsp;
                                <strong className="font-[normal] text-decoration">155****91</strong>
                            </button>
                            {/*下拉*/}
                            <div className={`Navbar-Usee dropdown ${dropdownVisible ? 'block' : 'hidden'}`}
                                 onMouseEnter={showDropdown}
                                 onMouseLeave={hideDropdown}>
                                <Link to="https://www.baidu.com"
                                      className="text-1 hover:text-white text-decoration-none text-colorBus">
                                    通行证
                                </Link>
                                <Link to="/"
                                      className="ml-[20px] hover:text-white text-1 text-decoration-none text-colorBus pl-[22px] border-left">
                                    登出
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


