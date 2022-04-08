import React from 'react';
import './Data.css';
import { FaArrowUp, FaArrowDown, FaEquals } from 'react-icons/fa';

const Data = ({ coins, order, listNumber, orderType, setOrderType, search, filterCoins }) => {


    //Handles alphabetical ordering
    const alphabetical = [].concat(coins)
        .sort(function (a, b) {
            var nameA = a.id.toUpperCase();
            var nameB = b.id.toUpperCase();
            if (order === "ascending") {
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            } else {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }
        })
        .filter(name => name.id.includes(search.toLowerCase()))
        .map((item, i) =>
            <li key={i}>
                    <img src={item.image} alt={item.id}></img>
                    <h3>{item.id}</h3>
                <p className='market_cap'>{abbreviatedNumber(item.market_cap)}</p>
                <p style={{ color: item.price_change_percentage_24h > 0 ? 'green' : item.price_change_percentage_24h < 0 ? "red" : "black" }} className='daily_change'>{item.price_change_percentage_24h.toFixed(2)}%{item.price_change_percentage_24h.toFixed(2) > 0 ? <FaArrowUp /> : null}
                    {item.price_change_percentage_24h.toFixed(2) < 0 ? <FaArrowDown /> : null}
                    {item.price_change_percentage_24h.toFixed(2) === 0 ? <FaEquals /> : null}
                </p>
                <p className='coin_rank'>{item.market_cap_rank}</p>
            </li>)

    //Handles daily percentage change ordering
    const dailyPercentageChange = [].concat(coins)
        .sort(function (a, b) {
            if (order === "ascending") {
                return a.price_change_percentage_24h > b.price_change_percentage_24h ? 1 : -1
            } else if (order === "descending") {
                return a.price_change_percentage_24h > b.price_change_percentage_24h ? -1 : 1
            }
            return 0;
        })
        .filter(name => name.id.includes(search.toLowerCase()))
        .map((item, i) =>
            <li key={i}>
                <img src={item.image} alt={item.id}></img>
                <h3>{item.id}</h3>
                <p className='market_cap'>{abbreviatedNumber(item.market_cap)}</p>
                <p style={{ color: item.price_change_percentage_24h > 0 ? 'green' : item.price_change_percentage_24h < 0 ? "red" : "black" }} className='daily_change'>{item.price_change_percentage_24h.toFixed(2)}%{item.price_change_percentage_24h.toFixed(2) > 0 ? <FaArrowUp /> : null}
                    {item.price_change_percentage_24h.toFixed(2) < 0 ? <FaArrowDown /> : null}
                    {item.price_change_percentage_24h.toFixed(2) === 0 ? <FaEquals /> : null}
                </p>
                <p className='coin_rank'>{item.market_cap_rank}</p>

            </li>)

    //Handles market cap ordering
    const marketCap = [].concat(coins)
        .sort(function (a, b) {
            if (order === "ascending") {
                return a.market_cap > b.market_cap ? 1 : -1
            } else if (order === "descending") {
                return a.market_cap > b.market_cap ? -1 : 1
            }
            return 0;
        })
        .filter(name => name.id.includes(search.toLowerCase()))
        .map((item, i) =>
            <li key={i}>
                <img src={item.image} alt={item.id}></img>
                <h3>{item.id}</h3>
                <p className='market_cap'>{abbreviatedNumber(item.market_cap)}</p>
                <p style={{ color: item.price_change_percentage_24h > 0 ? 'green' : item.price_change_percentage_24h < 0 ? "red" : "black" }} className='daily_change'>{item.price_change_percentage_24h.toFixed(2)}%
                    <span>{item.price_change_percentage_24h.toFixed(2) > 0 ? <FaArrowUp /> : null}</span>
                    <span>{item.price_change_percentage_24h.toFixed(2) < 0 ? <FaArrowDown /> : null}</span>
                    <span>{item.price_change_percentage_24h.toFixed(2) === 0 ? <FaEquals /> : null}</span>
                </p>
                <p className='coin_rank'>{item.market_cap_rank}</p>
            </li>)

    //Handles Rank Ordering
    const handleRank = [].concat(coins)
    .sort(function (a, b) {
        if (order === "ascending") {
            return a.market_cap_rank > b.market_cap_rank ? 1 : -1
        } else if (order === "descending") {
            return a.market_cap_rank > b.market_cap_rank ? -1 : 1
        }
        return 0;
    })
    .filter(name => name.id.includes(search.toLowerCase()))
    .map((item, i) =>
        <li key={i}>
            <img src={item.image} alt={item.id}></img>
            <h3>{item.id}</h3>
            <p className='market_cap'>{abbreviatedNumber(item.market_cap)}</p>
            <p style={{ color: item.price_change_percentage_24h > 0 ? 'green' : item.price_change_percentage_24h < 0 ? "red" : "black" }} className='daily_change'>{item.price_change_percentage_24h.toFixed(2)}%
                <span>{item.price_change_percentage_24h.toFixed(2) > 0 ? <FaArrowUp /> : null}</span>
                <span>{item.price_change_percentage_24h.toFixed(2) < 0 ? <FaArrowDown /> : null}</span>
                <span>{item.price_change_percentage_24h.toFixed(2) === 0 ? <FaEquals /> : null}</span>
            </p>
            <p className='coin_rank'>{item.market_cap_rank}</p>
        </li>)


    //Controls number of coins shown
    const handleNumberVisible = (name, type) => {
        if (orderType === name) {
            if (listNumber === "five") {
                return type
                    .slice(0, 5)
            } else if (listNumber === "ten") {
                return type.slice(0, 10)
            } else if (listNumber === "twenty") {
                return type.slice(0, 20)
            } else if (listNumber === "fifty") {
                return type.slice(0, 50)
            } else if (listNumber === "all") {
                return type
            }
        }
    }
    

    function abbreviatedNumber(value) {

        return Math.abs(Number(value)) >= 1.0e+9

            ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"

            : Math.abs(Number(value)) >= 1.0e+6

                ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"

                : Math.abs(Number(value)) >= 1.0e+3

                    ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"

                    : Math.abs(Number(value));

    }

    return (
        <div className='data_container'>
            <ul className="data_list">
                <div className='coin_headings'>
                    <h3 className='coin_market_cap'>Market Cap</h3>
                    <h3 className='coin_daily_change'>Daily % change</h3>
                    <h3 className='coin_rank_heading'>Rank</h3>
                </div>
                {orderType === "marketCap" ? handleNumberVisible("marketCap", marketCap) : null}
                {orderType === "name" ? handleNumberVisible("name", alphabetical) : null}
                {orderType === "dailyPercent" ? handleNumberVisible("dailyPercent", dailyPercentageChange) : null}
                {orderType === "rank" ? handleNumberVisible("rank", handleRank) : null}
            </ul>
        </div>
    )
}

export default Data