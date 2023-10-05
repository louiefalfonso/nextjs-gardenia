/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function TeamSection() {
  return (
    <>
        <section className="team-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                <h2>
                    Our <span className="text-color">Team</span>
                </h2>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="team-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                            <div className="left-bar pull-left">
                                <span className="caption">
                                <img src="images/team/t1.jpg" alt="" />
                                </span>
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
                                </ul>{" "}
                                {/* social-icon */}
                            </div>
                            <div className="right-bar">
                                <h5>Chris Brown</h5>
                                <span className="position">Founder &amp; CEO</span>
                                <p>
                                Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
                                eiusmod tempor incididunt..
                                </p>
                                <a href="#" className="link">
                                Read Full Bio
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div
                        className="team-wrapper last-wrapper wow fadeInRight"
                        data-wow-delay="0.3s"
                        >
                        <div className="left-bar pull-left">
                            <span className="caption">
                            <img src="images/team/t2.jpg" alt="" />
                            </span>
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
                            </ul>{" "}
                            {/* social-icon */}
                        </div>{" "}
                        {/* left-bar */}
                        <div className="right-bar">
                            <h5>J C Cornwell</h5>
                            <span className="position">Founder &amp; CEO</span>
                            <p>
                            Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
                            eiusmod tempor incididunt..
                            </p>
                            <a href="#" className="link">
                            Read Full Bio
                            </a>
                        </div>
                        </div>
                        {/*  team-wrapper */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
