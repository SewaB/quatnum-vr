import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Booking({ title, isBooking }) {
  return (
    <Box component='section' id='booking' className='fade-section'>
      <Image
        src='/images/bg1.png'
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.1
        }}
        alt=''
      />

      <Container
        maxWidth='lg'
        disableGutters={true}
        sx={{
          py: { xs: 6, md: 12 },
          pt: isBooking ? { xs: 15, md: 18 } : null,
          color: '#fff',
          position: 'relative',
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: isBooking ? null : { xs: '1rem', sm: '2rem' }
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: '1.8rem', md: ' 2rem' },
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: isBooking ? '1.4' : null
            }}
          >
            {title}
          </Typography>
        </Box>
        <div id='calendar_container'></div>
      </Container>
    </Box>
  )
}
