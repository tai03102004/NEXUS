import {HiMenuAlt4} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

import logo from "../../images/logo.png";

import { NavbarItemProps } from "../Interface/NavbarItemProps.tsx"
import {useState} from "react";

const NarbarItems = (props: NavbarItemProps) => {
    const {title = "", classProps = ""} = props;
    
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}   

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className = "w-full flex md:justify-center justify-between items-center pt-[25px] mx-auto">
            <div className = "md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo"  className = "w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden font-[500] text-[16px] list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials","Wallets"].map((item, index) => (
                    <NarbarItems key={item + index} title={item} classProps={undefined}/>
                ))}
                <li className = "bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>      
            </ul>
            <div className="flex relative">
                {
                    toggleMenu 
                    ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(false)}/> 
                    : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden"  onClick={() => setToggleMenu(true)}/>
                }
                {
                    toggleMenu && (
                        <ul className = "z-10 fixed -top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-on">
                            <li className = "text-xl w-full my-2">
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                            </li>
                            {["Market", "Exchange", "Tutorials","Wallets"].map((item, index) => (
                                <NarbarItems key={item + index} title={item} classProps="my-2 text-lg"/>
                            ))}
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar;