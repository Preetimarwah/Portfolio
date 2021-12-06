/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link } from 'react-scroll'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"rgb(33,171,205)", color:"black"}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" 
    //   style="--bs-scroll-height: 100px;"
      >

        {/* <li class="nav-item">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={1000}> 
          <a class="nav-link" style={{color:'black'}} aria-current="page" >Home</a>
          </Link>
        </li> */}
        <li class="nav-item">
        <Link activeClass="active" to="Project" spy={true} smooth={true} offset={50} duration={500} delay={100}>
          <a class="nav-link" style={{color:'black'}} href="/Products">Projects</a>
          </Link>
        </li>
      
        <li class="nav-item">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={100}>
          <a class="nav-link " style={{color:'black'}} href="/Products">About me</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link activeClass="active" to="Contactme" spy={true} smooth={true} offset={50} duration={500} delay={100}>
          <a class="nav-link " style={{color:'black'}} href="/Products">Contact me</a>
          </Link>
        </li>
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button class="btn btn-primary"   type="submit"><a style={{color:'white', textDecoration:"none"}} href="https://docs.google.com/document/d/17bMa7BhuvJA_WYFI65PID0QHVB-X7nsv/edit?usp=sharing&ouid=109958338127665075807&rtpof=true&sd=true">View Resume</a></button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
