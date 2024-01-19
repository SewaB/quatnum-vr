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
    <Box component='section' id='descirption'>
      <Container
        maxWidth='lg'
        sx={{
          py: { xs: 6, md: 12 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '2rem', md: '4rem' }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <RevealOnAppear>
            <Typography
              variant='h6'
              sx={{
                fontSize: { xs: '1.8rem', tb: '2.4rem' },
                fontWeight: 'bold'
              }}
            >
              {t('title')}
            </Typography>
          </RevealOnAppear>
        </Box>

        <Grid container columnSpacing={{ sm: 4, md: 8 }} rowSpacing={4}>
          <Grid item xs={12} sm={6} md={5} sx={{ ml: { xs: '', md: '8.33%' } }}>
            <RevealOnAppear transitionDelay='250ms'>
              <AboutItem
                title={t('playLearnConnect')}
                image='/vrWorld.svg'
                text={t('playLearnConnectText')}
              />
            </RevealOnAppear>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <RevealOnAppear transitionDelay='500ms'>
              <AboutItem
                title={t('experienceFuture')}
                image='/reality.svg'
                text={t('experienceFutureText')}
              />
            </RevealOnAppear>
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ sm: 4, md: 8 }} rowSpacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{ ml: { xs: '', md: '16.66%' } }}
          >
            <RevealOnAppear transitionDelay='750ms'>
              <AboutItem
                title={t('noLimits')}
                image='/around.svg'
                text={t('noLimitsText')}
              />
            </RevealOnAppear>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <RevealOnAppear transitionDelay='1000ms'>
              <AboutItem
                title={t('muchEasier')}
                image='/pacman.svg'
                text={t('muchEasierText')}
              />
            </RevealOnAppear>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const AboutItem = ({ title, image, text }) => (
  <Box
    sx={{
      display: 'flex',
      gap: { xs: '1.5rem', md: '2rem' },
      alignItems: 'flex-start'
    }}
  >
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        border: '3px solid #75fcce',
        borderRadius: '50%',
        boxShadow: '0px 0px 12px -2px #fff'
      }}
    >
      <Box
        sx={{
          width: { xs: '2.5rem', md: '3rem' },
          height: { xs: '2.5rem', md: '3rem' },
          position: 'relative'
        }}
      >
        <Image src={image} fill alt='' />
      </Box>
    </Box>

    <div>
      <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography>{text}</Typography>
    </div>
  </Box>
)
