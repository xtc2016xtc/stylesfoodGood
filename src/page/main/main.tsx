import Poster from "@/components/home/Poster.tsx";
import Social from "@/components/Social/page.tsx";
import News from "@/components/News/News.tsx";

const Main = () => {
    return (
        <div className="Home">
            <Poster/>
            <News/>
            City
            <Social />
        </div>
    )
}

export default Main