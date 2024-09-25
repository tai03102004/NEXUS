import { useState } from "react";
import nftsMarketPlace from "../../../data/nftsMarketPlace";
import ServiceCard from "../../../middlewares/ServiceCard";
import Pagination from "../../../helper/pagination";
import HealineDetail from "./HeadlineDetail";
import { Link } from "react-router-dom";

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
                    <HealineDetail/>
                    <div className="gradient-bg-section2">
                        <div></div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px] mx-[120px] lg:pb-[80px] pb-[60px]">
                                {displayNFTs.map((nfts,index) => (
                                    <Link to={`/NFT_Marketpace/${nfts.id}`} >
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
            </div>
        </>
    )
}

export default ArtistDetail;