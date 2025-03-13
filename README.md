
```md
# 基于deepseek-r1开发的ai应用启动命令
    ollama run deepseek-r1:32b
```
# `Shider` 组件文档

## 文件路径
shider.tsx

## 组件概述
`Shider` 组件用于展示角色的详细信息，包括角色图片、音频播放、语言切换等功能。组件使用 `Swiper` 进行主图和缩略图的滑动展示。

## 导入的模块
```tsx
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css/bundle";
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import SwiperCore from "swiper";
import {Details} from "@/types";
import {useLocation} from "react-router-dom";
import {Loader} from "lucide-react";
import {debounce} from 'lodash';
import { ScrollArea } from "@/components/ui/scroll-area";
```

## 组件属性
### `ShiderProps`
- `cityDetail: Details[]` - 角色详情数组。

## 组件状态
- `thumbsSwiper: SwiperCore | null` - 缩略图 `Swiper` 实例。
- `targetCat: number` - 当前选中的角色索引。
- `swiperRef: React.RefObject<SwiperCore | null>` - 主图 `Swiper` 实例引用。
- `isChinese: boolean` - 当前语言是否为中文。
- `isVoiceActive: boolean` - 音频是否正在播放。
- `cvName: string` - 当前角色的配音演员名称。
- `audioGroup: string` - 当前音频组。
- `audioGroup00Ref: React.RefObject<HTMLDivElement | null>` - 中文音频组引用。
- `audioGroup01Ref: React.RefObject<HTMLDivElement | null>` - 日文音频组引用。
- `activeIndex: number` - 当前 `Swiper` 的活动索引。

## 主要功能
### 获取有效的 `cat` 参数
```tsx
const getBalidCat = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const rawCat = parseInt(params.get("cat") || '0', 10);
    if (isNaN(rawCat) || rawCat < 0 || rawCat >= cityDetail.length) {
        return 0; // 默认值或其他处理方式
    }
    return rawCat;
}, [cityDetail.length, location.search]);
```

### 初始化 `Swiper`
```tsx
const HandleSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setThumbsSwiper(swiper);
    if (swiper.activeIndex !== targetCat) {
        swiper.slideTo(targetCat, 0);
    }
};
```

### 同步主副 `Swiper`
```tsx
const syncSwipers = (index: number) => {
    if (thumbsSwiper && thumbsSwiper.activeIndex !== index) {
        thumbsSwiper.slideTo(index, 300);
    }
};
```

### 增强滑动逻辑
```tsx
const enhancedSlideChange = (swiper: SwiperCore) => {
    const realIndex = swiper.realIndex;
    handleSlideChange(swiper);
    if (!cityDetail[realIndex]) {
        return;
    }
    setTargetCat(realIndex);
    updateURL(realIndex);
    syncSwipers(realIndex);
    updateCvName(realIndex);
};
```

### 更新 URL
```tsx
const updateURL = (index: number) => {
    const newSearch = new URLSearchParams(location.search);
    newSearch.set('cat', index.toString());
    window.history.replaceState(null, '', `?${newSearch}`);
};
```

### 更新配音演员名称
```tsx
const updateCvName = (index: number) => {
    const currentCV = cityDetail[index]?.cv || { cvC: '', readonly: '' };
    setCvName(isChinese ? currentCV.cvC : currentCV.readonly);
};
```

### 切换语言
```tsx
const toggleLanguage = () => {
    const newLanguage = !isChinese;
    setIsChinese(newLanguage);
    const currentIndex = swiperRef.current?.realIndex || 0;
    const currentCV = cityDetail[currentIndex]?.cv || { cvC: '', readonly: '' };
    setCvName(newLanguage ? currentCV.cvC : currentCV.readonly);
    setAudioGroup(newLanguage ? 'group00' : 'group01');
};
```

### 停止所有音频
```tsx
const stopAllAudios = () => {
    [audioGroup00Ref, audioGroup01Ref].forEach(ref => {
        const audios = ref.current?.querySelectorAll('audio') || [];
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    });
};
```

