import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Gallery1 from '@/components/Gallery1'
import React from 'react'
import Gallery2 from '@/components/Gallery2'
import Gallery3 from '@/components/Gallery3'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Gallery1 />
      <Gallery2 />
      <Gallery3 />
      <Banner />
      <Footer />
    </div>
  )
}

export default page