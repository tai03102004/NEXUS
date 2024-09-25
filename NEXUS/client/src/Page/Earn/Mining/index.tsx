import Card from "./Card/Card";
import Liquidity from "./Liquidity/Liquidity";

const mining = () => {
    return (
        <>
            <div className="gradient-bg-welcome">
                <div className="grid flex-none grid-cols-3 gap-2.5 mx-[120px] lg:py-[80px] py-[60px] tablet:grid-cols-1 mb:flex mb:flex-none mb:gap-[5px] mb:overflow-x-auto mb:px-2.5 mb:py-2.5">
                    <Card stringImage1={"https://testnet.elys.network/tokens/elys.svg"} stringImage2="https://testnet.elys.network/tokens/usdc.svg" title={"USDC Earn"} subtitle={"Target Ratio 50:50"} subtitle2={"Fixed Weight AMM"} infoCardData={{
                        poolRatio: "0",
                        apr: "0",
                        leverageLP: "0",
                        perpetual: "0",
                        tvl: "0",
                        rewards: "0"
                    }}  />
                    <Card stringImage1={"https://testnet.elys.network/tokens/atom.svg"} stringImage2="https://testnet.elys.network/tokens/usdc.svg" title={"ATOM-USDC"} subtitle={"Leverage Enabled"} subtitle3={"Target Ratio 50:50"} subtitle2={"Dynamic Weight Oracle"} infoCardData={{
                        poolRatio: "0",
                        apr: "0",
                        leverageLP: "0",
                        perpetual: "0",
                        tvl: "0",
                        rewards: "0"
                    }} />
                    <Card stringImage1={"https://testnet.elys.network/tokens/osmo.svg"} stringImage2="https://testnet.elys.network/tokens/usdc.svg" title={"OSMO-USDC"} subtitle={"Leverage Enabled"} subtitle3={"Target Ratio 50:50"} subtitle2={"Dynamic Weight Oracle"} infoCardData={{
                        poolRatio: "0",
                        apr: "0",
                        leverageLP: "0",
                        perpetual: "0",
                        tvl: "0",
                        rewards: "0"
                    }} />
                </div>
                <div className="mx-[120px] border border-[#ffffff2c] rounded-[15px] pt-[25px]">
                    <Liquidity/>
                </div>
            </div>
        </>
    )
}

export default mining;