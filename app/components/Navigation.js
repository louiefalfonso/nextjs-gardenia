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
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li className="dropdown">
                            <a href="#">
                            Service <i className="fa fa-angle-down" aria-hidden="true" />
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <a href="service.html">All Services</a>
                            </li>
                            <li>
                                <a href="service-one.html">Service-One</a>
                            </li>
                            <li>
                                <a href="service-two.html">Service-Two</a>
                            </li>
                            <li>
                                <a href="service-three.html">Service-Three</a>
                            </li>
                            <li>
                                <a href="service-four.html">Service-Four</a>
                            </li>
                            <li>
                                <a href="service-five.html">Service-Five</a>
                            </li>
                            <li>
                                <a href="service-six.html">Service-Six</a>
                            </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                            Project <i className="fa fa-angle-down" aria-hidden="true" />
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <a href="gallery.html">Project</a>
                            </li>
                            <li>
                                <a href="gallery-two.html">Project-Two</a>
                            </li>
                            <li>
                                <a href="gallery-three.html">Project-Three</a>
                            </li>
                            <li>
                                <a href="gallery-four.html">Project-Four</a>
                            </li>
                            <li>
                                <a href="gallery-five.html">Project-Five</a>
                            </li>
                            <li>
                                <a href="gallery-six.html">Project-Six</a>
                            </li>
                            <li>
                                <a href="gallery-seven.html">Project-Seven</a>
                            </li>
                            <li>
                                <a href="gallery-eight.html">Project-Eight</a>
                            </li>
                            </ul>
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
                        <ul className="nav navbar-nav nav-two pull-right">
                        <li>
                            <div className="search-view">
                            <span className="open-bar">
                                <i className="fa fa-search" aria-hidden="true" />
                            </span>
                            <div id="search-bar">
                                <span className="close-bar pull-right">
                                <i className="fa fa-times" aria-hidden="true" />
                                </span>
                                <form className="form-bar">
                                <div className="form-group">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="search"
                                    />
                                </div>
                                </form>
                            </div>{" "}
                            {/* search-bar */}
                            </div>{" "}
                            {/* search-view */}
                        </li>
                        <li>
                            <div className="cart cart-wrapper inline-block">
                            <span className="cart-icon">
                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                            </span>
                            <span className="text">2</span>
                            <div className="cart-item">
                                <ul>
                                <li>
                                    <img src="/images/shop/s2.jpg" alt="" />
                                    <div className="content inline-block">
                                    <h5>Name of the product</h5>
                                    <span className="rate">$66</span>
                                    <span className="option">
                                        <a href="#">
                                        <i className="fa fa-trash" aria-hidden="true" />
                                        </a>
                                    </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/shop/s2.jpg" alt="" />
                                    <div className="content inline-block">
                                    <h5>Name of the product</h5>
                                    <span className="rate">$66</span>
                                    <span className="option">
                                        <a href="#">
                                        <i className="fa fa-trash" aria-hidden="true" />
                                        </a>
                                    </span>
                                    </div>
                                </li>
                                </ul>
                                <div className="amount">
                                Total Amount <span className="pull-right">$99</span>
                                </div>
                                <button className="btn btn-primary">Proceed to checkout</button>
                            </div>
                            </div>
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
