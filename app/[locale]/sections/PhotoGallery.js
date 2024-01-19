'use client'

import React, { useState } from 'react'

import FsLightbox from 'fslightbox-react'

import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Swiper from '../components/Swiper'
import { SwiperSlide } from 'swiper/react'

export default function PhotoGallery({ title }) {
  const [toggler, setToggler] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const photosArray = [
    {
      image: 'photo9.jpg'
    },
    {
      image: 'photo1.webp'
    },
    {
      image: 'photo5.jpg'
    },
    {
      image: 'photo3.png'
    },
    {
      image: 'photo6.jpg'
    },
    {
      image: 'photo4.webp'
    },
    {
      image: 'photo7.jpg'
    },
    {
      image: 'photo8.jpg'
    }
  ]

  const breakpoints = {
    319: {
      slidesPerView: 1.25,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }

  return (
    <Box component='section' id='photo-gallery'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 6, md: 12 },
          color: '#fff',

          '& .swiper-slide.swiper-slide-active': {
            transform: 'scale(1.1)',
            transition: '0.3s all',
            '& img': {
              opacity: 1
            }
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: '4rem'
          }}
        >
          <Typography
            variant='h6'
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', tb: '2.4rem' },
              fontWeight: 'bold'
            }}
          >
            {title}
          </Typography>
        </Box>
        <Swiper breakpoints={breakpoints} autoplayDelay={3500}>
          {photosArray.map((item, i) => (
            <SwiperSlide
              key={i}
              onClick={() => {
                setToggler(!toggler)
                setSelectedImageIndex(i)
              }}
              style={{ width: '500px', marginRight: 50 }}
            >
              <Box
                sx={{
                  my: 1.5,
                  height: 350,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  cursor: 'pointer',

                  '& img': {
                    objectFit: 'cover',
                    opacity: 0.4,
                    transition: '0.3s all'
                  },

                  '&:hover': {
                    boxShadow: '5px 9px 7px -1px rgba(117, 252, 206,0.3)',
                    '& img': {
                      opacity: 1
                    }
                  }
                }}
              >
                <Image
                  src={'/photos/' + item.image}
                  fill
                  alt=''
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <FsLightbox
        toggler={toggler}
        sourceIndex={selectedImageIndex}
        sources={photosArray.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: { xs: '100vw!important', md: '80vw!important' },
              height: { xs: '100vh!important', md: '80vh!important' },
              position: 'relative',
              pointerEvents: 'none'
            }}
          >
            <Image
              src={'/photos/' + item.image}
              fill
              sizes='100vw'
              style={{ objectFit: 'contain' }}
              alt=''
            />
          </Box>
        ))}
      />
    </Box>
  )
}
