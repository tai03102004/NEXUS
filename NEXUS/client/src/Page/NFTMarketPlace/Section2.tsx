import { Link } from "react-router-dom";
import nftsMarketPlace from "../../data/nftsMarketPlace";
import Pagination from "../../helper/pagination";
import ServiceCard from "../../middlewares/ServiceCard";
import { useState } from "react";

const ITEMS_PER_PAGE = 9;

interface Section2Props {
        searchQuery: string;
}

function Section2({ searchQuery }: Section2Props) {

        const [currentPage, setCurrentPage] = useState(1);

        const filterNFTs = nftsMarketPlace.filter(nft => 
                nft.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const totalPages = Math.ceil(filterNFTs.length/ITEMS_PER_PAGE);

        const displayNFTs = filterNFTs.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
        );
        
        const handleNextPage = () => {
                if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                }
        };
        
        const handlePreviousPage = () => {
                if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                }
        };
        return ( 
                <>
                        <div className="gradient-bg-section2">
                                <div>
                                        <div className="flex lg:py-[60px] py-[40px] justify-center">
                                                <div className="text-white text-[40px] font-genos font-700">
                                                        NFTs Collections
                                                </div>
                                        </div>
                                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px] mx-[120px] lg:pb-[80px] pb-[60px]">
                                                {displayNFTs.map((nfts,index) => (
                                                        <Link to={`/NFT_Marketpace/${index}`}>
                                                                <ServiceCard 
                                                                        key={index}
                                                                        avatar={nfts.avatar}
                                                                        name="jimena_stark"
                                                                        link={nfts.link}
                                                                        title={nfts.title}
                                                                        subtitle="Price: "
                                                                        
                                                                />
                                                        </Link>
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
                </>
        )
}

export default Section2;