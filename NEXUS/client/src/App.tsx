import {Navbar, Welcome, Footer, Artists,Collections, Transactions, Info,InfoNFT} from "./components/index.ts";

function App() {

  return (
    <>
      <div className = "min-h-screen">
        <div className = "gradient-bg-welcome">
          <Navbar/>
          <Welcome/>
        </div>
        <Artists/>
        <Collections/>
        <Info/>
        <Transactions/>
        <InfoNFT/>
        <Footer/>
      </div>
    </>
  )
}

export default App
