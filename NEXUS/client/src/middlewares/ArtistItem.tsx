import type { TextCard } from "../Interface/TextCard";

const ArtistItem = (props: TextCard) => {

    const {title2 = "", link = "" ,name="" , title = "", subtitle = "" , subtitle2 = ""} = props;

    return (
        <>
            <div className="flex justify-between items-center py-4 bg-[#343232] rounded-[10px] mt-[15px] px-[20px]">
                <div className="flex items-center w-[40%]">
                    <div className="bg-[#000] text-center rounded-[50%] px-[5px] mr-[15px]">
                        <p className="text-white font-bold text-[14px] text-center">{title2}</p>
                    </div>
                    <img loading="lazy" src={link} alt={name} className="w-[50px] h-[50px] rounded-full mr-4" />
                    <p className="text-white font-bold">{name}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-[#00AC4F] text-[15px] text-center font-500">{title}</p>
                    <p className="text-white text-center">{subtitle}</p>
                    <p className="text-white text-center">{subtitle2}</p>
                </div>
            </div>
        </>
    )
}

export default ArtistItem;