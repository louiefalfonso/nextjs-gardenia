/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';
import TopHeader from './TopHeader';
import Navigation from './Navigation';


export default function Header() {
  return (
    <>
        <div className="header-section">
            <TopHeader/>
            <Navigation/>
        </div>
    </>
  )
}
