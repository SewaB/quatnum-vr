import NavbarContainer from './NavbarContainer'

import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
export default function Navbar() {
  const t = useTranslations('navbar')
  const locale = useLocale()

  const content = {
    about: t('about'),
    price: t('price'),
    certificate: t('certificate'),
    event: t('event'),
    contacts: t('contacts'),
    book: t('book')
  }

  return <NavbarContainer content={content} locale={locale} />
}
