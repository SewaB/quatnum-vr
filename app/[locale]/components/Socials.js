import Image from 'next/image'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

export default function Socials() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',

        gap: '0.5rem',
        flex: 1,
        // my: 1,
        width: '100%'
      }}
    >
      <IconButton
        component='a'
        // href='https://www.instagram.com/wowvr.lt'
        target='_blank'
        referrerPolicy='no-referrer'
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(143, 223, 223,0.15)'
          }
        }}
      >
        <Image src='/socials/instagram.svg' width={35} height={35} alt='' />
      </IconButton>
      <IconButton
        component='a'
        // href='https://www.facebook.com/profile.php?id=61552966916997'
        target='_blank'
        referrerPolicy='no-referrer'
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(143, 223, 223,0.15)'
          }
        }}
      >
        <Image src='/socials/facebook.svg' width={35} height={35} alt='' />
      </IconButton>
      <IconButton
        component='a'
        // href='https://www.tiktok.com/@wowvr.vilnius'
        target='_blank'
        referrerPolicy='no-referrer'
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(143, 223, 223,0.15)'
          }
        }}
      >
        <Image src='/socials/tiktok.svg' width={35} height={35} alt='' />
      </IconButton>
    </Box>
  )
}
