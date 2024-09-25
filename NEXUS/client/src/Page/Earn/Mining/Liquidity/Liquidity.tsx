import ItemLiquidity from "./ItemLiquidity";
import HeaderLiquidity from "./HeaderLiquidity";
import { useState } from "react";

const Liquidity = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <div className="">
                <div className="flex flex-col">
                    <HeaderLiquidity setSearchQuery={setSearchQuery}/>

                    <ItemLiquidity searchQuery = {searchQuery} />

                </div>
            </div> 
        </>
    )
}

export default Liquidity;