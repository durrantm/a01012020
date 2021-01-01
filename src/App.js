import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [currentBTCprice, setCurrentBTCprice] = useState('');
  const [calls, setCalls] = useState(0);

  const getData = useCallback(() => {
    const itBitHost = 'https://api.itbit.com/v1/';
    axios.get(itBitHost + 'markets/XBTUSD/ticker')
      .then(function (response) {
        const bid = Number(response.data.bid).toFixed(2);
        setCurrentBTCprice(bid);
        setCalls(c => c + 1);
      })
      .catch(function (e) {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    getData();
    const interval = setInterval(() => getData(), 2000)
    return () => {
      clearInterval(interval);
    }
  }, [getData]);

  return (
    <div className="App">
      <h1>PAXOS ATS</h1>
      <h2>
        {currentBTCprice.substring(0,2)},
        {currentBTCprice.substring(2,8)}
      </h2>
      <div id="call-counter">
        API call# {calls}<br /><br/>
        {Date(Date.now()).substring(16, 24)}
      </div>
    </div>
  );
}
export default App;
