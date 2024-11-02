import React from 'react'

function Hero() {
  return (
  <div className="container p-5 mb-5">
    <div className="row text-center ">
      <img src="media/images/homeHero.png" alt="hero-img" />
      <h1 className='mt-5'>Invest in everything</h1>
      <p className='mb-5 mt-1 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <button className='btn p-2 fs- mb-2' style={{width:"200px",margin:"0 auto",backgroundColor:"#387ed1",color:"#fff",fontWeight:"600"}}>Sign up for free</button>
    </div>
  </div>
  )
}

export default Hero