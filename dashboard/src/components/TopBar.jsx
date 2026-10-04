import Menu from "./Menu"

function TopBar() {
    return (
        <div className="topbar-container">
            <div className="topbar-fluid">
                <div className="nifty-container">
                    <p className="nifty">NIFTY 50</p>
                    <p className="nifty-rate" >10121.40</p>
                    <p className="percent">0.27%</p>
                </div>


                <div className="sensex-container">
                    <p className="sensex">SENSEX</p>
                    <p className="sensex-rate" >32998.68</p>
                    <p className="percent">0.23%</p>
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default TopBar;