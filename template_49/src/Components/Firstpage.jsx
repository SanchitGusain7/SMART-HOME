import React from "react";

const First =() =>{
    return(
<>
  <header>
    <div className="navbar1">
      <p>CONTACT &amp; SUPPORT</p>
      <p>|</p>
      <p className="b">+180012345678 </p>
      <p>|</p>
      <p>CONTACT US</p>
      <p> |</p>
      <p>HELP </p>
    </div>
    <div className="navbar2">
      <div className="logo">
        <img src="images/logo.jpg" alt="" className="logo-img" />
      </div>
      <div className="nav-search">
        <select className="search-select">
          <option>All Categories</option>
        </select>
        <input
          placeholder="Search entire store here.."
          className="search-input"
        />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <div className="allicons">
        <div className="icon">
          <i className="fa-solid fa-user" />
          <p>My Account</p>
        </div>
        <div className="divider">|</div>
        <div className="icon">
          <i className="fa-solid fa-location-dot" />
          <p>Track order</p>
        </div>
        <div className="divider">|</div>
        <div className="icon">
          <i className="fa-solid fa-lock" />
          <p>Login</p>
        </div>
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"> 0</i>
          <i className="fa-solid fa-angle-down arrow" />
        </div>
      </div>
    </div>
    <div className="navbar3">
      <div className="shop-logo">
        <span>
          SHOP EVERYTHING <i className="fa-solid fa-angle-down arrow" />
        </span>
      </div>
      <ul className="fashion">
        <a href="#Fas"><p>FASHION STORE</p></a>
        <a href="#Bo"><p>BOOKS &amp; MEDIA</p></a>
        <a href="#BOO"><p>CLEARANCE SALE</p></a>
        <a href="#BO"><p>MOBILE PHONES</p></a>
      </ul>
      <div className="hamburger">
        <i className="fa-solid fa-bars ham" />
      </div>
    </div>
    <div className="navbar4">
      <div className="nav-1">
        <div className="three">
          <img src="images/aeroplane_logo.jpeg" alt="" />
          <div className="three-div">
            <h3>FREE SHIPPING</h3>
            <p>In Order Min $200</p>
          </div>
        </div>
        <div className="three">
          <img src="images/clock_logo.jpeg" alt="" />
          <div className="three-div">
            <h3>30-DAYS RETURNS</h3>
            <p>Money Back Gurantee</p>
          </div>
        </div>
        <div className="three">
          <img src="images/circle_logo.jpeg" alt="" />
          <div className="three-div">
            <h3>x24/7 SUPPORT</h3>
            <p>Lifetime Support</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  
  
  
  
  
 
</>

    )
}

export default First