
interface ItemCardProps {
    text1: string;
    text2: string;
}

const ItemCard = ({ text1, text2 }: ItemCardProps) => {
    return (
        <div className="flex w-full flex-col border-t-[1px] border-[rgba(229,229,229,0.1)] p-3 mb:py-[7px]">
            <div className="flex items-center text-white font-light text-[14px] gap-2">{text1}</div>
            <div className="">
                <div className="flex items-center text-white font-semibold gap-2">{text2}
                </div>
            </div>
        </div>
    );
};
    
export default ItemCard;