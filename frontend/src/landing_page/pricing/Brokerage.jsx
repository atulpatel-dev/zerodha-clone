function Broketage() {
    return (
        <div className="container text-muted">
            <div className="charges">
                <h4 style={{ margin: "1.2rem" }}>Charges for account opening</h4>
                <table style={{
                    border: "1px solid #d1d0d0",
                    width: "90%", margin: "1.2rem", height: "18rem"
                    , borderRadius: "2px"
                }}>
                    <thead style={{
                        border: "1px solid #d1d0d0",
                        width: "100%", margin: "1.2rem", height: "3rem", borderRadius: "4px"
                    }}>
                        <tr >
                            <td style={{ paddingLeft: "20px", fontWeight: "500" }}>Type of account</td>
                            <td style={{ paddingRight: "20px", fontWeight: "500" }}>Charges</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Individual account</td>
                            <td> <span style={{ backgroundColor: "#0eb031", paddingLeft: "10px", paddingRight: "10px", color: "white", borderRadius: "2px" }}>Free</span></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Minor account</td>
                            <td><span style={{ backgroundColor: "#0eb031", paddingLeft: "10px", paddingRight: "10px", color: "white", borderRadius: "2px" }}>Free</span></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>NRI account</td>
                            <td>₹ 500</td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>HUF account</td>
                            <td> <span style={{ backgroundColor: "#0eb031", paddingLeft: "10px", paddingRight: "10px", color: "white", borderRadius: "2px" }}>Free</span> (online) / ₹ 500 (offline)</td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Partnership, LLP, and Corporate accounts (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="demet">
                <h4 style={{ margin: "1.2rem", marginTop: "5rem", marginBottom: "3rem" }}>Demat AMC (Annual Maintenance Charge)</h4>
                <p style={{ margin: "1.2rem", marginBottom: "2rem", fontSize: "18px", backgroundColor: "#f1fcfd", width: "17%", textAlign: "center", borderRadius: "2px", borderLeft: "4px solid #387ed1" }}>Free for first year*</p>
                <p style={{ margin: "1.2rem", marginBottom: "1rem", fontSize: "14px" }}>From second year onwards, for BSDA accounts:</p>
                <table style={{
                    border: "1px solid #d1d0d0",
                    width: "100%", margin: "1.2rem", height: "13rem"
                    , borderRadius: "20px"
                }}>
                    <thead style={{
                        border: "1px solid #d1d0d0",
                        width: "100%", margin: "1.2rem", height: "3rem", borderRadius: "4px"
                    }}>
                        <tr >
                            <td style={{ paddingLeft: "20px", fontWeight: "500" }}>Value of holdings</td>
                            <td style={{ paddingRight: "20px", fontWeight: "500" }}>AMC</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Up to ₹4 lakh</td>
                            <td> <span style={{ backgroundColor: "#0eb031", paddingLeft: "10px", paddingRight: "10px", color: "white", borderRadius: "2px" }}>Free</span></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>₹4 lakh – ₹10 lakh</td>
                            <td>₹100 per year + 18% GST, charged quarterly</td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Above ₹10 lakh</td>
                            <td	>₹300 per year + 18% GST, charged quarterly</td>
                        </tr>

                    </tbody>
                </table>
                <p style={{ margin: "1.2rem", marginBottom: "1rem", fontSize: "13px" }}>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
                <p style={{ margin: "1.2rem", marginBottom: "1rem", fontSize: "13px" }}>To learn more about BSDA, <a href="" style={{ textDecoration: "none" }}>click here.</a>  To learn more about AMC, <a href="" style={{ textDecoration: "none" }}>click here.</a></p>
                <p style={{ margin: "1.2rem", marginBottom: "1rem", fontSize: "13px" }}>*Resident individual accounts only.</p>
            </div>
            <div className="services mt-5 mb-2 pt-3">
                <h4 style={{ margin: "1.2rem" }}>Charges for optional value added services</h4>
                <table style={{
                    border: "1px solid #d1d0d0",
                    width: "100%", margin: "1.2rem", height: "13rem"
                    , borderRadius: "2px"
                }}>
                    <thead style={{
                        border: "1px solid #d1d0d0",
                        width: "100%", margin: "1.2rem", height: "3rem", borderRadius: "4px"
                    }}>
                        <tr >
                            <td style={{ paddingLeft: "20px", fontWeight: "500" }}>Service</td>
                            <td style={{ paddingRight: "20px", fontWeight: "500" }}>Billing Frequency</td>
                            <td style={{ paddingRight: "20px", fontWeight: "500" }}>Charges</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Tickertape</td>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Monthly / Quarterly / Annual</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Smallcase</td>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Monthly</td>
                            <td>	Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Kite Connect</td>
                            <td style={{ paddingLeft: "20px", fontWeight: "400" }}>Monthly</td>
                            <td>Connect: 500 | Personal: Free</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="row mt-5" >
                <h4 style={{ margin: "1.2rem" }}>Charges explained</h4>
                <div className="col-6">
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        Securities/Commodities transaction tax
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        Transaction/Turnover Charges
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        Call & trade
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        Stamp charges
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        NRI brokerage charges
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        <ul>
                            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        </ul>
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        Account with debit balance
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        Accounts with a debit balance will be charged an additional ₹20 per executed order.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        Charges for Investor's Protection Fund Trust (IPFT) by NSE
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        <ul>
                            <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                            <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        Margin Trading Facility (MTF)
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        <ul>
                            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                        </ul>
                    </p>


                </div>
                <div className="col-6">
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}
                    >GST
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                        SEBI Charges
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                       DP (Depository participant) charges
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                    </p>
                      <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                       Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                    </p>
                      <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                       Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"
                        }}>
                       Pledging charges
                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"
                        }}>
                        ₹30 + GST per pledge request per ISIN.
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"

                        }}>
                       AMC (Account maintenance charges)

                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"

                        }}>
                       Free for the first year on all new resident individual accounts.

                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"

                        }}>
                        Corporate action order charges

                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"

                        }}>
                       ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.

                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"

                        }}>
                       Off-market transfer charges

                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"

                        }}
                    >₹25 per transaction.

                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"

                        }}>
                       Physical CMR request

                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"

                        }}>
                       First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.

                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"

                        }}>
                       Payment gateway charges

                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"

                        }}>
                        ₹9 + GST (Not levied on transfers done via UPI)
                    </p>
                    <p
                        style={{
                            margin: "1.2rem",
                            fontSize: "18px"

                        }}>
                        Delayed Payment Charges

                    </p>
                    <p
                        style={{
                            marginLeft: "1.2rem",
                            fontSize: "12px",
                            marginRight: "1.8rem"

                        }}>
                       Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.

                    </p>
                </div>
            </div>

        </div>
    );
}

export default Broketage;