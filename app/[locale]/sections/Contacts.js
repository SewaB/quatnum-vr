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
          py: 3,
          gap: '0.5rem',

          position: { md: 'absolute' },
          right: '5rem',
          top: '5rem',

          background: 'linear-gradient(90deg, #2f2f33, #14161a)',
          borderRadius: { md: '1rem' },
          color: '#fff',
          zIndex: 1,

          boxShadow: {
            md: 'inset 0px 0px 6px -1px #f7038c, 0px 0px 6px -1px #f7038c'
          }
        }}
      >
        <Typography
          variant='h6'
          gutterBottom
          sx={{
            fontSize: { xs: '1.8rem', md: ' 2rem' },
            fontWeight: 'bold',
            color: '#f8bdc7'
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
            <Typography
              component='a'
              href='https://maps.app.goo.gl/NshoFpUCBcsRvVXD9'
              target='_blank'
              referrerPolicy='no-referrer'
            >
              {/* {t('address')} */}
              {t('addressMetro')}
              <br />
              <b>{t('addressCity')}</b>
            </Typography>
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
              <Typography
                component='a'
                //</div>href='tel:37062264360'
              >
                <b>+380 00 00 0 000</b>
              </Typography>
            </div>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <EmailIcon />
            <div>
              <Typography>{t('email')}</Typography>
              <Typography component='a' href='mailto:quantumvr24@gmail.com'>
                <b>quantumvr@gmail.com</b>
              </Typography>
            </div>
          </Box>
        </Box>

        <Socials />
      </Box>

      <Box
        sx={{
          filter: 'hue-rotate(300deg)',
          height: { xs: '60vh', md: '70vh' },
          maxHeight: '700px'
        }}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16374.060514215302!2d30.489435491875746!3d50.463394282938275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce7a03bf537f%3A0x17dcca88cc887811!2sTatarska%20St%2C%201%D0%92%2C%201V%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2sge!4v1705869117918!5m2!1sen!2sge'
          title='map'
          width='100%'
          height='100%'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </Box>
    </Box>
  )
}
