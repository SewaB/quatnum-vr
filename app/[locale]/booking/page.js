import Navbar from '../sections/Navbar/Navbar'
import Booking from '../sections/Booking'
import Footer from '../sections/Footer'

import { useTranslations } from 'next-intl'

export default function BookingPage() {
  const t = useTranslations()

  return (
    <main className='main'>
      <Navbar isBooking />

      <Booking
        isBooking
        title={
          <>
            {t('booking.singlePageTitle')}
            <br />
            <span style={{ color: '#fcd222' }}>
              {t('booking.singlePageTitleSub')}
            </span>
          </>
        }
      />

      <Footer />
    </main>
  )
}
