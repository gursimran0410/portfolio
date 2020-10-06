import React from 'react';
import './App.css';
import BrandLogo from './components/brandLogo';
import IntroSvg from './components/introSvg';
import PrimarySearchAppBar from "./components/navbar"
import CodingGuy from "./components/svg"

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <IntroSvg/>
      {/* <CodingGuy/> */}
      <BrandLogo/>
    </div>
  );
}

export default App;