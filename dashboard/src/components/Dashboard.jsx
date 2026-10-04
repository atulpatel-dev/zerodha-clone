import { Routes, Route } from 'react-router-dom'

import Watchlist from "./Watchlist";
import Summery from "./Summery";
import Orders from "./Orders"
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps"

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="watchlist-container">
                <Watchlist />
            </div>
            
            <div className="route-container">

                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/summery' element={<Summery />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/holdings' element={<Holdings />} />
                    <Route path='/positions' element={<Positions />} />
                    <Route path='/funds' element={<Funds />} />
                    <Route path='/apps' element={<Apps />} />

                </Routes>

            </div>
        </div>
    );
}

export default Dashboard;