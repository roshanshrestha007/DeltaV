import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { useState } from 'react';
import NavBar from './components/Navbar.js';
import LoginPage from './components/LoginPage.js';
import AccountPage from "./components/AccountPage";
import SignupPage from "./components/SignupPage";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer.js";







function App() {

    const [toggle, setToggle] = useState(true);

    const toggleState = () => setToggle(!toggle);




  return (
    <div className="mainContainer">

      <Router>
        <NavBar />
        <Routes>
        <Route path="/LoginPage" element={<LoginPage toggleState={toggleState}/>} />
        <Route path="/" element={<LoginPage toggleState={toggleState}/>} />
        <Route path="/SignupPage" element={<SignupPage toggleState={toggleState}/>} />
        <Route path = "/AccountPage" element={<AccountPage toggleState={toggleState}/>} />
        <Route path = "/Calculator" element={<Calculator toggleState={toggleState}/>} />

        <Route path = "/Acpage" element={<AccountPage toggleState={toggleState}/>} />


        </Routes>
        <Footer/>
      </Router>






    </div>
  );
}

export default App;
