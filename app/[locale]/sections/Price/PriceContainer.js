'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import OrderModal from '../../components/OrderModal'

export default function Price({ content, modalContent }) {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <Box component='section' id='price' sx={{ position: 'relative' }}>
      <Container
        maxWidth='lg'
        disableGutters={true}
        sx={{
          pt: { xs: 6, md: 9 },
          py: { xs: 6, md: 12 },
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
            sx={{
              fontSize: { xs: '1.8rem', tb: '2.4rem' },
              fontWeight: 'bold'
            }}
          >
            {content.title}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: '1.4rem', tb: '2rem' },
              textAlign: 'center'
            }}
          >
            {content.subtitle}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: '50px',
            color: '#1e1f43'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              flexDirection: 'column',
              width: '425px',
              height: '350px',
              backgroundColor: '#75fcce',
              position: 'relative',
              clipPath: { md: 'polygon(0 0, 65% 0, 100% 100%, 35% 100%)' },
              maxWidth: { xs: '300px', md: 'initial' },
              transition: 'all 0.3s',
              borderRadius: { xs: '1.2rem', md: 'unset' },
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                textAlign: 'center',
                lineHeight: 'normal',
                '&:after': {
                  content: "''",
                  margin: '10px auto',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  borderRadius: '8px',
                  backgroundColor: '#1e1f43'
                }
              }}
            >
              {content.vrSessionTitle}
            </Typography>
            <Typography>{content.vrSessionDuration}</Typography>
            <Typography>&nbsp;</Typography>

            <Typography
              sx={{ fontWeight: 'bold', fontSize: '2rem', display: 'flex' }}
            >
              <Box
                component='span'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  '&:before': {
                    content: "''",
                    left: '-20%',
                    width: '130%',
                    height: '1.5px',

                    backgroundColor: 'red',
                    position: 'absolute',
                    transform: 'rotate(25deg)'
                  },
                  '&:after': {
                    content: "''",
                    left: '-20%',
                    width: '130%',
                    height: '1.5px',
                    backgroundColor: 'red',
                    position: 'absolute',
                    transform: 'rotate(335deg)'
                  }
                }}
              >
                20 €
              </Box>
              <span>&nbsp; 10 €</span>
            </Typography>
            <Button
              href='#booking'
              sx={{
                width: '150px',

                ml: { md: '25%' },
                position: 'absolute',
                bottom: 30,
                // color: '#fff',
                // border: 'none',
                backgroundColor: '#b40c9b',
                border: '2px solid #b40c9b',
                color: '#fff',
                borderRadius: '2rem',
                '&:hover': {
                  backgroundColor: '#7f0b6e',
                  borderColor: '#7f0b6e'
                }
              }}
            >
              {content.vrSessionButton}
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexDirection: 'column',

              pt: { md: 4 },

              width: '300px',
              height: '350px',
              // backgroundColor: '#37a2b6',
              backgroundColor: '#793FDF',
              clipPath: { md: 'polygon(50% 100%, 0 0, 100% 0)' },
              position: { xs: 'relative', md: 'absolute' },
              transition: 'all 0.3s',
              borderRadius: { xs: '1.2rem', md: 'unset' },

              color: '#fff',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                lineHeight: 'normal',
                '&:after': {
                  content: "''",
                  margin: '10px auto',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  borderRadius: '8px',
                  backgroundColor: '#fff'
                }
              }}
            >
              {content.giftCardTitle}
            </Typography>
            <Typography>{content.giftCardDuration}</Typography>
            <Typography
              sx={{ fontWeight: 'bold', fontSize: '2rem', display: 'flex' }}
            >
              <Box
                component='span'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  '&:before': {
                    content: "''",
                    left: '-20%',
                    width: '130%',
                    height: '1.5px',

                    backgroundColor: 'red',
                    position: 'absolute',
                    transform: 'rotate(25deg)'
                  },
                  '&:after': {
                    content: "''",
                    left: '-20%',
                    width: '130%',
                    height: '1.5px',
                    backgroundColor: 'red',
                    position: 'absolute',
                    transform: 'rotate(335deg)'
                  }
                }}
              >
                20 €
              </Box>
              &nbsp;10 €
            </Typography>
            <Button
              href='#booking'
              sx={{
                mt: { md: 3 },
                width: '100px',

                position: { xs: 'absolute', md: 'unset' },
                bottom: 30,
                // color: '#fff',
                // border: 'none',
                // backgroundColor: '#0c4eb4',
                // borderRadius: 0,

                backgroundColor: '#b40c9b',
                border: '2px solid #b40c9b',
                color: '#fff',
                borderRadius: '2rem',
                '&:hover': {
                  backgroundColor: '#7f0b6e',
                  borderColor: '#7f0b6e'
                }
              }}
            >
              {content.giftCardButton}
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',

              width: '425px',
              maxWidth: { xs: '300px', md: 'initial' },
              height: '350px',
              backgroundColor: '#75fcce',
              position: 'relative',
              clipPath: { md: 'polygon(35% 0, 100% 0, 65% 100%, 0 100%)' },
              transition: 'all 0.3s',
              borderRadius: { xs: '1.2rem', md: 'unset' },

              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                lineHeight: 'normal',
                '&:after': {
                  content: "''",
                  margin: '10px auto',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  borderRadius: '8px',
                  backgroundColor: '#1e1f43'
                }
              }}
            >
              {content.eventTitle}
            </Typography>
            <Typography>{content.eventInfo1}</Typography>
            <Typography>{content.eventInfo2}</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
              &nbsp;
            </Typography>
            <Button
              // onClick={() => setShowModal(true)}
              href='#contacts'
              sx={{
                width: '150px',
                mr: { md: '25%' },
                position: 'absolute',
                bottom: 30,
                // color: '#fff',
                // border: 'none',
                // backgroundColor: '#b40c9b',
                // borderRadius: 0,
                backgroundColor: '#3f55df',
                border: '2px solid #3f55df',
                color: '#fff',
                borderRadius: '2rem',
                '&:hover': {
                  backgroundColor: '#253385',
                  borderColor: '#253385'
                }
              }}
            >
              {content.eventButton}
            </Button>
          </Box>
        </Box>
      </Container>
      <OrderModal
        open={showModal}
        onClose={() => setShowModal(false)}
        content={modalContent}
      />
    </Box>
  )
}
