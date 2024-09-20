import { Routes,BrowserRouter, Route } from "react-router-dom";
import Home from "./Page/Home/Home.tsx";
import LayoutDefault from "./layout/LayoutDefault.tsx";
import NEXToken from "./Page/NEXToken/NEXToken.tsx";
import Market from "./Page/NFTMarketPlace/Market.tsx";
import Artist from "./Page/Artist/Artist.tsx";
import ArtistDetail from "./Page/Artist/Detail/ArtistDetail.tsx";
import NFTItem from "./Page/NFTMarketPlace/Item/NFTItem.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<Home />} />
            <Route path="Native_Token" element={<NEXToken />} />
            <Route path="NFT_Marketpace">
              <Route index element={<Market />} />
              <Route path=":id" element={<NFTItem />} />
            </Route>
            <Route path="artist">
              <Route index element={<Artist />} />
              <Route path=":id" element={<ArtistDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
