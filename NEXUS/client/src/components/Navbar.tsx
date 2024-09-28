import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { NavbarItemProps } from "../Interface/NavbarItemProps.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Wallet from "../Page/Wallet/index.tsx";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const NarbarItems = (props: NavbarItemProps) => {
    const { title = "", classProps = "" } = props;

    return (
        <li className={`mx-4 cursor-pointer md:text-[17px] text-[16px] font-genos font-semibold ${classProps} hover:text-[#fe9595]`}>
            {title}
        </li>
    );
};

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [walletOpen, setWalletOpen] = useState(false);

    const {isConnected } = useWeb3ModalAccount();

    const menuItem = ["Native Token", "NFT Marketplace", "Earn", "Wallets"];

    return (
        <nav className="w-full flex md:justify-center justify-between items-center pt-[25px] mx-auto">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to={"/"}>
                    <img loading="lazy" src={logo} alt="logo" className="w-32 cursor-pointer" />
                </Link>
            </div>
            <ul className={`text-white md:flex hidden font-[500] text-[16px] list-none flex-row justify-between items-center flex-initial ${walletOpen ? "blur-md" : ""}`}>
                {menuItem.map((item, index) => {
                    if (item === "Earn") {
                        return (
                            <li
                                key={index}
                                className="relative mx-4 cursor-pointer md:text-[17px] text-[16px] font-genos font-ssemibold hover:text-[#fe9595]"
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}
                            >
                                Earn
                                {isOpen && (
                                    <ul className="absolute border border-[#4f4f4f] rounded-[10px] w-[150px]">
                                        <Link to="/earn/staking">
                                            <li className="hover:bg-gray-200 hover:rounded-[10px] px-2 py-1 text-[14px] p-[10px]">Simple Staking</li>
                                        </Link>
                                        <Link to="/earn/mining">
                                            <li className="hover:bg-gray-200 hover:rounded-[10px] px-2 py-1 text-[14px] p-[10px]">Liquidity Mining</li>
                                        </Link>
                                    </ul>
                                )}
                            </li>
                        );
                    } else if (item === "Wallets") {
                        return (
                            <li 
                                key={index}
                                className="relative mx-4 cursor-pointer md:text-[17px] text-[16px] font-genos font-ssemibold hover:text-[#fe9595]"
                                onClick={() => setWalletOpen(!walletOpen)}
                            >
                                Wallets
                            </li>
                        );
                    } else {
                        return (
                            <Link to={item.replace(/\s+/g, '_')}>
                                <NarbarItems key={item + index} title={item} classProps={undefined} />
                            </Link>
                        );
                    }
                })}
            </ul>
            <div className="flex relative">
                {toggleMenu ? (
                    <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(false)} />
                ) : (
                    <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <ul className={`z-10 fixed -top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-on ${walletOpen ? "blur-md" : ""}`}>
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {menuItem.map((item, index) => (
                            <Link to={item.replace(/\s+/g, '_')}>
                                <NarbarItems key={item + index} title={item} classProps="my-2 text-lg" />
                            </Link>
                        ))}
                    </ul>
                )}
            </div>

            {/* Wallet Sidebar */}
            
            {walletOpen && (<>
                    {isConnected ? (
                        <Wallet setWalletOpen={setWalletOpen}/>
                    ) : (
                        <div>
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-not-allowed" onClick={() => setWalletOpen(false)}></div>
                            <div className="fixed z-20 top-0 right-0 p-4 w-[300px] h-screen bg-gray-800 shadow-xl text-white">
                                <p className="text-center text-lg">Please connect your wallet to view this page.</p>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Web3Modal Configuration */}
        </nav>
    );
}

export default NavBar;
