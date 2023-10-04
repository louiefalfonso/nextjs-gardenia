/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Navigation() {
  return (
    <>
        <nav className="navbar navbar-inverse nav-One hidden-sm hidden-xs">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="image" />
                        </a>
                    </div>
                    <ul className="nav navbar-nav nav-one">
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
            </div>
        </nav>
        <div className="navbar-header inline-block visible-sm visible-xs">
            <a className="navbar-brand" href="index.html">
            <img src="images/logo-m.png" alt="image" />
            </a>
        </div>
    </>
  )
}


