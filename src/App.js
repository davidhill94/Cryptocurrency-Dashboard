import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';

function App() {

  const [coins, setCoins] = useState([]);

  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      setCoins(json);
    });
  };

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <Header />
      <Buttons
      coins={coins} />
    </div>
  );
}

export default App;
