
function Menu() {
    return (
        <div className="menu-container">
            <div className="dashboard-menu">
                     <div className="kite-logo">
                <img src="/kite-logo.svg" alt="kite-logo" />
            </div>
            <div className="menus">
                <ul>
                    <li>Dashboard</li>
                    <li>Orders</li>
                    <li>Holdings</li>
                    <li>Positions</li>
                    <li>Funds</li>
                    <li>Apps</li>
                </ul>
                <div className="profile">
                    <h5 className="avtar">AP</h5>
                    <p className="userId">UserId</p>
                </div>
            </div>
            </div>
           
        </div>
     );
}

export default Menu;