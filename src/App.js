import "./App.css";
import axios from "axios";
import doge from "./images/dogecoin.png";
import { FiRefreshCcw } from "react-icons/fi";
import MyCryptoList from "./MyCryptoList";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [currency,setCurrency] = useState("")

  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true"
    )
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        throw new Error("404")
      });
  }, []);

  const handleCoin = (event) => {
    event.preventDefault();
   setCurrency(event.target.value)
  }


  return (
    <>
      <main>
        <div className="header">
          <img src={doge} alt="" />
          <h1>Welcome to DogeZone</h1>
          <div className="input-section">
            <input type="text" placeholder="SEARCH FOR A CRYPTOCURRENCY" onChange = {handleCoin}/>
            <button className="btn">
              {" "}
              <FiRefreshCcw color="#ffd662ff" size="25px" />
            </button>
          </div>
        </div>
        <MyCryptoList data = {data} currency = {currency}/>
      </main>

    </>
  );
}

export default App;
