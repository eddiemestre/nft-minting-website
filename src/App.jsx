import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MintInfo from './Components/Mint-Info';
import NFTRenderer from './Components/NFT-Spread';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const[loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <Router>
      <Navbar setLoggedIn={setLoggedIn}/>
      <Footer />
      <Routes>
      </Routes>
    </Router>

    <div class="row">
      <div class="column left"><NFTRenderer/></div>
      <div class="column right"><MintInfo loggedIn={loggedIn}/></div>
    </div>

    </>
  );
}

export default App;


// mintedNFTs variable - done
// currentAccount variable - create context for this
// renderNotConnectedContainer function
// render Mint UI