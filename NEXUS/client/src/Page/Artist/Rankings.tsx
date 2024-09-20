import { useState } from "react";
import ArtistItem from "../../middlewares/ArtistItem";
import Pagination from "../../helper/pagination";
import artistRanking from "../../data/artistRanking";

const ITEMS_PER_PAGE = 15;

function Rankings() {
    const [activeTab, setActiveTab] = useState("Today");

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(artistRanking.length/ITEMS_PER_PAGE);

    const displayAstists = artistRanking.slice(
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

    const tabs = [
        { label: "Today", mobileLabel: "1d" },
        { label: "This Week", mobileLabel: "7d" },
        { label: "This Month", mobileLabel: "30d" },
        { label: "All Time", mobileLabel: "All Time" }
    ];

    return (
        <>
            <div className="gradient-bg-section2">
                <div className="flex justify-between sm:mx-[115px] mx-[20px] py-[50px]">
                    {
                    tabs.map((tab,index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTab(tab.label)}
                            className={`text-white text-center cursor-pointer flex-1 transition-colors duration-300 ${
                                activeTab === tab.label ? 'border-b-2 border-white text-white' : 'border-b-2 border-transparent text-gray-400'
                            }`}
                        >
                            <span className="hidden md:block">{tab.label}</span>
                            <span className="md:hidden">{tab.mobileLabel}</span>
                        </div>
                    ))}
                </div>
                <div className="pb-[50px]">
                    <div className="flex sm:mx-[115px] mx-[20px] py-2 border border-gray-600  rounded-[10px] my-[10px] px-[20px]">
                        <div className="flex w-[40%]">
                            <p className="text-white text-center mr-[20px]">#</p>
                            <p className="text-white text-center">Artist</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="text-white text-center">Change</p>
                            <p className="text-white text-center">NFTs Sold</p>
                            <p className="text-white text-center">Volume</p>
                        </div>
                    </div>
                    <div className="sm:mx-[115px] mx-[20px] flex-wrap">
                        {
                            displayAstists.map((item,index) => (
                                <ArtistItem 
                                    key={index}
                                    title2={item.title2}
                                    link={item.avatar}
                                    name={item.name}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    subtitle2={item.subtitle2} 
                                />
                            ))
                        }
                    </div>
                </div>

                {/* Pagination controls */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                />
            </div>
        </>
    );
}

export default Rankings;
