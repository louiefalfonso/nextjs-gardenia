/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function TopHeader() {
  return (
    <>
        <div className="upper">
            <div className="to-top hidden-sm hidden-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="header-left-bar">
                            <ul className="contact-wrapper">
                                <li>
                                <i className="fa fa-envelope" aria-hidden="true" />{" "}
                                support@gardenia.com
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="header-right-bar text-right">
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
                                    <i className="fa fa-google-plus" aria-hidden="true" />
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
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-bar hidden-sm hidden-xs">
                <div className="container">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <img src="images/logo.png" alt="image" />
                    </a>
                    </div>
                    <div className="schedule pull-right">
                    <ul>
                        <li>
                        <img src="images/clock.png" alt="" />
                        <div className="content">
                            <span className="date">Mon - Fri</span>
                            <h5>09 am - 08 pm</h5>
                        </div>
                        </li>
                        <li>
                        <img src="images/phone.png" alt="" />
                        <div className="content">
                            <span className="date">Call Us</span>
                            <h5>+1-(547)-257</h5>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
