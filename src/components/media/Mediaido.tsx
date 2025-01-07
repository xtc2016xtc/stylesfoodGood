import {MediaidoProps} from "@/types";


const Mediaido  = ({ isVisible, onClose }:MediaidoProps) => {
    if (!isVisible) return null;

    return (
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative w-full h-full">
                <button onClick={onClose} className="absolute top-4 right-4 bg-white text-black p-2 rounded">关闭</button>
                <video className="w-full h-full" controls autoPlay>
                    <source src="https://webstatic.mihoyo.com/upload/op-public/2020/09/27/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4" type="video/mp4" />
                    您的浏览器不支持 HTML5 视频。
                </video>
            </div>
        </div>
    );
};

export default Mediaido;