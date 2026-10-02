
import OpenAccount from "../OpenAccount";

import Trust from "./Trust";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";

import KiteConnect from "./Kite";

function HomePage() {
    return (
        <div>
            <Hero />
            <Trust />
            <KiteConnect />
            <Pricing />
            <Education />
            <OpenAccount />
        </div>
    );
}

export default HomePage;