import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import RevealOnAppear from '../components/RevealOnAppear'
import Box from '@mui/material/Box'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section id='hero' className='hero-section'>
      <Toolbar id='header' />
      <Image
        src='/images/hero.jpg'
        fill
        quality={100}
        style={{ opacity: 0.9, objectFit: 'cover' }}
        priority
        alt=''
        sizes='(max-width: 768px) 100vh, 100vw'
      />

      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',

          height: '100%',
          position: 'relative'
        }}
      >
        <Typography
          component='div'
          className='hero-text-animation'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: { md: '10rem' },
            left: { md: '1.5rem' },
            fontSize: { xs: '2rem', sm: '2.6rem', md: '3.5rem' },
            lineHeight: 1.4,
            textShadow: '1px 1px 8px black, 0 0 1em #f7038c, 0 0 0.4em blue',
            color: '#fcd222',
            textAlign: { xs: 'center', sm: 'left' },
            fontFamily: "'Silkscreen', sans-serif",
            '& span': {
              color: '#61efff'
            }
          }}
        >
          Welcome to
          <br />
          <span>virtual reality</span>
          {[1, 2, 3, 4].map((i) => (
            <Box
              component='p'
              sx={{
                position: 'absolute',
                transform: `translateZ(${i * -5}px)`
              }}
              key={i}
            >
              Welcome to
              <br />
              <span>virtual reality</span>
            </Box>
          ))}
        </Typography>
        <Typography
          href='#about'
          component='a'
          sx={{
            position: 'absolute',
            right: { sm: '0' },
            top: '2rem',

            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '0.9rem 1.5rem 0.8rem', sm: '2rem 1rem' },
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '0.4rem',
            textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #f7038c',
            boxShadow: {
              xs: '0px 0 60px 20px rgba(0, 0, 0, 0.4), -10px -10px 60px 20px rgba(0, 0, 0, 0.7), 10px 10px 60px 20px rgba(0, 0, 0, 0.7)',
              sm: '0px 0 120px 80px rgba(0, 0, 0, 0.4), -40px 0 120px 80px rgba(0, 0, 0, 0.7), 40px 0 120px 80px rgba(0, 0, 0, 0.7)'
            },

            color: '#f7038c',
            fontSize: { xs: '2.3rem', sm: '3.5rem' },
            fontWeight: 900,
            textAlign: 'center',

            '&:after': {
              content: "''",
              borderRadius: '0.4rem',
              width: '100%',
              left: 0,
              top: 0,
              height: '100%',
              position: 'absolute',
              border: '2px solid #f7038c',
              boxShadow:
                'inset 0px 0px 0.5em 0px #f7038c, 0px 0px 0.5em 0px #f7038c',
              animation: 'border-flicker 3s linear infinite',
              pointerEvents: 'none'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { sm: 'column' },
              animationDelay: '5s',
              WebkitTextStroke: '1px #fff5ff',
              lineHeight: '0.9'
            }}
          >
            <span>Q</span>
            <span>u</span>
            <span>a</span>
            <span>n</span>
            <span>t</span>
            <span>u</span>
            <span>m</span>
            <Box
              component='span'
              sx={{
                display: 'flex',
                flexDirection: { sm: 'column' },
                marginTop: { sm: '1rem' },
                color: '#fbdd54'
              }}
            >
              <span>V</span>
              <span>R</span>
            </Box>
          </Box>
        </Typography>
        <RevealOnAppear transitionDelay='150ms'>
          <Box
            sx={{
              zIndex: 1,
              position: 'absolute',
              bottom: { xs: '4rem', sm: '10rem' }
            }}
          >
            <Button className='glowing-btn' href='#booking'>
              <span className='glowing-txt'>
                {t('button').slice(0, 2)}
                <span className='faulty-letter'>{t('button').slice(2, 3)}</span>
                {t('button').slice(3)}
              </span>
            </Button>
          </Box>
        </RevealOnAppear>
      </Container>
    </section>
  )
}
