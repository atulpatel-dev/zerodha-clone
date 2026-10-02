function RightSection({productName , productDescription , learnMore , imageUrl}) {
    return (
        <div className="container ">
            <div className="row pt-5 ">
               
                <div className="col-5 mt-5 pt-1" style={{ paddingRight: "7rem", lineHeight: "2" ,display: "flex" , flexDirection: 'column' , justifyContent: "center"}}>
                    <h2 style={{ fontSize: "1.6em", wordSpacing: "1px", paddingRight: "6rem", }}>{productName}</h2>

                    <p style={{ fontSize: "1em", wordSpacing: "1px", paddingRight: "1rem", }}>
                        {productDescription}
                    </p>

                     <a href="" style={{textDecoration: "none", fontSize: "18px" ,  fontWeight: "500"}}>{learnMore}  →</a>

                </div>
                 <div className="col-7">
                    <img src={imageUrl}/>
                </div>
            </div>

        </div>
    );
}

export default RightSection;