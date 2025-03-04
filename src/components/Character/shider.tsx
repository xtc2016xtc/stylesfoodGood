// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle";
// import characterData from "@/data/slidesData.ts";
// import required modules
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import SwiperCore from "swiper";
import {Details} from "@/types";
import {useLocation} from "react-router-dom";
import {Loader} from "lucide-react";
import {debounce} from 'lodash'

// 在全局声明文件或组件顶部添加
declare module 'lodash' {
    interface DebouncedFunc<T extends (...args: any[]) => any> {
        cancel: () => void;
    }
}

interface ShiderProps {
    cityDetail:Details[],

}

/*初版*/
const Shider = ({cityDetail}:ShiderProps) => {
    const location = useLocation();

    /*改进1：增强获取参数逻辑*/
    const getBalidCat = useCallback(()=>{
        const params = new URLSearchParams(location.search);
        const rawCat = parseInt(params.get("cat")|| '0' ,10);
        return Math.min(
            Math.max(0,rawCat),
            Math.max(cityDetail.length - 1),
        )
    },[cityDetail.length, location.search])

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null); // 存储缩略图Swiper实例
    const [targetCat, setTargetCat] = useState(()=> getBalidCat())
    const swiperRef = useRef<SwiperCore | null>(null);
    const [isChinese, setIsChinese] = useState(true); // 中/日切换
    const [isVoiceActive, setIsVoiceActive] = useState(false); // 判断是否播放
    const [cvName, setCvName] = useState(cityDetail[0].cv.cvC); // 姓名
    const [audioGroup, setAudioGroup] = useState('group00'); // 默认音频组
    const audioGroup00Ref = useRef<HTMLDivElement | null>(null); // 音频组 0 (中文)
    const audioGroup01Ref = useRef<HTMLDivElement | null>(null); // 音频组 1 (日文)




    const debouncedSlideTo = useMemo(
        () => debounce((index: number) => {
            requestAnimationFrame(() => {
                if (swiperRef.current && !swiperRef.current.destroyed) {
                    console.log("执行防抖跳转至",index)
                    swiperRef.current.slideTo(index, 500);
                }
            })
        }, 300,{leading: true, trailing: false}),
        []
    );

    /*改进2：智能路由监听*/
    useEffect(() => {
        const newCat = getBalidCat();
        if(newCat !== targetCat){
            console.log("路由参数发生变化",newCat)
            setTargetCat(newCat)

            //如果swiper已初始化则直接跳转
            requestAnimationFrame(()=>{
                if(swiperRef.current && !swiperRef.current.destroyed){
                    console.log("执行参数跳转")
                    swiperRef.current.slideTo(newCat,500);
                }
            })
        }
        debouncedSlideTo(newCat)
    }, [location.search,debouncedSlideTo]);

    //防止内存泄露
    useEffect(() => {
        return () => {
            debouncedSlideTo.cancel();
        }
    }, [debouncedSlideTo]);

    /*改进3：Swiper初始化逻辑*/
    const HandleSwiperInit = (swiper:SwiperCore) =>{
        console.log("Swiper初始化,当前索引",swiper.activeIndex);
        swiperRef.current = swiper;
        setThumbsSwiper(swiper)

        /*检测是否纠正初始位置*/
        if(swiper.activeIndex !== targetCat){
            console.log("初始位置纠正")
            swiper.slideTo(targetCat,0)
        }
    }

    /*改进4：同步主副swiper*/
    const syncSwipers = (index:number) => {
        if(thumbsSwiper && thumbsSwiper.activeIndex !== index){
            thumbsSwiper.slideTo(index,300)
        }
    }

    /*改进5：增强滑动逻辑*/
    const enhancedSlideChange = (swiper:SwiperCore) => {
        const realIndex = swiper.realIndex;
        console.log("当前真实索引",realIndex)
        handleSlideChange(swiper)//保留

        if(!cityDetail[realIndex]){
            console.error("找不到",realIndex)
            return
        }
        setTargetCat(realIndex)

        //同步url
        if(realIndex !== targetCat){
            const newSearch = new URLSearchParams(location.search);
            newSearch.set('cat',realIndex.toString())
            // 避免历史记录堆积
            window.history.replaceState(null,'',`?${newSearch}`)
        }

        syncSwipers(realIndex)

        //更新姓名
        const currentCV = cityDetail[realIndex]?.cv || { cvC:'', readonly:'' };
        setCvName(isChinese ? currentCV.cvC : currentCV.readonly);


    }

    // 监听 audioGroup 变化，重置音频状态
    useEffect(() => {
        if (audioGroup === 'group00' || audioGroup === 'group01') {
            setIsVoiceActive(false); // 重置播放状态
        }
    }, [audioGroup]);



    const toggleLanguage = () => {
        const newLanguage = !isChinese;
        setIsChinese(newLanguage); // 切换语言

        /*获取当前索引*/
        const currentIndex = swiperRef.current?.realIndex || 0;
        const currentCV = cityDetail[currentIndex]?.cv || { cvC:'', readonly:'' };
        setCvName(newLanguage ? currentCV.cvC : currentCV.readonly);
        setAudioGroup(newLanguage ? 'group00' : 'group01'); // 切换音频组
    };

    // @ts-ignore
    const [activeIndex, setActiveIndex] = useState(targetCat)

    const handleSlideChange = (swiper: SwiperCore) => {
        const activeIndex = swiper.realIndex;
        setActiveIndex(activeIndex)
        const currentCV = cityDetail[activeIndex]?.cv || { cvC:'', readonly:'' };
        setCvName(isChinese ? currentCV.cvC : currentCV.readonly);
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

        const activeSlie = document.querySelector('.swiper-slide-active');
        if (!activeSlie) return;

        const audioContainer = activeSlie.querySelector(`[data-audio-group="${audioGroup}"]`);

        const audios = audioContainer?.querySelectorAll('audio') || [];

        if (audios.length === 0) {
            console.error("当前未找到音频")
            return;
        };

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

                console.log("播放开始",selectedAudio.src)

                // 使用标准事件监听器（替代 onended）
                const endHandler = () => {
                    setIsVoiceActive(false);
                    console.log("播放结束",selectedAudio.src)
                    selectedAudio.removeEventListener('ended', endHandler);
                };
                selectedAudio.addEventListener('ended', endHandler);

            } catch (error) {
                console.error('音频播放失败:', error);
                setIsVoiceActive(false);
            }
        };

        playAudio().catch(r => {
            console.error("播放音频出现错误",r)
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


    // 引用自定义按钮
    const nextButtonRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLDivElement>(null);

    // 确保cityDetail数据已加载完成
    if (cityDetail.length === 0) return <Loader />;

    return (
        <div className="city_shider_img relative w-full h-full">
            <div className="character__swiper--con swiper-container">
                {/* 主 Swiper (主图展示) */}
                <Swiper
                    navigation={{
                        nextEl: nextButtonRef.current,
                        prevEl: prevButtonRef.current,
                    }}
                    loop={false} // 启用主图循环模式
                    allowTouchMove={false}
                    initialSlide={targetCat}
                    onSwiper={HandleSwiperInit}
                    onSlideChange={enhancedSlideChange} // 监听滑动事件
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
                                    />
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
                                 data-audio-group="group00"
                                 style={{
                                     display: audioGroup === 'group00' ? 'block' : 'none'
                                 }}>
                                {character.voice[0]?.cn?.map((url, index) => (
                                    <audio
                                        key={`cn-${index}`}
                                        src={url}
                                        preload={"auto"}
                                        crossOrigin={"anonymous"}
                                        className="character__audio"
                                    />
                                ))}
                            </div>
                            <div ref={audioGroup01Ref}
                                 data-audio-group="group01"
                                 style={{
                                     display: audioGroup === 'group01' ? 'block' : 'none'
                                 }}>
                                {character.voice[0]?.rb?.map((url, index) => (
                                    <audio
                                        key={`rb-${index}`}
                                        src={url}
                                        preload={"auto"}
                                        crossOrigin={"anonymous"}
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
                        loop={false} // 启用缩略图循环模式
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
    );
}

export default Shider

