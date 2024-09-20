
const nftItems = [
  { id: 1, name: 'NFT #1', price: 100 },
  { id: 2, name: 'NFT #2', price: 200 },
  { id: 3, name: 'NFT #3', price: 300 },
];

function Marketplace() {
  const buyNFT = (nft: { id?: number; name: any; price: any; }) => {
    alert(`You have bought ${nft.name} for ${nft.price} NEX`);
  };

  return (
    <div id="marketplace" className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">NFT Marketplace</h3>
      <ul className="space-y-4">
        {nftItems.map((nft) => (
          <li key={nft.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
            <span className="text-lg">{nft.name}</span>
            <span className="text-gray-600">{nft.price} NEX</span>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400"
              onClick={() => buyNFT(nft)}
            >
              Buy NFT
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marketplace;
