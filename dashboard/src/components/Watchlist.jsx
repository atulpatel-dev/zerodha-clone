
import { useState } from "react";
import { watchList } from "./data/data";
import "./watchList.css"
function Watchlist() {
    return (
        <div className="watchlist-container">
            <div className="serch-container">
                <input type="text" name="serch" id="serch" placeholder="Search eg:nifty bse , nifty fut weekly" />

            </div>
            <ul className="list" >
                {watchList.map((stock, index) => (
                    <WatchListItem stock={stock} key={index} />
                ))}
            </ul>

        </div>

    );
}

export default Watchlist;

const WatchListItem = ({ stock }) => {
    const [showWatchListActions, setShowWatchListActions] = useState(false);

    function handleMouseEnter() {
        setShowWatchListActions(true)
    }

    function handleMouseLeave() {
        setShowWatchListActions(false)
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">
                        {stock.percent}
                    </span>
                    {stock.isDown ? (
                        <span className="down">▼</span>
                    ) : (
                        <span className="up">▲</span>
                    )}
                    <span className="price">
                        {stock.price}
                    </span>
                </div>
            </div>
        </li>
    )
}