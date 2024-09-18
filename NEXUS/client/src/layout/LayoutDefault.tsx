import { Outlet } from "react-router-dom";

import {Navbar, Footer} from "../components/index.ts";

function LayoutDefault() {
    return <>
        <div className = "min-h-screen">
            <div className = "gradient-bg-navbar pb-[25px]">
                <Navbar/>
            </div>

            <Outlet/>

            <Footer/>
        </div>
    </>
}

export default LayoutDefault;