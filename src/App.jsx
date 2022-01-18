import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MintInfo from './Components/Mint-Info';
import NFTRenderer from './Components/NFT-Spread';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Footer />
      <Routes>
      </Routes>
    </Router>

    <div class="row">
      <div class="column left"><NFTRenderer/></div>
      <div class="column right"><MintInfo/></div>
    </div>

    </>
  );
}

export default App;


// mintedNFTs variable - done
// currentAccount variable - create context for this
// renderNotConnectedContainer function
// render Mint UI