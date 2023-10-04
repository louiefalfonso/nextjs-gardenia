/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function GrowingSection() {
  return (
    <>
        <section className="growing-section section-padding">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 visible-sm visible-xs">
                    <div className="caption">
                    <img src="images/instrument.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-7 col-sm-12">
                    <div className="content-wrapper">
                    <h3>
                        Cultivating companies with a love for gardening as green as the
                        gardens they grow.
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do
                        eiusmod tempor incididun ut labore et dolore. Perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem ape riam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <button className="btn btn-primary">Read More</button>
                    <button className="btn btn-default">Our History</button>
                    </div>{" "}
                    {/* content-wrapper */}
                </div>
                <div className="col-md-5 hidden-sm hidden-xs">
                    <div className="caption wow slideInRight" data-wow-delay="0.2s">
                    <img src="images/instrument.jpg" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </section>

    </>
  )
}
