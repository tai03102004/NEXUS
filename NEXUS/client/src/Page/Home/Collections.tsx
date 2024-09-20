import { Link } from "react-router-dom";
import ServiceCard from "../../middlewares/ServiceCard";
import nftsHome from "../../data/nftsHome";



function Colelctions () {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-rol flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start" data-aos="fade-up" data-aos-duration = "1200">
                    <h1 className="text-white text-[70px] font-bold sm:text-5xl py-2 text-gradien font-genos">
                        Most Popular Collections
                    </h1>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px] my-[60px]" data-aos="fade-up" data-aos-duration = "1600">
                        {nftsHome.map((nfts,index) => (
                                <ServiceCard 
                                        key={index}
                                        avatar={nfts.avatar}
                                        name="jimena_stark"
                                        link={nfts.link}
                                        title={nfts.title}
                                        subtitle="Price: "
                                />
                        ))}
                </div>
                <Link to={"/NFT_Marketpace"}>
                        <div className="flex items-center justify-center bg-[#000] rounded-[10px] group hover:bg-[#53C343] transition-all duration-300 ease-[cubic-bezier(0.2, 1, 0.3, 1)]">
                                <div className="px-[36px] py-[20px] text-[24px] text-[#53C343] font-genos font-bold group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.2, 1, 0.3, 1)]">
                                        VIEW ALL ITEMS
                                </div>
                        </div>
                </Link>
            </div>
        </div>
    )
}

export default Colelctions;