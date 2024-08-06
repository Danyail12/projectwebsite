import React from 'react'
import './About.css'
import Faq from '../Faq/Faq'

const About = () => {
    return (
        <>

            <div className='p-5' style={{ backgroundColor: "#0A2540", backgroundSize: "cover", color: "white", backgroundImage: "url(./2.png)" }}>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="p-5 mt-5 justify-content-center text-center">
                                <h1>ABOUT US</h1>
                                <h3>Home/About</h3>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div >
                <div />
                <div />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="py-5 mt-5">
                            <img src="Group 11.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-5 mt-5">
                            <h3>About Us</h3>
                            <h1>We execute our ideas from the start to finish</h1>
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
                            <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                            <div className='justify-content-space-between align-items-space-between d-flex flex-row'>

                                <p className='text-primary fw-bold fs-4 me-2'>20 <span className='text-black'>
                                    years of experience
                                </span>
                                </p>
                                <p className='text-primary fw-bold fs-4 me-2'>200 <span className='text-black' >Happy client</span>
                                </p>
                                <p className='text-primary fw-bold fs-4 me-2'> 20+<span className='text-black' >TEAM MEMBERS</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           

                    <div className="container">
    <div className="row">
        <div className="col">
            <p className='text-primary'>
                ACHIEVEMENTS 
                <div>
                    <hr />
                </div>
            </p>
            <h2>SOME NUMBER OF OUR ACHIEVEMENTS</h2>
            <p>Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque sed imquam nunullam quis ante. Etiam sit amet orci.</p>
            <button className="btn btn-primary mt-5">Get Started</button>
        </div>

        <div className="col-md-2 col-sm-3">
            <div className="circle-container11 position-relative" style={{ backgroundImage: "url(Rectangle 3441.png)" }}>
                <img src="achievement-projecticon.png" alt="" className="img-fluid-icon" />
                <p>250<span> Satisfied Client</span></p>
            </div>
        </div>
        <div className="col-md-2 col-sm-3">
            <div className="circle-container1 position-relative" style={{ backgroundImage: "url(Rectangle 3441.png)" }}>
                <img src="achievement-clienticon.png" alt="" className="img-fluid-icon" />
                <p>180<span> Awards Win</span></p>
            </div>
        </div>
        <div className="col-md-2 col-sm-3">
            <div className="circle-container2 position-relative" style={{ backgroundImage: "url(Rectangle 3441.png)" }}>
                <img src="achievement-teamicon.png" alt="" className="img-fluid-icon" />
                <p>20+<span> Team Members</span></p>
            </div>
        </div>
        <div className="col-md-2 col-sm-3">
            <div className="circle-container3 position-relative" style={{ backgroundImage: "url(Rectangle 3441.png)" }}>
                <img src="achievement-awardicon.png" alt="" className="img-fluid-icon" />
                <p>180<span> Awards Win</span></p>
            </div>
        </div>
    </div>
</div>
            

                   <div className='p-5'>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <img src="company.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <Faq />
        </>


    )
}

export default About