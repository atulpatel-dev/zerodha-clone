

function Education() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-6"
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        objectFit: "contain"

                    }}>
                    <img
                        src="\media\image\index-education.svg"
                        alt="education"
                        style={{
                            width: "25rem"
                        }} />
                </div>
                <div className="col-6">
                    <div className="para1">
                        <h3 style={{
                            color: "#424242",
                            fontSize: "22px",
                            lineHeight: "3"
                        }}>
                            Free and open market education</h3>
                        <p style={{
                            fontWeight: "400",
                            lineHeight: "1.7"
                        }}>
                            Varsity, the largest online stock market education book in the world
                            covering everything from the basics to advanced trading.
                        </p>
                        <span className="text-primary "
                            style={{
                                lineHeight: "4"
                            }}>
                            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="para2"
                        style={{
                            lineHeight: "1.7"
                        }}>
                        <p>
                            TradingQ&A, the most active trading and investment
                            community in India for all your market related queries.
                        </p>
                        <span
                            className="text-primary " >
                            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;