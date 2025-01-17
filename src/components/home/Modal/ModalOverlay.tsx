import {ModalOverlayProps} from "@/types";

const ModalOverlay = ({ AriaPass, onClose }:ModalOverlayProps) => {
    if(!AriaPass) return null;

    return (
        <div className="fixed box-border left-0 top-0 bottom-0 right-0 w-full h-screen opacity-100 z-[999] bg-black-7" aria-expanded="true" data-model="dialogAge">
            <div className="w-full min-h-full h-auto">
                <div className="block absolute right-0 top-0"/>
                {/*这是删除了overflow-hidden*/}
                <div role="dialog" aria-modal="true" className="custom-position-important w-[854px] h-[642px] relative box-border overflow-visible">
                    <div className="w-full h-full relative">
                        <img src="/Header/pc.jpg" alt="age_img" className="w-full h-full"/>
                        <div onClick={onClose} className="absolute top-0 -right-[57px] cursor-pointer w-[57px] h-[57px] age-close"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOverlay