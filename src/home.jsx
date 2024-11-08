/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'


function Home() {
  return (
    <div>
      {/* HEADER */}
        <Header />
      {/* HERO */}
        <Hero />
      {/* Category */}
        <Category />
      {/* MostSearchedCar */}
        <MostSearchedCar />
      {/* InfoSection */}
        <InfoSection />
      {/* Footer */}
        <Footer />
    </div>
  )
}

export default Home