import Poster from '@/components/home/Poster';
import {useOutletContext} from "react-router-dom";



const Home = () => {
    const { handlePlay } = useOutletContext<{ handlePlay: () => void }>();

    return (
        <div className="Home">
            <Poster onPlay={handlePlay} />
            News
            City
            Social
        </div>
    );
};

export default Home;