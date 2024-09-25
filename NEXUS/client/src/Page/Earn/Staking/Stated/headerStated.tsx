const HeaderStated = () => {
    return (
        <>
            <div className="px-[25px] bg-[rgba(247,247,248,0.13)] py-[30px]">
                <div className="flex justify-between py-[30px]">
                    <div>
                        <div className="text-lg text-neutral-100">Staked Assets</div>
                        <div className="text-sm text-neutral-400 mb:text-4xs">Get benefits from staking your tokens</div>
                    </div>
                    <div className="h-10 flex-row items-center rounded-lg border border-[#eef3fb42] bg-dark-gunmetal-400 desktop:w-56 flex w-56 ">
                        <input placeholder="Search" className="h-full w-full flex-grow border border-none bg-transparent pl-[15px] text-2sm font-normal leading-normal text-white placeholder-neutral-100 outline-none"/>
                        <span className="cursor-text px-3.5" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search h-5 w-5 cursor-text stroke-[1.7] text-neutral-300"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <div className="mt-5.25 flex w-full justify-between mobile:mt-2.5">
                        <div className="flex items-center font-normal tracking-[-1%] desktop:gap-[5px] mobile:flex-col mobile:items-start mobile:gap-0.5">
                            <span className="text-base leading-6 text-neutral-100 mobile:text-3xs mobile:leading-normal mobile:text-white">Total Stake/Committed Balance:   </span>
                            <span className="ml-px flex items-center gap-1.5 text-xl font-medium leading-[19.36px] text-white mobile:text-lg mobile:leading-[21.78px]">$0.00<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help self-top h-2.5 w-2.5 text-neutral-400" data-tooltip-target=":re:"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg></span>
                            </div>
                            <div className="flex flex-col items-end justify-end pb-[3px] mobile:flex-row-reverse mobile:items-start mobile:pb-0">
                                <div className="flex flex-row items-center gap-2"><div className="flex items-center transition-opacity duration-200 ease-in-out hover:opacity-[0.85] active:opacity-70">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderStated;