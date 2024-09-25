import type { TextCard } from "../Interface/TextCard";

const ServiceCard = (props: TextCard) => {

    const {link = "", name="" ,avatar = "", title = "", subtitle = ""} = props;

    return (
        <>
            <div className = "white-glassmorphism m-2 cursor-pointer hover:shadow-xl rounded-[10px] p-[25px] relative hover:bg-[#99E54D] group">
                <div className="flex items-center mb-[15px]">
                    <div className="bg-[#414B61] rounded-[50%] mr-[15px] overflow-hidden">
                        <img loading="lazy" className="w-[35px] h-[auto]" object-cover src={avatar}/>
                    </div>
                    <div className="text-[#CDD2DC] font-genos text-[14px] font-[500] group-hover:text-black">{name}</div>
                </div>
                <div className="mb-[25px] overflow-hidden">
                    <img loading="lazy" className="" object-cover src={link}/>
                </div>
                <div className="">
                    <div className="text-white font-genos text-[22px] mb-[5px] font-[700]">{title}</div>
                    <div className="text-[#9BABCD] text-[18px] font-[500] group-hover:text-black">
                        {subtitle}<span className="text-[#53C343] group-hover:text-black">2.45 ETH</span>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-gray-600 my-4"></div>
                <div className="flex items-center justify-center">
                    <button className="text-white text-center text-[16px] font-genos font-bold px-[25px] py-[10px] bg-[#99E54D] rounded-[10px] group-hover:bg-white group-hover:text-black">
                        PLACE BID
                    </button>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;