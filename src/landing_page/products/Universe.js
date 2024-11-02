import React from "react";
import '../../index.css'

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1>The Zerodha Universe</h1>
        <p className="my-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-md-4 p-3 mt-4   text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%",height:"3.5rem" }}
            alt=""
          />
          <p className="paaragraph mt-4 ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-md-4 p-3 mt-4  text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "50%",height:"3.5rem" }}
          />
          <p className="mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more. .
          </p>
        </div>
        <div className="col-md-4 p-3 mt-4  text-center">
          <img
            src="media/images/tijoriLogo.svg"
            alt=""
            style={{ width: "50%",height:"3.5rem" }}
          />
          <p className="mt-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-md-4 p-3 mt-4 text-center">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "50%",height:"3.5rem" }}
          />
          <p className="mt-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-md-4 p-3 mt-4 text-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "50%",height:"3.5rem" }}
          />
          <p className="mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-md-4 p-3 mt-4 text-center">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "50%",height:"3.5rem" }}
          />
          <p className="mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button className='btn p-2 fs- my-3' style={{width:"200px",margin:"0 auto",backgroundColor:"#387ed1",color:"#fff",fontWeight:"610",fontSize:"1.2rem"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
