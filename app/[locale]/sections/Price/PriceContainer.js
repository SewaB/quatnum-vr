'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
import Image from 'next/image'

export default function Price({ content }) {
  return (
    <section component='section' id='price'>
      <Container
        maxWidth='lg'
        disableGutters={true}
        sx={{
          pt: { xs: 6, md: 9 },
          py: { xs: 6, md: 12 },
          position: 'relative',
          px: 4
        }}
      >
        <div className='lekson' />
        <div className='price-light'>
          <div />
          <div />
          <div />
        </div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: { xs: '2rem', sm: '3rem' }
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: '1.8rem', md: ' 2rem' },
              fontWeight: 'bold',
              color: '#fff'
            }}
          >
            {content.title}
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: '1.4rem',

              color: '#000',
              backgroundColor: '#fcd222',
              fontWeight: 'bold',
              position: 'relative',
              borderRadius: 0,
              textAlign: 'center',
              py: { xs: 2, sm: 4 },
              px: { xs: 2, sm: 5 },
              lineHeight: 'normal',
              clipPath:
                'polygon(0 0, 20% 0, 20% 8%, 50% 8%, 50% 0%, 95% 0, 100% 30%, 100% 70%, 90% 70%, 90% 75%, 100% 75%, 100% 100%, 80% 100%, 80% 90%, 70% 90%, 70% 100%, 5% 100%, 0 70%)'
            }}
          >
            {content.saleText}
          </Typography>
          <Typography sx={{ mt: 3, fontSize: '1.2rem', color: '#bdbdbd' }}>
            {content.subtitle}
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Item title={content.vrSession} buttonText={content.book}>
              <Image
                src='/images/player.jpg'
                fill
                style={{
                  objectFit: 'cover',
                  // pointerEvents: 'none',
                  opacity: 0.3,
                  zIndex: -1,
                  filter: 'blur(1px)'
                }}
                alt=''
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center',
                    lineHeight: 'normal'
                  }}
                >
                  {content.weekDay}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1ch',
                    fontSize: { xs: '1.7rem', sm: '2rem' },
                    fontWeight: 'bold',
                    color: '#ec318a',
                    justifyContent: 'center'
                  }}
                >
                  {/* <Typography
                    component='span'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      fontSize: { xs: '1.7rem', sm: '2rem' },

                      fontWeight: 'bold',
                      '&:before': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(25deg)'
                      },
                      '&:after': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(335deg)'
                      }
                    }}
                  >
                    350
                  </Typography> */}
                  300 {content.uah}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center',
                    lineHeight: 'normal'
                  }}
                >
                  {content.weekDayEvening}
                  <br />
                  {content.andWeekend}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1ch',
                    fontSize: { xs: '1.7rem', sm: '2rem' },
                    fontWeight: 'bold',
                    color: '#ec318a',
                    justifyContent: 'center'
                  }}
                >
                  {/* <Typography
                    component='span'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      fontSize: { xs: '1.7rem', sm: '2rem' },

                      fontWeight: 'bold',
                      '&:before': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(25deg)'
                      },
                      '&:after': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(335deg)'
                      }
                    }}
                  >
                    400
                  </Typography> */}
                  350 {content.uah}
                </Typography>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} md={4}>
            <Item title={content.vrParty} buttonText={content.book}>
              <Image
                src='/images/party.jpg'
                fill
                style={{
                  objectFit: 'cover',
                  // pointerEvents: 'none',
                  opacity: 0.25,
                  zIndex: -1,
                  filter: 'blur(1px)'
                }}
                alt=''
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center'
                  }}
                >
                  {content.rentClub}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center'
                  }}
                >
                  {content.closeEvent}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center'
                  }}
                >
                  {content.partyInclude}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center'
                  }}
                >
                  {content.fromHours}
                </Typography>
              </Box>

              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1ch',
                  fontSize: { xs: '1.7rem', sm: '2rem' },
                  fontWeight: 'bold',
                  color: '#ec318a',
                  justifyContent: 'center'
                }}
              >
                {content.from}{' '}
                {/* <Typography
                  component='span'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontSize: { xs: '1.7rem', sm: '2rem' },

                    fontWeight: 'bold',
                    '&:before': {
                      content: "''",
                      left: '-20%',
                      width: '130%',
                      height: '2.5px',
                      backgroundColor: '#fcd222',
                      position: 'absolute',
                      transform: 'rotate(25deg)'
                    },
                    '&:after': {
                      content: "''",
                      left: '-20%',
                      width: '130%',
                      height: '2.5px',
                      backgroundColor: '#fcd222',
                      position: 'absolute',
                      transform: 'rotate(335deg)'
                    }
                  }}
                >
                  2000
                </Typography> */}
                1500 {content.uah}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item title='PS 5' buttonText={content.book}>
              <Image
                src='/images/ps.jpg'
                fill
                style={{
                  objectFit: 'cover',
                  // pointerEvents: 'none',
                  opacity: 0.3,
                  zIndex: -1,
                  objectPosition: 'left',
                  filter: 'blur(1px)'
                }}
                alt=''
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center',
                    lineHeight: 'normal'
                  }}
                >
                  {content.weekDay}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1ch',
                    fontSize: { xs: '1.7rem', sm: '2rem' },
                    fontWeight: 'bold',
                    color: '#ec318a',
                    justifyContent: 'center'
                  }}
                >
                  {/* <Typography
                    component='span'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      fontSize: { xs: '1.7rem', sm: '2rem' },

                      fontWeight: 'bold',
                      '&:before': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(25deg)'
                      },
                      '&:after': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(335deg)'
                      }
                    }}
                  >
                    250
                  </Typography> */}
                  200 {content.uah}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    textAlign: 'center',
                    lineHeight: 'normal'
                  }}
                >
                  {content.weekDayEvening}
                  <br />
                  {content.andWeekend}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1ch',
                    fontSize: { xs: '1.7rem', sm: '2rem' },
                    fontWeight: 'bold',
                    color: '#ec318a',
                    justifyContent: 'center'
                  }}
                >
                  {/* <Typography
                    component='span'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      fontSize: { xs: '1.7rem', sm: '2rem' },

                      fontWeight: 'bold',
                      '&:before': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(25deg)'
                      },
                      '&:after': {
                        content: "''",
                        left: '-20%',
                        width: '130%',
                        height: '2.5px',
                        backgroundColor: '#fcd222',
                        position: 'absolute',
                        transform: 'rotate(335deg)'
                      }
                    }}
                  >
                    300
                  </Typography> */}
                  250 {content.uah}
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 0 }} justifyContent='center'>
          <Grid item xs={12} md={6}>
            <Item
              title={content.certificate}
              fullWidth
              buttonText={content.buy}
            >
              <Box
                sx={{
                  width: { xs: '130px', sm: '160px' },
                  height: { xs: '110px', sm: '135px' },
                  position: 'relative',
                  opacity: { xs: '0.4', sm: '0.9' },
                  zIndex: -1,
                  position: 'absolute',
                  right: { xs: '0.5rem', sm: '0.75rem' },
                  bottom: { xs: '1.5rem', sm: '2rem' },
                  transform: 'scale(-1,1)'
                }}
              >
                <Image
                  src='/images/gift.png'
                  fill
                  style={{
                    objectFit: 'cover'
                    // pointerEvents: 'none',
                  }}
                  alt=''
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: '1.7rem', sm: '2rem' },
                  fontWeight: 'bold',
                  color: '#ec318a',
                  mt: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1ch',
                  fontSize: { xs: '1.7rem', sm: '2rem' },
                  fontWeight: 'bold',
                  color: '#ec318a',
                  justifyContent: 'center'
                }}
              >
                {/* <Typography
                  component='span'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontSize: { xs: '1.7rem', sm: '2rem' },

                    fontWeight: 'bold',
                    '&:before': {
                      content: "''",
                      left: '-20%',
                      width: '130%',
                      height: '2.5px',
                      backgroundColor: '#fcd222',
                      position: 'absolute',
                      transform: 'rotate(25deg)'
                    },
                    '&:after': {
                      content: "''",
                      left: '-20%',
                      width: '130%',
                      height: '2.5px',
                      backgroundColor: '#fcd222',
                      position: 'absolute',
                      transform: 'rotate(335deg)'
                    }
                  }}
                >
                  400
                </Typography> */}
                350 {content.uah}
              </Typography>
            </Item>
          </Grid>
        </Grid>

        {/* <Box
          <Row>
            <Typography>PlayStation 5</Typography>
            <Typography>200</Typography>
            <Typography>250</Typography>
          </Row>
          <Row>
            <Typography>Подарочный сертификат</Typography>
            <Typography>300</Typography>
            <Typography>350</Typography>
          </Row>
          
        </Box> */}
      </Container>
    </section>
  )
}

