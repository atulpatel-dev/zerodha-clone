function KiteConnect() {
   return (
      <div className="container">
         <div className="intro"
            style={{
               all: "unset",
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "center",
               height: "5rem",
               width: "100vw",
               left: "50%",
               marginLeft: "-6vw",
               backgroundColor: "#f6fbff",
               paddingRight: "40px"
            }}>
            <img
               src="media\image\kc-logo-landing.svg"
               alt="Kite-Connect img"
               style={{
                  height: "1.5rem",
                  width: "20%"
               }} />
            <p
               style={{
                  width: "55%"
               }}>
               Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.
               <span className="text-primary">
                  Explore <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
               </span>
            </p>
            <img
               src="media\image\kc-banner-image.svg"
               alt="kc banner"
               style={{
                  height: "1.5rem",
                  width: "20%"
               }} />
         </div>

      </div>
   );
}

export default KiteConnect;