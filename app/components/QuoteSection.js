import React from 'react'

export default function QuoteSection() {
  return (
    <>
    <section className="quote-section">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-md-offset-5">
                    <div className="section-title">
                    <h2>
                        Request for a <span className="text-color">Quick Quote</span>
                    </h2>
                    </div>{" "}
                    {/* section-title */}
                    <form className="quote-form text-left">
                    <div className="row">
                        <div className="col-sm-6">
                        <div className="form-group">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            required=""
                            placeholder="First name.."
                            />
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                            <input
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            required=""
                            placeholder="Email"
                            />
                        </div>
                        </div>
                        <div className="col-sm-12">
                        <div className="selection">
                            <select name="one" className="dropdown-select">
                            <option value="">- Select Service -</option>
                            <option value={1}>Service one</option>
                            <option value={2}>Service two</option>
                            <option value={3}>Service three</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="subscribeBtn" type="submit">
                        Get Quote
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
