import { Link } from "react-router-dom";
import ArtistCard from "../../middlewares/ArtistCard";
import artistRanking from "../../data/artistRanking";

function Artists () {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-rol flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="mf:flex justify-between">
                    <div className="flex flex-col justify-start items-start mf:mr-[50px]" data-aos="fade-right" data-aos-duration = "1200">
                        <h1 className="text-white text-[70px] font-bold sm:text-5xl py-2 text-gradien font-genos">
                            Most Popular Artists
                        </h1>
                    </div>
                    <Link to={"/ranking"}>
                            <div className="flex items-center justify-center bg-[#000] rounded-[10px] group hover:bg-[#53C343] transition-all duration-300 ease-[cubic-bezier(0.2, 1, 0.3, 1)]">
                                    <div className="px-[36px] py-[20px] text-[24px] text-[#53C343] font-genos font-bold group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.2, 1, 0.3, 1)]" data-aos="fade-left" data-aos-duration = "1200">
                                            <div className="flex">
                                                <img loading="lazy" src="./images/RocketLaunch.svg" width={24}/>
                                                <p className="ml-[15px]">View Rankings</p>
                                            </div>
                                    </div>
                            </div>
                    </Link>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-[20px] my-[60px]" data-aos="fade-up" data-aos-duration = "1600">
                    {artistRanking.slice(20,28).map((item,index) => (
                        <Link to={`artist/${item.title2}`}>
                            <ArtistCard 
                                key = {index}
                                title = {item.title}
                                subtitle2 = {item.subtitle}
                                link= {item.avatar}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Artists;