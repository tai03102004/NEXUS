import { useWalletInfo, useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { AiOutlineClose } from "react-icons/ai";
import { shortenAddress } from "../../utils/shortenAddress";


interface WalletProps {
    setWalletOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wallet: React.FC<WalletProps> = ({ setWalletOpen }) => {
    const { address, isConnected } = useWeb3ModalAccount();

    const addressWillet = shortenAddress(address!);
    const { walletInfo } = useWalletInfo();
    
    const { open, close } = useWeb3Modal();

    const handleDisconnect = async () => {
        try {
            await close(); 
            setWalletOpen(false); 
        } catch (error) {
            console.error("Ngắt kết nối thất bại:", error);
        }
    };

    return (
        <>
            <div>
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-not-allowed" onClick={() => setWalletOpen(false)}></div>

                <div className="fixed top-0 right-0 w-[450px] h-full bg-gray-800 text-white p-4 shadow-lg z-50">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold mt-[30px]">Your Account</h2>
                        <AiOutlineClose className="cursor-pointer" onClick={() => setWalletOpen(false)} />
                    </div>

                    {!isConnected ? (
                        <button
                            className="bg-[#fe9595] p-2 mt-4 rounded-md text-white cursor-pointer"
                            onClick={() => open({ view: 'Connect' })}
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <div>
                            <div className="flex items-center">
                                <div className="my-[10px]">
                                    <img
                                        src={walletInfo!.icon || 'default-wallet-icon.png'}
                                        alt={walletInfo!.name}
                                        className="wallet-icon"
                                    />
                                </div>
                                <div className="text-[25px] font-bold text-white ml-[15px]">$0.00</div>
                            </div>
                            <div className="mt-4">
                                <div className="border border-[white] px-[10px] py-[5px] rounded-[15px] flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wallet "><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                    <div className="text-white font-semibold text-[14px] ml-[10px]"> {addressWillet}</div>
                                </div>
                                <button
                                    className="bg-[#fe9595] p-2 rounded-md text-white cursor-pointer mt-[25px]"
                                    onClick={handleDisconnect}
                                >
                                    Disconnect Wallet
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Wallet;