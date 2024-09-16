import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// import { contractABI, contractAddress } from "../utils/constants";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const TransactionContext = React.createContext({});

const { ethereum } = window;

const getEthereumContract = () => {
  if (!ethereum) {
    console.error("Ethereum object doesn't exist!");
    return;
  }

  // const provider = new ethers.providers.Web3Provider(ethereum);
  // const signer = provider.getSigner();
  // const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // return contract;
};

