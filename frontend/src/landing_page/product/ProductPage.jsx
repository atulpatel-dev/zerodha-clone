import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Univarse from "./Univarse";
function ProductPage() {
    return (
        <div>
            <Hero />
            <LeftSection
                imageUrl="media\image\products-kite.png"
                productTitle="Kite"
                productDescription=" Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="TryDemo"
                learnMore="Learn More"
                googlePlay=""
                appleStore=""
            />

            <RightSection
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore=""
                imageUrl="media\image\products-console.png"
            />
            


            <LeftSection
                imageUrl="media\image\products-coin.png"
                productTitle="Coin"
                productDescription=" Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="Coin"
                googlePlay=""
                appleStore=""
            />

            <RightSection
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."
                learnMore="Kite Connect"
                imageUrl="media\image\landing (1).svg"
            />

            <LeftSection
                imageUrl="media\image\varsity-products.svg"
                productTitle="Varsity mobile"
                productDescription=" An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                googlePlay=""
                appleStore=""
            />

            <Univarse />
        </div>
    );
}

export default ProductPage;