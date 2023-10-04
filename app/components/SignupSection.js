import React from 'react'

export default function SignupSection() {
  return (
    <>
        <section className="signup-section">
            <div className="container">
                <div className="signup-wrapper">
                <h3>
                    All services are 30% off for the
                    <span className="color">“International Gardening Week”</span>
                </h3>
                <button className="btn btn-default pull-right">Sign Up</button>
                </div>{" "}
                {/* signup-wrapper */}
            </div>
        </section>
    </>
  )
}
