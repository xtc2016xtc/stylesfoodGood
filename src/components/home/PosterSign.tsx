import {PosterProps} from "@/types";
import Pingstre from "@/components/home/Sign/Pingstre.tsx";
import PosterVideoEntry from "@/components/home/PosterVideoEntry.tsx";
import YsDownloadPc from "@/components/home/download/YsDownloadPc.tsx";
import PosterArrows from "@/components/home/PosterArrows.tsx";


const PosterSign = ({ onPlay }:PosterProps) => {

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

            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default PosterSign