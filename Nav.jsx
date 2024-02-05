import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import logo from "./Free_Sample_By_Wix (2).jpg"

import image from "./image.jpg"
const Nav = () => {
  return (
    <>
    <nav className='main'>
        <aside className='left'>
          <h3><IoIosCall/>+91 00000-00000</h3>
          <h3><MdEmail/>info@xxxx.com</h3>
          <h3><FaLocationDot/>Bellary,Karnataka</h3>
        </aside>
        <aside className='right'>
          <h2><a href="https://www.facebook.com/"><FaFacebook/></a></h2>
          <h2><a href="https://www.linkedin.com/"><ImLinkedin/></a></h2>
          <h2><a href="https://www.instagram.com/"><FaSquareInstagram/></a></h2>
          <h2><a href="https://www.youtube.com/"><TfiYoutube/></a></h2>
        </aside>
    </nav>
  
    <nav className='nav2'> 
    <aside style={{width:"50%"}}><h1><img src={logo} alt="" style={{height:"100px",width:"100px",backgroundColor:"red",margin:"auto"}}/></h1></aside>
      <h3>Home ➕</h3>
      <h3>Courses ➕</h3>
      <h3>Resourses ➕</h3>
      <h3>Careers ➕</h3>
      <h3>Contact</h3>
      <button style={{backgroundColor:' #FFB300' ,border:"2px solid lightblue",borderRadius:'20px'}}>COURSES RECOMMENDATION</button>
    </nav>
      <section>
     
       <aside className='left_bottom'>
            <h3 style={{fontFamily:"-moz-initial",color:"orange",fontWeight:"bolder"}}>EXPERT EDUCATION PARTNER</h3>
            <h1 style={{fontSize:"30px",fontFamily:"cursive"}}>Uplift Your career</h1>
            <pre><h5 style={{fontSize:"15px"}}>We drive your career growth through best 
            online MBA courses
            from top universities</h5></pre>
             <input type="text" placeholder='mention the courses your looking for' style={{height:"40px",width:"250px",border:"none",borderRadius:"5px"}}/ >
              <button style={{backgroundColor:"#FFB300",height:"40px",borderRadius:"3px",border:"2px solid lightblue"}}><CiSearch/>search courses</button>
       </aside>
    
       <img src={image} alt="" />
         
      </section>
    
    </>
  )
}

export default Nav