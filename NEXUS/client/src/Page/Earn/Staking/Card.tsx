import ItemCard from "./ItemCard";

interface CardProps {
    stringImage: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    buttonText1: string;
    itemCards: { text1: string; text2: string; text3?: string }[];
}

const Card = ({ stringImage, title, subtitle, subtitle2, buttonText1, itemCards }: CardProps) => {
    return (
        <div className="gradient-bg-card pt-[28px] px-[26px] pb-[37px] border-transparent rounded-[15px] bg-transparent">
            <div className="flex">
                <img loading="lazy" src={stringImage} alt={title} className="w-[40px] h-[auto] mr-[10px]" />
                <div className="flex flex-col">
                    <div className="text-white font-genos font-bold text-[18px]">{title}</div>
                    <div className="text-white text-[12px] font-light font-genos">{subtitle}</div>
                </div>
            </div>
            <div className="text-white text-[12px] mt-[15px]">
                {subtitle2}
            </div>
            <div className="w-full h-[0.25px] bg-gray-700 my-5"></div>

            {/* Render ItemCard components dynamically */}
            {itemCards.map((item, index) => (
                <div key={index}>
                    <ItemCard text1={item.text1} text2={item.text2} text3={item.text3} />
                    <div className="w-full h-[0.25px] bg-gray-700 my-5"></div>
                </div>
            ))}

            <div>
                <div>
                    <button className="text-white text-xs duration-100 py-[7px] border border-[#c5c5c52c] my-7 flex justify-center items-center w-full cursor-pointer rounded-md disabled:opacity-50">
                        {buttonText1}
                    </button>
                </div>
                <div>
                    <button className="duration-100 text-white font-genos font-semibold bg-blue-500 w-full flex items-center justify-center rounded-md mb-[13px] h-[50px]">Manage</button>
                </div>
                <div>
                    <button className="duration-100 text-white font-genos font-semibold bg-[#272c31] w-full flex items-center justify-center rounded-md mb-[13px] h-[50px]">Claim Rewards</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
