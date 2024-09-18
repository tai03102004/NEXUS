import {Artists,Welcome,Collections, Transactions, Info,InfoNFT} from "../../components/index.ts";

function Home() {
    return <>
        <div className = "gradient-bg-welcome">
            <Welcome/>
        </div>
        <Artists/>
        <Collections/>
        <Info/>
        <Transactions/>
        <InfoNFT/>
    </>
}

export default Home;