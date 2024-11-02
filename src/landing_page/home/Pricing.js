import React from 'react'

function Pricing() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className='fs-3'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href=""  style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right"></i></a>
          
        </div>
        <div className="col-md-6 col-sm-12col-6 d-flex justify-content-between">
          <div>
          <img src="media/images/zero.svg" alt="" srcset="" style={{width:"90px"}} />
          <p className='text-muted' style={{fontSize:"13px"}}>Free account <br /> opening</p>
          </div>
          <div>
          <img src="media/images/zero.svg" alt="" srcset="" style={{width:"90px"}} />
          <p className='text-muted' style={{fontSize:"13px"}}>Free equity delivery <br /> 
          and direct mutual funds </p>
          </div>
          <div>
          <img src="media/images/20.svg" alt="" srcset="" style={{width:"90px"}} />
          <p className='text-muted' style={{fontSize:"13px"}}>Intraday and <br />
          F&O</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pricing