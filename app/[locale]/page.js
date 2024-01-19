import Navbar from './sections/Navbar/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Advantages from './sections/Advantages'
import Games from './sections/Games/Games'
import Descirption from './sections/Descirption'
import PhotoGallery from './sections/PhotoGallery'
import Price from './sections/Price/Price'
import Rules from './sections/Rules'
import Booking from './sections/Booking'
import Reviews from './sections/Reviews/Reviews'
import Contacts from './sections/Contacts'
import Footer from './sections/Footer'

import { useTranslations } from 'next-intl'
export default function Home() {
  const t = useTranslations()

  return (
    <main className='main'>
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <Games />
      <Descirption />
      <Rules />
      <PhotoGallery title={t('photo.title')} />
      <Price />
      <Booking title={t('booking.title')} />
      <Reviews />
      <Contacts />
      <Footer />
    </main>
  )
}
