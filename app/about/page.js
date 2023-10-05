/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import CountingSection from '../components/CountingSection'
import ServiceSection from '../components/ServiceSection'
import ProjectSection from '../components/ProjectSection'
import TeamSection from '../components/TeamSection'
import BorderBreak from '../components/BorderBreak'
import WorkerSection from '../components/WorkerSection'
import DoubleSection from '../components/DoubleSection'
import TestimonialSection from '../components/TestimonialSection'

export default function page() {
  return (
    <div className="aboutPage">
        <section className="header-title section-padding">
            <div className="container">
                <h2 className="title">About Us</h2>
                <span className="sub-title">
                <Link href="/">Home</Link> / <span>About Us</span>
                </span>
            </div>
        </section>
        <section className="about-section">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 visible-sm visible-xs">
                    <div className="caption text-center">
                    <img src="images/men.png" alt="" />
                    </div>{" "}
                    {/* caption-wrapper */}
                </div>
                <div className="col-md-7">
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
                    <span className="sign">
                        <img src="images/sign.png" alt="" />
                    </span>
                    <h5>Payet Clause</h5>
                    <span className="position">Ceo, Gardenia</span>
                    </div>{" "}
                    {/* content-wrapper */}
                </div>
                <div className="col-md-5 hidden-sm hidden-xs">
                    <div className="caption-wrapper wow slideInRight">
                    <span className="caption">
                        <img src="images/men.png" alt="" />
                    </span>
                    </div>{" "}
                    {/* caption-wrapper */}
                </div>
                </div>
            </div>
        </section>
        <CountingSection/>
        <ServiceSection/>
        <ProjectSection/>
        <TeamSection/>
        <BorderBreak/>
        <WorkerSection/>
        <TestimonialSection/>
    </div>
  )
}
