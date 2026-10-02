function Pricing() {
    return (
        <div className="container mt-5 pt-5 pb-5 ">

            <div className="row ">

                <div className="col-5">

                    <h4
                        style={{
                            fontSize: "30px",
                            fontWeight: "500",
                            color: "#424242",
                            marginBottom: "35px"
                        }}
                    >
                        Unbeatable pricing
                    </h4>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                            color: "#424242",
                            marginBottom: "10px"
                        }}
                    >
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>

                    <span
                        className="text-primary"
                        style={{
                            fontSize: "15px",
                            cursor: "pointer"
                        }}
                    >
                        See pricing
                        <span style={{ marginLeft: "8px" }}>→</span>
                    </span>

                </div>


                
                <div
                    className="col-7"
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "start",
                        paddingTop: "75px"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            paddingLeft: "20px",
                            justifyContent: "center"
                        }}
                    >

                        <img
                            src="/media/image/pricing-eq.svg"
                            alt="Free account"
                            style={{
                                width: "120px",
                                height: "90px",
                                objectFit: "contain"
                            }}
                        />

                        <div
                            style={{
                                fontSize: "10px",
                                lineHeight: "1",
                                color: "#424242",
                                marginTop: "40px",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Free account
                            <br />
                            opening
                        </div>

                    </div>


                    {/* PRICE 2 */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start"
                        }}
                    >

                        <img
                            src="/media/image/pricing-eq.svg"
                            alt="Free equity delivery"
                            style={{
                                width: "120px",
                                height: "90px",
                                objectFit: "contain"
                            }}
                        />

                        <div
                            style={{
                               fontSize: "10px",
                                lineHeight: "1",
                                color: "#424242",
                                marginTop: "40px",
                                
                            }}
                        >
                            Free equity delivery
                            <br />
                            and direct mutual funds
                        </div>

                    </div>


                    {/* PRICE 3 */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start"
                        }}
                    >

                        <img
                            src="/media/image/other-trades.svg"
                            alt="Intraday and F&O"
                            style={{
                                width: "120px",
                                height: "90px",
                                objectFit: "contain"
                            }}
                        />

                        <div
                            style={{
                                fontSize: "10px",
                                lineHeight: "1",
                                color: "#424242",
                                marginTop: "40px",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Intraday and
                            <br />
                            F&amp;O
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Pricing;