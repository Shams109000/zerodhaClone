import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import '../../index.css'


function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <LeftSection
        url="media/images/Kite.png"
        title="Kite"
        paragraph="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/dashboard"
        learnMore="https://zerodha.com/products/kite"
        googlePlay=""
        appleStore=""
      ></LeftSection>
      <RightSection url="media/images/console.png" title={"Console"} paragraph='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
      link={{name:"Learn more",url:"https://zerodha.com/products/console"}} ></RightSection>
      <LeftSection
        url="media/images/Coin.png"
        title="Coin"
        paragraph="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com/"
        learnMore=""
        googlePlay=""
        appleStore=""
      ></LeftSection>
        <RightSection url="media/images/Kiteconnect.png" title={"Kite Connect API"} paragraph='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
      link={{name:"Kite Connect",url:"https://kite.trade/"}} ></RightSection>
      <LeftSection
        url="media/images/Varsity.png"
        title="Varsity mobile"
        paragraph="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appleStore=""
      ></LeftSection>
      <h5 className="text-center heading  mt-5">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.
      </h5>
      <Universe></Universe>
    </>
  );
}

export default ProductPage;
