function LeftSection({ imageUrl, productTitle, productDescription, tryDemo, learnMore, googlePlay, appleStore }) {

    return (
        <div className="container">
            <div className="row pt-5 ">
                <div className="col-7 text-center ">

                    <img src={imageUrl} />

                </div>
                <div className="col-5 mt-5 pt-1" style={{ paddingLeft: "7rem", lineHeight: "2" }}>
                    <h2 style={{ fontSize: "1.6em", wordSpacing: "1px", paddingRight: "6rem", }}>{productTitle}</h2>

                    <p style={{ fontSize: "1em", wordSpacing: "1px", paddingRight: "1rem", }}>
                        {productDescription}
                    </p>
                    {tryDemo && (
                        <a href="" style={{ textDecoration: "none", fontSize: "18px" }} >{tryDemo} →</a>
                    )}
                    {learnMore && (
                        <a href="" style={{ textDecoration: "none", fontSize: "18px", marginLeft: "40px", fontWeight: "500" }}> {learnMore}  →</a>
                    )}
                    <br />

                    <a href={googlePlay}>
                        <img className="mt-4 me-4 " src="media\image\google-play-badge-light.svg" alt="" />
                    </a>
                    <a href={appleStore}>
                        <img className="mt-4" src="media\image\appstore-badge-light.svg" alt="" />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default LeftSection;