import AllStaked from "./AllStake";
import HeaderStated from "./headerStated";
import { useState } from "react";

const StakedAssets = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <div className="mx-[120px] lg:py-[80px] py-[60px]">
                <div className="border border-[#e5e7eb1d] rounded-[10px] bg-[rgba(21,31,43,0.33)]">

                    <HeaderStated setSearchQuery={setSearchQuery}/>

                    <AllStaked searchQuery = {searchQuery}/>
                </div>
            </div>
        </>
    )
}

export default StakedAssets;