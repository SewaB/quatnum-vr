import { useTranslations } from 'next-intl'

import Image from 'next/image'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import RevealOnAppear from '../components/RevealOnAppear'

export default function Descirption() {
  const t = useTranslations('descirption')

  return (
    <Box component='section' id='descirption' sx={{ position: 'relative' }}>
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: { xs: 6, md: 12 },
          gap: { xs: '2rem', md: '4rem' }
        }}
      >
        <div className='dash-description-pattern' />

        <RevealOnAppear transitionDelay='600ms'>
          <Typography
            variant='h6'
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', tb: '2.4rem' },
              fontWeight: 'bold'
            }}
          >
            {t('title')}
          </Typography>
        </RevealOnAppear>
        <Grid container spacing={2}>
          <RevealOnAppear transitionDelay='600ms'>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                title={t('timeTravel')}
                text={t('timeTravelText')}
                image='/description/time.svg'
                className='animate-time'
              />
            </Grid>
          </RevealOnAppear>
          <RevealOnAppear transitionDelay='900ms'>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                title={t('immersiveSoundscape')}
                text={t('immersiveSoundscapeText')}
                image='/description/sound.svg'
                className='animate-sound'
              />
            </Grid>
          </RevealOnAppear>

          <RevealOnAppear transitionDelay='1200ms'>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                title={t('unleashCreativity')}
                text={t('unleashCreativityText')}
                image='/description/paint.svg'
                className='animate-paint'
              />
            </Grid>
          </RevealOnAppear>
          <RevealOnAppear transitionDelay='1500ms'>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                title={t('fitnessFun')}
                text={t('fitnessFunText')}
                image='/description/sports.svg'
                className='animate-snowboard'
              />
            </Grid>
          </RevealOnAppear>
        </Grid>
      </Container>
    </Box>
  )
}

const Item = ({ title, image, text, className }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(90deg, #2f2f33, #14161a)',
      p: 2,
      height: '100%',
      gap: '1rem',
      maxWidth: '400px',
      mx: 'auto'
    }}
  >
    <Image src={image} width={36} height={36} alt='' className={className} />
    <Typography
      sx={{
        color: '#f3c82e',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        lineHeight: '1.3'
      }}
    >
      {title}
    </Typography>
    <Typography>{text}</Typography>
  </Box>
)
