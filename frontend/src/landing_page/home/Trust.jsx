
function Trust() {
    return (
        <div className="container mt-5">
            <div className="row " style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="col-5 " >
                    <h3>Trust with confidence</h3>

                    <div className="first  mt-5 ">
                        <h4>Customer-first always</h4>
                        <p>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="first">
                        <h4>No spam or gimmicks</h4>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span>Our philosophies</span>.</p>
                    </div>
                    <div className="first">
                        <h4>The Zerodha universe</h4>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="first">
                        <h4>Do better with money</h4>
                        <p>With initiatives like <span>Nudge</span>  and <span>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-7 p-5"  >
                    <div style={{ display: "flex", alignItems: "start", justifyContent: "center" }}>
                        <img src="media/image/ecosystem.png" alt="ecosystem image" style={{ height: "32rem", width: "35rem" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "start", justifyContent: "center" }}>
                        <p className="text-primary">Explore your products  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p> &nbsp; &nbsp; &nbsp; &nbsp;
                        <p className="text-primary">Try Kite demo<i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trust;