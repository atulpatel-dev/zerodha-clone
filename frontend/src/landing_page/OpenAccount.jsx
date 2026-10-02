

function OpenAccount() {
    return ( 
       <div className="container mt-5 pt-5">
           <div className="row text-center " style={{ display: "flex", alignItems: "center" , justifyContent: "center", color: "#424242"}} >
               
                <h3 className="mt-5">Open a Zerodha account</h3>
                <p style={{lineHeight: "4"}} >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="p-2 btn btn-primary" style={{width: "20%" , margin: " 0 auto", }}>Sign up for free</button>
           </div>
        </div>
     );
}

export default OpenAccount;