const Item = ({ children, title, fullWidth, buttonText }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      gap: { xs: '1.5rem', sm: '2rem' },

      height: '100%',

      border: '2px solid #ec318a',

      p: 2,
      pb: 3,
      pt: 4,
      textAlign: 'center',
      borderRadius: '0.6rem',
      // backdropFilter: 'blur(5px)',
      // backgroundColor: 'rgba(97 ,239, 255,0.125)',
      // backgroundColor: '#000',
      transition: '0.2s all',
      maxWidth: { xs: '400px', md: fullWidth ? '100%' : '400px' },
      mx: 'auto',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'rgba(0,0,0,0.6)',
      '&:hover': {
        boxShadow:
          'inset 0px 0px 0.2rem 0px #f7038c, 0px 0px 1.5rem 0px #f7038c',
        transform: { md: 'scale(1.05)' }
      }
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        gap: { xs: '1.5rem', sm: '2rem' },

        height: '100%',
        zIndex: 1
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontSize: { xs: '1.5rem', sm: '1.8rem' },
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: 'normal',
          '&:after': {
            content: "''",
            position: 'absolute',
            height: '4px',
            background: '#ec318a',
            width: '100px',
            bottom: { xs: '-0.8rem', sm: '-1rem' },
            borderRadius: '3px'
          }
        }}
      >
        {title}
      </Typography>
      {children}
      <Button
        href='#booking'
        sx={{
          color: '#fcd222',
          fontSize: '1rem',
          textTransform: 'unset',
          borderRadius: '0.4rem',
          px: 3,
          border: '2px solid #fcd222',
          mt: 'auto',
          fontSize: '1.05rem',
          fontWeight: 'bold',

          '&:hover': {
            backgroundColor: '#fcd222',
            color: '#000',
            boxShadow:
              'inset 0px 0px 0.2rem 0px #fcd222, 0px 0px 1.5rem 0px #fcd222'
          }
        }}
      >
        {buttonText}
      </Button>
    </Box>
  </Box>
)
