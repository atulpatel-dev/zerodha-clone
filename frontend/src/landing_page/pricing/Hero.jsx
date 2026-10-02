function Hero() {
    return (
        <div className="container text-center mt-5 p-5">
            <h3 className="mt-5">Charges</h3>
            <p className="text-muted fs-5">List of all charges and taxes</p>
            <div
                className="row"
                style={{
                    display: "flex",
                    alignItems: "flex-start",

                    justifyContent: "start",
                    paddingTop: "75px",

                }}
            >


                <div
                    className="col-4"
                >

                    <img
                        src="/media/image/pricing-eq.svg"
                        alt="Free account"
                        style={{
                            width: "250px",
                            height: "200px",
                            objectFit: "contain"
                        }}
                    />

                    <div
                        style={{

                        }}
                    >
                        <h3>Free equity delivery</h3>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                </div>


                {/* PRICE 2 */}
                <div
                    className="col-4"
                    style={{

                    }}
                >

                    <img
                        src="/media/image/other-trades.svg"
                        alt="Free equity delivery"
                        style={{
                             width: "250px",
                            height: "200px",
                            objectFit: "contain"
                        }}
                    />

                    <div
                        style={{

                        }}
                    >
                        <h3>Intraday and F&O trades</h3>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>

                </div>


                {/* PRICE 3 */}
                <div
                    className="col-4"
                    style={{

                    }}
                >

                    <img
                        src="/media/image/pricing-eq.svg"
                        alt="Intraday and F&O"
                        style={{
                            width: "250px",
                            height: "200px",
                            objectFit: "contain"
                        }}
                    />

                    <div
                        style={{

                        }}
                    >
                        <h3>Free direct MF</h3>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Hero;