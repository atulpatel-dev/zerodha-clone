function Univarse() {
    return (
        <div className="container">
            <div className="row text-center mt-5 pt-5">
                <h5 >Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none" }}>Zerodha.tech </a>blog.</h5>
                <h4 className="mt-5 pt-5">The Zerodha Universe</h4>
                <h6 className="mt-3 mb-5">Extend your trading and investment experience even further with our partner platforms</h6>
                <div className="col-4   mt-4 mb-5">
                    <img src="media\image\zerodhafundhouse.png" alt="" style={{ width: "70%", marginBottom: "1.2rem" }} />
                    <p style={{ fontSize: "13px", color: "#424242", paddingLeft: '3rem', paddingRight: '3rem' }}>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4  mt-4 mb-5">
                    <img src="media\image\sensibull-logo.svg" alt="" style={{ width: "60%", marginBottom: "1.2rem" }} />
                    <p style={{ fontSize: "13px", color: "#424242", paddingLeft: '3rem', paddingRight: '3rem' }}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 mt-4 mb-5">
                    <img src="media\image\tijori.svg" alt="" style={{ width: "40%", marginBottom: "1.2rem" }} />
                    <p style={{ fontSize: "13px", color: "#424242", paddingLeft: '3rem', paddingRight: '3rem' }}>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-4  mt-4 mb-5">
                    <img src="media\image\streak-logo.png" alt="" style={{ width: "45%", marginBottom: "1.2rem" }} />
                    <p style={{ fontSize: "13px", color: "#424242", paddingLeft: '3rem', paddingRight: '3rem' }}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-4 mt-4 mb-5">
                    <img src="media\image\smallcase-logo.png" alt="" style={{ width: "60%", marginBottom: "1.2rem" }} />
                    <p style={{ fontSize: "13px", color: "#424242", paddingLeft: '3rem', paddingRight: '3rem' }}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4  mt-4 mb-5">
                    <img src="media\image\ditto-logo.png" alt="" style={{ width: "40%", marginBottom: "1.2rem" }} />
                    <p style={{ fontSize: "13px", color: "#424242", paddingLeft: '3rem', paddingRight: '3rem' }}>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
            </div>
            <div className="row text-center " style={{ display: "flex", alignItems: "center" , justifyContent: "center"}} >
               
                <button className="p-2 btn btn-primary" style={{width: "20%" , margin: " 0 auto"}}>Sign up for free</button>
           </div>
        </div >
    );
}

export default Univarse;