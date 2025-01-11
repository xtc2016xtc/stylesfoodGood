import {poster} from "@/utils";

const MediaPG = () => {


    return (
        <video id="bg" poster="/Header/poster.jpg"
               loop
               muted
               autoPlay
               className="opacity-100 h-screen w-screen object-cover">
            <source src={poster} type="video/mp4" />
            " 您的浏览器不支持播放此视频. "
        </video>
    )
}

export default MediaPG