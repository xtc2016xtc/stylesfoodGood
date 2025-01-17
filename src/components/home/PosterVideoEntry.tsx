import {PosterVideoEntryPorops} from "@/types";

const PosterVideoEntry = ({ onPlay }:PosterVideoEntryPorops) => {
    return (
        <div className="w-[356px] h-[76px] mb-5 bg-custom-image">
            <button onClick={() => {
                console.log('播放按钮被点击');
                onPlay();
            }} className="relative
          block
          mt-3.5
          mr-auto
          mb-0
          ml-auto
          mx-auto
          w-[48px]
          h-[48px]
          rounded-[50%]
          border-0
          bg-white
          text-0
          cursor-pointer
          outline-none
          transition
          duration-200
          poster__video
          hover:custom-bg-transparent
          ease-linear">
                "播放"
            </button>
        </div>
    )
}

export default PosterVideoEntry