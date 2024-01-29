import { useTranslations } from 'next-intl'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import RevealOnAppear from '../components/RevealOnAppear'
import Image from 'next/image'

export default function Descirption() {
  const t = useTranslations('advantages')

  return (
    <Box component='section' id='advantages' sx={{ position: 'relative' }}>
      <Container
        maxWidth='lg'
        disableGutters={true}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: { xs: 6, md: 12 }
        }}
      >
        <div className='advantages-light'>
          <div />
          <div />
        </div>
        <RevealOnAppear transitionDelay='250ms'>
          <Typography
            variant='h6'
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', md: ' 2rem' },
              fontWeight: 'bold',
              mb: { xs: '3rem', sm: '4rem' }
            }}
          >
            {t('title')}
          </Typography>
        </RevealOnAppear>
        <RevealOnAppear transitionDelay='300ms'>
          <Box
            sx={{
              display: 'flex',
              gap: '2px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
            className='laks'
          >
            <Item
              title={t('multiplayer')}
              text={t('multiplayerText')}
              image='/advantages/multiplayer.webp'
            />
            <Item
              title={t('quest')}
              text={t('questText')}
              image='/advantages/quests.jpg'
            />
            <Item
              title={t('racing')}
              text={t('racingText')}
              image='/advantages/racing.jpg'
            />
            <Item
              title={t('sport')}
              text={t('sportText')}
              image='/advantages/sports.jpg'
            />
          </Box>
        </RevealOnAppear>
        <RevealOnAppear transitionDelay='600ms'>
          <Box
            sx={{
              display: 'flex',
              gap: '2px',
              mt: '-57px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
            className='paks'
          >
            <Item
              title={t('space')}
              text={t('spaceText')}
              image='/advantages/spacing.jpg'
            />
            <Item
              title={t('fight')}
              text={t('fightText')}
              image='/advantages/fight.jpg'
            />
            <Item
              title={t('kids')}
              text={t('kidsText')}
              image='/advantages/kids.jpg'
            />
          </Box>
        </RevealOnAppear>
      </Container>
    </Box>
  )
}

const Item = ({ title, text, image }) => (
  <Box className='advantages-item'>
    <Box className='advantages-item_block'>
      <Image
        src={image}
        fill
        alt=''
        style={{ opacity: 0.3, objectFit: 'cover' }}
      />
      <Typography
        sx={{
          color: '#f3c82e',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textDecoration: 'underline',
          zIndex: 1
        }}
      >
        {title}
      </Typography>
      <Box className='advantages-item_text'>
        <Typography>{text}</Typography>
      </Box>
    </Box>
  </Box>
)
