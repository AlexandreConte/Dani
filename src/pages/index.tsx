import Header from '@/components/Header'
import Page from '@/components/Shared/Page'
import WhatsAppContact from '@/components/WhatsAppContact'
import About from '@/components/About'
import Quote from '@/components/Quote'
import Clinic from '@/components/Clinic'
import Specializations from '@/components/Specializations'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Slogan from '@/components/Slogan'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <div>
      <SEO />
      <Page className='max-w-full overflow-x-hidden'>
        <WhatsAppContact />
        <Header />
        <Slogan />
        <main className="bg">
          <About />
          <Quote />
          <Clinic />
          <Specializations />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </Page>
    </div>
  )
}
