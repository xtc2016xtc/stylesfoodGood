import MediaPG from "@/components/media/MediaPG.tsx";
import PosterConcept from "@/components/home/PosterConcept.tsx";
import PosterSign from "@/components/home/PosterSign.tsx";
import {useOutletContext} from "react-router-dom";

const Poster = () => {

    const { handlePlay } = useOutletContext<{ handlePlay: () => void }>();

    const { AriaECX } = useOutletContext<{ AriaECX:() => void}>();


    return (
        <div className="relative w-full h-full overflow-hidden">
            <div id="bgWrap" className="w-screen h-screen flex left-0 top-0 bottom-0 right-0 z-10 justify-center items-center bg-white">
                <PosterConcept />
                <MediaPG />
            </div>
            <PosterSign  onPlay={handlePlay} AriaECX={AriaECX}/>

        </div>
    );
};

export default Poster;