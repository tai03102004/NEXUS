import {Navbar, Welcome, Footer, Services, Transactions, Info,InfoNFT} from "./components/index.ts";

function App() {

  return (
    <>
      <div className = "min-h-screen">
        <div className = "gradient-bg-welcome">
          <Navbar/>
          <Welcome/>
        </div>
        <Services/>
        <Info/>
        <Transactions/>
        <InfoNFT/>
        <Footer/>
      </div>
    </>
  )
}

export default App
