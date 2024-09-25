import { HeadlineProps } from "../../../../Interface/SearchQuery";


const HeaderLiquidity = ({setSearchQuery}: HeadlineProps) => {
    return (
        <>
            <div className="relative flex w-full flex-row mb-[20px] px-5 mb:px-2.5">
                <div className="flex w-full">
                    <div className="flex h-11 overflow-hidden rounded-lg border border-[#f1f1f166] bg-dark-gunmetal-400 mb:h-10.25">
                        <button className="rounded-[7px] border-none px-[21px] text-sm font-medium leading-normal transition-all duration-150 focus:border-none focus:outline-[0px] active:opacity-80 mb:px-2.5 mb:text-3xs mobile:leading-3 hover:text-white bg-[linear-gradient(127deg,#41454A_17.35%,_#242A31_76.2%)] text-white">
                            <span className="relative flex items-center gap-2 text-left">Liquidity Pools
                            </span>
                        </button>
                        <button className="rounded-[7px] border-none px-[21px] text-sm font-medium leading-normal text-neutral-400 transition-all duration-150 focus:border-none focus:outline-[0px] active:opacity-80 mb:px-2.5 mb:text-3xs mb:leading-3 hover:text-white">
                            <span className="relative flex items-center gap-2 text-left">Liquidity Positions
                            </span>
                        </button> 
                    </div> 
                </div>
                <div className="relative flex w-full justify-between mb:hidden">
                    <div className="flex flex-col items-end justify-end pb-[3px] mb:flex-row-reverse mb:items-center mb:pb-0">
                        <div className="absolute right-0 top-0 mb:static mb:hidden">
                            <div className="align-center flex justify-center gap-2 pt-px">
                                <div>
                                    <div className="h-10 w-full flex-row items-center rounded-lg border border-[#f1f1f166] bg-dark-gunmetal-400 dk:w-56 mb:h-7 mb:max-w-[177px] flex">
                                        <input placeholder="Search" className="h-full w-full flex-grow bg-transparent pl-[15px] text-2sm font-normal leading-normal text-white placeholder-neutral-100 mb:text-sm mb:pl-2.5"
                                            onChange= {(e) => setSearchQuery(e.target.value)}
                                        />
                                            <span className="cursor-text px-3.5 mb:px-2" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search h-5 w-5 cursor-text stroke-[1.7] text-neutral-300 mb:w-3.5 mb:h-3.5 mb:stroke-[2.7]"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderLiquidity;