import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Booking({ title }) {
  return (
    <Box
      component='section'
      id='booking'
      sx={{
        position: 'relative',

        '&:before': {
          content: "''",
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '10%',
          background:
            'linear-gradient(to bottom, rgba(30 ,31, 67,1), rgba(30 ,31, 67,0))'
        },
        '&:after': {
          content: "''",
          position: 'absolute',
          bottom: -1,
          width: '100%',
          height: '10%',
          background:
            'linear-gradient(to top, rgba(30 ,31, 67,1), rgba(30 ,31, 67,0))'
        }
      }}
    >
      <Image
        src='/bg1.png'
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
        <div id='calendar_container'></div>
      </Container>
    </Box>
  )
}
