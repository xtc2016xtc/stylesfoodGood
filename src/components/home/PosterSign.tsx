import {PosterProps} from "@/types";
import Pingstre from "@/components/home/Sign/Pingstre.tsx";
import PosterVideoEntry from "@/components/home/PosterVideoEntry.tsx";
import YsDownloadPc from "@/components/home/download/YsDownloadPc.tsx";
import PosterArrows from "@/components/home/PosterArrows.tsx";
import ButtonCard from "@/components/home/download/ButtonCard.tsx";
import TextYsTS from "@/components/home/download/TextYsTS.tsx";


const PosterSign = ({ onPlay,AriaECX }:PosterProps) => {

    return (
        <div className="Sign-master">
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