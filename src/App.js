import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import QRCodeScanner from './Components/QRCodeScanner';

function App() {
  return (
    <div className="App">
      <Header />
      <QRCodeScanner/>
    </div>
  );
}

export default App;
