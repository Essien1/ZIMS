import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Tickets from '../components/Tickets'
import Admission from '../components/Admission'


const Ticket = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage/>
        <Tickets/>
        {/* <Admission/>  */}
        <Footer />

    </div>
  )
}

export default Ticket