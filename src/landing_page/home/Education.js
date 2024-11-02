import React from 'react'

function Education() {
  return (
    <div className="container p-4 mt-5 ">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src="media/images/varsity2.svg" alt="img" style={{width:"80%",height:"90%"}} />
        </div>
        <div className="col-md-6 col-sm-12">
        <h1 className='fs-3 mb-4'>Free and open market education
        </h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href=""  style={{textDecoration:"none",fontSize:"18px"}}>Varsity <i class="fa fa-long-arrow-right"></i></a>
          <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href=""  style={{textDecoration:"none",fontSize:"18px"}}>TradingQ&A <i class="fa fa-long-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education