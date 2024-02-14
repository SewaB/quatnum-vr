import NavbarContainer from './NavbarContainer'

import { useTranslations, useLocale } from 'next-intl'

export default function Navbar({ isBooking }) {
  const t = useTranslations('navbar')
  const locale = useLocale()

  const content = {
    about: t('about'),
    price: t('price'),
    certificate: t('certificate'),
    event: t('event'),
    contacts: t('contacts'),
    faq: t('faq'),
    book: t('book'),
    games: t('games')
  }

  return (
    <NavbarContainer content={content} locale={locale} isBooking={isBooking} />
  )
}
