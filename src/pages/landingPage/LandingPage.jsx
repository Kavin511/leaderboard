import React, { Fragment } from 'react'
import About from '../../components/about/About'
import ContactUs from '../../components/contact_us/ContactUs'
import { Header } from '../../components/header/Header'
import { Home } from '../../components/home/Home'

export const LandingPage = () => {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <About/>
      <ContactUs/>
    </Fragment>
  )
}
