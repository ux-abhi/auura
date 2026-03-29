import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Gallery from '@/components/sections/Gallery'
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
        <Features />
        <Gallery />
        <Specs />
        <Preorder />
      </main>
      <Footer />
    </>
  )
}
