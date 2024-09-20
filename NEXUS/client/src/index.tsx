// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const projectId = "850315235f14fbfea2a60d5752cb2c4b";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 2. Set chains (Sepolia Testnet)
const sepolia = {
  chainId: 11155111, // Sepolia Testnet chainId
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://rpc.sepoliaeth.com', // SepoliaETH RPC URL
}

// 3. Create a metadata object
const metadata = {
  name: 'NEXUS',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  metadata,

  /** Optional **/
});

// 5. Create Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [sepolia], // Sử dụng Sepolia Testnet thay vì Mainnet
  projectId,
  enableAnalytics: true,
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);
