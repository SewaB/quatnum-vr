import PriceContainer from './PriceContainer'

import { useTranslations } from 'next-intl'

export default function Price() {
  const t = useTranslations('price')

  const content = {
    title: t('title'),
    subtitle: t('subtitle'),
    vrSession: t('vrSession'),
    weekDay: t('weekDay'),
    weekDayEvening: t('weekDayEvening'),
    andWeekend: t('andWeekend'),
    vrParty: t('vrParty'),
    rentClub: t('rentClub'),
    closeEvent: t('closeEvent'),
    partyInclude: t('partyInclude'),

    uah: t('uah'),
    fromHours: t('fromHours'),
    from: t('from'),
    certificate: t('certificate'),
    book: t('book'),
    buy: t('buy')
  }

  const modalContent = {
    title: t('modalTitle'),
    phone: t('phone'),
    name: t('name'),
    date: t('date'),
    address: t('address'),
    comment: t('comment'),
    commentPlaceholder: t('commentPlaceholder'),
    button: t('button')
  }
  return <PriceContainer content={content} modalContent={modalContent} />
}
