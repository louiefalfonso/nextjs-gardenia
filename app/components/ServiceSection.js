/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ServiceSection() {
  return (
    <>
        <section className="service-section service-section-three section-padding">
            <div className="container">
                <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="service-wrapper">
                    <span className="caption">
                        <img src="images/service/s1.jpg" alt="" />
                    </span>
                    <div className="content-wrapper">
                        <span className="icon">
                        <img src="images/service/i1.png" alt="" />
                        </span>
                        <h3>
                        <a href="#">Vegetable Gardening</a>
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do
                        eiusmod tempor incididun ut labore et dolore.
                        </p>
                        <a href="#" className="link pull-right">
                        Read More
                        </a>
                    </div>{" "}
                    {/* content-wrapper */}
                    </div>{" "}
                    {/* service-wrapper */}
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="service-wrapper">
                    <span className="caption">
                        <img src="images/service/s2.jpg" alt="" />
                    </span>
                    <div className="content-wrapper">
                        <span className="icon">
                        <img src="images/service/i2.png" alt="" />
                        </span>
                        <h3>
                        <a href="#">Tree Surgery</a>
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do
                        eiusmod tempor incididun ut labore et dolore.
                        </p>
                        <a href="#" className="link pull-right">
                        Read More
                        </a>
                    </div>{" "}
                    {/* content-wrapper */}
                    </div>{" "}
                    {/* service-wrapper */}
                </div>
                <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                    <div className="service-wrapper">
                    <span className="caption">
                        <img src="images/service/s3.jpg" alt="" />
                    </span>
                    <div className="content-wrapper">
                        <span className="icon">
                        <img src="images/service/i3.png" alt="" />
                        </span>
                        <h3>
                        <a href="#">Garden Clearence</a>
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do
                        eiusmod tempor incididun ut labore et dolore.
                        </p>
                        <a href="#" className="link pull-right">
                        Read More
                        </a>
                    </div>{" "}
                    {/* content-wrapper */}
                    </div>{" "}
                    {/* service-wrapper */}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}
