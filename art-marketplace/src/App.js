import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Art from "./Art";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp/>}>
        </Route>
        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='/home' element={<Home/>}>
        </Route>
        <Route path="/art" element={<Art/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
