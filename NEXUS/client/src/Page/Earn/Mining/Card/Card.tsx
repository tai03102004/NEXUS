import InfoCard from "./InfoCard";

interface CardProps {
    stringImage1: string;
    stringImage2: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    subtitle3?: string;
    infoCardData: {
        poolRatio: string;
        apr: string;
        leverageLP: string;
        perpetual: string;
        tvl: string;
        rewards: string;
    };
}

const Card = ({ stringImage1, stringImage2, title, subtitle, subtitle2, subtitle3, infoCardData }: CardProps) => {
    return (
        <div className="gradient-bg-card pt-[28px] px-[26px] pb-[10px] border-transparent rounded-[15px] bg-transparent">
            <div className="flex items-center gap-[5px] mb:gap-[5px]">
                <div className="relative flex flex-none w-[68px] mb:w-[28px]">
                    <div className="relative flex flex-none">
                        <img loading="lazy" src={stringImage1} alt={title} className="w-[40px] h-[auto]" style={{ zIndex: 2, left: '0%' }} />
                        <img loading="lazy" src={stringImage2} alt={title} className="w-[40px] h-[auto] absolute" style={{ zIndex: 1, left: '50%' }} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center text-base font-semibold leading-none mb:text-3xs mb:leading-normal">
                        <div className="text-white font-genos font-bold text-[18px]">{title}</div>
                        <span className="inline-flex items-center justify-center rounded font-semibold bg-neutral-50 text-charcoal-800 text-[8px] px-1.5 min-h-3.25 leading-1.75 py-0.75 ml-2 !py-0">

                        </span>
                    </div>
                    <div className="mt-1 flex flex-row items-center gap-1">
                        <div className="text-white text-[9px] font-semibold font-genos mr-[2px]">{subtitle}</div>
                        <div className="text-white text-[9px] font-semibold font-genos mr-[5px]">{subtitle3}</div>
                        <div className="text-white text-[7px] font-light font-genos">{subtitle2}</div>
                    </div>
                </div>
            </div>
            <div className="">
                <InfoCard {...infoCardData} />
            </div>
        </div>
    );
};

export default Card;