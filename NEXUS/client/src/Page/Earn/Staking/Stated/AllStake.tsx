import stakesData from "../../../../data/stakes";
import ItemStake from "./ItemStake";

interface SearchProps {
    searchQuery: string;
}

const AllStaked = ({ searchQuery }: SearchProps) => {

    const filterState = stakesData.filter(stake => 
        stake.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <>
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
                {filterState.map((stake, index) => (
                    <ItemStake 
                        key={index}
                        stringImage={stake.stringImage}
                        title={stake.title}
                        subtitle={stake.subtitle}
                        apr={stake.apr}
                        avaiable1={stake.avaiable1}
                        avaiable2={stake.avaiable2}
                        staked1={stake.staked1}
                        staked2={stake.staked2}
                        rewards={stake.rewards}
                    />
                ))}
            </div>
        </>
    )
}

export default AllStaked;