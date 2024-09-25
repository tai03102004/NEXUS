import Card from "./Card";
import StakedAssets from "./Stated/StakedAssets";

const index = () => {
    return (
        <>
            <div className="gradient-bg-welcome">
                <div className="grid grid-cols-3 gap-[20px] mx-[120px] lg:py-[80px] py-[60px]">
                    <Card
                        stringImage={"https://testnet.elys.network/tokens/usdc.svg"}
                        title={"USDC Earn"}
                        subtitle={"Bonding Period: None"}
                        subtitle2={"Lend to Earn Passive Rewards on USDC deposits"}
                        buttonText1={"USDC Staking Details"}
                        itemCards={[
                            { text1: "APR", text2: "47.22%" },
                            { text1: "Available USDC", text2: "0", text3: "$0.00" },
                            { text1: "Staked USDC", text2: "0", text3: "$0.00" },
                            { text1: "Rewards (USDC, EDEN)", text2: "$0.00" },
                        ]}
                    />
                    <Card
                        stringImage={"https://testnet.elys.network/tokens/elys.svg"}
                        title={"ELYS Staking"}
                        subtitle={"Bonding Period: 14 days"}
                        subtitle2={"Earn Reward on ELYS while securing the network"}
                        buttonText1={"ELYS Staking Details"}
                        itemCards={[
                            { text1: "APR", text2: "35.50%" },
                            { text1: "Available ELYS", text2: "500", text3: "$15,000.00" },
                            { text1: "Staked ELYS", text2: "400", text3: "$12,000.00" },
                            { text1: "Rewards (ELYS)", text2: "$500.00" },
                        ]}
                    />
                    <Card
                        stringImage={"https://testnet.elys.network/tokens/eden.svg"}
                        title={"EDEN"}
                        subtitle={"Bonding Period: None"}
                        subtitle2={"Earn Rewards on EDEN & Multiply with EDEN BOOST"}
                        buttonText1={"EDEN Staking and Vesting Details"}
                        itemCards={[
                            { text1: "APR", text2: "55.10%" },
                            { text1: "Available EDEN", text2: "200", text3: "$5,000.00" },
                            { text1: "Staked EDEN", text2: "100", text3: "$2,500.00" },
                            { text1: "Rewards (EDEN)", text2: "$200.00" },
                        ]}
                    />
                </div>
                <StakedAssets />
            </div>
        </>
    );
};

export default index;
