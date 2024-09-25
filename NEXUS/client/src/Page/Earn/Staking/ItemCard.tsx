interface ItemCardProps {
    text1: string;
    text2: string;
    text3?: string;
}

const ItemCard = ({ text1, text2, text3 }: ItemCardProps) => {
    return (
        <div className="flex justify-between">
            <div className="text-white">{text1}</div>   
            <div className={`flex ${text3 ? "flex-col" : "flex"}`}>
                <div className="text-white">{text2}</div>
                    {!text3 && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-help h-3 w-3 text-neutral-400"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3"></path>
                            <path d="M12 17h.01"></path>
                        </svg>
                    )}
                        {text3 && (
                            <div className="text-white font-[300] text-[14px] text-[#rgb(187 187 187)] flex">{text3}</div>
                        )}
            </div>
        </div>
    );
};
    
export default ItemCard;