
function Team() {
    return (
        <div className="container">
            <div className="text-center mt-5 pt-5 mb-5 pb-5 border-bottom">
                <h4>People</h4>

            </div>
            <div className="row pt-5">
                <div className="col-5 text-center ">
                    <img src="\media\image\nithin-kamath.jpg" alt="" style={{ borderRadius: "100%", width: "60%", }} />

                    <h4 className="mt-4">Nithin Kamath</h4>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "1rem",}}>
                        Founder, CEO
                    </p>
                </div>
                <div className="col-7 ">
                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "6rem", }}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "6rem", }}>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                    </p>

                    <p style={{ fontSize: "1.em", paddingRight: "6rem", wordSpacing: "2px", lineHeight: "3"}}>
                        Playing basketball is his zen.
                        <br />
                        Connect on 
                         <a href="" style={{ textDecoration: "none" }}> Homepage / TradingQnA / Twitter</a>
                    </p>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-4 text-center ">
                    <img src="\media\image\cfo.jpg" alt="" style={{ borderRadius: "100%", width: "60%", }} />

                    <h4 className="mt-4">Nikhil Kamath</h4>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "1rem",  }}>
                       Co-founder & CFO
                    </p>
                </div>
                <div className="col-4 text-center ">
                    <img src="\media\image\cto.jpg" alt="" style={{ borderRadius: "100%", width: "60%", }} />

                    <h4 className="mt-4">Dr. Kailash Nadh</h4>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "1rem",  }}>
                       CTO
                    </p>
                </div>
                <div className="col-4 text-center ">
                    <img src="\media\image\coo.jpg" alt="" style={{ borderRadius: "100%", width: "60%", }} />

                    <h4 className="mt-4">Venu Madhav</h4>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "1rem",}}>
                        COO
                    </p>
                </div>
               
            </div>
            <div className="row pt-5">
                <div className="col-4 text-center">
                    <img src="\media\image\Seema.jpg" alt="" style={{ borderRadius: "100%", width: "60%", }} />

                    <h4 className="mt-4">Seema Patil</h4>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "1rem",  }}>
                        Director
                    </p>
                </div>

                <div className="col-4 text-center ">
                    <img src="\media\image\karthik.jpg" alt="" style={{ borderRadius: "100%", width: "60%", }} />

                    <h4 className="mt-4">Karthik Rangappa</h4>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "1rem",  }}>
                        Chief of Education
                    </p>
                </div>
                <div className="col-4 text-center ">
                    <img src="\media\image\Austin.jpg" alt="" style={{ borderRadius: "100%", width: "60%", }} />

                    <h4 className="mt-4">Austin Prakesh</h4>

                    <p style={{ fontSize: "1.1em", wordSpacing: "1px", paddingRight: "1rem",  }}>
                       Director Strategy
                    </p>
                </div>
                
            </div>

        </div>
    );
}

export default Team;