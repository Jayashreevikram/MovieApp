import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import Watchlist from "./Pages/Watchlist"
import { WatchListProvider } from "./Context/WatchListContext"


function App() {
  return (
   
    <WatchListProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
       
    </Routes>
    </BrowserRouter>
    </WatchListProvider>
    
  )
}

export default App
