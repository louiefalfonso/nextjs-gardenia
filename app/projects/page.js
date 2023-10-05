import React from 'react'
import Link from 'next/link'
import ProjectSection from '../components/ProjectSection'
import QuoteSection from '../components/QuoteSection'

export default function page() {
  return (
    <div className="aboutPage">
        <section className="header-title section-padding">
            <div className="container">
                <h2 className="title">Projects</h2>
                <span className="sub-title">
                <Link href="/">Home</Link> / <span>Projects</span>
                </span>
            </div>
        </section>
        <ProjectSection/>
        <QuoteSection/>
    </div>
  )
}
