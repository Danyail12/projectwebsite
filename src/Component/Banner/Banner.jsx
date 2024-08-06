import React from 'react'

const Banner = () => {
  return (
    <div className='p-5' style={{backgroundImage: "url(Banner.png)", backgroundSize: "cover", color: "white"}}>  

    <div className="container">
        <div className="row">

            <div className="col justify-content-center text-center mt-5 py-5">
                <p className='text-white'>We are here to answer your questions 24/7</p>
                <h1 className='text-white'>Need for it solution services</h1>
                <div>
                    <button className="btn btn-primary bg-white text-dark mt-3">Get Quote</button>
                </div>

            </div>
        </div>



    </div>
    </div>
  )
}

export default Banner