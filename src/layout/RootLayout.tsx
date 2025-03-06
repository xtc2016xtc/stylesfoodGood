import { Outlet } from 'react-router-dom';
import Navbar from "@/components/Nav/Navbar.tsx";
import {NavItem} from "@/types";
import Mediaido from "@/components/media/Mediaido.tsx";
import {useState} from "react";
import ModalOverlay from "@/components/home/Modal/ModalOverlay.tsx";
import Footer from "@/components/Footer/page.tsx";
import MusicMediaido from "@/components/Root/Music/MusicMediaido.tsx";



const navItems: NavItem[] = [
    { label: '首 页', path: '/main' },
    { label: '新 闻', path: '/main/news' },
    { label: '关 于', path: '/main/about/mondstadt?cat=0' },
    { label: '服 务', path: '/main/services' },
    { label: '产 品', path: '/main/products' },
    { label: '联系我们', path: '/main/contact' },
];


const RootLayout = () => {

    /*视频*/
    const [isMediaidoVisible, setIsMediaidoVisible] = useState(false);

    /*蒙版*/
    const [isModalOverlay, setIsModalOverlay] = useState(false);

    /* 音乐播放状态 */
    const [isMusicPlaying, setIsMusicPlaying] = useState(true);

    const handlePlay = () => {
        console.log('handlePlay 被调用');
        setIsMediaidoVisible(true);
        setIsMusicPlaying(false); // 视频播放时静音
    };

    const handleClose = () => {
        console.log('handlePlay 被调用');
        setIsMediaidoVisible(false);
        setIsMusicPlaying(true); // 视频关闭时播放音乐
    };

    const AriaECX = () =>{
        console.log('Aria ECX被调用');
        setIsModalOverlay(true);
    }

    const AriaPass = () => {
        console.log('Aria Pass被调用');
        setIsModalOverlay(false);
    }

    const toggleMusicPlay = () => {
        setIsMusicPlaying(!isMusicPlaying);
    };

    /*音乐列表*/
    const musicFiles = [
        '/music/01.mp3',
        '/music/02.mp3',
        '/music/03.mp3'
    ];

    return (
        <div id="_layout">
            <div>
                <div className="relative h-screen w-full min-w-[1280px] min-h-screen flex flex-col">
                    {/*音乐播放*/}
                    <MusicMediaido isPlaying={isMusicPlaying} togglePlay={toggleMusicPlay} musicFiles={musicFiles}/>
                    <Mediaido isVisible={isMediaidoVisible} onClose={handleClose} />
                    <Navbar navItems={navItems} />
                    <div className="flex-grow visible bg-black">
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