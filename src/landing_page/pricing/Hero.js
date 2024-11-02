import React from 'react'

function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <div className='d-flex py-5 mb-5 flex-column justify-content-center align-items-center'>
          <h1 className='heading'>Charges</h1>
          <h4 className='para text-muted'>List of all charges and taxes
          </h4>
        </div> 
        <div className="   col-md-4 col-sm-12">
          <img src="media/images/zero.svg" alt="" style={{width:"70%"}} />
          <h3 className='heading my-3'>Free equity delivery</h3>
          <p className='para'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-md-4 col-sm-12">
        <img src="media/images/20.svg" alt=""  style={{width:"70%"}}/>
          <h3 className='heading my-3'>Intraday and F&O trades
          </h3>
          <p className='para'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-md-4 col-sm-12">
        <img src="media/images/zero.svg" alt="" style={{width:"70%"}} />
          <h3 className='heading my-3'>Free direct MF</h3>
          <p className='para'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero