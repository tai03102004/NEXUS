import TokenInfo from './TokenInfo';
import Staking from './Staking';
import Marketplace from './Marketplace';


function NEXToken() {
  return (
    <div className="gradient-bg-welcome min-h-screen">
      <main className="container mx-auto py-8 px-4">
        <TokenInfo />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Staking />
          <Marketplace />
        </div>
      </main>
    </div>
  );
}

export default NEXToken;
