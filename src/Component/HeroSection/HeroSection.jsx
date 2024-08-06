import React from 'react'
import './HeroSection.css'

function HeroSection() {
  return (
    <>
<div className='p-5' style={{backgroundImage: "url(./2.png)", backgroundColor: "#0A2540", backgroundSize: "cover",color: "white"}}>

    <div class="container mt-5" >
  <div class="row">
    <div class="col mt-5 ">
      

      <h1>Creating a better IT solutions</h1>
      <p>Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
      <button class="btn btn-primary text-dark bg-white ">Get Started</button>
     
      
    </div>
    <div class="col">
    <div class= " ">

     <img src="Group.png" alt="" class="img-fluid"  />

    </div>
    </div>
  </div>
</div>
 
</div>
    </>
  )
}

export default HeroSection