### 处理音频播放
```tsx
const handleVoiceClick = () => {
    stopAllAudios();
    const activeSlide = swiperRef.current?.slides[swiperRef.current.activeIndex];
    if (!activeSlide) return;
    const audioContainer = activeSlide.querySelector(`[data-audio-group="${audioGroup}"]`);
    const audios = audioContainer?.querySelectorAll('audio') || [];
    if (audios.length === 0) return;
    let randomIndex = Math.floor(Math.random() * audios.length);
    if (audios.length > 1) {
        const currentAudio = Array.from(audios).find(a => !a.paused);
        while (currentAudio && audios[randomIndex] === currentAudio) {
            randomIndex = Math.floor(Math.random() * audios.length);
        }
    }
    const selectedAudio = audios[randomIndex];
    const playAudio = async () => {
        try {
            await selectedAudio.play();
            setIsVoiceActive(true);
            const endHandler = () => {
                setIsVoiceActive(false);
                selectedAudio.removeEventListener('ended', endHandler);
            };
            selectedAudio.addEventListener('ended', endHandler);
        } catch (error) {
            setIsVoiceActive(false);
        }
    };
    playAudio().catch(r => {});
};
```

### 组件渲染
```tsx
return (
    <div className="city_shider_img relative w-full h-full">
        <div className="character__swiper--con swiper-container">
            <Swiper
                navigation={{
                    nextEl: nextButtonRef.current,
                    prevEl: prevButtonRef.current,
                }}
                loop={false}
                allowTouchMove={false}
                initialSlide={targetCat}
                onSwiper={HandleSwiperInit}
                onSlideChange={enhancedSlideChange}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="my-swiper swiper-wrapper"
            >
                {cityDetail.map((character) => (
                    <SwiperSlide key={character.cat} style={{width: 1681}}>
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
                            <div className="touch-none character__intro mCustomScrollbar _mCS_73 mCS_no_scrollbar">
                                <ScrollArea className="character__intro-content" key={character.cat}>
                                    {character.intro?.split('\n').map((paragraph, index, arr) => (
                                        <p key={index}>
                                            {paragraph}
                                            {index !== arr.length - 1 && <br/>}
                                        </p>
                                    ))}
                                </ScrollArea>
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
            <div className="character__page">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={34}
                    slidesPerView={6}
                    allowTouchMove={false}
                    navigation={{
                        nextEl: nextButtonRef.current,
                        prevEl: prevButtonRef.current,
                    }}
                    freeMode={true}
                    loop={false}
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
```

## 导出组件
```tsx
export default Shider;
```

# `CharacterDetail` 组件文档
## 文件路径
CharacterDetail.tsx

## 组件概述
`CharacterDetail` 组件用于展示特定城市的角色详细信息，包括背景图片、时间轴、角色滑动展示等功能。组件使用了 `Shider` 组件来展示角色的详细信息。

## 导入的模块
```tsx
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useActiveIndex } from "@/components/Nav/ActiveIndexContext.tsx";
import { cityDateData } from "@/data/slidesData.ts";
import Shider from "@/components/Character/shider.tsx";
import { Details } from "@/types";
import ProgressBar from "@/components/home/ProgressBar/ProgressBar.tsx";
```

## 组件状态
- `loading: boolean` - 加载状态，用于控制加载动画的显示。
- `location: ReturnType<typeof useLocation>` - 当前路由位置。
- `cityDetail: Details | undefined` - 当前城市的详细信息。

## 主要功能
### 获取当前城市的详细信息
```tsx
const cityDetail = cityDateData.find(c => c.id === city);
```

### 设置和获取 `activeIndex`
```tsx
useEffect(() => {
    const storedActiveIndex = sessionStorage.getItem('activeIndex');
    if (storedActiveIndex) {
        setActiveIndex(parseInt(storedActiveIndex, 10));
    } else {
        setActiveIndex(2);
        sessionStorage.setItem('activeIndex', '2');
    }
}, [setActiveIndex]);
```

