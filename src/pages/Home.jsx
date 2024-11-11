import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonial from '../components/Testimonial'
import ParallaxSection from '../components/Parralax'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className="">
        <div className='sticky top-0 bg-[#F9FEFF] dark:bg-[#171716] z-50 '>
        <Header />
        </div>
        <div>
            <Hero />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <div>
          <Testimonial />
        </div>
        <div className=''>
          <ParallaxSection />
        </div>
        <div >
          <Newsletter />
        </div>
        <div>
          <Footer />
        </div>
       
       
    </div>
  )
}

export default Home
