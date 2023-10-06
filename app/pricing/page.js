/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import SubscribeSection from '../components/SubscribeSection'

export default function page() {
  return (
    <div className="aboutPage">
        <section className="header-title section-padding">
            <div className="container">
                <h2 className="title">Pricings</h2>
                <span className="sub-title">
                <Link href="/">Home</Link> / <span>Pricings</span>
                </span>
            </div>
        </section>
        <section className="priceing-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                <h2>
                    Our <span className="text-color">Pricing</span>
                </h2>
                </div>
                <div className="priceing-wrapper ">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#tab-one" role="tab" data-toggle="tab">
                                        <img src="images/shop/i1.png" alt="" />
                                        <div className="tab-content">
                                            <h5>Garden Maintenance</h5>
                                            <p>From <span className="text-color">$55</span> for a team of 2 professionals</p>
                                        </div>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab-two" role="tab" data-toggle="tab">
                                        <img src="images/shop/i2.png" alt="" />
                                        <div className="tab-content">
                                            <h5>Landscaping &amp; Design</h5>
                                            <p>
                                                From <span className="text-color">$55</span> for a team of 2
                                                professionals
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab-three" role="tab" data-toggle="tab">
                                        <img src="images/shop/i3.png" alt="" />
                                        <div className="tab-content">
                                            <h5>Lawn Care</h5>
                                            <p>
                                                From <span className="text-color">$55</span> for a team of 2
                                                professionals
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab-four" role="tab" data-toggle="tab">
                                        <img src="images/shop/i4.png" alt="" />
                                            <div className="tab-content">
                                                <h5>Tree Surgery</h5>
                                                <p>
                                                    From <span className="text-color">$55</span> for a team of 2
                                                    professionals
                                                </p>
                                            </div>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab-five" role="tab" data-toggle="tab">
                                        <img src="images/shop/i5.png" alt="" />
                                            <div className="tab-content">
                                                <h5>Outdoor Repairs</h5>
                                                <p>
                                                    From <span className="text-color">$55</span> for a team of 2
                                                    professionals
                                                </p>
                                            </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content text-center">
                                <div role="tabpanel"className="tab-pane fade in active" id="tab-one">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Basic</h4>
                                                <h5 className="amount">$55</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>
                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true" /> Lawn mowing</li>
                                                    <li><i className="fa fa-check" aria-hidden="true" />Weeding</li>
                                                    <li><i className="fa fa-check" aria-hidden="true" />Hedge trimming</li>
                                                    <li><i className="fa fa-times" aria-hidden="true" />Leaf clearance</li>
                                                    <li><i className="fa fa-times" aria-hidden="true" />Ivy Cleaning and removal</li>
                                                </ul>
                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                        <div className="priceing-table">
                                            <h4>Premium</h4>
                                            <h5 className="amount">$95</h5>
                                            <p>
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                            </ul>
                                            <a href="#" className="btn btn-primary">
                                            Select
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane tab-story fade " id="tab-two">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <div className="priceing-table">
                                            <h4>Premium</h4>
                                            <h5 className="amount">$65</h5>
                                            <p>
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab-three">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <div className="priceing-table">
                                            <h4>Basic</h4>
                                            <h5 className="amount">$55</h5>
                                            <p>
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab-four">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <div className="priceing-table">
                                            <h4>Basic</h4>
                                            <h5 className="amount">$55</h5>
                                            <p>
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab-five">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <div className="priceing-table">
                                            <h4>Basic</h4>
                                            <h5 className="amount">$55</h5>
                                            <p>
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                            Basic garden maintenance service includes the following
                                            procedures:
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SubscribeSection/>
    </div>
  )
}
