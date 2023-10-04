import React from 'react'

export default function OffcanvasMenu() {
  return (
    <>
        <div id="offcanvas-menu" className="visible-xs visible-sm">
            <span className="close-menu">
                <i className="fa fa-times" aria-hidden="true" />
            </span>
            <ul className="menu-wrapper">
                <li>
                <a className="active dropmenu" href="#">
                    Home <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropDown sub-menu">
                    <li>
                    <a className="active single-dropmenu" href="#">
                        Multipage Layout{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="index.html">Multipage One</a>
                        </li>
                        <li>
                        <a className="active" href="index-two.html">
                            Multipage Two
                        </a>
                        </li>
                        <li>
                        <a href="index-three.html">Multipage Three</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Singlepage Layout{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="single-one.html">Singlepage One</a>
                        </li>
                        <li>
                        <a href="single-two.html">Singlepage Two</a>
                        </li>
                        <li>
                        <a href="single-three.html">Singlepage Three</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Boxed Multipage Layout{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="box-layout-one.html">Boxed Multipage One</a>
                        </li>
                        <li>
                        <a href="box-layout-two.html">Boxed Multipage Two</a>
                        </li>
                        <li>
                        <a href="box-layout-three.html">Boxed Multipage Three</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Boxed Singlepage Layout{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="single-box-one.html">Boxed Singlepage One</a>
                        </li>
                        <li>
                        <a href="single-box-two.html">Boxed Singlepage Two</a>
                        </li>
                        <li>
                        <a href="single-box-three.html">Boxed Singlepage Three</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Dark Layout <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="dark-layout-one.html">Dark Layout One</a>
                        </li>
                        <li>
                        <a href="dark-layout-two.html">Dark Layout Two</a>
                        </li>
                        <li>
                        <a href="dark-layout-three.html">Dark Layout Three</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        RTL Layout <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="rtl-layout-one.html">RTL Layout One</a>
                        </li>
                        <li>
                        <a href="rtl-layout-two.html">RTL Layout Two</a>
                        </li>
                        <li>
                        <a href="rtl-layout-three.html">RTL Layout Three</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                {/* end of li */}
                <li>
                <a className="dropmenu" href="#">
                    About <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropDown sub-menu">
                    <li>
                    <a href="about.html">About One</a>
                    </li>
                    <li>
                    <a href="about-two.html">About Two</a>
                    </li>
                    <li>
                    <a href="about-three.html">About Three</a>
                    </li>
                </ul>
                {/* end of dropdown */}
                </li>
                {/* end of li */}
                <li>
                <a className="dropmenu" href="#">
                    Service <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropDown sub-menu">
                    <li>
                    <a href="service.html">All Services</a>
                    </li>
                    <li>
                    <a href="service-one.html">Service One</a>
                    </li>
                    <li>
                    <a href="service-two.html">Service Two</a>
                    </li>
                    <li>
                    <a href="service-three.html">Service Three</a>
                    </li>
                    <li>
                    <a href="service-four.html">Service Four</a>
                    </li>
                    <li>
                    <a href="service-five.html">Service Five</a>
                    </li>
                    <li>
                    <a href="service-six.html">Service Six</a>
                    </li>
                </ul>
                {/* end of dropdown */}
                </li>
                {/* end of li */}
                <li>
                <a className="dropmenu" href="#">
                    Project <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropDown sub-menu">
                    <li>
                    <a href="gallery.html">Project</a>
                    </li>
                    <li>
                    <a href="gallery-two.html">Project-Two</a>
                    </li>
                    <li>
                    <a href="gallery-three.html">Project-Three</a>
                    </li>
                    <li>
                    <a href="gallery-four.html">Project-Four</a>
                    </li>
                    <li>
                    <a href="gallery-five.html">Project-Five</a>
                    </li>
                    <li>
                    <a href="gallery-six.html">Project-Six</a>
                    </li>
                    <li>
                    <a href="gallery-seven.html">Project-Seven</a>
                    </li>
                    <li>
                    <a href="gallery-eight.html">Project-Eight</a>
                    </li>
                </ul>
                {/* end of dropdown */}
                </li>
                {/* end of li */}
                <li>
                <a className="dropmenu" href="#">
                    Pages <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropDown sub-menu">
                    <li>
                    <a className="single-dropmenu" href="#">
                        Event <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="event.html">Event One</a>
                        </li>
                        <li>
                        <a href="event-two.html">Event Two</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Icon <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="icon.html">Icon One</a>
                        </li>
                        <li>
                        <a href="icon-two.html">Icon Two</a>
                        </li>
                        <li>
                        <a href="icon-three.html">Icon Three</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Pricing <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="pricing.html">Pricing One</a>
                        </li>
                        <li>
                        <a href="pricing-two.html">Pricing Two</a>
                        </li>
                        <li>
                        <a href="pricing-three.html">Pricing Three</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Team <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="team.html">Team One</a>
                        </li>
                        <li>
                        <a href="team-two.html">Team Two</a>
                        </li>
                        <li>
                        <a href="team-three.html">Team Three</a>
                        </li>
                        <li>
                        <a href="team-four.html">Team Four</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Faq <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="faq.html">Faq One</a>
                        </li>
                        <li>
                        <a href="faq-six.html">Faq Two</a>
                        </li>
                        <li>
                        <a href="faq-nine.html">Faq Three</a>
                        </li>
                        <li>
                        <a href="faq-ten.html">Faq Four</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a href="blog.html">Blog</a>
                    </li>
                    <li>
                    <a href="calender.html">Calender</a>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Shop <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="shop.html">Shop</a>
                        </li>
                        <li>
                        <a href="cart.html">Cart</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        Comming Soon <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="comming-soon.html">Style One</a>
                        </li>
                        <li>
                        <a href="comming-soon-two.html">Style Two</a>
                        </li>
                        <li>
                        <a href="comming-soon-three.html">Style Three</a>
                        </li>
                        <li>
                        <a href="comming-soon-four.html">Style Four</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a className="single-dropmenu" href="#">
                        404 Page <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <ul className="single-dropDown sub-menu">
                        <li>
                        <a href="404.html">Style One</a>
                        </li>
                        <li>
                        <a href="404-two.html">Style Two</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                {/* end of dropdown */}
                </li>
                {/* end of li */}
                <li>
                <a className="dropmenu" href="#">
                    Contact <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropDown sub-menu">
                    <li>
                    <a href="contact.html">Contact</a>
                    </li>
                    <li>
                    <a href="contact-two.html">Contact-Two</a>
                    </li>
                    <li>
                    <a href="contact-three.html">Contact-Three</a>
                    </li>
                </ul>
                {/* end of dropdown */}
                </li>
                {/* end of li */}
            </ul>
        </div>
    </>
  )
}
