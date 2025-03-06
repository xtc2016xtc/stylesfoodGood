import Poster from "@/components/home/Poster.tsx";
import Social from "@/components/Social/page.tsx";
import News from "@/components/News/News.tsx";
import City from "@/components/City/City.tsx";

const Main = () => {
    return (
        <div className="Home bg-pos-y-0">
            <Poster/>
            <News/>
            <City/>
            <Social />
        </div>
    )
}

export default Main