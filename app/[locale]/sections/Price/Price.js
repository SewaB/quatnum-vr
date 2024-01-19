import PriceContainer from './PriceContainer'

import { useTranslations } from 'next-intl'

export default function Price() {
  const t = useTranslations('price')

  const content = {
    title: t('title'),
    subtitle: t('subtitle'),
    vrSessionTitle: t('vrSessionTitle'),
    vrSessionDuration: t('vrSessionDuration'),
    vrSessionButton: t('vrSessionButton'),
    giftCardTitle: t('giftCardTitle'),
    giftCardDuration: t('giftCardDuration'),
    giftCardButton: t('giftCardButton'),
    eventTitle: t('eventTitle'),
    eventInfo1: t('eventInfo1'),
    eventInfo2: t('eventInfo2'),
    eventButton: t('eventButton')
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
