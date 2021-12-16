import React from 'react'
import doge from "./images/dogecoin.png";
import { FiRefreshCcw } from "react-icons/fi";

function Header(props) {
    return (
        <main>
        <div className="header">
          <img src={doge} alt="" />
          <h1>Welcome to DogeZone</h1>
          <div className="input-section">
            <input type="text" placeholder="SEARCH FOR A CRYPTOCURRENCY" onChange = {props.inputTarget}/>
            <button className="btn" onClick= {props.getData}>
              {" "}
              <FiRefreshCcw color="#ffd662ff" size="25px" />
            </button>
          </div>
        {props.isLoading && <h1>Loading.....</h1>}
        </div>
      </main>
    )
}

export default Header
