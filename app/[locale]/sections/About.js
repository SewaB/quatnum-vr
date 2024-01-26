import { useTranslations } from 'next-intl'

import Image from 'next/image'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import RevealOnAppear from '../components/RevealOnAppear'

export default function About() {
  const t = useTranslations('about')

  return (
    <Box component='section' id='about'>
      <Container
        maxWidth='lg'
        sx={{
          pt: { xs: 6, md: 12 },
          pb: 6
        }}
      >
        <Grid container spacing={4}>
          <RevealOnAppear transitionDelay='300ms'>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '350px',
                  maxWidth: '600px',
                  mx: 'auto',

                  '&:before': {
                    content: "''",
                    border: '2px dashed #fcd222',
                    left: '-2rem',
                    top: '-2rem',
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                  },

                  '&:after': {
                    content: "''",
                    border: '2px dashed #ec318a',
                    right: '-0.5rem',
                    bottom: '-2rem',
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                  }
                }}
              >
                <Image
                  src='/images/aboutImg.png'
                  fill
                  alt=''
                  style={{ objectFit: 'contain' }}
                  sizes='(max-width: 768px) 75vw, 100vw'
                />
              </Box>
            </Grid>
          </RevealOnAppear>

          <RevealOnAppear transitionDelay='600ms'>
            <Grid item xs={12} md={6}>
              <Typography
                gutterBottom
                variant='h6'
                sx={{
                  fontSize: { xs: '1.8rem', tb: '2.4rem' },
                  fontWeight: 'bold',
                  marginTop: { xs: '1rem', sm: 'unset' }
                }}
              >
                {t('title').slice(0, -2)}
                <span style={{ color: '#fcd222' }}>{t('title').slice(-2)}</span>
              </Typography>

              <Typography
                gutterBottom
                dangerouslySetInnerHTML={{ __html: t('text') }}
              />
            </Grid>
          </RevealOnAppear>
        </Grid>
      </Container>

      <Container
        maxWidth='lg'
        sx={{
          pb: { xs: 6, md: 12 },
          pt: { xs: 0, md: 6 }
        }}
      >
        <Grid container rowSpacing={6}>
          <RevealOnAppear transitionDelay='600ms'>
            <Grid item xs={12} md={6}>
              <Typography
                gutterBottom
                variant='h6'
                sx={{
                  fontSize: { xs: '1.8rem', tb: '2.4rem' },
                  fontWeight: 'bold'
                }}
              >
                {t('subtitle')}
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: t('subtext')
                }}
              />
            </Grid>
          </RevealOnAppear>

          <RevealOnAppear transitionDelay='900ms'>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: '300px'
                }}
                className='helmet-animation'
              >
                <Image
                  src='/images/helmet.webp'
                  fill
                  alt=''
                  style={{ objectFit: 'contain' }}
                  sizes='(max-width: 768px) 75vw, 110vw'
                />
              </Box>
            </Grid>
          </RevealOnAppear>
        </Grid>
      </Container>
    </Box>
  )
}
