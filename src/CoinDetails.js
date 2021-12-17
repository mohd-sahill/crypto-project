import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams , useNavigate} from "react-router-dom"

function CoinDetails() {
     const [coin,setCoin] = useState(null);
     const {id} = useParams()
     const navigate = useNavigate();
 
  useEffect(() => {
    axios(
      `https://api.coingecko.com/api/v3/coins/${id}`
     )
       .then((response) => {
         setCoin(response.data);
         console.log(response.data);
       })
       .catch((error) => {
         throw new Error("404")
       });

    }, []);

if(coin){
  return (
    <>
      <div className="container">
        <h1>Welcome to DogeZone</h1>
        <div className="content">
              <h1>{coin?.name}</h1>
              <img src={coin?.image?.large} alt="" />
          <div className="coin-summary">
              <div className="coin-Info-head">
                  <p>Symbol:</p>
                  <p>Current Price:</p>
                  <p>Market Cap:</p>
                  <p>Total Volume:</p>
                  <p>24hr High:</p>
                  <p>24hr Low:</p>
              </div>
              <div className="coin-Info-ans">
                  <p>{coin?.symbol}</p>
                  <p>&#8377;{coin?.market_data?.current_price?.inr}</p>
                  <p>&#8377;{coin?.market_data?.market_cap?.inr}</p>
                  <p>&#8377;{coin?.market_data?.total_volume?.inr}</p>
                  <p style ={{color:"green"}}>&#8377;{coin?.market_data?.high_24h?.inr}</p>
                  <p style ={{color:"red"}}>&#8377;{coin?.market_data?.low_24h?.inr}</p>
              </div>
          </div>
              <button className="btninfo" onClick={() => {
                navigate("/")
              }}>Go Back</button>
        </div>
      </div>
    </>
  );
}else{
  return null
}
}

export default CoinDetails;
