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
          py: { xs: 6, md: 12 }
        }}
      >
        <Grid container rowSpacing={6}>
          <Grid item xs={12} md={6}>
            <RevealOnAppear transitionDelay='250ms'>
              <Typography
                gutterBottom
                variant='h6'
                sx={{
                  fontSize: { xs: '1.8rem', tb: '2.4rem' },
                  fontWeight: 'bold'
                }}
              >
                {t('title')}
              </Typography>
            </RevealOnAppear>

            <RevealOnAppear>
              <Typography
                gutterBottom
                dangerouslySetInnerHTML={{ __html: t('text') }}
              />
            </RevealOnAppear>
          </Grid>
          <Grid item xs={12} md={6}>
            <RevealOnAppear transitionDelay='250ms'>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: '350px'
                }}
              >
                <Image
                  src='/helmet.webp'
                  fill
                  alt=''
                  style={{ objectFit: 'contain' }}
                  sizes='(max-width: 768px) 75vw, 100vw'
                />
              </Box>
            </RevealOnAppear>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
