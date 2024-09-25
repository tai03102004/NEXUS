import { AiOutlineSearch } from "react-icons/ai";

interface HeadlineProps {
    setSearchQuery: (query: string) => void;
}

function Headline({setSearchQuery} : HeadlineProps) {

    return (
        <>
            <div className="gradient-bg-welcome">
                <div className="md:py-[80px] py-[60px] md:px-[115px] px-[80px]">
                    <div className="text-white font-genos font-bold text-[40px] mb-[10px]">
                        NFT Marketplace
                    </div>
                    <div className="text-white text-[20px] mb-[20px] font-genos">
                        Browse through more than 50k NFTs on the NFT Marketplace.
                    </div>
                    <form className="flex items-center bg-white border border-gray-300 rounded-[10px] overflow-hidden">
                        <input 
                            placeholder="Search your favourite NFTs" 
                            className="w-full px-4 py-2 outline-none text-gray-700 border-none focus:ring-0"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <AiOutlineSearch className= "mx-3 cursor-pointer" fontSize={20}/>
                    </form>
                </div>
            </div> 
        </>
    )
}

export default Headline;