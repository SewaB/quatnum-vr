import { useTranslations } from 'next-intl'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Socials from '../components/Socials'

import WatchLaterIcon from '@mui/icons-material/WatchLater'
import RoomIcon from '@mui/icons-material/Room'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'

export default function Footer() {
  const t = useTranslations('contacts')

  return (
    <Box component='section' id='contacts' sx={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { sm: 'center', md: 'flex-start' },

          minWidth: '300px',
          p: 4,
          pt: 3,
          pb: 2,
          gap: '0.5rem',

          position: { md: 'absolute' },
          right: '5rem',
          top: '3.5rem',

          backgroundColor: { md: '#3a7e67' },
          borderRadius: { md: '1rem' },
          color: '#fff',
          zIndex: 1
        }}
      >
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'column' },
            alignItems: 'flex-start',
            rowGap: '0.5rem',
            columnGap: '3rem'
          }}
        >
          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <WatchLaterIcon />
            <div>
              <Typography>{t('workingHours')}</Typography>
              <Typography>
                <b>11:00-23:00</b>
              </Typography>
            </div>
          </Box>

          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <RoomIcon />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {/* <Typography gutterBottom>{t('address')}</Typography> */}
              <Typography
                gutterBottom
                component='a'
                href='https://maps.app.goo.gl/qAgYH9gsYzzjJELL6'
                target='_blank'
                referrerPolicy='no-referrer'
              >
                <b>WOW VR {t('club')}</b>
                <br />
                Šopeno g. 5. Vilnius
              </Typography>
              <Typography
                component='a'
                href='https://maps.app.goo.gl/MbgFtKnjG8FA9tUJ6'
                target='_blank'
                referrerPolicy='no-referrer'
              >
                <b>Max Fun VR {t('club')}</b>
                <br />
                Naugarduko g. 41. Vilnius
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'column' },
            alignItems: 'flex-start',
            rowGap: '0.5rem',
            columnGap: '3rem'
          }}
        >
          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <CallIcon />
            <div>
              <Typography>{t('phone')}</Typography>
              <Typography component='a' href='tel:37062264360'>
                <b>+370 62 26 4 360</b>
              </Typography>
            </div>
          </Box>
          {/* <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <EmailIcon />
            <div>
              <Typography>{t('email')}</Typography>
              <Typography component='a' href='mailto:@gmail.com'>
                wowvr@gmail.com
              </Typography>
            </div>
          </Box> */}
        </Box>

        <Socials />
      </Box>

      <Box
        sx={{
          // filter: 'hue-rotate(300deg)',
          height: { xs: '60vh', md: '70vh' },
          maxHeight: '700px'
          // opacity: 0.875
        }}
      >
        <iframe
          src='https://www.google.com/maps/d/embed?mid=1QmLb3aibIvCoX2SaCR3z-KxGLjYjhE0&ehbc=2E312F&noprof=1'
          width='100%'
          height='100%'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='map'
        />
      </Box>
    </Box>
  )
}
