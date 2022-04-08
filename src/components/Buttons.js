import React, { useState } from 'react';
import './Buttons.css';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
import Data from './Data';

const Buttons = ({coins}) => {
    const [order, setOrder] = useState("descending");
    const [listNumber, setListNumber] = useState("all");
    const [orderType, setOrderType] = useState("marketCap");
    const [search, setSearch] = useState("");

    const setAscending = () => {
        setOrder("ascending");
        document.querySelector('.ascending_btn').classList.add("active");
        document.querySelector('.descending_btn').classList.remove("active");
        console.log(order);
    }
    const setDescending = () => {
        setOrder("descending");
        document.querySelector('.ascending_btn').classList.remove("active");
        document.querySelector('.descending_btn').classList.add("active");
        console.log(order);
    }

    const handleCoinNumber = (event) => {
        const five = document.querySelector(".five");
        const ten = document.querySelector(".ten");
        const twenty = document.querySelector(".twenty");
        const fifty = document.querySelector(".fifty");
        const all = document.querySelector(".all");

        if(event.target.id === "five"){
            setListNumber("five")
            five.classList.add("active");
            ten.classList.remove("active");
            twenty.classList.remove("active");
            fifty.classList.remove("active");
            all.classList.remove("active");
        } else if (event.target.id === "ten"){
            setListNumber("ten")
            five.classList.remove("active");
            ten.classList.add("active");
            twenty.classList.remove("active");
            fifty.classList.remove("active");
            all.classList.remove("active");
        } else if (event.target.id === "twenty"){
            setListNumber("twenty")
            five.classList.remove("active");
            ten.classList.remove("active");
            twenty.classList.add("active");
            fifty.classList.remove("active");
            all.classList.remove("active");
        } else if (event.target.id === "fifty"){
            setListNumber("fifty")
            five.classList.remove("active");
            ten.classList.remove("active");
            twenty.classList.remove("active");
            fifty.classList.add("active");
            all.classList.remove("active");
        } else if (event.target.id === "all"){
            setListNumber("all")
            five.classList.remove("active");
            ten.classList.remove("active");
            twenty.classList.remove("active");
            fifty.classList.remove("active");
            all.classList.add("active");
        }
        console.log(listNumber);
    }

const handleOrderType = (event) => {
const marketCap = document.querySelector(".marketCap");
const coinName = document.querySelector(".name");
const dailyPercent = document.querySelector(".dailyPercent");
const rank = document.querySelector(".rank");

if(event.target.id === "marketCap") {
    setOrderType("marketCap");
    marketCap.classList.add("active");
    coinName.classList.remove("active");
    dailyPercent.classList.remove("active");
    rank.classList.remove("active");
} else if (event.target.id === "name") {
    setOrderType("name");
    marketCap.classList.remove("active");
    coinName.classList.add("active");
    dailyPercent.classList.remove("active");
    rank.classList.remove("active");
} else if (event.target.id === "dailyPercent") {
    setOrderType("dailyPercent");
    marketCap.classList.remove("active");
    coinName.classList.remove("active");
    dailyPercent.classList.add("active");
    rank.classList.remove("active");
} else if (event.target.id === "rank") {
    setOrderType("rank");
    marketCap.classList.remove("active");
    coinName.classList.remove("active");
    dailyPercent.classList.remove("active");
    rank.classList.add("active");
}
}

    const handleSearch = e => {
        setSearch(e.target.value)
    }

  return (
      <div className='button_data_container'>
    <div className='button_container'>
        <div className='buttons_top'>
        <button
        onClick={handleOrderType}
        id="marketCap"
        className='marketCap active'
        >Market Cap</button>
        <button
        onClick={handleOrderType}
        id="name"
        className='name'
        >Name</button>
        <button
        onClick={handleOrderType}
        id="dailyPercent"
        className='dailyPercent'
        >Daily %</button>
        <button
        onClick={handleOrderType}
        id="rank"
        className='rank'
        >Rank</button>
        </div>
        <div>
            <div className='listing_number'>
                <p>Show</p>
            <button 
            onClick={handleCoinNumber}
            id="five"
            className='five'>5</button>
            <button 
            onClick={handleCoinNumber}
            id="ten"
            className='ten'>10</button>
            <button 
            onClick={handleCoinNumber}
            id="twenty"
            className='twenty'>20</button>
            <button 
            onClick={handleCoinNumber}
            id="fifty"
            className='fifty'>50</button>
            <button 
            onClick={handleCoinNumber}
            id="all"
            className='all active'>All</button>
            </div>
        </div>
        <div>
            <button
            onClick={setAscending}
            className="ascending_btn"
            >Ascending <span><FaArrowUp /></span></button>
            <button 
            onClick={setDescending}
            className="descending_btn active">Descending <span><FaArrowDown /></span></button>
        </div>
        <form>
        <input onChange={handleSearch} type="text" placeholder='Search' className='search_input' />
        </form>
    </div>
    <Data
    coins={coins}
    order={order}
    orderType={orderType}
    setOrder={setOrder}
    listNumber={listNumber}
    search={search}
    />
    </div>
  )
}

export default Buttons