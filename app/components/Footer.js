/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="footer-section">
            <div className="footer-container">
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="footer-wrapper first-wrapper">
                        <h3>Stay Connected</h3>
                        <p>
                        Join over 30,000+ people who recieve our <br /> monthy newspaper
                        of gardening tips
                        </p>
                        <form className="footerForm">
                        <input
                            className="footerSearchBar"
                            id="email2"
                            name="email"
                            type="email"
                            required=""
                            placeholder="Email address"
                        />
                        <button type="submit" className="subscribeBtn btn-primary">
                            Subscribe
                        </button>
                        </form>
                        <ul className="social-icon">
                        <li>
                            <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-rss" aria-hidden="true" />
                            </a>
                        </li>
                        </ul>{" "}
                        {/* social-icon */}
                    </div>{" "}
                    {/* footer-wrapper */}
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="footer-wrapper">
                        <h3>About</h3>
                        <p>
                        All of Fantastic Gardener's staff are friendly,offering help with
                        the things you don't want to do or just don't have the time for,
                        and doing it in a way you actually enjoy the thought of being lazy
                        and paying somebody else.
                        </p>
                        <a href="#" className="link">
                        Join Now
                        </a>
                    </div>{" "}
                    {/* footer-wrapper */}
                    </div>
                    <div className="col-md-4 col-md-offset-0 col-sm-5 col-sm-offset-1">
                    <div className="footer-wrapper">
                        <h3>Navigation</h3>
                        <ul className="wrapper-option">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        </ul>{" "}
                        {/* wrapper-option */}
                        <ul className="wrapper-option">
                        <li>
                            <a href="#">Recent News</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Gallery two</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        </ul>{" "}
                        {/* wrapper-option */}
                    </div>{" "}
                    {/* footer-wrapper */}
                    </div>
                </div>
                </div>
            </div>
            <div className="second-footer">
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="caption">
                        <img src="images/footer-logo.png" alt="" />
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="contact-wrapper">
                        <ul>
                        <li>
                            <i className="fa fa-university" aria-hidden="true" />
                            555 Main St, Salt Lake City, UT 84101
                        </li>
                        <li>
                            <i className="fa fa-phone" aria-hidden="true" />
                            +1-(547)-257
                        </li>
                        </ul>
                    </div>{" "}
                    {/* contact-wrapper */}
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="contact-wrapper last-wrapper">
                        <ul>
                        <li>
                            <i className="fa fa-question-circle" aria-hidden="true" />
                            Terms &amp; Conditions
                        </li>
                        <li>
                            <i className="fa fa-unlock-alt" aria-hidden="true" />
                            Privacy Policy
                        </li>
                        </ul>
                    </div>{" "}
                    {/* contact-wrapper */}
                    </div>
                </div>
                <hr />
                </div>
                <div className="copy-right text-center">
                <p>2023 © All Rights Reserved by Gardenia Landscaping & Gardening Services</p>
                </div>
            </div>
        </footer>
    </>
  )
}
