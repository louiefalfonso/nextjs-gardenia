/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

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
                                <Link href="https://www.facebook.com/">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </Link>
                            </li>
                        </ul>
                    </div>
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
                    </div>
                    </div>
                    <div className="col-md-4 col-md-offset-0 col-sm-5 col-sm-offset-1">
                        <div className="footer-wrapper">
                            <h3>Navigation</h3>
                            <ul className="wrapper-option">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/projects">Projects</Link></li> 
                            </ul>
                            <ul className="wrapper-option">
                                <li><Link href="/pricing">Pricings</Link></li>
                                <li><Link href="/team">Team</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
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
                            +44 123-456-7890
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
