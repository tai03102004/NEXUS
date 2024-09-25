import { Outlet } from "react-router-dom";

import {Navbar, Footer} from "../components/index.ts";

function LayoutDefault() {
    return <>
        <div className = "min-h-screen">
            <div className = "gradient-bg-navbar pb-[25px] border-b border-[#9d9d9d2e]">
                <Navbar/>
            </div>

            <Outlet/>

            <Footer/>
        </div>
    </>
}

export default LayoutDefault;