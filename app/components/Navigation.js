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
                        <li className="dropdown">
                            <a href="#">
                            Service <i className="fa fa-angle-down" aria-hidden="true" />
                            </a>
                            
                        </li>
                        <li className="dropdown">
                            <a href="#">
                            Project <i className="fa fa-angle-down" aria-hidden="true" />
                            </a>
                            
                        </li>
                        <li className="dropdown">
                            <a href="#">
                            Pages <i className="fa fa-angle-down" aria-hidden="true" />
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <a href="#">
                                Event <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="event.html">Event One</a>
                                </li>
                                <li>
                                    <a href="event-two.html">Event Two</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                Icon <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="icon.html">Icon One</a>
                                </li>
                                <li>
                                    <a href="icon-two.html">Icon Two</a>
                                </li>
                                <li>
                                    <a href="icon-three.html">Icon Three</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                Pricing <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="pricing.html">Pricing One</a>
                                </li>
                                <li>
                                    <a href="pricing-two.html">Pricing Two</a>
                                </li>
                                <li>
                                    <a href="pricing-three.html">Pricing Three</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                Team <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="team.html">Team One</a>
                                </li>
                                <li>
                                    <a href="team-two.html">Team Two</a>
                                </li>
                                <li>
                                    <a href="team-three.html">Team Three</a>
                                </li>
                                <li>
                                    <a href="team-four.html">Team Four</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                Faq <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="faq.html">Faq One</a>
                                </li>
                                <li>
                                    <a href="faq-six.html">Faq Two</a>
                                </li>
                                <li>
                                    <a href="faq-nine.html">Faq Three</a>
                                </li>
                                <li>
                                    <a href="faq-ten.html">Faq Four</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="calender.html">Calender</a>
                            </li>
                            <li>
                                <a href="#">
                                Shop <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="shop.html">Shop</a>
                                </li>
                                <li>
                                    <a href="cart.html">Cart</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                Comming Soon{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="comming-soon.html">Style One</a>
                                </li>
                                <li>
                                    <a href="comming-soon-two.html">Style Two</a>
                                </li>
                                <li>
                                    <a href="comming-soon-three.html">Style Three</a>
                                </li>
                                <li>
                                    <a href="comming-soon-four.html">Style Four</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                404 Page{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                </a>
                                <ul className="single-dropdown">
                                <li>
                                    <a href="404.html">Style One</a>
                                </li>
                                <li>
                                    <a href="404-two.html">Style Two</a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                            Contact <i className="fa fa-angle-down" aria-hidden="true" />
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                            <li>
                                <a href="contact-two.html">Contact-Two</a>
                            </li>
                            <li>
                                <a href="contact-three.html">Contact-Three</a>
                            </li>
                            </ul>
                        </li>
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
