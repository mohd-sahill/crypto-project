import React from "react";
function myCryptoList(props) {

  function checkCurrency(text,currency){
   text.slice(0,10).map((coin => {
      if(coin.name.toLowerCase().includes(currency)){
        console.log(coin.name)
      }
   }))
  }
 checkCurrency(props.data,props.currency)
  return (
    <>
      <div className="tab-card">
      <div className="card">
          <p></p>
          <h2>RANK</h2>
          <h2>NAME</h2>
          <h2>SYMBOL</h2>
          <h2>PRICE</h2>
          <h2>MKT-CAP</h2>
          <a href="#">
          </a>
        </div>
        {props.data.slice(0,10).map((currItem) => {
         return (
            <div className="card" key={currItem.id}>
          <img src={currItem.image} alt="" />
          <p>{currItem.market_cap_rank}</p>
          <p>{currItem.name}</p>
          <p>{currItem.symbol}</p>
          <p>&#8377; {currItem.current_price}</p>
          <p>&#8377; {currItem.market_cap}</p>
          <a href="#">
            {" "}
            <button className="btninfo">More info</button>
          </a>
        </div>
         )
      })} 
  
      </div>
    </>
  );
}

export default myCryptoList;
