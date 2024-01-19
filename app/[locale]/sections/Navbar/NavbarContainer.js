'use client'
import React from 'react'
import Image from 'next/image'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import MenuIcon from '@mui/icons-material/Menu'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Socials from '../../components/Socials'
import Link from 'next-intl/link'
export default function NavbarContainer({ content, locale }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  const navitems = [
    { title: content.about, id: 'about' },
    { title: content.price, id: 'price' },
    { title: content.certificate, id: 'price' },
    { title: content.event, id: 'price' },
    { title: content.contacts, id: 'contacts' }
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Button
        href='#header'
        variant='text'
        sx={{
          height: 40,
          width: '140px',
          my: 2
        }}
      >
        <Image
          src='/logoText.svg'
          priority
          quality={100}
          fill
          alt=''
          style={{ objectFit: 'contain' }}
        />
      </Button> */}
      <List>
        {navitems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ color: '#fff' }} href={'#' + item.id}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Socials />
    </Box>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar
          component='nav'
          position='fixed'
          sx={{
            bgcolor: '#19191e',
            boxShadow: 'unset',
            top: '15px',
            left: 0,
            margin: 'auto',
            maxWidth: 800,
            borderRadius: '12px'
          }}
        >
          <Container maxWidth='lg' disableGutters={true}>
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  mr: 'auto'
                }}
              >
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>

                  {/* <Button
                    href='#header'
                    variant='text'
                    sx={{
                      display: { md: 'none' },
                      color: '#fff',
                      textTransform: 'capitalize'
                    }}
                  >
                    <Image
                      src='/logoText.svg'
                      priority
                      quality={100}
                      width={130}
                      height={40}
                      alt=''
                      style={{ objectFit: 'contain' }}
                    />
                  </Button> */}
                </Box>

                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' }
                  }}
                >
                  <NavbarItem link='#price'>{content.price}</NavbarItem>
                  <NavbarItem link='#price'>{content.certificate}</NavbarItem>
                  <NavbarItem link='#price' noBorder>
                    {content.event}
                  </NavbarItem>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: { xs: 'none', md: 'initial' }
                  }}
                >
                  <NavbarItem link='#about'>{content.about}</NavbarItem>

                  <NavbarItem link='#contacts' noBorder>
                    {content.contacts}
                  </NavbarItem>
                </Box>

                {/* {locale === 'en' ? (
                  <Link href='/' locale='lt'>
                    <NavbarItem noBorder lang>
                      <Image src='/lt.svg' alt='' width={24} height={24} />
                    </NavbarItem>
                  </Link>
                ) : (
                  <Link href='/' locale='en'>
                    <NavbarItem noBorder lang>
                      <Image src='/gb.svg' alt='' width={24} height={24} />
                    </NavbarItem>
                  </Link>
                )} */}

                <Button
                  href='#booking'
                  variant='text'
                  sx={{
                    color: '#f3c82e',
                    textTransform: 'capitalize',
                    backgroundColor: 'transparent',
                    fontWeight: 'bold',
                    border: '2px solid transparent',
                    py: { xs: 0.5, sm: 0.75 },
                    '&:hover': {
                      // color: '#fbdd54',
                      borderColor: '#f3c82e'
                    }
                  }}
                >
                  {content.book}
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              backgroundColor: 'rgba(30, 31, 67 , 1)',
              width: 240
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  )
}

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

function NavbarItem({ link, children, noBorder, lang }) {
  return (
    <Button
      href={link}
      variant='text'
      sx={{
        color: '#f3c82e',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        minWidth: lang ? '40px' : null,

        '&:before': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 0,
          height: 2,
          backgroundColor: '#fbdd54',
          transition: '0.3s all'
        },
        '&:hover': {
          color: '#fbdd54',
          transform: 'scale(1.05)',
          '&:before': {
            width: '100%'
          }
        }
      }}
    >
      {children}
    </Button>
  )
}
