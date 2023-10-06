/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function MainSlider() {
  return (
    <>
        <section className="slider-section">
            <h2 className="hidden">title</h2>
            <div className="main-slider">
                <div id="main-slider-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <div className="slider-one" />
                            <div className="content text-center">
                                <div className="large-text" data-animation="animated fadeInDown">
                                We provide most authentic <br /> landscaping service
                                </div>
                                <div className="guard">
                                <p className="small-text" data-animation="animated fadeInDown">
                                    If the unpredictable British weather isn't enough to counter
                                    your <br /> desire to work outside, gardening is a great
                                    industry to get <br /> involved in.
                                </p>
                                </div>
                                <div className="link-button" data-animation="animated fadeInUp">
                                <a href="#" className="btn btn-primary">
                                    Our Services
                                </a>
                                </div>
                            </div>
                        </div>
                    <div className="item">
                        <div className="slider-two" />
                        <div className="content text-right">
                            <div className="large-text" data-animation="animated fadeInDown">
                            We provide most authentic <br /> landscaping service
                            </div>
                            <div className="guard">
                            <p className="small-text" data-animation="animated fadeInLeft">
                                If the unpredictable British weather isn't enough to counter
                                your <br /> desire to work outside, gardening is a great
                                industry to get <br /> involved in.
                            </p>
                            </div>
                            <div className="link-button" data-animation="animated fadeInUp">
                            <a href="#" className="btn btn-primary">
                                Our Services
                            </a>
                            </div>
                        </div>
                    </div>      
                    <div className="item">
                    <div className="slider-three" />
                    <div className="content text-left">
                        <div className="large-text" data-animation="animated fadeInDown">
                        We provide most authentic <br /> landscaping service
                        </div>
                        <div className="guard">
                        <p className="small-text" data-animation="animated fadeInRight">
                            If the unpredictable British weather isn't enough to counter
                            your <br /> desire to work outside, gardening is a great
                            industry to get <br /> involved in.
                        </p>
                        </div>
                        <div className="link-button" data-animation="animated fadeInUp">
                        <a href="#" className="btn btn-primary">
                            Our Services
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#main-slider-carousel" role="button" data-slide="prev">
                    <i className="fa fa-angle-left" aria-hidden="true" />
                </a>
                <a
                    className="right carousel-control"
                    href="#main-slider-carousel"
                    role="button"
                    data-slide="next"
                >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                </a>
                </div>
            </div>
        </section>

    </>
  )
}
