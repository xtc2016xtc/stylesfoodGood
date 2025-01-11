import {MediaidoProps} from "@/types";


const Mediaido  = ({ isVisible, onClose }:MediaidoProps) => {
    if (!isVisible) return <div className="absolute left-0 top-0 w-full h-full overflow-hidden max-w-[1280ppx]"></div>;

    return (
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-[1000]">
            <div className="bg-black-7 fixed box-border left-0 top-0 w-full h-screen opacity-100 right-0 bottom-0 z-[1000]" aria-expanded="true">
                <div className="w-full min-h-full h-auto">
                    <div className="block absolute right-0 top-0"></div>
                    <div role="dialog" aria-modal="true" className="top-0 left-[316px] w-[896px] max-h-[504px] min-h-[504px] h-screen box-border custom-position-important">
                        <div className="relative w-full h-full">
                            <button
                                onClick={onClose}
                                className="
                                absolute
                                right-[-62px]
                                 top-2.5
                                 w-8
                                 h-8
                                  opacity-75
                                   custom-background
                                   border-0
                                    outline-none
                                     text-0
                                      cursor-pointer">关闭</button>
                            <video className="w-full h-auto" controls autoPlay src="https://webstatic.mihoyo.com/upload/op-public/2020/09/27/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mediaido;