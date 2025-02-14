import { Link } from 'react-router-dom';
import { cityData } from '@/data/slidesData';

const City = () => {
    return (
        <section className="w-full">
            <ul className="flex flex-wrap justify-center">
                {cityData.map((city) => (
                    <li key={city.id} className="city__list-item relative m-4 w-64 h-64">
                        <div
                            className="city__list-bg absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${city.backgroundImage})` }}
                        ></div>
                        <Link to={`${city.url}?cat=0`} className="relative z-10 flex items-center justify-center h-full text-white text-xl font-bold">
                            <p>{city.name}</p>
                        </Link>
                        <div
                            className="city__list-char absolute bottom-0 right-0 w-24 h-24 bg-cover bg-center"
                            style={{ backgroundImage: `url(${city.characterImage})` }}
                        ></div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default City;