import React from 'react'

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
          <div className="col-md-8 col-sm-12">
            <a href="">
              <h3 className='fs-5'>Brokerage calculator</h3>
            </a>
            <ul style={{textAlign:"left",lineHeight:"2.5"}} className='text-muted'>
                <li>
                  Call & Trade and RMS auto-squareoff:Additional charges og ₹50 + GST per order. 
                </li>
                <li>Digital Contracts note will be send via e-mail.</li>
                <li>Physical copies of contract notes, if required charges ₹20 per contact note. Courier charges apply</li>
                <li>
                  For NRI account (non-PIS),0.5% or ₹100 per executed order for equity(whichever is lower).
                </li>
                <li>
                For NRI account (PIS),0.5% or ₹200 per executed order for equity(whichever is lower).
                </li>
                <li>
                  If the account is in debit balance,any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                </li>
            </ul>
          </div>
          <div className="col-md-4">
            <a href="">
              <h3 className='fs-5'>List of Charges</h3>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Brokerage