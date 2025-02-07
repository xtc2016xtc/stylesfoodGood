import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <Link to="/main" className="bg-white text-red-600">
                首页
            </Link>
        </div>
    );
};

export default Home;