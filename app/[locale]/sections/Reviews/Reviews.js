import ReviewsContainer from './ReviewsContainer'

import { useTranslations } from 'next-intl'

export default function Reviews() {
  const t = useTranslations('reviews')

  const reviewsArray = [
    {
      name: 'Tere',
      title: t('reviewTitle1'),
      text: t('reviewText1'),
      avatar: 'avatar1.jpg',
      img: 'review1.jpg'
    },

    {
      name: 'Dainius',
      title: t('reviewTitle2'),
      text: t('reviewText2'),
      avatar: 'avatar2.png',
      img: 'review2.png'
    },
    {
      name: 'Indre',
      title: t('reviewTitle4'),
      text: t('reviewText4'),
      avatar: 'avatar4.jpg',
      img: 'review4.png'
    },
    {
      name: 'Eglė',
      title: t('reviewTitle3'),
      text: t('reviewText3'),
      avatar: 'avatar3.jpg',
      img: 'review3.jpg'
    },
    {
      name: 'Paulius',
      title: t('reviewTitle5'),
      text: t('reviewText5'),
      avatar: 'avatar5.webp',
      img: 'review5.png'
    },
    {
      name: 'Erika',
      title: t('reviewTitle6'),
      text: t('reviewText6'),
      avatar: 'avatar6.webp',
      img: 'review6.jpg'
    },
    {
      name: 'Mindaugas',

      title: t('reviewTitle7'),
      text: t('reviewText7'),
      avatar: 'avatar7.jpg',
      img: 'review7.png'
    }
  ]

  return <ReviewsContainer reviewsArray={reviewsArray} title={t('title')} />
}
