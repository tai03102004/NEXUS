import {useState} from "react";

interface AnswerProps {
    title: string,
    subtitle: string,
    index: number,
    activeIndex: number | null,  
    onClick: (index: number) => void  
}

const ItemAnswer = ({ title, subtitle, index, activeIndex, onClick }: AnswerProps) => {

    const isActive = index === activeIndex;

    return <>
        <div className="w-full h-[0.5px] bg-gray-500"/>
                <div className="flex justify-between items-center group" onClick ={() => onClick(index)}>
                    { isActive ?
                        <div className="text-[#53C343] my-[35px] md:text-[26px] text-[16px] font-genos font-semibold">
                            {title}
                        </div> : <div className="text-white my-[35px] md:text-[26px] text-[16px] font-genos font-semibold group-hover:text-[#53C343]">
                            {title}
                        </div>
                    }
                    <img loading="lazy" src="/images/plus.png" className="w-[20px] h-[20px] mr-[12px]"/>
                </div>
                {
                    isActive && 
                    <div className="text-[#9BABCD] md:text-[22px] text-[14px] mb-[35px]">
                        {subtitle}
                    </div>
                }

        <div className="w-full h-[0.5px] bg-gray-500"/>
    </>
}

function Answer() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleActive = (index: number) => {
        setActiveIndex(prepIndex => (prepIndex === index ? null : index));
    }

    return (
        <>
            <div className="md:mx-[115px] mx-[70px] pt-[150px]">
                <ItemAnswer title="How Can You Buy NFTs Through Websites?" 
                    subtitle={"NFTs are collectible digital assets with monetary worth, " +
                    "similar to how tangible art has monetary value. Cryptocurrencies such " +
                    "as Bitcoin and Ethereum are similar to NFTs. An NFT, on the other hand," +
                    "is fully unique and cannot be traded like-for-like, which is where the term “non-fungible” comes into play."}
                    index={0}
                    activeIndex={activeIndex}
                    onClick = {handleActive}
                />
                <ItemAnswer title="How NFT Library Helps You To Find All Recent NFT Collections?" 
                    subtitle={"NFTs are collectible digital assets with monetary worth, similar to how tangible " +
                    "art has monetary value. Cryptocurrencies such as Bitcoin and Ethereum are similar to NFTs. " +
                    "An NFT, on the other hand, is fully unique and cannot be traded like-for-like, which is where " +
                    "the term “non-fungible” comes into play."}
                    index={1}
                    activeIndex={activeIndex}
                    onClick = {handleActive}
                />
                <ItemAnswer title="Why Are NFTs Famous Among People?" 
                    subtitle={"How Can You Buy NFTs Through Websites? " +
                    "How NFT Library Helps You To Find All Recent NFT Collections? " +
                    "Why Are NFTs Famous Among People? " +
                    "NFTs are collectible digital assets with monetary worth, similar to how tangible art has monetary value. " +
                    "Cryptocurrencies such as Bitcoin and Ethereum are similar to NFTs. " +
                    "An NFT, on the other hand, is fully unique and cannot be traded like-for-like, which is where the term “non-fungible” comes into play."}
                    index={2}
                    activeIndex={activeIndex}
                    onClick = {handleActive}
                />
                <ItemAnswer title="Can You Own Someone Else’s Artwork Through NFT Trade?" 
                    subtitle={"NFTs are collectible digital assets with monetary worth, " +
                    "similar to how tangible art has monetary value. Cryptocurrencies such " +
                    "as Bitcoin and Ethereum are similar to NFTs. An NFT, on the other hand," +
                    "is fully unique and cannot be traded like-for-like, which is where the term “non-fungible” comes into play."}
                    index={3}
                    activeIndex={activeIndex}
                    onClick = {handleActive}
                />
            </div>
        </>
    )
}

export default Answer;