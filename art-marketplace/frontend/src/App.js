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
import Fof from './404';
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
        <Route path="/artPage/:artId" element={<ArtPage/>}>
        </Route>
        <Route path="/profile/:userId" element={<Profile/>}>
        </Route>
        <Route path="/sell/:userId" element={<Sell/>}>
        </Route>
        <Route path="/plot" element={<ChartComponent/>}>
        </Route>
        <Route path="/" element={<LoginBack/>}>
        </Route>
        <Route path="/err" element={<Fof/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
