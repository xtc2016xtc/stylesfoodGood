import {PosterProps} from "@/types";

const PosterVideoEntry = ({ onPlay }:PosterProps) => {
    return (
        <div className="w-[356px] h-[76px] mb-5 bg-custom-image bg-no-repeat bg-center bg-cover">
            <button onClick={() => {
                console.log('播放按钮被点击');
                onPlay();
            }} className="absolute top-5 ml-52 text-white bg-white z-40">
                点我播放
            </button>
        </div>
    )
}

export default PosterVideoEntry