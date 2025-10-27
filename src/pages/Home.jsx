import React from 'react'
import { HeroSection } from '../components/Landing/HeroSection'
import { HowItWorks } from '../components/Landing/HowItWorks'
import { Features } from '../components/Landing/Features'
import { Testimonials } from '../components/Landing/Testimonials'
import { CTA } from '../components/Landing/CTA'
import { Footer } from '../components/Landing/Footer'

export function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}