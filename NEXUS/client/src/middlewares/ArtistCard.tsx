import type { TextCard } from "../Interface/TextCard.tsx"

const ArtistCard = (props: TextCard) => {
    const {  link = "", title = "" , subtitle2 = "" } = props;
    
    return (
        <div className = "flex items-center white-glassmorphism m-2 cursor-pointer hover:shadow-xl rounded-[120px] p-[25px] relative hover:bg-[#99E54D] group">
            <div className="bg-[#414B61] rounded-[50%] w-[95px] mr-[25px] overflow-hidden">
                <img loading="lazy" className="w-[95px]" object-cover src={link}/>
            </div>
            <div className="">
                <div className="text-white font-genos text-[22px] font-[600]">{title}</div>
                <div className="text-[#9BABCD] text-[19px] font-[500] group-hover:text-black ">{subtitle2}</div>
            </div>
        </div>
    );
}

export default ArtistCard;