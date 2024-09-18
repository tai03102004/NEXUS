import { Routes,BrowserRouter, Route } from "react-router-dom";
import Home from "./Page/Home/Home.tsx";
import LayoutDefault from "./layout/LayoutDefault.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
