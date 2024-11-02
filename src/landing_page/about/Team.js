import React from 'react'
import '../../index.css'
function Team() {
  return (
     <div className="container ">
      <div className="row text-center mx-4 p-3">
        <h1 className='fs-1'>
       People
        </h1>
      </div>
      <div className="row  mt-4 p-3">
        <div className="col-md-6 col-sm-12 p-3 text-center ">
          <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"50%"}} alt="" />
          <h5 className='my-3'>Nithin Kamath</h5>
          <h6 className='text-muted'>Founder, CEO</h6>
        </div>
        <div className="col-md-6 col-sm-12 p-3">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
     </div>
  )
}

export default Team