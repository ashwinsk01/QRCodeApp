import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import QRCodeScanner from './Components/QRCodeScanner';
import Welcome from './Components/Welcome';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const apiKey = 'keyehEHqol0lqaHF2';
  const baseId = 'apptQkP0WMD6DrYo1';
  const table = 'tblVdppLxEOhNWMuH';

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${baseId}/${table}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        setData(response.data.records);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
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

//api key = keyehEHqol0lqaHF2
//base id = apptQkP0WMD6DrYo1
//table id = tblVdppLxEOhNWMuH