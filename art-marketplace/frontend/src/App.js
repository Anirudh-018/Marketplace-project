import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import SignUp from "./SignUp";
import Home from "./Home";
import Art from "./Art";
import ArtPage from "./ArtPage";
import Profile from "./Profile";
import Sell from "./Sell";
import ChartComponent from "./TestChart";
import LoginBack from "./LoginBack";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp/>}>
        </Route>
        <Route path='/home' element={<Home/>}>
        </Route>
        <Route path="/art" element={<Art/>}>
        </Route>
        <Route path="/artPage" element={<ArtPage/>}>
        </Route>
        <Route path="/profile" element={<Profile/>}>
        </Route>
        <Route path="/sell" element={<Sell/>}>
        </Route>
        <Route path="/plot" element={<ChartComponent/>}>
        </Route>
        <Route path="/" element={<LoginBack/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
