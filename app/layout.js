/* eslint-disable @next/next/no-css-tags */
import { Inter } from 'next/font/google'
import Script from "next/script"
import Header from './components/Header'
import Footer from './components/Footer'
import OffcanvasMenu from './components/OffcanvasMenu'

import Head from 'next/head'
import MoveTop from './components/MoveTop'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gardenia - Landscaping & Gardening Services',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico"/>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"  />
        <link rel="stylesheet" href="css/animate.min.css"/>
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="owl-carrosel/owl.carousel.min.css"/>
        <link rel="stylesheet" href="owl-carrosel/owl.theme.default.min.css"/>
        <link rel="stylesheet" href="css/offcanvas-menu.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        
      </head>
      
      <body className="homePageOne">
        <Header/>
        {children}
        <Footer/>
        <OffcanvasMenu/>
        <Script type="text/javascript" src="js/jquery.js"/>
        <Script type="text/javascript" src="bootstrap/js/bootstrap.min.js"/>
        <Script type="text/javascript" src="js/jquery.inview.min.js"/>
        <Script type="text/javascript" src="js/portfolio.js"/>
        <Script type="text/javascript" src="js/wow.js"/>
        <Script type="text/javascript" src="js/lightbox.js"/>
        <Script type="text/javascript" src="owl-carrosel/owl.carousel.min.js"/>
        <Script type="text/javascript" src="js/slider.js"/>
        <Script type="text/javascript" src="js/script.js"/>
      </body>
    </html>
  )
}
