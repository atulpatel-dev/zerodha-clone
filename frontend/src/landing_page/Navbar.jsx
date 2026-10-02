import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav
            className="
                navbar
                navbar-expand-sm "
            style={{
                width: "100%",
                position: "relative",
                
            }}
        >
            <div className="fluid "
                style={{
                    width: "100%",
                    height: "4rem",
                    position: "fixed",
                    top: "0px",
                    backgroundColor:" #ffff",
                    zIndex: "25",
                    borderBottom: "1px solid black"
                }}
            >

                <div className="
                   navbar-brand
                   d-flex
                   align-items-baseline
                   justify-content-between
                   mx-5 px-5
                   text-center
                   ">
                    <img
                        src="/media/image/logo.svg"
                        alt="Logo image"
                        style={{
                            width: "160px",
                            height: "15px"
                        }}
                    />
                    <form className=" " role="search">
                        <ul className="navbar-nav d-flex align-items-baseline me-auto mb-2 mb-lg-0 fs-6 ">
                            <li className="nav-item pe-5 ">

                                <Link to="/" style={{ textDecoration: "none", color: "#424242" }} >Signup</Link>
                            </li>
                            <li className="nav-item pe-5">
                                <Link to="/about" style={{ textDecoration: "none", color: "#424242" }}  >About</Link>
                            </li>
                            <li className="nav-item pe-5">
                                <Link to="/products" style={{ textDecoration: "none", color: "#424242" }} >Products</Link>
                            </li>
                            <li className="nav-item pe-4">

                                <Link to="/pricing" style={{ textDecoration: "none", color: "#424242" }}  >Pricing</Link>
                            </li>
                            <li className="nav-item pe-2">

                                <Link to="/support" style={{ textDecoration: "none", color: "#424242" }} >Support</Link>
                            </li> &nbsp;
                            <li className="nav-item fs-4 opacity-50 ps-3">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </form>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;


