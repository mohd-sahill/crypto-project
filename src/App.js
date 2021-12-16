import "./App.css";
import axios from "axios";
import MyCryptoList from "./MyCryptoList";
import Header from "./Header";
import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState([]);
  const [searchTerm,setSearchTerm] = useState("")
  const [isLoading,setIsLoading] = useState(null)


  useEffect(() => {
    getData()
  }, []);
  

  const filteredObj = data.filter((data) => {
    return data.name.toLowerCase().includes(searchTerm)
  })  

   const getData = () => {
     setIsLoading(true)
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => {
        setData(response.data);
        setIsLoading(false)
        // console.log(response.data);
      })
      .catch((error) => {
        throw new Error("404")
      });
    }

  const inputTarget = (event) => {
    event.preventDefault();
   setSearchTerm(event.target.value)
  }


  return (
    <>
        <Header inputTarget={inputTarget} isLoading={isLoading} getData={getData}/>
        <MyCryptoList data = {data} filteredObj = {filteredObj}/>
    </>
  );
}

export default App;
