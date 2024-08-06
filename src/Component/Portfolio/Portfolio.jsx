// Portfolio.jsx

import React from 'react';
import './Portfolio.css';
import Faq from '../Faq/Faq';

const images = [
    'project1.png',
    'project2.png',
    'project3.png',
    'project4.png',
    'project5.png',
    'project3.png'
];

const Portfolio = () => {
    return (
        <>
            <div className='p-5' style={{ backgroundColor: "#0A2540", backgroundSize: "cover", color: "white", backgroundImage: "url(./2.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="p-5 mt-5 justify-content-center text-center">
                                <h1>Portfolio</h1>
                                <h3>Home/Portfolio</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div />
                <div />
            </div>
            <div className="p-5" style={{ backgroundImage: "url(./bg.png)", color: "black" }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='justify-content-center text-center mt-5 align-items-center'>
                                <p className='text-primary'>RECENT PROJECTS</p>
                                <h1>OUR LATEST CASE STUDIES</h1>
                                <h4>Dursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec odio aea the dumm recreo that dolocons.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {images.map((image, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="img-container">
                                <div className="img-fluid" style={{ backgroundImage: `url(${image})` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container p-5 mt-5">
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

       <Faq/>
        </>
    );
};

export default Portfolio;
