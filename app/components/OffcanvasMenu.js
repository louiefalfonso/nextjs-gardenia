import React from 'react'
import Link from 'next/link'

export default function OffcanvasMenu() {
  return (
    <>
        <span className="menu-toggle navbar visible-xs visible-sm"><i className="fa fa-bars" aria-hidden="true"></i></span>
        <div id="offcanvas-menu" className="visible-xs visible-sm">
            <span className="close-menu">
                <i className="fa fa-times" aria-hidden="true" />
            </span>
            <ul className="menu-wrapper">
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
    </>
  )
}
