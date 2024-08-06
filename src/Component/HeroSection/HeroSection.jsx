import React from 'react'
import './HeroSection.css'

function HeroSection() {
  return (
    <>
<div className='p-5' style={{backgroundImage: "url(./2.png)", backgroundColor: "#0A2540", backgroundSize: "cover",color: "white"}}>

    <div class="container" >
  <div class="row">
    <div class="col py-5 mt-5 mx-auto ">
      

      <h1>Creating a better IT solutions</h1>
      <p>Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
      <button class="btn btn-primary ">Get Started</button>
     
      
    </div>
    <div class="col">
    <div class= " py-5 mt-5">

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