'use client'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Swiper from '../../components/Swiper'
import { SwiperSlide } from 'swiper/react'

export default function ReviewsContainer({ reviewsArray, title }) {
  const breakpoints = {
    1920: {
      slidesPerView: 1,
      spaceBetween: 50
    }
  }

  return (
    <Box component='section' id='reviews'>
      <Container
        maxWidth='md'
        disableGutters={true}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 6, md: 12 },
          pb: { xs: 12, md: 18 },

          color: '#fff'
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
              fontWeight: 'bold',
              zIndex: 1,
              textAlign: 'center'
            }}
          >
            {title}
          </Typography>
        </Box>
        <Swiper breakpoints={breakpoints} autoplayDelay={4000} isReview={true}>
          {reviewsArray.map((review, i) => (
            <SwiperSlide key={i} style={{ width: '300px', marginRight: 20 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 2
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <Image
                    src={'/avatars/' + review.avatar}
                    width={60}
                    height={60}
                    style={{
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                    quality={100}
                    alt=''
                  />

                  <Typography sx={{ fontSize: '1.4rem' }}>
                    {review.name}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    my: 3,
                    textAlign: 'center'
                  }}
                >
                  — {review.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: '1rem',
                    backgroundColor: 'rgb(55, 162, 182,0.9)',
                    borderRadius: '1rem',
                    p: 2,
                    px: 3,
                    maxWidth: 500
                  }}
                >
                  {review.img && (
                    <Image
                      src={'/avatars/' + review.img}
                      width={140}
                      height={140}
                      style={{ objectFit: 'cover' }}
                      sizes='200px'
                      alt=''
                    />
                  )}

                  <Typography>{review.text}</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}
