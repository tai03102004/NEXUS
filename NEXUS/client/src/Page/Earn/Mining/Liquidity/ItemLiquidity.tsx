import liquidityData from "../../../../data/liquidity";
import InfoLiquidity from "./InfoLiquidity";

interface SearchProps {
    searchQuery: string;
}

const ItemLiquidity = ({ searchQuery }: SearchProps) => {

    const filterLiquidity = liquidityData.filter(liquidity => 
        liquidity.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return ( 
        <>
            <div className="flex w-full flex-col overflow-hidden rounded-bl-[15px] rounded-br-[15px] border border-[#f1f1f166] bg-[rgba(21,31,43,0.90)]">
                <div className="flex w-full flex-col">
                    <div className="grid grid-cols-9 h-[42px] px-7 mb:h-5 mb:px-[7px]">
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">
                            Liquidity Pools
                        </div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]"></div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">Pool Ratio</div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">APR</div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px] mb:hidden">Leverage LP </div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mobile:text-[7px] mobile:hidden">Perpetual</div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">TVL</div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px] mb:hidden">Rewards</div>
                        <div className="flex items-center text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">Actions</div>
                    </div>

                    {filterLiquidity.map((pool, index) => (
                        <InfoLiquidity 
                            key={index}
                            stringImage1={pool.stringImage1}
                            stringImage2={pool.stringImage2}
                            title={pool.title}
                            ratio1={pool.ratio1}
                            ratio2={pool.ratio2}
                            apr={pool.apr}
                            lp={pool.lp}
                            perpetual={pool.perpetual}
                            tvl={pool.tvl}
                            rewards={pool.rewards}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemLiquidity;