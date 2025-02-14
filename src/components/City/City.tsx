import { Link } from 'react-router-dom';
import { cityData } from '@/data/slidesData';

const City = () => {
    return (
        <section className="w-full">
            <ul className="overflow-hidden">
                {cityData.map((city) => (
                    <li key={city.id}
                        className="city__list-item relative w-full h-[260px] cursor-pointer overflow-hidden">
                        <div
                            className="city__list-bg absolute top-0 left-0 block w-full h-full"
                            style={{backgroundImage: `url(${city.backgroundImage})`}}
                        ></div>
                        <Link to={`${city.url}?cat=0`}
                              className="city__list-itema inline-block relative z-[3] text-[36px] text-[#fff] leading-[260px] w-full h-[260px] text-center overflow-hidden">
                            <p className="city__list-itema inline-block relative z-[3] text-[36px] text-[#fff] leading-[260px] w-full h-[260px] text-center overflow-hidden pda">{city.name}</p>
                        </Link>
                        <div
                            className="city__list-char"
                            style={{backgroundImage: `url(${city.characterImage})`}}
                        ></div>
                    </li>
                ))}
                <li className="city__list-item pointer-events-none city__list-item2 relative w-full h-[260px] cursor-pointer overflow-hidden">
                    <p className="city__list-item-des city__list-itema inline-block relative z-[3] text-[36px] text-[#fff] leading-[260px] w-full h-[260px] text-center overflow-hidden pda">敬请期待</p>
                </li>
            </ul>
        </section>
    );
};

export default City;