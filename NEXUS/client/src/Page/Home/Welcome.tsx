import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader} from "../../components";
import { InputProps } from "../../Interface/InputPros";

import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

import { shortenAddress } from "../../utils/shortenAddress";


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder , type="", value="" }: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            type = {type}
            value = {value}
            step= "0.0001"
            className = "my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
        />
    );
}


function Welcome() {

    const { open } = useWeb3Modal();
    const { address, isConnected, chainId, status } = useWeb3ModalAccount();
    console.log(isConnected, chainId);



    return (
        <div className = "flex w-full justify-center">
            <div className = "flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className = "flex flex-1 justify-start flex-col mf:mr-10" data-aos = "fade-right" data-aos-duration="1500">
                    <h1 className="text-3xl sm:text-5xl text-white  text-gradient py-1"> 
                        Send Crypto <br/> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:2-9/12 w-11/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>
                    {
                        status === "disconnected" && <button
                                type="button"
                                onClick={() => open()}
                                className="flex flex-row justify-center items-center py-2 my-5 bg-[#2952e3] rounded-full cursor-pointer hover:bg-[#2546bd]"
                            >
                                <p className="text-white text-base font-semibold">

                                    Connect Wallet
                                </p>
                            </button>
                    }
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                            Reliability
                        </div>
                        <div className={`${companyCommonStyles}`}>
                            Security
                        </div>
                        <div className={`rounded-tr-2xl ${companyCommonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${companyCommonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={`${companyCommonStyles}`}>
                            Low fees
                        </div>
                        <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10" data-aos = "fade-left" data-aos-duration="1500">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center">
                                    <SiEthereum fontSize={21} color="#fff"/>
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff"/>
                            </div>
                            <div className="">
                                <p className="text-white font-light text-sm">
                                    {/* {shortenAddress(currentAccount)} */}
                                    { status === "connected" ?
                                        shortenAddress(address!)  : "Address"
                                    }
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" />
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text" />
                        <Input placeholder="Enter Message" name="message" type="text" />

                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {
                            false ? (
                                <Loader/>
                            ) : (
                                <button type="button" 
                                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                                >
                                    Send Now
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;