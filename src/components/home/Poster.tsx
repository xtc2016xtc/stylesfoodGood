import {PosterProps} from "@/types";
import MediaPG from "@/components/media/MediaPG.tsx";
import PosterConcept from "@/components/home/PosterConcept.tsx";

const Poster = ({ onPlay }:PosterProps) => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div id="bgWrap" className="w-screen h-screen flex left-0 top-0 bottom-0 right-0 z-10 justify-center items-center bg-white">
                <PosterConcept />
                <MediaPG />
            </div>
            PosterSign
            <button  onClick={() => {
                console.log('播放按钮被点击');
                onPlay();
            }} className="absolute top-5 ml-52 text-white bg-white z-40">
                点我播放
            </button>
        </div>
    );
};

export default Poster;