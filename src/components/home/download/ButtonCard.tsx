import {YsDownloadPcPorops} from "@/types";

const ButtonCard = ({AriaECX}:YsDownloadPcPorops)=> {
    return (
        <div className="absolute bottom-[20px] right-[20px] w-[100px] cursor-pointer" onClick={() => {
            console.log('蒙版被点击');
            AriaECX()
        }}>
            <img src="/Header/ts.png" alt="" className="w-full"/>
        </div>
    )
}

export default ButtonCard