/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import mainlogo from 'public/images/logo.png'
import clock from 'public/images/clock.png'
import phone from 'public/images/phone.png'

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
                                <li><i className="fa fa-envelope" aria-hidden="true" />{" "}support@gardenia.com</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="header-right-bar text-right">
                            <ul className="social-icon">
                                <li>
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
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
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-bar hidden-sm hidden-xs">
                <div className="container">
                    <div className="navbar-header">
                    <Link className="navbar-brand" href="/">
                        <Image src={mainlogo} alt="Logo Image" />
                    </Link>
                    </div>
                    <div className="schedule pull-right">
                    <ul>
                        <li>
                            <Image src={clock} alt="" />  
                            <div className="content">
                                <span className="date">Mon - Fri</span>
                                <h5>09 am - 08 pm</h5>
                            </div>
                        </li>
                        <li>
                            <Image src={phone} alt="" />  
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
