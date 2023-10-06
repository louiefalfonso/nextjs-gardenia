/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function BlogSection() {
  return (
    <>
    <section className="blog-section section-padding">
        <div className="container">
            <div className="section-title text-center">
            <h2>Recent Blogs</h2>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="blog-wrapper wow fadeInUp">
                        <img src="images/blog/b1.jpg" alt="" />
                        <div className="content-wrapper">
                            <h3>
                            <a href="#">Organics to hydroponics</a>
                            </h3>
                            <ul className="post">
                            <li>
                                <i className="fa fa-user" aria-hidden="true" /> Arthur Curry
                            </li>
                            <li>
                                <i className="fa fa-calendar" aria-hidden="true" /> 22nd July{" "}
                            </li>
                            </ul>{" "}
                            {/* post */}
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do
                            eiusmod tempor incididun ut labore et dolore.
                            </p>
                            <a href="#" className="link">
                            Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="blog-wrapper wow fadeInUp" data-wow-delay="0.3s">
                        <img src="images/blog/b2.jpg" alt="" />
                        <div className="content-wrapper">
                            <h3>
                            <a href="#">Gardening and growing</a>
                            </h3>
                            <ul className="post">
                            <li>
                                <i className="fa fa-user" aria-hidden="true" /> Arthur Curry
                            </li>
                            <li>
                                <i className="fa fa-calendar" aria-hidden="true" /> 22nd July{" "}
                            </li>
                            </ul>{" "}
                            {/* post */}
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do
                            eiusmod tempor incididun ut labore et dolore.
                            </p>
                            <a href="#" className="link">
                            Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                    <div className="blog-wrapper last-wrapper wow fadeInUp"
                    data-wow-delay="0.5s">
                    <img src="images/blog/b3.jpg" alt="" />
                        <div className="content-wrapper">
                            <h3>
                            <a href="#">Support your community</a>
                            </h3>
                            <ul className="post">
                            <li>
                                <i className="fa fa-user" aria-hidden="true" /> Arthur Curry
                            </li>
                            <li>
                                <i className="fa fa-calendar" aria-hidden="true" /> 22nd July{" "}
                            </li>
                            </ul>{" "}
                            {/* post */}
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do
                            eiusmod tempor incididun ut labore et dolore.
                            </p>
                            <a href="#" className="link">
                            Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
