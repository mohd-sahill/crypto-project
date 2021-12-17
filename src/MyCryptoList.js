import React from "react";
import {Link} from "react-router-dom"
function myCryptoList(props) {
  return (
    <>
    <div className="tab-card">
      <div className="card">
          <p></p>
          <h2>RANK</h2>
          <h2>NAME</h2>
          <h2>SYMBOL</h2>
          <h2>PRICE</h2>
          <h2>MARKET-CAP</h2>
        </div>
        {props.filteredObj.map((currItem) => {
         return (
            <div className="card" key={currItem.id}>
          <img src={currItem.image} alt="" />
          <p>{currItem.market_cap_rank}</p>
          <p>{currItem.name}</p>
          <p>{currItem.symbol}</p>
          <p>&#8377; {currItem.current_price}</p>
          <p>&#8377; {currItem.market_cap}</p>
            {" "}
         <Link to={`/coindetails/${currItem.id}`}><button className="btninfo">More info</button></Link>
        </div>
         )
      })} 
  
      </div>
    </>
  );
}

export default myCryptoList;
