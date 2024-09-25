import ItemLiquidity from "./ItemLiquidity";
import HeaderLiquidity from "./HeaderLiquidity";

const Liquidity = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col">
                    <HeaderLiquidity/>

                    <ItemLiquidity/>

                </div>
            </div>
        </>
    )
}

export default Liquidity;