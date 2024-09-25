import ItemStake from "./ItemStake";
import HeaderStated from "./headerStated";

const StakedAssets = () => {
    return (
        <>
            <div className="mx-[120px] lg:py-[80px] py-[60px]">
                <div className="border border-[#e5e7eb1d] rounded-[10px] bg-[rgba(21,31,43,0.33)]">

                    <HeaderStated/>

                    <div className="flex w-full flex-col">
                        <div className="grid grid-cols-6 h-[42px] px-6.5 mb:h-5 mb:px-[7px]">
                            <div className="heading-[12px] flex items-center gap-1 text-xs font-medium leading-normal text-[#rgb(212 212 212)] mb:text-[7px]">
                                <span className="mb:hidden text-white px-[30px]">Simple Staking Program</span>
                                <span className="hidden mb:flex text-white">Earn Program</span>
                            </div>
                            <div className="heading-[12px] flex items-center gap-1 text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">APR</div>
                            <div className="heading-[12px] flex items-center gap-1 text-xs font-medium leading-normal text-neutral-100 mb:text-[7px] mb:hidden">Available</div>
                            <div className="heading-[12px] flex items-center gap-1 text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">Staked</div>
                            <div className="heading-[12px] flex items-center gap-1 text-xs font-medium leading-normal text-neutral-100 mb:text-[7px] mb:hidden">Rewards</div>
                            <div className="heading-[12px] flex items-center gap-1 text-xs font-medium leading-normal text-neutral-100 mb:text-[7px]">Actions</div>
                        </div>
                        <ItemStake stringImage={"https://testnet.elys.network/tokens/usdc.svg"} title={"USDC Earn"} 
                        subtitle={"USDC, EDEN Rewards"} apr={"47.21%"} avaiable1={"$0.00"} avaiable2={"0"} staked1={"$0.00"} staked2={"0"} rewards={"$0.00"}/>
                        <ItemStake stringImage={"https://testnet.elys.network/tokens/elys.svg"} title={"Elys Staking"} 
                        subtitle={"USDC, EDEN, EDEN BOOST Rewards"} apr={"30%"} avaiable1={"$7.64"} avaiable2={"0"} staked1={"$------"} staked2={"------"} rewards={"$0.00"}/>
                        <ItemStake stringImage={"https://testnet.elys.network/tokens/eden.svg"} title={"Eden Commitment"} 
                        subtitle={"USDC, EDEN, EDEN BOOST Rewards"} apr={"30%"} avaiable1={"$0.00"} avaiable2={"0"} staked1={"$0.00"} staked2={"0"} rewards={"$0.00"}/>
                        <ItemStake stringImage={"https://testnet.elys.network/tokens/eden-boost.svg"} title={"EDEN BOOST Commitment"} 
                        subtitle={"USDC, EDEN Rewards"} apr={"30%"} avaiable1={"0"} avaiable2={""} staked1={"0"} staked2={""} rewards={"$0.00"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StakedAssets;