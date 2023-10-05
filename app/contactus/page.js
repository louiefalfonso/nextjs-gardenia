import React from 'react'
import Link from 'next/link'
import SubscribeSection from '../components/SubscribeSection'

export default function page() {
  return (
    <div className="contactPage">
        <section className="header-title section-padding">
            <div className="container">
                <h2 className="title">Contact Us</h2>
                <span className="sub-title">
                <Link href="/">Home</Link> / <span>Contact Us</span>
                </span>
            </div>
        </section>
        <section className="contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-wrapper">
                        <ul>
                            <li className="wow fadeInDown">
                            <i className="fa fa-phone" aria-hidden="true" />
                            <div className="contact-wrapper">
                                <h5>Hotline:</h5>
                                <span className="sub">+1 478 (2492) 54 </span>
                            </div>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay="0.2s">
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <div className="contact-wrapper">
                                <h5>Email:</h5>
                                <span className="sub">support@gardenia.com </span>
                            </div>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay="0.4s">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <div className="contact-wrapper">
                                <h5>Working Hours:</h5>
                                <span className="sub">9am-8pm (Mon - Fri)</span>
                            </div>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay="0.6s">
                            <i className="fa fa-location-arrow" aria-hidden="true" />
                            <div className="contact-wrapper">
                                <h5>Office:</h5>
                                <span className="sub">1802 Stout Rd, Menomonie, WI 54751</span>
                            </div>
                            </li>
                        </ul>
                        </div>{" "}
                        {/* contact-wrapper */}
                    </div>
                    <div className="col-md-7 ">
                        <form className="contact-form">
                        <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                            <span className="text">First Name</span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                required=""
                                placeholder="First name.."
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <span className="text">Last Name</span>
                            <input
                                id="last-name"
                                name="name"
                                type="text"
                                className="form-control"
                                required=""
                                placeholder="Last name.."
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <span className="text">Email Address</span>
                            <input
                                className="domainSearchBar form-control"
                                id="email2"
                                name="email"
                                type="email"
                                required=""
                                placeholder="Email"
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <span className="text">Phone No.</span>
                            <input
                                id="phone"
                                className="form-control"
                                required=""
                                placeholder="Phone.."
                            />
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <span className="text">Write</span>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control form-message"
                            rows={6}
                            required=""
                            placeholder="Tell us why you want it.. "
                            defaultValue={""}
                        />
                        </div>
                        <div className="form-group text-right wow fadeInUp">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <SubscribeSection/>
    </div>
  )
}
