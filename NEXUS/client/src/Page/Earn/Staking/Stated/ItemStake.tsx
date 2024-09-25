import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

interface StakeProps {
    stringImage: string;
    title : string;
    subtitle: string;
    apr: string;
    avaiable1: string;
    avaiable2: string;
    staked1: string;
    staked2: string;
    rewards: string;
}

const ItemStake = ({stringImage, title, subtitle, apr,avaiable1,avaiable2,staked1,staked2,rewards}: StakeProps) => {
    return (
        <>  
            <div className="grid grid-cols-6 mb:grid-cols-3 border-t border-[#e5e7eb33] px-6.5 transition-colors duration-75 hover:bg-charcoal-800 mb:px-[7px]">
                <div className="flex w-full items-center gap-1 py-5 text-xs font-normal px-[30px] leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px]">
                    <div className="flex items-center gap-3 mb:gap-[7px]">
                        <img data-cortexui="image" className="relative w-10 flex-none mb:w-5" alt="USDC" src={stringImage}/>
                            <div className="flex flex-col">
                                <span className="text-base font-semibold leading-normal mb:text-3xs mb:leading-normal">
                                    <span>{title}</span></span>
                                    <span className="text-sm font-light leading-normal text-neutral-100 mb:text-[7px] mb:leading-normal">{subtitle}
                                </span> 
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px]">
                    <div className="flex items-center">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-base font-normal leading-6 mb:text-[8px] mb:leading-3 text-white">{apr}
                            </span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-3 w-3 text-neutral-400 mb:h-2 mb:w-2" data-tooltip-target=":ro:"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                </div>
                <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px] mb:hidden">
                    <div className="flex items-center">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-base font-normal leading-6 mb:text-[8px] mb:leading-3 text-white">{avaiable1}</span>
                            <span className="text-sm font-light leading-5 mb:text-[7px] mb:leading-3 text-neutral-100">{avaiable2}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px] mb:hidden">
                    <div className="flex items-center">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-base font-normal leading-6 mb:text-[8px] mb:leading-3 text-white">{staked1}</span>
                            <span className="text-sm font-light leading-5 mb:text-[7px] mb:leading-3 text-neutral-100">{staked2}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mobile:gap-0.5 mobile:py-2.5 mobile:text-[8px] mobile:hidden">
                    <div className="flex items-center">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-base font-normal leading-6 mobile:text-[8px] mobile:leading-3 text-white">{rewards}
                            </span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-3 w-3 text-neutral-400 mobile:h-2 mobile:w-2" data-tooltip-target=":rr:"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                </div>
                <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px]">
                    <button className="bg-[#12191f] p-[8px] rounded-[10px] mr-[5px]">
                        <AiOutlineMenuUnfold size={16}/>
                    </button>
                    <button>
                        <div className="flex justify-start items-center px-[10px] py-[5px] bg-blue-500 rounded-[10px]">
                            <span className="text-[16px]">Manage</span>
                            <AiFillCaretRight size={16}/>
                        </div>
                    </button>
                </div>
            </div>  
        </>
    )
}

export default ItemStake;