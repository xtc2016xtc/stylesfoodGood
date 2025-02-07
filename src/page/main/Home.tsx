import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* 首页链接 */}
            <Link
                to="/main"
                className="bg-white text-red-600 px-4 py-2 rounded"
            >
                进入官网
            </Link>
        </div>
    );
};

export default Home;