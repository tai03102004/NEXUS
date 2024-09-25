import { useState } from "react";
import Headline from "./Headline";
import Section2 from "./Section2";

function Market() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <Headline setSearchQuery={setSearchQuery}/>
            <Section2 searchQuery={searchQuery}/>
        </>
    )
}
 
export default Market;