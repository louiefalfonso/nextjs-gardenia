/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ProjectSection() {
  return (
    <>
        <section className="project-section section-padding">
            <div className="container text-center">
                <div className="section-title text-center">
                <h2>
                    Recent <span className="text-color">Projects</span>
                </h2>
                </div>{" "}
                
                <div className="portfolio gallery-grid">
                <div className="row">
                    <ul className="portfolio-sorting gallery-button list-inline text-center">
                    <li>
                        <a href="#" data-group="all" className="filter-btn active">
                        All
                        </a>
                    </li>
                    <li>
                        <a className="filter-btn" href="#" data-group="people">
                        Landscaping
                        </a>
                    </li>
                    <li>
                        <a className="filter-btn" href="#" data-group="simpsons">
                        Gardening
                        </a>
                    </li>
                    <li>
                        <a className="filter-btn" href="#" data-group="futurama">
                        Weed Control
                        </a>
                    </li>
                    </ul>{" "}
                    {/*end portfolio sorting */}
                    <div id="lightBox" className="gallery-wrapper">
                    <ul className="portfolio-items courses list-unstyled" id="grid">
                        <li className="col-lg-4 col-sm-6" data-groups='["simpsons"]'>
                        <figure className="portfolio-item gallery-caption">
                            <img src="images/project/5.jpg" alt="" />
                            <div className="hover-view">
                            <a href="images/project/5.jpg">
                                <i className="fa fa-picture-o" />
                            </a>
                            <span className="border-one" />
                            <span className="border-two" />
                            <span className="border-three" />
                            <span className="border-four" />
                            </div>
                        </figure>
                        </li>
                        <li className="col-lg-4 col-sm-6" data-groups='["people"]'>
                        <figure className="portfolio-item gallery-caption">
                            <img src="images/project/2.jpg" alt="" />
                            <div className="hover-view">
                            <a href="images/project/2.jpg">
                                <i className="fa fa-picture-o" />
                            </a>
                            <span className="border-one" />
                            <span className="border-two" />
                            <span className="border-three" />
                            <span className="border-four" />
                            </div>
                        </figure>
                        </li>
                        <li className="col-lg-4 col-sm-6" data-groups='["futurama"]'>
                        <figure className="portfolio-item gallery-caption">
                            <img src="images/project/4.jpg" alt="" />
                            <div className="hover-view">
                            <a href="images/project/4.jpg">
                                <i className="fa fa-picture-o" />
                            </a>
                            <span className="border-one" />
                            <span className="border-two" />
                            <span className="border-three" />
                            <span className="border-four" />
                            </div>
                        </figure>
                        </li>
                        <li className="col-lg-4 col-sm-6" data-groups='["futurama"]'>
                        <figure className="portfolio-item gallery-caption">
                            <img src="images/project/3.jpg" alt="" />
                            <div className="hover-view">
                            <a href="images/project/3.jpg">
                                <i className="fa fa-picture-o" />
                            </a>
                            <span className="border-one" />
                            <span className="border-two" />
                            <span className="border-three" />
                            <span className="border-four" />
                            </div>
                        </figure>
                        </li>
                        <li className="col-lg-4 col-sm-6" data-groups='["simpsons"]'>
                        <figure className="portfolio-item gallery-caption">
                            <img src="images/project/1.jpg" alt="" />
                            <div className="hover-view">
                            <a href="images/project/1.jpg">
                                <i className="fa fa-picture-o" />
                            </a>
                            <span className="border-one" />
                            <span className="border-two" />
                            <span className="border-three" />
                            <span className="border-four" />
                            </div>
                        </figure>
                        </li>
                        <li className="col-lg-4 col-sm-6" data-groups='["people"]'>
                        <figure className="portfolio-item gallery-caption">
                            <img src="images/project/6.jpg" alt="" />
                            <div className="hover-view">
                            <a href="images/project/6.jpg">
                                <i className="fa fa-picture-o" />
                            </a>
                            <span className="border-one" />
                            <span className="border-two" />
                            <span className="border-three" />
                            <span className="border-four" />
                            </div>
                        </figure>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}
