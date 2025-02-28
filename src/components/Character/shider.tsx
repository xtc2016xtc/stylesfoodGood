// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle";
// import characterData from "@/data/slidesData.ts";
// import required modules
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import {useEffect, useRef, useState} from "react";
import SwiperCore from "swiper";
import {Details} from "@/types";

interface ShiderProps {
    cityDetail:Details[]
}

/*初版*/
const Shider = ({cityDetail}:ShiderProps) => {
    console.log("调试",cityDetail.map(detail => detail.cv.cvC))
    console.log("调试",cityDetail.map(detail => detail.cv.readonly))

    const cnChinense = cityDetail.map(detail=>detail.cv.cvC)
    const rbCjom =cityDetail.map(detail=>detail.cv.readonly)

    console.log("中文",cnChinense)
    console.log("日文",rbCjom)

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null); // 存储缩略图Swiper实例
    const [isChinese, setIsChinese] = useState(true); // 中/日切换
    const [isVoiceActive, setIsVoiceActive] = useState(false); // 判断是否播放
    const [cvName, setCvName] = useState(cityDetail[0].cv.cvC); // 姓名
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
        const newLanguage = !isChinese;
        setIsChinese(newLanguage); // 切换语言
        setCvName(newLanguage ? cnChinense[0] : rbCjom[0]); // 切换CV名字
        setAudioGroup(newLanguage ? 'group00' : 'group01'); // 切换音频组
    };

    const handleSlideChange = (swiper: SwiperCore) => {
        const activeIndex = swiper.realIndex;
        const activeDetail = cityDetail[activeIndex];
        setCvName(isChinese ? activeDetail.cv.cvC : activeDetail.cv.readonly);
    };
    // 新增停止音频的通用方法
    const stopAllAudios = () => {
        [audioGroup00Ref, audioGroup01Ref].forEach(ref => {
            const audios = ref.current?.querySelectorAll('audio') || [];
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        });
    };

// 优化后的点击处理函数
    const handleVoiceClick = () => {
        // 先停止所有正在播放的音频
        stopAllAudios();

        const audioRef = audioGroup === 'group00' ? audioGroup00Ref : audioGroup01Ref;
        const audios = audioRef.current?.querySelectorAll('audio');

        if (!audios || audios.length === 0) {
            console.error('未找到可用音频');
            return;
        }

        // 生成随机索引（带防重复机制）
        let randomIndex = Math.floor(Math.random() * audios.length);
        if (audios.length > 1) {
            const currentAudio = Array.from(audios).find(a => !a.paused);
            while (currentAudio && audios[randomIndex] === currentAudio) {
                randomIndex = Math.floor(Math.random() * audios.length);
            }
        }

        const selectedAudio = audios[randomIndex];

        // 使用 async/await 处理播放
        const playAudio = async () => {
            try {
                await selectedAudio.play();
                setIsVoiceActive(true);

                // 使用标准事件监听器（替代 onended）
                const endHandler = () => {
                    setIsVoiceActive(false);
                    selectedAudio.removeEventListener('ended', endHandler);
                };
                selectedAudio.addEventListener('ended', endHandler);

            } catch (error) {
                console.error('音频播放失败:', error);
                setIsVoiceActive(false);
            }
        };

        playAudio().then(r => {
            console.error(r)
        })
    };

// 增强版的 useEffect 监听
    useEffect(() => {
        // 切换分组时停止所有音频
        const cleanup = () => {
            stopAllAudios();
            setIsVoiceActive(false);
        };

        if (["group00", "group01"].includes(audioGroup)) {
            cleanup();
        }

        return cleanup;
    }, [audioGroup]);

// {// 停止按钮点击处理
//     const handleStop = () => {
//         stopAllAudios();
//         setIsVoiceActive(false);
//     };}

    // const handleVoiceClick = () => {
    //     setIsVoiceActive(true);
    //     const audioRef = audioGroup === 'group00' ? audioGroup00Ref : audioGroup01Ref; // 获取当前音频组的 ref
    //
    //     if (audioRef.current) {
    //         const audios = audioRef.current.querySelectorAll('audio'); // 获取所有音频元素
    //         const randomIndex = Math.floor(Math.random() * audios.length); // 随机选择一个音频
    //         const selectedAudio = audios[randomIndex];
    //         selectedAudio.play().then(r => {
    //             console.log(r)
    //         }); // 播放选中的音频
    //
    //         // 音频播放完成后恢复背景
    //         selectedAudio.onended = () => {
    //             setIsVoiceActive(false);
    //         };
    //     }
    // };
    // // 监听audioGroup变化，重新播放音频
    // useEffect(() => {
    //     if (audioGroup === "group00" || audioGroup === "group01") {
    //         // 重置音频状态
    //         setIsVoiceActive(false);
    //     }
    // }, [audioGroup]);

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
                    onSlideChange={handleSlideChange} // 监听滑动事件
                    thumbs={{swiper: thumbsSwiper}} // 使用缩略图同步
                    modules={[FreeMode, Navigation, Thumbs, Pagination]} // 启用各个模块
                    className="my-swiper swiper-wrapper" // 添加自定义类名
                >
                    {cityDetail.map((character) => (
                        <SwiperSlide key={character.cat} style={{width: 1681}}>
                            {/* 角色图片 */}
                            <img
                                src={character.catImage}
                                draggable="false"
                                className="character__person animated"
                                alt={character.catName}
                            />
                            <img
                                src={character.catIcon}
                                draggable="false"
                                className="character__icon"
                                alt={`${character.catName} Icon`}
                            />
                            <div className="character__content">
                                <img src={character.catNameUrl}
                                     className="character__name" alt="qing"/>
                                <div className="character__cv">
                                    <div className="relative overflow-hidden">
                                        <div className="flex whitespace-nowrap">
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
                                    className="touch-none character__intro mCustomScrollbar _mCS_73 mCS_no_scrollbar">
                                    <div id="mCSB_73"
                                         className="mCustomScrollBox mCS-light-thick mCSB_vertical mCSB_inside"
                                    >
                                        <div id="mCSB_73_container"
                                             className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                             dir="ltr">
                                            <div className="character__intro-content">
                                                {character.intro?.split('\n').map((paragraph, index, arr) => (
                                                    <p key={index}>
                                                        {paragraph}
                                                        {index !== arr.length - 1 && <br/>}
                                                    </p>
                                                ))}
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
                            <img src={character.catBigUrl}
                                 draggable="false" className="character__sen" alt=""/>
                            <div ref={audioGroup00Ref}
                                 style={{
                                     display: audioGroup === 'group00' ? 'block' : 'none',
                                     transition: 'opacity 0.3s ease-in-out'
                                 }}>
                                {character.voice[0]?.cn?.map((url, index) => (
                                    <audio
                                        key={`cn-${index}`}
                                        src={url}
                                        className="character__audio"
                                    />
                                ))}
                            </div>
                            <div ref={audioGroup01Ref}
                                 style={{
                                     display: audioGroup === 'group01' ? 'block' : 'none',
                                     transition: 'opacity 0.3s ease-in-out'
                                 }}>
                                {character.voice[0]?.rb?.map((url, index) => (
                                    <audio
                                        key={`rb-${index}`}
                                        src={url}
                                        className="character__audio"
                                    />
                                ))}
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
                        {cityDetail.map((character) => (
                            <SwiperSlide key={character.cat} style={{width: 110}}
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

