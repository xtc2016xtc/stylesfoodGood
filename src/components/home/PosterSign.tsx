import {PosterProps} from "@/types";
import Pingstre from "@/components/home/Sign/Pingstre.tsx";
import PosterVideoEntry from "@/components/home/PosterVideoEntry.tsx";
import YsDownloadPc from "@/components/home/download/YsDownloadPc.tsx";
import PosterArrows from "@/components/home/PosterArrows.tsx";
import ButtonCard from "@/components/home/download/ButtonCard.tsx";
import TextYsTS from "@/components/home/download/TextYsTS.tsx";


const PosterSign = ({ onPlay,AriaECX }:PosterProps) => {

    return (
        <div className="z-[5] flex flex-col items-center justify-end absolute top-0 bottom-0 right-0 left-0 box-border">
            {/*跳转专题*/}
            <Pingstre />

            {/*播放*/}
            <PosterVideoEntry  onPlay={onPlay}/>

           {/*下载链接*/}
           <YsDownloadPc />

            {/*动画*/}
            <PosterArrows />

            {/*点击*/}
            <ButtonCard AriaECX={AriaECX}/>

            {/*侧边栏*/}
            {/*<Headerfly />*/}

            {/*侧边栏2*/}
            {/*<HeaderPLY/>*/}

            {/*应用介绍*/}
            <TextYsTS/>

        </div>
    )
}

export default PosterSign