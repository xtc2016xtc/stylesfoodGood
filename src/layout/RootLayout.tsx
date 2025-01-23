import { Outlet } from 'react-router-dom';
import Navbar from "@/components/Nav/Navbar.tsx";
import {NavItem} from "@/types";
import Mediaido from "@/components/media/Mediaido.tsx";
import {useState} from "react";
import ModalOverlay from "@/components/home/Modal/ModalOverlay.tsx";
import Footer from "@/components/Footer/page.tsx";



const navItems: NavItem[] = [
    { label: '首页', path: '/' },
    { label: '新闻', path: '/news' },
    { label: '关于', path: '/about' },
    { label: '服务', path: '/services' },
    { label: '产品', path: '/products' },
    { label: '联系我们', path: '/contact' },
];


const RootLayout = () => {

    /*视频*/
    const [isMediaidoVisible, setIsMediaidoVisible] = useState(false);

    /*蒙版*/
    const [isModalOverlay, setIsModalOverlay] = useState(false);

    const handlePlay = () => {
        console.log('handlePlay 被调用');
        setIsMediaidoVisible(true);
    };

    const handleClose = () => {
        console.log('handlePlay 被调用');
        setIsMediaidoVisible(false);
    };

    const AriaECX = () =>{
        console.log('Aria ECX被调用');
        setIsModalOverlay(true);
    }

    const AriaPass = () => {
        console.log('Aria Pass被调用');
        setIsModalOverlay(false);
    }

    /**/

    return (
        <div id="_layout">
            <div>
                <div className="relative h-screen w-full min-w-[1280px] min-h-screen flex flex-col">
                    <Mediaido isVisible={isMediaidoVisible} onClose={handleClose} />
                    <Navbar navItems={navItems} />
                    <div className="flex-grow visible bg-black bg-pos-y-0">
                        <Outlet context={{ handlePlay,AriaECX }}/>
                    </div>
                    <Footer />
                </div>
            </div>

            {/*展开提示*/}
            <ModalOverlay AriaPass={isModalOverlay} onClose={AriaPass} />

        </div>
    );
};

export default RootLayout;