/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
        <nav className="navbar navbar-inverse nav-One hidden-sm hidden-xs">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <div className="navbar-header">
                        <Link className="navbar-brand" href="/">
                            <img src="images/logo.png" alt="Logo Image" />
                        </Link>
                    </div>
                    <ul className="nav navbar-nav nav-one">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/projects">Projects</Link></li> 
                        <li><Link href="/pricing">Pricings</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="navbar-header inline-block visible-sm visible-xs">
            <Link className="navbar-brand" href="/">
                <img src="images/logo-m.png" alt="Mobile Logo Image" />
            </Link>
        </div>
    </>
  )
}


