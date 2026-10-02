
function Hero() {
    return ( 
        <div className="container p-5">
           <div className="row text-center " style={{ display: "flex", alignItems: "center" , justifyContent: "center"}} >
                <img src="media/image/landing.svg" alt="landing image" className="mb-5" style={{height: "55%" , width: "55%"}}/>
                <h3 className="mt-5">Invest in everything</h3>
                <p className="" >Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary" style={{width: "20%" , margin: " 0 auto"}}>Sign up for free</button>
           </div>
        </div>
     );
}

export default Hero;