import { BiCaretRight } from "react-icons/bi";

interface ItemProps {
    stringImage1 : string;
    stringImage2 : string;
    title : string;
    ratio1 : string;
    ratio2 : string;
    apr : string;
    lp : string;
    perpetual : string;
    tvl : string;
    rewards : string;
}

const InfoLiquidity = ({stringImage1, stringImage2,title ,ratio1, ratio2, apr, lp, perpetual, tvl, rewards}: ItemProps) => {
    return (
        <>
            <div>
                <div className="grid grid-cols-9 border-t border-charcoal-700 px-7 transition-colors duration-75 hover:bg-[#8c8c8c3a] mb:px-[7px]">
                    <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px]">
                        <div className="flex items-center gap-[5px] mb:gap-2.5">
                            <div className="relative flex flex-none w-[68px] mb:w-[28px]">
                                <div className="relative flex flex-none">
                                    <img alt="ELYS" loading="lazy" width={40} height={40} decoding="async" className="flex-none object-cover" src={stringImage1} style={{ color: "transparent", width: "40px", height: "40px", left: "0%", zIndex: 2, }} />
                                    <img alt="USDC" loading="lazy" width={40} height={40} decoding="async" className="flex-none object-cover absolute" src={stringImage2} style={{ color: "transparent", width: "40px", height: "40px", left: "50%", zIndex: 1, }} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="flex flex-row items-center text-base font-semibold leading-none mb:text-3xs mb:leading-normal">{title}</span>
                                <div className="mt-1 flex flex-row items-center gap-1 desktop:mt-1.5 desktop:gap-1.5">
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div></div>
                    <div className="w-full py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px] flex flex-col items-start gap-0">
                        <div className="flex items-center">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-base font-bold leading-6 mb:text-[8px] mb:leading-3 text-white">{ratio1}</span>
                            </div>
                        </div>
                        <span className="text-sm font-medium leading-normal text-neutral-100 mb:text-5xs">{ratio2}</span>
                    </div>
                    <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px]">
                        <div className="flex items-center">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-base font-bold leading-6 mb:text-[8px] mb:leading-3 text-white">{apr}</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help h-3 w-3 text-neutral-400 mb:h-2 mb:w-2" data-tooltip-target=":r19g:"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                    </div>
                    <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px] mb:hidden">
                        <div className="flex items-center">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-base font-bold leading-6 mb:text-[8px] mb:leading-3 text-white">{lp}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px] mb:hidden">
                        <div className="flex items-center">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-base font-bold leading-6 mb:text-[8px] mb:leading-3 text-white">{perpetual}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px] mb:hidden">
                        <div className="flex items-center">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-base font-bold leading-6 mb:text-[8px] mb:leading-3 text-white">{tvl}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-center gap-1 py-5 text-xs font-normal leading-normal text-white mb:gap-0.5 mb:py-2.5 mb:text-[8px] mb:hidden">
                        <div className="flex items-center">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-base font-bold leading-6 mb:text-[8px] mb:leading-3 text-white">{rewards}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button className="text-white text-xs duration-100 py-[7px] bg-[#7575f4c1] my-7 flex justify-center items-center w-full cursor-pointer rounded-md disabled:opacity-50">
                                Add Liquidity
                                <BiCaretRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoLiquidity;