/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function DoubleSection() {
  return (
    <>
    <section className="double-section">
        <div className="container">
            <h2 className="hidden">title</h2>
            <div className="row">
            <div className="col-md-12">
                <div className="partner-section">
                <div className="partner-wrapper">
                    <ul className="text-center">
                    <li>
                        <img src="images/partner/p1.jpg" alt="" />
                    </li>
                    <li>
                        <img src="images/partner/p2.jpg" alt="" />
                    </li>
                    <li>
                        <img src="images/partner/p3.jpg" alt="" />
                    </li>
                    <li>
                        <img src="images/partner/p4.jpg" alt="" />
                    </li>
                    <li>
                        <img src="images/partner/p5.jpg" alt="" />
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
