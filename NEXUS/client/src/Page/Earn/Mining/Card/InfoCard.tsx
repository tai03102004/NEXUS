import ItemCard from "./ItemCard";
import { BiCaretRight } from "react-icons/bi";

interface InfoCardProps {
    poolRatio: string;
    apr: string;
    leverageLP: string;
    perpetual: string;
    tvl: string;
    rewards: string;
}

const InfoCard = ({ poolRatio, apr, leverageLP, perpetual, tvl, rewards }: InfoCardProps) => {
    return (
        <>
            <div>
                <div className="w-full h-[0.25px] bg-gray-700 my-5"></div>
                <div className="flex gap-x-1 items-center justify-between">
                    <ItemCard text1="Pool Ratio" text2={poolRatio} />
                    <ItemCard text1="APR" text2={apr} />
                    <ItemCard text1="Leverage LP" text2={leverageLP} />
                </div>
                <div className="w-full h-[0.25px] bg-gray-700 my-5"></div>
                <div className="flex gap-x-1 items-center justify-between">
                    <ItemCard text1="Perpetual" text2={perpetual} />
                    <ItemCard text1="TVL" text2={tvl} />
                    <ItemCard text1="Rewards" text2={rewards} />
                </div>
                <div>
                    <button className="text-white text-xs duration-100 py-[7px] bg-[#7575f4c1] my-7 flex justify-center items-center w-full cursor-pointer rounded-md disabled:opacity-50">
                        Add Liquidity
                        <BiCaretRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export default InfoCard;
