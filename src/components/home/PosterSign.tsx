import {PosterProps} from "@/types";
import Pingstre from "@/components/home/Sign/Pingstre.tsx";
import PosterVideoEntry from "@/components/home/PosterVideoEntry.tsx";


const PosterSign = ({ onPlay }:PosterProps) => {

    return (
        <div className="z-40 flex flex-col items-center justify-end absolute top-0 bottom-0 right-0 left-0 box-border">
            {/*跳转专题*/}
            <Pingstre />
            {/*播放*/}
            <PosterVideoEntry />
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <button  onClick={() => {
                console.log('播放按钮被点击');
                onPlay();
            }} className="absolute top-5 ml-52 text-white bg-white z-40">
                点我播放
            </button>
        </div>
    )
}

export default PosterSign