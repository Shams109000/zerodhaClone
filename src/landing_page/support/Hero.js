import React from "react";
import "../../index.css";

function Hero() {
  return (
    <section class="container-fluid support pb-5">
      <div className="container p-5 ">
        <div className="d-flex justify-content-between mb-5">
          <h4>Support Portal</h4>
          <a href="">Track tickets</a>
        </div>
        <div className="row p-2">
          <div className="col-md-7 col-sm-12 ">
            <h3 className="mb-4 ">
              Search for an answer or browse help topics to create a ticket
            </h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Eg:how do i activate F&O, Why is my order getting rejected ..."
            />
            <a href="">Track account opening   
            </a>
            <a href="" style={{marginLeft:"22px"}}>Track segment activation</a>
            <a href="" style={{marginLeft:"22px"}}>Intraday margins</a>
            <a href="" style={{marginLeft:"22px"}}>Kite user manual</a>
          </div>
          <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center ">
              <h1 className="fs-4 text-white my-3">Featured</h1>
              <ol>
                <li>Surveillance measure on scrips - September 2024                </li>
                <li className="my-3">Rights Entitlements listing in September 2024
                </li>
              </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
