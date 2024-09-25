import { useState } from "react";

function Staking() {
  const [reward, setReward] = useState(0);

  const stakeNFT = () => {
    // Mock logic for staking NFT and receiving rewards
    const newReward = reward + 10;
    setReward(newReward);
  };

  return (
    <div id="staking" className="bg-[#f7f7f725] p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">Stake NFTs for Rewards</h3>
      <p className="text-white mb-4">Earn Nexus (NEX) by staking your NFTs.</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        onClick={stakeNFT}
      >
        Stake NFT
      </button>
      <p className="mt-4 text-xl text-white">Total Rewards: {reward} NEX</p>
    </div>
  );
}

export default Staking;
