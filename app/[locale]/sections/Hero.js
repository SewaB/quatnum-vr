import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import RevealOnAppear from '../components/RevealOnAppear'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section id='hero' className='hero-section'>
      <Toolbar id='header' />
      <Image
        src='/hero.jpg'
        fill
        style={{ objectFit: 'cover', opacity: 0.6 }}
        quality={100}
        priority
        alt=''
        sizes='(max-width: 768px) 100vh, 100vw'
      />

      <Container maxWidth='lg' className='hero-section_container'>
        <RevealOnAppear>
          <Typography
            sx={{
              alignSelf: 'center',
              justifyContent: 'center',
              color: '#f8bdc7',
              fontSize: '2.4rem',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: 'normal',
              margin: 'auto'
            }}
          >
            {/* {t('title')} */}
            Quantum<span style={{ color: '#fbdd54' }}>VR</span>
            <br />
            {/* <span className='lol'>{t('subtitle')}</span> */}
          </Typography>
        </RevealOnAppear>

        {/* <RevealOnAppear transitionDelay='150ms'>
          <Button
            href='#booking'
            sx={{
              width: '10rem',
              px: 2,
              py: 1,
              position: 'absolute',
              bottom: { xs: '21vh', md: '14vh' },
              zIndex: 1,
              border: '2px solid #75fcce',
              borderRadius: '1.6rem',
              color: '#75fcce',
              '&:hover': {
                backgroundColor: 'rgba(117, 252, 206,0.15)',
                boxShadow: '0px 0px 12px 0px #75fcce'
              }
            }}
          >
            {t('button')}
          </Button>
        </RevealOnAppear> */}
      </Container>
    </section>
  )
}
