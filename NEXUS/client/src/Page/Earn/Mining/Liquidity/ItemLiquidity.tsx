import InfoLiquidity from "./InfoLiquidity";

const ItemLiquidity = () => {
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

                    <InfoLiquidity stringImage1={"https://testnet.elys.network/tokens/elys.svg"} stringImage2={"https://testnet.elys.network/tokens/usdc.svg"} title={"ELYS-USDC"} 
                    ratio1={"50:50"} ratio2={"Target 50:50"} apr={"75%"} lp={"0%"} perpetual={"0%"} tvl={"$15,951,462.85"} rewards={"$42,595.88"}/>
                    <InfoLiquidity stringImage1={"https://testnet.elys.network/tokens/atom.svg"} stringImage2={"https://testnet.elys.network/tokens/usdc.svg"} title={"ATOM-USDC"} 
                    ratio1={"28:72"} ratio2={"Target 50:50"} apr={"50%"} lp={"0%"} perpetual={"0%"} tvl={"$2,718,760.99"} rewards={"$4,770.53"}/>
                    <InfoLiquidity stringImage1={"https://testnet.elys.network/tokens/osmo.svg"} stringImage2={"https://testnet.elys.network/tokens/usdc.svg"} title={"OSMO-USDC"} 
                    ratio1={"35:65"} ratio2={"Target 50:50"} apr={"0%"} lp={"0%"} perpetual={"0%"} tvl={"$4,770.53"} rewards={"$4,770.53"}/>
                    <InfoLiquidity stringImage1={"https://testnet.elys.network/tokens/tia.svg"} stringImage2={"https://testnet.elys.network/tokens/usdc.svg"} title={"TIA-USDC"} 
                    ratio1={"50:50"} ratio2={"Target 50:50"} apr={"0%"} lp={"0%"} perpetual={"0%"} tvl={"$4,770.53"} rewards={"$4,770.53"}/>
                    <InfoLiquidity stringImage1={"https://testnet.elys.network/tokens/kava.svg"} stringImage2={"https://testnet.elys.network/tokens/usdc.svg"} title={"KAVA-USDC"} 
                    ratio1={"50:50"} ratio2={"Target 50:50"} apr={"0%"} lp={"0%"} perpetual={"0%"} tvl={""} rewards={"$4,770.53"}/>
                    <InfoLiquidity stringImage1={"https://testnet.elys.network/tokens/persistence.svg"} stringImage2={"https://testnet.elys.network/tokens/usdc.svg"} title={"XPRT-USDC"} 
                    ratio1={"50:50"} ratio2={"Target 50:50"} apr={"0%"} lp={"0%"} perpetual={"0%"} tvl={""} rewards={"$4,770.53"}/>
                    <InfoLiquidity stringImage1={"https://testnet.elys.network/tokens/stargaze.svg"} stringImage2={"https://testnet.elys.network/tokens/usdc.svg"} title={"STARS-USDC"} 
                    ratio1={"50:50"} ratio2={"Target 50:50"} apr={"0%"} lp={"0%"} perpetual={"0%"} tvl={"0%"} rewards={"$4,770.53"}/>
                </div>
            </div>
        </>
    )
}

export default ItemLiquidity;