### 控制加载状态
```tsx
useEffect(() => {
    setLoading(true); // 开始加载
    setActiveIndex(2);
    setTimeout(() => {
        setLoading(false); // 停止加载
    }, 1000); // 模拟加载时间
}, [location, setActiveIndex]);
```

### 渲染时间轴
```tsx
<ul className="absolute z-[9] top-0 left-0 w-[370px] h-full box-border pt-[187px] character__sidebar">
    {loading && <div className="loader"><ProgressBar/></div>} {/* 显示加载器 */}
    {cityDateData.map((city, index) => (
        <li key={index}
            className={`w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider ${city.id === cityDetail.id ? 'character__city--active' : ''}`}>
            <Link to={`${city.url}?cat=0`}
                  className="inline-block w-[40%] h-full text-[#fff] cursor-pointer">
                {city.name}
            </Link>
        </li>
    ))}
    <li className="pointer-events-none w-full h-[54px] leading-[54px] text-[18px] text-[#fff] box-border pl-[56px] bg-[18px] select-none city_shider">敬请期待</li>
</ul>
```

### 渲染 `Shider` 组件
```tsx
<Shider cityDetail={cityDate} />
```

## 导出组件
```tsx
export default CharacterDetail;
```


# `City` 组件文档

## 文件路径
[src/components/City/City.tsx](src/components/City/City.tsx)

## 组件概述
`City` 组件用于展示城市列表，每个城市项包括背景图片、城市名称和角色图片。点击城市项可以导航到相应的城市详情页面。

## 导入的模块
```tsx
import { Link } from 'react-router-dom';
import { cityDateData } from '@/data/slidesData';
```

## 组件结构
```tsx
const City = () => {
    return (
        <section className="w-full">
            <ul className="overflow-hidden">
                {cityDateData.map((city) => (
                    <li key={city.id}
                        className="city__list-item relative w-full h-[260px] cursor-pointer overflow-hidden">
                        <div
                            className="city__list-bg absolute top-0 left-0 block w-full h-full"
                            style={{backgroundImage: `url(${city.backgroundImage})`}}
                        ></div>
                        <Link to={`${city.url}?cat=0`}
                              className="city__list-itema inline-block relative z-[3] text-[36px] text-[#fff] leading-[260px] w-full h-[260px] text-center overflow-hidden">
                            <p className="city__list-itema inline-block relative z-[3] text-[36px] text-[#fff] leading-[260px] w-full h-[260px] text-center overflow-hidden pda">{city.name}</p>
                        </Link>
                        <div
                            className="city__list-char"
                            style={{backgroundImage: `url(${city.characterImage})`}}
                        ></div>
                    </li>
                ))}
                <li className="city__list-item pointer-events-none city__list-item2 relative w-full h-[260px] cursor-pointer overflow-hidden">
                    <p className="city__list-item-des city__list-itema inline-block relative z-[3] text-[36px] text-[#fff] leading-[260px] w-full h-[260px] text-center overflow-hidden pda">敬请期待</p>
                </li>
            </ul>
        </section>
    );
};

export default City;
```

## 组件属性
- `cityDateData`: 包含城市数据的数组，每个城市数据包括 `id`, `backgroundImage`, `url`, `name`, 和 `characterImage` 属性。

## 主要功能
### 渲染城市列表
组件通过遍历 `cityDateData` 数组，生成每个城市的列表项。每个列表项包括背景图片、城市名称和角色图片。

### 导航到城市详情页面
点击城市项时，通过 `Link` 组件导航到相应的城市详情页面，URL 包含城市的 `id` 和 `cat` 参数。

### 显示“敬请期待”项
在城市列表的末尾，添加一个“敬请期待”的列表项，表示未来将添加更多城市。

## 导出组件
```tsx
export default City;
```