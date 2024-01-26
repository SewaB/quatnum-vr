import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Booking({ title }) {
  return (
    <Box component='section' id='booking' className='fade-section'>
      <Image
        src='/images/bg1.png'
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.2
        }}
        alt=''
      />

      <Container
        maxWidth='lg'
        disableGutters={true}
        sx={{
          py: { xs: 6, md: 12 },
          color: '#fff',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: '1rem', sm: '2rem' }
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: '1.8rem', tb: '2.4rem' },
              fontWeight: 'bold'
            }}
          >
            {title}
          </Typography>
        </Box>
        {/* <div id='calendar_container'></div> */}
        <Image
          src='/images/bookingPlaceholder.jpg'
          // fill'
          width={800}
          height={800}
          style={{
            objectFit: 'fill',
            width: '100%'
          }}
          alt=''
        />
      </Container>
    </Box>
  )
}
