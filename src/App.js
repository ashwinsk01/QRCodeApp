import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import QRCodeScanner from './Components/QRCodeScanner';
import Welcome from './Components/Welcome';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.airtable.com/v0/apptQkP0WMD6DrYo1/Table%201?api_key=keyehEHqol0lqaHF2")
      .then((res) => res.json())
      .then((data) => {
        setData(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [home, setHome] = useState(true);
  const scan = () => {
    setHome(false);
  };

  return (
    <div className="App">
      <Header />
      {home ? <Welcome scan = {scan}/> : <QRCodeScanner data = {data}/>}
    </div>
  );
}

export default App;

//api key = patk9RHh33ur5LlAQ
//base id = apptQkP0WMD6DrYo1
//table id = tblVdppLxEOhNWMuH