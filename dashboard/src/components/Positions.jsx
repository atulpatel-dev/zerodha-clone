
import './holding.css'
import { positions } from "./data/data"

function Positions() {
    return (
        <>
            <h3 className="title"> Positions  ({positions.length}) </h3>
            <br />

            <div className="order-table">
                <table>
                    <thead>
                        <tr className='holdings-bar'>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>


                    {positions.map((stock, index) => {
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - stock.avg * stock.qty;
                        const profClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        const getValueClass = (val) => {
                            if (typeof val === 'string' && val.startsWith('+')) return 'text-green';
                            if (typeof val === 'string' && val.startsWith('-')) return 'text-red';
                            return '';
                        };
                        const getNumberClass = (num) => {
                            return num >= 0 ? "text-green" : "text-red"
                        }

                        return (
                            <tbody key={index}>
                                <tr >
                                    <td>{stock.name}</td>
                                    <td>{stock.qty.toFixed(2)}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)} </td>
                                    <td>{curValue.toFixed(2)}</td>
                                    <td className={`${profClass} ${getNumberClass(isProfit)}`}>
                                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                                    </td>
                                    <td className={`${profClass} ${getValueClass(stock.net)}`}>{stock.net}</td>
                                    <td className={`${dayClass} ${getValueClass(stock.day)}`}>{stock.day}</td>
                                </tr>
                            </tbody>

                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default Positions;