// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle";
// import characterData from "@/data/slidesData.ts";

// import required modules
import {FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import characterData from "@/data/slidesData.ts";
import {useEffect, useRef, useState} from "react";
import SwiperCore from "swiper";
import {useLocation} from "react-router-dom";


/*初版*/
const Shider = () => {

    const locations = useLocation();
    console.log(locations.pathname)

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null); // 存储缩略图Swiper实例

    const [isChinese, setIsChinese] = useState(true); // 中/日切换
    const [isVoiceActive, setIsVoiceActive] = useState(false); // 判断是否播放
    const [cvName, setCvName] = useState('林簌'); // CV 姓名
    const [audioGroup, setAudioGroup] = useState('group00'); // 默认音频组
    const audioGroup00Ref = useRef<HTMLDivElement | null>(null); // 音频组 0 (中文)
    const audioGroup01Ref = useRef<HTMLDivElement | null>(null); // 音频组 1 (日文)

    // 监听 audioGroup 变化，重置音频状态
    useEffect(() => {
        if (audioGroup === 'group00' || audioGroup === 'group01') {
            setIsVoiceActive(false); // 重置播放状态
        }
    }, [audioGroup]);

    const toggleLanguage = () => {
        // 为了过度的流畅性，加一个动画效果
        const newLanguage = !isChinese;
        setIsChinese(newLanguage); // 切换语言
        setCvName(newLanguage ? '林簌' : '斋藤千和'); // 切换CV名字
        setAudioGroup(newLanguage ? 'group00' : 'group01'); // 切换音频组
    };

    const handleVoiceClick = () => {
        setIsVoiceActive(true);
        const audioRef = audioGroup === 'group00' ? audioGroup00Ref : audioGroup01Ref; // 获取当前音频组的 ref

        if (audioRef.current) {
            const audios = audioRef.current.querySelectorAll('audio'); // 获取所有音频元素
            const randomIndex = Math.floor(Math.random() * audios.length); // 随机选择一个音频
            const selectedAudio = audios[randomIndex];
            selectedAudio.play(); // 播放选中的音频

            // 音频播放完成后恢复背景
            selectedAudio.onended = () => {
                setIsVoiceActive(false);
            };
        }
    };
    // 监听audioGroup变化，重新播放音频
    useEffect(() => {
        if (audioGroup === "group00" || audioGroup === "group01") {
            // 重置音频状态
            setIsVoiceActive(false);
        }
    }, [audioGroup]);

    // 引用自定义按钮
    const nextButtonRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLDivElement>(null);
    return (

        <div className="city_shider_img relative w-full h-full">

            <div className="character__swiper--con swiper-container">

                {/* 主 Swiper (主图展示) */}
                <Swiper
                    navigation={{
                        nextEl: nextButtonRef.current,
                        prevEl: prevButtonRef.current,
                    }}
                    loop={true} // 启用主图循环模式
                    allowTouchMove={false}
                    thumbs={{swiper: thumbsSwiper}} // 使用缩略图同步
                    modules={[FreeMode, Navigation, Thumbs, Pagination]} // 启用各个模块
                    className="my-swiper swiper-wrapper" // 添加自定义类名
                >
                    {characterData.map((character) => (
                        <SwiperSlide key={character.id} style={{width:1681}}>
                            {/* 角色图片 */}
                            <img
                                src={character.imageUrl}
                                draggable="false"
                                className="character__person animated"
                                alt={character.name}
                            />
                            <img
                                src={character.iconUrl}
                                draggable="false"
                                className="character__icon"
                                alt={`${character.name} Icon`}
                            />
                            <div className="character__content">
                                <img src="https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142281505.png"
                                     className="character__name" alt="qing"/>
                                <div className="character__cv">
                                    <div className="relative overflow-hidden">
                                        <div className="flex whitespace-nowrap">
                                            {/*<p>CV: 林簌</p>
                                            <p>CV:斋藤千和</p>*/}
                                            <p>CV: {cvName}</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`character__voice ${isVoiceActive ? 'character__voice--active' : ''}`}
                                        onClick={handleVoiceClick}
                                    >
                                        {/*/!* 点击后，改变背景图像 *!/*/}
                                        {/*<div*/}
                                        {/*    className={`character__voice--active ${isVoiceActive ? 'character__voice--playing' : ''}`}*/}
                                        {/*    style={{*/}
                                        {/*        cursor: 'auto',*/}
                                        {/*        backgroundImage: `url(${isVoiceActive ? '/src/assets/CharacterDetail/01.gif' : '/src/assets/CharacterDetail/bf.png'})`,*/}
                                        {/*    }}*/}
                                        {/*/>*/}
                                    </div>
                                    {/*<div className="character__voice"/>*/}
                                    {/*<div className="character__voice character__voice--active"/>*/}
                                    {/*中/日切换*/}
                                    <div className="character__switch--wrap">
                                        <div className="character__switch">
                                            <p
                                                className={`character__sbtn character__sbtn0 ${isChinese ? 'character__sbtn--active' : ''}`}
                                                onClick={toggleLanguage}
                                            >
                                                中
                                            </p>
                                            <p
                                                className={`character__sbtn character__sbtn1 ${!isChinese ? 'character__sbtn--active' : ''}`}
                                                onClick={toggleLanguage}
                                            >
                                                日
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*介绍*/}
                                <div
                                    className="touch-none character__intro mCustomScrollbar _mCS_73 mCS_no_scrollbar w-[550px] h-[150px]">
                                    <div id="mCSB_73"
                                         className="mCustomScrollBox mCS-light-thick mCSB_vertical mCSB_inside"
                                    >
                                        <div id="mCSB_73_container"
                                             className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                             dir="ltr">
                                            <div className="character__intro-content">
                                                <p>
                                                    身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。
                                                    <br/>

                                                    当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。
                                                </p>
                                            </div>
                                        </div>
                                        <div id="mCSB_73_scrollbar_vertical"
                                             className="mCSB_scrollTools mCSB_73_scrollbar mCS-light-thick mCSB_scrollTools_vertica hidden"
                                        >
                                            <div className="mCSB_draggerContainer">
                                                <div id="mCSB_73_dragger_vertical" className="mCSB_dragger"
                                                >
                                                    <div className="mCSB_dragger_bar"></div>
                                                </div>
                                                <div className="mCSB_draggerRail"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620144979413.png"
                                 draggable="false" className="character__sen" alt=""/>
                            <div ref={audioGroup00Ref}
                                 style={{
                                     display: audioGroup === 'group00' ? 'block' : 'none',
                                     transition: 'opacity 0.3s ease-in-out'
                                 }}>
                                <audio
                                    src="https://webstatic.mihayo.com/upload/op-public/2019/12/11/209a68a166b14b27e11a8b64c466ea7c_7021182076965695539.mp3"
                                    className="character__audio"></audio>
                                <audio
                                    src="https://webstatic.mihayo.com/upload/op-public/2019/12/11/806fad7c524efcebd55abc2ce4f8ce6a_5745385847854898057.mp3"
                                    className="character__audio"></audio>
                                <audio
                                    src="https://webstatic.mihayo.com/upload/op-public/2019/12/11/74c81976dc6f3868ecc264bbd143e571_4077467239236738470.mp3"
                                    className="character__audio"></audio>
                            </div>
                            <div ref={audioGroup01Ref}
                                 style={{
                                     display: audioGroup === 'group01' ? 'block' : 'none',
                                     transition: 'opacity 0.3s ease-in-out'
                                 }}>
                                <audio src="https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620145220378.mp3"
                                       className="character__audio"></audio>
                                <audio src="https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620145562610.mp3"
                                       className="character__audio"></audio>
                                <audio src="https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620145849323.mp3"
                                       className="character__audio"></audio>
                            </div>
                        </SwiperSlide>
                    ))}
                    <span className="swiper-notification"/>
                </Swiper>
                {/*分页*/}
                <div className="character__page">
                    {/* 缩略图 Swiper */}
                    <Swiper
                        onSwiper={setThumbsSwiper} // 获取缩略图Swiper实例
                        spaceBetween={34}
                        slidesPerView={6}
                        allowTouchMove={false}
                        navigation={{
                            nextEl: nextButtonRef.current,
                            prevEl: prevButtonRef.current,
                        }}
                        freeMode={true}
                        loop={true} // 启用缩略图循环模式
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="character__swiper--page swiper-container"
                    >
                        {characterData.map((character) => (
                            <SwiperSlide key={character.id} style={{width: 110}}
                                         className="swiper-slide swiper-slide-visible">
                                <img
                                    src={character.pageThumb.imageUrl}
                                    alt={character.pageThumb.name}
                                />
                                <p>{character.pageThumb.name}</p>
                            </SwiperSlide>
                        ))}
                        <span className="swiper-notification"/>
                    </Swiper>

                    {/* 自定义按钮 */}
                    <div
                        ref={nextButtonRef}
                        className="swiper-button-nex1t"
                    />
                    <div
                        ref={prevButtonRef}
                        className="swiper-button-pre1v"
                    />


                </div>

            </div>
        </div>
        /*<>
            {/!* 主体 Swiper *!/}
            <Swiper
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                pagination={pagination}
                className="swiper-shier select-none"
            >
                {characterData.map((character) => (
                    <SwiperSlide key={character.id}>
                        <div className="">
                            <img
                                src={character.imageUrl}
                                draggable="false"
                                className=""
                                alt={character.name}
                            />
                            {/!*<img*!/}
                            {/!*    src={character.iconUrl}*!/}
                            {/!*    draggable="false"*!/}
                            {/!*    className="character__icon"*!/}
                            {/!*    alt={`${character.name} Icon`}*!/}
                            {/!*!/>*!/}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/!* 分页器 Swiper
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                wrapperClass="list-none"
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=""
            >
                {characterData.map((character) => (
                    <SwiperSlide key={character.id} className="">
                        <div className="">
                            <img
                                src={character.pageThumb.imageUrl}
                                alt={character.pageThumb.name}
                                className=""
                            />
                            <p className="">{character.pageThumb.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>*!/}
        </>*/
    );
}

export default Shider

