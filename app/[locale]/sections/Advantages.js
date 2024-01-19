import { useTranslations } from 'next-intl'

import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import RevealOnAppear from '../components/RevealOnAppear'

export default function Descirption() {
  const t = useTranslations('advantages')

  return (
    <Box component='section' id='advantages'>
      <Container
        maxWidth='sm'
        sx={{
          py: { xs: 6, md: 12 }
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            width: '500px',
            maxWidth: '100%',
            minHeight: '500px',
            display: 'flex',
            gap: { xs: '1rem', sm: 'unset' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: { sm: '2px solid #75fcce' },
            borderRadius: { sm: '50%' },
            position: 'relative'
          }}
        >
          <RevealOnAppear transitionDelay='250ms'>
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

          <Box
            sx={{
              display: 'flex',
              height: '100%',
              width: '100%',
              flexDirection: 'row',
              rowGap: '1rem',
              columnGap: '1.5rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('multiplayer')}
                image='/advantages/multiplayer.svg'
                position={{ left: 0, top: 0 }}
                transform='translate(10%,10%)'
              />
            </RevealOnAppear>
            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('treadmills')}
                image='/advantages/treadmill.svg'
                position={{ right: 0, top: 0 }}
                transform='translate(-10%,10%)'
              />
            </RevealOnAppear>

            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('freeRoaming')}
                image='/advantages/roaming.svg'
                position={{ right: 0 }}
                transform='translate(50%,-15%)'
              />
            </RevealOnAppear>

            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('raceSimulator')}
                image='/advantages/car.svg'
                position={{ left: 0 }}
                transform='translate(-50%,-15%)'
              />
            </RevealOnAppear>
            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('flightSimulator')}
                image='/advantages/flight.svg'
                position={{ bottom: 0 }}
                transform='translateY(50%)'
              />
            </RevealOnAppear>
            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('vrEscaperoom')}
                image='/advantages/escape.svg'
                position={{ top: 0 }}
                transform='translateY(-50%)'
              />
            </RevealOnAppear>
            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('vrGuns')}
                image='/advantages/gun.svg'
                position={{ bottom: 0, left: 0 }}
                transform='translate(10%,-10%)'
              />
            </RevealOnAppear>
            <RevealOnAppear transitionDelay='250ms'>
              <Item
                title={t('catering')}
                image='/advantages/cook.svg'
                position={{ bottom: 0, right: 0 }}
                transform='translate(-10%,-10%)'
              />
            </RevealOnAppear>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const Item = ({ title, image, position, transform }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: { xs: '100px', sm: '120px' },
      height: { xs: '100px', sm: '120px' },
      borderRadius: '50%',
      gap: '0.5rem',
      // backgroundColor: 'red',
      backgroundColor: '#1e1f43',

      position: { sm: 'absolute' },
      top: position?.top,
      left: position?.left,
      right: position?.right,
      bottom: position?.bottom,
      transform: { sm: transform ? transform : null }
    }}
  >
    <Image src={image} width={36} height={36} alt='' />
    <Typography
      sx={{ fontWeight: 'bold', textAlign: 'center', lineHeight: 'normal' }}
    >
      {title}
    </Typography>
  </Box>
)
