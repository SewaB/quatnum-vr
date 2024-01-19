'use client'
import Image from 'next/image'
import Box from '@mui/material/Box'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
export default function GamesContainer({ gamesArray, rtl, speed }) {
  return (
    <div style={{ width: '100%' }}>
      <Swiper
        dir={rtl ? 'rtl' : null}
        spaceBetween={20}
        slidesPerView={'auto'}
        speed={speed}
        autoplay={{
          delay: 1,
          disableOnInteraction: false
        }}
        initialSlide={1}
        modules={[Autoplay]}
        className='games-swiper'
      >
        {gamesArray.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: '230px',
              marginRight: rtl ? null : '20px',
              marginLeft: rtl ? '20px' : null
            }}
          >
            <Box
              sx={{
                my: 1,
                height: '150px',
                // borderRadius: '0.8rem',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                position: 'relative',
                width: '230px',
                overflow: 'hidden',
                backgroundColor: '#000',
                '&:hover': {
                  boxShadow: '0px 0px 15px -2px rgba(117, 252, 206,1)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <Image src={'/games/' + item.image} sizes='250px' fill alt='' />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
