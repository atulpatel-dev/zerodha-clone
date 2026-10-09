import { useState } from "react";
import { Link } from "react-router-dom"

function Menu() {
    const [selectMenu, setSelectMenu] = useState(0);
    const [isProfileDropDown, setIsProfileDropDown] = useState(false);

    function handleMenuClick(index) {
        setSelectMenu(index);
    }
    function handleProfileClick(index) {
        setIsProfileDropDown(!isProfileDropDown);
    }
    return (
        <div className="menu-container">
            <div className="dashboard-menu">
                <div className="kite-logo">
                    <img src="/kite-logo.svg" alt="kite-logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link style={{ textDecoration:" none "}} to="/" onClick={()=>handleMenuClick(0)}>
                               <p className={`menu-link ${selectMenu === 0 ? "active" : ""}`}>Dashboard</p> 
                            </Link>
                        </li> 
                        <li>
                            <Link style={{ textDecoration:" none "}} to="/orders" onClick={()=>handleMenuClick(1)}>
                               <p className={`menu-link ${selectMenu === 1 ? "active" : ""}`}>Orders</p> 
                            </Link>
                        </li>
                         <li>
                            <Link style={{ textDecoration:" none "}} to="/holdings" onClick={()=>handleMenuClick(2)}>
                               <p className={`menu-link ${selectMenu === 2 ? "active" : ""}`}>Holdings</p> 
                            </Link>
                        </li>
                         <li>
                            <Link style={{ textDecoration:" none "}} to="/positions" onClick={()=>handleMenuClick(3)}>
                               <p className={`menu-link ${selectMenu === 3 ? "active" : ""}`}>Positions</p> 
                            </Link>
                        </li>
                         <li>
                            <Link style={{ textDecoration:" none "}} to="/funds" onClick={()=>handleMenuClick(4)}>
                               <p className={`menu-link ${selectMenu === 4 ? "active" : ""}`}>Funds</p> 
                            </Link>
                        </li>
                         <li>
                            <Link style={{ textDecoration:" none "}} to="/apps" onClick={()=>handleMenuClick(5)}>
                               <p className={`menu-link ${selectMenu === 5 ? "active" : ""}`}>Apps</p> 
                            </Link>
                        </li>
                    </ul>
                    <div className="profile" onClick={handleProfileClick}>
                        <h5 className="avtar">AP</h5>
                        <p className="userId">UserId</p>
                    </div>
                    {isProfileDropDown}
                </div>
            </div>

        </div>
    );
}

export default Menu;