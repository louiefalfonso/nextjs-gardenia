import React from 'react'

export default function OffcanvasMenu() {
  return (
    <>
        <span className="menu-toggle navbar visible-xs visible-sm"><i className="fa fa-bars" aria-hidden="true"></i></span>
        <div id="offcanvas-menu" className="visible-xs visible-sm">
            <span className="close-menu">
                <i className="fa fa-times" aria-hidden="true" />
            </span>
            <ul className="menu-wrapper">
                <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li> 
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
             </ul>   
        </div>
    </>
  )
}
