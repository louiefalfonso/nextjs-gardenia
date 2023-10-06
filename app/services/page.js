/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className="single-servicePage">
        <section className="header-title section-padding">
            <div className="container">
                <h2 className="title">Services</h2>
                <span className="sub-title">
                <Link href="/">Home</Link> / <span>Services</span>
                </span>
            </div>
        </section>
        <section className="single-service section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-5">
                        <div className="left-bar">
                        <div className="wrapper-menu">
                            <ul>
                            <li><a href="#">All Services</a></li>
                            <li><a href="#" className="active">Vegetable Gardening</a></li>
                            <li>
                                <a href="service-two.html">Lawn Watering</a>
                            </li>
                            <li>
                                <a href="service-three.html">Weed Control</a>
                            </li>
                            <li>
                                <a href="service-four.html">Garden Clearence</a>
                            </li>
                            <li>
                                <a href="service-five.html">Tree Surgery</a>
                            </li>
                            <li>
                                <a href="service-six.html">Hedge Trim</a>
                            </li>
                            </ul>
                        </div>
                        <div className="voucher">
                            <img src="images/voucher-icon.png" alt="" />
                            <h5>Lawn Watering</h5>
                            <p><a href="#">Click here to download theService Brochure </a></p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-7">
                        <div className="right-bar">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="caption">
                                <img src="images/s-service.jpg" alt="" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="middle-content">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ul>
                                <li>
                                    <i className="fa fa-caret-right" aria-hidden="true" /> Ut
                                    enim ad minim veniam quis nostrud
                                </li>
                                <li>
                                    <i className="fa fa-caret-right" aria-hidden="true" />{" "}
                                    Exercitation ullamco laboris nisi
                                </li>
                                <li>
                                    <i className="fa fa-caret-right" aria-hidden="true" /> Ut
                                    aliquip ex ea commodo consequat
                                </li>
                                <li>
                                    <i className="fa fa-caret-right" aria-hidden="true" /> Duis
                                    aute irure dolor in reprehenderit
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                            eos qui ratione.
                        </p>
                        <div className="priceing-section">
                            <div className="priceing-wrapper ">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                <a href="#tab-one" role="tab" data-toggle="tab">
                                    Pricing
                                </a>
                                </li>
                                <li role="presentation">
                                <a href="#tab-two" role="tab" data-toggle="tab">
                                    Reviews
                                </a>
                                </li>
                                <li role="presentation">
                                <a href="#tab-three" role="tab" data-toggle="tab">
                                    Contact
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content text-center">
                                <div
                                role="tabpanel"
                                className="tab-pane fade in active"
                                id="tab-one"
                                >
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="priceing-table">
                                        <h4>Basic</h4>
                                        <h5 className="amount">$55</h5>
                                        <p>
                                        Basic garden maintenance service includes the
                                        following procedures:
                                        </p>
                                        <ul className="option">
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Lawn mowing
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Weeding
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Hedge trimming
                                        </li>
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true" />
                                            Leaf clearance
                                        </li>
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true" />
                                            vy and removal
                                        </li>
                                        </ul>{" "}
                                        {/* option */}
                                        <a href="#" className="btn btn-primary">
                                        Select
                                        </a>
                                    </div>{" "}
                                    {/* priceing-table */}
                                    </div>
                                    <div className="col-md-6">
                                    <div className="priceing-table">
                                        <h4>Premium</h4>
                                        <h5 className="amount">$95</h5>
                                        <p>
                                        Basic garden maintenance service includes the
                                        following procedures:
                                        </p>
                                        <ul className="option">
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Lawn mowing
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Weeding
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Hedge trimming
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Leaf clearance
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            vy and removal
                                        </li>
                                        </ul>{" "}
                                        {/* option */}
                                        <a href="#" className="btn btn-primary">
                                        Select
                                        </a>
                                    </div>{" "}
                                    {/* priceing-table */}
                                    </div>
                                </div>
                                </div>{" "}
                                {/* tab-one */}
                                <div
                                role="tabpanel"
                                className="tab-pane tab-story fade "
                                id="tab-two"
                                >
                                <div className="row">
                                    <div className="col-sm-6">
                                    <div className="priceing-table">
                                        <h4>Premium</h4>
                                        <h5 className="amount">$65</h5>
                                        <p>
                                        Basic garden maintenance service includes the
                                        following procedures:
                                        </p>
                                        <ul className="option">
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Lawn mowing
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Weeding
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Hedge trimming
                                        </li>
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true" />
                                            Leaf clearance
                                        </li>
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true" />
                                            vy and removal
                                        </li>
                                        </ul>{" "}
                                        {/* option */}
                                        <a href="#" className="btn btn-primary">
                                        Select
                                        </a>
                                    </div>{" "}
                                    {/* priceing-table */}
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="priceing-table">
                                        <h4>Basic</h4>
                                        <h5 className="amount">$55</h5>
                                        <p>
                                        Basic garden maintenance service includes the
                                        following procedures:
                                        </p>
                                        <ul className="option">
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Lawn mowing
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Weeding
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Hedge trimming
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Leaf clearance
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            vy and removal
                                        </li>
                                        </ul>{" "}
                                        {/* option */}
                                        <a href="#" className="btn btn-primary">
                                        Select
                                        </a>
                                    </div>{" "}
                                    {/* priceing-table */}
                                    </div>
                                </div>
                                </div>{" "}
                                {/* tab-two */}
                                <div role="tabpanel" className="tab-pane fade" id="tab-three">
                                <div className="row">
                                    <div className="col-sm-6">
                                    <div className="priceing-table">
                                        <h4>Basic</h4>
                                        <h5 className="amount">$55</h5>
                                        <p>
                                        Basic garden maintenance service includes the
                                        following procedures:
                                        </p>
                                        <ul className="option">
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Lawn mowing
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Weeding
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Hedge trimming
                                        </li>
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true" />
                                            Leaf clearance
                                        </li>
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true" />
                                            vy and removal
                                        </li>
                                        </ul>{" "}
                                        {/* option */}
                                        <a href="#" className="btn btn-primary">
                                        Select
                                        </a>
                                    </div>{" "}
                                    {/* priceing-table */}
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="priceing-table">
                                        <h4>Premium</h4>
                                        <h5 className="amount">$95</h5>
                                        <p>
                                        Basic garden maintenance service includes the
                                        following procedures:
                                        </p>
                                        <ul className="option">
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Lawn mowing
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Weeding
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Hedge trimming
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            Leaf clearance
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" />
                                            vy and removal
                                        </li>
                                        </ul>{" "}
                                        {/* option */}
                                        <a href="#" className="btn btn-primary">
                                        Select
                                        </a>
                                    </div>{" "}
                                    {/* priceing-table */}
                                    </div>
                                </div>
                                </div>{" "}
                                {/* tab-three */}
                            </div>{" "}
                            {/* tab-content */}
                            </div>{" "}
                            {/* priceing-wrapper */}
                        </div>
                        {/*  priceing-section */}
                        </div>{" "}
                        {/* right-bar */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
