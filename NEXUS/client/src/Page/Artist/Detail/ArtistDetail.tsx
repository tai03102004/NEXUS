import { useState } from "react";
import nftsMarketPlace from "../../../data/nftsMarketPlace";
import ServiceCard from "../../../middlewares/ServiceCard";
import Pagination from "../../../helper/pagination";

const ITEMS_PER_PAGE = 15;

function ArtistDetail() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(nftsMarketPlace.length/ITEMS_PER_PAGE);

    const displayNFTs = nftsMarketPlace.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
    )

    const handleNextPage = () => {
            if(currentPage < totalPages) {
                    setCurrentPage(currentPage + 1)
            }
    }              

    const handlePreviousPage = () => {
            if(currentPage > 1) {
                    setCurrentPage(currentPage - 1)
            }
    }

    return (
        <>
            <div className="gradient-bg-welcome">
                <div>
                    <div>
                        <div>
                            <img src="/images/Profile.png" alt="profile" className="w-[100%]"/>
                        </div>
                        <div className="mt-[-35px] relative md:ml-[115px] ml-[70px]"> 
                            <img src="/images/Artists/Artist_1.png" alt="profile" className="w-[120px]"/>
                        </div>
                    </div>
                    <div className="md:ml-[115px] ml-[70px]">
                        <div className="flex mt-[40px]">
                            <div className="text-white w-[60%] font-bold text-[40px]">Animakid</div>
                            <div className="flex items-center">
                                <div className="flex mr-[20px] border-none bg-[#A259FF] p-[20px] rounded-[20px]">
                                    <img src="/images/copy.png" className="w-[20px] h-[20px] mr-[12px]"/>
                                    <p className="text-white">0xc0E3...B79C</p>
                                </div>
                                <div className="flex border border-[#A259FF] p-[20px] rounded-[20px]">
                                    <img src="/images/plus.png" className="w-[20px] h-[20px] mr-[12px]"/>
                                    <p className="text-white">Follow</p>
                                </div>
                            </div>
                        </div>  
                        <div className="grid grid-cols-6 gap-[30px] mt-[30px]">
                            <div className="text-white">
                                <div className="font-bold text-[20px] mb-[-15px]">250k+</div>
                                <br/>
                                <div className="text-[18px]">Volume</div>
                            </div>
                            <div className="text-white">
                                <div className="font-bold text-[20px] mb-[-15px]">50+</div>
                                <br/>
                                <div className="text-[18px]">NFTs Sold</div>
                            </div>
                            <div className="text-white">
                                <div className="font-bold text-[20px] mb-[-15px]">3000+</div>
                                <br/>
                                <div className="text-[18px]">Followers</div>
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <div className="text-[#858584] font-[900]">Bio</div>
                            <div className="text-white">The internet's friendliest designer kid.</div>
                        </div>
                        <div className="mt-[30px] py-[50px]">
                            <div className="text-[#858584] font-[900]">Links</div>
                            <div className="flex">
                                <img src="/images/links/Globe.png" className="mr-[10px]"/>
                                <img src="/images/links/DiscordLogo.png" className="mr-[10px]"/>
                                <img src="/images/links/YoutubeLogo.png" className="mr-[10px]"/>
                                <img src="/images/links/TwitterLogo.png" className="mr-[10px]"/>
                                <img src="/images/links/InstagramLogo.png" className="mr-[10px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-section2">
                        <div></div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px] mx-[120px] lg:pb-[80px] pb-[60px]">
                                {displayNFTs.map((nfts,index) => (
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
                            {/* Pagination controls */}
                            <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onNextPage={handleNextPage}
                                    onPreviousPage={handlePreviousPage}
                            />
                        </div>
                </div>
            </div>
        </>
    )
}

export default ArtistDetail;