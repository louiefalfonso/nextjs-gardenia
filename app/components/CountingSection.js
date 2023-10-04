import React from 'react'

export default function CountingSection() {
  return (
    <>
        <section className="counting-section text-center">
            <div className="container">
                <h2 className="hidden">title</h2>
                <div className="counting-pusher">
                <div className="row">
                    <div className="col-md-4 col-sm-64">
                    <div className="counting-wrapper">
                        <div className="count-description">
                        <span className="timer">25</span>
                        </div>
                        <p>Years of experience</p>
                    </div>{" "}
                    {/* counting-wrapper */}
                    </div>
                    <div className="col-md-4 col-sm-64">
                    <div className="counting-wrapper">
                        <div className="count-description">
                        <span className="timer">48</span>
                        </div>
                        <p>Team Members</p>
                    </div>{" "}
                    {/* counting-wrapper */}
                    </div>
                    <div className="col-md-4 col-md-offset-0 col-sm-4">
                    <div className="counting-wrapper last-wrapper">
                        <div className="count-description">
                        <span className="timer">33</span>
                        </div>
                        <p>Awards Wins</p>
                    </div>{" "}
                    {/* counting-wrapper */}
                    </div>
                </div>
                </div>{" "}
                {/* /.counting-pusher */}
            </div>
        </section>
    </>
  )
}
