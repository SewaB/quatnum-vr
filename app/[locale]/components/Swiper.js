'use client'

import { Swiper } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default function SwiperComponent({
  children,
  breakpoints,
  autoplayDelay,
  isReview
}) {
  const params = {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 2,
    navigation: isReview ? true : false,
    pagination: isReview
      ? false
      : {
          clickable: 'true'
        },
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: true
    },
    breakpoints: breakpoints
  }

  return (
    <div style={{ width: '100%' }}>
      <Swiper modules={[Navigation, Pagination, Autoplay]} {...params}>
        {children}
      </Swiper>
    </div>
  )
}
