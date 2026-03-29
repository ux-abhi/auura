import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import HowItWorks from '@/components/sections/HowItWorks'
import TechReveal from '@/components/sections/TechReveal'
import Features from '@/components/sections/Features'
import Gallery from '@/components/sections/Gallery'
import Designs from '@/components/sections/Designs'
import Specs from '@/components/sections/Specs'
import Preorder from '@/components/sections/Preorder'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <TechReveal />
        <Features />
        <Gallery />
        <Designs />
        <Specs />
        <Preorder />
      </main>
      <Footer />
    </>
  )
}
