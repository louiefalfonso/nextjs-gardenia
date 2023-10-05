/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import SubscribeSection from '../components/SubscribeSection'

export default function page() {
  return (
    <div className="teamPage">
        <section className="header-title section-padding">
            <div className="container">
                <h2 className="title">Teams</h2>
                <span className="sub-title">
                <Link href="/">Home</Link> / <span>Teams</span>
                </span>
            </div>
        </section>
        <section className="team-section-three section-padding">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="team-part">
                    <div className="row first-part">
                        <div className="col-sm-4">
                        <div className="section-wrapper">
                            <span className="caption">
                            <img src="images/team/t9.jpg" alt="image" />
                            </span>
                            <div className="wrapper-content">
                            <h3>Hasib Sharif</h3>
                            <span className="position">Founder &amp; CEO</span>
                            <p>
                                These cases are perfectly simple and easy to distinguish. In
                                a free hour, when our power of choice is untrammelled
                            </p>
                            </div>
                        </div>{" "}
                        {/* section-wrapper */}
                        </div>
                        <div className="col-sm-4">
                        <div className="section-wrapper">
                            <span className="caption">
                            <img src="images/team/t10.jpg" alt="image" />
                            </span>
                            <div className="wrapper-content">
                            <h3>Hasib Sharif</h3>
                            <span className="position">Founder &amp; CEO</span>
                            <p>
                                These cases are perfectly simple and easy to distinguish. In
                                a free hour, when our power of choice is untrammelled
                            </p>
                            </div>
                        </div>{" "}
                        {/* section-wrapper */}
                        </div>
                        <div className="col-sm-4">
                        <div className="section-wrapper">
                            <span className="caption">
                            <img src="images/team/t11.jpg" alt="image" />
                            </span>
                            <div className="wrapper-content">
                            <h3>Hasib Sharif</h3>
                            <span className="position">Founder &amp; CEO</span>
                            <p>
                                These cases are perfectly simple and easy to distinguish. In
                                a free hour, when our power of choice is untrammelled
                            </p>
                            </div>
                        </div>{" "}
                        {/* section-wrapper */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="section-wrapper">
                            <span className="caption">
                            <img src="images/team/t12.jpg" alt="image" />
                            </span>
                            <div className="wrapper-content">
                            <h3>Hasib Sharif</h3>
                            <span className="position">Founder &amp; CEO</span>
                            <p>
                                These cases are perfectly simple and easy to distinguish. In
                                a free hour, when our power of choice is untrammelled
                            </p>
                            </div>
                        </div>{" "}
                        {/* section-wrapper */}
                        </div>
                        <div className="col-sm-4">
                        <div className="section-wrapper">
                            <span className="caption">
                            <img src="images/team/t13.jpg" alt="image" />
                            </span>
                            <div className="wrapper-content">
                            <h3>Hasib Sharif</h3>
                            <span className="position">Founder &amp; CEO</span>
                            <p>
                                These cases are perfectly simple and easy to distinguish. In
                                a free hour, when our power of choice is untrammelled
                            </p>
                            </div>
                        </div>{" "}
                        {/* section-wrapper */}
                        </div>
                        <div className="col-sm-4">
                        <div className="section-wrapper">
                            <span className="caption">
                            <img src="images/team/t14.jpg" alt="image" />
                            </span>
                            <div className="wrapper-content">
                            <h3>Hasib Sharif</h3>
                            <span className="position">Founder &amp; CEO</span>
                            <p>
                                These cases are perfectly simple and easy to distinguish. In
                                a free hour, when our power of choice is untrammelled
                            </p>
                            </div>
                        </div>{" "}
                        {/* section-wrapper */}
                        </div>
                    </div>
                    </div>{" "}
                    {/* team-part */}
                </div>{" "}
                {/* col-md-12 */}
                </div>
            </div>
        </section>
        <SubscribeSection/>
    </div>
  )
}
