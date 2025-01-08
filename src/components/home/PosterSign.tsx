import {PosterProps} from "@/types";

const PosterSign = ({ onPlay }:PosterProps) => {

    const Pingstre = () => {
        window.location.href = 'https://www.baidu.com'; // 替换为你要跳转的地址
    };


    return (
        <div className="z-40 flex flex-col items-center justify-end absolute top-0 bottom-0 right-0 left-0 box-border">
            {/*跳转专题*/}
            <div className="absolute w-[161px] h-[152px] top-[71px] right-7 z-50" onClick={Pingstre}>
                <img src="https://via.placeholder.com/188x88.png?text=ping" alt="专题" className="w-full h-auto cursor-pointer"/>
            </div>
            <div>

            </div>
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